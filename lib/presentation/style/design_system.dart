import 'package:flutter/material.dart';

/// Professional design system with Tactical Traps branding
class DS {
  // Brand colors - Blue-based palette for trust and security
  static const Color brandPrimary = Color(0xFF1E40AF); // Deep professional blue
  static const Color brandSecondary = Color(0xFF3B82F6); // Vibrant blue
  static const Color brandAccent = Color(0xFF60A5FA); // Light blue accent
  static const Color brandDark = Color(0xFF0F172A); // Deep navy for contrast
  static const Color brandLight = Color(0xFFEFF6FF); // Very light blue

  // Semantic colors
  static const Color success = Color(0xFF10B981);
  static const Color warning = Color(0xFFF59E0B);
  static const Color info = Color(0xFF0EA5E9);
  static const Color error = Color(0xFFEF4444);

  // Glass system - improved for light theme
  static const double glassBlur = 30;
  static const double glassBorder = 1;
  static const double glassOpacity = 0.12;
  static const double glassBorderOpacity = 0.2;

  // Light theme specific colors - Blue-tinted for trust
  static const Color lightBackground = Color(
    0xFFF8FAFC,
  ); // Very light blue-gray
  static const Color lightCardBackground = Color(0xFFFFFFFF);
  static const Color lightBorder = Color(0xFFE2E8F0); // Blue-gray border
  static const Color lightTextPrimary = Color(0xFF0F172A); // Deep navy text
  static const Color lightTextSecondary = Color(
    0xFF475569,
  ); // Blue-gray secondary
  static const Color lightTextTertiary = Color(0xFF94A3B8); // Light blue-gray

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
    return isDark ? brandDark : lightBackground;
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
