import 'package:flutter/material.dart';

import '../../data/models/ble_device.dart';
import '../providers/device_provider.dart';
import '../style/design_system.dart';

/// Compact ribbon-style connection status that sticks to app bar
class ConnectionRibbon extends StatelessWidget {
  final bool isConnected;
  final BleDevice? currentDevice;
  final DeviceProvider deviceProvider;

  const ConnectionRibbon({
    super.key,
    required this.isConnected,
    required this.currentDevice,
    required this.deviceProvider,
  });

  @override
  Widget build(BuildContext context) {
    if (!isConnected || currentDevice == null) {
      return const SizedBox.shrink();
    }

    final customName = deviceProvider.getDeviceName(currentDevice!.id);
    final displayName =
        customName ??
        currentDevice!.localName ??
        currentDevice!.name ??
        currentDevice!.id;
    final shortSN = _getShortSN(currentDevice!.id);

    return Container(
      width: double.infinity,
      padding: EdgeInsets.symmetric(horizontal: DS.m, vertical: DS.s),
      decoration: BoxDecoration(
        color: DS.success.withValues(alpha: 0.9),
        boxShadow: [
          BoxShadow(
            color: DS.success.withValues(alpha: 0.3),
            blurRadius: 8,
            offset: const Offset(0, 2),
          ),
        ],
      ),
      child: SafeArea(
        bottom: false,
        child: Row(
          children: [
            Icon(
              Icons.bluetooth_connected_rounded,
              color: Colors.white,
              size: 18,
            ),
            SizedBox(width: DS.s),
            Expanded(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                mainAxisSize: MainAxisSize.min,
                children: [
                  Text(
                    displayName,
                    style: const TextStyle(
                      color: Colors.white,
                      fontSize: 15,
                      fontWeight: FontWeight.w600,
                    ),
                    maxLines: 1,
                    overflow: TextOverflow.ellipsis,
                  ),
                  Text(
                    'SN: $shortSN',
                    style: TextStyle(
                      color: Colors.white.withValues(alpha: 0.8),
                      fontSize: 12,
                    ),
                    maxLines: 1,
                    overflow: TextOverflow.ellipsis,
                  ),
                ],
              ),
            ),
            Container(
              padding: EdgeInsets.symmetric(horizontal: DS.s, vertical: DS.xs),
              decoration: BoxDecoration(
                color: Colors.white.withValues(alpha: 0.2),
                borderRadius: BorderRadius.circular(DS.rSmall),
              ),
              child: const Text(
                'ONLINE',
                style: TextStyle(
                  color: Colors.white,
                  fontSize: 10,
                  fontWeight: FontWeight.w700,
                  letterSpacing: 0.5,
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }

  String _getShortSN(String fullId) {
    // Extract last 6 characters for compact display
    if (fullId.length > 6) {
      return fullId.substring(fullId.length - 6).toUpperCase();
    }
    return fullId.toUpperCase();
  }
}
