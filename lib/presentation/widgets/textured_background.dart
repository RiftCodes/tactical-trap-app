import 'package:flutter/material.dart';
import '../style/design_system.dart';

/// Textured background component with multiple texture options
class TexturedBackground extends StatelessWidget {
  final Widget child;
  final TextureType textureType;
  final bool isDark;

  const TexturedBackground({
    super.key,
    required this.child,
    this.textureType = TextureType.subtle,
    this.isDark = false,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: BoxDecoration(gradient: _getBaseGradient()),
      child: Stack(children: [_buildTextureLayer(), child]),
    );
  }

  LinearGradient _getBaseGradient() {
    if (isDark) {
      return LinearGradient(
        begin: Alignment.topLeft,
        end: Alignment.bottomRight,
        colors: [
          DS.brandDark,
          DS.brandDark.withValues(alpha: 0.95),
          DS.brandPrimary.withValues(alpha: 0.1),
        ],
        stops: const [0.0, 0.7, 1.0],
      );
    } else {
      return LinearGradient(
        begin: Alignment.topLeft,
        end: Alignment.bottomRight,
        colors: [
          DS.brandLight,
          Colors.white,
          DS.brandLight.withValues(alpha: 0.8),
        ],
        stops: const [0.0, 0.5, 1.0],
      );
    }
  }

  Widget _buildTextureLayer() {
    switch (textureType) {
      case TextureType.subtle:
        return _buildSubtleTexture();
      case TextureType.mesh:
        return _buildMeshTexture();
      case TextureType.dots:
        return _buildDotsTexture();
      case TextureType.lines:
        return _buildLinesTexture();
      case TextureType.concrete:
        return _buildConcreteTexture();
      case TextureType.wood:
        return _buildWoodTexture();
      case TextureType.grunge:
        return _buildGrungeTexture();
    }
  }

  Widget _buildSubtleTexture() {
    return Positioned.fill(
      child: CustomPaint(painter: SubtleTexturePainter(isDark: isDark)),
    );
  }

  Widget _buildMeshTexture() {
    return Positioned.fill(
      child: CustomPaint(painter: MeshTexturePainter(isDark: isDark)),
    );
  }

  Widget _buildDotsTexture() {
    return Positioned.fill(
      child: CustomPaint(painter: DotsTexturePainter(isDark: isDark)),
    );
  }

  Widget _buildLinesTexture() {
    return Positioned.fill(
      child: CustomPaint(painter: LinesTexturePainter(isDark: isDark)),
    );
  }

  Widget _buildConcreteTexture() {
    return Positioned.fill(
      child: CustomPaint(painter: ConcreteTexturePainter(isDark: isDark)),
    );
  }

  Widget _buildWoodTexture() {
    return Positioned.fill(
      child: CustomPaint(painter: WoodTexturePainter(isDark: isDark)),
    );
  }

  Widget _buildGrungeTexture() {
    return Positioned.fill(
      child: CustomPaint(painter: GrungeTexturePainter(isDark: isDark)),
    );
  }
}

enum TextureType {
  subtle,
  mesh,
  dots,
  lines,
  concrete, // Light granular stone-like texture
  wood, // Distressed wood planks
  grunge, // Dark scratched industrial texture
}

/// Subtle texture with soft gradients and gentle patterns
class SubtleTexturePainter extends CustomPainter {
  final bool isDark;

  SubtleTexturePainter({required this.isDark});

  @override
  void paint(Canvas canvas, Size size) {
    final paint = Paint()
      ..style = PaintingStyle.fill
      ..shader = RadialGradient(
        center: Alignment.topRight,
        radius: size.width * 0.8,
        colors: [
          (isDark ? DS.brandPrimary : DS.brandAccent).withValues(alpha: 0.1),
          Colors.transparent,
        ],
      ).createShader(Rect.fromLTWH(0, 0, size.width, size.height));

    canvas.drawRect(Rect.fromLTWH(0, 0, size.width, size.height), paint);

    // Add subtle circular patterns
    for (int i = 0; i < 3; i++) {
      final circlePaint = Paint()
        ..color = (isDark ? DS.brandSecondary : DS.brandPrimary).withValues(
          alpha: 0.05,
        )
        ..style = PaintingStyle.fill;

      final radius = (size.width * 0.3) + (i * size.width * 0.2);
      final center = Offset(
        size.width * (0.2 + i * 0.3),
        size.height * (0.3 + i * 0.2),
      );

      canvas.drawCircle(center, radius, circlePaint);
    }
  }

