import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:provider/provider.dart';

import '../providers/ble_provider.dart';
import '../style/design_system.dart';

/// Persistent bottom sheet with lock controls
class ConnectedBottomSheet extends StatelessWidget {
  const ConnectedBottomSheet({super.key});

  @override
  Widget build(BuildContext context) {
    return Consumer<BleProvider>(
      builder: (context, bleProvider, child) {
        final isLocked = bleProvider.lastStatus?.isLocked ?? true;

        return Container(
          decoration: BoxDecoration(
            color: DS.getCardBackground(context),
            borderRadius: BorderRadius.circular(DS.rLarge),
            border: Border.all(color: DS.getBorderColor(context), width: 1),
            boxShadow: [
              BoxShadow(
                color: Colors.black.withValues(alpha: 0.1),
                blurRadius: 20,
                offset: const Offset(0, -5),
              ),
            ],
          ),
          child: Padding(
            padding: EdgeInsets.all(DS.m),
            child: Column(
              mainAxisSize: MainAxisSize.min,
              children: [
                // Title
                Text(
                  'Lock Controls',
                  style: TextStyle(
                    fontSize: DS.textLG,
                    fontWeight: FontWeight.w600,
                    color: DS.getTextPrimary(context),
                  ),
                ),
                SizedBox(height: DS.m),

                // Buttons row
                Row(
                  children: [
                    Expanded(
                      child: _buildControlButton(
                        context: context,
                        icon: !isLocked
                            ? Icons.lock_rounded
                            : Icons.lock_open_rounded,
                        label: !isLocked ? 'LOCK' : 'UNLOCK',
                        color: !isLocked ? DS.brandRed : DS.success,
                        onTap: () {
                          HapticFeedback.vibrate();
                          if (isLocked) {
                            bleProvider.sendLockCommand();
                          } else {
                            bleProvider.sendUnlockCommand();
                          }
                        },
                      ),
                    ),
                    SizedBox(width: DS.s),
                    Expanded(
                      child: _buildControlButton(
                        context: context,
                        icon: Icons.link_off_rounded,
                        label: 'DISCONNECT',
                        color: DS.brandDark,
                        onTap: () {
                          HapticFeedback.mediumImpact();
                          bleProvider.disconnectFromDevice();
                        },
                      ),
                    ),
                  ],
                ),
                SizedBox(height: DS.s),
              ],
            ),
          ),
        );
      },
    );
  }

  Widget _buildControlButton({
    required BuildContext context,
    required IconData icon,
    required String label,
    required Color color,
    required VoidCallback onTap,
  }) {
    return Container(
      height: 56,
      decoration: BoxDecoration(
        color: color,
        borderRadius: BorderRadius.circular(DS.rLarge),
        boxShadow: [
          BoxShadow(
            color: color.withValues(alpha: 0.3),
            blurRadius: 8,
            offset: const Offset(0, 4),
          ),
        ],
      ),
      child: Material(
        color: Colors.transparent,
        child: InkWell(
          onTap: onTap,
          borderRadius: BorderRadius.circular(DS.rLarge),
          child: Center(
            child: Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                Icon(icon, color: Colors.white, size: 20),
                SizedBox(width: DS.xs),
                Text(
                  label,
                  style: TextStyle(
                    color: Colors.white,
                    fontSize: DS.textSM,
                    fontWeight: FontWeight.w600,
                  ),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
