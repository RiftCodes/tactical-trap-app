import 'package:flutter/material.dart';

import '../../data/models/lock_status.dart';
import '../style/design_system.dart';
import 'glass_card.dart';

/// Essential controls panel for lock management
class ControlPanel extends StatelessWidget {
  final VoidCallback onStatus;
  final VoidCallback onToggleAlarm;
  final VoidCallback onToggleBuzzer;
  final VoidCallback onInitialize;
  final LockStatus? lastStatus;

  const ControlPanel({
    super.key,
    required this.onStatus,
    required this.onToggleAlarm,
    required this.onToggleBuzzer,
    required this.onInitialize,
    this.lastStatus,
  });

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        // Essential Controls
        GlassCard(
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
                        icon: Icons.info_outline_rounded,
                        label: 'Status',
                        color: DS.info,
                        onTap: onStatus,
                      ),
                    ),
                    SizedBox(width: DS.s),
                    Expanded(
                      child: _buildControlButton(
                        icon: Icons.alarm_rounded,
                        label: 'Alarm',
                        color: DS.warning,
                        onTap: onToggleAlarm,
                      ),
                    ),
                  ],
                ),
                SizedBox(height: DS.s),
                Row(
                  children: [
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
                        icon: Icons.refresh_rounded,
                        label: 'Reset',
                        color: DS.error,
                        onTap: onInitialize,
                      ),
                    ),
                  ],
                ),
              ],
            ),
          ),
        ),

        SizedBox(height: DS.m),

        // Lock Details (Read-only)
        GlassCard(
          child: Padding(
            padding: EdgeInsets.all(DS.m),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Row(
                  children: [
                    Icon(Icons.settings_rounded, color: DS.brandDark, size: 20),
                    SizedBox(width: DS.xs),
                    Text(
                      'Lock Details',
                      style: TextStyle(
                        fontSize: DS.textLG,
                        fontWeight: FontWeight.w700,
                        color: DS.brandDark,
                      ),
                    ),
                  ],
                ),
                SizedBox(height: DS.m),
                _buildDetailRow(
                  context,
                  icon: Icons.tag_rounded,
                  label: 'Firmware Version',
                  value: 'v2.1.4',
                  color: Colors.indigo,
                ),
                SizedBox(height: DS.s),
                _buildDetailRow(
                  context,
                  icon: Icons.schedule_rounded,
                  label: 'Last Sync Time',
                  value: '2 min ago',
                  color: Colors.teal,
                ),
                SizedBox(height: DS.s),
                _buildDetailRow(
                  context,
                  icon: Icons.access_time_rounded,
                  label: 'Lock Time',
                  value: '14:32:15',
                  color: Colors.cyan,
                ),
              ],
            ),
          ),
        ),
      ],
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

  Widget _buildDetailRow(
    BuildContext context, {
    required IconData icon,
    required String label,
    required String value,
    required Color color,
  }) {
    return Container(
      padding: EdgeInsets.symmetric(horizontal: DS.s, vertical: DS.xs),
      decoration: BoxDecoration(
        color: color.withValues(alpha: 0.1),
        borderRadius: BorderRadius.circular(DS.rSmall),
        border: Border.all(color: color.withValues(alpha: 0.2), width: 1),
      ),
      child: Row(
        children: [
          Icon(icon, color: color, size: 16),
          SizedBox(width: DS.xs),
          Expanded(
            child: Text(
              label,
              style: TextStyle(
                fontSize: DS.textSM,
                fontWeight: FontWeight.w500,
                color: DS.getTextPrimary(context),
              ),
            ),
          ),
          Text(
            value,
            style: TextStyle(
              fontSize: DS.textSM,
              fontWeight: FontWeight.w600,
              color: color,
            ),
          ),
        ],
      ),
    );
  }
}
