import 'dart:async';

import 'package:flutter/foundation.dart';
import 'package:flutter_blue_plus/flutter_blue_plus.dart';

import '../../core/utils/logger.dart';
import '../../data/models/ble_device.dart';
import '../../data/models/lock_status.dart';
import '../../services/bluetooth/ble_service.dart';
import '../../services/storage/storage_service.dart';

/// Provider for managing Bluetooth Low Energy operations
class BleProvider extends ChangeNotifier {
  final BleService _bleService = BleService();
  final StorageService _storageService = StorageService();
  
  // Callback to notify DeviceProvider when device names are saved
  Function()? _onDeviceNameSaved;

  // Expose BLE service for lifecycle management
  BleService get bleService => _bleService;
  
  /// Set callback for device name updates
  void setDeviceNameCallback(Function() callback) {
    _onDeviceNameSaved = callback;
  }

  // State variables
  bool _isInitialized = false;
  bool _isScanning = false;
  bool _isConnecting = false;
  bool _isVerifyingPin = false;
  bool _isAutoReconnecting = false;
  bool _isProcessingCommand =
      false; // New: Prevent button flickering during commands
  bool _isSwitchingDevice =
      false; // New: Prevent auto-unlock during device switching
  String? _autoReconnectStatus;
  String? _successMessage;
  Timer? _autoLockTimer;
  Timer? _processingTimeoutTimer;
  Timer? _commandThrottleTimer;
  DateTime? _lastCommandTime;
  DateTime? _lastLockCommandTime;
  BleDevice? _currentDevice;
  BluetoothConnectionState _connectionState =
      BluetoothConnectionState.disconnected;
  LockStatus? _lastStatus;
  String? _errorMessage;
  List<BleDevice> _discoveredDevices = [];

  // Getters
  bool get isInitialized => _isInitialized;
  bool get isScanning => _isScanning;
  bool get isConnecting => _isConnecting;
  bool get isVerifyingPin => _isVerifyingPin;
  bool get isAutoReconnecting => _isAutoReconnecting;
  bool get isProcessingCommand => _isProcessingCommand;
  bool get isSwitchingDevice => _isSwitchingDevice;
  String? get autoReconnectStatus => _autoReconnectStatus;
  String? get successMessage => _successMessage;
  BleDevice? get currentDevice => _currentDevice;
  BluetoothConnectionState get connectionState => _connectionState;
  LockStatus? get lastStatus => _lastStatus;
  String? get errorMessage => _errorMessage;
  List<BleDevice> get discoveredDevices => _discoveredDevices;
  bool get isConnected =>
      _connectionState == BluetoothConnectionState.connected;

  /// Initialize the BLE service
  Future<bool> initialize() async {
    try {
      if (kDebugMode) Logger.info('BLE Provider: Starting initialization...');
      _errorMessage = null;
      notifyListeners();

      final success = await _bleService.initialize();
      if (kDebugMode)
        Logger.info(
          'BLE Provider: BLE service initialization result: $success',
        );

      if (success) {
        _isInitialized = true;
        if (kDebugMode) Logger.info('BLE Provider: Set _isInitialized to true');

        // Listen to streams
        _listenToStreams();
        if (kDebugMode) Logger.info('BLE Provider: Streams listening set up');

        // Try auto-reconnect after initialization with optimized delay
        // This prevents interference with app startup
        Future.delayed(const Duration(milliseconds: 1000), () {
          if (_isInitialized) {
            if (kDebugMode)
              Logger.info(
                'BLE Provider: Attempting auto-reconnect after initialization',
              );
            tryAutoReconnect();
          }
        });

        notifyListeners();
        if (kDebugMode)
          Logger.info(
          'BLE Provider: Initialization complete, notifying listeners',
        );
        return true;
      } else {
        _errorMessage = 'Failed to initialize Bluetooth service';
        if (kDebugMode) Logger.info('BLE Provider: Initialization failed');
        notifyListeners();
        return false;
      }
    } catch (e) {
      _errorMessage = 'Initialization error: $e';
      if (kDebugMode) Logger.info('BLE Provider: Initialization error: $e');
      notifyListeners();
      return false;
    }
  }

