import 'package:flutter/material.dart';

import '../../data/models/ble_device.dart';
import '../../l10n/app_localizations.dart';
import '../style/design_system.dart';
import 'glass_card.dart';

/// Professional device card with clean layout and proper spacing
class DeviceCard extends StatelessWidget {
  final BleDevice device;
  final bool isConnected;
  final String displayName;
  final bool isConnecting;
  final bool isVerifyingPin;
  final VoidCallback onConnect;
  final VoidCallback onDisconnect;
  final VoidCallback onToggleExpansion;

  const DeviceCard({
    super.key,
    required this.device,
    required this.isConnected,
    required this.displayName,
    this.isConnecting = false,
    this.isVerifyingPin = false,
    required this.onConnect,
    required this.onDisconnect,
    required this.onToggleExpansion,
  });

  @override
  Widget build(BuildContext context) {
    final isDark = Theme.of(context).brightness == Brightness.dark;

    return GlassCard(
      margin: EdgeInsets.only(bottom: DS.xs, left: DS.s, right: DS.s),
      child: Column(
        children: [
          // Main card content
          InkWell(
            onTap: isConnected
                ? onDisconnect
                : (isConnecting ? null : onConnect),
            borderRadius: BorderRadius.circular(DS.rMedium),
            child: Padding(
              padding: EdgeInsets.all(DS.xs).copyWith(bottom: DS.s),
              child: _buildMainContent(context, isDark),
            ),
          ),
          
          // Expanded details section
          if (device.isExpanded) _buildExpandedContent(context, isDark),
        ],
      ),
    );
  }

