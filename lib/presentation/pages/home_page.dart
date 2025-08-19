import 'dart:async';
import 'dart:ui';

import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

import '../../core/constants/app_constants.dart';
import '../../data/models/ble_device.dart';
import '../providers/ble_provider.dart';
import '../providers/device_provider.dart';
import '../style/design_system.dart';
import '../widgets/auto_reconnect_overlay.dart';
import '../widgets/connected_details.dart';
import '../widgets/connected_fab.dart';
import '../widgets/connection_status.dart';
import '../widgets/control_panel.dart';
import '../widgets/device_card.dart';
import '../widgets/glass_background.dart';
import '../widgets/glass_card.dart';
import '../widgets/glass_pin_dialog.dart';
import '../widgets/scan_button.dart';
import '../widgets/success_toast.dart';

/// Main home page for the Tactical Traps BLE Lock App
class HomePage extends StatefulWidget {
  const HomePage({super.key});

  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> with WidgetsBindingObserver {
  @override
  void initState() {
    super.initState();
    WidgetsBinding.instance.addObserver(this);
    WidgetsBinding.instance.addPostFrameCallback((_) {
      _initializeApp();
    });
  }

  @override
  void dispose() {
    WidgetsBinding.instance.removeObserver(this);
    super.dispose();
  }

  @override
  void didChangeAppLifecycleState(AppLifecycleState state) {
    super.didChangeAppLifecycleState(state);
    final bleProvider = context.read<BleProvider>();
    final isActive = state == AppLifecycleState.resumed;

    if (bleProvider.isInitialized) {
      bleProvider.bleService.setAppActive(isActive);
    }
  }

  void _initializeApp() {
    WidgetsBinding.instance.addPostFrameCallback((_) async {
      if (mounted) {
        final bleProvider = context.read<BleProvider>();
        await bleProvider.initialize();
        await _checkBluetoothState();
      }
    });
  }

  Future<void> _checkBluetoothState() async {
    final bleProvider = context.read<BleProvider>();
    final isBluetoothOn = await bleProvider.isBluetoothEnabled();
    if (!isBluetoothOn) {
      if (mounted) {
        _showBluetoothEnableDialog();
      }
    }
  }

  void _showBluetoothEnableDialog() {
    showDialog(
      context: context,
      barrierDismissible: false,
      builder: (context) => AlertDialog(
        title: const Text('Bluetooth Required'),
        content: const Text(
          'Bluetooth must be enabled to scan for Tactical Traps locks. Would you like to enable Bluetooth now?',
        ),
        actions: [
          TextButton(
            onPressed: () => Navigator.of(context).pop(),
            child: const Text('Cancel'),
          ),
          ElevatedButton(
            onPressed: () async {
              Navigator.of(context).pop();
              final bleProvider = context.read<BleProvider>();
              final success = await bleProvider.enableBluetooth();
              if (success) {
                _showSuccessMessage('Bluetooth enabled successfully!');
              } else {
                _showErrorMessage(
                  'Failed to enable Bluetooth. Please enable it manually in settings.',
                );
              }
            },
            child: const Text('Enable Bluetooth'),
          ),
        ],
      ),
    );
  }

  Future<void> _connectToDevice(BleDevice device) async {
    try {
      final bleProvider = context.read<BleProvider>();
      final hasStoredPin = await bleProvider.hasStoredPin(device);

      if (hasStoredPin) {
        final success = await bleProvider.connectToDevice(device);
        if (success) {
          _showSuccessMessage('Connected to ${device.displayName}');
        } else {
          _showErrorMessage('Failed to connect to ${device.displayName}');
        }
      } else {
        if (mounted) {
          _showPinDialog(device);
        }
      }
    } catch (e) {
      _showErrorMessage('Connection error: $e');
    }
  }

  void _showPinDialog(BleDevice device) {
    showDialog(
      context: context,
      barrierDismissible: false,
      builder: (context) => GlassPinDialog(
        deviceName: device.displayName,
        onPinEntered: (pin) async {
          Navigator.of(context).pop();
          final bleProvider = context.read<BleProvider>();
          bleProvider.setPinVerificationState(true);

          try {
            final success = await bleProvider.connectToDevice(device, pin: pin);
            if (success) {
              _showSuccessMessage('Connected to ${device.displayName}');
            } else {
              _showErrorMessage('Failed to connect. Please check your PIN.');
            }
          } finally {
            bleProvider.setPinVerificationState(false);
          }
        },
        onCancel: () => Navigator.of(context).pop(),
      ),
    );
  }

  void _showSuccessMessage(String message) {
    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(content: Text(message), backgroundColor: Colors.green),
    );
  }

