import 'dart:async';
import 'dart:ui';

import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

import '../../core/constants/app_constants.dart';
import '../../data/models/ble_device.dart';
import '../../l10n/app_localizations.dart';
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
    final l10n = AppLocalizations.of(context)!;
    showDialog(
      context: context,
      barrierDismissible: false,
      builder: (context) => AlertDialog(
        title: Text(l10n.bluetoothRequired),
        content: Text(l10n.bluetoothEnableMessage),
        actions: [
          TextButton(
            onPressed: () => Navigator.of(context).pop(),
            child: Text(l10n.cancel),
          ),
          ElevatedButton(
            onPressed: () async {
              Navigator.of(context).pop();
              final bleProvider = context.read<BleProvider>();
              final success = await bleProvider.enableBluetooth();
              if (success) {
                _showSuccessMessage(l10n.bluetoothEnabledSuccess);
              } else {
                _showErrorMessage(l10n.bluetoothEnableFailed);
              }
            },
            child: Text(l10n.enableBluetooth),
          ),
        ],
      ),
    );
  }

  Future<void> _connectToDevice(BleDevice device) async {
    final l10n = AppLocalizations.of(context)!;
    
    try {
      final bleProvider = context.read<BleProvider>();
      final hasStoredPin = await bleProvider.hasStoredPin(device);

      if (hasStoredPin) {
        final success = await bleProvider.connectToDevice(device);
        if (success) {
          _showSuccessMessage(l10n.connectedToDevice(device.displayName));
        } else {
          _showErrorMessage(l10n.failedToConnectToDevice(device.displayName));
        }
      } else {
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
          final bleProvider = context.read<BleProvider>();
          bleProvider.setPinVerificationState(true);

          try {
            final success = await bleProvider.connectToDevice(device, pin: pin);
            if (success) {
              _showSuccessMessage(l10n.connectedToDevice(device.displayName));
            } else {
              _showErrorMessage(l10n.failedToConnectCheckPin);
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
      leadingWidth: hasConnection ? 50 : 0, // No leading widget needed
      leading: hasConnection
          ? Padding(
              padding: const EdgeInsets.only(
                left: DS.s,
                top: DS.s,
                bottom: DS.s,
              ),
              child: CircleAvatar(
                radius: 20,
                child: ClipRRect(
                  borderRadius: BorderRadius.circular(50),
                  child: Image.asset(
                    "assets/icons/square.png",
                    fit: BoxFit.fill,
                  ),
                ),
              ),
            )
          : SizedBox.shrink(), // Remove theme toggle
      title: hasConnection
          ? _buildConnectionRibbon(
              bleProvider,
              deviceProvider,
              Theme.of(context).brightness == Brightness.dark,
            )
          : Image.asset(
              'assets/icons/horizontal.png',
              height: hasConnection ? 28 : 60,
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
        // Debug: Manual auto-reconnect button
        // if (!bleProvider.isConnected && bleProvider.isInitialized)
        //   Padding(
        //     padding: EdgeInsets.only(right: DS.s),
        //     child: Container(
        //       width: 40,
        //       height: 40,
        //       decoration: BoxDecoration(
        //         color: Theme.of(context).brightness == Brightness.dark
        //             ? Colors.blue.withValues(alpha: 0.2)
        //             : Colors.blue.withValues(alpha: 0.1),
        //         borderRadius: BorderRadius.circular(20),
        //         border: Border.all(
        //           color: Colors.blue.withValues(alpha: 0.3),
        //           width: 1,
        //         ),
        //       ),
        //       child: IconButton(
        //         onPressed: () => bleProvider.manualAutoReconnect(),
        //         icon: Icon(
        //           Icons.refresh_rounded,
        //           size: 20,
        //           color: Colors.blue[600],
        //         ),
        //         tooltip: 'Manual Auto-Reconnect',
        //       ),
        //     ),
        //   ),
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
                            builder: (ctx) {
                              final l10n = AppLocalizations.of(ctx)!;
                              return AlertDialog(
                                title: Text(l10n.factoryResetLock),
                                content: Text(l10n.factoryResetMessage),
                                actions: [
                                  TextButton(
                                    onPressed: () =>
                                        Navigator.of(ctx).pop(false),
                                    child: Text(l10n.cancel),
                                  ),
                                  ElevatedButton(
                                    onPressed: () =>
                                        Navigator.of(ctx).pop(true),
                                    child: Text(l10n.reset),
                                  ),
                                ],
                              );
                            },
                          );
                          if (confirmed == true) {
                            await bleProvider.initializeLock();
                          }
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
                        );
                      },
                    ),
                  ),
                ),

              // Stack for overlays and toasts with proper constraints
              SizedBox(
                height: bleProvider.isConnected
                    ? 0
                    : MediaQuery.of(context).size.height *
                          0.6, // Reduced height - just enough for overlays
                child: Stack(
                  children: [
                    // Loading overlays - Show only one at a time
                    if (bleProvider.isAutoReconnecting &&
                        bleProvider.autoReconnectStatus != null)
                      AutoReconnectOverlay(
                        status: bleProvider.autoReconnectStatus!,
                      )
                    else if (bleProvider.isVerifyingPin)
                      Builder(
                        builder: (context) {
                          final l10n = AppLocalizations.of(context)!;
                          final isDark =
                              Theme.of(context).brightness == Brightness.dark;
                          
                          return Center(
                            child: Container(
                              margin: EdgeInsets.all(DS.l),
                              constraints: const BoxConstraints(maxWidth: 300),
                              child: GlassCard(
                                child: Padding(
                                  padding: EdgeInsets.all(DS.l),
                                  child: Column(
                                    mainAxisSize: MainAxisSize.min,
                                    children: [
                                      // Elegant lock icon with animation
                                      Container(
                                        width: 64,
                                        height: 64,
                                        decoration: BoxDecoration(
                                          color: DS.brandRed.withValues(
                                            alpha: 0.1,
                                          ),
                                          borderRadius: BorderRadius.circular(
                                            32,
                                          ),
                                          border: Border.all(
                                            color: DS.brandRed.withValues(
                                              alpha: 0.3,
                                            ),
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
                                          valueColor:
                                              AlwaysStoppedAnimation<Color>(
                                                DS.brandRed,
                                              ),
                                          backgroundColor: isDark
                                              ? Colors.white.withValues(
                                                  alpha: 0.1,
                                                )
                                              : Colors.black.withValues(
                                                  alpha: 0.05,
                                                ),
                                        ),
                                      ),

                                      SizedBox(height: DS.m),

                                      // Main title
                                      Text(
                                        l10n.verifyingPin,
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
                                        l10n.pleaseWait,
                                        style: TextStyle(
                                          fontSize: DS.textSM,
                                          color: DS.getTextSecondary(context),
                                        ),
                                        textAlign: TextAlign.center,
                                        maxLines: 2,
                                        overflow: TextOverflow.ellipsis,
                                      ),

                                      SizedBox(height: DS.m),

                                      // Subtle hint
                                      Container(
                                        padding: EdgeInsets.symmetric(
                                          horizontal: DS.s,
                                          vertical: DS.xs,
                                        ),
                                        decoration: BoxDecoration(
                                          color: isDark
                                              ? Colors.white.withValues(
                                                  alpha: 0.05,
                                                )
                                              : Colors.black.withValues(
                                                  alpha: 0.03,
                                                ),
                                          borderRadius: BorderRadius.circular(
                                            DS.rSmall,
                                          ),
                                        ),
                                        child: Text(
                                          'Connecting...',
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
                          );
                        },
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
    final l10n = AppLocalizations.of(context)!;
    if (!bleProvider.isConnected || bleProvider.currentDevice == null) {
      return const SizedBox.shrink();
    }

    final device = bleProvider.currentDevice!;
    final customName = deviceProvider.getDeviceName(device.id);
    final displayName =
        customName ?? device.localName ?? device.name ?? l10n.tacticalLock;

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
            child: Text(
              l10n.online,
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
    final l10n = AppLocalizations.of(context);
    if (l10n == null) return const SizedBox.shrink();
    
    return Center(
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          Icon(Icons.bluetooth_searching, size: 64, color: Colors.grey[400]),
          const SizedBox(height: 16),
          Text(
            l10n.noDevicesFound,
            style: Theme.of(
              context,
            ).textTheme.headlineSmall?.copyWith(color: Colors.grey[600]),
            textAlign: TextAlign.center,
          ),
          const SizedBox(height: 8),
          Text(
            l10n.tapScanToSearch,
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
 
}
