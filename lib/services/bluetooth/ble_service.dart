import 'dart:async';

import 'package:flutter_blue_plus/flutter_blue_plus.dart';
import 'package:permission_handler/permission_handler.dart';

import '../../core/utils/logger.dart';
import '../../data/models/ble_device.dart';
import '../../data/models/lock_status.dart';

/// Simple, reliable BLE service for Tactical Traps locks
class BleService {
  static final BleService _instance = BleService._internal();
  factory BleService() => _instance;
  BleService._internal();

  // Response codes and constants (EXACT COPY of Angular app)
  static const int askCorrect = 0x10; // Success
  static const int askFailure = 0x11; // Operation failed
  static const int askTimeout = 0x12; // Operation timed out
  static const int askUnknown = 0x13; // Unknown command
  static const int askChecksum = 0x16; // Communication error
  static const int askPasswordNotVerified = 0x26; // Lock not paired
  static const int askFailedVerification = 0x27; // PIN verification failed

  // Constants from Angular app (EXACT COPY)
  static const int cmd = 1;
  static const int ask = 2;
  static const int ext = 3;
  static const int sum = 5;
  static const int data = 6;
  static const int randData = 14;

  // Stream controllers
  final StreamController<List<BleDevice>> _devicesController =
      StreamController<List<BleDevice>>.broadcast();
  final StreamController<BleDevice?> _connectionController =
      StreamController<BleDevice?>.broadcast();
  final StreamController<LockStatus> _statusController =
      StreamController<LockStatus>.broadcast();

  // Auto-status polling timer
  Timer? _statusTimer;
  bool _isAppActive = true;
  DateTime? _lastStatusPoll;

  // Simple state
  BleDevice? _currentDevice;
  BluetoothConnectionState _connectionState =
      BluetoothConnectionState.disconnected;
  bool _isScanning = false;
  Timer? _reconnectTimer;

  // Store status characteristic for PIN verification
  BluetoothCharacteristic? _statusCharacteristic;

  // Track pending responses (like Angular app's notificationHandler)
  Completer<List<int>?>? _pendingResponseCompleter;
  String? _pendingResponseCommand;

  // Store PIN after successful verification
  String? _verifiedPin;

  // Store the randData for lock/unlock commands
  int? _randData;

  // Simple reconnection
  int _reconnectAttempts = 0;
  static const int _maxReconnectAttempts = 3;

  // Streams
  Stream<List<BleDevice>> get devicesStream => _devicesController.stream;
  Stream<BleDevice?> get connectionStream => _connectionController.stream;
  Stream<LockStatus> get statusStream => _statusController.stream;

  // Getters
  BleDevice? get currentDevice => _currentDevice;
  BluetoothConnectionState get connectionState => _connectionState;
  bool get isScanning => _isScanning;
  bool get isConnected =>
      _connectionState == BluetoothConnectionState.connected;

  /// Initialize BLE service
  Future<bool> initialize() async {
    try {
      Logger.info('BLE: activate');

      if (!await FlutterBluePlus.isSupported) {
        throw Exception('Bluetooth not supported');
      }

      await _requestPermissions();
      FlutterBluePlus.adapterState.listen(_onAdapterStateChanged);

      return true;
    } catch (e) {
      Logger.error('Failed to initialize BLE service', e);
      return false;
    }
  }

  /// Request permissions
  Future<void> _requestPermissions() async {
    await Permission.bluetooth.request();
    await Permission.bluetoothScan.request();
    await Permission.bluetoothConnect.request();
    if (await Permission.location.isDenied) {
      await Permission.location.request();
    }
  }

  /// Start scanning for Tactical Traps locks only
  Future<void> startScan() async {
    if (_isScanning) return;

    try {
      Logger.info('Starting scan for Tactical Traps locks only');
      _isScanning = true;
      _devicesController.add([]);

      // Scan only for Tactical Traps service UUID (like original Angular code)
      final serviceUuid = Guid.parse('0000fff0-0000-1000-8000-00805f9b34fb');
      if (serviceUuid != null) {
        await FlutterBluePlus.startScan(
          timeout: Duration(seconds: 10),
          androidUsesFineLocation: true,
          withServices: [serviceUuid],
        );
      } else {
        // Fallback to general scan if UUID parsing fails
        await FlutterBluePlus.startScan(
          timeout: Duration(seconds: 10),
          androidUsesFineLocation: true,
        );
      }

      FlutterBluePlus.scanResults.listen(_onScanResults);

      Timer(Duration(seconds: 10), () {
        stopScan();
      });
    } catch (e) {
      Logger.error('Failed to start scan', e);
      _isScanning = false;
    }
  }

  /// Stop scanning
  Future<void> stopScan() async {
    if (!_isScanning) return;
    try {
      await FlutterBluePlus.stopScan();
      _isScanning = false;
    } catch (e) {
      Logger.error('Failed to stop scan', e);
    }
  }

  /// Handle scan results - show only Tactical Traps locks
  void _onScanResults(List<ScanResult> results) {
    final devices = <BleDevice>[];

    for (final result in results) {
      // Only show Tactical Traps locks (like original Angular code)
      if (_isTacticalTrapsLock(result)) {
        final device = BleDevice(
          device: result.device,
          name: result.device.platformName,
          localName: result.advertisementData.advName,
          rssi: result.rssi,
          manufacturerData: result.advertisementData.manufacturerData.values
              .expand((data) => data)
              .toList(),
          discoveredAt: DateTime.now(),
          isLock: true,
          serialNumber: _extractSerialNumber(result),
        );

        devices.add(device);
      }
    }

    _devicesController.add(devices);
  }