  void _showErrorMessage(String message) {
    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(content: Text(message), backgroundColor: Colors.red),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Consumer2<BleProvider, DeviceProvider>(
      builder: (context, bleProvider, deviceProvider, child) {
        return Scaffold(
          backgroundColor: Colors.transparent,
          appBar: _buildAppBar(context, bleProvider, deviceProvider),
          body: Stack(
            children: [
              _buildBody(context, bleProvider, deviceProvider),
              // Floating Bottom Sheet (like FAB)
              if (bleProvider.isConnected &&
                  bleProvider.currentDevice != null &&
                  !bleProvider.isVerifyingPin &&
                  !bleProvider.isAutoReconnecting)
                Positioned(
                  bottom: DS.l,
                  left: DS.m,
                  right: DS.m,
                  child: const ConnectedBottomSheet(),
                ),
            ],
          ),
          floatingActionButton: _buildFloatingActionButton(),
        );
      },
    );
  }

  PreferredSizeWidget _buildAppBar(
    BuildContext context,
    BleProvider bleProvider,
    DeviceProvider deviceProvider,
  ) {
    final hasConnection =
        bleProvider.isConnected && bleProvider.currentDevice != null;

    return AppBar(
      backgroundColor: Theme.of(context).brightness == Brightness.dark
          ? Colors.black.withValues(alpha: 0.4)
          : Colors.white.withValues(alpha: 0.85),
      elevation: 0,
      toolbarHeight: hasConnection ? 80 : 120,
      leadingWidth: 0, // No leading widget needed
      leading: null, // Remove theme toggle
      title: hasConnection
          ? _buildConnectionRibbon(
              bleProvider,
              deviceProvider,
              Theme.of(context).brightness == Brightness.dark,
            )
          : Image.asset(
              'assets/icons/horizontal.png',
              height: hasConnection ? 28 : 40,
              filterQuality: FilterQuality.high,
              errorBuilder: (_, __, ___) => Text(
                AppConstants.appName,
                style: TextStyle(
                  fontSize: hasConnection ? DS.textSM : DS.textXL,
                  fontWeight: FontWeight.w700,
                  color: Theme.of(context).brightness == Brightness.dark
                      ? Colors.white
                      : DS.brandDark,
                ),
              ),
            ),
      centerTitle: true,
      actions: [
        Padding(
          padding: EdgeInsets.only(right: DS.s),
          child: Container(
            width: 40,
            height: 40,
            decoration: BoxDecoration(
              color: Theme.of(context).brightness == Brightness.dark
                  ? Colors.white.withValues(alpha: 0.1)
                  : Colors.black.withValues(alpha: 0.05),
              borderRadius: BorderRadius.circular(20),
              border: Border.all(
                color: Theme.of(context).brightness == Brightness.dark
                    ? Colors.white.withValues(alpha: 0.2)
                    : Colors.black.withValues(alpha: 0.1),
                width: 1,
              ),
            ),
            child: IconButton(
              onPressed: () => Navigator.pushNamed(context, '/settings'),
              icon: Icon(
                Icons.settings_rounded,
                color: Theme.of(context).brightness == Brightness.dark
                    ? Colors.white
                    : DS.brandDark,
                size: 18,
              ),
              padding: EdgeInsets.zero,
            ),
          ),
        ),
      ],
      flexibleSpace: ClipRect(
        child: BackdropFilter(
          filter: ImageFilter.blur(sigmaX: 30, sigmaY: 30),
          child: Container(),
        ),
      ),
    );
  }

