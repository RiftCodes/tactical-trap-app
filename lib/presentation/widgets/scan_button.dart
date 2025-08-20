import 'package:flutter/material.dart';

import '../../core/constants/app_constants.dart';
import '../../l10n/app_localizations.dart';

/// Floating action button for scanning Bluetooth devices
class ScanButton extends StatelessWidget {
  final bool isScanning;
  final VoidCallback onScan;
  final VoidCallback onStopScan;

  const ScanButton({
    super.key,
    required this.isScanning,
    required this.onScan,
    required this.onStopScan,
  });

  @override
  Widget build(BuildContext context) {
    final l10n = AppLocalizations.of(context);
    if (l10n == null) return const SizedBox.shrink();
    
    return FloatingActionButton.extended(
      onPressed: isScanning ? onStopScan : onScan,
      backgroundColor: isScanning
          ? Colors.red
          : Theme.of(context).colorScheme.primary,
      foregroundColor: Colors.white,
      icon: isScanning
          ? const SizedBox(
              width: 20,
              height: 20,
              child: CircularProgressIndicator(
                strokeWidth: 2,
                valueColor: AlwaysStoppedAnimation<Color>(Colors.white),
              ),
            )
          : const Icon(Icons.bluetooth_searching),
      label: Text(isScanning ? l10n.stopScan : l10n.scan),
      elevation: AppConstants.defaultElevation,
    );
  }
}
