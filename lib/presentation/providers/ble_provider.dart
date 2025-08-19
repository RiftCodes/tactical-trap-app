import 'dart:async';

import 'package:flutter/foundation.dart';
import 'package:flutter_blue_plus/flutter_blue_plus.dart';
import 'package:tactical_trap_flutter/presentation/providers/device_provider.dart';

import '../../core/utils/logger.dart';
import '../../data/models/ble_device.dart';
import '../../data/models/lock_status.dart';
import '../../services/bluetooth/ble_service.dart';
import '../../services/storage/storage_service.dart';

/// Provider for managing Bluetooth Low Energy operations
class BleProvider extends ChangeNotifier {
  final BleService _bleService = BleService();
  final StorageService _storageService = StorageService();

  // Expose BLE service for lifecycle management
  BleService get bleService => _bleService;

  // State variables
  bool _isInitialized = false;
  bool _isScanning = false;
  bool _isConnecting = false;
  bool _isVerifyingPin = false;
  bool _isAutoReconnecting = false;
  String? _autoReconnectStatus;
  String? _successMessage;
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
      print('BLE Provider: Starting initialization...');
      _errorMessage = null;
      notifyListeners();

      final success = await _bleService.initialize();
      print('BLE Provider: BLE service initialization result: $success');

      if (success) {
        _isInitialized = true;
        print('BLE Provider: Set _isInitialized to true');

        // Listen to streams
        _listenToStreams();
        print('BLE Provider: Streams listening set up');

        // Try auto-reconnect after initialization
        Future.delayed(const Duration(milliseconds: 500), () {
          tryAutoReconnect();
        });

        notifyListeners();
        print('BLE Provider: Initialization complete, notifying listeners');
        return true;
      } else {
        _errorMessage = 'Failed to initialize Bluetooth service';
        print('BLE Provider: Initialization failed');
        notifyListeners();
        return false;
      }
    } catch (e) {
      _errorMessage = 'Initialization error: $e';
      print('BLE Provider: Initialization error: $e');
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
      notifyListeners();

      // Auto-fetch status on connect to populate UI details
      if (_connectionState == BluetoothConnectionState.connected) {
        // Delay to let connection settle, then fetch status silently
        Future.delayed(const Duration(milliseconds: 500), () {
          _silentGetDeviceStatus();
        });
      }
    });

    // Listen to status updates
    _bleService.statusStream.listen((status) {
      _lastStatus = status;
      notifyListeners();
    });
  }

  /// Start scanning for devices
  Future<void> startScan() async {
    print(
      'BLE Provider: startScan called - isScanning: $_isScanning, isInitialized: $_isInitialized',
    );

    if (_isScanning || !_isInitialized) {
      print(
        'BLE Provider: Cannot start scan - isScanning: $_isScanning, isInitialized: $_isInitialized',
      );
      return;
    }

    try {
      print('BLE Provider: Starting scan...');
      _isScanning = true;
      _errorMessage = null;
      notifyListeners();

      await _bleService.startScan();
      print('BLE Provider: Scan started successfully');

      // Stop scanning after timeout
      Timer(Duration(milliseconds: 5000), () {
        print('BLE Provider: Auto-stopping scan after timeout');
        stopScan();
      });
    } catch (e) {
      print('BLE Provider: Failed to start scan: $e');
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
      _isConnecting = true;
      _errorMessage = null;
      notifyListeners();

      // Try to get stored PIN if none provided
      String? finalPin = pin;
      if (finalPin == null && device.isLock) {
        finalPin = await _storageService.getPinForDevice(device.id);
        Logger.info(
          'Retrieved stored PIN for device ${device.id}: ${finalPin != null ? 'found' : 'not found'}',
        );
      }

      final success = await _bleService.connectToDevice(device, pin: finalPin);

      if (success) {
        _currentDevice = device;
        _connectionState = BluetoothConnectionState.connected;

        // Store PIN and device for auto-reconnect
        if (finalPin != null && device.isLock) {
          await _storageService.storePinForDevice(device.id, finalPin);
          await _storageService.saveLastConnectedDevice(device);
          Logger.info('Stored PIN and device for auto-reconnect');
        }

        // Device connected successfully
      } else {
        _errorMessage = 'Failed to connect to device';
      }

      _isConnecting = false;
      notifyListeners();
      return success;
    } catch (e) {
      _errorMessage = 'Connection error: $e';
      _isConnecting = false;
      notifyListeners();
      return false;
    }
  }

  /// Set PIN verification state
  void setPinVerificationState(bool isVerifying) {
    _isVerifyingPin = isVerifying;
    notifyListeners();
  }

  /// Disconnect from current device
  Future<void> disconnectFromDevice() async {
    if (!_isInitialized || _currentDevice == null) return;

    try {
      _errorMessage = null;
      notifyListeners();

      // Clear auto-reconnect data on manual disconnect
      await _storageService.clearLastConnectedDevice();
      if (_currentDevice != null) {
        await _storageService.removePinForDevice(_currentDevice!.id);
      }

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
    if (!isConnected || _currentDevice == null) {
      _errorMessage = 'No device connected';
      notifyListeners();
      return false;
    }

    try {
      _errorMessage = null;
      notifyListeners();

      final success = await _bleService.sendLockCommand();
      if (success) {
        _errorMessage = null;
        // Refresh status immediately after action
        await Future.delayed(const Duration(milliseconds: 100));
        await _silentGetDeviceStatus();
        _successMessage = 'Lock engaged';
        notifyListeners();
        Future.delayed(const Duration(seconds: 1), () {
          _successMessage = null;
          notifyListeners();
        });
      } else {
        _errorMessage = 'Lock command failed';
      }

      notifyListeners();
      return success;
    } catch (e) {
      _errorMessage = 'Command error: $e';
      notifyListeners();
      return false;
    }
  }

  /// Send unlock command
  Future<bool> sendUnlockCommand() async {
    if (!isConnected || _currentDevice == null) {
      _errorMessage = 'No device connected';
      notifyListeners();
      return false;
    }

    try {
      _errorMessage = null;
      notifyListeners();

      final success = await _bleService.sendUnlockCommand();
      if (success) {
        _errorMessage = null;
        // Refresh status immediately after action
        await Future.delayed(const Duration(milliseconds: 100));
        await _silentGetDeviceStatus();
        _successMessage = 'Lock released';
        notifyListeners();
        Future.delayed(const Duration(seconds: 1), () {
          _successMessage = null;
          notifyListeners();
        });
      } else {
        _errorMessage = 'Unlock command failed';
      }

      notifyListeners();
      return success;
    } catch (e) {
      _errorMessage = 'Command error: $e';
      notifyListeners();
      return false;
    }
  }

  /// Silent status fetch (no error messages)
  Future<void> _silentGetDeviceStatus() async {
    if (!isConnected || _currentDevice == null) return;

    try {
      final status = await _bleService.getDeviceStatus();
      if (status != null) {
        _lastStatus = status;
        notifyListeners();
      }
    } catch (e) {
      // Silent failure - don't show error to user
      Logger.error('Silent status request failed', e);
    }
  }

  /// Clear success message
  void clearSuccessMessage() {
    _successMessage = null;
    notifyListeners();
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
    if (!_isInitialized || _isConnecting || _isAutoReconnecting) return;

    try {
      _isAutoReconnecting = true;
      _autoReconnectStatus = 'Checking preferences...';
      notifyListeners();

      final prefs = await _storageService.getUserPreferences();
      final autoConnect = prefs['autoConnect'] ?? true;

      if (!autoConnect) {
        Logger.info('Auto-connect disabled in preferences');
        _isAutoReconnecting = false;
        _autoReconnectStatus = null;
        notifyListeners();
        return;
      }

      _autoReconnectStatus = 'Looking for last device...';
      notifyListeners();

      final lastDeviceData = await _storageService.getLastConnectedDevice();
      if (lastDeviceData == null) {
        Logger.info('No last connected device found');
        _isAutoReconnecting = false;
        _autoReconnectStatus = null;
        notifyListeners();
        return;
      }

      final deviceId = lastDeviceData['id']; 
      final deviceName =
          DeviceProvider().getDeviceName(lastDeviceData['name']) ??
          lastDeviceData['name'];
      final storedPin = await _storageService.getPinForDevice(deviceId);

      if (storedPin == null) {
        Logger.info('No stored PIN for last device');
        _isAutoReconnecting = false;
        _autoReconnectStatus = null;
        notifyListeners();
        return;
      }

      _autoReconnectStatus = 'Scanning for $deviceName...';
      notifyListeners();
      Logger.info('Attempting auto-reconnect to $deviceId');

      // Start scanning to find the device
      await startScan();
 

      // Look for the device in discovered devices
      final targetDevice = _discoveredDevices
          .where((d) => d.id == deviceId)
          .firstOrNull;

      if (targetDevice == null) {
        throw Exception('Device not found in range');
      }

      _autoReconnectStatus = 'Connecting to $deviceName...';
      notifyListeners();

      // Try to connect with stored PIN
      final success = await connectToDevice(targetDevice, pin: storedPin);

      if (success) {
        Logger.info('Auto-reconnect successful');
        _autoReconnectStatus = 'Connected to $deviceName'; 
      } else {
        throw Exception('Connection failed');
      }

      await stopScan();
    } catch (e) {
      Logger.error('Auto-reconnect failed', e);
      _autoReconnectStatus = 'Auto-reconnect failed'; 
      await stopScan();
    } finally {
      _isAutoReconnecting = false;
      _autoReconnectStatus = null;
      notifyListeners();
    }
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

  @override
  void dispose() {
    _bleService.dispose();
    super.dispose();
  }
}