  Widget _buildBody(
    BuildContext context,
    BleProvider bleProvider,
    DeviceProvider deviceProvider,
  ) {
    return Stack(
      children: [
        const GlassBackground(),
        SingleChildScrollView(
          child: Column(
            children: [
              // Content
              Padding(
                padding: EdgeInsets.all(DS.xs),
                child: Column(
                  children: [
                    if (!bleProvider.isConnected)
                      ConnectionStatus(
                        isConnected: bleProvider.isConnected,
                        currentDevice: bleProvider.currentDevice,
                        deviceProvider: deviceProvider,
                      ),
                    if (bleProvider.isConnected &&
                        bleProvider.currentDevice != null) ...[
                      ConnectedDetails(
                        device: bleProvider.currentDevice!,
                        deviceProvider: deviceProvider,
                        lastStatus: bleProvider.lastStatus,
                      ),
                      ControlPanel(
                        onToggleAlarm: () async {
                          final st = await bleProvider.getAlarmStatus();
                          if (st != null) {
                            final bool current = (st.alarmOn == true);
                            await bleProvider.setAlarmEnabled(!current);
                          }
                        },
                        onToggleBuzzer: () async {
                          final st = await bleProvider.getBuzzerStatus();
                          if (st != null) {
                            final bool current = (st.buzzerOn == true);
                            await bleProvider.setBuzzerEnabled(!current);
                          }
                        },
                        onInitialize: () async {
                          final confirmed = await showDialog<bool>(
                            context: context,
                            builder: (ctx) => AlertDialog(
                              title: const Text('Factory Reset Lock?'),
                              content: const Text(
                                'This will clear all user data on the lock and disconnect.',
                              ),
                              actions: [
                                TextButton(
                                  onPressed: () => Navigator.of(ctx).pop(false),
                                  child: const Text('Cancel'),
                                ),
                                ElevatedButton(
                                  onPressed: () => Navigator.of(ctx).pop(true),
                                  child: const Text('Reset'),
                                ),
                              ],
                            ),
                          );
                          if (confirmed == true) {
                            await bleProvider.initializeLock();
                          }
                        },
                        onGetVersion: () async {
                          await bleProvider.getVersion();
                        },
                        lastStatus: bleProvider.lastStatus,
                      ),
                    ],
                  ],
                ),
              ),

              // Device list or empty state
              if (bleProvider.isConnected)
                SizedBox(
                  height: DS.xl * 5,
                ) // Increased spacing for connected state
              else if (bleProvider.isVerifyingPin ||
                  bleProvider.isAutoReconnecting)
                const SizedBox.shrink()
              else if (bleProvider.discoveredDevices.isEmpty)
                _buildEmptyState()
              else
                Padding(
                  padding: EdgeInsets.fromLTRB(
                    DS.s,
                    0,
                    DS.s,
                    DS.xl * 5,
                  ), // Increased bottom padding
                  child: Column(
                    children: List.generate(
                      bleProvider.discoveredDevices.length,
                      (index) {
                        final device = bleProvider.discoveredDevices[index];
                        return DeviceCard(
                          device: device,
                          isConnected:
                              bleProvider.currentDevice?.id == device.id,
                          displayName: deviceProvider.getDisplayName(device),
                          isConnecting: bleProvider.isConnecting,
                          isVerifyingPin: bleProvider.isVerifyingPin,
                          onConnect: () => _connectToDevice(device),
                          onDisconnect: () =>
                              bleProvider.disconnectFromDevice(),
                          onToggleExpansion: () =>
                              bleProvider.toggleDeviceExpansion(device),
                          onEditName: (newName) =>
                              _editDeviceName(device.id, newName),
                        );
                      },
                    ),
                  ),
                ),

              // Loading overlays
              if (bleProvider.isAutoReconnecting &&
                  bleProvider.autoReconnectStatus != null)
                AutoReconnectOverlay(status: bleProvider.autoReconnectStatus!),

              // PIN Verifying Overlay
              if (bleProvider.isVerifyingPin)
                Center(
                  child: Container(
                    margin: EdgeInsets.all(DS.l),
                    constraints: const BoxConstraints(maxWidth: 300),
                    child: GlassCard(
                      child: Padding(
                        padding: EdgeInsets.all(DS.l),
                        child: Column(
                          mainAxisSize: MainAxisSize.min,
                          children: [
                            // Elegant lock icon
                            Container(
                              width: 64,
                              height: 64,
                              decoration: BoxDecoration(
                                color: DS.brandRed.withValues(alpha: 0.1),
                                borderRadius: BorderRadius.circular(32),
                                border: Border.all(
                                  color: DS.brandRed.withValues(alpha: 0.3),
                                  width: 2,
                                ),
                              ),
                              child: Center(
                                child: Icon(
                                  Icons.lock_outline_rounded,
                                  size: 32,
                                  color: DS.brandRed,
                                ),
                              ),
                            ),

                            SizedBox(height: DS.m),

                            // Animated progress indicator
                            SizedBox(
                              width: 32,
                              height: 32,
                              child: CircularProgressIndicator(
                                strokeWidth: 3,
                                valueColor: AlwaysStoppedAnimation<Color>(
                                  DS.brandRed,
                                ),
                                backgroundColor:
                                    Theme.of(context).brightness ==
                                        Brightness.dark
                                    ? Colors.white.withValues(alpha: 0.1)
                                    : Colors.black.withValues(alpha: 0.05),
                              ),
                            ),

                            SizedBox(height: DS.m),

                            // Main title
                            Text(
                              'Verifying PIN...',
                              style: TextStyle(
                                fontSize: DS.textLG,
                                fontWeight: FontWeight.w700,
                                color: DS.getTextPrimary(context),
                              ),
                              textAlign: TextAlign.center,
                            ),

                            SizedBox(height: DS.s),

                            // Status message
                            Text(
                              'Please wait while we verify your PIN',
                              style: TextStyle(
                                fontSize: DS.textSM,
                                color: DS.getTextSecondary(context),
                              ),
                              textAlign: TextAlign.center,
                            ),

                            SizedBox(height: DS.m),

                            // Subtle hint
                            Container(
                              padding: EdgeInsets.symmetric(
                                horizontal: DS.s,
                                vertical: DS.xs,
                              ),
                              decoration: BoxDecoration(
                                color:
                                    Theme.of(context).brightness ==
                                        Brightness.dark
                                    ? Colors.white.withValues(alpha: 0.05)
                                    : Colors.black.withValues(alpha: 0.03),
                                borderRadius: BorderRadius.circular(DS.rSmall),
                              ),
                              child: Text(
                                'This may take a few seconds',
                                style: TextStyle(
                                  fontSize: DS.textXS,
                                  color: DS.getTextSecondary(context),
                                ),
                              ),
                            ),
                          ],
                        ),
                      ),
                    ),
                  ),
                ),

              // Success toast
              if (bleProvider.successMessage != null)
                SuccessToast(
                  message: bleProvider.successMessage!,
                  onDismiss: () => bleProvider.clearSuccessMessage(),
                ),
            ],
          ),
        ),
      ],
    );
  }

