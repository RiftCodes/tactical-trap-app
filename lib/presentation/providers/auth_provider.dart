import 'package:flutter/material.dart';

import '../../services/auth/auth_service.dart';

class AuthProvider extends ChangeNotifier {
  final AuthService _authService = AuthService();

  bool _isAuthenticated = false;
  bool _isAuthenticating = false;
  bool _isPinProtectionEnabled = false;
  bool _isInitialized = false;
  bool _isLoggedOutFromBackground = false;
  DateTime? _lastAuthenticationTime;

  bool get isAuthenticated => _isAuthenticated;
  bool get isAuthenticating => _isAuthenticating;
  bool get isPinProtectionEnabled => _isPinProtectionEnabled;

  /// Initialize authentication state
  Future<void> initialize() async {
    if (_isInitialized) return; // Prevent multiple initializations

    print('AuthProvider: Starting initialization...');
    
    // First check if device has any security credentials
    final hasDeviceSecurity = await _authService.hasDeviceSecurity();
    print('AuthProvider: Device has security: $hasDeviceSecurity');
    
    if (!hasDeviceSecurity) {
      print('AuthProvider: Device has no security credentials, disabling PIN protection');
      // Device has no security, disable PIN protection and auto-authenticate
      await _authService.setPinProtection(false);
      _isPinProtectionEnabled = false;
      _isAuthenticated = true;
    } else {
      print('=== DEVICE HAS SECURITY - FORCING AUTHENTICATION ===');
      print('AuthProvider: Device has security, requiring authentication');
      // Device has security, always require authentication
      _isPinProtectionEnabled = true; // Force PIN protection when device has security
      _isAuthenticated = false; // Require authentication
      print('AuthProvider: Device has security, PIN protection enabled, requiring authentication');
      print('=== AUTHENTICATION FORCED - OVERLAY SHOULD SHOW ===');
    }

    _isInitialized = true;
    print('AuthProvider: Initialization complete - isPinProtectionEnabled: $_isPinProtectionEnabled, isAuthenticated: $_isAuthenticated');
    notifyListeners();
  }

  /// Authenticate user
  Future<void> authenticate() async {
    if (_isAuthenticating) return;

    print('AuthProvider: Starting authentication...');
    _isAuthenticating = true;
    notifyListeners();

    try {
      final success = await _authService.authenticate(forceAuthentication: true);
      print('AuthProvider: Authentication result: $success');
      _isAuthenticated = success;
      _isLoggedOutFromBackground =
          false; // Reset the flag after successful auth
      _lastAuthenticationTime = DateTime.now(); // Record authentication time
      // No persistence - authentication only for current session
    } catch (e) {
      print('AuthProvider: Authentication error: $e');
      _isAuthenticated = false;
    } finally {
      _isAuthenticating = false;
      print(
        'AuthProvider: Authentication completed. isAuthenticated: $_isAuthenticated',
      );
      notifyListeners();
    }
  }

  /// Logout user (require re-authentication)
  void logout() {
    if (_isPinProtectionEnabled && !_isLoggedOutFromBackground) {
      // Check if enough time has passed since last authentication
      if (_lastAuthenticationTime != null) {
        final timeSinceAuth = DateTime.now().difference(
          _lastAuthenticationTime!,
        );
        if (timeSinceAuth.inSeconds < 2) {
          print(
            'AuthProvider: Skipping logout - too soon after authentication (${timeSinceAuth.inSeconds}s)',
          );
          return;
        }
      }

      print('AuthProvider: Logging out user - requiring re-authentication');
      _isAuthenticated = false;
      _isLoggedOutFromBackground = true;
      notifyListeners();
    }
  }

  /// Enable PIN protection
  Future<void> enablePinProtection() async {
    await _authService.setPinProtection(true);
    _isPinProtectionEnabled = true;
    _isAuthenticated = false; // Require authentication
    notifyListeners();
  }

  /// Disable PIN protection
  Future<void> disablePinProtection() async {
    await _authService.setPinProtection(false);
    _isPinProtectionEnabled = false;
    _isAuthenticated = true; // No authentication required
    notifyListeners();
  }

  /// Check if biometric authentication is available
  Future<bool> isBiometricAvailable() async {
    return await _authService.isBiometricAvailable();
  }

  /// Get authentication method name
  Future<String> getAuthenticationMethodName() async {
    return await _authService.getAuthenticationMethodName();
  }

  /// Clear authentication state (for testing)
  void clearAuthenticationState() {
    _isAuthenticated = false;
    notifyListeners();
  }

  /// Reset background logout flag (called when app goes to background)
  void resetBackgroundLogoutFlag() {
    _isLoggedOutFromBackground = false;
  }
}
