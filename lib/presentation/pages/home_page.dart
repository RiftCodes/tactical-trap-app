import 'dart:async';
import 'dart:ui';

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_blue_plus/flutter_blue_plus.dart';
import 'package:fluttertoast/fluttertoast.dart';
import 'package:provider/provider.dart';
import 'package:tactical_trap_flutter/presentation/widgets/success_toast.dart';

import '../../core/constants/app_constants.dart';
import '../../data/models/ble_device.dart';
import '../../l10n/app_localizations.dart';
import '../providers/ble_provider.dart';
import '../providers/device_provider.dart';
import '../style/design_system.dart';
import '../widgets/auto_reconnect_overlay.dart';
import '../widgets/device_card.dart';
import '../widgets/glass_background.dart';
import '../widgets/glass_card.dart';
import '../widgets/glass_pin_dialog.dart';

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
    _setupCallbacks();
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

  void _setupCallbacks() {
    WidgetsBinding.instance.addPostFrameCallback((_) async {
      if (!mounted) return; // Check if widget is still mounted

      final bleProvider = context.read<BleProvider>();
      final deviceProvider = context.read<DeviceProvider>();

      // Set up callback to refresh device names when they're saved
      bleProvider.setDeviceNameCallback(() {
        deviceProvider.refresh();
      });

      // Check Bluetooth state after a short delay to ensure initialization is complete
      await Future.delayed(const Duration(milliseconds: 500));
      if (mounted) {
        await _checkBluetoothState();
      }
    });
  }

  Future<void> _checkBluetoothState() async {
    if (!mounted) return; // Check if widget is still mounted

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

  @override
  Widget build(BuildContext context) {
    return Consumer2<BleProvider, DeviceProvider>(
      builder: (context, bleProvider, deviceProvider, child) {
        return Scaffold(
          backgroundColor: Colors.transparent,
          appBar: _buildAppBar(context, bleProvider, deviceProvider),
          body: _buildBody(context, bleProvider, deviceProvider),
          // floatingActionButton: _buildFloatingActionButton(),
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
      toolbarHeight: hasConnection ? 60 : 80, // Simplified heights
      leadingWidth: hasConnection ? 50 : 0,
      leading: SizedBox.shrink(),
      title: Image.asset(
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
        // Always show settings icon
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
    // Show fullscreen loader during auto-reconnect or PIN verification
    if (bleProvider.isAutoReconnecting || bleProvider.isVerifyingPin) {
      return Stack(
        children: [
          const GlassBackground(),
          Center(child: _buildFullscreenLoader(context, bleProvider)),
        ],
      );
    }

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
                    if (bleProvider.isConnected &&
                        bleProvider.currentDevice != null) ...[
                      _buildSimplifiedConnectedView(
                        context,
                        bleProvider,
                        deviceProvider,
                      ),
                    ],
                    // Always show My Locks section (both when connected and disconnected)
                    _buildMyLocksView(context, bleProvider, deviceProvider),
                  ],
                ),
              ),

              // Spacing and empty state
              if (bleProvider.isVerifyingPin || bleProvider.isAutoReconnecting)
                const SizedBox.shrink()
              else if (bleProvider.discoveredDevices.isEmpty &&
                  !bleProvider.isScanning &&
                  !bleProvider.isConnected)
                _buildEmptyState(),

              // Stack for overlays and toasts with proper constraints
              SizedBox(
                height: 250, // Fixed height for overlays
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
                                child: SingleChildScrollView(
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
                                              color: DS.getTextSecondary(
                                                context,
                                              ),
                                            ),
                                          ),
                                        ),
                                      ],
                                    ),
                                  ),
                                ),
                              ),
                            ),
                          );
                        },
                      ),

                    // Success toast - positioned at top to not cover buttons
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

  /// Simplified connected view as shown in the image - clean, minimal layout
  Widget _buildSimplifiedConnectedView(
    BuildContext context,
    BleProvider bleProvider,
    DeviceProvider deviceProvider,
  ) {
    final isDark = Theme.of(context).brightness == Brightness.dark;
    final isLocked = bleProvider.lastStatus?.isLocked ?? true;
    final deviceName = deviceProvider.getDisplayName(
      bleProvider.currentDevice!,
    );

    return Container(
      padding: EdgeInsets.all(DS.l),
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          // Animated lock icon in center
          _buildAnimatedLockIcon(context, isLocked, isDark),

          SizedBox(height: DS.l),

          // Connection status text with saved name
          Column(
            children: [
              Text(
                'Connected to:',
                style: TextStyle(
                  fontSize: DS.textSM,
                  color: isDark ? Colors.grey[400] : Colors.grey[600],
                ),
                textAlign: TextAlign.center,
              ),
              SizedBox(height: DS.xs),
              Text(
                deviceName,
                style: TextStyle(
                  fontSize: DS.textBase,
                  fontWeight: FontWeight.w600,
                  color: isDark ? Colors.white : Colors.black87,
                ),
                textAlign: TextAlign.center,
              ),
            ],
          ),
 

          SizedBox(height: DS.s * 2),

          // Two main buttons in column layout
          Column(
            children: [
              // DISCONNECT button (blue)
              Container(
                width: double.infinity,
                height: 60,
                decoration: BoxDecoration(
                  color: Colors.blue,
                  borderRadius: BorderRadius.circular(8),
                ),
                child: Material(
                  color: Colors.transparent,
                  child: InkWell(
                    onTap: () {
                      HapticFeedback.lightImpact();
                      bleProvider.disconnectFromDevice();
                    },
                    borderRadius: BorderRadius.circular(8),
                    child: Center(
                      child: Text(
                        'DISCONNECT',
                        style: TextStyle(
                          color: Colors.white,
                          fontSize: DS.textSM,
                          fontWeight: FontWeight.w600,
                        ),
                      ),
                    ),
                  ),
                ),
              ),

              SizedBox(height: DS.m),

              // UNLOCK/LOCK button with proper colors
              Container(
                width: double.infinity,
                height: 60,
                decoration: BoxDecoration(
                  color: isLocked
                      ? Colors.red
                      : Colors.green, // Red for unlock, green for lock
                  borderRadius: BorderRadius.circular(8),
                ),
                child: Material(
                  color: Colors.transparent,
                  child: InkWell(
                    onTap: () {
                      // Haptic feedback provides tactile confirmation of user action
                      HapticFeedback.lightImpact();
                      if (isLocked) {
                        bleProvider.sendUnlockCommand();
                      } else {
                        bleProvider.sendLockCommand();
                      }
                    },
                    borderRadius: BorderRadius.circular(8),
                    child: Center(
                      child: Text(
                        isLocked ? 'UNLOCK' : 'LOCK',
                        style: TextStyle(
                          color: Colors.white,
                          fontSize: DS.textSM,
                          fontWeight: FontWeight.w600,
                        ),
                      ),
                    ),
                  ),
                ),
              ),
            ],
          ),
        ],
      ),
    );
  }

  /// Build device management view - clean and simple
  Widget _buildMyLocksView(
    BuildContext context,
    BleProvider bleProvider,
    DeviceProvider deviceProvider,
  ) {
    return Container(
      padding: EdgeInsets.all(DS.s),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          // Paired Devices Section (only show if there are devices)
          _buildPairedDevicesSection(context, bleProvider, deviceProvider),

          SizedBox(height: DS.l),

          // Scan for new devices button
          _buildScanForNewDevicesButton(context, bleProvider),

          SizedBox(height: DS.l),

          // Available devices (show when scanning OR when devices are discovered)
          if (bleProvider.isScanning ||
              bleProvider.discoveredDevices.isNotEmpty)
            _buildAvailableDevicesSection(context, bleProvider, deviceProvider),
        ],
      ),
    );
  }

  /// Build paired devices section (only show if there are devices)
  Widget _buildPairedDevicesSection(
    BuildContext context,
    BleProvider bleProvider,
    DeviceProvider deviceProvider,
  ) {
    // Get paired devices from actual storage - no static values!
    final pairedDevices = _getPairedDevicesFromStorage(
      deviceProvider,
      bleProvider,
    );

    // Only show section if there are devices
    if (pairedDevices.isEmpty) {
      return SizedBox.shrink();
    }

    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        // Section header
        Text(
          'Paired Devices',
          style: TextStyle(
            fontSize: DS.textLG,
            fontWeight: FontWeight.w600,
            color: DS.getTextPrimary(context),
          ),
        ),

        SizedBox(height: DS.s),

        // Paired devices list
        ...pairedDevices.map(
          (device) => _buildPairedDeviceCard(
            context,
            device,
            false, // Never show as connected since we filter out connected devices
            _isDeviceInRange(device['id'], bleProvider.discoveredDevices),
            () {
              HapticFeedback.lightImpact();
              // Connect to this device
              _connectToPairedDevice(context, device);
            },
            () {
              // Forget device
              _forgetPairedDevice(context, device, deviceProvider);
            },
          ),
        ),
      ],
    );
  }

  /// Build scan for new devices button (like real Bluetooth)
  Widget _buildScanForNewDevicesButton(
    BuildContext context,
    BleProvider bleProvider,
  ) {
    return Container(
      width: double.infinity,
      height: 60,
      padding: EdgeInsets.all(DS.s),
      margin: EdgeInsets.symmetric(horizontal: DS.m),
      decoration: BoxDecoration(
        color: !bleProvider.isScanning ? Colors.blue[600] : DS.brandRed,
        borderRadius: BorderRadius.circular(DS.rSmall),
        border: Border.all(
          color: !bleProvider.isScanning ? Colors.blue[700]! : DS.brandRed,
          width: 1,
        ),
      ),
      child: Material(
        color: Colors.transparent,
        child: InkWell(
          onTap: () {
            HapticFeedback.lightImpact();
            if (bleProvider.isScanning) {
              bleProvider.stopScan();
            } else {
              bleProvider.startScan();
            }
          },
          borderRadius: BorderRadius.circular(DS.rSmall),
          child: Center(
            child: Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                Icon(
                  bleProvider.isScanning ? Icons.stop : Icons.add,
                  color: Colors.white,
                  size: 20,
                ),
                SizedBox(width: DS.s),
                Text(
                  bleProvider.isScanning ? 'Stop scanning' : 'Pair new device',
                  style: TextStyle(
                    color: Colors.white,
                    fontSize: DS.textSM,
                    fontWeight: FontWeight.w500,
                  ),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }

  /// Build available devices section (when scanning)
  Widget _buildAvailableDevicesSection(
    BuildContext context,
    BleProvider bleProvider,
    DeviceProvider deviceProvider,
  ) {
    // Filter out paired devices from available devices
    final pairedDeviceIds = deviceProvider.deviceNames.keys.toSet();
    final availableDevices = bleProvider.discoveredDevices
        .where((device) => !pairedDeviceIds.contains(device.id.toString()))
        .toList();

    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        // Section header
        Row(
          children: [
            Text(
              'Available Devices',
              style: TextStyle(
                fontSize: DS.textLG,
                fontWeight: FontWeight.w600,
                color: DS.getTextPrimary(context),
              ),
            ),
            Spacer(),
            if (bleProvider.isScanning)
              Container(
                padding: EdgeInsets.symmetric(horizontal: DS.s, vertical: 2),
                decoration: BoxDecoration(
                  color: DS.info,
                  borderRadius: BorderRadius.circular(4),
                ),
                child: Row(
                  mainAxisSize: MainAxisSize.min,
                  children: [
                    SizedBox(
                      width: 12,
                      height: 12,
                      child: CircularProgressIndicator(
                        strokeWidth: 2,
                        valueColor: AlwaysStoppedAnimation<Color>(Colors.white),
                      ),
                    ),
                    SizedBox(width: 4),
                    Text(
                      'Scanning',
                      style: TextStyle(
                        fontSize: DS.textXS,
                        color: Colors.white,
                        fontWeight: FontWeight.w600,
                      ),
                    ),
                  ],
                ),
              )
            else if (availableDevices.isNotEmpty)
              Container(
                padding: EdgeInsets.symmetric(horizontal: DS.s, vertical: 2),
                decoration: BoxDecoration(
                  color: DS.success,
                  borderRadius: BorderRadius.circular(4),
                ),
                child: Text(
                  '${availableDevices.length} New',
                  style: TextStyle(
                    fontSize: DS.textXS,
                    color: Colors.white,
                    fontWeight: FontWeight.w600,
                  ),
                ),
              ),
          ],
        ),

        SizedBox(height: DS.s),

        // Available devices list
        if (availableDevices.isEmpty)
          Container(
            width: double.infinity,
            padding: EdgeInsets.all(DS.l),
            decoration: BoxDecoration(
              color: DS.getCardBackground(context),
              borderRadius: BorderRadius.circular(DS.rSmall),
              border: Border.all(color: DS.getBorderColor(context), width: 1),
            ),
            child: Column(
              children: [
                Icon(
                  Icons.bluetooth_searching,
                  color: DS.getTextSecondary(context),
                  size: 32,
                ),
                SizedBox(height: DS.s),
                Text(
                  'Searching for devices...',
                  style: TextStyle(
                    fontSize: DS.textSM,
                    color: DS.getTextSecondary(context),
                  ),
                ),
                Text(
                  'Make sure your lock is in pairing mode',
                  style: TextStyle(
                    fontSize: DS.textXS,
                    color: DS.getTextSecondary(context),
                  ),
                ),
              ],
            ),
          )
        else
          ...availableDevices.map(
            (device) => Padding(
              padding: const EdgeInsets.only(bottom: DS.s),
              child: DeviceCard(
                device: device,
                isConnected: false,
                displayName:
                    device.localName ?? device.name ?? 'Unknown Device',
                isConnecting: false,
                isVerifyingPin: false,
                onConnect: () => _connectToDevice(device),
                onDisconnect: () {}, // Not applicable for available devices
                onToggleExpansion: () {
                  HapticFeedback.lightImpact();
                  bleProvider.toggleDeviceExpansion(device);
                },
              ),
            ),
          ),
      ],
    );
  }

  /// Check if device is in range (discovered during scan)
  bool _isDeviceInRange(String deviceId, List<BleDevice> discoveredDevices) {
    final isInRange = discoveredDevices.any(
      (device) => device.id.toString() == deviceId,
    );
    return isInRange;
  }

  /// Forget a paired device
  void _forgetPairedDevice(
    BuildContext context,
    Map<String, dynamic> device,
    DeviceProvider deviceProvider,
  ) {
    showDialog(
      context: context,
      builder: (context) => AlertDialog(
        title: Text('Forget Device'),
        content: Text('Are you sure you want to forget "${device['name']}"?'),
        actions: [
          TextButton(
            onPressed: () => Navigator.of(context).pop(),
            child: Text('Cancel'),
          ),
          ElevatedButton(
            onPressed: () async {
              Navigator.of(context).pop();
              // Remove both device name and PIN
              final nameRemoved = await deviceProvider.removeDeviceName(
                device['id'],
              );
              final bleProvider = context.read<BleProvider>();
              final pinRemoved = await bleProvider.removeStoredPin(
                device['id'],
              );

              if (nameRemoved && pinRemoved) {
                ScaffoldMessenger.of(context).showSnackBar(
                  SnackBar(
                    content: Text('Device forgotten'),
                    backgroundColor: Colors.green,
                  ),
                );
              } else {
                ScaffoldMessenger.of(context).showSnackBar(
                  SnackBar(
                    content: Text('Failed to forget device'),
                    backgroundColor: Colors.red,
                  ),
                );
              }
            },
            child: Text('Forget'),
          ),
        ],
      ),
    );
  }

  /// Build paired device card (using DeviceCard style with paired features)
  Widget _buildPairedDeviceCard(
    BuildContext context,
    Map<String, dynamic> device,
    bool isConnected,
    bool isInRange,
    VoidCallback onTap,
    VoidCallback onForget,
  ) {
    // Get proper display name using DeviceProvider
    final deviceProvider = context.read<DeviceProvider>();

    // Use the device's custom name (which is already stored in device['name'])
    // device['name'] contains the custom name from storage
    // device['localName'] contains the original device name
    final deviceName =
        device['name'] ?? device['localName'] ?? 'Unknown Device';

    final properDisplayName = deviceProvider.getDisplayName(
      BleDevice(
        device: BluetoothDevice.fromId(device['id']),
        name: deviceName,
        localName: device['localName'] ?? deviceName,
        rssi: -50,
        manufacturerData: [],
        discoveredAt: DateTime.now(),
        isLock: true,
        customName: device['name'],
      ),
    );

    // Trim "SN:" from display name if it's the default name
    String finalDisplayName = properDisplayName;

    return Container(
      margin: EdgeInsets.only(bottom: DS.s),
      child: _PairedDeviceCardWrapper(
        device: device,
        isConnected: isConnected,
        isInRange: isInRange,
        displayName: finalDisplayName,
        onTap: onTap,
        onForget: onForget,
      ),
    );
  }

  /// Get paired devices from actual storage - NO STATIC VALUES!
  List<Map<String, dynamic>> _getPairedDevicesFromStorage(
    DeviceProvider deviceProvider,
    BleProvider bleProvider,
  ) {
    // Get real paired devices from DeviceProvider
    final deviceNames = deviceProvider.deviceNames;
    final deviceOriginalNames = deviceProvider.deviceOriginalNames;
    final lastConnected = deviceProvider.lastConnectedDevice;
    final currentDeviceId = bleProvider.currentDevice?.id;

    // Debug logs removed for cleaner output

    List<Map<String, dynamic>> pairedDevices = [];

    // Convert stored device names to paired devices list
    deviceNames.forEach((deviceId, deviceName) {
      // Skip if this device is currently connected
      if (currentDeviceId != null && deviceId == currentDeviceId) {
        return;
      }

      // Get original name from storage
      final originalName = deviceOriginalNames[deviceId] ?? 'SN:$deviceId';

      pairedDevices.add({
        'id': deviceId,
        'name': deviceName, // Custom name
        'localName': originalName, // Original name for serial number
        'lastConnected': lastConnected?['id'] == deviceId
            ? DateTime.tryParse(lastConnected!['timestamp'] ?? '')
            : null,
      });
    });

    // Also add last connected device if it's not in deviceNames and not currently connected
    if (lastConnected != null &&
        !deviceNames.containsKey(lastConnected['id']) &&
        currentDeviceId != lastConnected['id']) {
      final deviceId = lastConnected['id'] ?? '';
      final originalName =
          deviceOriginalNames[deviceId] ??
          lastConnected['localName'] ??
          'SN:$deviceId';

      pairedDevices.add({
        'id': lastConnected['id'],
        'name':
            lastConnected['customName'] ??
            lastConnected['localName'] ??
            lastConnected['name'] ??
            'Unknown Device',
        'localName': originalName,
        'lastConnected': DateTime.now(),
      });
    }

    // Debug logs removed for cleaner output
    return pairedDevices;
  }

  /// Connect to a paired device
  void _connectToPairedDevice(
    BuildContext context,
    Map<String, dynamic> device,
  ) {
    final deviceId = device['id'] as String;
    final customName = device['name'] as String?;
    final originalName = device['localName'] as String?;

    // Create a BleDevice from stored data instead of looking in discovered devices
    // This allows connecting to previously paired devices even when not scanning
    final storedDevice = BleDevice(
      device: BluetoothDevice.fromId(deviceId),
      name:
          originalName ??
          'SN:$deviceId', // Use original name for BLE device name
      localName:
          originalName ?? 'SN:$deviceId', // Use original name for localName
      customName: customName, // Custom name is separate
      rssi: -50, // Default RSSI for stored devices
      manufacturerData: [],
      discoveredAt: DateTime.now(),
      isLock: true, // Assume it's a lock since it's in paired devices
    );

    // Connect to the device
    _connectToDevice(storedDevice);
  }

  /// Build animated lock icon
  Widget _buildAnimatedLockIcon(
    BuildContext context,
    bool isLocked,
    bool isDark,
  ) {
    return AnimatedContainer(
      duration: Duration(milliseconds: 300),
      width: 120,
      height: 120,
      decoration: BoxDecoration(
        color: isLocked
            ? (isDark ? Colors.red[900] : Colors.red[100])
            : (isDark ? Colors.green[900] : Colors.green[100]),
        borderRadius: BorderRadius.circular(60),
        border: Border.all(
          color: isLocked ? Colors.red : Colors.green,
          width: 3,
        ),
      ),
      child: AnimatedSwitcher(
        duration: Duration(milliseconds: 300),
        child: Icon(
          isLocked ? Icons.lock : Icons.lock_open,
          key: ValueKey('lock_icon_${isLocked ? 'locked' : 'unlocked'}'),
          size: 80,
          color: isLocked ? Colors.red : Colors.green,
        ),
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

  /// Build fullscreen loader for auto-reconnect and PIN verification
  Widget _buildFullscreenLoader(BuildContext context, BleProvider bleProvider) {
    final isDark = Theme.of(context).brightness == Brightness.dark;

    return Container(
      margin: EdgeInsets.all(DS.l),
      constraints: const BoxConstraints(maxWidth: 300),
      child: GlassCard(
        child: SingleChildScrollView(
          child: Padding(
            padding: EdgeInsets.all(DS.l),
            child: Column(
              mainAxisSize: MainAxisSize.min,
              children: [
                // Elegant logo with animation
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
                  child: Padding(
                    padding: const EdgeInsets.all(2),
                    child: Icon(
                      Icons.lock_outline,
                      size: 30,
                      color: DS.brandRed,
                    ),
                  ),
                ),
                SizedBox(height: DS.m),

                // Loading indicator
                SizedBox(
                  width: 32,
                  height: 32,
                  child: CircularProgressIndicator(
                    strokeWidth: 3,
                    valueColor: AlwaysStoppedAnimation<Color>(DS.brandRed),
                  ),
                ),
                SizedBox(height: DS.m),

                // Status text
                Text(
                  bleProvider.isAutoReconnecting
                      ? 'Reconnecting...'
                      : 'Verifying PIN...',
                  style: TextStyle(
                    fontSize: 18,
                    fontWeight: FontWeight.w700,
                    color: isDark ? Colors.white : DS.brandDark,
                  ),
                  textAlign: TextAlign.center,
                ),
                SizedBox(height: DS.s),

                // Subtitle
                Text(
                  bleProvider.isAutoReconnecting
                      ? 'Please wait while we reconnect'
                      : 'Please wait while we verify your PIN',
                  style: TextStyle(
                    fontSize: 14,
                    color: DS.getTextSecondary(context),
                  ),
                  textAlign: TextAlign.center,
                  maxLines: 2,
                  overflow: TextOverflow.ellipsis,
                ),
                SizedBox(height: DS.m),

                // Status indicator
                Container(
                  padding: EdgeInsets.symmetric(
                    horizontal: DS.s,
                    vertical: DS.xs,
                  ),
                  decoration: BoxDecoration(
                    color: isDark
                        ? Colors.white.withValues(alpha: 0.05)
                        : Colors.black.withValues(alpha: 0.03),
                    borderRadius: BorderRadius.circular(DS.rSmall),
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
  }
}

/// Wrapper widget for paired device cards with proper state management
class _PairedDeviceCardWrapper extends StatefulWidget {
  final Map<String, dynamic> device;
  final bool isConnected;
  final bool isInRange;
  final String displayName;
  final VoidCallback onTap;
  final VoidCallback onForget;

  const _PairedDeviceCardWrapper({
    required this.device,
    required this.isConnected,
    required this.isInRange,
    required this.displayName,
    required this.onTap,
    required this.onForget,
  });

  @override
  State<_PairedDeviceCardWrapper> createState() =>
      _PairedDeviceCardWrapperState();
}

class _PairedDeviceCardWrapperState extends State<_PairedDeviceCardWrapper> {
  bool _isExpanded = false;

  @override
  Widget build(BuildContext context) {
    // For paired devices, use original device name for serial number
    // Get the device ID correctly from the id field
    final deviceId = widget.device['id'] ?? '';
    // Get original name from localName, or create fallback from deviceId
    final originalDeviceName =
        widget.device['localName'] ??
        (deviceId.isNotEmpty ? 'SN:$deviceId' : 'Unknown Device');
    // Get custom name from name field
    final customName = widget.device['name'];

    // Create a mock BleDevice for DeviceCard with proper expansion state
    final mockBleDevice = BleDevice(
      device: BluetoothDevice.fromId(widget.device['id']),
      name: originalDeviceName, // Original name for serial number
      localName: widget.device['localName'] ?? originalDeviceName,
      rssi: -50,
      manufacturerData: [],
      discoveredAt: DateTime.now(),
      isLock: true,
      isExpanded: _isExpanded,
      customName: customName, // Custom name for display
    );

    return DeviceCard(
      device: mockBleDevice,
      isConnected: widget.isConnected,
      displayName: widget.displayName,
      isConnecting: false,
      isVerifyingPin: false,
      onConnect: widget.onTap,
      onDisconnect: widget.onTap,
      onToggleExpansion: () {
        HapticFeedback.lightImpact();
        setState(() {
          _isExpanded = !_isExpanded;
        });
      },
      isPairedDevice: true,
      isInRange: widget.isInRange,
      onForget: widget.onForget,
    );
  }
}
