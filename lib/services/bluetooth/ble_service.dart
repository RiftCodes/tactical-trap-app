import 'dart:async';
import 'dart:io';

import 'package:flutter/foundation.dart';
import 'package:flutter_blue_plus/flutter_blue_plus.dart';
import 'package:location/location.dart' as loc;
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

  // Store PIN after successful verification
  String? _verifiedPin;

  // Store the randData for lock/unlock commands
  int? _randData;

  // Simple reconnection
  int _reconnectAttempts = 0;
  static const int _maxReconnectAttempts = 3;
  bool _isReconnecting = false;
  DateTime? _lastDiscoverServicesTime;

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

  /// Check Android version for compatibility adjustments
  int _getAndroidVersion() {
    try {
      if (Platform.isAndroid) {
        // For now, return a default value to avoid dependency issues
        // This can be enhanced later with device_info_plus
        return 29; // Assume Android 10 for compatibility
      }
      return 0; // Not Android
    } catch (e) {
      if (kDebugMode) Logger.warning('Could not determine Android version: $e');
      return 29; // Default to Android 10 for safety
    }
  }

  /// Initialize BLE service
  Future<bool> initialize() async {
    try {
      if (kDebugMode) Logger.info('BLE: activate');

      if (!await FlutterBluePlus.isSupported) {
        throw Exception('Bluetooth not supported');
      }

      await _requestPermissions();
      FlutterBluePlus.adapterState.listen(_onAdapterStateChanged);

      return true;
    } catch (e) {
      if (kDebugMode) Logger.error('Failed to initialize BLE service', e);
      return false;
    }
  }

  /// Request permissions
  Future<void> _requestPermissions() async {
    try {
      if (kDebugMode) {
        Logger.info('Requesting permissions for BLE operation');
      }

      // iOS handles Bluetooth permissions automatically via Core Bluetooth
      // Only Location permission is needed for BLE scanning on iOS
      if (Platform.isIOS) {
        // On iOS, use location package to request permission (shows native iOS dialog)
        final location = loc.Location();

        // Check if location services are enabled
        bool serviceEnabled = await location.serviceEnabled();
        if (!serviceEnabled) {
          if (kDebugMode) {
            Logger.info(
              'Location services are disabled, requesting to enable...',
            );
          }
          serviceEnabled = await location.requestService();
        }

        // Request permission using location package (triggers native iOS dialog)
        loc.PermissionStatus permissionStatus = await location.hasPermission();

        if (kDebugMode) {
          Logger.info('Location permission status: $permissionStatus');
        }

        if (permissionStatus == loc.PermissionStatus.denied) {
          if (kDebugMode) {
            Logger.info('Location permission denied, requesting...');
          }
          permissionStatus = await location.requestPermission();

          if (kDebugMode) {
            Logger.info(
              'Location permission status after request: $permissionStatus',
            );
          }
        }

        // Check if permission is granted
        if (permissionStatus == loc.PermissionStatus.denied ||
            permissionStatus == loc.PermissionStatus.deniedForever) {
          if (kDebugMode) {
            Logger.warning(
              'Location permission not granted. BLE scanning requires location permission on iOS.',
            );
          }
          // If denied forever, open settings
          if (permissionStatus == loc.PermissionStatus.deniedForever) {
            await openAppSettings();
          }
        }
      } else {
        // Android: Request Bluetooth permissions first
        var bluetoothStatus = await Permission.bluetooth.request();
        if (kDebugMode) {
          Logger.info('Bluetooth permission status: $bluetoothStatus');
        }

        var bluetoothScanStatus = await Permission.bluetoothScan.request();
        if (kDebugMode) {
          Logger.info('Bluetooth scan permission status: $bluetoothScanStatus');
        }

        var bluetoothConnectStatus = await Permission.bluetoothConnect
            .request();
        if (kDebugMode) {
          Logger.info(
            'Bluetooth connect permission status: $bluetoothConnectStatus',
          );
        }

        // For Android 10 and below, location permission is critical for BLE scanning
        var locationStatus = await Permission.location.status;
        if (locationStatus.isDenied) {
          if (kDebugMode) {
            Logger.info('Location permission denied, requesting...');
          }
          locationStatus = await Permission.location.request();
          if (locationStatus.isDenied) {
            // Try to request again with explanation
            if (kDebugMode) {
              Logger.info('Location permission still denied, retrying...');
            }
            locationStatus = await Permission.location.request();
          }
        }

        if (kDebugMode) {
          Logger.info('Location permission status: $locationStatus');
        }

        // Additional location permission for Android 10 compatibility
        var locationWhenInUseStatus = await Permission.locationWhenInUse.status;
        if (locationWhenInUseStatus.isDenied) {
          if (kDebugMode) {
            Logger.info(
              'Location when in use permission denied, requesting...',
            );
          }
          locationWhenInUseStatus = await Permission.locationWhenInUse
              .request();
        }

        if (kDebugMode) {
          Logger.info(
            'Location when in use permission status: $locationWhenInUseStatus',
          );
          Logger.info('All permissions requested successfully');
        }

        // Check if critical permissions are granted
        if (!bluetoothStatus.isGranted ||
            !bluetoothScanStatus.isGranted ||
            !locationStatus.isGranted) {
          if (kDebugMode) {
            Logger.warning(
              'Some critical permissions are not granted. BLE scanning may fail.',
            );
          }
        }
      }
    } catch (e) {
      if (kDebugMode) {
        Logger.error('Failed to request permissions', e);
      }
    }
  }


  /// Check and enable both Bluetooth and GPS services
  Future<bool> _checkAndEnableBluetoothAndGPS() async {
    try {
      if (kDebugMode) {
        Logger.info('Checking Bluetooth and GPS status...');
      }

      // Check Bluetooth status
      final bluetoothWorking = await _checkBluetoothStatus();
      if (kDebugMode) {
        Logger.info('Bluetooth working: $bluetoothWorking');
      }

      // Check GPS status
      final gpsEnabled = await _isGPSEnabled();
      if (kDebugMode) {
        Logger.info('GPS enabled: $gpsEnabled');
      }

      // If both are working, return true
      if (bluetoothWorking && gpsEnabled) {
        if (kDebugMode) {
          Logger.info('Both Bluetooth and GPS are working!');
        }
        return true;
      }

      // Enable Bluetooth if needed
      if (!bluetoothWorking) {
        if (kDebugMode) {
          Logger.info('Bluetooth disabled, attempting to enable...');
        }

        final bluetoothEnabled = await _enableBluetooth();
        if (!bluetoothEnabled) {
          if (kDebugMode) {
            Logger.error('Failed to enable Bluetooth');
          }
          return false;
        }
      }

      // Enable GPS if needed
      if (!gpsEnabled) {
        if (kDebugMode) {
          Logger.info('GPS disabled, showing enable dialog...');
        }

        // Show GPS enable dialog and wait for user to enable manually
        final gpsEnabledResult = await _showGPSEnableDialog();
        if (!gpsEnabledResult) {
          if (kDebugMode) {
            Logger.error('GPS was not enabled by user');
          }
          return false;
        }
      }

      // Final check
      final finalBluetoothStatus = await _checkBluetoothStatus();
      final finalGPSStatus = await _isGPSEnabled();

      if (kDebugMode) {
        Logger.info(
          'Final status - Bluetooth: $finalBluetoothStatus, GPS: $finalGPSStatus',
        );
      }

      return finalBluetoothStatus && finalGPSStatus;
    } catch (e) {
      if (kDebugMode) {
        Logger.error('Error checking and enabling Bluetooth and GPS', e);
      }
      return false;
    }
  }

  /// Show dialog to user about enabling GPS/Location services
  Future<bool> _showGPSEnableDialog() async {
    try {
      if (kDebugMode) {
        Logger.info('Showing GPS enable dialog...');
      }

      // Try to request location services using the location package
      // This will show the system dialog to enable location services
      final location = loc.Location();

      if (kDebugMode) {
        Logger.info('Requesting location services using location package...');
      }

      // This will show the system dialog to enable location services
      final locationEnabled = await location.requestService();

      if (kDebugMode) {
        Logger.info('Location services request result: $locationEnabled');
      }

      if (locationEnabled) {
        if (kDebugMode) {
          Logger.info(
            'Location services enabled by user through system dialog!',
          );
        }
        return true;
      }

      // If user didn't enable through system dialog, wait for manual enable
      if (kDebugMode) {
        Logger.info(
          'User did not enable location services through system dialog.',
        );
        Logger.info('Waiting for manual enable from notification panel...');
      }

      return await _waitForGPSManualEnable();
    } catch (e) {
      if (kDebugMode) {
        Logger.error('Error showing GPS enable dialog', e);
      }
      // Fallback to manual waiting
      return await _waitForGPSManualEnable();
    }
  }

  /// Check GPS status more accurately using location package

  /// Check if GPS is specifically enabled using location package
  Future<bool> _isGPSEnabled() async {
    try {
      // Use the location package to check if location services are enabled
      final location = loc.Location();
      final locationEnabled = await location.serviceEnabled();

      if (kDebugMode) {
        Logger.info('GPS enabled check (location package): $locationEnabled');
      }

      return locationEnabled;
    } catch (e) {
      if (kDebugMode) {
        Logger.error('Error checking GPS status with location package', e);
      }
      // Fallback to permission handler
      try {
        final locationEnabled =
            await Permission.location.serviceStatus.isEnabled;
        if (kDebugMode) {
          Logger.info('GPS enabled check (fallback): $locationEnabled');
        }
        return locationEnabled;
      } catch (e2) {
        if (kDebugMode) {
          Logger.error('Error in fallback GPS check', e2);
        }
        return false;
      }
    }
  }

  /// Programmatically enable Bluetooth
  Future<bool> _enableBluetooth() async {
    try {
      if (kDebugMode) {
        Logger.info('Attempting to enable Bluetooth programmatically...');
      }

      // Check current status
      final currentState = await FlutterBluePlus.adapterState.first;
      if (currentState == BluetoothAdapterState.on) {
        if (kDebugMode) {
          Logger.info('Bluetooth is already enabled');
        }
        return true;
      }

      // Try to enable Bluetooth using FlutterBluePlus
      if (kDebugMode) {
        Logger.info('Requesting system to enable Bluetooth...');
      }

      await FlutterBluePlus.turnOn();

      // Wait for Bluetooth to turn on
      await Future.delayed(Duration(seconds: 2));

      // Check if Bluetooth was enabled
      final newState = await FlutterBluePlus.adapterState.first;
      final isEnabled = newState == BluetoothAdapterState.on;

      if (kDebugMode) {
        Logger.info('Bluetooth enable result: $isEnabled (state: $newState)');
      }

      return isEnabled;
    } catch (e) {
      if (kDebugMode) {
        Logger.error('Failed to enable Bluetooth programmatically', e);
      }
      return false;
    }
  }

  /// Wait for user to manually enable GPS
  Future<bool> _waitForGPSManualEnable() async {
    if (kDebugMode) {
      Logger.info('Waiting for user to manually enable GPS...');
    }

    // Check current status
    var gpsEnabled = await _isGPSEnabled();

    if (gpsEnabled) {
      if (kDebugMode) {
        Logger.info('GPS is already enabled');
      }
      return true;
    }

    if (kDebugMode) {
      Logger.info(
        'GPS disabled, waiting for user to enable from notification panel...',
      );
      Logger.info(
        'Please enable GPS from the notification panel or quick settings',
      );
    }

    // Wait and check periodically for up to 15 seconds (more reasonable)
    for (int i = 0; i < 5; i++) {
      await Future.delayed(Duration(seconds: 3));

      gpsEnabled = await _isGPSEnabled();

      if (kDebugMode) {
        Logger.info('GPS check $i: $gpsEnabled');
      }

      if (gpsEnabled) {
        if (kDebugMode) {
          Logger.info('GPS enabled by user after waiting!');
        }
        return true;
      }

      if (kDebugMode) {
        Logger.info(
          'Still waiting for GPS to be enabled... (attempt ${i + 1}/10)',
        );
      }
    }

    if (kDebugMode) {
      Logger.warning('GPS not enabled by user after waiting period');
    }
    return false;
  }

  /// Check if Bluetooth is enabled and working
  Future<bool> _checkBluetoothStatus() async {
    try {
      // Check if Bluetooth is supported
      if (!await FlutterBluePlus.isSupported) {
        if (kDebugMode) {
          Logger.error('Bluetooth LE not supported on this device');
        }
        return false;
      }

      // Check Bluetooth adapter state
      final adapterState = await FlutterBluePlus.adapterState.first;
      if (kDebugMode) {
        Logger.info('Bluetooth adapter state: $adapterState');
      }

      // Check if Bluetooth is enabled
      if (adapterState != BluetoothAdapterState.on) {
        if (kDebugMode) {
          Logger.warning(
            'Bluetooth is not enabled. Current state: $adapterState',
          );
        }
        return false;
      }

      return true;
    } catch (e) {
      if (kDebugMode) {
        Logger.error('Error checking Bluetooth status', e);
      }
      return false;
    }
  }

  /// Check if all required permissions are granted
  Future<bool> _checkRequiredPermissions() async {
    try {
      if (Platform.isIOS) {
        // On iOS, check Location permission using location package
        final location = loc.Location();
        final permissionStatus = await location.hasPermission();

        if (kDebugMode) {
          Logger.info('Permission status (iOS) - Location: $permissionStatus');
        }

        return permissionStatus == loc.PermissionStatus.granted ||
            permissionStatus == loc.PermissionStatus.grantedLimited;
      } else {
        // Android: Check Bluetooth and Location permissions
        final bluetoothStatus = await Permission.bluetooth.status;
        final bluetoothScanStatus = await Permission.bluetoothScan.status;
        final locationStatus = await Permission.location.status;

        if (kDebugMode) {
          Logger.info(
            'Permission status (Android) - Bluetooth: $bluetoothStatus, Scan: $bluetoothScanStatus, Location: $locationStatus',
          );
        }

        // For BLE scanning, we need at least Bluetooth and Location permissions
        return bluetoothStatus.isGranted &&
            bluetoothScanStatus.isGranted &&
            locationStatus.isGranted;
      }
    } catch (e) {
      if (kDebugMode) {
        Logger.error('Error checking permissions', e);
      }
      return false;
    }
  }

  /// Start scanning for Tactical Traps locks only
  Future<void> startScan() async {
    if (_isScanning) return;

    try {
      if (kDebugMode)
        Logger.info('Starting scan for Tactical Traps locks only');
      
      // Check permissions before starting scan
      final hasPermissions = await _checkRequiredPermissions();
      if (!hasPermissions) {
        if (kDebugMode) {
          Logger.warning(
            'Required permissions not granted, requesting permissions...',
          );
        }
        
        // Request permissions - this will try to show the dialog
        await _requestPermissions();

        // Check again after requesting
        final permissionsGranted = await _checkRequiredPermissions();
        if (!permissionsGranted) {
          if (kDebugMode) {
            Logger.error(
              'Required permissions still not granted after request',
            );
          }
          
          // Check if permanently denied on iOS and open Settings
          if (Platform.isIOS) {
            final location = loc.Location();
            final locationStatus = await location.hasPermission();

            if (locationStatus == loc.PermissionStatus.deniedForever) {
              if (kDebugMode) {
                Logger.warning(
                  'Location permission is permanently denied. Please enable it in Settings -> Privacy & Security -> Location Services -> Tactical Trap Flutter',
                );
              }
              // Give user option to open Settings
              await openAppSettings();
              throw Exception(
                'Location permission is required for BLE scanning. Please enable "While Using the App" in Settings and try again.',
              );
            } else if (locationStatus == loc.PermissionStatus.denied) {
              // If still denied (not permanently), try requesting one more time
              if (kDebugMode) {
                Logger.info('Permission still denied, trying one more time...');
              }
              final retryStatus = await location.requestPermission();
              if (retryStatus == loc.PermissionStatus.granted ||
                  retryStatus == loc.PermissionStatus.grantedLimited) {
                // Permission granted on retry, continue with scan
                if (kDebugMode) {
                  Logger.info('Permission granted on retry!');
                }
              } else {
                throw Exception(
                  'Location permission denied. Please enable it to scan for Bluetooth devices.',
                );
              }
            } else {
              throw Exception(
                'Required permissions not granted for BLE scanning',
              );
            }
          } else {
            throw Exception(
              'Required permissions not granted for BLE scanning',
            );
          }
        }
      }

      // Check and enable both Bluetooth and GPS services
      final servicesEnabled = await _checkAndEnableBluetoothAndGPS();
      if (!servicesEnabled) {
        if (kDebugMode) {
          Logger.error(
            'Bluetooth or GPS services could not be enabled, cannot proceed with BLE scanning',
          );
        }
        throw Exception(
          'Bluetooth and GPS must be enabled for BLE scanning. Please enable both services and try again.',
        );
      }
      
      _isScanning = true;
      _devicesController.add([]);

      // Get Android version for compatibility
      final androidVersion = _getAndroidVersion();
      if (kDebugMode) {
        Logger.info('Android version detected: $androidVersion');
      }

      // Scan only for Tactical Traps service UUID (optimized for accuracy)
      final serviceUuid = Guid.parse('0000fff0-0000-1000-8000-00805f9b34fb');
      
      if (serviceUuid != null) {
        // For Android 10 and below, use basic scan for maximum compatibility
        if (androidVersion <= 29) {
          if (kDebugMode) {
            Logger.info('Using ultra-basic scan for Android 10 and below');
          }

          try {
            // Try with service filter first
            await FlutterBluePlus.startScan(
              timeout: Duration(
                seconds: 30,
              ), // Even longer timeout for older devices
              androidUsesFineLocation: true,
              withServices: [serviceUuid],
            );
          } catch (e) {
            if (kDebugMode) {
              Logger.info(
                'Service-filtered scan failed on Android 10, trying completely basic scan: $e',
              );
            }

            // Ultra-basic scan - no filters at all for maximum compatibility
            await FlutterBluePlus.startScan(
              timeout: Duration(seconds: 30),
              androidUsesFineLocation: true,
              // NO filters at all - scan everything
            );
          }
        } else {
          // Android 11+ can use advanced features
          if (kDebugMode) {
            Logger.info('Using advanced scan for Android 11+');
          }

          try {
            await FlutterBluePlus.startScan(
              timeout: Duration(seconds: 15),
              androidUsesFineLocation: true,
              withServices: [serviceUuid],
              withNames: ['Tactical', 'Trap', 'Lock', 'TT'],
              androidScanMode: AndroidScanMode.lowLatency,
              continuousUpdates: true,
              continuousDivisor: 2,
            );
          } catch (e) {
            if (kDebugMode) {
              Logger.info(
                'Advanced scan failed, falling back to basic scan: $e',
              );
            }

            // Fallback to basic scan if advanced fails
            await FlutterBluePlus.startScan(
              timeout: Duration(seconds: 25),
              androidUsesFineLocation: true,
              withServices: [serviceUuid],
            );
          }
        }
      } else {
        // Fallback to general scan if UUID parsing fails
        if (androidVersion <= 29) {
          // Basic scan for older devices
          if (androidVersion <= 29) {
            if (kDebugMode) {
              Logger.info('Using ultra-basic fallback scan for Android 10');
            }

            try {
              await FlutterBluePlus.startScan(
                timeout: Duration(seconds: 30),
                androidUsesFineLocation: true,
                // NO filters at all for maximum compatibility
              );
            } catch (e) {
              if (kDebugMode) {
                Logger.info(
                  'Ultra-basic scan also failed, trying emergency scan: $e',
                );
              }

              // Emergency scan - absolute minimum parameters
              await FlutterBluePlus.startScan(
                timeout: Duration(seconds: 35),
                androidUsesFineLocation: true,
              );
            }
          } else {
            // Try advanced scan for newer devices
            try {
              await FlutterBluePlus.startScan(
                timeout: Duration(seconds: 15),
                androidUsesFineLocation: true,
                withNames: ['Tactical', 'Trap', 'Lock', 'TT'],
                androidScanMode: AndroidScanMode.lowLatency,
                continuousUpdates: true,
                continuousDivisor: 2,
              );
            } catch (e) {
              if (kDebugMode) {
                Logger.info(
                  'Advanced general scan failed, using basic scan: $e',
                );
              }

              // Fallback to basic scan
              await FlutterBluePlus.startScan(
                timeout: Duration(seconds: 25),
                androidUsesFineLocation: true,
              );
            }
          }
        }
      }

      FlutterBluePlus.scanResults.listen(_onScanResults);

      // Adjust timeout based on Android version
      final scanTimeout = androidVersion <= 29 ? 25 : 20;
      Timer(Duration(seconds: scanTimeout), () {
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
    if (kDebugMode) {
      Logger.info('Scan results received: ${results.length} devices');

      // Log all discovered devices for debugging
      for (int i = 0; i < results.length; i++) {
        final result = results[i];
        final deviceName = result.device.platformName.isNotEmpty
            ? result.device.platformName
            : result.advertisementData.advName.isNotEmpty
            ? result.advertisementData.advName
            : 'Unknown';

        Logger.info(
          'Device $i: $deviceName (${result.device.remoteId}) - RSSI: ${result.rssi}',
        );

        // Log service UUIDs if available
        if (result.advertisementData.serviceUuids.isNotEmpty) {
          Logger.info('  Services: ${result.advertisementData.serviceUuids}');
        }

        // Log manufacturer data if available
        if (result.advertisementData.manufacturerData.isNotEmpty) {
          Logger.info(
            '  Manufacturer data: ${result.advertisementData.manufacturerData}',
          );
        }
      }
    }
    
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
        
        if (kDebugMode) {
          Logger.info(
            'Added Tactical Traps lock: ${device.name ?? device.localName ?? 'Unknown'}',
          );
        }
      }
    }

    if (kDebugMode) {
      Logger.info('Filtered to ${devices.length} Tactical Traps locks');
    }

    _devicesController.add(devices);
  }

  /// Check if device is Tactical Traps lock (enhanced filtering)
  bool _isTacticalTrapsLock(ScanResult result) {
    // Check service UUIDs first (primary filter)
    final serviceUUIDs = result.advertisementData.serviceUuids;
    final hasService = serviceUUIDs.any(
      (uuid) => uuid.toString().toLowerCase().contains('fff0'),
    );
    
    if (!hasService) return false;

    // Additional filtering for better accuracy
    // Check if device has a name (most Tactical Traps locks have names)
    final hasName =
        result.device.platformName.isNotEmpty ||
        result.advertisementData.advName.isNotEmpty;

    // Check if device has manufacturer data (Tactical Traps locks have this)
    final hasManufacturerData =
        result.advertisementData.manufacturerData.isNotEmpty;

    // Device must have service UUID AND either name or manufacturer data
    return hasService && (hasName || hasManufacturerData);
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
      if (kDebugMode) Logger.info('Attempting to enable Bluetooth...');

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
      if (kDebugMode) Logger.info('Connecting to: ${device.id}');

      if (_currentDevice != null) {
        await disconnectFromDevice();
      }

      // Connect first with better error handling
      try {
        await device.device.connect(timeout: Duration(seconds: 10));
      } catch (e) {
        if (e.toString().contains('133') ||
            e.toString().contains('ANDROID_SPECIFIC_ERROR')) {
          if (kDebugMode)
            Logger.warning(
              'Connection failed with error 133, retrying with longer timeout...',
            );
          // Wait a bit and retry with longer timeout
          await Future.delayed(Duration(milliseconds: 1000));
          await device.device.connect(timeout: Duration(seconds: 15));
        } else {
          _handleConnectionFailure(e.toString());
          rethrow;
        }
      }

      _currentDevice = device;
      _connectionState = BluetoothConnectionState.connected;
      _connectionController.add(_currentDevice);
      
      // Monitor connection state changes
      device.device.connectionState.listen((state) {
        if (kDebugMode) Logger.info('Connection state changed: $state');
        if (state == BluetoothConnectionState.disconnected) {
          _handleUnexpectedDisconnection();
        }
      });

      // Start notifications FIRST (before PIN verification)
      await _startNotificationListener(device);

      // Check for required BLE service (like Angular app)
      final hasService = await _hasRequiredService(device);

      if (!hasService) {
        Logger.error(
          'Lock service not found. Please reset the lock and try again.',
        );
        await disconnectFromDevice();
        return false;
      }

      // If it's a Tactical Traps lock, verify PIN directly (like Angular app)
      if (device.isLock && pin != null) {
        // Wait for connection to settle (optimized for speed)
        await Future.delayed(Duration(milliseconds: 200));

        // Verify PIN with retry logic for better reliability
        bool verified = false;
        int retryCount = 0;
        const maxRetries = 2;

        while (!verified && retryCount < maxRetries) {
          if (retryCount > 0) {
            if (kDebugMode)
              Logger.info('PIN verification retry attempt: $retryCount');
            // Reduced wait time between retries for faster response
            await Future.delayed(Duration(milliseconds: 400));
          }

          verified = await _verifyPin(pin);
          retryCount++;

          if (!verified && retryCount < maxRetries) {
            if (kDebugMode) Logger.info('PIN verification failed, retrying...');
          }
        }
        
        if (!verified) {
          Logger.error('PIN verification failed after $maxRetries attempts');
          await disconnectFromDevice();
          return false;
        }

        // Store PIN after successful verification
        _verifiedPin = pin;

        // Get and store randData for future lock/unlock commands
        final statusResponse = await _getCurrentStatus();
        if (statusResponse != null && statusResponse.length >= 15) {
          final randData = statusResponse[14];
          _randData = randData;
        } else {
          Logger.warning(
            'Could not get randData, lock/unlock commands may fail',
          );
        }
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
      // Use correct System initialization command per protocol: 0x65
      // Frame (before checksum): F5 65 00 00 5F ??
      final command = [0xF5, 0x65, 0x00, 0x00, 0x5F, 0x00];

      // Calculate checksum exactly like Angular app
      command[sum] = 0;
      command[sum] = command.fold<int>(
        0,
        (previous, current) => (previous + current) & 0xFF,
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

        // Check if this is an initialize command (0x65) and response is correct (0x10)
        if (commandCode == 0x65) {
          final isInitialized = responseCode == askCorrect;
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

      // Try only essential PIN formats for faster connection
      final pinFormats = [
        pin, // Original PIN
        pin.padLeft(4, '0'), // Padded PIN
        '0000', // Common default
        '1234', // Common default
      ];

      for (int i = 0; i < pinFormats.length; i++) {
        final currentPin = pinFormats[i];

        // EXACT COPY of Angular app's handleVerification method
        // Build hex string exactly like Angular app: F5 0F 00 04 5F 3B + PIN bytes
        String readable = 'F5 0F 00 04 5F 3B';
        for (int j = 0; j < currentPin.length; j++) {
          // Convert PIN digit to hex string exactly like Angular app's charCodeAt
          // charCodeAt gives ASCII code, not digit value!
          final pinHex = currentPin.codeUnitAt(j).toRadixString(16);
          readable += ' $pinHex';
        }

        // Convert hex string to bytes exactly like Angular app's readableHexToBuffer
        final command = _readableHexToBuffer(readable);

        // Calculate checksum exactly like Angular app's writeToLock
        command[sum] = 0;
        command[sum] = command.fold<int>(
          0,
          (previous, current) => (previous + current) & 0xFF,
        );

        // Send command with optimized timeout for reliability
        final response = await _writeToLockWithResponse(
          'verify',
          command,
          timeout: Duration(seconds: 6),
        );

        if (response != null && response.length >= 3) {
          // Parse response exactly like Angular app: cmd = 1, ask = 2
          final commandCode = response[1]; // cmd position (index 1)
          final responseCode = response[2]; // ask position (index 2)

          // Check if this is a verify command (0x0f) and response is correct (0x10)
          if (commandCode == 0x0f) {
            final isVerified = responseCode == askCorrect;

            if (isVerified) {
              return true;
            }
          } else {
            Logger.error(
              'Unexpected command code: 0x${commandCode.toRadixString(16).toUpperCase()}',
            );
            continue; // Try next PIN format
          }
        } else {
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
      final services = await device.device.discoverServices();
      for (final service in services) {
        if (service.uuid.toString().toLowerCase().contains('fff0')) {
          for (final characteristic in service.characteristics) {
            if (characteristic.uuid.toString().toLowerCase().contains('fff1')) {
              // Store the status characteristic for PIN verification
              _statusCharacteristic = characteristic;

              // Wait for the notification to be properly set up
              await characteristic.setNotifyValue(true);

              // Set up the listener
              characteristic.lastValueStream.listen((data) {
                // Check if this is a response to a pending command (like Angular app)
                if (_pendingResponseCompleter != null &&
                    !_pendingResponseCompleter!.isCompleted) {
                  _pendingResponseCompleter!.complete(data);
                  return; // Don't process as general status
                }

                // Process as general status update
                final lockStatus = _parseResponse(data);
                if (lockStatus != null) {
                  _statusController.add(lockStatus);
                }
              });

              // Give notification listener a moment to settle
              await Future.delayed(Duration(milliseconds: 100));

              break;
            }
          }
          break;
        }
      }

      if (_statusCharacteristic == null) {
        Logger.error('Status characteristic not found');
      }
    } catch (e) {
      Logger.error('Failed to start notifications', e);
    }
  }

  /// Disconnect from device
  Future<void> disconnectFromDevice() async {
    if (_currentDevice == null) return;

    try {
      _stopReconnectTimer();
      _stopStatusPolling();
      
      // Stop all reconnection attempts
      _reconnectAttempts = _maxReconnectAttempts; // Prevent reconnection
      _isReconnecting = false;

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
      // Clear state even if disconnect failed
      _currentDevice = null;
      _connectionState = BluetoothConnectionState.disconnected;
      _reconnectAttempts = 0;
      _isReconnecting = false;
      _connectionController.add(null);
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

      final cmdCode = response[cmd];
      final askCode = response[ask];
      final dataLen = response[3];
      final dataStart = data; // index 6
      final hasData = response.length >= dataStart + dataLen;

      // Default baseline
      var status = LockStatus(
        response: askCode,
        extraBytes: dataLen,
        isStatus: false,
        isError: askCode != askCorrect,
      );

      // Decode per-command
      switch (cmdCode) {
        case 0x60: // Status checking
          if (askCode == askCorrect && hasData && dataLen >= 9) {
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
          if (askCode == askCorrect && hasData && dataLen == 6) {
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
            response: askCode,
            extraBytes: dataLen,
            isStatus: false,
            isError: askCode != askCorrect,
            verified: askCode == askCorrect,
          );
          break;
        case 0x61: // Unlock/Lock command ack
          status = LockStatus(
            response: askCode,
            extraBytes: dataLen,
            isStatus: false,
            isError: askCode != askCorrect,
          );
          break;
        case 0x74: // Alarm setting & checking
          if (hasData && dataLen == 1) {
            final value = response[dataStart];
            status = LockStatus(
              response: askCode,
              extraBytes: dataLen,
              isStatus: false,
              isError: askCode != askCorrect,
              alarmOn: value == 0,
            );
          }
          break;
        case 0x75: // Buzzer setting & checking
          if (hasData && dataLen == 1) {
            final value = response[dataStart];
            // According to documentation: 0 = enable buzzer, 1 = disable buzzer
            // So buzzerOn = true when value == 0 (enabled)
            status = LockStatus(
              response: askCode,
              extraBytes: dataLen,
              isStatus: false,
              isError: askCode != askCorrect,
              buzzerOn: value == 0, // 0 = enabled, 1 = disabled
            );
          }
          break;
        case 0x6E: // Get current version
          if (hasData && dataLen == 2) {
            final soft = response[dataStart];
            final hard = response[dataStart + 1];
            status = LockStatus(
              response: askCode,
              extraBytes: dataLen,
              isStatus: false,
              isError: askCode != askCorrect,
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
      // Check if PIN is verified, if not, verify it first
      if (_verifiedPin == null) {
        Logger.error('No PIN verified. Please connect with PIN first.');
        return false;
      }

      // Use stored randData (like before)
      if (_randData == null) {
        Logger.error('No randData available. Please reconnect with PIN first.');
        return false;
      }

      // Build lock command: F5 61 00 01 5F XX (0x35 ^ randData)
      // 0x35 is toggle command - will lock if unlocked, unlock if locked
      final command = [0xF5, 0x61, 0x00, 0x01, 0x5F, 0x00];
      final dataByte = 0x35 ^ _randData!; // Toggle command uses 0x35
      command.add(dataByte);

      // Calculate checksum exactly like Angular app
      command[sum] = 0;
      command[sum] = command.fold<int>(
        0,
        (previous, current) => (previous + current) & 0xFF,
      );

      final result = await _writeToLock('lock', command);

      // Reduced delay to let lock settle
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
      // Check if PIN is verified, if not, verify it first
      if (_verifiedPin == null) {
        Logger.error('No PIN verified. Please connect with PIN first.');
        return false;
      }

      // Use stored randData (like before)
      if (_randData == null) {
        Logger.error('No randData available. Please reconnect with PIN first.');
        return false;
      }

      // Build unlock command: F5 61 00 01 5F XX (0x35 ^ randData)
      // 0x35 is toggle command - will unlock if locked, lock if unlocked
      final command = [0xF5, 0x61, 0x00, 0x01, 0x5F, 0x00];
      final dataByte = 0x35 ^ _randData!; // Toggle command uses 0x35
      command.add(dataByte);

      // Calculate checksum exactly like Angular app
      command[sum] = 0;
      command[sum] = command.fold<int>(
        0,
        (previous, current) => (previous + current) & 0xFF,
      );

      final result = await _writeToLock('unlock', command);

      // Reduced delay to let unlock settle
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
      final statusResponse = await _getCurrentStatus();
      if (statusResponse != null && statusResponse.length >= 15) {
        final randData = statusResponse[14];
        _randData = randData;
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
    // Throttle status requests to prevent overwhelming the device - reduced to 3 seconds
    if (_lastDiscoverServicesTime != null) {
      final timeSinceLastRequest = DateTime.now().difference(
        _lastDiscoverServicesTime!,
      );
      if (timeSinceLastRequest.inMilliseconds < 3000) {
        if (kDebugMode)
          Logger.info('Status request throttled - too soon after last request');
        return null;
      }
    }
    _lastDiscoverServicesTime = DateTime.now();

    try {
      final command = [0xF5, 0x60, 0x00, 0x00, 0x5F, 0x00];
      command[sum] = 0;
      command[sum] = command.fold<int>(0, (p, c) => (p + c) & 0xFF);

      final bytes = await _writeToLockWithResponse('status', command);
      if (bytes == null) return null;
      final parsed = _parseResponse(bytes);
      if (parsed != null) {
        // Also get buzzer status for complete device info
        final buzzerStatus = await getBuzzerStatus();
        if (buzzerStatus != null && buzzerStatus.buzzerOn != null) {
          // Update status with buzzer info
          return LockStatus(
            response: parsed.response,
            responseMsg: parsed.responseMsg,
            extraBytes: parsed.extraBytes,
            isStatus: parsed.isStatus,
            isError: parsed.isError,
            verified: parsed.verified,
            alarmOn: parsed.alarmOn,
            buzzerOn: buzzerStatus.buzzerOn, // Use buzzer status
            openCloseState: parsed.openCloseState,
            hookState: parsed.hookState,
            voltageValue: parsed.voltageValue,
            lockId: parsed.lockId,
            randData: parsed.randData,
            error: parsed.error,
          );
        }
        return parsed;
      }
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

  /// Handle unexpected disconnection (GATT_ERROR 133, etc.)
  void _handleUnexpectedDisconnection() {
    if (kDebugMode) Logger.info('Handling unexpected disconnection');

    // Update connection state
    _connectionState = BluetoothConnectionState.disconnected;
    _currentDevice = null;
    _statusCharacteristic = null;

    // Clear any pending operations
    _pendingResponseCompleter?.complete(null);
    _pendingResponseCompleter = null;

    // Stop status polling
    _stopStatusPolling();

    // Notify listeners
    _connectionController.add(null);

    // Only attempt reconnection if we're not already in a reconnection loop
    if (_reconnectAttempts < _maxReconnectAttempts && !_isReconnecting) {
      _reconnectAttempts++;
      _isReconnecting = true;
      if (kDebugMode)
        Logger.info(
          'Attempting automatic reconnection (attempt $_reconnectAttempts/$_maxReconnectAttempts)',
        );

      // Delay before reconnection attempt
      Future.delayed(Duration(seconds: 3), () {
        _attemptReconnection();
      });
    } else {
      if (kDebugMode)
        Logger.warning(
          'Max reconnection attempts reached or already reconnecting',
        );
    }
  }

  /// Handle connection failure gracefully
  void _handleConnectionFailure(String error) {
    if (kDebugMode) Logger.error('Connection failed: $error');

    // Update connection state
    _connectionState = BluetoothConnectionState.disconnected;
    _currentDevice = null;
    _statusCharacteristic = null;

    // Clear any pending operations
    _pendingResponseCompleter?.complete(null);
    _pendingResponseCompleter = null;

    // Stop status polling
    _stopStatusPolling();

    // Notify listeners
    _connectionController.add(null);

    // Reset reconnection attempts and flag
    _reconnectAttempts = 0;
    _isReconnecting = false;
  }

  /// Attempt reconnection to last device
  Future<void> _attemptReconnection() async {
    if (_currentDevice == null) {
      _isReconnecting = false;
      return;
    }

    try {
      if (kDebugMode)
        Logger.info('Attempting to reconnect to ${_currentDevice!.id}');

      // Try to reconnect
      await connectToDevice(_currentDevice!);

      if (_connectionState == BluetoothConnectionState.connected) {
        if (kDebugMode) Logger.info('Reconnection successful');
        _reconnectAttempts = 0; // Reset counter on success
        _isReconnecting = false;
      } else {
        if (kDebugMode) Logger.warning('Reconnection failed');
        _isReconnecting = false;
      }
    } catch (e) {
      if (kDebugMode) Logger.error('Reconnection attempt failed', e);
      _isReconnecting = false;
    }
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
      if (_currentDevice == null || _statusCharacteristic == null) {
        Logger.error('No device connected or status characteristic not found');
        return null;
      }

      final services = await _currentDevice!.device.discoverServices();
      BluetoothCharacteristic? commandChar;

      for (final service in services) {
        if (service.uuid.toString().toLowerCase().contains('fff0')) {
          for (final characteristic in service.characteristics) {
            if (characteristic.uuid.toString().toLowerCase().contains('fff2')) {
              commandChar = characteristic;
              break;
            }
          }
          if (commandChar != null) break;
        }
      }

      if (commandChar == null) {
        Logger.error('Command characteristic not found');
        return null;
      }

      // Use existing status listener for response (like Angular app)
      final responseCompleter = Completer<List<int>?>();

      // Store the completer so the status listener can complete it
      _pendingResponseCompleter = responseCompleter;

      // Send command with proper error handling
      try {
        await commandChar.write(command);
      } catch (e) {
        Logger.error('Failed to write command: $e');
        // Check if this is a GATT_ERROR (133) or connection issue
        if (e.toString().contains('133') ||
            e.toString().contains('GATT_ERROR') ||
            e.toString().contains('device is disconnected') ||
            e.toString().contains('device is not connected')) {
          Logger.warning(
            'Device disconnected during command - attempting reconnection',
          );
          _handleUnexpectedDisconnection();
        }
        return null;
      }

      try {
        final response = await responseCompleter.future.timeout(
          timeout ?? Duration(seconds: 3),
          onTimeout: () {
            if (kDebugMode)
              Logger.warning(
                'Command timeout after ${timeout?.inSeconds ?? 3} seconds',
              );
            return <int>[];
          },
        );

        if (response != null && response.isNotEmpty) {
          return response;
        }

        return null;
      } finally {
        // Clean up
        _pendingResponseCompleter = null;
      }
    } catch (e) {
      Logger.error('Failed to write command with response', e);
      return null;
    }
  }

  /// Start smart status polling - battery optimized
  void _startStatusPolling() {
    _stopStatusPolling(); // Clear any existing timer
    _statusTimer = Timer.periodic(const Duration(seconds: 3), (timer) {
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
  }

  /// Get device version (Command 0x6E) as per Tactical Traps protocol
  Future<Map<String, int>?> getDeviceVersion() async {
    try {
      if (kDebugMode) Logger.info('Requesting device version...');

      // Build version request command: F5 6E 00 00 5F + checksum
      // STX(0xF5) + CMD(0x6E) + ASK(0x00) + DATALEN(0x00) + ETX(0x5F) + SUM
      final command = [0xF5, 0x6E, 0x00, 0x00, 0x5F];

      // Calculate checksum
      int sum = 0;
      for (int i = 0; i < command.length; i++) {
        sum = (sum + command[i]) & 0xFF;
      }
      command.add(sum);

      // Send command and get response
      final response = await _writeToLockWithResponse(
        'version',
        command,
        timeout: Duration(seconds: 3),
      );

      if (response != null && response.length >= 4) {
        // Parse response: F5 6E 10 02 5F + software + hardware + checksum
        // Check if this is a version response (0x6E) and success (0x10)
        if (response[1] == 0x6E && response[2] == 0x10) {
          final dataLength = response[3];
          if (dataLength == 2 && response.length >= 6) {
            final softwareVersion = response[4];
            final hardwareVersion = response[5];

            if (kDebugMode) {
              Logger.info(
                'Device version - Software: $softwareVersion, Hardware: $hardwareVersion',
              );
            }

            return {'software': softwareVersion, 'hardware': hardwareVersion};
          }
        }
      }

      if (kDebugMode) Logger.warning('Invalid version response format');
      return null;
    } catch (e) {
      if (kDebugMode) Logger.error('Failed to get device version', e);
      return null;
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
