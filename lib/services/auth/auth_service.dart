import 'package:flutter/services.dart';
import 'package:local_auth/error_codes.dart' as auth_error;
import 'package:local_auth/local_auth.dart';
import 'package:shared_preferences/shared_preferences.dart';

class AuthService {
  static final AuthService _instance = AuthService._internal();
  factory AuthService() => _instance;
  AuthService._internal();

  final LocalAuthentication _localAuth = LocalAuthentication();
  static const String _pinProtectionKey = 'pin_protection_enabled';

  /// Check if PIN protection is enabled
  Future<bool> isPinProtectionEnabled() async {
    final prefs = await SharedPreferences.getInstance();
    return prefs.getBool(_pinProtectionKey) ??
        true; // Default to true (enabled)
  }

  /// Enable or disable PIN protection
  Future<void> setPinProtection(bool enabled) async {
    final prefs = await SharedPreferences.getInstance();
    await prefs.setBool(_pinProtectionKey, enabled);
  }

  /// Check if device supports biometric authentication
  Future<bool> isBiometricAvailable() async {
    try {
      final isAvailable = await _localAuth.canCheckBiometrics;
      final isDeviceSupported = await _localAuth.isDeviceSupported();
      return isAvailable && isDeviceSupported;
    } catch (e) {
      return false;
    }
  }

  /// Check if device has any security credentials (PIN, pattern, password, biometrics)
  Future<bool> hasDeviceSecurity() async {
    try {
      print('AuthService: Checking device security...');

      // Check if device supports authentication at all
      final isDeviceSupported = await _localAuth.isDeviceSupported();
      print('AuthService: Device supports authentication: $isDeviceSupported');

      if (!isDeviceSupported) {
        print('AuthService: Device does not support authentication');
        return false;
      }

      // Check if biometrics are available
      final isBiometricAvailable = await this.isBiometricAvailable();
      print('AuthService: Biometric available: $isBiometricAvailable');

      if (isBiometricAvailable) {
        print('AuthService: Device has biometric security');
        return true;
      }

      // Check if there are any enrolled biometrics
      final availableBiometrics = await getAvailableBiometrics();
      print('AuthService: Available biometrics: $availableBiometrics');

      if (availableBiometrics.isNotEmpty) {
        print('AuthService: Device has enrolled biometrics');
        return true;
      }

      // For devices without biometrics, we need to check if they have PIN/pattern/password
      // This is tricky because we can't easily detect it without trying to authenticate
      // On Android, if no security is set, authenticate will fail with NotAvailable
      try {
        print(
          'AuthService: Testing device PIN/pattern/password availability...',
        );
        final result = await _localAuth.authenticate(
          localizedReason: 'Check device security',
          options: const AuthenticationOptions(
            biometricOnly: false, // Allow all authentication methods
            useErrorDialogs: false,
            stickyAuth: false,
          ),
        );
        print('AuthService: Device PIN/pattern/password test result: $result');
        return result; // If authentication succeeded, device has security
      } on PlatformException catch (e) {
        print(
          'AuthService: Device security test failed: ${e.code} - ${e.message}',
        );
        if (e.code == 'NotAvailable' &&
            e.message?.contains('Security credentials not available') == true) {
          print('AuthService: Device has no security credentials');
          return false;
        } else if (e.code == 'NotEnrolled') {
          print('AuthService: No security credentials enrolled');
          return false;
        } else if (e.code == 'UserCancel') {
          // User cancelled, but this means security exists
          print(
            'AuthService: User cancelled security check, device has security',
          );
          return true;
        } else if (e.code == 'AuthenticationError') {
          // Authentication error means security exists but failed
          print('AuthService: Authentication error, device has security');
          return true;
        }
        // Other errors might mean security exists but failed for other reasons
        print(
          'AuthService: Device security check failed with unknown error: ${e.code}',
        );
        return false;
      }
    } catch (e) {
      print('AuthService: Error checking device security: $e');
      return false;
    }
  }

  /// Get available biometric types
  Future<List<BiometricType>> getAvailableBiometrics() async {
    try {
      return await _localAuth.getAvailableBiometrics();
    } catch (e) {
      return [];
    }
  }

