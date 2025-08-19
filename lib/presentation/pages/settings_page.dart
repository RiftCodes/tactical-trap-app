import 'dart:ui';

import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

import '../../core/constants/app_constants.dart';
import '../providers/device_provider.dart';
import '../providers/theme_provider.dart';
import '../style/design_system.dart';
import '../widgets/glass_background.dart';
import '../widgets/glass_card.dart';
import '../widgets/theme_toggle.dart';

/// Elegant settings page with glassmorphism
class SettingsPage extends StatelessWidget {
  const SettingsPage({super.key});

  @override
  Widget build(BuildContext context) {
    final isDark = Theme.of(context).brightness == Brightness.dark;

    return Scaffold(
      appBar: AppBar(
        title: Image.asset(
          'assets/icons/horizontal.png',
          height: 28,
          errorBuilder: (_, __, ___) => const Text('Settings'),
        ),
        backgroundColor: Theme.of(context).brightness == Brightness.dark
            ? Colors.black.withValues(alpha: 0.4)
            : Colors.white.withValues(alpha: 0.85),
        elevation: 0,
        centerTitle: true,
        leading: IconButton(
          onPressed: () => Navigator.of(context).pop(),
          icon: Icon(
            Icons.arrow_back_rounded,
            color: Theme.of(context).brightness == Brightness.dark
                ? Colors.white
                : DS.brandDark,
          ),
        ),
        flexibleSpace: ClipRect(
          child: BackdropFilter(
            filter: ImageFilter.blur(sigmaX: 30, sigmaY: 30),
            child: Container(),
          ),
        ),
      ),
      body: Stack(
        children: [
          const GlassBackground(),
          Consumer2<DeviceProvider, ThemeProvider>(
            builder: (context, deviceProvider, themeProvider, child) {
              return CustomScrollView(
                slivers: [
                  SliverPadding(
                    padding: EdgeInsets.all(DS.s),
                    sliver: SliverList(
                      delegate: SliverChildListDelegate([
                        _section(context, 'Appearance', [
                          _themeRow(context, themeProvider, isDark),
                        ]),
                        SizedBox(height: DS.l),
                        _section(context, 'Preferences', [
                          _switchRow(
                            context,
                            'Auto-connect',
                            deviceProvider.getUserPreference(
                                  'autoConnect',
                                  defaultValue: true,
                                ) ??
                                true,
                            (v) => deviceProvider.updateUserPreference(
                              'autoConnect',
                              v,
                            ),
                            isDark,
                          ),
                          _switchRow(
                            context,
                            'Notifications',
                            deviceProvider.getUserPreference(
                                  'notifications',
                                  defaultValue: true,
                                ) ??
                                true,
                            (v) => deviceProvider.updateUserPreference(
                              'notifications',
                              v,
                            ),
                            isDark,
                          ),
                          _switchRow(
                            context,
                            'Haptics',
                            deviceProvider.getUserPreference(
                                  'vibration',
                                  defaultValue: true,
                                ) ??
                                true,
                            (v) => deviceProvider.updateUserPreference(
                              'vibration',
                              v,
                            ),
                            isDark,
                          ),
                        ]),
                        SizedBox(height: DS.l),
                        _section(context, 'App Information', [
                          _infoRow(
                            context,
                            'Version',
                            AppConstants.appVersion,
                            isDark,
                          ),
                          _infoRow(
                            context,
                            'Company',
                            AppConstants.companyName,
                            isDark,
                          ),
                        ]),
                        SizedBox(height: DS.l),
                        _section(context, 'Data', [
                          _actionRow(
                            context,
                            'Clear All Data',
                            Icons.delete_forever_rounded,
                            DS.brandRed,
                            () => _confirmClear(context, deviceProvider),
                            isDark,
                          ),
                        ]),
                        SizedBox(height: DS.xl * 2), // Bottom padding
                      ]),
                    ),
                  ),
                ],
              );
            },
          ),
        ],
      ),
    );
  }

