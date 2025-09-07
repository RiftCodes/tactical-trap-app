import 'package:flutter/foundation.dart';
import 'package:tactical_trap_flutter/core/utils/logger.dart';

import '../../data/models/ble_device.dart';
import '../../services/storage/storage_service.dart';

/// Provider for managing device-related operations
class DeviceProvider extends ChangeNotifier {
  final StorageService _storageService = StorageService();

  // State variables
  Map<String, String> _deviceNames = {};
  Map<String, String> _deviceOriginalNames = {};
  Map<String, dynamic>? _lastConnectedDevice;
  Map<String, dynamic> _userPreferences = {};
  Map<String, dynamic> _appSettings = {};
  bool _isLoading = false;
  String? _errorMessage;

  // Getters
  Map<String, String> get deviceNames => _deviceNames;
  Map<String, String> get deviceOriginalNames => _deviceOriginalNames;
  Map<String, dynamic>? get lastConnectedDevice => _lastConnectedDevice;
  Map<String, dynamic> get userPreferences => _userPreferences;
  Map<String, dynamic> get appSettings => _appSettings;
  bool get isLoading => _isLoading;
  String? get errorMessage => _errorMessage;

  /// Initialize the device provider
  Future<void> initialize() async {
    try {
      _isLoading = true;
      _errorMessage = null;
      notifyListeners();

      // Load all data in parallel
      await Future.wait([
        _loadDeviceNames(),
        _loadLastConnectedDevice(),
        _loadUserPreferences(),
        _loadAppSettings(),
      ]);

      _isLoading = false;
      notifyListeners();
    } catch (e) {
      _errorMessage = 'Failed to initialize: $e';
      _isLoading = false;
      notifyListeners();
    }
  }

  /// Load device names from storage
  Future<void> _loadDeviceNames() async {
    try {
      _deviceNames = await _storageService.getDeviceNames();
      _deviceOriginalNames = await _storageService.getDeviceOriginalNames();
    } catch (e) {
      if (kDebugMode) Logger.error('Failed to load device names', e);
      _deviceNames = {};
      _deviceOriginalNames = {};
    }
  }

  /// Load last connected device from storage
  Future<void> _loadLastConnectedDevice() async {
    try {
      _lastConnectedDevice = await _storageService.getLastConnectedDevice();
    } catch (e) {
      if (kDebugMode) Logger.error('Failed to load last connected device', e);
      _lastConnectedDevice = null;
    }
  }

  /// Load user preferences from storage
  Future<void> _loadUserPreferences() async {
    try {
      _userPreferences = await _storageService.getUserPreferences();
    } catch (e) {
      if (kDebugMode) Logger.error('Failed to load user preferences', e);
      _userPreferences = {};
    }
  }

  /// Load app settings from storage
  Future<void> _loadAppSettings() async {
    try {
      _appSettings = await _storageService.getAppSettings();
    } catch (e) {
      if (kDebugMode) Logger.error('Failed to load app settings', e);
    }
  }

  /// Save device custom name
  Future<bool> saveDeviceName(String deviceId, String customName) async {
    try {
      _errorMessage = null;
      notifyListeners();

      final success = await _storageService.saveDeviceName(
        deviceId,
        customName,
      );

      if (success) {
        _deviceNames[deviceId] = customName;
        notifyListeners();
        return true;
      } else {
        _errorMessage = 'Failed to save device name';
        notifyListeners();
        return false;
      }
    } catch (e) {
      _errorMessage = 'Save error: $e';
      notifyListeners();
      return false;
    }
  }

  /// Get device custom name
  String? getDeviceName(String deviceId) {
    return _deviceNames[deviceId];
  }

  /// Remove device name
  Future<bool> removeDeviceName(String deviceId) async {
    try {
      _errorMessage = null;
      notifyListeners();

      final success = await _storageService.removeDeviceName(deviceId);

      if (success) {
        _deviceNames.remove(deviceId);
        notifyListeners();
        return true;
      } else {
        _errorMessage = 'Failed to remove device name';
        notifyListeners();
        return false;
      }
    } catch (e) {
      _errorMessage = 'Remove error: $e';
      notifyListeners();
      return false;
    }
  }

