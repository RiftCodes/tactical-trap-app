import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_localizations/flutter_localizations.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:provider/provider.dart';

import 'core/constants/app_constants.dart';
import 'l10n/app_localizations.dart';
import 'presentation/pages/home_page.dart';
import 'presentation/pages/settings_page.dart';
import 'presentation/providers/ble_provider.dart';
import 'presentation/providers/device_provider.dart';
import 'presentation/providers/language_provider.dart';
import 'presentation/providers/theme_provider.dart';
import 'presentation/style/design_system.dart';

/// Main application widget
class TacticalTrapsApp extends StatelessWidget {
  const TacticalTrapsApp({super.key});

  @override
  Widget build(BuildContext context) {
    // iOS-aligned system UI overlays and haptics style
    SystemChrome.setSystemUIOverlayStyle(
      SystemUiOverlayStyle(
        statusBarBrightness: Brightness.dark,
        statusBarIconBrightness: Brightness.light,
      ),
    );
    return MultiProvider(
      providers: [
        ChangeNotifierProvider(create: (_) => BleProvider()),
        ChangeNotifierProvider(create: (_) => DeviceProvider()..initialize()),
        ChangeNotifierProvider(create: (_) => ThemeProvider()),
        ChangeNotifierProvider(create: (_) => LanguageProvider()..initialize()),
      ],
      child: Consumer2<ThemeProvider, LanguageProvider>(
        builder: (context, themeProvider, languageProvider, child) {
          return MaterialApp(
            title: AppConstants.appName,
            debugShowCheckedModeBanner: false,
            theme: _buildLightTheme(),
            darkTheme: _buildDarkTheme(),
            themeMode: themeProvider.themeMode,
            locale: languageProvider.currentLocale,
            localizationsDelegates: const [
              AppLocalizations.delegate,
              GlobalMaterialLocalizations.delegate,
              GlobalWidgetsLocalizations.delegate,
              GlobalCupertinoLocalizations.delegate,
            ],
            supportedLocales: AppLocalizations.supportedLocales,

            home: const HomePage(),
            routes: {
              '/home': (context) => const HomePage(),
              '/settings': (context) => const SettingsPage(),
            },
          );
        },
      ),
    );
  }

  /// Build light theme with Tactical Traps branding
  ThemeData _buildLightTheme() {
    return ThemeData(
      useMaterial3: true,
      brightness: Brightness.light,
      colorScheme: ColorScheme.light(
        primary: DS.brandRed,
        secondary: DS.brandDark,
        surface: DS.lightCardBackground,
        onPrimary: Colors.white,
        onSecondary: Colors.white,
        onSurface: DS.lightTextPrimary,
        error: DS.error,
        onError: Colors.white,
      ),
      textTheme: TextTheme(
        headlineLarge: TextStyle(
          fontSize: DS.text2XL,
          fontWeight: FontWeight.w700,
          color: DS.lightTextPrimary,
        ),
        headlineMedium: TextStyle(
          fontSize: DS.textXL,
          fontWeight: FontWeight.w600,
          color: DS.lightTextPrimary,
        ),
        titleLarge: TextStyle(
          fontSize: DS.textLG,
          fontWeight: FontWeight.w600,
          color: DS.lightTextPrimary,
        ),
        bodyLarge: TextStyle(
          fontSize: DS.textBase,
          fontWeight: FontWeight.w400,
          color: DS.lightTextPrimary,
        ),
        bodyMedium: TextStyle(
          fontSize: DS.textSM,
          fontWeight: FontWeight.w400,
          color: DS.lightTextSecondary,
        ),
      ),
      appBarTheme: AppBarTheme(
        backgroundColor: Colors.transparent,
        foregroundColor: DS.lightTextPrimary,
        elevation: 0,
        centerTitle: true,
      ),
      cardTheme: CardThemeData(
        color: Colors.transparent,
        elevation: 0,
        shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.circular(DS.rLarge),
        ),
      ),
      inputDecorationTheme: InputDecorationTheme(
        border: OutlineInputBorder(
          borderRadius: BorderRadius.circular(DS.rMedium),
          borderSide: BorderSide(color: DS.lightBorder),
        ),
        enabledBorder: OutlineInputBorder(
          borderRadius: BorderRadius.circular(DS.rMedium),
          borderSide: BorderSide(color: DS.lightBorder),
        ),
        focusedBorder: OutlineInputBorder(
          borderRadius: BorderRadius.circular(DS.rMedium),
          borderSide: BorderSide(color: DS.brandRed),
        ),
        filled: true,
        fillColor: Colors.white.withValues(alpha: 0.8),
      ),
      scaffoldBackgroundColor: Colors.transparent,
    );
  }

  /// Build dark theme with Tactical Traps branding
  ThemeData _buildDarkTheme() {
    return ThemeData(
      useMaterial3: true,
      colorScheme: ColorScheme.fromSeed(
        seedColor: DS.brandRed,
        brightness: Brightness.dark,
        primary: DS.brandRed,
        secondary: DS.brandAccent,
        error: DS.error,
        surface: DS.brandDark,
      ),
      textTheme: GoogleFonts.robotoTextTheme(ThemeData.dark().textTheme),
      appBarTheme: const AppBarTheme(
        elevation: 0,
        centerTitle: true,
        backgroundColor: Colors.transparent,
        foregroundColor: Colors.white,
        surfaceTintColor: Colors.transparent,
      ),
      scaffoldBackgroundColor: Colors.transparent,
      cardTheme: const CardThemeData(
        elevation: 0,
        color: Colors.transparent,
        surfaceTintColor: Colors.transparent,
      ),
      elevatedButtonTheme: ElevatedButtonThemeData(
        style: ElevatedButton.styleFrom(
          elevation: 0,
          shape: RoundedRectangleBorder(
            borderRadius: BorderRadius.circular(DS.rMedium),
          ),
          padding: EdgeInsets.symmetric(horizontal: DS.m, vertical: DS.m),
        ),
      ),
      inputDecorationTheme: InputDecorationTheme(
        border: OutlineInputBorder(
          borderRadius: BorderRadius.circular(DS.rMedium),
          borderSide: BorderSide(color: Colors.grey.withValues(alpha: 0.5)),
        ),
        enabledBorder: OutlineInputBorder(
          borderRadius: BorderRadius.circular(DS.rMedium),
          borderSide: BorderSide(color: Colors.grey.withValues(alpha: 0.5)),
        ),
        focusedBorder: OutlineInputBorder(
          borderRadius: BorderRadius.circular(DS.rMedium),
          borderSide: BorderSide(color: DS.brandRed, width: 2),
        ),
        contentPadding: EdgeInsets.all(DS.m),
        filled: true,
        fillColor: Colors.black.withValues(alpha: 0.3),
      ),
    );
  }
}