  /// Listen to BLE service streams
  void _listenToStreams() {
    // Listen to discovered devices
    _bleService.devicesStream.listen((devices) {
      _discoveredDevices = devices;
      notifyListeners();
    });

    // Listen to connection changes
    _bleService.connectionStream.listen((device) {
      _currentDevice = device;
      _connectionState = device != null
          ? BluetoothConnectionState.connected
          : BluetoothConnectionState.disconnected;
      
      // Clear processing state on disconnection
      if (_connectionState == BluetoothConnectionState.disconnected) {
        _isProcessingCommand = false;
        _isSwitchingDevice = false;
        _cancelProcessingTimeout();
        _commandThrottleTimer?.cancel();
        _commandThrottleTimer = null;
        _lastCommandTime = null;
        _lastLockCommandTime = null;
        _errorMessage = null; // Clear any error messages
        if (kDebugMode)
          Logger.info('Connection lost - clearing all processing states');
      } else if (_connectionState == BluetoothConnectionState.connected) {
        // Reset switching device flag when connected
        if (_isSwitchingDevice) {
          _isSwitchingDevice = false;
          if (kDebugMode) Logger.info('Device switching completed');
        }
      }
      
      notifyListeners();

      // Auto-fetch status on connect to populate UI details
      if (_connectionState == BluetoothConnectionState.connected) {
        // Reduced delay for faster status fetch
        Future.delayed(const Duration(milliseconds: 200), () {
          _silentGetDeviceStatus();
        });
      }
    });

    // Listen to status updates with debouncing to prevent UI glitches
    _bleService.statusStream.listen((status) {
      // Only update status if not currently processing a command or switching devices to prevent flickering
      if (!_isProcessingCommand && !_isSwitchingDevice) {
        // Special handling for lock commands - block status updates longer
        if (_lastLockCommandTime != null) {
          final timeSinceLockCommand = DateTime.now().difference(
            _lastLockCommandTime!,
          );
          if (timeSinceLockCommand.inMilliseconds < 3000) {
            if (kDebugMode)
              Logger.info(
                'Skipping status update - too soon after lock command',
              );
            return;
          }
        }

        // Additional check: don't update if we just sent any command recently
        if (_lastCommandTime != null) {
          final timeSinceLastCommand = DateTime.now().difference(
            _lastCommandTime!,
          );
          if (timeSinceLastCommand.inMilliseconds < 1500) {
            if (kDebugMode)
              Logger.info('Skipping status update - too soon after command');
            return;
          }
        }
        
        _lastStatus = status;
        notifyListeners();
        if (kDebugMode)
          Logger.info('Status updated from stream: locked=${status.isLocked}');
      } else {
        if (kDebugMode)
          Logger.info(
            'Status update blocked - command in progress or switching device',
          );
      }
    });
  }

  /// Start scanning for devices
  Future<void> startScan() async {
    if (kDebugMode)
      Logger.info(
      'BLE Provider: startScan called - isScanning: $_isScanning, isInitialized: $_isInitialized',
    );

    if (_isScanning || !_isInitialized) {
      if (kDebugMode)
        Logger.info(
        'BLE Provider: Cannot start scan - isScanning: $_isScanning, isInitialized: $_isInitialized',
      );
      return;
    }

    try {
      if (kDebugMode) Logger.info('BLE Provider: Starting scan...');
      _isScanning = true;
      _errorMessage = null;
      notifyListeners();

      await _bleService.startScan();
      if (kDebugMode) Logger.info('BLE Provider: Scan started successfully');

      // Stop scanning after optimized timeout - reduced for faster discovery
      Timer(Duration(milliseconds: 8000), () {
        if (kDebugMode)
          Logger.info('BLE Provider: Auto-stopping scan after timeout');
        stopScan();
      });
    } catch (e) {
      if (kDebugMode) Logger.info('BLE Provider: Failed to start scan: $e');
      _errorMessage = 'Failed to start scan: $e';
      _isScanning = false;
      notifyListeners();
    }
  }

  /// Stop scanning
  Future<void> stopScan() async {
    if (!_isScanning) return;

    try {
      await _bleService.stopScan();
      _isScanning = false;
      notifyListeners();
    } catch (e) {
      _errorMessage = 'Failed to stop scan: $e';
      notifyListeners();
    }
  }

