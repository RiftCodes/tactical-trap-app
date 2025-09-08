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

  /// Get available biometric types
  Future<List<BiometricType>> getAvailableBiometrics() async {
    try {
      return await _localAuth.getAvailableBiometrics();
    } catch (e) {
      return [];
    }
  }

  /// Authenticate user using biometrics or device PIN
  Future<bool> authenticate() async {
    try {
      print('AuthService: Starting authentication...');

      // Check if PIN protection is enabled
      if (!await isPinProtectionEnabled()) {
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
        ),
      );
      print('AuthService: Fallback authentication result: $result');
      return result;
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
