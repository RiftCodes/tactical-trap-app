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
  final String _deviceVersion = 'Tap Version button';

  @override
  void initState() {
    super.initState();
    final customName = widget.deviceProvider.getDeviceName(widget.device.id);
    _controller = TextEditingController(
      text:
          customName ??
          widget.device.localName ??
          widget.device.name ??
          'SN:0000154924', // Default serial number format
    );
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
            StatusChips(status: widget.lastStatus!),
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

          // Device info
          Text(
            'Device ID: ${widget.device.id}',
            style: TextStyle(
              fontSize: DS.textXS,
              color: Colors.grey[600],
              fontFamily: 'monospace',
            ),
            maxLines: 1,
            overflow: TextOverflow.ellipsis,
          ),
          
          SizedBox(height: DS.m),

          // Show More Section
          Container(
            decoration: BoxDecoration(
              color: Colors.grey[50],
              borderRadius: BorderRadius.circular(DS.rSmall),
              border: Border.all(color: Colors.grey[200]!, width: 1),
            ),
            child: ExpansionTile(
              title: Row(
                children: [
                  Icon(
                    Icons.info_outline_rounded,
                    color: DS.brandDark,
                    size: 18,
                  ),
                  SizedBox(width: DS.xs),
                  Text(
                    'Device Details',
                    style: TextStyle(
                      fontSize: DS.textSM,
                      fontWeight: FontWeight.w600,
                      color: DS.brandDark,
                    ),
                  ),
                  Spacer(),
                  Container(
                    padding: EdgeInsets.all(DS.xs),
                    decoration: BoxDecoration(
                      color: DS.brandDark.withValues(alpha: 0.1),
                      borderRadius: BorderRadius.circular(DS.rSmall),
                    ),
                    child: Icon(
                      Icons.expand_more_rounded,
                      color: DS.brandDark,
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
                  color: Colors.indigo,
                ),
                SizedBox(height: DS.xs),
                _buildDetailRow(
                  context: context,
                  icon: Icons.info_outline_rounded,
                  label: 'Device Version',
                  value: _deviceVersion,
                  color: Colors.teal,
                ),
              ],
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
}
