
== Pending for upcoming release ==

* Android SDK 33 coming soon

== Reported issues and obvious enhancements ==

! Android 12 changes - argh, splashscreen again
  - There's a new splashscreen arrangement.  The capacitor plugin handles the
    specifics; on pre-SDK 31 devices, things work as always, but starting with
    Android 12 splash images are replaced by vector animations.
  - Need to make sure UI doesn't go bizarre on multi-app display.

* Somehow, amongst all the distractions of bugs and unreliable tools, an
  app ID that was supposed to be only for Android testing leaked into a
  production build.  The bundle ID in config.xml is now different for
  the two platforms, and neither can be changed.  This was discovered
  after the Android version was submitted, locking in the bad ID.  Apple
  doesn't allow underscores in the ID (Apple allows hyphens, Android allows
  underscores).

      Apple:    com.tacticaltraps.bluetooth.lock
      Android:  com.tacticaltraps.bluetooth.lock_1
      Appflow:  com.tacticaltraps.experimental

* Capacitor's emphasis on native projects complicates the choice of App ID.
  Using an "internal" ID means making a number of fiddly changes to correctly
  set up the project.  Convincing AppFlow to build correctly with corresponding
  credentials has been a challenge.

* The lock's verification timeout is 30 seconds; the inactivity timeout is a
  generous 3 minutes.

* On iOS, scanning doesn't require Location permission, but it does need an
  info.plist entry to describe the Bluetooth usage.

* on Android 11, both Bluetooth and Location permissions are required.  Starting
  with Android 12, Scan and possibly Connect (for future plans) are required,
  and the code needs to request permissions matching the device's version.

* Always use the AS image and icon prep tool to create the launch icons.  While
  it forces you to scale down the foreground image and leave huge margins, that
  is what displays correctly.  Following the sizes for foreground images on the
  official adaptive icon page and having cordova-res (called by ionic prepare)
  create the images results in icons with cropped edges.

--------------------------------------------------------------------------------

== Plugins ==

Refer to the package.json file for all the plugins used.  Specifically, the
following are needed with their necessary parameters.  Capacitor doesn't run
post-install hooks, so the Bluetooth variables might need to be edited into
native projects manually.

Uses the ble-central plugin:
?   ionic cordova plugin add cordova-plugin-ble-central --variable BLUETOOTH_USAGE_DESCRIPTION="Bluetooth access must be enabled to connect to Tactical Traps locks."
//    ionic cordova plugin add cordova-plugin-ble-central --variable BLUETOOTH_USAGE_DESCRIPTION="Bluetooth access must be enabled to connect to Tactical Traps locks." --variable IOS_INIT_ON_LOAD=false
    npm install @ionic-native/ble

//Uses the Bluetooth-le plugin from Rand Dusing:
//    ionic cordova plugin add cordova-plugin-bluetoothle
//    npm install @ionic-native/bluetooth-le

// Uses the iOS bluetooth notification plugin for cordova-plugin-bluetoothle:
//     cordova plugin add cordova-plugin-bluetooth-peripheral-usage-description --variable TEXT="Bluetooth access must be enabled to connect to Tactical Traps locks."

Uses the app-version plugin:
?   ionic cordova plugin add cordova-plugin-app-version
    npm install @ionic-native/app-version

Uses the Android permissions plugin:
?   ionic cordova plugin add cordova-plugin-android-permissions
    npm install @ionic-native/android-permissions

Uses the device plugin to find the OS version:
    npm install @capacitor/device

Uses the Storage/Preferences plugin to save lock info:
    npm install @capacitor/preferences

The install instructions for @ionic-native/feature/ngx may be incomplete, and
will cause the app to crash with a missing provider error.  Remember to add it
to app.module.ts:

    import { feature } from '@ionic-native/feature/ngx';

    providers: [ serviceX, serviceY,... feature ]


