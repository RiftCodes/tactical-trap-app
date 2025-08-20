import 'dart:convert';

import 'package:flutter/foundation.dart';
import 'package:shared_preferences/shared_preferences.dart';

import '../../core/utils/logger.dart';
import '../../data/models/ble_device.dart';

/// Service for managing local storage
class StorageService {
  static final StorageService _instance = StorageService._internal();
  factory StorageService() => _instance;
  StorageService._internal();

  static const String _deviceNamesKey = 'device_names';
  static const String _lastConnectedDeviceKey = 'last_connected_device';
  static const String _userPreferencesKey = 'user_preferences';
  static const String _appSettingsKey = 'app_settings';

  /// Get SharedPreferences instance
  Future<SharedPreferences> get _prefs async {
    return await SharedPreferences.getInstance();
  }

  /// Save device custom name
  Future<bool> saveDeviceName(String deviceId, String customName) async {
    try {
      final prefs = await _prefs;
      final deviceNames = await getDeviceNames();
      deviceNames[deviceId] = customName;

      return await prefs.setString(_deviceNamesKey, jsonEncode(deviceNames));
    } catch (e) {
      if (kDebugMode) Logger.info('Failed to save device name: $e');
      return false;
    }
  }

  /// Get device custom name
  Future<String?> getDeviceName(String deviceId) async {
    try {
      final deviceNames = await getDeviceNames();
      return deviceNames[deviceId];
    } catch (e) {
      if (kDebugMode) Logger.info('Failed to get device name: $e');
      return null;
    }
  }

  /// Get all device names
  Future<Map<String, String>> getDeviceNames() async {
    try {
      final prefs = await _prefs;
      final deviceNamesJson = prefs.getString(_deviceNamesKey);

      if (deviceNamesJson != null) {
        final Map<String, dynamic> decoded = jsonDecode(deviceNamesJson);
        return Map<String, String>.from(decoded);
      }

      return {};
    } catch (e) {
      if (kDebugMode) Logger.info('Failed to get device names: $e');
      return {};
    }
  }

  /// Remove device name
  Future<bool> removeDeviceName(String deviceId) async {
    try {
      final prefs = await _prefs;
      final deviceNames = await getDeviceNames();
      deviceNames.remove(deviceId);

      return await prefs.setString(_deviceNamesKey, jsonEncode(deviceNames));
    } catch (e) {
      if (kDebugMode) Logger.info('Failed to remove device name: $e');
      return false;
    }
  }

  /// Save last connected device
  Future<bool> saveLastConnectedDevice(BleDevice device) async {
    try {
      final prefs = await _prefs;
      final deviceData = {
        'id': device.id,
        'name': device.name,
        'localName': device.localName,
        'customName': device.customName,
        'serialNumber': device.serialNumber,
        'isLock': device.isLock,
      };

      return await prefs.setString(
        _lastConnectedDeviceKey,
        jsonEncode(deviceData),
      );
    } catch (e) {
      if (kDebugMode) Logger.info('Failed to save last connected device: $e');
      return false;
    }
  }

  /// Get last connected device
  Future<Map<String, dynamic>?> getLastConnectedDevice() async {
    try {
      final prefs = await _prefs;
      final deviceJson = prefs.getString(_lastConnectedDeviceKey);

      if (deviceJson != null) {
        return jsonDecode(deviceJson);
      }

      return null;
    } catch (e) {
      if (kDebugMode) Logger.info('Failed to get last connected device: $e');
      return null;
    }
  }

  /// Clear last connected device
  Future<bool> clearLastConnectedDevice() async {
    try {
      final prefs = await _prefs;
      return await prefs.remove(_lastConnectedDeviceKey);
    } catch (e) {
      if (kDebugMode) Logger.info('Failed to clear last connected device: $e');
      return false;
    }
  }

  /// Save user preferences
  Future<bool> saveUserPreferences(Map<String, dynamic> preferences) async {
    try {
      final prefs = await _prefs;
      return await prefs.setString(
        _userPreferencesKey,
        jsonEncode(preferences),
      );
    } catch (e) {
      if (kDebugMode) Logger.info('Failed to save user preferences: $e');
      return false;
    }
  }

  /// Get user preferences
  Future<Map<String, dynamic>> getUserPreferences() async {
    try {
      final prefs = await _prefs;
      final preferencesJson = prefs.getString(_userPreferencesKey);

      if (preferencesJson != null) {
        final Map<String, dynamic> decoded = jsonDecode(preferencesJson);
        return decoded;
      }

      return _getDefaultPreferences();
    } catch (e) {
      if (kDebugMode) Logger.info('Failed to get user preferences: $e');
      return _getDefaultPreferences();
    }
  }