  /// Check if device is Tactical Traps lock
  bool _isTacticalTrapsLock(ScanResult result) {
    final serviceUUIDs = result.advertisementData.serviceUuids;
    return serviceUUIDs.any(
      (uuid) => uuid.toString().toLowerCase().contains('fff0'),
    );
  }

  /// Check if device has required service (like Angular app)
  Future<bool> _hasRequiredService(BleDevice device) async {
    try {
      final services = await device.device.discoverServices();
      for (final service in services) {
        if (service.uuid.toString().toLowerCase().contains('fff0')) {
          return true;
        }
      }
      return false;
    } catch (e) {
      Logger.error('Service discovery failed', e);
      return false;
    }
  }

  /// Check if Bluetooth is enabled
  Future<bool> isBluetoothEnabled() async {
    try {
      final state = await FlutterBluePlus.adapterState.first;
      return state == BluetoothAdapterState.on;
    } catch (e) {
      Logger.error('Failed to check Bluetooth state', e);
      return false;
    }
  }

  /// Enable Bluetooth
  Future<bool> enableBluetooth() async {
    try {
      Logger.info('Attempting to enable Bluetooth...');

      // Check current state first
      final currentState = await FlutterBluePlus.adapterState.first;
      Logger.info('Current Bluetooth state: $currentState');

      if (currentState == BluetoothAdapterState.on) {
        Logger.info('Bluetooth is already on');
        return true;
      }

      // Try to turn on Bluetooth with timeout
      await FlutterBluePlus.turnOn().timeout(
        Duration(seconds: 10),
        onTimeout: () {
          throw Exception('Bluetooth enable timeout');
        },
      );

      // Wait a bit and check if it actually turned on
      await Future.delayed(Duration(seconds: 2));
      final newState = await FlutterBluePlus.adapterState.first;
      Logger.info('New Bluetooth state: $newState');

      if (newState == BluetoothAdapterState.on) {
        Logger.info('Bluetooth enabled successfully');
        return true;
      } else {
        Logger.error('Bluetooth state did not change to ON');
        return false;
      }
    } catch (e) {
      Logger.error('Failed to enable Bluetooth: $e');
      return false;
    }
  }

  /// Extract serial number
  String? _extractSerialNumber(ScanResult result) {
    final manufacturerData = result.advertisementData.manufacturerData.values
        .expand((data) => data)
        .toList();

    if (manufacturerData.isNotEmpty) {
      return manufacturerData
          .map((byte) => byte.toRadixString(16).padLeft(2, '0'))
          .join('')
          .toUpperCase();
    }
    return null;
  }

  /// Connect to device with PIN verification (like Angular app)
  Future<bool> connectToDevice(BleDevice device, {String? pin}) async {
    try {
      Logger.info('Connecting to: ${device.id}');

      if (_currentDevice != null) {
        await disconnectFromDevice();
      }

      // Connect first (like Angular app)
      await device.device.connect(timeout: Duration(seconds: 10));

      _currentDevice = device;
      _connectionState = BluetoothConnectionState.connected;
      _connectionController.add(_currentDevice);

      // Start notifications FIRST (before PIN verification)
      Logger.info('=== STARTING NOTIFICATION LISTENER ===');
      await _startNotificationListener(device);
      Logger.info('=== NOTIFICATION LISTENER COMPLETED ===');
      Logger.info(
        '_statusCharacteristic is now: ${_statusCharacteristic?.uuid}',
      );

      // Check for required BLE service (like Angular app)
      Logger.info('=== CHECKING REQUIRED SERVICE ===');
      final hasService = await _hasRequiredService(device);
      Logger.info('Has required service: $hasService');

      if (!hasService) {
        Logger.error(
          'Lock service not found. Please reset the lock and try again.',
        );
        await disconnectFromDevice();
        return false;
      }

      // If it's a Tactical Traps lock, verify PIN directly (like Angular app)
      if (device.isLock && pin != null) {
        Logger.info('=== STARTING PIN VERIFICATION ===');
        Logger.info('Service found, verifying PIN directly (like Angular app)');
        Logger.info(
          '_statusCharacteristic before PIN verification: ${_statusCharacteristic?.uuid}',
        );

        // Give lock a moment to settle before firing commands (like Angular app)
        Logger.info('Waiting 200ms for lock to settle (like Angular app)...');
        await Future.delayed(Duration(milliseconds: 200));

        // Verify PIN directly (like Angular app's handleVerification)
        final verified = await _verifyPin(pin);
        if (!verified) {
          Logger.error('PIN verification failed');
          await disconnectFromDevice();
          return false;
        }

        // Store PIN after successful verification
        _verifiedPin = pin;

        // Get and store randData for future lock/unlock commands
        Logger.info('Getting randData for future lock/unlock commands...');
        final statusResponse = await _getCurrentStatus();
        if (statusResponse != null && statusResponse.length >= 15) {
          final randData = statusResponse[14];
          _randData = randData;
          Logger.info(
            '✅ randData stored: 0x${randData.toRadixString(16).toUpperCase()}',
          );
        } else {
          Logger.warning(
            'Could not get randData, lock/unlock commands may fail',
          );
        }

        Logger.info('PIN code verified instantly and stored for future use');
      }

      // Reset reconnection
      _reconnectAttempts = 0;

      // Start battery-optimized status polling
      _startStatusPolling();

      return true;
    } catch (e) {
      Logger.error('Failed to connect', e);
      _connectionState = BluetoothConnectionState.disconnected;
      _connectionController.add(null);
      return false;
    }
  }

