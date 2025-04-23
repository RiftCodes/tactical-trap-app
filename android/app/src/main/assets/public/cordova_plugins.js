
  cordova.define('cordova/plugin_list', function(require, exports, module) {
    module.exports = [
      {
          "id": "cordova-plugin-ble-central.ble",
          "file": "plugins/cordova-plugin-ble-central/www/ble.js",
          "pluginId": "cordova-plugin-ble-central",
        "clobbers": [
          "ble"
        ]
        },
      {
          "id": "cordova-plugin-android-permissions.Permissions",
          "file": "plugins/cordova-plugin-android-permissions/www/permissions.js",
          "pluginId": "cordova-plugin-android-permissions",
        "clobbers": [
          "cordova.plugins.permissions"
        ]
        },
      {
          "id": "cordova-plugin-nativeclicksound.nativeclick",
          "file": "plugins/cordova-plugin-nativeclicksound/www/nativeclick.js",
          "pluginId": "cordova-plugin-nativeclicksound",
        "clobbers": [
          "nativeclick"
        ]
        },
      {
          "id": "cordova-plugin-bluetoothle.BluetoothLe",
          "file": "plugins/cordova-plugin-bluetoothle/www/bluetoothle.js",
          "pluginId": "cordova-plugin-bluetoothle",
        "clobbers": [
          "window.bluetoothle"
        ]
        }
    ];
    module.exports.metadata =
    // TOP OF METADATA
    {
      "cordova-plugin-android-permissions": "1.1.5",
      "cordova-plugin-ble-central": "2.0.0",
      "cordova-plugin-bluetoothle": "6.7.4",
      "cordova-plugin-nativeclicksound": "0.0.4"
    };
    // BOTTOM OF METADATA
    });
    