  /// Connect to a device with PIN if needed (like Angular app)
  Future<bool> connectToDevice(BleDevice device, {String? pin}) async {
    if (_isConnecting || !_isInitialized) return false;

    try {
      // Clear any existing processing states
      _isProcessingCommand = false;
      _cancelProcessingTimeout();

      // Set switching device flag to prevent auto-unlock during connection
      _isSwitchingDevice = true;
      
      // Clear auto-reconnect state when manually connecting
      _isAutoReconnecting = false;
      _autoReconnectStatus = null;

      // Batch initial state changes to reduce UI rebuilds
      _batchUpdateStates(
        isConnecting: true,
        isVerifyingPin: true,
        isSwitchingDevice: true,
        isProcessingCommand: false,
        errorMessage: null,
        successMessage: null,
      );

      // Try to get stored PIN if none provided
      String? finalPin = pin;
      if (finalPin == null && device.isLock) {
        finalPin = await _storageService.getPinForDevice(device.id);
        if (kDebugMode)
          Logger.info(
            'Retrieved stored PIN for device ${device.id}: ${finalPin != null ? 'found' : 'not found'}',
          );
      }

      // Add timeout for PIN verification to prevent hanging - reduced for faster response
      final success = await _bleService
          .connectToDevice(device, pin: finalPin)
          .timeout(
            const Duration(
              seconds: 8), // Reduced timeout for faster response
            onTimeout: () {
              _errorMessage = 'Connection timeout - please try again';
              return false;
            },
          );

      if (success) {
        _currentDevice = device;
        _connectionState = BluetoothConnectionState.connected;
        _successMessage =
            'Successfully connected to ${device.name ?? 'device'}';

        // Store PIN and device for auto-reconnect
        if (finalPin != null && device.isLock) {
          await _storageService.storePinForDevice(device.id, finalPin);
          
          // Create a copy of device with proper localName for storage
          final deviceForStorage = BleDevice(
            device: device.device,
            name: device.name,
            localName: device.localName, // Use original name as localName
            customName: device.customName,
            serialNumber: device.serialNumber,
            isLock: device.isLock,
            manufacturerData: device.manufacturerData,
            rssi: device.rssi,
            isExpanded: device.isExpanded,
            discoveredAt: device.discoveredAt,
          );

          await _storageService.saveLastConnectedDevice(deviceForStorage);
          if (kDebugMode)
            Logger.info('Stored PIN and device for auto-reconnect');
        }

        // Save original device name
        if (device.localName != null && device.localName!.isNotEmpty) {
          await _storageService.saveDeviceOriginalName(
            device.id,
            device.localName!,
          );
          if (kDebugMode)
            Logger.info('Saved original name: ${device.localName}');
        }

        // Save custom name if available
        if (device.customName != null && device.customName!.isNotEmpty) {
          await _storageService.saveDeviceName(device.id, device.customName!);
          if (kDebugMode)
            Logger.info('Saved custom name: ${device.customName}');
        } else {
          // If no custom name, save original name as custom name too
          if (device.localName != null && device.localName!.isNotEmpty) {
            await _storageService.saveDeviceName(device.id, device.localName!);
            if (kDebugMode)
              Logger.info('Saved original name as custom: ${device.localName}');
          }
        }

        // Notify DeviceProvider to refresh its data
        _onDeviceNameSaved?.call();

        // Clear success message after delay
        Future.delayed(const Duration(seconds: 2), () {
          if (_successMessage != null) {
            _successMessage = null;
            notifyListeners();
          }
        });
      } else {
        _errorMessage = 'Failed to connect to device';
      }

      // Batch final state changes to reduce UI rebuilds
      _batchUpdateStates(
        isConnecting: false,
        isVerifyingPin: false,
        isSwitchingDevice: false,
      );
      return success;
    } catch (e) {
      _errorMessage = 'Connection error: $e';
      // Batch error state changes
      _batchUpdateStates(
        isConnecting: false,
        isVerifyingPin: false,
        isSwitchingDevice: false,
      );
      return false;
    }
  }

  /// Set PIN verification state
  void setPinVerificationState(bool isVerifying) {
    _isVerifyingPin = isVerifying;
    notifyListeners();
  }

  /// Clear PIN verification state (for error handling)
  void clearPinVerificationState() {
    _isVerifyingPin = false;
    notifyListeners();
  }

  /// Clear processing command state (for error handling)
  void clearProcessingCommandState() {
    _isProcessingCommand = false;
    _cancelProcessingTimeout();
    notifyListeners();
  }

  /// Force clear all states (for critical error recovery)
  void forceClearAllStates() {
    _isProcessingCommand = false;
    _isSwitchingDevice = false;
    _isConnecting = false;
    _isVerifyingPin = false;
    _cancelProcessingTimeout();
    _commandThrottleTimer?.cancel();
    _commandThrottleTimer = null;
    _lastCommandTime = null;
    _lastLockCommandTime = null;
    _errorMessage = null;
    _successMessage = null;
    if (kDebugMode) Logger.info('Force cleared all states for error recovery');
    notifyListeners();
  }

  /// Switch to a different device with proper state management
  Future<bool> switchToDevice(BleDevice device, {String? pin}) async {
    if (kDebugMode) Logger.info('Switching to device: ${device.id}');

    // Force clear any existing states
    forceClearAllStates();

    // Wait a moment for state cleanup
    await Future.delayed(const Duration(milliseconds: 100));

    // Connect to new device
    return await connectToDevice(device, pin: pin);
  }