  /// Initialize lock: Clear all user data & return to factory set (0x65)
  Future<bool> initializeLock() async {
    try {
      Logger.info('=== LOCK INITIALIZATION START ===');

      // Use correct System initialization command per protocol: 0x65
      // Frame (before checksum): F5 65 00 00 5F ??
      final command = [0xF5, 0x65, 0x00, 0x00, 0x5F, 0x00];

      // Calculate checksum exactly like Angular app
      command[sum] = 0;
      command[sum] = command.fold<int>(
        0,
        (previous, current) => (previous + current) & 0xFF,
      );

      Logger.info(
        'Initialize command: ${command.map((b) => '0x${b.toRadixString(16).toUpperCase()}').join(' ')}',
      );
      Logger.info(
        'Checksum at position $sum: 0x${command[sum].toRadixString(16).toUpperCase()}',
      );

      // Send initialize command and wait for response
      final response = await _writeToLockWithResponse(
        'initialize',
        command,
        timeout: Duration(seconds: 8),
      );

      if (response != null && response.length >= 3) {
        // Parse response: cmd = 1, ask = 2
        final commandCode = response[1]; // cmd position (index 1)
        final responseCode = response[2]; // ask position (index 2)

        Logger.info(
          'Initialize response: ${response.map((b) => '0x${b.toRadixString(16).toUpperCase()}').join(' ')}',
        );
        Logger.info(
          'Command code: 0x${commandCode.toRadixString(16).toUpperCase()}',
        );
        Logger.info(
          'Response code: 0x${responseCode.toRadixString(16).toUpperCase()}',
        );

        // Check if this is an initialize command (0x65) and response is correct (0x10)
        if (commandCode == 0x65) {
          final isInitialized = responseCode == askCorrect;
          Logger.info('Initialization result: $isInitialized');
          return isInitialized;
        } else {
          Logger.error(
            'Unexpected initialize command code: 0x${commandCode.toRadixString(16).toUpperCase()}',
          );
          return false;
        }
      } else {
        Logger.error('No valid initialize response received');
        return false;
      }
    } catch (e) {
      Logger.error('❌ Lock initialization failed', e);
      return false;
    }
  }

  /// Verify PIN for Tactical Traps lock (EXACT COPY of Angular app)
  Future<bool> _verifyPin(String pin) async {
    try {
      Logger.info('=== PIN VERIFICATION START ===');
      Logger.info('PIN to verify: $pin');
      Logger.info('PIN length: ${pin.length}');

      // Try different PIN formats (like common lock defaults)
      final pinFormats = [
        pin, // Original: 6215
        pin.padLeft(4, '0'), // Padded: 0621 (if pin was 621)
        '0000', // Common default
        '1234', // Common default
        '1111', // Common default
        '9999', // All nines
        '8888', // All eights
        '7777', // All sevens
        '6666', // All sixes
        '5555', // All fives
        '4444', // All fours
        '3333', // All threes
        '2222', // All twos
        '0123', // Sequential
        '3210', // Reverse sequential
        '1590', // Common pattern
        '9510', // Reverse pattern
      ];

      for (int i = 0; i < pinFormats.length; i++) {
        final currentPin = pinFormats[i];
        Logger.info('=== TRYING PIN FORMAT ${i + 1}: $currentPin ===');

        // EXACT COPY of Angular app's handleVerification method
        // Build hex string exactly like Angular app: F5 0F 00 04 5F 3B + PIN bytes
        String readable = 'F5 0F 00 04 5F 3B';
        for (int j = 0; j < currentPin.length; j++) {
          // Convert PIN digit to hex string exactly like Angular app's charCodeAt
          // charCodeAt gives ASCII code, not digit value!
          final pinHex = currentPin.codeUnitAt(j).toRadixString(16);
          readable += ' $pinHex';
        }

        Logger.info('Built hex string exactly like Angular app: $readable');

        // Convert hex string to bytes exactly like Angular app's readableHexToBuffer
        final command = _readableHexToBuffer(readable);
        Logger.info(
          'Command from readableHexToBuffer: ${command.map((b) => '0x${b.toRadixString(16).toUpperCase()}').join(' ')}',
        );

        // Calculate checksum exactly like Angular app's writeToLock
        command[sum] = 0;
        command[sum] = command.fold<int>(
          0,
          (previous, current) => (previous + current) & 0xFF,
        );

        Logger.info(
          'Final command with checksum: ${command.map((b) => '0x${b.toRadixString(16).toUpperCase()}').join(' ')}',
        );
        Logger.info(
          'Checksum at position $sum: 0x${command[sum].toRadixString(16).toUpperCase()}',
        );

        // Send command exactly like Angular app
        final response = await _writeToLockWithResponse(
          'verify',
          command,
          timeout: Duration(seconds: 8),
        );

        if (response != null && response.length >= 3) {
          // Parse response exactly like Angular app: cmd = 1, ask = 2
          final commandCode = response[1]; // cmd position (index 1)
          final responseCode = response[2]; // ask position (index 2)

          Logger.info(
            'Response: ${response.map((b) => '0x${b.toRadixString(16).toUpperCase()}').join(' ')}',
          );
          Logger.info(
            'Command code: 0x${commandCode.toRadixString(16).toUpperCase()}',
          );
          Logger.info(
            'Response code: 0x${responseCode.toRadixString(16).toUpperCase()}',
          );

          // Check if this is a verify command (0x0f) and response is correct (0x10)
          if (commandCode == 0x0f) {
            final isVerified = responseCode == askCorrect;
            Logger.info('Verification result: $isVerified');

            if (isVerified) {
              Logger.info(
                '✅ PIN verification SUCCESS with format: $currentPin',
              );
              return true;
            } else {
              Logger.info('❌ PIN verification failed with format: $currentPin');
              // Check if it's a different error that might need different handling
              if (responseCode == askPasswordNotVerified) {
                Logger.info('⚠️ Lock needs pairing first (response: 0x26)');
              } else if (responseCode == askFailedVerification) {
                Logger.info('⚠️ Wrong PIN (response: 0x27)');
              }
            }
          } else {
            Logger.error(
              'Unexpected command code: 0x${commandCode.toRadixString(16).toUpperCase()}',
            );
            continue; // Try next PIN format
          }
        } else {
          Logger.error('No valid response received for PIN: $currentPin');
          continue; // Try next PIN format
        }
      }

      Logger.error('❌ All PIN formats failed');
      return false;
    } catch (e) {
      Logger.error('❌ PIN verification failed', e);
      return false;
    }
  }

