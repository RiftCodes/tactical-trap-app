import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:provider/provider.dart';

import '../../l10n/app_localizations.dart';
import '../providers/ble_provider.dart';
import '../style/design_system.dart';

/// Persistent bottom sheet with lock controls
class ConnectedBottomSheet extends StatelessWidget {
  const ConnectedBottomSheet({super.key});

  @override
  Widget build(BuildContext context) {
    final l10n = AppLocalizations.of(context)!;
    return Consumer<BleProvider>(
      builder: (context, bleProvider, child) {
        final isLocked = bleProvider.lastStatus?.isLocked ?? true;
        final isProcessingCommand = bleProvider.isProcessingCommand;

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
                  l10n.lockControls,
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
                        icon: isProcessingCommand
                            ? null // Will show loading spinner
                            : (!isLocked
                                  ? Icons.lock_rounded
                                  : Icons.lock_open_rounded),
                        label: isProcessingCommand
                            ? 'PROCESSING...'
                            : (!isLocked
                                  ? l10n.lock.toUpperCase()
                                  : l10n.unlock.toUpperCase()),
                        color: isProcessingCommand
                            ? DS.brandDark
                            : (!isLocked ? DS.brandPrimary : DS.success),
                        isLoading: isProcessingCommand,
                        onTap: isProcessingCommand
                            ? null // Completely disable during processing
                            : () {
                                HapticFeedback.vibrate();
                                if (isLocked) {
                                  bleProvider.sendUnlockCommand();
                                } else {
                                  bleProvider.sendLockCommand();
                                }
                              },
                      ),
                    ),
                    SizedBox(width: DS.s),
                    Expanded(
                      child: _buildControlButton(
                        context: context,
                        icon: Icons.link_off_rounded,
                        label: l10n.disconnect.toUpperCase(),
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
    required IconData? icon,
    required String label,
    required Color color,
    required VoidCallback? onTap,
    bool isLoading = false,
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
                if (isLoading)
                  SizedBox(
                    width: 20,
                    height: 20,
                    child: CircularProgressIndicator(
                      strokeWidth: 2,
                      valueColor: AlwaysStoppedAnimation<Color>(Colors.white),
                    ),
                  )
                else if (icon != null)
                  Icon(icon, color: Colors.white, size: 20),
                SizedBox(width: DS.xs),
                Flexible(
                  child: FittedBox(
                    fit: BoxFit.scaleDown,
                    child: Text(
                      label,
                      style: TextStyle(
                        color: Colors.white,
                        fontSize: DS.textSM,
                        fontWeight: FontWeight.w600,
                      ),
                    ),
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
