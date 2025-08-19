/// Represents the status of a connected lock device
class LockStatus {
  final int response;
  final String? responseMsg;
  final int extraBytes;
  bool isStatus;
  final bool? isError;
  dynamic verified;
  dynamic alarmOn;
  dynamic buzzerOn;
  int? openCloseState;
  int? hookState;
  double? voltageValue;
  int? lockId;
  int? randData;
  final String? error;

  LockStatus({
    required this.response,
    this.responseMsg,
    required this.extraBytes,
    required this.isStatus,
    this.isError,
    this.verified,
    this.alarmOn,
    this.buzzerOn,
    this.openCloseState,
    this.hookState,
    this.voltageValue,
    this.lockId,
    this.randData,
    this.error,
  });

  /// Check if the response indicates success
  bool get isSuccess => response == 0x10; // ASK_correct

  /// Check if the response indicates failure
  bool get isFailure => response == 0x11; // ASK_failure

  /// Check if the response indicates timeout
  bool get isTimeout => response == 0x12; // ASK_timeout

  /// Check if the response indicates unknown command
  bool get isUnknownCommand => response == 0x13; // ASK_unknown

  /// Check if the response indicates checksum error
  bool get isChecksumError => response == 0x16; // ASK_checksum

  /// Check if the password is not verified
  bool get isPasswordNotVerified =>
      response == 0x26; // ASK_password_not_verified

  /// Check if the verification failed
  bool get isVerificationFailed => response == 0x27; // ASK_failed_verification

  /// Get the error category for this response
  String? get errorCategory {
    if (isSuccess) return null;

    switch (response) {
      case 0x11: // ASK_failure
        return 'retry';
      case 0x12: // ASK_timeout
        return 'connection';
      case 0x13: // ASK_unknown
        return 'reconnect';
      case 0x16: // ASK_checksum
        return 'retry';
      case 0x26: // ASK_password_not_verified
        return 'pairing';
      case 0x27: // ASK_failed_verification
        return 'pin';
      default:
        return 'unknown';
    }
  }

  /// Get the retry strategy for this response
  Map<String, dynamic>? get retryStrategy {
    if (isSuccess) return null;

    switch (response) {
      case 0x11: // ASK_failure
        return {'maxRetries': 3, 'delay': 1000};
      case 0x12: // ASK_timeout
        return {'maxRetries': 2, 'delay': 2000};
      case 0x13: // ASK_unknown
        return {'maxRetries': 1, 'delay': 0};
      case 0x16: // ASK_checksum
        return {'maxRetries': 3, 'delay': 500};
      case 0x26: // ASK_password_not_verified
        return {'maxRetries': 0, 'delay': 0};
      case 0x27: // ASK_failed_verification
        return {'maxRetries': 0, 'delay': 0};
      default:
        return null;
    }
  }

  /// Check if the lock is currently locked
  bool get isLocked => openCloseState == 0x00;

  /// Check if the lock is currently unlocked
  bool get isUnlocked => openCloseState != 0x00;

  /// Check if the hook is engaged
  bool get isHooked => hookState != 0x00;

  /// Check if the hook is disengaged
  bool get isUnhooked => hookState == 0x00;

  /// Get the status description
  String get statusDescription {
    if (isSuccess) {
      return 'Operation completed successfully';
    }

    if (responseMsg != null) {
      return responseMsg!;
    }

    switch (response) {
      case 0x11:
        return 'Operation failed - please try again';
      case 0x12:
        return 'Operation timed out - check connection';
      case 0x13:
        return 'Unknown command - please reconnect';
      case 0x16:
        return 'Communication error - please try again';
      case 0x26:
        return 'Lock not properly paired - enter PIN again';
      case 0x27:
        return 'PIN verification failed - check your PIN';
      default:
        return 'Unknown response: 0x${response.toRadixString(16).toUpperCase()}';
    }
  }

  /// Convert to JSON for storage/transmission
  Map<String, dynamic> toJson() {
    return {
      'response': response,
      'responseMsg': responseMsg,
      'extraBytes': extraBytes,
      'isStatus': isStatus,
      'isError': isError,
      'verified': verified,
      'alarmOn': alarmOn,
      'buzzerOn': buzzerOn,
      'openCloseState': openCloseState,
      'hookState': hookState,
      'voltageValue': voltageValue,
      'lockId': lockId,
      'randData': randData,
      'error': error,
    };
  }

  /// Create from JSON
  factory LockStatus.fromJson(Map<String, dynamic> json) {
    return LockStatus(
      response: json['response'] ?? 0,
      responseMsg: json['responseMsg'],
      extraBytes: json['extraBytes'] ?? 0,
      isStatus: json['isStatus'] ?? false,
      isError: json['isError'],
      verified: json['verified'],
      alarmOn: json['alarmOn'],
      buzzerOn: json['buzzerOn'],
      openCloseState: json['openCloseState'],
      hookState: json['hookState'],
      voltageValue: json['voltageValue']?.toDouble(),
      lockId: json['lockId'],
      randData: json['randData'],
      error: json['error'],
    );
  }

  @override
  String toString() {
    return 'LockStatus(response: 0x${response.toRadixString(16).toUpperCase()}, isSuccess: $isSuccess, statusDescription: $statusDescription)';
  }
}