  @override
  bool shouldRepaint(covariant CustomPainter oldDelegate) => false;
}

/// Mesh texture with interconnected lines
class MeshTexturePainter extends CustomPainter {
  final bool isDark;

  MeshTexturePainter({required this.isDark});

  @override
  void paint(Canvas canvas, Size size) {
    final paint = Paint()
      ..color = (isDark ? DS.brandAccent : DS.brandSecondary).withValues(
        alpha: 0.1,
      )
      ..strokeWidth = 1.0
      ..style = PaintingStyle.stroke;

    const spacing = 40.0;

    // Draw vertical lines
    for (double x = 0; x < size.width; x += spacing) {
      canvas.drawLine(Offset(x, 0), Offset(x, size.height), paint);
    }

    // Draw horizontal lines
    for (double y = 0; y < size.height; y += spacing) {
      canvas.drawLine(Offset(0, y), Offset(size.width, y), paint);
    }

    // Draw diagonal lines for more complexity
    final diagonalPaint = Paint()
      ..color = (isDark ? DS.brandPrimary : DS.brandAccent).withValues(
        alpha: 0.05,
      )
      ..strokeWidth = 0.5
      ..style = PaintingStyle.stroke;

    for (int i = 0; i < 5; i++) {
      final offset = i * spacing * 0.5;
      canvas.drawLine(
        Offset(offset, 0),
        Offset(size.width, size.height - offset),
        diagonalPaint,
      );
      canvas.drawLine(
        Offset(0, offset),
        Offset(size.width - offset, size.height),
        diagonalPaint,
      );
    }
  }

  @override
  bool shouldRepaint(covariant CustomPainter oldDelegate) => false;
}

/// Dots texture with scattered circular patterns
class DotsTexturePainter extends CustomPainter {
  final bool isDark;

  DotsTexturePainter({required this.isDark});

  @override
  void paint(Canvas canvas, Size size) {
    final paint = Paint()
      ..color = (isDark ? DS.brandSecondary : DS.brandPrimary).withValues(
        alpha: 0.15,
      )
      ..style = PaintingStyle.fill;

    const spacing = 60.0;
    const dotSize = 2.0;

    for (double x = 0; x < size.width; x += spacing) {
      for (double y = 0; y < size.height; y += spacing) {
        // Add some randomness to make it look more natural
        final offsetX = x + (y % 2 == 0 ? spacing * 0.5 : 0);
        final offsetY = y + (x % 2 == 0 ? spacing * 0.3 : 0);

        if (offsetX < size.width && offsetY < size.height) {
          canvas.drawCircle(Offset(offsetX, offsetY), dotSize, paint);
        }
      }
    }

    // Add some larger dots for variation
    final largeDotPaint = Paint()
      ..color = (isDark ? DS.brandAccent : DS.brandSecondary).withValues(
        alpha: 0.08,
      )
      ..style = PaintingStyle.fill;

    for (int i = 0; i < 8; i++) {
      final x = (i * size.width * 0.15) % size.width;
      final y = (i * size.height * 0.2) % size.height;
      canvas.drawCircle(Offset(x, y), dotSize * 2, largeDotPaint);
    }
  }

  @override
  bool shouldRepaint(covariant CustomPainter oldDelegate) => false;
}

/// Lines texture with flowing curved lines
class LinesTexturePainter extends CustomPainter {
  final bool isDark;

  LinesTexturePainter({required this.isDark});

  @override
  void paint(Canvas canvas, Size size) {
    final paint = Paint()
      ..color = (isDark ? DS.brandPrimary : DS.brandAccent).withValues(
        alpha: 0.1,
      )
      ..strokeWidth = 1.5
      ..style = PaintingStyle.stroke;

    // Draw flowing curved lines
    for (int i = 0; i < 4; i++) {
      final path = Path();
      final startY = (i * size.height * 0.25) + 50;

      path.moveTo(0, startY);

      // Create a flowing curve
      for (double x = 0; x < size.width; x += 20) {
        final y =
            startY +
            (i % 2 == 0 ? 1 : -1) *
                (30 * (1 + (x / size.width) * 0.5)) *
                (0.5 + 0.5 * (x / size.width));
        path.lineTo(x, y);
      }

      canvas.drawPath(path, paint);
    }

    // Add some diagonal accent lines
    final accentPaint = Paint()
      ..color = (isDark ? DS.brandSecondary : DS.brandPrimary).withValues(
        alpha: 0.05,
      )
      ..strokeWidth = 1.0
      ..style = PaintingStyle.stroke;

    for (int i = 0; i < 3; i++) {
      final startX = i.toDouble() * size.width * 0.3;
      final endX = size.width;
      final startY = 0.0;
      final endY = size.height;

      canvas.drawLine(Offset(startX, startY), Offset(endX, endY), accentPaint);
    }
  }

