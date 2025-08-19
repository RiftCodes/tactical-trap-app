/// BLE Protocol Constants for Tactical Traps KR-S80 Lock
/// Based on the existing Angular implementation
class BleConstants {
  // Command Types
  static const int CMD = 1;
  static const int ASK = 2;
  static const int EXT = 3;
  static const int SUM = 5;
  static const int DATA = 6;
  static const int RANDDATA = 14;

  // System Commands
  static const String CMD_SystemExit = 'sleep';
  static const String CMD_SystemInit = 'initialize';

  // Response Codes
  static const int ASK_correct = 0x10;
  static const int ASK_failure = 0x11;
  static const int ASK_timeout = 0x12;
  static const int ASK_unknown = 0x13;
  static const int ASK_checksum = 0x16;
  static const int ASK_password_not_verified = 0x26;
  static const int ASK_failed_verification = 0x27;

  // Lock States
  static const int IsLocked = 0x00;
  static const int IsUnhooked = 0x00;
  static const int IsHooked = ~IsUnhooked;

  // Timing Constants
  static const int InactiveDisconnectTime = 300;
  static const int Android11 = 11;

  // Response Messages
  static const Map<int, String> ResponseMap = {
    ASK_correct: 'Operation completed successfully',
    ASK_failure: 'Operation failed - please try again',
    ASK_timeout: 'Operation timed out - check connection',
    ASK_unknown: 'Unknown command - please reconnect',
    ASK_checksum: 'Communication error - please try again',
    ASK_password_not_verified: 'Lock not properly paired - enter PIN again',
    ASK_failed_verification: 'PIN verification failed - check your PIN',
  };

  // Error Categories for Better Handling
  static const Map<int, String> ErrorCategories = {
    ASK_failure: 'retry',
    ASK_timeout: 'connection',
    ASK_unknown: 'reconnect',
    ASK_checksum: 'retry',
    ASK_password_not_verified: 'pairing',
    ASK_failed_verification: 'pin',
  };

  // Retry Strategies
  static const Map<int, Map<String, dynamic>> RetryStrategies = {
    ASK_failure: {'maxRetries': 3, 'delay': 1000},
    ASK_timeout: {'maxRetries': 2, 'delay': 2000},
    ASK_unknown: {'maxRetries': 1, 'delay': 0},
    ASK_checksum: {'maxRetries': 3, 'delay': 500},
    ASK_password_not_verified: {'maxRetries': 0, 'delay': 0},
    ASK_failed_verification: {'maxRetries': 0, 'delay': 0},
  };

  // Tactical Traps specific UUIDs (from original Angular code)
  static const String LongServiceUuid = '0000fff0-0000-1000-8000-00805f9b34fb';
  static const String LongStatusUuid = '0000fff1-0000-1000-8000-00805f9b34fb';
  static const String LongCommandUuid = '0000fff2-0000-1000-8000-00805f9b34fb';
  static const String LongConfigUuid = '0000fff3-0000-1000-8000-00805f9b34fb';

  // Command structures (from original Angular code)
  static const List<int> ReadLockStatusCommand = [
    0xF5,
    0x60,
    0x00,
    0x00,
    0x5F,
    0xB4,
  ];
  static const List<int> SystemExitCommand = [
    0xF5,
    0x6F,
    0x00,
    0x00,
    0x5F,
    0xC3,
  ];
  static const List<int> SystemInitCommand = [
    0xF5,
    0x65,
    0x00,
    0x00,
    0x5F,
    0xB9,
  ];
  static const List<int> GetAlarmStateCommand = [
    0xF5,
    0x74,
    0x00,
    0x00,
    0x5F,
    0x3B,
  ];
  static const List<int> GetBuzzerStateCommand = [
    0xF5,
    0x75,
    0x00,
    0x00,
    0x5F,
    0x3B,
  ];
  static const List<int> LockToggleCommand = [
    0xF5,
    0x61,
    0x00,
    0x01,
    0x5F,
    0x00,
    0x00,
  ];

  // Command names for tracking
  static const String CmdReadState = 'read-state';
  static const String CmdVerify = 'verify';
  static const String CmdGetAlarmState = 'getAlarmState';
  static const String CmdSetBuzzerState = 'setBuzzerState';
  static const String CmdSetAlarmState = 'setAlarmState';
  static const String CmdToggle = 'toggle';
  static const String CmdSetTime = 'setTime';
}