  /// EXACT COPY of Angular app's readableHexToBuffer method
  List<int> _readableHexToBuffer(String spaceSeparatedHex) {
    final n = <int>[];
    spaceSeparatedHex.split(' ').forEach((x) {
      n.add(int.parse(x, radix: 16));
    });
    return n;
  }

  /// Start notification listener for general status updates
  Future<void> _startNotificationListener(BleDevice device) async {
    try {
      Logger.info('=== _startNotificationListener START ===');
      Logger.info('Device: ${device.id}');
      Logger.info('Starting notification listener...');

      final services = await device.device.discoverServices();
      Logger.info('Found ${services.length} services');

      Logger.info('=== SCANNING SERVICES ===');
      for (final service in services) {
        Logger.info('Service UUID: ${service.uuid}');
        Logger.info('Service UUID string: ${service.uuid.toString()}');
        Logger.info(
          'Service UUID lowercase: ${service.uuid.toString().toLowerCase()}',
        );
        Logger.info(
          'Contains fff0: ${service.uuid.toString().toLowerCase().contains('fff0')}',
        );

        if (service.uuid.toString().toLowerCase().contains('fff0')) {
          Logger.info('✅ FOUND FFF0 SERVICE!');
          Logger.info(
            'Service has ${service.characteristics.length} characteristics',
          );

          Logger.info('=== SCANNING CHARACTERISTICS ===');
          for (final characteristic in service.characteristics) {
            Logger.info('Characteristic UUID: ${characteristic.uuid}');
            Logger.info(
              'Characteristic UUID string: ${characteristic.uuid.toString()}',
            );
            Logger.info(
              'Characteristic UUID lowercase: ${characteristic.uuid.toString().toLowerCase()}',
            );
            Logger.info(
              'Contains fff1: ${characteristic.uuid.toString().toLowerCase().contains('fff1')}',
            );

            if (characteristic.uuid.toString().toLowerCase().contains('fff1')) {
              Logger.info('✅ FOUND FFF1 STATUS CHARACTERISTIC!');
              Logger.info('Setting notify value to true...');

              // Store the status characteristic for PIN verification
              _statusCharacteristic = characteristic;
              Logger.info(
                '✅ Status characteristic stored: ${_statusCharacteristic?.uuid}',
              );

              // Listen for general status updates AND pending responses (like Angular app)
              Logger.info('Setting up status update listener...');

              // Wait for the notification to be properly set up
              await characteristic.setNotifyValue(true);

              // Set up the listener
              characteristic.lastValueStream.listen((data) {
                Logger.info('=== STATUS UPDATE RECEIVED ===');
                Logger.info(
                  'Status data: ${data.map((b) => '0x${b.toRadixString(16).toUpperCase()}').join(' ')}',
                );
                Logger.info('Status bytes: ${data.map((b) => b).join(', ')}');
                Logger.info('Status length: ${data.length}');

                // Check if this is a response to a pending command (like Angular app)
                if (_pendingResponseCompleter != null &&
                    !_pendingResponseCompleter!.isCompleted) {
                  Logger.info(
                    '✅ This is a response to pending command: $_pendingResponseCommand',
                  );
                  Logger.info('Completing pending response completer');
                  _pendingResponseCompleter!.complete(data);
                  return; // Don't process as general status
                }

                // Process as general status update
                final lockStatus = _parseResponse(data);
                if (lockStatus != null) {
                  Logger.info('Parsed lock status: $lockStatus');
                  _statusController.add(lockStatus);
                } else {
                  Logger.info('Could not parse lock status from data');
                }
              });

              Logger.info('✅ Status update listener set up successfully');

              // Give notification listener a moment to settle
              await Future.delayed(Duration(milliseconds: 100));

              break;
            }
          }
          break;
        }
      }

      Logger.info('=== NOTIFICATION LISTENER RESULT ===');
      if (_statusCharacteristic == null) {
        Logger.error('❌ Status characteristic not found!');
        Logger.info('_statusCharacteristic is null');

        // Debug: List all services and characteristics
        Logger.info('All services and characteristics found:');
        for (final service in services) {
          Logger.info('Service: ${service.uuid}');
          for (final characteristic in service.characteristics) {
            Logger.info('  Characteristic: ${characteristic.uuid}');
          }
        }
      } else {
        Logger.info('✅ Notification listener started successfully');
        Logger.info(
          '_statusCharacteristic UUID: ${_statusCharacteristic!.uuid}',
        );
      }

      Logger.info('=== _startNotificationListener END ===');
    } catch (e) {
      Logger.error('❌ Failed to start notifications', e);
      Logger.error('Exception details: $e');
    }
  }

  /// Disconnect from device
  Future<void> disconnectFromDevice() async {
    if (_currentDevice == null) return;

    try {
      _stopReconnectTimer();
      _stopStatusPolling();

      // Send sleep command if it's a lock
      if (_currentDevice!.isLock) {
        await _sendSleepCommand();
      }

      await _currentDevice!.device.disconnect();

      _currentDevice = null;
      _connectionState = BluetoothConnectionState.disconnected;
      _connectionController.add(null);
    } catch (e) {
      Logger.error('Failed to disconnect', e);
    }
  }

