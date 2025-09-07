import 'package:flutter/material.dart';

import '../style/design_system.dart';

/// Elegant success toast that appears at top
/// Notifications provide visual feedback for important app events like:
/// - Successful lock/unlock operations
/// - Connection status changes
/// - Error conditions
class SuccessToast extends StatefulWidget {
  final String message;
  final VoidCallback onDismiss;

  const SuccessToast({
    super.key,
    required this.message,
    required this.onDismiss,
  });

  @override
  State<SuccessToast> createState() => _SuccessToastState();
}

class _SuccessToastState extends State<SuccessToast> {
  @override
  void initState() {
    super.initState();
    // Auto-dismiss after 2 seconds (shorter duration)
    Future.delayed(Duration(seconds: 2), () {
      if (mounted) {
        widget.onDismiss();
      }
    });
  }

  @override
  Widget build(BuildContext context) {
    return Positioned(
      top: MediaQuery.of(context).viewPadding.top + 80,
      left: DS.m,
      right: DS.m,
      child: Material(
        color: Colors.transparent,
        child: Container(
          padding: EdgeInsets.symmetric(
            horizontal: DS.m,
            vertical: DS.s,
          ), // Reduced vertical padding
          decoration: BoxDecoration(
            color: DS.success,
            borderRadius: BorderRadius.circular(DS.rMedium),
            boxShadow: [
              BoxShadow(
                color: DS.success.withValues(alpha: 0.3),
                blurRadius: 15,
                offset: const Offset(0, 5),
              ),
            ],
          ),
          child: Row(
            mainAxisSize: MainAxisSize.min,
            children: [
              Icon(
                Icons.check_circle_rounded,
                color: Colors.white,
                size: 18,
              ), // Smaller icon
              SizedBox(width: DS.s),
              Flexible(
                child: Text(
                  widget.message,
                  style: TextStyle(
                    color: Colors.white,
                    fontWeight: FontWeight.w500,
                    fontSize: 14, // Smaller font
                  ),
                  maxLines: 1,
                  overflow: TextOverflow.ellipsis,
                ),
              ),
              SizedBox(width: DS.s),
              GestureDetector(
                onTap: widget.onDismiss,
                child: Icon(
                  Icons.close_rounded,
                  color: Colors.white.withValues(alpha: 0.8),
                  size: 16, // Smaller close icon
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
