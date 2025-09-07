import 'package:flutter/material.dart';

import '../../l10n/app_localizations.dart';
import '../style/design_system.dart';
import 'glass_card.dart';

/// Professional auto-reconnect overlay with elegant design
class AutoReconnectOverlay extends StatelessWidget {
  final String status;

  const AutoReconnectOverlay({super.key, required this.status});

  @override
  Widget build(BuildContext context) {
    final l10n = AppLocalizations.of(context)!;
    final isDark = Theme.of(context).brightness == Brightness.dark;

    return Center(
        child: Container(
          margin: EdgeInsets.all(DS.l),
        constraints: const BoxConstraints(maxWidth: 300),
          child: GlassCard(
            child: Padding(
              padding: EdgeInsets.all(DS.l),
              child: Column(
                mainAxisSize: MainAxisSize.min,
                children: [
                  // Elegant logo with animation
                  Container(
                    width: 64,
                    height: 64,
                    decoration: BoxDecoration(
                      color: DS.brandRed.withValues(alpha: 0.1),
                      borderRadius: BorderRadius.circular(32),
                      border: Border.all(
                        color: DS.brandRed.withValues(alpha: 0.3),
                        width: 2,
                      ),
                    ),
                    child: Center(
                      child: Icon(
                        Icons.bluetooth_searching_rounded,
                        size: 32,
                        color: DS.brandRed,
                      ),
                    ),
                  ),

                  SizedBox(height: DS.m),

                  // Animated progress indicator
                  SizedBox(
                    width: 32,
                    height: 32,
                    child: CircularProgressIndicator(
                      strokeWidth: 3,
                      valueColor: AlwaysStoppedAnimation<Color>(DS.brandRed),
                      backgroundColor: isDark
                          ? Colors.white.withValues(alpha: 0.1)
                          : Colors.black.withValues(alpha: 0.05),
                    ),
                  ),

                  SizedBox(height: DS.m),

                  // Main title
                  Text(
                  l10n.reconnecting,
                    style: TextStyle(
                      fontSize: DS.textLG,
                      fontWeight: FontWeight.w700,
                      color: DS.getTextPrimary(context),
                    ),
                    textAlign: TextAlign.center,
                  ),

                  SizedBox(height: DS.s),

                  // Status message
                  Text(
                    status,
                    style: TextStyle(
                      fontSize: DS.textSM,
                      color: DS.getTextSecondary(context),
                    ),
                    textAlign: TextAlign.center,
                    maxLines: 2,
                    overflow: TextOverflow.ellipsis,
                  ),

                  SizedBox(height: DS.m),

                  // Subtle hint
                  Container(
                    padding: EdgeInsets.symmetric(
                      horizontal: DS.s,
                      vertical: DS.xs,
                    ),
                    decoration: BoxDecoration(
                      color: isDark
                          ? Colors.white.withValues(alpha: 0.05)
                          : Colors.black.withValues(alpha: 0.03),
                      borderRadius: BorderRadius.circular(DS.rSmall),
                    ),
                  child: Text(
                    l10n.pleaseWaitWhileReconnect,
                    style: TextStyle(
                      fontSize: DS.textXS,
                      color: DS.getTextSecondary(context),
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