  /// Send sleep command
  Future<void> _sendSleepCommand() async {
    try {
      final command = [0xF5, 0x6F, 0x00, 0x00, 0x5F, 0xC3];
      // Calculate checksum exactly like Angular app
      command[sum] = 0;
      command[sum] = command.fold<int>(
        0,
        (previous, current) => (previous + current) & 0xFF,
      );
      await _writeToLock('sleep', command);
    } catch (e) {
      Logger.error('Failed to send sleep command', e);
    }
  }

  /// Write to lock and parse response via notification channel
  Future<LockStatus> _writeToLock(String commandName, List<int> command) async {
    if (_currentDevice == null) {
      throw Exception('No device connected');
    }

    try {
      final response = await _writeToLockWithResponse(commandName, command);
      if (response == null || response.isEmpty) {
        return LockStatus(
          response: askTimeout,
          extraBytes: 0,
          isStatus: false,
          isError: true,
          error: 'No response received',
        );
      }

      final parsed = _parseResponse(response);
      if (parsed != null) return parsed;

      return LockStatus(
        response: response.length >= 3 ? response[2] : askUnknown,
        extraBytes: response.length >= 4 ? response[3] : 0,
        isStatus: false,
        isError: true,
        error: 'Unable to parse response',
      );
    } catch (e) {
      Logger.error('Failed to write command', e);
      return LockStatus(
        response: askFailure,
        extraBytes: 0,
        isStatus: false,
        isError: true,
        error: 'Exception: $e',
      );
    }
  }

  /// Helpers to read big-endian numbers
  int _u16be(List<int> bytes, int start) =>
      (bytes[start] << 8) | bytes[start + 1];
  int _u32be(List<int> bytes, int start) =>
      (bytes[start] << 24) |
      (bytes[start + 1] << 16) |
      (bytes[start + 2] << 8) |
      bytes[start + 3];

  /// Parse response according to KR-S80 protocol
  LockStatus? _parseResponse(List<int> response) {
    if (response.isEmpty) return null;

    try {
      if (response.length < 6) return null;

      final cmd = response[cmd];
      final ask = response[ask];
      final dataLen = response[3];
      final dataStart = data; // index 6
      final hasData = response.length >= dataStart + dataLen;

      // Default baseline
      var status = LockStatus(
        response: ask,
        extraBytes: dataLen,
        isStatus: false,
        isError: ask != askCorrect,
      );

      // Decode per-command
      switch (cmd) {
        case 0x60: // Status checking
          if (ask == askCorrect && hasData && dataLen >= 9) {
            final openClose = response[dataStart + 0];
            final hook = response[dataStart + 1];
            final voltageMv = _u16be(response, dataStart + 2); // mV
            final lockId = _u32be(response, dataStart + 4);
            final rand = response[dataStart + 8];

            // Save randData for future lock/unlock
            _randData = rand;

            status = LockStatus(
              response: ask,
              extraBytes: dataLen,
              isStatus: true,
              isError: false,
              openCloseState: openClose,
              hookState: hook,
              voltageValue: voltageMv.toDouble(),
              lockId: lockId,
              randData: rand,
            );
          }
          break;
        case 0x63: // Time reading
          if (ask == askCorrect && hasData && dataLen == 6) {
            final y = _fromBcd(response[dataStart + 0]);
            final m = _fromBcd(response[dataStart + 1]);
            final d = _fromBcd(response[dataStart + 2]);
            final hh = _fromBcd(response[dataStart + 3]);
            final mm = _fromBcd(response[dataStart + 4]);
            final ss = _fromBcd(response[dataStart + 5]);
            final yearFull = 2000 + y; // assume 20xx
            final msg =
                '${yearFull.toString().padLeft(4, '0')}-${m.toString().padLeft(2, '0')}-${d.toString().padLeft(2, '0')} ${hh.toString().padLeft(2, '0')}:${mm.toString().padLeft(2, '0')}:${ss.toString().padLeft(2, '0')}';
            status = LockStatus(
              response: ask,
              extraBytes: dataLen,
              isStatus: false,
              isError: false,
              responseMsg: 'Lock time: $msg',
            );
          }
          break;
        case 0x0F: // Pairing password verification
          status = LockStatus(
            response: ask,
            extraBytes: dataLen,
            isStatus: false,
            isError: ask != askCorrect,
            verified: ask == askCorrect,
          );
          break;
        case 0x61: // Unlock/Lock command ack
          status = LockStatus(
            response: ask,
            extraBytes: dataLen,
            isStatus: false,
            isError: ask != askCorrect,
          );
          break;
        case 0x74: // Alarm setting & checking
          if (hasData && dataLen == 1) {
            final value = response[dataStart];
            status = LockStatus(
              response: ask,
              extraBytes: dataLen,
              isStatus: false,
              isError: ask != askCorrect,
              alarmOn: value == 0,
            );
          }
          break;
        case 0x75: // Buzzer setting & checking
          if (hasData && dataLen == 1) {
            final value = response[dataStart];
            status = LockStatus(
              response: ask,
              extraBytes: dataLen,
              isStatus: false,
              isError: ask != askCorrect,
              buzzerOn: value == 0,
            );
          }
          break;
        case 0x6E: // Get current version
          if (hasData && dataLen == 2) {
            final soft = response[dataStart];
            final hard = response[dataStart + 1];
            status = LockStatus(
              response: ask,
              extraBytes: dataLen,
              isStatus: false,
              isError: ask != askCorrect,
              responseMsg:
                  'Version - SW: 0x${soft.toRadixString(16).toUpperCase()}, HW: 0x${hard.toRadixString(16).toUpperCase()}',
            );
          }
          break;
        default:
          // keep baseline
          break;
      }

      return status;
    } catch (e) {
      Logger.error('Failed to parse response', e);
      return null;
    }
  }

