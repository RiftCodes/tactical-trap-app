import 'package:flutter/material.dart';

import '../style/design_system.dart';

/// Elegant success toast that appears at top
class SuccessToast extends StatelessWidget {
  final String message;
  final VoidCallback onDismiss;

  const SuccessToast({
    super.key,
    required this.message,
    required this.onDismiss,
  });

  @override
  Widget build(BuildContext context) {
    return Positioned(
      top: MediaQuery.of(context).viewPadding.top + 80,
      left: DS.m,
      right: DS.m,
      child: Material(
        color: Colors.transparent,
        child: Container(
          padding: EdgeInsets.all(DS.m),
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
            children: [
              Icon(Icons.check_circle_rounded, color: Colors.white, size: 20),
              SizedBox(width: DS.s),
              Expanded(
                child: Text(
                  message,
                  style: const TextStyle(
                    color: Colors.white,
                    fontWeight: FontWeight.w500,
                  ),
                ),
              ),
              GestureDetector(
                onTap: onDismiss,
                child: Icon(
                  Icons.close_rounded,
                  color: Colors.white.withValues(alpha: 0.8),
                  size: 18,
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
