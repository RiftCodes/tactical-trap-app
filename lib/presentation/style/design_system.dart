import 'package:flutter/material.dart';

/// Professional design system with Tactical Traps branding
class DS {
  // Brand colors from your logo
  static const Color brandRed = Color(0xFFDC2626); // Strong red from logo
  static const Color brandDark = Color(0xFF1F2937); // Dark from logo
  static const Color brandAccent = Color(0xFFEF4444); // Lighter red accent

  // Semantic colors
  static const Color success = Color(0xFF10B981);
  static const Color warning = Color(0xFFF59E0B);
  static const Color info = Color(0xFF3B82F6);
  static const Color error = Color(0xFFEF4444);

  // Glass system - improved for light theme
  static const double glassBlur = 30;
  static const double glassBorder = 1;
  static const double glassOpacity = 0.12;
  static const double glassBorderOpacity = 0.2;

  // Light theme specific colors
  static const Color lightBackground = Color(0xFFFAFBFC);
  static const Color lightCardBackground = Color(0xFFFFFFFF);
  static const Color lightBorder = Color(0xFFE5E7EB);
  static const Color lightTextPrimary = Color(0xFF111827);
  static const Color lightTextSecondary = Color(0xFF6B7280);
  static const Color lightTextTertiary = Color(0xFF9CA3AF);

  // Spacing (8pt grid)
  static const double xs = 4;
  static const double s = 8;
  static const double m = 16;
  static const double l = 24;
  static const double xl = 32;

  // Border radius
  static const double rSmall = 8;
  static const double rMedium = 12;
  static const double rLarge = 16;
  static const double rXLarge = 20;
  static const double rPill = 50;

  // Animations
  static const Duration fast = Duration(milliseconds: 150);
  static const Duration normal = Duration(milliseconds: 250);
  static const Duration slow = Duration(milliseconds: 400);

  // Typography scale
  static const double textXS = 12;
  static const double textSM = 14;
  static const double textBase = 16;
  static const double textLG = 18;
  static const double textXL = 20;
  static const double text2XL = 24;

  // Glass colors for light/dark themes - improved
  static Color glassLight(BuildContext context) {
    return Colors.white.withValues(alpha: 0.85);
  }

  static Color glassDark(BuildContext context) {
    return Colors.black.withValues(alpha: 0.4);
  }

  static Color glassBorderLight(BuildContext context) {
    return Colors.grey[300]!;
  }

  static Color glassBorderDark(BuildContext context) {
    return Colors.white.withValues(alpha: 0.15);
  }

  // Theme-aware colors
  static Color getBackgroundColor(BuildContext context) {
    final isDark = Theme.of(context).brightness == Brightness.dark;
    return isDark ? const Color(0xFF0A0E13) : lightBackground;
  }

  static Color getCardBackground(BuildContext context) {
    final isDark = Theme.of(context).brightness == Brightness.dark;
    return isDark ? Colors.white.withValues(alpha: 0.08) : lightCardBackground;
  }

  static Color getBorderColor(BuildContext context) {
    final isDark = Theme.of(context).brightness == Brightness.dark;
    return isDark ? Colors.white.withValues(alpha: 0.15) : lightBorder;
  }

  static Color getTextPrimary(BuildContext context) {
    final isDark = Theme.of(context).brightness == Brightness.dark;
    return isDark ? Colors.white : lightTextPrimary;
  }

  static Color getTextSecondary(BuildContext context) {
    final isDark = Theme.of(context).brightness == Brightness.dark;
    return isDark ? Colors.grey[400]! : lightTextSecondary;
  }
}