  /// Authenticate user using biometrics or device PIN
  Future<bool> authenticate({bool forceAuthentication = false}) async {
    try {
      print('AuthService: Starting authentication...');

      // Check if PIN protection is enabled (unless forced)
      if (!forceAuthentication && !await isPinProtectionEnabled()) {
        print('AuthService: PIN protection disabled, returning true');
        return true; // No protection enabled
      }

      print('AuthService: PIN protection enabled, checking biometrics...');

      // Check if biometrics are available
      final isBiometricAvailable = await this.isBiometricAvailable();
      print('AuthService: Biometric available: $isBiometricAvailable');

      if (!isBiometricAvailable) {
        // If no biometrics, still try to authenticate (will fall back to device PIN)
        print('AuthService: No biometrics, trying fallback...');
        return await _authenticateWithFallback();
      }

      // Get available biometric types
      final availableBiometrics = await getAvailableBiometrics();
      print('AuthService: Available biometrics: $availableBiometrics');

      if (availableBiometrics.isEmpty) {
        // No biometrics available, try fallback
        print('AuthService: No biometric types, trying fallback...');
        return await _authenticateWithFallback();
      }

      // Authenticate with biometrics
      print('AuthService: Attempting biometric authentication...');
      final result = await _localAuth.authenticate(
        localizedReason: 'Authenticate to access Tactical Traps',
        options: const AuthenticationOptions(
          biometricOnly: false, // Allow fallback to device PIN
          stickyAuth: true, // Keep authentication state
        ),
      );
      print('AuthService: Biometric authentication result: $result');
      print('AuthService: Returning result: $result');
      return result;
    } on PlatformException catch (e) {
      print('AuthService: PlatformException: ${e.code} - ${e.message}');
      if (e.code == auth_error.notAvailable) {
        // Biometrics not available, try fallback
        return await _authenticateWithFallback();
      } else if (e.code == auth_error.notEnrolled) {
        // No biometrics enrolled, try fallback
        return await _authenticateWithFallback();
      } else if (e.code == auth_error.lockedOut) {
        // Too many failed attempts, user needs to use device PIN
        return await _authenticateWithFallback();
      } else if (e.code == auth_error.permanentlyLockedOut) {
        // Permanently locked out, user must use device PIN
        return await _authenticateWithFallback();
      } else if (e.code == 'NotAvailable' &&
          e.message?.contains('Security credentials not available') == true) {
        // Android 15 specific issue - don't retry
        print(
          'AuthService: Security credentials not available on Android 15, stopping',
        );
        return false;
      }
      return false;
    } catch (e) {
      print('AuthService: General error: $e');
      return false;
    }
  }

  /// Fallback authentication when biometrics fail
  Future<bool> _authenticateWithFallback() async {
    try {
      print('AuthService: Attempting fallback authentication...');
      final result = await _localAuth.authenticate(
        localizedReason: 'Enter your device PIN to access Tactical Traps',
        options: const AuthenticationOptions(
          biometricOnly: false, // Allow device PIN
          stickyAuth: true,
          useErrorDialogs: false, // Disable error dialogs to handle manually
        ),
      );
      print('AuthService: Fallback authentication result: $result');
      return result;
    } on PlatformException catch (e) {
      print(
        'AuthService: Fallback authentication error: ${e.code} - ${e.message}',
      );
      // On Android 15, if security credentials are not available,
      // we should not keep retrying as it causes infinite loops
      if (e.code == 'NotAvailable' &&
          e.message?.contains('Security credentials not available') == true) {
        print(
          'AuthService: Security credentials not available, stopping retries',
        );
        return false;
      }
      return false;
    } catch (e) {
      print('AuthService: Fallback authentication error: $e');
      return false;
    }
  }

  /// Get user-friendly authentication method name
  Future<String> getAuthenticationMethodName() async {
    final isBiometricAvailable = await this.isBiometricAvailable();

    if (!isBiometricAvailable) {
      return 'Device PIN';
    }

    final availableBiometrics = await getAvailableBiometrics();

    if (availableBiometrics.contains(BiometricType.fingerprint)) {
      return 'Fingerprint';
    } else if (availableBiometrics.contains(BiometricType.face)) {
      return 'Face ID';
    } else if (availableBiometrics.contains(BiometricType.iris)) {
      return 'Iris';
    } else {
      return 'Biometric';
    }
  }
}
