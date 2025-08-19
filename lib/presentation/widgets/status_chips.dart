import 'package:flutter/material.dart';

import '../../data/models/lock_status.dart';
import '../style/design_system.dart';
import 'glass_card.dart';

/// Professional status chips for lock feedback
class StatusChips extends StatelessWidget {
  final LockStatus status;

  const StatusChips({super.key, required this.status});

  @override
  Widget build(BuildContext context) {
    final chips = <Widget>[];

    // Main status
    chips.add(
      _chip(
        icon: status.isSuccess
            ? Icons.check_circle_rounded
            : Icons.error_rounded,
        label: status.responseMsg ?? status.statusDescription,
        color: status.isSuccess ? DS.success : DS.brandRed,
      ),
    );

    // Battery
    if (status.voltageValue != null) {
      chips.add(
        _chip(
          icon: Icons.battery_charging_full_rounded,
          label: '${(status.voltageValue! / 1000).toStringAsFixed(2)}V',
          color: DS.success,
        ),
      );
    }

    // Lock state
    if (status.openCloseState != null) {
      chips.add(
        _chip(
          icon: status.isLocked ? Icons.lock_rounded : Icons.lock_open_rounded,
          label: status.isLocked ? 'Locked' : 'Unlocked',
          color: status.isLocked ? DS.brandRed : DS.success,
        ),
      );
    }

    // Alarm
    if (status.alarmOn != null) {
      chips.add(
        _chip(
          icon: Icons.alarm_rounded,
          label: status.alarmOn == true ? 'Alarm On' : 'Alarm Off',
          color: status.alarmOn == true ? DS.warning : Colors.grey,
        ),
      );
    }

    // Buzzer
    if (status.buzzerOn != null) {
      chips.add(
        _chip(
          icon: Icons.volume_up_rounded,
          label: status.buzzerOn == true ? 'Buzzer On' : 'Buzzer Off',
          color: status.buzzerOn == true ? DS.warning : Colors.grey,
        ),
      );
    }

    return LayoutBuilder(
      builder: (context, constraints) {
        return Wrap(
          spacing: DS.xs,
          runSpacing: DS.xs,
          alignment: WrapAlignment.start,
          children: chips,
        );
      },
    );
  }

  Widget _chip({
    required IconData icon,
    required String label,
    required Color color,
  }) {
    return LayoutBuilder(
      builder: (context, constraints) {
        return GlassCard(
          padding: EdgeInsets.symmetric(horizontal: DS.s + 2, vertical: DS.xs),
          backgroundColor: color.withValues(alpha: 0.1),
          borderColor: color.withValues(alpha: 0.3),
          borderRadius: DS.rSmall,
          child: IntrinsicWidth(
            child: Row(
              mainAxisSize: MainAxisSize.min,
              children: [
                Icon(icon, size: 14, color: color),
                SizedBox(width: DS.xs),
                Flexible(
                  child: Text(
                    label,
                    style: TextStyle(
                      fontSize: DS.textXS,
                      fontWeight: FontWeight.w500,
                      color: color,
                    ),
                    maxLines: 1,
                    overflow: TextOverflow.ellipsis,
                  ),
                ),
              ],
            ),
          ),
        );
      },
    );
  }
}
