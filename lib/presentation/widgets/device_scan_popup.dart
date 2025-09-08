import 'dart:ui';

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:fluttertoast/fluttertoast.dart';
import 'package:provider/provider.dart';

import '../../data/models/ble_device.dart';
import '../../l10n/app_localizations.dart';
import '../providers/ble_provider.dart';
import '../providers/device_provider.dart';
import '../style/design_system.dart';
import 'device_card.dart';
import 'glass_background.dart';
import 'glass_pin_dialog.dart';

class DeviceScanPopup extends StatefulWidget {
  const DeviceScanPopup({super.key});

  @override
  State<DeviceScanPopup> createState() => _DeviceScanPopupState();
}

class _DeviceScanPopupState extends State<DeviceScanPopup>
    with TickerProviderStateMixin {
  late AnimationController _fadeController;
  late AnimationController _pulseController;
  late Animation<double> _fadeAnimation;
  late Animation<double> _pulseAnimation;

  @override
  void initState() {
    super.initState();

    _fadeController = AnimationController(
      duration: const Duration(milliseconds: 300),
      vsync: this,
    );

    _pulseController = AnimationController(
      duration: const Duration(milliseconds: 1500),
      vsync: this,
    );

    _fadeAnimation = Tween<double>(begin: 0.0, end: 1.0).animate(
      CurvedAnimation(parent: _fadeController, curve: Curves.easeInOut),
    );

    _pulseAnimation = Tween<double>(begin: 0.8, end: 1.2).animate(
      CurvedAnimation(parent: _pulseController, curve: Curves.easeInOut),
    );

    _fadeController.forward();
    _pulseController.repeat(reverse: true);
  }

  @override
  void dispose() {
    _fadeController.dispose();
    _pulseController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return AnimatedBuilder(
      animation: _fadeAnimation,
      builder: (context, child) {
        return Opacity(
          opacity: _fadeAnimation.value,
          child: Scaffold(
            backgroundColor: Colors.transparent,
            body: Stack(
              children: [
                const GlassBackground(),
                SafeArea(
                  child: Column(
                    children: [
                      _buildHeader(context),
                      Expanded(child: _buildDeviceList(context)),
                    ],
                  ),
                ),
              ],
            ),
          ),
        );
      },
    );
  }

  Widget _buildHeader(BuildContext context) {
    final isDark = Theme.of(context).brightness == Brightness.dark;

    return Container(
      height: 80,
      decoration: BoxDecoration(
        color: isDark
            ? Colors.black.withValues(alpha: 0.4)
            : Colors.white.withValues(alpha: 0.85),
        border: Border(
          bottom: BorderSide(
            color: isDark
                ? Colors.white.withValues(alpha: 0.2)
                : Colors.black.withValues(alpha: 0.1),
            width: 1,
          ),
        ),
      ),
      child: Stack(
        children: [
          // Backdrop filter for glassmorphism
          ClipRect(
            child: BackdropFilter(
              filter: ImageFilter.blur(sigmaX: 30, sigmaY: 30),
              child: Container(),
            ),
          ),
          // Content
          Padding(
            padding: EdgeInsets.symmetric(horizontal: DS.l, vertical: DS.m),
            child: Row(
              children: [
                // Close button
                GestureDetector(
                  onTap: () => Navigator.of(context).pop(),
                  child: Container(
                    padding: EdgeInsets.all(DS.s),
                    decoration: BoxDecoration(
                      color: isDark
                          ? Colors.white.withValues(alpha: 0.1)
                          : Colors.black.withValues(alpha: 0.05),
                      borderRadius: BorderRadius.circular(DS.rSmall),
                    ),
                    child: Icon(
                      Icons.close_rounded,
                      color: isDark ? Colors.white : DS.brandDark,
                      size: 20,
                    ),
                  ),
                ),

                SizedBox(width: DS.m),

                // Title
                Expanded(
                  child: Text(
                    'Scan for Devices',
                    style: TextStyle(
                      fontSize: 16,
                      fontWeight: FontWeight.w700,
                      color: isDark ? Colors.white : DS.brandDark,
                    ),
                  ),
                ),

                // Scan status indicator
                Consumer<BleProvider>(
                  builder: (context, bleProvider, child) {
                    return Container(
                      padding: EdgeInsets.symmetric(
                        horizontal: DS.s,
                        vertical: 4,
                      ),
                      decoration: BoxDecoration(
                        color: bleProvider.isScanning ? DS.info : DS.brandRed,
                        borderRadius: BorderRadius.circular(12),
                      ),
                      child: Row(
                        mainAxisSize: MainAxisSize.min,
                        children: [
                          if (bleProvider.isScanning) ...[
                            AnimatedBuilder(
                              animation: _pulseAnimation,
                              builder: (context, child) {
                                return Transform.scale(
                                  scale: _pulseAnimation.value,
                                  child: Icon(
                                    Icons.radar_rounded,
                                    color: Colors.white,
                                    size: 12,
                                  ),
                                );
                              },
                            ),
                            SizedBox(width: 4),
                          ],
                          Text(
                            bleProvider.isScanning ? 'Scanning...' : 'Stopped',
                            style: TextStyle(
                              fontSize: 12,
                              fontWeight: FontWeight.w600,
                              color: Colors.white,
                            ),
                          ),
                        ],
                      ),
                    );
                  },
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildDeviceList(BuildContext context) {
    return Consumer2<BleProvider, DeviceProvider>(
      builder: (context, bleProvider, deviceProvider, child) {
        final discoveredDevices = bleProvider.discoveredDevices;
        final pairedDeviceIds = deviceProvider.deviceNames.keys.toSet();

        if (discoveredDevices.isEmpty && !bleProvider.isScanning) {
          return _buildEmptyState(context);
        }

        return ListView.builder(
          padding: EdgeInsets.all(DS.m),
          itemCount: discoveredDevices.length,
          itemBuilder: (context, index) {
            final device = discoveredDevices[index];
            final isPaired = pairedDeviceIds.contains(device.id.toString());

            return DeviceCard(
              device: device,
              isConnected: false,
              displayName: device.displayName,
              isConnecting: false,
              isVerifyingPin: false,
              onConnect: () => _connectToDevice(context, device),
              onDisconnect: () {},
              onToggleExpansion: () {
                HapticFeedback.lightImpact();
                bleProvider.toggleDeviceExpansion(device);
              },
              isPairedDevice: isPaired,
              isInRange: true,
              onForget: null,
              chipText: isPaired ? 'Paired' : null,
            );
          },
        );
      },
    );
  }

  Widget _buildEmptyState(BuildContext context) {
    final isDark = Theme.of(context).brightness == Brightness.dark;

    return Center(
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          Icon(
            Icons.bluetooth_searching_rounded,
            size: 64,
            color: isDark
                ? Colors.white.withOpacity(0.3)
                : Colors.black.withOpacity(0.3),
          ),
          SizedBox(height: DS.m),
          Text(
            'No devices found',
            style: TextStyle(
              fontSize: 18,
              fontWeight: FontWeight.w600,
              color: isDark
                  ? Colors.white.withOpacity(0.7)
                  : Colors.black.withOpacity(0.7),
            ),
          ),
          SizedBox(height: DS.s),
          Text(
            'Make sure your device is nearby and try again',
            style: TextStyle(
              fontSize: 14,
              color: isDark
                  ? Colors.white.withOpacity(0.5)
                  : Colors.black.withOpacity(0.5),
            ),
            textAlign: TextAlign.center,
          ),
        ],
      ),
    );
  }

  Future<void> _connectToDevice(BuildContext context, BleDevice device) async {
    final l10n = AppLocalizations.of(context)!;

    try {
      final bleProvider = Provider.of<BleProvider>(context, listen: false);
      final hasStoredPin = await bleProvider.hasStoredPin(device);

      if (hasStoredPin) {
        // Close the popup first
        Navigator.of(context).pop();

        final success = await bleProvider.connectToDevice(device);
        if (success) {
          _showSuccessMessage(l10n.connectedToDevice(device.displayName));
        } else {
          _showErrorMessage(l10n.failedToConnectToDevice(device.displayName));
        }
      } else {
        // Close the popup first
        Navigator.of(context).pop();

        if (mounted) {
          _showPinDialog(device);
        }
      }
    } catch (e) {
      _showErrorMessage(l10n.connectionError(e.toString()));
    }
  }

  void _showPinDialog(BleDevice device) {
    final l10n = AppLocalizations.of(context)!;

    showDialog(
      context: context,
      barrierDismissible: false,
      builder: (context) => GlassPinDialog(
        deviceName: device.displayName,
        onPinEntered: (pin) async {
          Navigator.of(context).pop();
          final bleProvider = Provider.of<BleProvider>(context, listen: false);
          bleProvider.setPinVerificationState(true);

          try {
            final success = await bleProvider.connectToDevice(device, pin: pin);
            if (success) {
              _showSuccessMessage(l10n.connectedToDevice(device.displayName));
            } else {
              _showErrorMessage(l10n.failedToConnectCheckPin);
            }
          } catch (e) {
            _showErrorMessage(l10n.connectionError(e.toString()));
          } finally {
            bleProvider.setPinVerificationState(false);
          }
        },
        onCancel: () {
          Navigator.of(context).pop();
        },
      ),
    );
  }

  void _showSuccessMessage(String message) {
    Fluttertoast.showToast(
      msg: message,
      toastLength: Toast.LENGTH_SHORT,
      gravity: ToastGravity.BOTTOM,
      backgroundColor: Colors.green,
      textColor: Colors.white,
      fontSize: 14.0,
    );
  }

  void _showErrorMessage(String message) {
    Fluttertoast.showToast(
      msg: message,
      toastLength: Toast.LENGTH_SHORT,
      gravity: ToastGravity.BOTTOM,
      backgroundColor: Colors.red,
      textColor: Colors.white,
      fontSize: 14.0,
    );
  }
}
