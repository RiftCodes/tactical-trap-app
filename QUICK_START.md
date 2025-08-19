Checking characteristic: fff1
I/flutter (31902): [INFO] Checking characteristic: fff2
I/flutter (31902): [INFO] ✅ Found fff2 command characteristic
I/flutter (31902): [INFO] ✅ Command characteristic found: fff2
I/flutter (31902): [INFO] === SETTING UP RESPONSE WAITER ===
I/flutter (31902): [INFO] ✅ Response waiter set up for command: status
I/flutter (31902): [INFO] === SENDING COMMAND ===
I/flutter (31902): [INFO] Sending command: status
I/flutter (31902): [INFO] Command to send: 0xF5 0x60 0x0 0x0 0x5F 0xB4
I/flutter (31902): [INFO] Command bytes to send: 245, 96, 0, 0, 95, 180
D/[FBP-Android](31902): [FBP] onMethodCall: writeCharacteristic
D/InputTransport(31902): Input channel destroyed: 'ClientS', fd=122
I/flutter (31902): [INFO] === _writeToLockWithResponse START ===
I/flutter (31902): [INFO] Command name: status
I/flutter (31902): [INFO] Command bytes: 245, 96, 0, 0, 95, 180
I/flutter (31902): [INFO] Command hex: 0xF5 0x60 0x0 0x0 0x5F 0xB4
I/flutter (31902): [INFO] Command length: 6
I/flutter (31902): [INFO] Device connected: 01:26:3C:00:A4:84
I/flutter (31902): [INFO] Status characteristic: fff1
I/flutter (31902): [INFO] === _writeToLockWithResponse START ===
I/flutter (31902): [INFO] Command name: status
I/flutter (31902): [INFO] Command bytes: 245, 96, 0, 0, 95, 180
I/flutter (31902): [INFO] Command hex: 0xF5 0x60 0x0 0x0 0x5F 0xB4
I/flutter (31902): [INFO] Command length: 6
I/flutter (31902): [INFO] Device connected: 01:26:3C:00:A4:84
I/flutter (31902): [INFO] Status characteristic: fff1
E/[FBP-Android](31902): [FBP] onCharacteristicWrite:
E/[FBP-Android](31902): [FBP]   chr: fff2
E/[FBP-Android](31902): [FBP]   status: GATT_ERROR (133)
D/BluetoothGatt(31902): onClientConnectionState() - status=0 clientIf=13 device=01:26:3C:00:A4:84
D/[FBP-Android](31902): [FBP] onConnectionStateChange:disconnected
D/[FBP-Android](31902): [FBP]   status: SUCCESS
D/BluetoothGatt(31902): close()
I/flutter (31902): [ERROR] ❌ Failed to write command with response
I/flutter (31902): [ERROR] Details: FlutterBluePlusException | writeCharacteristic | android-code: 133 | GATT_ERROR
I/flutter (31902): [ERROR] Error details: FlutterBluePlusException | writeCharacteristic | android-code: 133 | GATT_ERROR
D/BluetoothGatt(31902): unregisterApp() - mClientIf=13
D/[FBP-Android](31902): [FBP] onMethodCall: discoverServices
I/flutter (31902): [ERROR] ❌ Failed to write command with response
I/flutter (31902): [ERROR] Details: PlatformException(discoverServices, device is disconnected, null, null)
I/flutter (31902): [ERROR] Error details: PlatformException(discoverServices, device is disconnected, null, null)
D/[FBP-Android](31902): [FBP] onMethodCall: discoverServices
I/flutter (31902): [ERROR] ❌ Failed to write command with response
I/flutter (31902): [ERROR] Details: PlatformException(discoverServices, device is disconnected, null, null)
I/flutter (31902): [ERROR] Error details: PlatformException(discoverServices, device is disconnected, null, null)
I/flutter (31902): [INFO] === _writeToLockWithResponse START ===
I/flutter (31902): [INFO] Command name: status
I/flutter (31902): [INFO] Command bytes: 245, 96, 0, 0, 95, 180
I/flutter (31902): [INFO] Command hex: 0xF5 0x60 0x0 0x0 0x5F 0xB4
I/flutter (31902): [INFO] Command length: 6
I/flutter (31902): [INFO] Device connected: 01:26:3C:00:A4:84
I/flutter (31902): [INFO] Status characteristic: fff1
I/flutter (31902): [ERROR] ❌ Failed to write command with response
I/flutter (31902): [ERROR] Details: FlutterBluePlusException | discoverServices | fbp-code: 6 | device is not connected
I/flutter (31902): [ERROR] Error details: FlutterBluePlusException | discoverServices | fbp-code: 6 | device is not connected
ACHA DEKHO MENE NA LOCK KI BATTERY NIKAL DI TO IDHER APP ABI B TRY KR RHI KE LOCK SE COONECT KRE TO Hm kia krskte hn ke Online jo app bar me likha udher offline likhden or try krte rhen same ping bhejne ki pin ke sath jese hi lock on ho or koi b ping jaye to wo connect reconnect hojaye or toast b ajaye lock reconnect 
to yar kindly bare DHEYAN SE KRNA BAKI CODE NA KHRAB KRDENA PLEASE