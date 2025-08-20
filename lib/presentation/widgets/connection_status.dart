import 'package:flutter/material.dart';

import '../../core/constants/app_constants.dart';
import '../../data/models/ble_device.dart';
import '../../l10n/app_localizations.dart';
import '../providers/device_provider.dart';
import 'glass_card.dart';

/// Widget for displaying connection status
class ConnectionStatus extends StatelessWidget {
  final bool isConnected;
  final BleDevice? currentDevice;
  final DeviceProvider deviceProvider;

  const ConnectionStatus({
    super.key,
    required this.isConnected,
    required this.currentDevice,
    required this.deviceProvider,
  });

  @override
  Widget build(BuildContext context) {
    if (!isConnected || currentDevice == null) {
      return _buildDisconnectedStatus(context);
    }

    return _buildConnectedStatus(context);
  }

  /// Build disconnected status
  Widget _buildDisconnectedStatus(BuildContext context) {
    final l10n = AppLocalizations.of(context);
    if (l10n == null) return const SizedBox.shrink();
    
    return GlassCard(
      margin: const EdgeInsets.all(AppConstants.defaultPadding),
      child: Row(
        children: [
          Icon(Icons.bluetooth_disabled, color: Colors.grey[600], size: 24),
          const SizedBox(width: 12),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  l10n.notConnected,
                  style: Theme.of(context).textTheme.titleMedium?.copyWith(
                    fontWeight: FontWeight.w600,
                    color: Colors.grey[700],
                  ),
                ),
                Text(
                  l10n.connectToLockMessage,
                  style: Theme.of(
                    context,
                  ).textTheme.bodySmall?.copyWith(color: Colors.grey[600]),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }

  /// Build connected status
  Widget _buildConnectedStatus(BuildContext context) {
    final l10n = AppLocalizations.of(context);
    if (l10n == null) return const SizedBox.shrink();
    
    final displayName = deviceProvider.getDisplayName(currentDevice!);

    return GlassCard(
      margin: const EdgeInsets.all(AppConstants.defaultPadding),
      child: Row(
        children: [
          Icon(Icons.bluetooth_connected, color: Colors.green[600], size: 24),
          const SizedBox(width: 12),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  l10n.connected,
                  style: Theme.of(context).textTheme.titleMedium?.copyWith(
                    fontWeight: FontWeight.w600,
                    color: Colors.green[700],
                  ),
                ),
                Text(
                  displayName,
                  style: Theme.of(context).textTheme.bodyMedium?.copyWith(
                    color: Colors.green[600],
                    fontWeight: FontWeight.w500,
                  ),
                ),
                if (currentDevice!.serialNumber != null)
                  Text(
                    l10n.serialNumberShort(currentDevice!.serialNumber!),
                    style: Theme.of(
                      context,
                    ).textTheme.bodySmall?.copyWith(color: Colors.green[600]),
                  ),
              ],
            ),
          ),
          Container(
            padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
            decoration: BoxDecoration(
              color: Colors.green[100],
              borderRadius: BorderRadius.circular(12),
            ),
            child: Text(
              l10n.online,
              style: Theme.of(context).textTheme.bodySmall?.copyWith(
                color: Colors.green[700],
                fontWeight: FontWeight.w600,
                fontSize: 10,
              ),
            ),
          ),
        ],
      ),
    );
  }
}
