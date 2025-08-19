import 'dart:ui';

import 'package:flutter/material.dart';

import '../style/design_system.dart';

/// Elegant iOS-style glassmorphism card
class GlassCard extends StatelessWidget {
  final Widget child;
  final EdgeInsetsGeometry? padding;
  final EdgeInsetsGeometry? margin;
  final double? borderRadius;
  final Color? backgroundColor;
  final Color? borderColor;

  const GlassCard({
    super.key,
    required this.child,
    this.padding,
    this.margin,
    this.borderRadius,
    this.backgroundColor,
    this.borderColor,
  });

  @override
  Widget build(BuildContext context) {
    final isDark = Theme.of(context).brightness == Brightness.dark;
    final radius = borderRadius ?? DS.rLarge;

    return Container(
      margin: margin,
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(radius),
        boxShadow: [
          BoxShadow(
            color: isDark
                ? Colors.black.withValues(alpha: 0.2)
                : Colors.black.withValues(alpha: 0.06),
            blurRadius: isDark ? 20 : 12,
            offset: const Offset(0, 8),
            spreadRadius: 0,
          ),
        ],
      ),
      child: ClipRRect(
        borderRadius: BorderRadius.circular(radius),
        child: BackdropFilter(
          filter: ImageFilter.blur(sigmaX: DS.glassBlur, sigmaY: DS.glassBlur),
          child: Container(
            decoration: BoxDecoration(
              color:
                  backgroundColor ??
                  (isDark
                      ? DS.glassDark(context)
                      : Colors.white.withValues(alpha: 0.75)),
              borderRadius: BorderRadius.circular(radius),
              border: Border.all(
                color:
                    borderColor ??
                    (isDark
                        ? DS.glassBorderDark(context)
                        : const Color(0xFFE2E8F0)),
                width: 1,
              ),
            ),
            padding: padding ?? EdgeInsets.all(DS.m),
            child: child,
          ),
        ),
      ),
    );
  }
}
