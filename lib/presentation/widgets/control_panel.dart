import 'package:flutter/material.dart';

import '../../data/models/lock_status.dart';
import '../../l10n/app_localizations.dart';
import '../style/design_system.dart';
import '../widgets/user_manual_viewer.dart';
import 'glass_card.dart';

/// Essential controls panel for lock management
class ControlPanel extends StatelessWidget {
  final VoidCallback onToggleAlarm;
  final VoidCallback onToggleBuzzer;
  final VoidCallback onInitialize;
  final LockStatus? lastStatus;

  const ControlPanel({
    super.key,
    required this.onToggleAlarm,
    required this.onToggleBuzzer,
    required this.onInitialize,
    this.lastStatus,
  });

  @override
  Widget build(BuildContext context) {
    final isDark = Theme.of(context).brightness == Brightness.dark;
    final l10n = AppLocalizations.of(context)!;
    return GlassCard(
      margin: EdgeInsets.symmetric(horizontal: DS.m, vertical: DS.s),
      child: Padding(
        padding: EdgeInsets.all(DS.xs),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Row(
              children: [
                Icon(
                  Icons.tune_rounded,
                  color: isDark ? Colors.white : DS.brandDark,
                  size: 20,
                ),
                SizedBox(width: DS.xs),
                Text(
                  l10n.essentialControls,
                  style: TextStyle(
                    fontSize: DS.textLG,
                    fontWeight: FontWeight.w700,
                    color: isDark ? Colors.white : DS.brandDark,
                  ),
                ),
              ],
            ),
            SizedBox(height: DS.m),
            Row(
              children: [
                Expanded(
                  child: _buildControlButton(
                    icon: Icons.alarm_rounded,
                    label: l10n.alarm,
                    color: DS.warning,
                    onTap: onToggleAlarm,
                  ),
                ),
                SizedBox(width: DS.s),
                Expanded(
                  child: _buildControlButton(
                    icon: Icons.volume_up_rounded,
                    label: l10n.buzzer,
                    color: DS.brandRed,
                    onTap: onToggleBuzzer,
                  ),
                ), 

              ],
            ),
            SizedBox(height: DS.s),
            Row(
              children: [
                Expanded(
                  child: _buildControlButton(
                    icon: Icons.refresh_rounded,
                    label: l10n.reset,
                    color: DS.error,
                    onTap: onInitialize,
                  ),
                ),
              ],
            ),
            SizedBox(height: DS.s),
            Row(children: [Expanded(child: _buildManualButton(context))]),
          ],
        ),
      ),
    );
  }

  Widget _buildControlButton({
    required IconData icon,
    required String label,
    required Color color,
    required VoidCallback onTap,
  }) {
    return ElevatedButton.icon(
      onPressed: onTap,
      icon: Icon(icon, size: 16),
      label: Text(label, style: TextStyle(fontSize: DS.textSM)),
      style: ElevatedButton.styleFrom(
        backgroundColor: color.withValues(alpha: 0.15),
        foregroundColor: color,
        padding: EdgeInsets.symmetric(vertical: DS.m),
        shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.circular(DS.rMedium),
        ),
        elevation: 0,
      ),
    );
  }

  Widget _buildManualButton(BuildContext context) {
    final l10n = AppLocalizations.of(context)!;
    final isDark = Theme.of(context).brightness == Brightness.dark;
    final buttonColor = isDark ? Colors.white : const Color(0xFF1E293B);

    return Tooltip(
      message: l10n.userManual,
      child: ElevatedButton.icon(
        onPressed: () => Navigator.of(context).push(
          MaterialPageRoute(
            builder: (context) => UserManualViewer(isDark: isDark),
          ),
        ),
        icon: Icon(Icons.menu_book_rounded, size: 16),
        label: Text(l10n.userManual, style: TextStyle(fontSize: DS.textSM)),
        style: ElevatedButton.styleFrom(
          backgroundColor: buttonColor.withValues(alpha: 0.15),
          foregroundColor: buttonColor,
          padding: EdgeInsets.symmetric(vertical: DS.m),
          shape: RoundedRectangleBorder(
            borderRadius: BorderRadius.circular(DS.rMedium),
          ),
          elevation: 0,
        ),
      ),
    );
  }
}
