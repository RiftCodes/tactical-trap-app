import 'dart:ui';

import 'package:flutter/material.dart';

import '../../core/constants/app_constants.dart';
import '../../data/models/ble_device.dart';
import '../../l10n/app_localizations.dart';
import '../providers/device_provider.dart';
import '../style/design_system.dart';
import 'theme_toggle.dart';

/// Elegant iOS-style glass app bar with connection ribbon
class GlassAppBar extends StatelessWidget implements PreferredSizeWidget {
  final bool isConnected;
  final BleDevice? currentDevice;
  final DeviceProvider deviceProvider;

  const GlassAppBar({
    super.key,
    required this.isConnected,
    required this.currentDevice,
    required this.deviceProvider,
  });

  @override
  Size get preferredSize => Size.fromHeight(
    kToolbarHeight + (isConnected && currentDevice != null ? 60 : 0),
  );

  @override
  Widget build(BuildContext context) {
    final isDark = Theme.of(context).brightness == Brightness.dark;

    return ClipRRect(
      child: BackdropFilter(
        filter: ImageFilter.blur(sigmaX: 30, sigmaY: 30),
        child: Container(
          decoration: BoxDecoration(
            color: isDark
                ? Colors.black.withValues(alpha: 0.4)
                : Colors.white.withValues(alpha: 0.85),
            border: Border(
              bottom: BorderSide(
                color: isDark
                    ? Colors.white.withValues(alpha: 0.1)
                    : Colors.black.withValues(alpha: 0.05),
                width: 0.5,
              ),
            ),
          ),
          child: SafeArea(
            bottom: false,
            child: Column(
              children: [
                // Main app bar
                Container(
                  height: kToolbarHeight,
                  padding: EdgeInsets.symmetric(horizontal: DS.m),
                  child: Row(
                    children: [
                      // Theme toggle
                      const ThemeToggle(),
                      // Logo (centered) - consistent size
                      Expanded(
                        child: Center(
                          child: Image.asset(
                            'assets/icons/horizontal.png',
                            height: (isConnected && currentDevice != null)
                                ? 28
                                : 40,
                            filterQuality: FilterQuality.high,
                            errorBuilder: (_, __, ___) => Text(
                              AppConstants.appName,
                              style: TextStyle(
                                fontSize: (isConnected && currentDevice != null)
                                    ? DS.textLG
                                    : DS.text2XL,
                                fontWeight: FontWeight.w700,
                                color: isDark ? Colors.white : DS.brandDark,
                              ),
                            ),
                          ),
                        ),
                      ),
                      // Settings button
                      Container(
                        width: 40,
                        height: 40,
                        decoration: BoxDecoration(
                          color: isDark
                              ? Colors.white.withValues(alpha: 0.1)
                              : Colors.black.withValues(alpha: 0.05),
                          borderRadius: BorderRadius.circular(20),
                        ),
                        child: IconButton(
                          onPressed: () =>
                              Navigator.pushNamed(context, '/settings'),
                          icon: Icon(
                            Icons.settings_rounded,
                            color: isDark ? Colors.white : DS.brandDark,
                            size: 20,
                          ),
                          padding: EdgeInsets.zero,
                        ),
                      ),
                    ],
                  ),
                ),
                // Connection ribbon (only show when connected)
                if (isConnected && currentDevice != null)
                  _buildConnectionRibbon(context),
              ],
            ),
          ),
        ),
      ),
    );
  }

  Widget _buildConnectionRibbon(BuildContext context) {
    final l10n = AppLocalizations.of(context)!;
    final customName = deviceProvider.getDeviceName(currentDevice!.id);
    final displayName =
        customName ??
        currentDevice!.localName ??
        currentDevice!.name ??
        l10n.tacticalLock;
    final shortSN = _getShortSN(currentDevice!.name ?? currentDevice!.id);

    return Container(
      height: 64,
      padding: EdgeInsets.symmetric(horizontal: DS.m, vertical: DS.s),
      decoration: BoxDecoration(
        gradient: LinearGradient(
          colors: [DS.success, DS.success.withValues(alpha: 0.8)],
        ),
        boxShadow: [
          BoxShadow(
            color: DS.success.withValues(alpha: 0.2),
            blurRadius: 8,
            offset: const Offset(0, 2),
          ),
        ],
      ),
      child: Row(
        children: [
          // Connection icon with pulse animation
          TweenAnimationBuilder(
            duration: const Duration(seconds: 2),
            tween: Tween<double>(begin: 0.8, end: 1.0),
            builder: (context, value, child) {
              return Transform.scale(
                scale: value,
                child: Container(
                  width: 32,
                  height: 32,
                  decoration: BoxDecoration(
                    color: Colors.white.withValues(alpha: 0.2),
                    shape: BoxShape.circle,
                  ),
                  child: const Icon(
                    Icons.bluetooth_connected_rounded,
                    color: Colors.white,
                    size: 18,
                  ),
                ),
              );
            },
          ),
          SizedBox(width: DS.m),
          // Device info with overflow protection
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                LayoutBuilder(
                  builder: (context, constraints) {
                    return Text(
                      displayName,
                      style: const TextStyle(
                        color: Colors.white,
                        fontSize: 16,
                        fontWeight: FontWeight.w600,
                      ),
                      maxLines: 1,
                      overflow: TextOverflow.ellipsis,
                    );
                  },
                ),
                LayoutBuilder(
                  builder: (context, constraints) {
                    return Text(
                      l10n.serialNumberShort(shortSN),
                      style: TextStyle(
                        color: Colors.white.withValues(alpha: 0.8),
                        fontSize: 13,
                        fontWeight: FontWeight.w400,
                      ),
                      maxLines: 1,
                      overflow: TextOverflow.ellipsis,
                    );
                  },
                ),
              ],
            ),
          ),
          // Status badge
          Container(
            padding: EdgeInsets.symmetric(
              horizontal: DS.s + 2,
              vertical: DS.xs,
            ),
            decoration: BoxDecoration(
              color: Colors.white.withValues(alpha: 0.2),
              borderRadius: BorderRadius.circular(DS.rSmall),
              border: Border.all(
                color: Colors.white.withValues(alpha: 0.3),
                width: 1,
              ),
            ),
            child: Text(
              l10n.online,
              style: TextStyle(
                color: Colors.white,
                fontSize: 10,
                fontWeight: FontWeight.w700,
                letterSpacing: 1,
              ),
            ),
          ),
        ],
      ),
    );
  }

  String _getShortSN(String fullId) {
    if (fullId.length > 16) {
      return fullId.substring(fullId.length - 6).toUpperCase();
    }
    return fullId.toUpperCase();
  }
}