  /// Start processing timeout to prevent stuck states
  void _startProcessingTimeout() {
    _cancelProcessingTimeout();
    _processingTimeoutTimer = Timer(const Duration(seconds: 3), () {
      if (kDebugMode)
        Logger.warning('Processing timeout - clearing stuck state');
      _isProcessingCommand = false;
      _errorMessage = 'Command timeout - please try again';
      notifyListeners();
    });
  }

  /// Cancel processing timeout
  void _cancelProcessingTimeout() {
    _processingTimeoutTimer?.cancel();
    _processingTimeoutTimer = null;
  }

  /// Batch update multiple states to reduce UI rebuilds
  void _batchUpdateStates({
    bool? isConnecting,
    bool? isVerifyingPin,
    bool? isProcessingCommand,
    bool? isSwitchingDevice,
    String? errorMessage,
    String? successMessage,
  }) {
    bool hasChanges = false;

    if (isConnecting != null && _isConnecting != isConnecting) {
      _isConnecting = isConnecting;
      hasChanges = true;
    }

    if (isVerifyingPin != null && _isVerifyingPin != isVerifyingPin) {
      _isVerifyingPin = isVerifyingPin;
      hasChanges = true;
    }

    if (isProcessingCommand != null &&
        _isProcessingCommand != isProcessingCommand) {
      _isProcessingCommand = isProcessingCommand;
      hasChanges = true;
    }

    if (isSwitchingDevice != null && _isSwitchingDevice != isSwitchingDevice) {
      _isSwitchingDevice = isSwitchingDevice;
      hasChanges = true;
    }

    if (errorMessage != null && _errorMessage != errorMessage) {
      _errorMessage = errorMessage;
      hasChanges = true;
    }

    if (successMessage != null && _successMessage != successMessage) {
      _successMessage = successMessage;
      hasChanges = true;
    }

    if (hasChanges) {
      notifyListeners();
    }
  }

  /// Disconnect from current device
  Future<void> disconnectFromDevice({bool clearLastDevice = true}) async {
    if (!_isInitialized || _currentDevice == null) return;

    try {
      _errorMessage = null;
      
      // Cancel auto-lock timer on disconnect
      _cancelAutoLockTimer();
      
      notifyListeners();

      // Only clear last connected device on manual disconnect (not background)
      // This allows auto-reconnect when app resumes from background
      if (clearLastDevice) {
        await _storageService.clearLastConnectedDevice();
      }
      // Don't remove PIN on disconnect - keep it for future connections
      // Only remove PIN when user explicitly forgets the device

      await _bleService.disconnectFromDevice();

      _currentDevice = null;
      _connectionState = BluetoothConnectionState.disconnected;
      _lastStatus = null;
      notifyListeners();
    } catch (e) {
      _errorMessage = 'Disconnection error: $e';
      notifyListeners();
    }
  }

  /// Send lock command
  Future<bool> sendLockCommand() async {
    if (!isConnected || _currentDevice == null || _isProcessingCommand) {
      if (kDebugMode)
        Logger.info(
          'Lock command blocked - connected: $isConnected, processing: $_isProcessingCommand',
        );
      _errorMessage = 'No device connected or command in progress';
      notifyListeners();
      return false;
    }

    // Throttle commands to prevent rapid-fire sending
    if (_lastCommandTime != null) {
      final timeSinceLastCommand = DateTime.now().difference(_lastCommandTime!);
      if (timeSinceLastCommand.inMilliseconds < 1000) {
        if (kDebugMode)
          Logger.info('Command throttled - too soon after last command');
        _errorMessage = 'Please wait before sending another command';
        notifyListeners();
        return false;
      }
    }
    _lastCommandTime = DateTime.now();
    _lastLockCommandTime = DateTime.now(); // Track lock command specifically

    try {
      // Set processing state to prevent button flickering and command queuing
      _batchUpdateStates(isProcessingCommand: true, errorMessage: null);
      _startProcessingTimeout();

      final success = await _bleService.sendLockCommand();
      if (success) {
        // Cancel auto-lock timer since manually locked
        _cancelAutoLockTimer();
        
        // Immediately update UI state to show locked and block status updates
        if (_lastStatus != null) {
          _lastStatus = LockStatus(
            response: _lastStatus!.response,
            extraBytes: _lastStatus!.extraBytes,
            isStatus: _lastStatus!.isStatus,
            responseMsg: _lastStatus!.responseMsg,
            openCloseState: 0x00, // Force locked state
            voltageValue: _lastStatus!.voltageValue,
            alarmOn: _lastStatus!.alarmOn,
            buzzerOn: _lastStatus!.buzzerOn,
          );
          notifyListeners();
          if (kDebugMode)
            Logger.info('Lock command - UI forced to locked state');
        }

        // Keep processing state longer for lock command to prevent status jitter
        _cancelProcessingTimeout();
        _batchUpdateStates(
          isProcessingCommand: true, // Keep processing to block status updates
          successMessage: 'Lock engaged',
        );

        // Clear processing state after delay to prevent status override
        Future.delayed(const Duration(milliseconds: 1500), () {
          _batchUpdateStates(isProcessingCommand: false);
        });

        // Get fresh status after a longer delay to ensure command is processed
        Future.delayed(const Duration(milliseconds: 1000), () async {
          await _silentGetDeviceStatus();
        });

        // Clear success message after 2 seconds
        Future.delayed(const Duration(seconds: 2), () {
          _successMessage = null;
          notifyListeners();
        });
      } else {
        _cancelProcessingTimeout();
        _batchUpdateStates(
          isProcessingCommand: false,
          errorMessage: 'Lock command failed',
        );
      }

      return success;
    } catch (e) {
      _cancelProcessingTimeout();
      _batchUpdateStates(
        isProcessingCommand: false,
        errorMessage: 'Lock command failed: $e',
      );
      return false;
    }
  }