  /// Get default preferences
  Map<String, dynamic> _getDefaultPreferences() {
    return {
      'autoConnect': true,
      'keepAlive': true,
      'scanTimeout': 5000,
      'connectionTimeout': 10000,
      'keepAliveInterval': 30000,
      'theme': 'system', // system, light, dark
      'notifications': true,
      'sound': true,
      'vibration': true,
    };
  }

  /// Save app settings
  Future<bool> saveAppSettings(Map<String, dynamic> settings) async {
    try {
      final prefs = await _prefs;
      return await prefs.setString(_appSettingsKey, jsonEncode(settings));
    } catch (e) {
      if (kDebugMode) Logger.info('Failed to save app settings: $e');
      return false;
    }
  }

  /// Get app settings
  Future<Map<String, dynamic>> getAppSettings() async {
    try {
      final prefs = await _prefs;
      final settingsJson = prefs.getString(_appSettingsKey);

      if (settingsJson != null) {
        final Map<String, dynamic> decoded = jsonDecode(settingsJson);
        return decoded;
      }

      return _getDefaultAppSettings();
    } catch (e) {
      if (kDebugMode) Logger.info('Failed to get app settings: $e');
      return _getDefaultAppSettings();
    }
  }

  /// Get default app settings
  Map<String, dynamic> _getDefaultAppSettings() {
    return {
      'version': '1.0.0',
      'firstRun': true,
      'lastUpdate': DateTime.now().toIso8601String(),
      'debugMode': false,
      'analytics': true,
      'crashReporting': true,
    };
  }

  /// Clear all stored data
  Future<bool> clearAllData() async {
    try {
      final prefs = await _prefs;
      return await prefs.clear();
    } catch (e) {
      if (kDebugMode) Logger.info('Failed to clear all data: $e');
      return false;
    }
  }

  /// Get storage size info
  Future<Map<String, dynamic>> getStorageInfo() async {
    try {
      final prefs = await _prefs;
      final keys = prefs.getKeys();

      int totalSize = 0;
      final keySizes = <String, int>{};

      for (final key in keys) {
        final value = prefs.get(key);
        if (value is String) {
          final size = value.length;
          totalSize += size;
          keySizes[key] = size;
        }
      }

      return {
        'totalKeys': keys.length,
        'totalSize': totalSize,
        'keySizes': keySizes,
      };
    } catch (e) {
      if (kDebugMode) Logger.info('Failed to get storage info: $e');
      return {};
    }
  }

  /// Check if key exists
  Future<bool> hasKey(String key) async {
    try {
      final prefs = await _prefs;
      return prefs.containsKey(key);
    } catch (e) {
      if (kDebugMode) Logger.info('Failed to check if key exists: $e');
      return false;
    }
  }

  /// Remove specific key
  Future<bool> removeKey(String key) async {
    try {
      final prefs = await _prefs;
      return await prefs.remove(key);
    } catch (e) {
      if (kDebugMode) Logger.info('Failed to remove key: $e');
      return false;
    }
  }

  /// Store PIN for a device (like Angular app)
  Future<bool> storePinForDevice(String deviceName, String pin) async {
    try {
      final prefs = await _prefs;
      return await prefs.setString('pin_$deviceName', pin);
    } catch (e) {
      if (kDebugMode) Logger.info('Failed to store PIN for device: $e');
      return false;
    }
  }

  /// Retrieve PIN for a device (like Angular app)
  Future<String?> getPinForDevice(String deviceName) async {
    try {
      final prefs = await _prefs;
      return prefs.getString('pin_$deviceName');
    } catch (e) {
      if (kDebugMode) Logger.info('Failed to retrieve PIN for device: $e');
      return null;
    }
  }

  /// Remove PIN for a device (forget device)
  Future<bool> removePinForDevice(String deviceName) async {
    try {
      final prefs = await _prefs;
      return await prefs.remove('pin_$deviceName');
    } catch (e) {
      if (kDebugMode) Logger.info('Failed to remove PIN for device: $e');
      return false;
    }
  }

  /// Check if device has stored PIN
  Future<bool> hasStoredPin(String deviceName) async {
    try {
      final prefs = await _prefs;
      final pin = prefs.getString('pin_$deviceName');
      return pin != null && pin.isNotEmpty;
    } catch (e) {
      if (kDebugMode)
        Logger.info('Failed to check if device has stored PIN: $e');
      return false;
    }
  }
}
