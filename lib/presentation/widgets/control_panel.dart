import 'package:flutter/material.dart';

import '../../data/models/lock_status.dart';
import '../style/design_system.dart';
import 'glass_card.dart';

/// Essential controls panel for lock management
class ControlPanel extends StatelessWidget {
  final VoidCallback onToggleAlarm;
  final VoidCallback onToggleBuzzer;
  final VoidCallback onInitialize;
  final VoidCallback onGetVersion;
  final LockStatus? lastStatus;

  const ControlPanel({
    super.key,
    required this.onToggleAlarm,
    required this.onToggleBuzzer,
    required this.onInitialize,
    required this.onGetVersion,
    this.lastStatus,
  });

  @override
  Widget build(BuildContext context) {
    return GlassCard(
      child: Padding(
        padding: EdgeInsets.all(DS.m),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Row(
              children: [
                Icon(Icons.tune_rounded, color: DS.brandRed, size: 20),
                SizedBox(width: DS.xs),
                Text(
                  'Essential Controls',
                  style: TextStyle(
                    fontSize: DS.textLG,
                    fontWeight: FontWeight.w700,
                    color: DS.brandRed,
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
                    label: 'Alarm',
                    color: DS.warning,
                    onTap: onToggleAlarm,
                  ),
                ),
                SizedBox(width: DS.s),
                Expanded(
                  child: _buildControlButton(
                    icon: Icons.volume_up_rounded,
                    label: 'Buzzer',
                    color: DS.brandRed,
                    onTap: onToggleBuzzer,
                  ),
                ),
                SizedBox(width: DS.s),
                Expanded(
                  child: _buildControlButton(
                    icon: Icons.info_outline_rounded,
                    label: 'Version',
                    color: DS.info,
                    onTap: onGetVersion,
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
                    label: 'Reset',
                    color: DS.error,
                    onTap: onInitialize,
                  ),
                ),
                SizedBox(width: DS.xs),
                Expanded(
                  child: Container(), // Empty space to maintain layout
                ),
                SizedBox(width: DS.xs),
                Expanded(
                  child: Container(), // Empty space to maintain layout
                ),
              ],
            ),
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
}
