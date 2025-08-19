import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

import '../../data/models/ble_device.dart';
import '../../data/models/lock_status.dart';
import '../providers/device_provider.dart';
import '../style/design_system.dart';
import 'glass_card.dart';
import 'status_chips.dart';

/// Consolidated connected device details with status and controls
class ConnectedDetails extends StatefulWidget {
  final BleDevice device;
  final DeviceProvider deviceProvider;
  final LockStatus? lastStatus;

  const ConnectedDetails({
    super.key,
    required this.device,
    required this.deviceProvider,
    this.lastStatus,
  });

  @override
  State<ConnectedDetails> createState() => _ConnectedDetailsState();
}

class _ConnectedDetailsState extends State<ConnectedDetails> {
  late TextEditingController _controller;
  String _deviceVersion = 'Fetching...';

  @override
  void initState() {
    super.initState();
    final customName = widget.deviceProvider.getDeviceName(widget.device.id);
    _controller = TextEditingController(
      text:
          customName ??
          // widget.device.serialNumber ??
          widget.device.localName ??
          widget.device.name ??
          'Unknown', // Default serial number format
    );
    
    // Auto-fetch device version
    _fetchDeviceVersion();
  }

  @override
  void dispose() {
    _controller.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return GlassCard(
      margin: EdgeInsets.all(DS.m),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          // Status info first
          if (widget.lastStatus != null) ...[
            StatusChips(status: widget.lastStatus!, rssi: widget.device.rssi),
            SizedBox(height: DS.m),
          ],

          Text(
            'LOCK SETTINGS',
            style: TextStyle(
              fontSize: DS.textXS,
              fontWeight: FontWeight.w600,
              color: Theme.of(context).brightness == Brightness.dark
                  ? Colors.grey[500]
                  : const Color(0xFF64748B),
              letterSpacing: 0.5,
            ),
          ),
          SizedBox(height: DS.m),

          // Custom name input
          Row(
            children: [
              Expanded(
                child: TextField(
                  controller: _controller,
                  decoration: InputDecoration(
                    labelText: 'Lock Name',
                    hintText: 'Name this lock',
                    border: OutlineInputBorder(
                      borderRadius: BorderRadius.circular(DS.rMedium),
                    ),
                    contentPadding: EdgeInsets.all(DS.m),
                  ),
                  maxLines: 1,
                  textInputAction: TextInputAction.done,
                  onSubmitted: (_) => _saveName(),
                ),
              ),
              SizedBox(width: DS.m),
              ElevatedButton(
                onPressed: _saveName,
                style: ElevatedButton.styleFrom(
                  backgroundColor: DS.info,
                  foregroundColor: Colors.white,
                  padding: EdgeInsets.symmetric(
                    horizontal: DS.m,
                    vertical: DS.m,
                  ),
                  shape: RoundedRectangleBorder(
                    borderRadius: BorderRadius.circular(DS.rMedium),
                  ),
                ),
                child: const Text('Save'),
              ),
            ],
          ),

          SizedBox(height: DS.s),



          // Show More Section
          Container(
            decoration: BoxDecoration(
              color: Theme.of(context).brightness == Brightness.dark
                  ? Colors.grey[900]
                  : Colors.grey[50],
              borderRadius: BorderRadius.circular(DS.rSmall),
              border: Border.all(
                color: Theme.of(context).brightness == Brightness.dark
                    ? Colors.grey[700]!
                    : Colors.grey[200]!,
                width: 1,
              ),
            ),
            child: Theme(
              data: Theme.of(context).copyWith(
                dividerColor: Colors.transparent, // Remove accordion lines
              ),
              child: ExpansionTile(
                title: Row(
                  children: [
                    Icon(
                      Icons.info_outline_rounded,
                      color: Theme.of(context).brightness == Brightness.dark
                          ? Colors.white
                          : DS.brandDark,
                      size: 18,
                    ),
                    SizedBox(width: DS.xs),
                    Expanded(
                      child: Text(
                        'Device Details',
                        style: TextStyle(
                          fontSize: DS.textSM,
                          fontWeight: FontWeight.w600,
                          color: Theme.of(context).brightness == Brightness.dark
                              ? Colors.white
                              : DS.brandDark,
                        ),
                      ),
                    ),
                    Container(
                      padding: EdgeInsets.all(DS.xs),
                      decoration: BoxDecoration(
                        color: (Theme.of(context).brightness == Brightness.dark
                            ? Colors.white
                            : DS.brandDark).withValues(alpha: 0.1),
                        borderRadius: BorderRadius.circular(DS.rSmall),
                      ),
                      child: Icon(
                        Icons.expand_more_rounded,
                        color: Theme.of(context).brightness == Brightness.dark
                            ? Colors.white
                            : DS.brandDark,
                        size: 16,
                      ),
                    ),
                  ],
                ),
                iconColor: Colors.transparent,
                collapsedIconColor: Colors.transparent,
                childrenPadding: EdgeInsets.fromLTRB(DS.m, 0, DS.m, DS.m),
                children: [
                  // Lock Details in tabular form
                _buildDetailRow(
                  context: context,
                  icon: Icons.tag_rounded,
                  label: 'Lock ID',
                  value: widget.lastStatus?.lockId?.toString() ?? 'N/A',
                  color: Theme.of(context).brightness == Brightness.dark
                        ? Colors.indigo[400]!
                      : Colors.indigo[600]!,
                ),
                  // SizedBox(height: DS.xs),
                  // _buildDetailRow(
                  //   context: context,
                  //     icon: Icons.fingerprint_rounded,
                  //     label: 'Serial Number',
                  //     value: widget.device.serialNumber ?? 'SN:0000154924',
                  //     color: Theme.of(context).brightness == Brightness.dark
                  //         ? Colors.blue[400]!
                  //         : Colors.blue[600]!,
                  //   ),
                  SizedBox(height: DS.xs),
                  _buildDetailRow(
                    context: context,
                    icon: Icons.bluetooth_rounded,
                    label: 'Device ID',
                    value: widget.device.id,
                    color: Theme.of(context).brightness == Brightness.dark
                        ? Colors.grey[400]!
                        : Colors.grey[600]!,
                  ),
                  SizedBox(height: DS.xs),
                  _buildDetailRow(
                    context: context,
                  icon: Icons.info_outline_rounded,
                  label: 'Device Version',
                  value: _deviceVersion,
                  color: Theme.of(context).brightness == Brightness.dark
                        ? Colors.teal[400]!
                      : Colors.teal[600]!,
                ),
                SizedBox(height: DS.xs),
                _buildDetailRow(
                  context: context,
                  icon: Icons.signal_cellular_4_bar_rounded,
                  label: 'Signal Strength',
                  value: '${widget.device.rssi} dBm',
                  color: _getRSSIColor(widget.device.rssi),
                ),
                SizedBox(height: DS.xs),
                _buildDetailRow(
                  context: context,
                  icon: Icons.schedule_rounded,
                  label: 'Discovered',
                  value: _getTimeAgo(widget.device.discoveredAt),
                  color: Theme.of(context).brightness == Brightness.dark
                        ? Colors.orange[400]!
                      : Colors.orange[600]!,
                ),
                SizedBox(height: DS.xs),
                _buildDetailRow(
                  context: context,
                  icon: Icons.memory_rounded,
                  label: 'Manufacturer Data',
                  value: widget.device.manufacturerData.isNotEmpty
                      ? '${widget.device.manufacturerData.length} bytes'
                      : 'None',
                  color: Theme.of(context).brightness == Brightness.dark
                        ? Colors.purple[400]!
                      : Colors.purple[600]!,
                ),
                SizedBox(height: DS.xs),
                _buildDetailRow(
                  context: context,
                  icon: Icons.lock_rounded,
                  label: 'Device Type',
                  value: widget.device.isLock ? 'Tactical Lock' : 'Unknown',
                  color: widget.device.isLock 
                      ? (Theme.of(context).brightness == Brightness.dark
                              ? Colors.green[400]!
                          : Colors.green[600]!)
                      : (Theme.of(context).brightness == Brightness.dark
                          ? Colors.grey[400]!
                          : Colors.grey[600]!),
                ),
                ],
              ),
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildDetailRow({
    required BuildContext context,
    required IconData icon,
    required String label,
    required String value,
    required Color color,
  }) {
    return Row(
      children: [
        Icon(icon, color: color, size: 16),
        SizedBox(width: DS.xs),
        Expanded(
          child: Text(
            label,
            style: TextStyle(
              fontSize: DS.textXS,
              fontWeight: FontWeight.w500,
              color: color.withValues(alpha: 0.7),
            ),
          ),
        ),
        SizedBox(width: DS.xs),
        Text(
          value,
          style: TextStyle(
            fontSize: DS.textSM,
            fontWeight: FontWeight.w700,
            color: color,
          ),
        ),
      ],
    );
  }

  void _saveName() async {
    final name = _controller.text.trim();
    if (name.isNotEmpty) {
      final success = await widget.deviceProvider.saveDeviceName(
        widget.device.id,
        name,
      );
      if (success) {
        HapticFeedback.lightImpact();
        if (mounted) {
          ScaffoldMessenger.of(context).showSnackBar(
            SnackBar(
              content: Text('Lock renamed to "$name"'),
              backgroundColor: DS.success,
              duration: const Duration(seconds: 2),
              behavior: SnackBarBehavior.floating,
            ),
          );
        }
      } else {
        if (mounted) {
          ScaffoldMessenger.of(context).showSnackBar(
            SnackBar(
              content: const Text('Failed to save name'),
              backgroundColor: DS.brandRed,
              duration: const Duration(seconds: 2),
              behavior: SnackBarBehavior.floating,
            ),
          );
        }
      }
    }
  }

  /// Get color based on RSSI signal strength
  Color _getRSSIColor(int rssi) {
    if (rssi > -50) return Colors.green; // Excellent
    if (rssi > -60) return Colors.lightGreen; // Good
    if (rssi > -70) return Colors.orange; // Fair
    return Colors.red; // Poor
  }

  /// Get human-readable time ago string
  String _getTimeAgo(DateTime dateTime) {
    final now = DateTime.now();
    final difference = now.difference(dateTime);

    if (difference.inMinutes < 1) {
      return 'Just now';
    } else if (difference.inMinutes < 60) {
      return '${difference.inMinutes}m ago';
    } else if (difference.inHours < 24) {
      return '${difference.inHours}h ago';
    } else {
      return '${difference.inDays}d ago';
    }
  }

  /// Auto-fetch device version on connection
  void _fetchDeviceVersion() async {
    // TODO: Implement BLE version fetch
    // For now, simulate a delay and show placeholder
    await Future.delayed(const Duration(seconds: 2));
    if (mounted) {
      setState(() {
        _deviceVersion = 'v1.2.0'; // Placeholder version
      });
    }
  }
}
