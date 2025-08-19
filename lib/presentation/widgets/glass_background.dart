import 'package:flutter/material.dart';

import '../style/design_system.dart';

/// Enhanced iOS-style background with beautiful glassmorphism
class GlassBackground extends StatelessWidget {
  const GlassBackground({super.key});

  @override
  Widget build(BuildContext context) {
    final isDark = Theme.of(context).brightness == Brightness.dark;

    return Container(
      decoration: BoxDecoration(
        gradient: isDark
            ? RadialGradient(
                center: Alignment.topLeft,
                radius: 2.0,
                colors: [
                  DS.brandDark,
                  DS.brandDark.withValues(alpha: 0.95),
                  DS.brandDark.withValues(alpha: 0.85),
                  DS.brandDark.withValues(alpha: 0.75),
                ],
                stops: const [0.0, 0.3, 0.7, 1.0],
              )
            : RadialGradient(
                center: Alignment.topLeft,
                radius: 2.0,
                colors: [
                  Colors.white,
                  const Color(0xFFF1F5F9),
                  const Color(0xFFE2E8F0),
                  const Color(0xFFCBD5E1),
                ],
                stops: const [0.0, 0.4, 0.7, 1.0],
              ),
      ),
      child: Stack(
        children: [
          // Base gradient layer
          Container(
            decoration: BoxDecoration(
              gradient: isDark
                  ? LinearGradient(
                      begin: Alignment.topLeft,
                      end: Alignment.bottomRight,
                      colors: [
                        DS.brandRed.withValues(alpha: 0.2),
                        Colors.transparent,
                        DS.brandRed.withValues(alpha: 0.15),
                        DS.brandRed.withValues(alpha: 0.1),
                      ],
                      stops: const [0.0, 0.3, 0.7, 1.0],
                    )
                  : LinearGradient(
                      begin: Alignment.topLeft,
                      end: Alignment.bottomRight,
                      colors: [
                        const Color(0xFFE2E8F0).withValues(alpha: 0.6),
                        Colors.transparent,
                        const Color(0xFFCBD5E1).withValues(alpha: 0.5),
                        const Color(0xFF94A3B8).withValues(alpha: 0.4),
                      ],
                      stops: const [0.0, 0.3, 0.7, 1.0],
                    ),
            ),
          ),

          // Additional subtle patterns for depth
          if (isDark)
            Positioned(
              top: -50,
              right: -50,
              child: Container(
                width: 200,
                height: 200,
                decoration: BoxDecoration(
                  shape: BoxShape.circle,
                  color: DS.brandRed.withValues(alpha: 0.08),
                ),
              ),
            )
          else
            Positioned(
              top: -30,
              right: -30,
              child: Container(
                width: 150,
                height: 150,
                decoration: BoxDecoration(
                  shape: BoxShape.circle,
                  color: const Color(0xFFE2E8F0).withValues(alpha: 0.3),
                ),
              ),
            ),

          // Bottom accent
          if (isDark)
            Positioned(
              bottom: -40,
              left: -40,
              child: Container(
                width: 180,
                height: 180,
                decoration: BoxDecoration(
                  shape: BoxShape.circle,
                  color: DS.brandRed.withValues(alpha: 0.06),
                ),
              ),
            )
          else
            Positioned(
              bottom: -25,
              left: -25,
              child: Container(
                width: 120,
                height: 120,
                decoration: BoxDecoration(
                  shape: BoxShape.circle,
                  color: const Color(0xFFCBD5E1).withValues(alpha: 0.25),
                ),
              ),
            ),
        ],
      ),
    );
  }
}
