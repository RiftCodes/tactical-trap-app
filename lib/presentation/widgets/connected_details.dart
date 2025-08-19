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

  @override
  void initState() {
    super.initState();
    final customName = widget.deviceProvider.getDeviceName(widget.device.id);
    _controller = TextEditingController(
      text:
          customName ??
          widget.device.localName ??
          widget.device.name ??
          'My Lock',
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
            'SN: ${widget.device.id}',
            style: TextStyle(
              fontSize: DS.textXS,
              color: Colors.grey[600],
              fontFamily: 'monospace',
            ),
            maxLines: 1,
            overflow: TextOverflow.ellipsis,
          ),
        ],
      ),
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