  /// Send unlock command
  Future<bool> sendUnlockCommand() async {
    if (!isConnected || _currentDevice == null || _isProcessingCommand) {
      if (kDebugMode)
        Logger.info(
          'Unlock command blocked - connected: $isConnected, processing: $_isProcessingCommand',
        );
      _errorMessage = 'No device connected or command in progress';
      notifyListeners();
      return false;
    }

    // Throttle commands to prevent rapid-fire sending
    if (_lastCommandTime != null) {
      final timeSinceLastCommand = DateTime.now().difference(_lastCommandTime!);
      if (timeSinceLastCommand.inMilliseconds < 1000) {
        if (kDebugMode)
          Logger.info('Command throttled - too soon after last command');
        _errorMessage = 'Please wait before sending another command';
        notifyListeners();
        return false;
      }
    }
    _lastCommandTime = DateTime.now();

    try {
      // Set processing state to prevent button flickering and command queuing
      _batchUpdateStates(isProcessingCommand: true, errorMessage: null);
      _startProcessingTimeout();

      final success = await _bleService.sendUnlockCommand();
      if (success) {
        // Immediately update UI state to show unlocked
        if (_lastStatus != null) {
          _lastStatus = LockStatus(
            response: _lastStatus!.response,
            extraBytes: _lastStatus!.extraBytes,
            isStatus: _lastStatus!.isStatus,
            responseMsg: _lastStatus!.responseMsg,
            openCloseState: 0x01, // Force unlocked state
            voltageValue: _lastStatus!.voltageValue,
            alarmOn: _lastStatus!.alarmOn,
            buzzerOn: _lastStatus!.buzzerOn,
          );
          notifyListeners();
        }

        // Clear processing state immediately on success
        _cancelProcessingTimeout();
        _batchUpdateStates(
          isProcessingCommand: false,
          successMessage: 'Lock released',
        );
        
        // Start auto-lock timer (5 seconds)
        _startAutoLockTimer();
        
        // Get fresh status after a short delay
        Future.delayed(const Duration(milliseconds: 600), () async {
          await _silentGetDeviceStatus();
        });

        // Clear success message after 2 seconds
        Future.delayed(const Duration(seconds: 2), () {
          _successMessage = null;
          notifyListeners();
        });
      } else {
        _cancelProcessingTimeout();
        _batchUpdateStates(
          isProcessingCommand: false,
          errorMessage: 'Unlock command failed',
        );
      }

      return success;
    } catch (e) {
      _cancelProcessingTimeout();
      _batchUpdateStates(
        isProcessingCommand: false,
        errorMessage: 'Unlock command failed: $e',
      );
      return false;
    }
  }

  /// Silent status fetch (no error messages)
  Future<void> _silentGetDeviceStatus() async {
    if (!isConnected || _currentDevice == null || _isProcessingCommand) return;

    // Don't fetch status during command processing to prevent UI jitter
    if (_isProcessingCommand) {
      if (kDebugMode)
        Logger.info('Skipping status fetch - command in progress');
      return;
    }

    // Throttle status requests to prevent overwhelming the device - reduced to 3 seconds
    if (_lastCommandTime != null) {
      final timeSinceLastCommand = DateTime.now().difference(_lastCommandTime!);
      if (timeSinceLastCommand.inMilliseconds < 3000) {
        return; // Skip if too soon after last command
      }
    }

    try {
      final status = await _bleService.getDeviceStatus();
      if (status != null) {
        _lastStatus = status;
        notifyListeners();
        if (kDebugMode)
          Logger.info('Status updated: locked=${status.isLocked}');
      }
    } catch (e) {
      // Silent failure - don't show error to user
      if (kDebugMode) Logger.error('Silent status request failed', e);
    }
  }