  Widget _buildMainContent(BuildContext context, bool isDark) {
    final l10n = AppLocalizations.of(context)!;
    return Row(
      children: [
        // Status indicator with better sizing
        _buildStatusIndicator(),
        SizedBox(width: DS.s),
        // Device information - properly fitted
        Expanded(
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text(
                displayName,
                style: TextStyle(
                  fontSize: DS.textSM,
                  fontWeight: FontWeight.w700,
                  color: isDark ? Colors.white : DS.brandDark,
                ),
                maxLines: 2,
                overflow: TextOverflow.ellipsis,
              ),
              SizedBox(height: 2),
              Text(
                l10n.serialNumberShort(_getSerialNumber()),
                style: TextStyle(
                  fontSize: DS.textXS,
                  color: isDark ? Colors.grey[400] : Colors.grey[600],
                  fontFamily: 'monospace',
                  fontWeight: FontWeight.w500,
                ),
                maxLines: 1,
                overflow: TextOverflow.ellipsis,
              ),
            ],
          ),
        ),
        SizedBox(width: DS.xs),
        // Connection action button - smaller for space
        _buildConnectionButton(context, isDark),
        SizedBox(width: DS.xs),
        // Expand/collapse arrow - smaller for space
        _buildExpandArrow(context, isDark),
      ],
    );
  }

  String _getSerialNumber() => device.name!.split(":")[1];

  Widget _buildStatusIndicator() {
    return Container(
      width: 10,
      height: 10,
      decoration: BoxDecoration(
        shape: BoxShape.circle,
        color: isConnected ? DS.success : DS.info,
        boxShadow: [
          BoxShadow(
            color: (isConnected ? DS.success : DS.info).withValues(alpha: 0.3),
            blurRadius: 6,
            spreadRadius: 1,
          ),
        ],
      ),
    );
  }

  Widget _buildConnectionButton(BuildContext context, bool isDark) {
    if (isConnecting || isVerifyingPin) {
      return Container(
        width: 32,
        height: 32,
        decoration: BoxDecoration(
          color: isDark
              ? Colors.white.withValues(alpha: 0.1)
              : Colors.black.withValues(alpha: 0.05),
          borderRadius: BorderRadius.circular(16),
          border: Border.all(
            color: isDark
                ? Colors.white.withValues(alpha: 0.15)
                : Colors.black.withValues(alpha: 0.1),
            width: 1,
          ),
        ),
        child: Center(
          child: SizedBox(
            width: 16,
            height: 16,
            child: CircularProgressIndicator(
              strokeWidth: 2,
              valueColor: AlwaysStoppedAnimation<Color>(DS.info),
            ),
          ),
        ),
      );
    }

    return Container(
      width: 32,
      height: 32,
      decoration: BoxDecoration(
        color: isConnected ? DS.brandRed : DS.info,
        borderRadius: BorderRadius.circular(16),
        boxShadow: [
          BoxShadow(
            color: (isConnected ? DS.brandRed : DS.info).withValues(
              alpha: 0.25,
            ),
            blurRadius: 6,
            offset: const Offset(0, 2),
          ),
        ],
      ),
      child: Icon(
        isConnected ? Icons.link_off_rounded : Icons.link_rounded,
        color: Colors.white,
        size: 14,
      ),
    );
  }

  Widget _buildExpandArrow(BuildContext context, bool isDark) {
    return GestureDetector(
      onTap: onToggleExpansion,
      child: Container(
        width: 32,
        height: 32,
        decoration: BoxDecoration(
          color: isDark
              ? Colors.white.withValues(alpha: 0.08)
              : Colors.black.withValues(alpha: 0.04),
          borderRadius: BorderRadius.circular(16),
          border: Border.all(
            color: isDark
                ? Colors.white.withValues(alpha: 0.1)
                : Colors.black.withValues(alpha: 0.08),
            width: 1,
          ),
        ),
        child: Icon(
          device.isExpanded
              ? Icons.keyboard_arrow_up_rounded
              : Icons.keyboard_arrow_down_rounded,
          color: isDark ? Colors.grey[400] : Colors.grey[600],
          size: 18,
        ),
      ),
    );
  }

  Widget _buildExpandedContent(BuildContext context, bool isDark) {
    final l10n = AppLocalizations.of(context)!;
    return Container(
      padding: EdgeInsets.fromLTRB(DS.s, DS.s, DS.s, 0),
      decoration: BoxDecoration(
        border: Border(
          top: BorderSide(
            color: isDark
                ? Colors.white.withValues(alpha: 0.08)
                : Colors.black.withValues(alpha: 0.06),
            width: 1,
          ),
        ),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          _buildDetailRow(l10n.deviceId, device.id, isDark),
          if (device.name != null && device.name != displayName)
            _buildDetailRow(l10n.originalName, device.name!, isDark), 
          Padding(
            padding: EdgeInsets.only(bottom: DS.xs),
            child: Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                SizedBox(
                  width: 100,
                  child: Text(
                    l10n.signalQuality,
                    style: TextStyle(
                      fontSize: DS.textXS,
                      fontWeight: FontWeight.w600,
                      color: isDark ? Colors.grey[400] : Colors.grey[600],
                    ),
                  ),
                ),
                SizedBox(width: DS.xs),
                Text(
                  _getSignalLabel(context, device.rssi),
                  style: TextStyle(
                    fontSize: DS.textXS,
                    color: _getSignalColor(device.rssi),
                    fontFamily: 'monospace',
                    fontWeight: FontWeight.w500,
                  ),
                  maxLines: 2,
                  overflow: TextOverflow.ellipsis,
                ),
              ],
            ),
          ),
          _buildDetailRow(l10n.signalStrength, '${device.rssi} dBm', isDark),
          _buildDetailRow(
            l10n.found,
            _formatDateTime(context, device.discoveredAt),
            isDark,
          ),
        ],
      ),
    );
  }
  /// Get signal label based on RSSI
  String _getSignalLabel(BuildContext context, int rssi) {
    final l10n = AppLocalizations.of(context)!;
    if (rssi > -50) return l10n.excellent; // Excellent
    if (rssi > -60) return l10n.good; // Good
    if (rssi > -70) return l10n.fair; // Fair
    if (rssi > -80) return l10n.poor; // Poor
    return l10n.veryPoor; // Very Poor
  }

  /// Get signal color based on RSSI
  Color _getSignalColor(int rssi) {
    if (rssi > -50) return Colors.green; // Excellent
    if (rssi > -60) return Colors.lightGreen; // Good
    if (rssi > -70) return Colors.orange; // Fair
    if (rssi > -80) return Colors.red; // Poor
    return Colors.red; // Very Poor
  }
  Widget _buildDetailRow(String label, String value, bool isDark) {
    return Padding(
      padding: EdgeInsets.only(bottom: DS.xs),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          SizedBox(
            width: 100,
            child: Text(
              '$label:',
              style: TextStyle(
                fontSize: DS.textXS,
                fontWeight: FontWeight.w600,
                color: isDark ? Colors.grey[400] : Colors.grey[600],
              ),
            ),
          ),
          SizedBox(width: DS.xs),
          Text(
            value,
            style: TextStyle(
              fontSize: DS.textXS,
              color: isDark ? Colors.grey[300] : Colors.grey[700],
              fontFamily: 'monospace',
              fontWeight: FontWeight.w500,
            ),
            maxLines: 2,
            overflow: TextOverflow.ellipsis,
          ),
        ],
      ),
    );
  }

  String _formatDateTime(BuildContext context, DateTime dateTime) {
    final l10n = AppLocalizations.of(context)!;
    final now = DateTime.now();
    final difference = now.difference(dateTime);

    if (difference.inMinutes < 1) {
      return l10n.justNow;
    } else if (difference.inHours < 1) {
      return '${difference.inMinutes}m ago';
    } else if (difference.inDays < 1) {
      return '${difference.inHours}h ago';
    } else {
      return '${difference.inDays}d ago';
    }
  }
}
