/// App-wide constants for Tactical Traps BLE Lock App
class AppConstants {
  // App Information
  static const String appName = 'Tactical Traps';
  static const String appVersion = '1.5.1';
  static const String appDescription = 'Controls a Bluetooth Low Energy lock';

  // Company Information
  static const String companyName = 'Tactical Traps';
  static const String companyWebsite = 'https://tacticaltraps.com/';
  static const String faqUrl = 'www.tacticaltraps.com/faqs/';

  // Timing Constants (in milliseconds)
  static const int oneSecond = 1000;
  static const int scanTime = 500; // Reduced from 1 second for faster scanning
  static const int scanAttempts = 3; // Reduced from 5 for faster scanning
  static const int timeIncrement =
      1000; // Increased from 500ms to reduce background polling
  static const int timeDivider = 4;
  static const int sleepDelay =
      300 * oneSecond; // Increased from 60s to 300s (5 minutes)

  // UI Constants
  static const double defaultPadding = 16.0;
  static const double defaultMargin = 8.0;
  static const double defaultRadius = 12.0;
  static const double defaultElevation = 4.0;

  // Animation Durations
  static const Duration shortAnimation = Duration(milliseconds: 200);
  static const Duration mediumAnimation = Duration(milliseconds: 300);
  static const Duration longAnimation = Duration(milliseconds: 500);

  // Bluetooth Settings
  static const bool scanOnlyForLocks = true;
  static const bool enableDebug = false;
  static const bool showAtStart = true;

  // Storage Keys
  static const String lastConnectedDeviceKey = 'last_connected_device';
  static const String deviceNamesKey = 'device_names';
  static const String userPreferencesKey = 'user_preferences';
  static const String appSettingsKey = 'app_settings';

  // Error Messages
  static const String bluetoothNotSupported =
      'Bluetooth is not supported on this device';
  static const String bluetoothNotEnabled =
      'Please enable Bluetooth to use this app';
  static const String locationPermissionRequired =
      'Location permission is required for Bluetooth scanning';
  static const String bluetoothPermissionRequired =
      'Bluetooth permission is required';
  static const String connectionFailed = 'Failed to connect to device';
  static const String deviceNotFound = 'Device not found';

  // Success Messages
  static const String deviceConnected = 'Device connected successfully';
  static const String deviceDisconnected = 'Device disconnected';
  static const String operationSuccessful = 'Operation completed successfully';
  static const String deviceSaved = 'Device saved successfully';

  // Button Labels
  static const String scan = 'Scan';
  static const String stopScan = 'Stop Scan';
  static const String connect = 'Connect';
  static const String disconnect = 'Disconnect';
  static const String lock = 'Lock';
  static const String unlock = 'Unlock';
  static const String settings = 'Settings';
  static const String about = 'About';
  static const String ok = 'OK';
  static const String cancel = 'Cancel';
  static const String retry = 'Retry';
  static const String close = 'Close';
}