  @override
  bool shouldRepaint(covariant CustomPainter oldDelegate) => false;
}

/// Concrete/Stone texture - Light granular, minimalist
class ConcreteTexturePainter extends CustomPainter {
  final bool isDark;

  ConcreteTexturePainter({required this.isDark});

  @override
  void paint(Canvas canvas, Size size) {
    // Concrete/Stone texture - Light grey, granular, minimalist
    // Base background - very light
    final basePaint = Paint()
      ..color = (isDark ? DS.brandLight : Colors.white).withValues(alpha: 0.1)
      ..style = PaintingStyle.fill;
    canvas.drawRect(Rect.fromLTWH(0, 0, size.width, size.height), basePaint);

    // Granular texture - like concrete
    final grainPaint = Paint()
      ..color = (isDark ? DS.brandAccent : DS.brandPrimary).withValues(
        alpha: 0.08,
      )
      ..style = PaintingStyle.fill;

    // Create fine granular pattern
    for (int i = 0; i < 300; i++) {
      final x = (i * 23.7) % size.width;
      final y = (i * 31.1) % size.height;
      final radius = 0.5 + (i % 2) * 0.3;

      canvas.drawCircle(Offset(x, y), radius, grainPaint);
    }

    // Add subtle variations
    final variationPaint = Paint()
      ..color = (isDark ? DS.brandSecondary : DS.brandAccent).withValues(
        alpha: 0.05,
      )
      ..style = PaintingStyle.fill;

    for (int i = 0; i < 100; i++) {
      final x = (i * 47.3) % size.width;
      final y = (i * 59.7) % size.height;
      final radius = 1.0 + (i % 3) * 0.5;

      canvas.drawCircle(Offset(x, y), radius, variationPaint);
    }

    // Add subtle noise
    final noisePaint = Paint()
      ..color = (isDark ? Colors.white : DS.brandDark).withValues(alpha: 0.03)
      ..style = PaintingStyle.fill;

    for (int i = 0; i < 200; i++) {
      final x = (i * 19.3) % size.width;
      final y = (i * 27.1) % size.height;

      canvas.drawCircle(Offset(x, y), 0.3, noisePaint);
    }
  }

  @override
  bool shouldRepaint(covariant CustomPainter oldDelegate) => false;
}

/// Distressed wood texture - Horizontal planks with grain
class WoodTexturePainter extends CustomPainter {
  final bool isDark;

  WoodTexturePainter({required this.isDark});

  @override
  void paint(Canvas canvas, Size size) {
    // Distressed wood texture - Horizontal planks with grain
    // Base background - very light
    final basePaint = Paint()
      ..color = (isDark ? DS.brandLight : Colors.white).withValues(alpha: 0.05)
      ..style = PaintingStyle.fill;
    canvas.drawRect(Rect.fromLTWH(0, 0, size.width, size.height), basePaint);

    const plankHeight = 60.0;
    final plankCount = (size.height / plankHeight).ceil();

    // Draw horizontal planks
    for (int i = 0; i < plankCount; i++) {
      final y = i * plankHeight;
      final plankRect = Rect.fromLTWH(0, y, size.width, plankHeight);

      // Base plank color - alternating for distressed look
      final plankPaint = Paint()
        ..color = (isDark ? DS.brandLight : Colors.white).withValues(
          alpha: i % 2 == 0 ? 0.15 : 0.08, // Subtle alternating planks
        )
        ..style = PaintingStyle.fill;

      canvas.drawRect(plankRect, plankPaint);

      // Plank border - very subtle
      final borderPaint = Paint()
        ..color = (isDark ? DS.brandAccent : DS.brandPrimary).withValues(
          alpha: 0.1,
        )
        ..strokeWidth = 0.5
        ..style = PaintingStyle.stroke;

      canvas.drawLine(
        Offset(0, y + plankHeight),
        Offset(size.width, y + plankHeight),
        borderPaint,
      );

      // Wood grain lines - subtle brown accent
      final grainPaint = Paint()
        ..color = (isDark ? const Color(0xFF8B4513) : const Color(0xFFD2691E))
            .withValues(
              alpha: 0.12, // Slightly more visible brown
            )
        ..strokeWidth = 0.8
        ..style = PaintingStyle.stroke;

      for (int j = 0; j < 3; j++) {
        final grainY = y + (j + 1) * (plankHeight / 4);
        final startX = (j * 50.0) % size.width;
        final endX = size.width;

        canvas.drawLine(
          Offset(startX, grainY),
          Offset(endX, grainY),
          grainPaint,
        );
      }

      // Wood knots - subtle brown accent
      if (i % 3 == 0) {
        final knotPaint = Paint()
          ..color = (isDark ? const Color(0xFF654321) : const Color(0xFFA0522D))
              .withValues(
                alpha: 0.15, // More visible brown knots
              )
          ..style = PaintingStyle.fill;

        final knotX = (i * 100.0) % (size.width - 20) + 10;
        final knotY = y + plankHeight / 2;

        canvas.drawOval(
          Rect.fromCenter(center: Offset(knotX, knotY), width: 6, height: 3),
          knotPaint,
        );
      }

      // Add subtle wood texture lines with brown accent
      final texturePaint = Paint()
        ..color = (isDark ? const Color(0xFF8B4513) : const Color(0xFFD2691E))
            .withValues(
              alpha: 0.08, // Brown texture lines
            )
        ..strokeWidth = 0.4
        ..style = PaintingStyle.stroke;

      for (int k = 0; k < 3; k++) {
        final textureY = y + (k * plankHeight / 3);
        canvas.drawLine(
          Offset(0, textureY),
          Offset(size.width, textureY),
          texturePaint,
        );
      }
    }
  }