  /// Clear success message
  void clearSuccessMessage() {
    _successMessage = null;
    notifyListeners();
  }

  /// Remove stored PIN for a device
  Future<bool> removeStoredPin(String deviceId) async {
    try {
      return await _storageService.removePinForDevice(deviceId);
    } catch (e) {
      if (kDebugMode) Logger.error('Failed to remove stored PIN: $e');
      return false;
    }
  }

  /// Initialize (factory reset) the connected lock
  Future<bool> initializeLock() async {
    if (!isConnected || _currentDevice == null) {
      _errorMessage = 'No device connected';
      notifyListeners();
      return false;
    }
    try {
      _errorMessage = null;
      notifyListeners();
      final ok = await _bleService.initializeLock();
      if (!ok) {
        _errorMessage = 'Initialization failed';
      } else {
        _lastStatus = LockStatus(
          response: 0x10,
          extraBytes: 0,
          isStatus: false,
          responseMsg: 'Initialized (factory reset) successfully',
        );
      }
      notifyListeners();
      return ok;
    } catch (e) {
      _errorMessage = 'Initialization error: $e';
      notifyListeners();
      return false;
    }
  }

  /// Get device status
  Future<void> getDeviceStatus() async {
    if (!isConnected || _currentDevice == null) {
      _errorMessage = 'No device connected';
      notifyListeners();
      return;
    }

    try {
      _errorMessage = null;
      notifyListeners();

      final status = await _bleService.getDeviceStatus();

      if (status != null) {
        _lastStatus = status;
      } else {
        _errorMessage = 'No response from device';
      }

      notifyListeners();
    } catch (e) {
      _errorMessage = 'Status request error: $e';
      notifyListeners();
    }
  }

  /// Get firmware/hardware version
  Future<LockStatus?> getVersion() async {
    if (!isConnected || _currentDevice == null) {
      _errorMessage = 'No device connected';
      notifyListeners();
      return null;
    }
    try {
      _errorMessage = null;
      notifyListeners();
      final status = await _bleService.getVersion();
      if (status == null) {
        _errorMessage = 'No version response';
      } else {
        _lastStatus = status;
      }
      notifyListeners();
      return status;
    } catch (e) {
      _errorMessage = 'Version request error: $e';
      notifyListeners();
      return null;
    }
  }

  /// Alarm getters/setters
  Future<LockStatus?> getAlarmStatus() async {
    if (!isConnected || _currentDevice == null) {
      _errorMessage = 'No device connected';
      notifyListeners();
      return null;
    }
    try {
      _errorMessage = null;
      notifyListeners();
      final st = await _bleService.getAlarmStatus();
      if (st == null) {
        _errorMessage = 'No alarm response';
      } else {
        _lastStatus = st;
      }
      notifyListeners();
      return st;
    } catch (e) {
      _errorMessage = 'Alarm request error: $e';
      notifyListeners();
      return null;
    }
  }

  Future<LockStatus?> setAlarmEnabled(bool enabled) async {
    if (!isConnected || _currentDevice == null) {
      _errorMessage = 'No device connected';
      notifyListeners();
      return null;
    }
    try {
      _errorMessage = null;
      notifyListeners();
      final st = await _bleService.setAlarmEnabled(enabled);
      if (st == null) {
        _errorMessage = 'No alarm set response';
      } else {
        _lastStatus = st;
      }
      notifyListeners();
      return st;
    } catch (e) {
      _errorMessage = 'Alarm set error: $e';
      notifyListeners();
      return null;
    }
  }

  /// Buzzer getters/setters
  Future<LockStatus?> getBuzzerStatus() async {
    if (!isConnected || _currentDevice == null) {
      _errorMessage = 'No device connected';
      notifyListeners();
      return null;
    }
    try {
      _errorMessage = null;
      notifyListeners();
      final st = await _bleService.getBuzzerStatus();
      if (st == null) {
        _errorMessage = 'No buzzer response';
      } else {
        _lastStatus = st;
      }
      notifyListeners();
      return st;
    } catch (e) {
      _errorMessage = 'Buzzer request error: $e';
      notifyListeners();
      return null;
    }
  }