== iOS returns BLE messages like ==
```
starting ble scan:
{
    "id": "3CBBF67B-FF60-421E-86AC-7608283714A8",
    "rssi": -78,
    "advertising": {
        "kCBAdvDataIsConnectable": true,
        "kCBAdvDataServiceUUIDs": [
            "0000FFF0-0000-1000-8000-00805F9B34FB"
        ],
        "kCBAdvDataLocalName": "PizzaSmasher"
    },
    "name": "PizzaSmasher"
 }
bluetooth connect succeeded: {
    "characteristics":[
        {
            "properties":[
                "Read",
                "Write"
            ],
            "isNotifying": false,
            "characteristic": "0000FFF1-0000-1000-8000-00805F9B34FB",
            "service": "0000FFF0-0000-1000-8000-00805F9B34FB"
        },
        {
            "properties": [
                "Read",
                "Write",
                "Notify"
            ],
            "isNotifying": false,
            "characteristic": "0000FFF2-0000-1000-8000-00805F9B34FB",
            "service": "0000FFF0-0000-1000-8000-00805F9B34FB"
        },
        {
            "properties": [
                "Read",
                "Write",
                "Notify"
            ],
            "isNotifying": false,
            "characteristic": "0000FFF3-0000-1000-8000-00805F9B34FB",
            "service": "0000FFF0-0000-1000-8000-00805F9B34FB"
        }
    ],
    "id": "3CBBF67B-FF60-421E-86AC-7608283714A8",
    "rssi": -78,
    "advertising": {
        "kCBAdvDataIsConnectable": true,
        "kCBAdvDataServiceUUIDs": [
            "0000FFF0-0000-1000-8000-00805F9B34FB"
        ],
        "kCBAdvDataLocalName": "PizzaSmasher"
    },
    "name": "Toothless",
    "services":[
        "0000FFF0-0000-1000-8000-00805F9B34FB"
    ]
}

```
Note: the UUID pattern 0000xxxx-0000-1000-8000-00805F9B34FB is a special form
    that reduces to the 16-bit UUID xxxx.  If iOS reveals the short form (e.g,
    in kCBAdvDataServiceUUIDs) then short UUIDs must be passed to the BLE plugin.

Note: The Bluetooth + plugin stack reports bogus peripheral information.  If
    the field "advertising.kCBAdvDataLocalName" is missing, then the "name"
    field may contain the name of another device with a stronger signal.


bluetooth disconnected: {
    "errorDescription": "The specified device has disconnected from us.",
    "id": "3CBBF67B-FF60-421E-86AC-7608283714A8",
    "name": "Toothless",
    "errorMessage": "Peripheral Disconnected"
}

Note: the lock microcontroller probably runs on minimum power, barely capable
    of its job.  It isn't consistent in responding to requests.  A 400ms delay
    was added between the set-buzzer and set-alarm commands to avoid the issue
    of the second command receiving the first commands's status.  This problem
    has also been seen in other places where the spacing should be generous.

Running with Safari monitoring but not actively open still causes some connection
issues.  The BLE-central code was reporting 'didConnectPeripheral', but then
failed to resolve the services.  It would then report a disconnect in lieu of a
timeout.  Xcode's monitoring didn't seem to have an impact.  Shutting down the
Xcode-initiated instance and starting from the device produced a clean connect
on the first try.

In Chrome on Windows, if you open the options modal while the Android device
screen is showing in the debugger, the modal half-appears and then the debugger
loses track of the app.


== Testing using Ionic Cloud build ==

- In BitBucket create an empty repository and force push the project into it.

- In Ionic dashboard create a project and connect a BitBucket repository to it.
  Always connect the repository *after* pushing the local repository.

- Generate certificate signing request (for Apple ID)
    cd <key folder>
    c:/openssl-1.1/x64/bin/openssl.exe genrsa -out TacticalTraps.key 2048
    c:/openssl-1.1/x64/bin/openssl.exe req -new -key TacticalTraps.key -out TacticalTraps.certSigningRequest

- Create "iOS Distribution (App Store and Ad Hoc)" certificate on Apple developer
  site.  Download and name with expiration date.
    BlueTooth_Lock_ios_distribution-2023-03-22.cer

- Use that certificate to create the mobileprovision files with the necessary UDIDs.
    BlueTooth_Lock_adhoc_2023-04-9.mobileprovision
    BlueTooth_Lock_dist_2023-03-22.mobileprovision

