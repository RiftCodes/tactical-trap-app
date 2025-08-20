import 'dart:ui';

import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';

import '../../core/utils/logger.dart';

/// Provider for managing app language preferences
class LanguageProvider extends ChangeNotifier {
  static const String _languageKey = 'selected_language';
  static const String _systemLanguageKey = 'use_system_language';

  Locale? _currentLocale;
  bool _useSystemLanguage = true;
  bool _isInitialized = false;

  /// Current locale for the app
  Locale? get currentLocale => _currentLocale;

  /// Whether to use system language
  bool get useSystemLanguage => _useSystemLanguage;

  /// Whether the provider has been initialized
  bool get isInitialized => _isInitialized;

  /// Initialize the language provider
  Future<void> initialize() async {
    if (_isInitialized) return;

    try {
      final prefs = await SharedPreferences.getInstance();

      // Load saved preferences
      _useSystemLanguage = prefs.getBool(_systemLanguageKey) ?? true;

      if (_useSystemLanguage) {
        // Use system language
        _currentLocale = _getSystemLocale();
      } else {
        // Use saved language
        final savedLanguage = prefs.getString(_languageKey);
        if (savedLanguage != null) {
          _currentLocale = Locale(savedLanguage);
        } else {
          // Fallback to system language
          _currentLocale = _getSystemLocale();
          _useSystemLanguage = true;
        }
      }

      _isInitialized = true;
      if (kDebugMode)
        Logger.info(
          '🔄 LanguageProvider: Initialized with language: $currentLanguageCode',
        );
      notifyListeners();
    } catch (e) {
      // Fallback to system language on error
      _currentLocale = _getSystemLocale();
      _useSystemLanguage = true;
      _isInitialized = true;
      if (kDebugMode)
        Logger.error(
          '❌ LanguageProvider: Error during initialization, using fallback: $e',
        );
      notifyListeners();
    }
  }

  /// Get system locale
  Locale _getSystemLocale() {
    final systemLocale = PlatformDispatcher.instance.locale;

    // Check if system language is supported
    if (_isLanguageSupported(systemLocale.languageCode)) {
      return systemLocale;
    }

    // Fallback to English if system language not supported
    return const Locale('en');
  }

  /// Check if language is supported
  bool _isLanguageSupported(String languageCode) {
    return ['en', 'es', 'fr'].contains(languageCode);
  }

  /// Set language manually
  Future<void> setLanguage(String languageCode) async {
    if (!_isLanguageSupported(languageCode)) return;

    if (kDebugMode)
      Logger.info('🔄 LanguageProvider: Setting language to $languageCode');
    _currentLocale = Locale(languageCode);
    _useSystemLanguage = false;

    try {
      final prefs = await SharedPreferences.getInstance();
      await prefs.setString(_languageKey, languageCode);
      await prefs.setBool(_systemLanguageKey, false);
      if (kDebugMode)
        Logger.info('✅ LanguageProvider: Language saved to preferences');
    } catch (e) {
      if (kDebugMode)
        Logger.error('❌ LanguageProvider: Error saving language: $e');
    }

    if (kDebugMode) Logger.info('🔄 LanguageProvider: Notifying listeners');
    notifyListeners();
  }

  /// Switch to system language
  Future<void> switchToSystemLanguage() async {
    if (kDebugMode)
      Logger.info('🔄 LanguageProvider: Switching to system language');
    _currentLocale = _getSystemLocale();
    _useSystemLanguage = true;

    try {
      final prefs = await SharedPreferences.getInstance();
      await prefs.setBool(_systemLanguageKey, true);
      await prefs.remove(_languageKey);
      if (kDebugMode)
        Logger.info('✅ LanguageProvider: System language preference saved');
    } catch (e) {
      if (kDebugMode)
        Logger.error('❌ LanguageProvider: Error saving system language: $e');
    }

    if (kDebugMode) Logger.info('🔄 LanguageProvider: Notifying listeners');
    notifyListeners();
  }

  /// Get current language code
  String get currentLanguageCode => _currentLocale?.languageCode ?? 'en';

  /// Get current language name
  String get currentLanguageName {
    switch (currentLanguageCode) {
      case 'es':
        return 'Español';
      case 'fr':
        return 'Français';
      default:
        return 'English';
    }
  }

  /// Get current language flag
  String get currentLanguageFlag {
    switch (currentLanguageCode) {
      case 'es':
        return '🇪🇸';
      case 'fr':
        return '🇫🇷';
      default:
        return '🇺🇸';
    }
  }

  /// Check if language is currently selected
  bool isLanguageSelected(String languageCode) {
    return currentLanguageCode == languageCode;
  }

  /// Get supported languages
  List<Map<String, String>> get supportedLanguages => [
    {'code': 'en', 'name': 'English', 'flag': '🇺🇸'},
    {'code': 'es', 'name': 'Español', 'flag': '🇪🇸'},
    {'code': 'fr', 'name': 'Français', 'flag': '🇫🇷'},
  ];
}
