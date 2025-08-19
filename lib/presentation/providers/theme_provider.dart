import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';

/// Provider for managing app theme (light/dark/system)
class ThemeProvider extends ChangeNotifier {
  ThemeMode _themeMode = ThemeMode.system;
  static const String _themeModeKey = 'theme_mode';

  ThemeMode get themeMode => _themeMode;

  ThemeProvider() {
    _loadThemeMode();
  }

  /// Load saved theme mode from storage
  Future<void> _loadThemeMode() async {
    try {
      final prefs = await SharedPreferences.getInstance();
      final savedMode = prefs.getString(_themeModeKey);

      if (savedMode != null) {
        // User has manually set a preference
        switch (savedMode) {
          case 'light':
            _themeMode = ThemeMode.light;
            break;
          case 'dark':
            _themeMode = ThemeMode.dark;
            break;
          default:
            _themeMode = ThemeMode.system;
        }
      } else {
        // No preference saved, use system default
        _themeMode = ThemeMode.system;
      }

      notifyListeners();
    } catch (e) {
      // Default to system if loading fails
      _themeMode = ThemeMode.system;
    }
  }

  /// Set theme mode and save to storage
  Future<void> setThemeMode(ThemeMode mode) async {
    try {
      _themeMode = mode;
      notifyListeners();

      final prefs = await SharedPreferences.getInstance();
      String modeString;

      switch (mode) {
        case ThemeMode.light:
          modeString = 'light';
          break;
        case ThemeMode.dark:
          modeString = 'dark';
          break;
        default:
          modeString = 'system';
      }

      await prefs.setString(_themeModeKey, modeString);
    } catch (e) {
      // Silently fail - theme will revert on app restart
    }
  }

  /// Toggle between light and dark (skips system)
  Future<void> toggleTheme() async {
    final newMode = _themeMode == ThemeMode.light
        ? ThemeMode.dark
        : ThemeMode.light;
    await setThemeMode(newMode);
  }

  /// Get current brightness for UI decisions
  Brightness getCurrentBrightness(BuildContext context) {
    switch (_themeMode) {
      case ThemeMode.light:
        return Brightness.light;
      case ThemeMode.dark:
        return Brightness.dark;
      case ThemeMode.system:
        return MediaQuery.of(context).platformBrightness;
    }
  }

  /// Check if current theme is dark
  bool isDark(BuildContext context) {
    return getCurrentBrightness(context) == Brightness.dark;
  }
}