  Future<LockStatus?> setBuzzerEnabled(bool enabled) async {
    if (!isConnected || _currentDevice == null) {
      _errorMessage = 'No device connected';
      notifyListeners();
      return null;
    }
    try {
      _errorMessage = null;
      notifyListeners();
      final st = await _bleService.setBuzzerEnabled(enabled);
      if (st == null) {
        _errorMessage = 'No buzzer set response';
      } else {
        _lastStatus = st;
      }
      notifyListeners();
      return st;
    } catch (e) {
      _errorMessage = 'Buzzer set error: $e';
      notifyListeners();
      return null;
    }
  }

  /// Time APIs
  Future<LockStatus?> setTime(DateTime dt) async {
    if (!isConnected || _currentDevice == null) {
      _errorMessage = 'No device connected';
      notifyListeners();
      return null;
    }
    try {
      _errorMessage = null;
      notifyListeners();
      final st = await _bleService.setTime(dt);
      if (st == null) {
        _errorMessage = 'No time set response';
      } else {
        _lastStatus = st;
      }
      notifyListeners();
      return st;
    } catch (e) {
      _errorMessage = 'Time set error: $e';
      notifyListeners();
      return null;
    }
  }

  Future<LockStatus?> readTime() async {
    if (!isConnected || _currentDevice == null) {
      _errorMessage = 'No device connected';
      notifyListeners();
      return null;
    }
    try {
      _errorMessage = null;
      notifyListeners();
      final st = await _bleService.readTime();
      if (st == null) {
        _errorMessage = 'No time read response';
      } else {
        _lastStatus = st;
      }
      notifyListeners();
      return st;
    } catch (e) {
      _errorMessage = 'Time read error: $e';
      notifyListeners();
      return null;
    }
  }

  /// Clear error message
  void clearError() {
    _errorMessage = null;
    notifyListeners();
  }

  /// Clear discovered devices
  void clearDevices() {
    _discoveredDevices.clear();
    notifyListeners();
  }

  /// Toggle device expansion
  void toggleDeviceExpansion(BleDevice device) {
    final index = _discoveredDevices.indexWhere((d) => d.id == device.id);
    if (index != -1) {
      _discoveredDevices[index] = device.copyWith(
        isExpanded: !device.isExpanded,
      );
      notifyListeners();
    }
  }

  /// Check if Bluetooth is supported
  Future<bool> isBluetoothSupported() async {
    return await FlutterBluePlus.isSupported;
  }

  /// Check if Bluetooth is enabled
  Future<bool> isBluetoothEnabled() async {
    final state = await FlutterBluePlus.adapterState.first;
    return state == BluetoothAdapterState.on;
  }

  /// Enable Bluetooth
  Future<bool> enableBluetooth() async {
    try {
      await FlutterBluePlus.turnOn();
      return true;
    } catch (e) {
      Logger.error('Failed to enable Bluetooth', e);
      return false;
    }
  }

  /// Check if device has stored PIN
  Future<bool> hasStoredPin(BleDevice device) async {
    try {
      return await _storageService.hasStoredPin(device.id);
    } catch (e) {
      Logger.error('Failed to check stored PIN', e);
      return false;
    }
  }