  /// Save last connected device
  Future<bool> saveLastConnectedDevice(BleDevice device) async {
    try {
      _errorMessage = null;
      notifyListeners();

      final success = await _storageService.saveLastConnectedDevice(device);

      if (success) {
        _lastConnectedDevice = {
          'id': device.id,
          'name': device.name,
          'localName': device.localName,
          'customName': device.customName,
          'serialNumber': device.serialNumber,
          'isLock': device.isLock,
        };
        notifyListeners();
        return true;
      } else {
        _errorMessage = 'Failed to save last connected device';
        notifyListeners();
        return false;
      }
    } catch (e) {
      _errorMessage = 'Save error: $e';
      notifyListeners();
      return false;
    }
  }

  /// Clear last connected device
  Future<bool> clearLastConnectedDevice() async {
    try {
      _errorMessage = null;
      notifyListeners();

      final success = await _storageService.clearLastConnectedDevice();

      if (success) {
        _lastConnectedDevice = null;
        notifyListeners();
        return true;
      } else {
        _errorMessage = 'Failed to clear last connected device';
        notifyListeners();
        return false;
      }
    } catch (e) {
      _errorMessage = 'Clear error: $e';
      notifyListeners();
      return false;
    }
  }

  /// Update user preference
  Future<bool> updateUserPreference(String key, dynamic value) async {
    try {
      _errorMessage = null;
      notifyListeners();

      _userPreferences[key] = value;
      final success = await _storageService.saveUserPreferences(
        _userPreferences,
      );

      if (success) {
        notifyListeners();
        return true;
      } else {
        _errorMessage = 'Failed to save user preference';
        notifyListeners();
        return false;
      }
    } catch (e) {
      _errorMessage = 'Update error: $e';
      notifyListeners();
      return false;
    }
  }

  /// Get user preference value
  T? getUserPreference<T>(String key, {T? defaultValue}) {
    final value = _userPreferences[key];
    if (value != null && value is T) {
      return value;
    }
    return defaultValue;
  }

  /// Update app setting
  Future<bool> updateAppSetting(String key, dynamic value) async {
    try {
      _errorMessage = null;
      notifyListeners();

      _appSettings[key] = value;
      final success = await _storageService.saveAppSettings(_appSettings);

      if (success) {
        notifyListeners();
        return true;
      } else {
        _errorMessage = 'Failed to save app setting';
        notifyListeners();
        return false;
      }
    } catch (e) {
      _errorMessage = 'Update error: $e';
      notifyListeners();
      return false;
    }
  }

  /// Get app setting value
  T? getAppSetting<T>(String key, {T? defaultValue}) {
    final value = _appSettings[key];
    if (value != null && value is T) {
      return value;
    }
    return defaultValue;
  }

  /// Check if device has custom name
  bool hasCustomName(String deviceId) {
    return _deviceNames.containsKey(deviceId) &&
        _deviceNames[deviceId]!.isNotEmpty;
  }

  /// Get display name for device
  String getDisplayName(BleDevice device) {
    final customName = getDeviceName(device.id);

    if (customName != null) {
      return customName;
    }
    if (device.localName != null && device.localName!.isNotEmpty) {
      return device.localName!;
    }
    if (device.name != null && device.name!.isNotEmpty) {
      return device.name!;
    }
    return device.id;
  }

  /// Clear all stored data
  Future<bool> clearAllData() async {
    try {
      _isLoading = true;
      _errorMessage = null;
      notifyListeners();

      final success = await _storageService.clearAllData();

      if (success) {
        _deviceNames.clear();
        _lastConnectedDevice = null;
        _userPreferences.clear();
        _appSettings.clear();
        _isLoading = false;
        notifyListeners();
        return true;
      } else {
        _errorMessage = 'Failed to clear all data';
        _isLoading = false;
        notifyListeners();
        return false;
      }
    } catch (e) {
      _errorMessage = 'Clear error: $e';
      _isLoading = false;
      notifyListeners();
      return false;
    }
  }

  /// Get storage information
  Future<Map<String, dynamic>> getStorageInfo() async {
    try {
      return await _storageService.getStorageInfo();
    } catch (e) {
      Logger.info('Failed to get storage info: $e');
      return {};
    }
  }

  /// Clear error message
  void clearError() {
    _errorMessage = null;
    notifyListeners();
  }

  /// Refresh all data from storage
  Future<void> refresh() async {
    await initialize();
  }
}