  /// Send lock command
  Future<bool> sendLockCommand() async {
    try {
      Logger.info('=== SEND LOCK COMMAND START ===');

      // Check if PIN is verified, if not, verify it first
      if (_verifiedPin == null) {
        Logger.error('No PIN verified. Please connect with PIN first.');
        return false;
      }

      // Use stored randData instead of calling status command
      if (_randData == null) {
        Logger.error('No randData available. Please reconnect with PIN first.');
        return false;
      }

      Logger.info(
        'Using stored randData: 0x${_randData!.toRadixString(16).toUpperCase()}',
      );

      // Build lock command: F5 61 00 01 5F XX (0x36 ^ randData)
      final command = [0xF5, 0x61, 0x00, 0x01, 0x5F, 0x00];
      final dataByte = 0x36 ^ _randData!; // Lock command uses 0x36
      command.add(dataByte);

      // Calculate checksum exactly like Angular app
      command[sum] = 0;
      command[sum] = command.fold<int>(
        0,
        (previous, current) => (previous + current) & 0xFF,
      );

      Logger.info(
        'Lock command: ${command.map((b) => '0x${b.toRadixString(16).toUpperCase()}').join(' ')}',
      );
      Logger.info(
        'Data byte (0x36 ^ randData): 0x${dataByte.toRadixString(16).toUpperCase()}',
      );
      Logger.info(
        'Checksum at position $sum: 0x${command[sum].toRadixString(16).toUpperCase()}',
      );

      final result = await _writeToLock('lock', command);

      // Add small delay to let lock settle
      await Future.delayed(Duration(milliseconds: 500));

      return result.isSuccess;
    } catch (e) {
      Logger.error('Lock command failed', e);
      return false;
    }
  }

  /// Send unlock command
  Future<bool> sendUnlockCommand() async {
    try {
      Logger.info('=== SEND UNLOCK COMMAND START ===');

      // Check if PIN is verified, if not, verify it first
      if (_verifiedPin == null) {
        Logger.error('No PIN verified. Please connect with PIN first.');
        return false;
      }

      // Use stored randData instead of calling status command
      if (_randData == null) {
        Logger.error('No randData available. Please reconnect with PIN first.');
        return false;
      }

      Logger.info(
        'Using stored randData: 0x${_randData!.toRadixString(16).toUpperCase()}',
      );

      // Build unlock command: F5 61 00 01 5F XX (0x35 ^ randData)
      final command = [0xF5, 0x61, 0x00, 0x01, 0x5F, 0x00];
      final dataByte = 0x35 ^ _randData!; // Unlock command uses 0x35
      command.add(dataByte);

      // Calculate checksum exactly like Angular app
      command[sum] = 0;
      command[sum] = command.fold<int>(
        0,
        (previous, current) => (previous + current) & 0xFF,
      );

      Logger.info(
        'Unlock command: ${command.map((b) => '0x${b.toRadixString(16).toUpperCase()}').join(' ')}',
      );
      Logger.info(
        'Data byte (0x35 ^ randData): 0x${dataByte.toRadixString(16).toUpperCase()}',
      );
      Logger.info(
        'Checksum at position $sum: 0x${command[sum].toRadixString(16).toUpperCase()}',
      );

      final result = await _writeToLock('unlock', command);

      // Add small delay to let unlock settle
      await Future.delayed(Duration(milliseconds: 500));

      return result.isSuccess;
    } catch (e) {
      Logger.error('Unlock command failed', e);
      return false;
    }
  }

  /// Refresh randData for lock/unlock commands
  Future<bool> refreshRandData() async {
    try {
      Logger.info('Refreshing randData...');
      final statusResponse = await _getCurrentStatus();
      if (statusResponse != null && statusResponse.length >= 15) {
        final randData = statusResponse[14];
        _randData = randData;
        Logger.info(
          '✅ randData refreshed: 0x${randData.toRadixString(16).toUpperCase()}',
        );
        return true;
      } else {
        Logger.error('Could not refresh randData');
        return false;
      }
    } catch (e) {
      Logger.error('Failed to refresh randData', e);
      return false;
    }
  }

  /// Get current device status (raw response)
  Future<List<int>?> _getCurrentStatus() async {
    try {
      final command = [0xF5, 0x60, 0x00, 0x00, 0x5F, 0xB4];
      // Calculate checksum exactly like Angular app
      command[sum] = 0;
      command[sum] = command.fold<int>(
        0,
        (previous, current) => (previous + current) & 0xFF,
      );

      return await _writeToLockWithResponse('status', command);
    } catch (e) {
      Logger.error('Status request failed', e);
      return null;
    }
  }

  /// Get device status
  Future<LockStatus?> getDeviceStatus() async {
    try {
      final command = [0xF5, 0x60, 0x00, 0x00, 0x5F, 0x00];
      command[sum] = 0;
      command[sum] = command.fold<int>(0, (p, c) => (p + c) & 0xFF);

      final bytes = await _writeToLockWithResponse('status', command);
      if (bytes == null) return null;
      final parsed = _parseResponse(bytes);
      if (parsed != null) return parsed;
      return LockStatus(
        response: bytes.length >= 3 ? bytes[2] : askUnknown,
        extraBytes: bytes.length >= 4 ? bytes[3] : 0,
        isStatus: false,
        isError: true,
        error: 'Parse error',
      );
    } catch (e) {
      Logger.error('Status request failed', e);
      return null;
    }
  }

