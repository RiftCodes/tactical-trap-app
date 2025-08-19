import 'package:flutter/foundation.dart';

/// Simple logging utility for the app
class Logger {
  static void debug(String message) {
    if (kDebugMode) {
      print('[DEBUG] $message');
    }
  }

  static void info(String message) {
    if (kDebugMode) {
      print('[INFO] $message');
    }
  }

  static void warning(String message) {
    if (kDebugMode) {
      print('[WARNING] $message');
    }
  }

  static void error(String message, [dynamic error, StackTrace? stackTrace]) {
    if (kDebugMode) {
      print('[ERROR] $message');
      if (error != null) {
        print('[ERROR] Details: $error');
      }
      if (stackTrace != null) {
        print('[ERROR] Stack trace: $stackTrace');
      }
    }
  }
}