  Widget _buildConnectionRibbon(
    BleProvider bleProvider,
    DeviceProvider deviceProvider,
    bool isDark,
  ) {
    if (!bleProvider.isConnected || bleProvider.currentDevice == null) {
      return const SizedBox.shrink();
    }

    final device = bleProvider.currentDevice!;
    final customName = deviceProvider.getDeviceName(device.id);
    final displayName =
        customName ?? device.localName ?? device.name ?? 'Tactical Lock';

    return Container(
      padding: EdgeInsets.symmetric(horizontal: DS.s, vertical: DS.xs),
      decoration: BoxDecoration(
        color: DS.success.withValues(alpha: 0.9),
        borderRadius: BorderRadius.circular(DS.rSmall),
        border: Border.all(
          color: Colors.white.withValues(alpha: 0.3),
          width: 1,
        ),
      ),
      child: Row(
        mainAxisSize: MainAxisSize.min,
        children: [
          Icon(
            Icons.bluetooth_connected_rounded,
            color: Colors.white,
            size: 16,
          ),
          SizedBox(width: DS.xs),
          Text(
            displayName,
            style: const TextStyle(
              color: Colors.white,
              fontSize: 14,
              fontWeight: FontWeight.w600,
            ),
            maxLines: 1,
            overflow: TextOverflow.ellipsis,
          ),
          SizedBox(width: DS.xs),
          Container(
            padding: EdgeInsets.symmetric(horizontal: DS.xs, vertical: 2),
            decoration: BoxDecoration(
              color: Colors.white.withValues(alpha: 0.25),
              borderRadius: BorderRadius.circular(4),
            ),
            child: const Text(
              'ONLINE',
              style: TextStyle(
                color: Colors.white,
                fontSize: 9,
                fontWeight: FontWeight.w700,
              ),
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildEmptyState() {
    return Center(
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          Icon(Icons.bluetooth_searching, size: 64, color: Colors.grey[400]),
          const SizedBox(height: 16),
          Text(
            'No devices found',
            style: Theme.of(
              context,
            ).textTheme.headlineSmall?.copyWith(color: Colors.grey[600]),
          ),
          const SizedBox(height: 8),
          Text(
            'Tap the scan button to search for Tactical Traps locks',
            style: Theme.of(
              context,
            ).textTheme.bodyMedium?.copyWith(color: Colors.grey[500]),
            textAlign: TextAlign.center,
          ),
        ],
      ),
    );
  }

  Widget? _buildFloatingActionButton() {
    final bleProvider = context.read<BleProvider>();

    // Hide FAB during verification or auto-reconnect
    if (bleProvider.isVerifyingPin || bleProvider.isAutoReconnecting) {
      return null;
    }

    if (bleProvider.isConnected && bleProvider.currentDevice != null) {
      // No FAB needed - bottom sheet will be shown in body
      return null;
    }

    return ScanButton(
      isScanning: bleProvider.isScanning,
      onScan: () => bleProvider.startScan(),
      onStopScan: () => bleProvider.stopScan(),
    );
  }

  Future<void> _editDeviceName(String deviceId, String newName) async {
    final deviceProvider = context.read<DeviceProvider>();

    if (newName.trim().isEmpty) {
      await deviceProvider.removeDeviceName(deviceId);
    } else {
      await deviceProvider.saveDeviceName(deviceId, newName.trim());
    }
  }
}