  /// Try to auto-reconnect to last device on app start
  Future<void> tryAutoReconnect() async {
    if (!_isInitialized ||
        _isConnecting ||
        _isAutoReconnecting ||
        _isVerifyingPin)
      return;

    // Check if Bluetooth is enabled
    final isBluetoothOn = await isBluetoothEnabled();
    if (!isBluetoothOn) {
      if (kDebugMode)
        Logger.info('Bluetooth not enabled, skipping auto-reconnect');
      return;
    }

    try {
      _isAutoReconnecting = true;
      _autoReconnectStatus = 'Checking preferences...';
      notifyListeners();

      final prefs = await _storageService.getUserPreferences();
      final autoConnect = prefs['autoConnect'] ?? true;
      if (kDebugMode) Logger.info('Auto-connect: $autoConnect');
      if (!autoConnect) {
        if (kDebugMode) Logger.info('Auto-connect disabled in preferences ');
        _isAutoReconnecting = false;
        _autoReconnectStatus = null;
        notifyListeners();
        return;
      }

      _autoReconnectStatus = 'Looking for last device...';
      notifyListeners();

      final lastDeviceData = await _storageService.getLastConnectedDevice();
      if (lastDeviceData == null) {
        if (kDebugMode)
          Logger.info('No last connected device found, starting new scan');
        _isAutoReconnecting = false;
        _autoReconnectStatus = null;
        notifyListeners();
        
        // Start a new scan for discovery
        return;
      }

      final deviceId = lastDeviceData['id'];
      // Get the custom name from storage, fall back to localName or name
      final storedCustomName = await _storageService.getDeviceName(deviceId);
      final deviceName =
          storedCustomName ??
          lastDeviceData['customName'] ??
          lastDeviceData['localName'] ??
          lastDeviceData['name'] ??
          'Unknown Device';
      final storedPin = await _storageService.getPinForDevice(deviceId);

      if (storedPin == null) {
        if (kDebugMode)
          Logger.info('No stored PIN for last device, starting new scan');
        _isAutoReconnecting = false;
        _autoReconnectStatus = null;
        notifyListeners();
        
        // Start a new scan for discovery
        await startScan();
        return;
      }

      _autoReconnectStatus = 'Scanning for $deviceName...';
      notifyListeners();
      if (kDebugMode) Logger.info('Attempting auto-reconnect to $deviceId');

      // Start scanning to find the device
      await startScan();

      // Wait for devices to be discovered (optimized timing)
      await Future.delayed(const Duration(milliseconds: 1500));

      // Look for the device in discovered devices
      BleDevice? targetDevice = _discoveredDevices
          .where((d) => d.id == deviceId)
          .firstOrNull;

      if (targetDevice == null) {
        if (kDebugMode)
          Logger.info(
            'Device not found in initial scan, waiting for more devices...',
          );
        // Retry with optimized delay
        await Future.delayed(const Duration(milliseconds: 2000));

        targetDevice = _discoveredDevices
            .where((d) => d.id == deviceId)
            .firstOrNull;

        if (targetDevice == null) {
          if (kDebugMode)
            Logger.info('Device still not found after extended wait');
          throw Exception('Device not found in range');
        }
      }

      _autoReconnectStatus = 'Connecting to $deviceName...';
      notifyListeners();

      // Create device with custom name populated from storage
      final deviceWithCustomName = BleDevice(
        device: targetDevice.device,
        name: targetDevice.name,
        localName: targetDevice.localName,
        customName: storedCustomName, // Use the loaded custom name
        serialNumber: targetDevice.serialNumber,
        isLock: targetDevice.isLock,
        manufacturerData: targetDevice.manufacturerData,
        rssi: targetDevice.rssi,
        isExpanded: targetDevice.isExpanded,
        discoveredAt: targetDevice.discoveredAt,
      );

      // Try to connect with stored PIN
      final success = await connectToDevice(
        deviceWithCustomName,
        pin: storedPin,
      );

      if (success) {
        if (kDebugMode) Logger.info('Auto-reconnect successful');
        _autoReconnectStatus = 'Connected to $deviceName';
        // Trigger DeviceProvider refresh to update UI
        _onDeviceNameSaved?.call();
      } else {
        throw Exception('Connection failed');
      }

      await stopScan();
    } catch (e) {
      if (kDebugMode) Logger.error('Auto-reconnect failed', e);
      _autoReconnectStatus = 'Auto-reconnect failed';
      await stopScan();
    } finally {
      _isAutoReconnecting = false;
      _autoReconnectStatus = null;
      notifyListeners();
    }
  }

  /// Public method to manually trigger auto-reconnect
  Future<void> manualAutoReconnect() async {
    if (kDebugMode) Logger.info('Manual auto-reconnect triggered');
    await tryAutoReconnect();
  }

  /// Request Bluetooth permissions
  Future<bool> requestPermissions() async {
    try {
      // This will be handled by the BLE service
      return true;
    } catch (e) {
      _errorMessage = 'Permission request failed: $e';
      notifyListeners();
      return false;
    }
  }

  /// Start auto-lock timer (5 seconds)
  void _startAutoLockTimer() {
    // Cancel any existing timer
    _cancelAutoLockTimer();

    if (kDebugMode) Logger.info('Starting auto-lock timer (5 seconds)');

    _autoLockTimer = Timer(const Duration(seconds: 5), () async {
      if (kDebugMode) Logger.info('Auto-lock timer triggered - locking device');

      // Check if device is still connected and unlocked
      if (isConnected && _lastStatus != null && !_lastStatus!.isLocked) {
        await sendLockCommand();
        _successMessage = 'Auto-locked after 5 seconds';
        notifyListeners();

        // Clear success message after delay
        Future.delayed(const Duration(seconds: 2), () {
          _successMessage = null;
          notifyListeners();
        });
      }
    });
  }

  /// Cancel auto-lock timer
  void _cancelAutoLockTimer() {
    if (_autoLockTimer != null) {
      if (kDebugMode) Logger.info('Cancelling auto-lock timer');
      _autoLockTimer!.cancel();
      _autoLockTimer = null;
    }
  }

  @override
  void dispose() {
    _cancelAutoLockTimer();
    _cancelProcessingTimeout();
    _commandThrottleTimer?.cancel();
    _bleService.dispose();
    super.dispose();
  }
}
