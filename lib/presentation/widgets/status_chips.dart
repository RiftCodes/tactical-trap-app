import 'package:flutter/material.dart';

import '../../data/models/lock_status.dart';
import '../style/design_system.dart';
import 'glass_card.dart';

/// Professional status chips for lock feedback
class StatusChips extends StatelessWidget {
  final LockStatus status;
  final int? rssi; // Optional RSSI for signal health

  const StatusChips({super.key, required this.status, this.rssi});

  @override
  Widget build(BuildContext context) {
    final chips = <Widget>[];

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

    // Lock Time (current time in user timezone)
    chips.add(
      _chip(
        icon: Icons.access_time_rounded,
        label: DateTime.now().toLocal().toString().substring(
          11,
          19,
        ), // HH:MM:SS
        color: Colors.blue,
      ),
    );

    // Signal Health (if RSSI is available)
    if (rssi != null) {
      chips.add(
        _chip(
          icon: _getSignalIcon(rssi!),
          label: _getSignalLabel(rssi!),
          color: _getSignalColor(rssi!),
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

  /// Get signal icon based on RSSI
  IconData _getSignalIcon(int rssi) {
    if (rssi > -50) return Icons.signal_cellular_4_bar; // Excellent
    if (rssi > -60) return Icons.signal_cellular_alt; // Good
    if (rssi > -70) {
      return Icons.wifi; // Fair
    }
    if (rssi > -80) return Icons.signal_cellular_nodata; // Poor
    return Icons.signal_cellular_off; // Very Poor
  }

  /// Get signal label based on RSSI
  String _getSignalLabel(int rssi) {
    if (rssi > -50) return 'Excellent'; // Excellent
    if (rssi > -60) return 'Good'; // Good
    if (rssi > -70) return 'Fair'; // Fair
    if (rssi > -80) return 'Poor'; // Poor
    return 'Very Poor'; // Very Poor
  }

  /// Get signal color based on RSSI
  Color _getSignalColor(int rssi) {
    if (rssi > -50) return Colors.green; // Excellent
    if (rssi > -60) return Colors.lightGreen; // Good
    if (rssi > -70) return Colors.orange; // Fair
    if (rssi > -80) return Colors.red; // Poor
    return Colors.red; // Very Poor
  }
}
