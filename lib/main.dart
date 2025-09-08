import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

import 'app.dart';

void main() {
  // Filter out BLE debug logs
  SystemChrome.setSystemUIOverlayStyle(
    const SystemUiOverlayStyle(
      statusBarBrightness: Brightness.dark,
      statusBarIconBrightness: Brightness.light,
    ),
  );

  // Filter out BLE and system logs
  debugPrint = (String? message, {int? wrapWidth}) {
    if (message != null) {
      // Hide BLE and system logs
      final isBleLog =
          message.contains('[FBP]') ||
          message.contains('BluetoothGatt') ||
          message.contains('BluetoothAdapter') ||
          message.contains('BluetoothLeScanner') ||
          message.contains('onMethodCall') ||
          message.contains('onServicesDiscovered') ||
          message.contains('onCharacteristicWrite') ||
          message.contains('onCharacteristicChanged') ||
          message.contains('onSearchComplete') ||
          message.contains('onConnectionStateChange') ||
          message.contains('onMtuChanged') ||
          message.contains('onDescriptorWrite') ||
          message.contains('onConnectionUpdated') ||
          message.contains('onClientRegistered') ||
          message.contains('onTimeSync') ||
          message.contains('registerApp') ||
          message.contains('unregisterApp') ||
          message.contains('cancelOpen') ||
          message.contains('close') ||
          message.contains('connect') ||
          message.contains('discoverServices') ||
          message.contains('setCharacteristicNotification') ||
          message.contains('configureMTU') ||
          message.contains('isSecureModeEnabled') ||
          message.contains('STATE_ON') ||
          message.contains('Start Scan') ||
          message.contains('Stop Scan') ||
          message.contains('onScannerRegistered') ||
          message.contains('InputMethodManager') ||
          message.contains('ViewRootImpl') ||
          message.contains('InputTransport') ||
          message.contains('MSG_WINDOW_FOCUS_CHANGED') ||
          message.contains('updateBoundsLayer') ||
          message.contains('mWNT') ||
          message.contains('prepareSurfaces') ||
          message.contains('performTraversals') ||
          message.contains('doTraversal') ||
          message.contains('merge t to BBQ') ||
          message.contains('updatePointerIcon') ||
          message.contains('setPointerIconType') ||
          message.contains('startInputInner') ||
          message.contains('mService.startInputOrWindowGainedFocus');

      if (!isBleLog) {
        print(message);
      }
    }
  };
  
  runApp(const TacticalTrapsApp());
}
    