- Convert downloaded certificate to .p12
    c:/openssl-1.1/x64/bin/openssl.exe x509 -inform DER -outform PEM -in BlueTooth_Lock_ios_distribution-2023-03-22.cer -out BlueTooth_Lock_ios_distribution-2023-03-22.cer.pem
    c:/openssl-1.1/x64/bin/openssl.exe pkcs12 -export -inkey TacticalTraps.key -in BlueTooth_Lock_ios_distribution-2023-03-22.cer.pem -out BlueTooth_Lock_ios_distribution-2023-03-22.cer.p12
            -password pass:XXXXXXXXX
  (openssl locks up bash if you don't include the password option)

- Upload the p12 file with its password and the mobileprovision file to Ionic
  dashboard.  Choose a credential name that matches the certificate and profile;
  you can't find out those details from AppFlow once created.  When both are
  attached to a project, iOS builds are possible.

- Set the new version by editing package.json and then running
    npx capacitor-set-version -v 1.3.3 -b 10303 ./
  "-v" sets the Android/iOS version.  The "-b" option sets the Android build
  number to match the version.

- On iOS, check the NSBluetooth... values are present in info.plist.

- After pushing the commit to be tested up to BitBucket, go to Commits tab and
  manually trigger the build process.  The console output of the build will be
  shown.  When the build completes and finishes copying products out of the build
  container, links to the ipa and symbol file will appear on the right side of
  the window.

- iTunes no longer gives access to apps on a connected device.  Currently the
  simple way to install an iOS app is to upload to the https://www.diawi.com/
  service.  It handles the messy bits of creating an install link.

* AppFlow makes it even more difficult than Xcode to get a valid provisioning
  profile.  The first Capacitor version wouldn't build even when using the
  credentials from the last successful Cordova build.  To help troubleshoot, an
  .ipa file can be opened as an archive; inside is an embedded.mobileprovision
  file used to build the app.  Compare CRC32s to verify which profile was used.
  Inside the embedded file is a <key> for DeveloperCertificates.  The <data>
  entry contains the first line of certificate data, which can be retrieved
  with the command
    openssl.exe pkcs12 -info -nodes -in ios_distribution.cer.p12 -passin pass:xxxxx.
  Running this command also verifies the password.

== To distribute an Android version, latest ==

* update config.xml:
  - change version code
  - ensure id ends with "lock_1"
* need to do an ionic production build so all the obfuscation and downsizing
  happens:
    ionic capacitor build android --prod
* This project is a legacy project for the Play Store, not using the app
  bundle technology Google prefers.  The latest version of Ionic/Cordova/Gradle
  will automatically generate bundles.  So, there's a choice - either open
  Android Studio and use the Generate APK option, or sign up for Google's
  key protection plan so the jarsigner and other fiddly bits can be used.

== To distribute an Android version, old ==

* cd ~/Ionic4/ble_lock
* update config.xml:
  - change version code
  - ensure id ends with "lock_1"
* verify keystore is present
    keytool -list -keystore ~/Ionic4/ble_lock/ble_lock.keystore
* build a production release:
    ionic cordova build android --prod --release
* navigate to apk:
    cd /Users/Kyon/Ionic4/ble_lock/platforms/android/app/build/outputs/apk/release
* sign apk:
    jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1
        -keystore ~/Ionic4/ble_lock/ble_lock.keystore
        app-release-unsigned.apk ble_1
* zipalign the apk; unfortunately, zipalign is not on the path.  The
  build tools VERSION is currently 28.0.3:
    ~/Library/Android/sdk/build-tools/VERSION/zipalign -v 4
            app-release-unsigned.apk bluetooth-lock-v1.0.XXX.aligned.apk
  or
    C:\Users\Kyon\AppData\Local\Android\Sdk\build-tools\30.0.3\zipalign -v 4
            app-release-unsigned.apk bluetooth-lock-v1.0.XXX.aligned.apk
* a crippled test of the SDK 26+ changes:
    native-run android --app /Users/Kyon/Ionic4/ble_lock/platforms/android/app/build/outputs/apk/release/bluetooth-lock-v1.0.27.aligned.apk --virtual
* Ensure the keystore is backed up in stable offsite storage!
* Ensure your passwords are also backed up offsite!

== To distribute an Android version using PowerShell, not quite so old --

* cd ~/Projects/Tactical Traps/ble_lock
* adjust path
    $env:Path += ";C:\Program Files\Android\Android Studio\jre\bin;C:\Users\Kyon\AppData\Local\Android\Sdk\build-tools\29.0.2"
* update config.xml:
  - change version code
  - ensure id ends with "lock_1"
* verify keystore is present
    keytool -list -keystore ~/Projects/Tactical Traps/ble_lock/ble_lock.keystore
* build a production release:
    ionic cordova build android --prod --release
* navigate to apk:
    cd ~/Projects/Tactical Traps/ble_lock/platforms/android/app/build/outputs/apk/release
* sign apk:
    jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1
        -keystore C:\Users\Kyon\Projects\Tactical-Traps\ble_lock\ble_lock.keystore
        app-release-unsigned.apk ble_1
  Note that jarsigner prepends a '/' to home path, producing broken '/~/...'.
  Use keystore absolute path.
* zipalign the apk
    zipalign -v 4 app-release-unsigned.apk bluetooth-lock-v1.0.XXX.apk
* Ensure the keystore is backed up offsite!


== To distribute an iOS test version ==

* ionic cordova prepare iOS
* Go to Apple developer portal and create a provisioning profile for "iOS development"
  The current profiles are:
    Bluetooth_lock_dev_20190720.mobileprovision
    Bluetooth_Lock_ad_hoc_20190721.mobileprovision
    Bluetooth_Lock_dist_20190732.mobileprovision
  They should have been created with the 7-16 and 7-18 certificates, which have
  been duplicated under precise names containing the certificate ID.
* In Xcode, under General tab, Signing - select import and pull down the new profile
* Make sure the Bluetooth message is in the info.plist file - this appears to be the
  cause of the iPod install issue.
* Connect iPhone.  This process will only work if compiled to a device, right?
* Build and then archive
* Click on Distribute and pick "ad hoc" - yes, Apple tried to confuse everyone here
* Select the ad hoc distribution profile
* As of July 2019, Apple has removed most of the app management capability from
  iTunes.  However, if you drag and drop the IPA file onto the "Fred's iPhone" item
  it may install to the device.
* As of Fall 2020, iTunes has often refused to cooperate and install apps.  This
  was the last simple way to get debug apps to clients without some other service.
  The best replacement discovered is www.diawi.com.  They will hold and forward an
  app from a secure link.
* The iOS development profile is tagged with '2019-07-16'.  For some reason the
  developer portal then assigned the distribution profile the confusing name
  "iOS dev Bluetooth Lock 2019-07-18".  That name, only different in the last digit
  of the date, shows up in all the Xcode prompts.  Take care.  It's saved in the
  document directory with the correct 'dist' tag.

The following was required in v10.x, but no longer appears necessary.  Trying to
add it to the project plist with the config-file directive turned into a joke.
The directive is either broken or screwy.  The Bluetooth plugin may call config-file
from an internal hook; adding a config-file command causes the necessary Bluetooth
message string to vanish from the app plist.  Watch the ios/ios.json file for queued
changes that are wrong.  This required capability may not be important when iOS
11+ defines the base hardware.

    <config-file parent="UIRequiredDeviceCapabilities" target="*-Info.plist">
        <array>
            <string>bluetooth-le</string>
        </array>
    </config-file>



== iPhone screen sizes for creating screenshots ==

CSS     Screen  Devices
width   size
-----   ----    -----------------------
320     4"      iPhone SE, iPod 6
375     4.7"    iPhone 6, 7, 8
375     5.8"    iPhone X, Xs
414     5.5"    iPhone 7 Plus, 8 Plus
414     6.1"    iPhone XR
414     6.5"    iPhone Xs Max

If you include images tagged @2x and @3x, iOS will use those for the high
dpi screens.  So one of the icon_40, icon_40@2x, and icon_40@3x files is
automatically chosen when icon_40 is referenced.

== Android splash screen resources created by cordova-res ==

   800 x  480     drawable-land-hdpi-screen.png
   320 x  200     drawable-land-ldpi-screen.png
   480 x  320     drawable-land-mdpi-screen.png
  1280 x  720     drawable-land-xhdpi-screen.png
  1600 x  960     drawable-land-xxhdpi-screen.png
  1920 x 1280     drawable-land-xxxhdpi-screen.png
   480 x  800     drawable-port-hdpi-screen.png
   200 x  320     drawable-port-ldpi-screen.png
   320 x  480     drawable-port-mdpi-screen.png
   720 x 1280     drawable-port-xhdpi-screen.png
   960 x 1600     drawable-port-xxhdpi-screen.png
  1280 x 1980     drawable-port-xxxhdpi-screen.png

  Cautiously use cordova-res to set the icons and splash images:
    cordova-res ios --skip-config --copy
    cordova-res android --skip-config --copy

  When a platform is removed/added cordova-res may overwrite the images in
  the /resource and /res folders as well as muck with config.xml.  This causes
  git to identify all the images as modified, which is nuisance enough.  Some
  of the generated images are poorly cropped, and others obsolete.  All are
  copied into the platform's project folder.  Until the build step correctly
  sources those files from the /resources folder, the only way to get the
  desired image files into the app is by manually fixing the /res and
  xcassets folders.
