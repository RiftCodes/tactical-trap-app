import 'package:flutter/material.dart';

import '../../core/constants/app_constants.dart';

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
      label: Text(isScanning ? 'Stop Scan' : 'Scan'),
      elevation: AppConstants.defaultElevation,
    );
  }
}