  Widget _section(BuildContext context, String title, List<Widget> children) {
    final isDark = Theme.of(context).brightness == Brightness.dark;

    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Padding(
          padding: EdgeInsets.only(left: DS.s, bottom: DS.s),
          child: Text(
            title.toUpperCase(),
            style: TextStyle(
              fontSize: DS.textXS,
              fontWeight: FontWeight.w600,
              color: isDark ? Colors.grey[500] : const Color(0xFF64748B),
              letterSpacing: 0.5,
            ),
          ),
        ),
        GlassCard(
          padding: EdgeInsets.zero,
          child: Column(children: children),
        ),
      ],
    );
  }

  Widget _themeRow(
    BuildContext context,
    ThemeProvider themeProvider,
    bool isDark,
  ) {
    return Padding(
      padding: EdgeInsets.all(DS.m),
      child: Row(
        children: [
          Icon(Icons.palette_rounded, color: DS.info, size: 20),
          SizedBox(width: DS.m),
          Expanded(
            child: Text(
              'Theme',
              style: TextStyle(
                fontSize: DS.textSM,
                fontWeight: FontWeight.w500,
                color: isDark ? Colors.white : const Color(0xFF1E293B),
              ),
            ),
          ),
          const ThemeToggle(),
        ],
      ),
    );
  }

  Widget _infoRow(
    BuildContext context,
    String label,
    String value,
    bool isDark,
  ) {
    return Padding(
      padding: EdgeInsets.all(DS.m),
      child: Row(
        children: [
          Expanded(
            child: Text(
              label,
              style: TextStyle(
                fontSize: DS.textSM,
                fontWeight: FontWeight.w500,
                color: isDark ? Colors.white : const Color(0xFF1E293B),
              ),
            ),
          ),
          Text(
            value,
            style: TextStyle(
              fontSize: DS.textSM,
              color: isDark ? Colors.grey[400] : const Color(0xFF64748B),
            ),
          ),
        ],
      ),
    );
  }

  Widget _switchRow(
    BuildContext context,
    String label,
    bool value,
    Function(bool) onChanged,
    bool isDark,
  ) {
    return Padding(
      padding: EdgeInsets.symmetric(horizontal: DS.m, vertical: DS.s),
      child: Row(
        children: [
          Expanded(
            child: Text(
              label,
              style: TextStyle(
                fontSize: DS.textSM,
                fontWeight: FontWeight.w500,
                color: isDark ? Colors.white : const Color(0xFF1E293B),
              ),
            ),
          ),
          Switch(value: value, onChanged: onChanged, activeColor: DS.brandRed),
        ],
      ),
    );
  }

  Widget _actionRow(
    BuildContext context,
    String label,
    IconData icon,
    Color color,
    VoidCallback onTap,
    bool isDark,
  ) {
    return InkWell(
      onTap: onTap,
      child: Padding(
        padding: EdgeInsets.all(DS.m),
        child: Row(
          children: [
            Icon(icon, color: color, size: 20),
            SizedBox(width: DS.m),
            Expanded(
              child: Text(
                label,
                style: TextStyle(
                  fontSize: DS.textSM,
                  fontWeight: FontWeight.w500,
                  color: color,
                ),
              ),
            ),
            Icon(
              Icons.chevron_right_rounded,
              color: isDark ? Colors.grey[500] : const Color(0xFF94A3B8),
              size: 20,
            ),
          ],
        ),
      ),
    );
  }

  void _confirmClear(BuildContext context, DeviceProvider provider) {
    showDialog(
      context: context,
      builder: (ctx) => AlertDialog(
        title: const Text('Clear All Data?'),
        content: const Text(
          'This will remove all stored data and cannot be undone.',
        ),
        actions: [
          TextButton(
            onPressed: () => Navigator.of(ctx).pop(),
            child: const Text('Cancel'),
          ),
          ElevatedButton(
            onPressed: () async {
              Navigator.of(ctx).pop();
              await provider.clearAllData();
            },
            style: ElevatedButton.styleFrom(backgroundColor: DS.brandRed),
            child: const Text('Clear'),
          ),
        ],
      ),
    );
  }
}
