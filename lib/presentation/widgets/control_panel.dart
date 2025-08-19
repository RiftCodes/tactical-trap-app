import 'package:flutter/material.dart';

import '../../data/models/lock_status.dart';
import '../style/design_system.dart';
import 'glass_card.dart';

/// Advanced controls panel (utilities only - main controls in FAB)
class ControlPanel extends StatelessWidget {
  final VoidCallback onStatus;
  final VoidCallback onVersion;
  final VoidCallback onReadTime;
  final VoidCallback onSetTimeNow;
  final VoidCallback onToggleAlarm;
  final VoidCallback onToggleBuzzer;
  final VoidCallback onInitialize;
  final LockStatus? lastStatus;

  const ControlPanel({
    super.key,
    required this.onStatus,
    required this.onVersion,
    required this.onReadTime,
    required this.onSetTimeNow,
    required this.onToggleAlarm,
    required this.onToggleBuzzer,
    required this.onInitialize,
    this.lastStatus,
  });

  @override
  Widget build(BuildContext context) {
    final theme = Theme.of(context);
    return GlassCard(
      margin: EdgeInsets.all(DS.m),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            children: [
              Icon(Icons.tune_rounded, color: DS.brandRed, size: 22),
              SizedBox(width: DS.s + 2),
              Text(
                'Advanced Controls',
                style: theme.textTheme.titleMedium?.copyWith(
                  fontWeight: FontWeight.w600,
                  color: DS.brandRed,
                ),
              ),
            ],
          ),
          SizedBox(height: DS.m),

          // Utilities grid
          _utilitiesGrid(context),

          SizedBox(height: DS.m),

          // Advanced section
          _advancedSection(context),
        ],
      ),
    );
  }

  Widget _utilitiesGrid(BuildContext context) {
    return Column(
      children: [
        Row(
          children: [
            Expanded(
              child: _utilityButton(
                'Status',
                Icons.info_outline_rounded,
                DS.info,
                onStatus,
              ),
            ),
            SizedBox(width: DS.m),
            Expanded(
              child: _utilityButton(
                'Version',
                Icons.tag_rounded,
                Colors.indigo,
                onVersion,
              ),
            ),
          ],
        ),
        SizedBox(height: DS.m),
        Row(
          children: [
            Expanded(
              child: _utilityButton(
                'Read Time',
                Icons.schedule_rounded,
                Colors.teal,
                onReadTime,
              ),
            ),
            SizedBox(width: DS.m),
            Expanded(
              child: _utilityButton(
                'Set Time',
                Icons.access_time_filled_rounded,
                Colors.cyan,
                onSetTimeNow,
              ),
            ),
          ],
        ),
        SizedBox(height: DS.m),
        Row(
          children: [
            Expanded(
              child: _utilityButton(
                'Alarm',
                Icons.alarm_rounded,
                DS.warning,
                onToggleAlarm,
              ),
            ),
            SizedBox(width: DS.m),
            Expanded(
              child: _utilityButton(
                'Buzzer',
                Icons.volume_up_rounded,
                DS.brandRed,
                onToggleBuzzer,
              ),
            ),
          ],
        ),
      ],
    );
  }

  Widget _utilityButton(
    String label,
    IconData icon,
    Color color,
    VoidCallback onPressed,
  ) {
    return ElevatedButton.icon(
      onPressed: onPressed,
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

  Widget _advancedSection(BuildContext context) {
    return Theme(
      data: Theme.of(context).copyWith(dividerColor: Colors.transparent),
      child: ExpansionTile(
        title: Text(
          'Factory Reset',
          style: TextStyle(
            fontSize: DS.textSM,
            fontWeight: FontWeight.w500,
            color: Colors.grey[600],
          ),
        ),
        iconColor: Colors.grey[600],
        childrenPadding: EdgeInsets.only(bottom: DS.s),
        children: [
          SizedBox(
            width: double.infinity,
            child: ElevatedButton.icon(
              onPressed: onInitialize,
              icon: const Icon(Icons.restart_alt_rounded, size: 16),
              label: const Text('Initialize Lock'),
              style: ElevatedButton.styleFrom(
                backgroundColor: Colors.grey.withValues(alpha: 0.15),
                foregroundColor: Colors.grey[700],
                padding: EdgeInsets.symmetric(vertical: DS.m),
                shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(DS.rMedium),
                ),
                elevation: 0,
              ),
            ),
          ),
        ],
      ),
    );
  }
}