  @override
  bool shouldRepaint(covariant CustomPainter oldDelegate) => false;
}

/// Grunge texture - Dark, scratched, industrial
class GrungeTexturePainter extends CustomPainter {
  final bool isDark;

  GrungeTexturePainter({required this.isDark});

  @override
  void paint(Canvas canvas, Size size) {
    // Grunge texture - Dark, scratched, industrial (very subtle)
    // Base background - very light
    final basePaint = Paint()
      ..color = (isDark ? DS.brandDark : DS.brandPrimary).withValues(
        alpha: 0.05,
      )
      ..style = PaintingStyle.fill;

    canvas.drawRect(Rect.fromLTWH(0, 0, size.width, size.height), basePaint);

    // Subtle scratches
    final scratchPaint = Paint()
      ..color = (isDark ? Colors.white : DS.brandLight).withValues(alpha: 0.03)
      ..strokeWidth = 0.5
      ..style = PaintingStyle.stroke;

    // Random scratches - very subtle
    for (int i = 0; i < 15; i++) {
      final startX = (i * 37.1) % size.width;
      final startY = (i * 43.7) % size.height;
      final endX = (i * 51.3) % size.width;
      final endY = (i * 59.1) % size.height;

      canvas.drawLine(Offset(startX, startY), Offset(endX, endY), scratchPaint);
    }

    // Subtle scuffs
    final scuffPaint = Paint()
      ..color = (isDark ? DS.brandPrimary : DS.brandDark).withValues(
        alpha: 0.08,
      )
      ..style = PaintingStyle.fill;

    for (int i = 0; i < 10; i++) {
      final x = (i * 67.3) % size.width;
      final y = (i * 73.1) % size.height;
      final width = 15.0 + (i % 3) * 5.0;
      final height = 10.0 + (i % 2) * 5.0;

      canvas.drawOval(
        Rect.fromCenter(center: Offset(x, y), width: width, height: height),
        scuffPaint,
      );
    }

    // Subtle vignette effect
    final vignettePaint = Paint()
      ..shader = RadialGradient(
        center: Alignment.center,
        radius: 1.0,
        colors: [
          Colors.transparent,
          (isDark ? DS.brandDark : DS.brandPrimary).withValues(alpha: 0.05),
        ],
        stops: const [0.6, 1.0],
      ).createShader(Rect.fromLTWH(0, 0, size.width, size.height))
      ..style = PaintingStyle.fill;

    canvas.drawRect(
      Rect.fromLTWH(0, 0, size.width, size.height),
      vignettePaint,
    );

    // Subtle noise spots
    final noisePaint = Paint()
      ..color = (isDark ? Colors.white : DS.brandLight).withValues(alpha: 0.02)
      ..style = PaintingStyle.fill;

    for (int i = 0; i < 20; i++) {
      final x = (i * 23.7) % size.width;
      final y = (i * 31.9) % size.height;
      final radius = 0.3 + (i % 2) * 0.2;

      canvas.drawCircle(Offset(x, y), radius, noisePaint);
    }
  }

  @override
  bool shouldRepaint(covariant CustomPainter oldDelegate) => false;
}
