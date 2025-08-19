import 'package:flutter/material.dart';

import '../../data/models/ble_device.dart';
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
  final Function(String) onEditName;

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
    required this.onEditName,
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
            onTap: () {
              print('DEBUG: DeviceCard InkWell tapped - isConnected: $isConnected, isConnecting: $isConnecting');
              if (isConnected) {
                onDisconnect();
              } else if (!isConnecting) {
                onConnect();
              }
            },
            borderRadius: BorderRadius.circular(DS.rLarge),
            child: Padding(
              padding: EdgeInsets.all(DS.xs),
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
                'SN: ${_getShortSN(device.id)}',
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
          _buildDetailRow('Device ID', device.id, isDark),
          if (device.name != null && device.name != displayName)
            _buildDetailRow('Original Name', device.name!, isDark),
          if (device.localName != null && device.localName != displayName)
            _buildDetailRow('Local Name', device.localName!, isDark),
          _buildDetailRow('Signal', '${device.rssi} dBm', isDark),
          _buildDetailRow(
            'Found',
            _formatDateTime(device.discoveredAt),
            isDark,
          ),
        ],
      ),
    );
  }

  Widget _buildDetailRow(String label, String value, bool isDark) {
    return Padding(
      padding: EdgeInsets.only(bottom: DS.xs),
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          SizedBox(
            width: 65,
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
          Expanded(
            child: Text(
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
          ),
        ],
      ),
    );
  }

  Widget _buildEditNameButton(BuildContext context, bool isDark) {
    return SizedBox(
      width: double.infinity,
      child: ElevatedButton.icon(
        onPressed: () => _showEditNameDialog(context),
        icon: Icon(Icons.edit_rounded, size: 14),
        label: const Text('Edit Name'),
        style: ElevatedButton.styleFrom(
          backgroundColor: isDark ? DS.info : DS.info.withValues(alpha: 0.1),
          foregroundColor: isDark ? Colors.white : DS.info,
          elevation: 0,
          padding: EdgeInsets.symmetric(vertical: DS.xs, horizontal: DS.s),
          shape: RoundedRectangleBorder(
            borderRadius: BorderRadius.circular(DS.rMedium),
          ),
        ),
      ),
    );
  }

  void _showEditNameDialog(BuildContext context) {
    final controller = TextEditingController(text: displayName);
    showDialog(
      context: context,
      builder: (context) => AlertDialog(
        title: const Text('Edit Device Name'),
        content: TextField(
          controller: controller,
          decoration: const InputDecoration(
            labelText: 'Device Name',
            border: OutlineInputBorder(),
          ),
          autofocus: true,
        ),
        actions: [
          TextButton(
            onPressed: () => Navigator.of(context).pop(),
            child: const Text('Cancel'),
          ),
          ElevatedButton(
            onPressed: () {
              final newName = controller.text.trim();
              if (newName.isNotEmpty) {
                onEditName(newName);
                Navigator.of(context).pop();
              }
            },
            child: const Text('Save'),
          ),
        ],
      ),
    );
  }

  String _getShortSN(String fullId) {
    if (fullId.length > 8) {
      return fullId.substring(fullId.length - 8).toUpperCase();
    }
    return fullId.toUpperCase();
  }

  String _formatDateTime(DateTime dateTime) {
    final now = DateTime.now();
    final difference = now.difference(dateTime);

    if (difference.inMinutes < 1) {
      return 'Just now';
    } else if (difference.inHours < 1) {
      return '${difference.inMinutes}m ago';
    } else if (difference.inDays < 1) {
      return '${difference.inHours}h ago';
    } else {
      return '${difference.inDays}d ago';
    }
  }
}