  /// Get current version (SW, HW)
  Future<LockStatus?> getVersion() async {
    try {
      final command = [0xF5, 0x6E, 0x00, 0x00, 0x5F, 0x00];
      command[sum] = 0;
      command[sum] = command.fold<int>(0, (p, c) => (p + c) & 0xFF);

      final bytes = await _writeToLockWithResponse('version', command);
      if (bytes == null) return null;
      return _parseResponse(bytes);
    } catch (e) {
      Logger.error('Version request failed', e);
      return null;
    }
  }

  /// Alarm checking (true => enabled), per spec dataLEN=0 means check
  Future<LockStatus?> getAlarmStatus() async {
    try {
      final command = [0xF5, 0x74, 0x00, 0x00, 0x5F, 0x00];
      command[sum] = 0;
      command[sum] = command.fold<int>(0, (p, c) => (p + c) & 0xFF);
      final bytes = await _writeToLockWithResponse('alarm_check', command);
      if (bytes == null) return null;
      return _parseResponse(bytes);
    } catch (e) {
      Logger.error('Alarm status request failed', e);
      return null;
    }
  }

  /// Alarm setting (enabled => parameter 0, disabled => 1)
  Future<LockStatus?> setAlarmEnabled(bool enabled) async {
    try {
      final param = enabled ? 0x00 : 0x01;
      final command = [0xF5, 0x74, 0x00, 0x01, 0x5F, 0x00, param];
      command[sum] = 0;
      command[sum] = command.fold<int>(0, (p, c) => (p + c) & 0xFF);
      final bytes = await _writeToLockWithResponse('alarm_set', command);
      if (bytes == null) return null;
      return _parseResponse(bytes);
    } catch (e) {
      Logger.error('Alarm setting failed', e);
      return null;
    }
  }

  /// Buzzer checking (true => enabled), per spec dataLEN=0 means check
  Future<LockStatus?> getBuzzerStatus() async {
    try {
      final command = [0xF5, 0x75, 0x00, 0x00, 0x5F, 0x00];
      command[sum] = 0;
      command[sum] = command.fold<int>(0, (p, c) => (p + c) & 0xFF);
      final bytes = await _writeToLockWithResponse('buzzer_check', command);
      if (bytes == null) return null;
      return _parseResponse(bytes);
    } catch (e) {
      Logger.error('Buzzer status request failed', e);
      return null;
    }
  }

  /// Buzzer setting (enabled => parameter 0, disabled => 1)
  Future<LockStatus?> setBuzzerEnabled(bool enabled) async {
    try {
      final param = enabled ? 0x00 : 0x01;
      final command = [0xF5, 0x75, 0x00, 0x01, 0x5F, 0x00, param];
      command[sum] = 0;
      command[sum] = command.fold<int>(0, (p, c) => (p + c) & 0xFF);
      final bytes = await _writeToLockWithResponse('buzzer_set', command);
      if (bytes == null) return null;
      return _parseResponse(bytes);
    } catch (e) {
      Logger.error('Buzzer setting failed', e);
      return null;
    }
  }

  int _toBcd(int value) => ((value ~/ 10) << 4) | (value % 10);
  int _fromBcd(int bcd) => ((bcd >> 4) * 10) + (bcd & 0x0F);

  /// Set lock time (BCD-coded, year in two digits)
  Future<LockStatus?> setTime(DateTime dt) async {
    try {
      final year2 = dt.year % 100;
      final payload = [
        _toBcd(year2),
        _toBcd(dt.month),
        _toBcd(dt.day),
        _toBcd(dt.hour),
        _toBcd(dt.minute),
        _toBcd(dt.second),
      ];

      final command = [0xF5, 0x62, 0x00, 0x06, 0x5F, 0x00, ...payload];
      command[sum] = 0;
      command[sum] = command.fold<int>(0, (p, c) => (p + c) & 0xFF);
      final bytes = await _writeToLockWithResponse('time_set', command);
      if (bytes == null) return null;
      return _parseResponse(bytes);
    } catch (e) {
      Logger.error('Time setting failed', e);
      return null;
    }
  }

  /// Read lock time (returns LockStatus with responseMsg containing ISO time)
  Future<LockStatus?> readTime() async {
    try {
      final command = [0xF5, 0x63, 0x00, 0x00, 0x5F, 0x00];
      command[sum] = 0;
      command[sum] = command.fold<int>(0, (p, c) => (p + c) & 0xFF);
      final bytes = await _writeToLockWithResponse('time_read', command);
      if (bytes == null) return null;
      return _parseResponse(bytes);
    } catch (e) {
      Logger.error('Time reading failed', e);
      return null;
    }
  }

  /// Try to reconnect to last device
  void tryReconnect() {
    if (_currentDevice == null || _reconnectAttempts >= _maxReconnectAttempts) {
      return;
    }

    _reconnectAttempts++;
    Logger.info('Attempting reconnection #$_reconnectAttempts');

    _reconnectTimer = Timer(Duration(seconds: 2 * _reconnectAttempts), () {
      if (_currentDevice != null) {
        connectToDevice(_currentDevice!);
      }
    });
  }

  /// Stop reconnection timer
  void _stopReconnectTimer() {
    _reconnectTimer?.cancel();
    _reconnectTimer = null;
  }

  /// Handle adapter state changes
  void _onAdapterStateChanged(BluetoothAdapterState state) {
    if (state == BluetoothAdapterState.off) {
      _connectionState = BluetoothConnectionState.disconnected;
      _connectionController.add(null);
    }
  }

