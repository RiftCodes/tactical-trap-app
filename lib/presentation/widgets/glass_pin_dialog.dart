import 'dart:ui';

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

import '../../l10n/app_localizations.dart';
import '../style/design_system.dart';

/// Compact iOS-style PIN dialog with glass effect
class GlassPinDialog extends StatefulWidget {
  final String deviceName;
  final Function(String pin) onPinEntered;
  final VoidCallback onCancel;

  const GlassPinDialog({
    super.key,
    required this.deviceName,
    required this.onPinEntered,
    required this.onCancel,
  });

  @override
  State<GlassPinDialog> createState() => _GlassPinDialogState();
}

class _GlassPinDialogState extends State<GlassPinDialog>
    with SingleTickerProviderStateMixin {
  String _pin = '';
  late AnimationController _animationController;
  late Animation<double> _scaleAnimation;

  @override
  void initState() {
    super.initState();
    _animationController = AnimationController(
      duration: DS.normal,
      vsync: this,
    );
    _scaleAnimation = Tween<double>(begin: 0.8, end: 1.0).animate(
      CurvedAnimation(parent: _animationController, curve: Curves.easeOut),
    );
    _animationController.forward();
  }

  @override
  void dispose() {
    _animationController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final isDark = Theme.of(context).brightness == Brightness.dark;
    final screenHeight = MediaQuery.of(context).size.height;
    final screenWidth = MediaQuery.of(context).size.width;

    return Material(
      color: Colors.transparent,
      child: GestureDetector(
        onTap: widget.onCancel,
        child: Container(
          color: isDark
              ? Colors.black.withValues(alpha: 0.6)
              : Colors.black.withValues(alpha: 0.3),
          child: Center(
            child: GestureDetector(
              onTap: () {},
              child: ScaleTransition(
                scale: _scaleAnimation,
                child: Container(
                  width: screenWidth * 0.85,
                  constraints: BoxConstraints(
                    maxWidth: 320,
                    maxHeight: screenHeight * 0.75,
                  ),
                  child: ClipRRect(
                    borderRadius: BorderRadius.circular(DS.rLarge),
                    child: BackdropFilter(
                      filter: ImageFilter.blur(sigmaX: 40, sigmaY: 40),
                      child: Container(
                        decoration: BoxDecoration(
                          color: DS.getCardBackground(context),
                          borderRadius: BorderRadius.circular(DS.rLarge),
                          border: Border.all(
                            color: DS.getBorderColor(context),
                            width: 1,
                          ),
                          boxShadow: [
                            BoxShadow(
                              color: isDark
                                  ? Colors.black.withValues(alpha: 0.4)
                                  : Colors.black.withValues(alpha: 0.08),
                              blurRadius: 20,
                              offset: const Offset(0, 8),
                            ),
                          ],
                        ),
                        child: SingleChildScrollView(
                          child: Column(
                            mainAxisSize: MainAxisSize.min,
                            children: [
                              _buildHeader(context, isDark),
                              _buildPinDisplay(context, isDark),
                              _buildKeypad(context, isDark),
                              SizedBox(height: DS.xs),
                            ],
                          ),
                        ),
                      ),
                    ),
                  ),
                ),
              ),
            ),
          ),
        ),
      ),
    );
  }

  Widget _buildHeader(BuildContext context, bool isDark) {
    final l10n = AppLocalizations.of(context)!;
    return Padding(
      padding: EdgeInsets.fromLTRB(DS.m, DS.m, DS.xs, DS.s),
      child: Column(
        children: [
          Row(
            children: [
              SizedBox(width: 28),
              const Spacer(),
              Icon(
                Icons.lock_outline_rounded,
                color: DS.brandPrimary,
                size: 24,
              ),
              const Spacer(),
              Container(
                width: 24,
                height: 24,
                margin: EdgeInsets.only(right: DS.m),
                decoration: BoxDecoration(
                  color: isDark
                      ? Colors.white.withValues(alpha: 0.1)
                      : DS.lightBorder,
                  borderRadius: BorderRadius.circular(12),
                ),
                child: IconButton(
                  onPressed: () {
                    HapticFeedback.lightImpact();
                    widget.onCancel();
                  },
                  icon: Icon(
                    Icons.close_rounded,
                    color: isDark ? Colors.grey[400] : DS.lightTextSecondary,
                    size: 14,
                  ),
                  padding: EdgeInsets.zero,
                ),
              ),
            ],
          ),
          SizedBox(height: DS.xs),
          Text(
            l10n.enterPin,
            style: TextStyle(
              fontSize: DS.textLG,
              fontWeight: FontWeight.w700,
              color: DS.getTextPrimary(context),
            ),
          ),
          Text(
            widget.deviceName,
            style: TextStyle(
              fontSize: DS.textSM,
              fontWeight: FontWeight.w600,
              color: DS.brandPrimary,
            ),
            maxLines: 1,
            overflow: TextOverflow.ellipsis,
          ),
        ],
      ),
    );
  }

  Widget _buildPinDisplay(BuildContext context, bool isDark) {
    return Padding(
      padding: EdgeInsets.symmetric(horizontal: DS.m, vertical: DS.xs),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.center,
        children: List.generate(4, (index) {
          final hasDigit = index < _pin.length;
          return Container(
            margin: EdgeInsets.symmetric(horizontal: DS.xs),
            width: 32,
            height: 32,
            decoration: BoxDecoration(
              color: hasDigit
                  ? DS.brandPrimary.withValues(alpha: 0.1)
                  : (isDark
                        ? Colors.white.withValues(alpha: 0.05)
                        : DS.lightBorder),
              borderRadius: BorderRadius.circular(16),
              border: Border.all(
                color: hasDigit ? DS.brandPrimary : DS.getBorderColor(context),
                width: 1,
              ),
            ),
            child: Center(
              child: hasDigit
                  ? Icon(Icons.circle, color: DS.brandPrimary, size: 12)
                  : null,
            ),
          );
        }),
      ),
    );
  }

  Widget _buildKeypad(BuildContext context, bool isDark) {
    final l10n = AppLocalizations.of(context)!;
    return Padding(
      padding: EdgeInsets.symmetric(horizontal: DS.m).copyWith(bottom: DS.m),
      child: LayoutBuilder(
        builder: (context, constraints) {
          final buttonSize = (constraints.maxWidth - (DS.xs * 6)) / 3;
          return Column(
            children: [
              _buildKeypadRow(['1', '2', '3'], context, isDark, buttonSize),
              _buildKeypadRow(['4', '5', '6'], context, isDark, buttonSize),
              _buildKeypadRow(['7', '8', '9'], context, isDark, buttonSize),
              _buildKeypadRow(
                [l10n.delete, '0', l10n.ok],
                context,
                isDark,
                buttonSize,
              ),
            ],
          );
        },
      ),
    );
  }

  Widget _buildKeypadRow(
    List<String> keys,
    BuildContext context,
    bool isDark,
    double buttonSize,
  ) {
    return Row(
      mainAxisAlignment: MainAxisAlignment.spaceEvenly,
      children: keys.map((key) {
        return _buildKeypadButton(key, context, isDark, buttonSize);
      }).toList(),
    );
  }

  Widget _buildKeypadButton(
    String key,
    BuildContext context,
    bool isDark,
    double size,
  ) {
    final l10n = AppLocalizations.of(context)!;
    final isDelete = key == l10n.delete;
    final isOK = key == l10n.ok;

    final buttonColor = isOK && _pin.length == 4
        ? DS.brandPrimary
        : (isDark ? Colors.white.withValues(alpha: 0.1) : DS.lightBorder);

    final contentColor = isOK && _pin.length == 4
        ? Colors.white
        : DS.getTextPrimary(context);

    return Container(
      width: size,
      height: size * 0.8, // Make buttons slightly shorter
      margin: EdgeInsets.all(2),
      child: ClipRRect(
        borderRadius: BorderRadius.circular(DS.rMedium),
        child: BackdropFilter(
          filter: ImageFilter.blur(sigmaX: 20, sigmaY: 20),
          child: Container(
            decoration: BoxDecoration(
              color: buttonColor,
              borderRadius: BorderRadius.circular(DS.rMedium),
              border: Border.all(
                color: isOK && _pin.length == 4
                    ? DS.brandPrimary
                    : DS.getBorderColor(context),
                width: 1,
              ),
            ),
            child: Material(
              color: Colors.transparent,
              child: InkWell(
                onTap: () => _onKeyTap(key),
                borderRadius: BorderRadius.circular(DS.rMedium),
                child: Center(
                  child: isDelete
                      ? Icon(
                          Icons.backspace_rounded,
                          color: contentColor,
                          size: size * 0.3,
                        )
                      : isOK
                      ? Icon(
                          Icons.check_rounded,
                          color: contentColor,
                          size: size * 0.35,
                        )
                      : Text(
                          key,
                          style: TextStyle(
                            fontSize: size * 0.35,
                            fontWeight: FontWeight.w600,
                            color: contentColor,
                          ),
                        ),
                ),
              ),
            ),
          ),
        ),
      ),
    );
  }

  void _onKeyTap(String key) {
    HapticFeedback.lightImpact();
    final l10n = AppLocalizations.of(context)!;

    setState(() {
      if (key == l10n.delete) {
        if (_pin.isNotEmpty) {
          _pin = _pin.substring(0, _pin.length - 1);
        }
      } else if (key == l10n.ok) {
        if (_pin.length == 4) {
          HapticFeedback.mediumImpact();
          widget.onPinEntered(_pin);
        }
      } else if (_pin.length < 4) {
        _pin += key;
      }
    });
  }
}
