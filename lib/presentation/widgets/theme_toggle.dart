import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:provider/provider.dart';

import '../providers/theme_provider.dart';

/// Clean and modern theme toggle switch
class ThemeToggle extends StatelessWidget {
  const ThemeToggle({super.key});

  @override
  Widget build(BuildContext context) {
    return Consumer<ThemeProvider>(
      builder: (context, themeProvider, child) {
        final currentTheme = themeProvider.themeMode;

        return GestureDetector(
          onTap: () {
            HapticFeedback.lightImpact();
            _cycleTheme(themeProvider);
          },
          child: Container(
            width: 48,
            height: 22,
            decoration: BoxDecoration(
              borderRadius: BorderRadius.circular(11),
              color: _getBackgroundColor(currentTheme),
              border: Border.all(
                color: _getBorderColor(currentTheme),
                width: 1,
              ),
            ),
            child: Stack(
              children: [
                // Sun icon (left)
                Positioned(
                  left: 4,
                  top: 0,
                  bottom: 0,
                  child: Center(
                    child: Icon(
                      Icons.wb_sunny_rounded,
                      size: 10,
                      color: _getSunColor(currentTheme),
                    ),
                  ),
                ),

                // Moon icon (right)
                Positioned(
                  right: 4,
                  top: 0,
                  bottom: 0,
                  child: Center(
                    child: Icon(
                      Icons.nightlight_round,
                      size: 10,
                      color: _getMoonColor(currentTheme),
                    ),
                  ),
                ),

                // Sliding indicator
                AnimatedPositioned(
                  duration: const Duration(milliseconds: 200),
                  curve: Curves.easeInOut,
                  left: _getIndicatorPosition(currentTheme),
                  top: 2,
                  child: Container(
                    width: 18,
                    height: 18,
                    decoration: BoxDecoration(
                      shape: BoxShape.circle,
                      color: _getIndicatorColor(currentTheme),
                      boxShadow: [
                        BoxShadow(
                          color: Colors.black.withValues(alpha: 0.1),
                          blurRadius: 2,
                          offset: const Offset(0, 1),
                        ),
                      ],
                    ),
                    child: Icon(
                      _getIndicatorIcon(currentTheme),
                      size: 10,
                      color: Colors.white,
                    ),
                  ),
                ),
              ],
            ),
          ),
        );
      },
    );
  }

  void _cycleTheme(ThemeProvider themeProvider) {
    switch (themeProvider.themeMode) {
      case ThemeMode.system:
        themeProvider.setThemeMode(ThemeMode.light);
        break;
      case ThemeMode.light:
        themeProvider.setThemeMode(ThemeMode.dark);
        break;
      case ThemeMode.dark:
        themeProvider.setThemeMode(ThemeMode.system);
        break;
    }
  }

  Color _getBackgroundColor(ThemeMode themeMode) {
    switch (themeMode) {
      case ThemeMode.system:
        return Colors.grey[300]!;
      case ThemeMode.light:
        return Colors.amber[100]!;
      case ThemeMode.dark:
        return Colors.indigo[200]!;
    }
  }

  Color _getBorderColor(ThemeMode themeMode) {
    switch (themeMode) {
      case ThemeMode.system:
        return Colors.grey[400]!;
      case ThemeMode.light:
        return Colors.amber[300]!;
      case ThemeMode.dark:
        return Colors.indigo[300]!;
    }
  }

  Color _getSunColor(ThemeMode themeMode) {
    switch (themeMode) {
      case ThemeMode.system:
        return Colors.grey[600]!;
      case ThemeMode.light:
        return Colors.amber[700]!;
      case ThemeMode.dark:
        return Colors.grey[500]!;
    }
  }

  Color _getMoonColor(ThemeMode themeMode) {
    switch (themeMode) {
      case ThemeMode.system:
        return Colors.grey[600]!;
      case ThemeMode.light:
        return Colors.grey[500]!;
      case ThemeMode.dark:
        return Colors.indigo[700]!;
    }
  }

  double _getIndicatorPosition(ThemeMode themeMode) {
    switch (themeMode) {
      case ThemeMode.system:
        return 2;
      case ThemeMode.light:
        return 15;
      case ThemeMode.dark:
        return 28;
    }
  }

  Color _getIndicatorColor(ThemeMode themeMode) {
    switch (themeMode) {
      case ThemeMode.system:
        return Colors.grey[600]!;
      case ThemeMode.light:
        return Colors.amber[600]!;
      case ThemeMode.dark:
        return Colors.indigo[600]!;
    }
  }

  IconData _getIndicatorIcon(ThemeMode themeMode) {
    switch (themeMode) {
      case ThemeMode.system:
        return Icons.brightness_auto_rounded;
      case ThemeMode.light:
        return Icons.wb_sunny_rounded;
      case ThemeMode.dark:
        return Icons.nightlight_round;
    }
  }
}