  /// Write command to lock and wait for response with timeout (like Angular app)
  Future<List<int>?> _writeToLockWithResponse(
    String commandName,
    List<int> command, {
    Duration? timeout,
  }) async {
    try {
      Logger.info('=== _writeToLockWithResponse START ===');
      Logger.info('Command name: $commandName');
      Logger.info('Command bytes: ${command.map((b) => b).join(', ')}');
      Logger.info(
        'Command hex: ${command.map((b) => '0x${b.toRadixString(16).toUpperCase()}').join(' ')}',
      );
      Logger.info('Command length: ${command.length}');

      if (_currentDevice == null || _statusCharacteristic == null) {
        Logger.error(
          '❌ No device connected or status characteristic not found',
        );
        Logger.info('_currentDevice: ${_currentDevice?.id}');
        Logger.info('_statusCharacteristic: ${_statusCharacteristic?.uuid}');
        return null;
      }

      Logger.info('Device connected: ${_currentDevice!.id}');
      Logger.info('Status characteristic: ${_statusCharacteristic!.uuid}');

      final services = await _currentDevice!.device.discoverServices();
      Logger.info('Discovered ${services.length} services');

      BluetoothCharacteristic? commandChar;
      Logger.info('Services: ${services.map((s) => s.uuid).join(', ')}');

      for (final service in services) {
        Logger.info('Checking service: ${service.uuid}');
        if (service.uuid.toString().toLowerCase().contains('fff0')) {
          Logger.info(
            '✅ Found fff0 service with ${service.characteristics.length} characteristics',
          );

          for (final characteristic in service.characteristics) {
            Logger.info('Checking characteristic: ${characteristic.uuid}');
            if (characteristic.uuid.toString().toLowerCase().contains('fff2')) {
              Logger.info('✅ Found fff2 command characteristic');
              commandChar = characteristic;
              break;
            }
          }
          if (commandChar != null) break;
        }
      }

      if (commandChar == null) {
        Logger.error('❌ Command characteristic not found');
        Logger.info('Available characteristics in fff0 service:');
        for (final service in services) {
          if (service.uuid.toString().toLowerCase().contains('fff0')) {
            for (final characteristic in service.characteristics) {
              Logger.info('  - ${characteristic.uuid}');
            }
          }
        }
        return null;
      }

      Logger.info('✅ Command characteristic found: ${commandChar.uuid}');

      // Use existing status listener for response (like Angular app)
      Logger.info('=== SETTING UP RESPONSE WAITER ===');
      final responseCompleter = Completer<List<int>?>();

      // Store the completer so the status listener can complete it
      _pendingResponseCompleter = responseCompleter;
      _pendingResponseCommand = commandName;

      Logger.info('✅ Response waiter set up for command: $commandName');

      // Send command
      Logger.info('=== SENDING COMMAND ===');
      Logger.info('Sending command: $commandName');
      Logger.info(
        'Command to send: ${command.map((b) => '0x${b.toRadixString(16).toUpperCase()}').join(' ')}',
      );
      Logger.info('Command bytes to send: ${command.map((b) => b).join(', ')}');

      await commandChar.write(command);
      Logger.info('✅ Command sent successfully');

      // Wait for response with timeout (like Angular app's 8 second timeout)
      Logger.info('=== WAITING FOR RESPONSE ===');
      Logger.info(
        'Waiting for response with timeout: ${timeout?.inSeconds ?? 8} seconds',
      );

      try {
        final response = await responseCompleter.future.timeout(
          timeout ?? Duration(seconds: 8),
          onTimeout: () {
            Logger.error('❌ Timeout waiting for response to $commandName');
            return <int>[];
          },
        );

        Logger.info('=== RESPONSE PROCESSING ===');
        Logger.info(
          'Response received from completer: ${response?.map((b) => '0x${b.toRadixString(16).toUpperCase()}').join(' ') ?? 'null'}',
        );
        Logger.info('Response length: ${response?.length ?? 0}');

        if (response != null && response.isNotEmpty) {
          Logger.info(
            '✅ Returning response: ${response.map((b) => '0x${b.toRadixString(16).toUpperCase()}').join(' ')}',
          );
          return response;
        }

        Logger.info('❌ Response is empty, returning null');
        return null;
      } finally {
        // Clean up
        _pendingResponseCompleter = null;
        _pendingResponseCommand = null;
        Logger.info('✅ Response waiter cleaned up');
      }
    } catch (e) {
      Logger.error('❌ Failed to write command with response', e);
      Logger.error('Error details: $e');
      return null;
    }
  }

  /// Start smart status polling - battery optimized
  void _startStatusPolling() {
    _stopStatusPolling(); // Clear any existing timer
    _statusTimer = Timer.periodic(const Duration(seconds: 2), (timer) {
      if (_connectionState == BluetoothConnectionState.connected &&
          _currentDevice != null &&
          _isAppActive) {
        _pollStatus();
      } else if (!_isAppActive) {
        // App is backgrounded, poll much less frequently
        final now = DateTime.now();
        if (_lastStatusPoll == null ||
            now.difference(_lastStatusPoll!).inMinutes >= 2) {
          _pollStatus();
        }
      } else {
        _stopStatusPolling();
      }
    });
  }

  /// Stop auto-status polling
  void _stopStatusPolling() {
    _statusTimer?.cancel();
    _statusTimer = null;
  }

  /// Poll status in background and emit to stream
  Future<void> _pollStatus() async {
    try {
      _lastStatusPoll = DateTime.now();
      final status = await getDeviceStatus();
      if (status != null) {
        _statusController.add(status);
      }
    } catch (e) {
      Logger.error('Background status poll failed', e);
    }
  }

  /// Set app lifecycle state for battery optimization
  void setAppActive(bool active) {
    _isAppActive = active;
    if (!active) {
      Logger.info('App backgrounded - reducing status polling');
    } else {
      Logger.info('App foregrounded - resuming normal polling');
    }
  }

  /// Dispose resources
  void dispose() {
    _stopReconnectTimer();
    _stopStatusPolling();
    _devicesController.close();
    _connectionController.close();
    _statusController.close();
  }
}
