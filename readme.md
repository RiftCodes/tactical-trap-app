# Tactical Traps BLE Lock App

A cross-platform (Ionic/Angular/Capacitor) mobile app for managing Tactical Traps Bluetooth locks.
Supports Android (API 23–35) and iOS, with modern BLE and permissions handling.

---

## Features
- Scan, connect, and control Tactical Traps BLE locks
- Assign custom names to locks (persisted)
- Auto-reconnect to last lock on app restart
- Keep-alive BLE connection (prevents timeouts)
- Responsive, modern UI (Tailwind CSS)
- Android 6+ and iOS support (with correct permissions for each)
- Professional build and deployment workflow

---

## Prerequisites
- **Node.js** (v18+ recommended)
- **npm** (v9+ recommended)
- **Ionic CLI** (`npm install -g @ionic/cli`)
- **Capacitor CLI** (`npm install -g @capacitor/cli`)
- **Android Studio** (for Android builds)
- **Xcode** (for iOS builds, on macOS)
- **Java JDK 11+** (for Android builds)
- **CocoaPods** (for iOS builds)

---

## Setup
1. **Clone the repository:**
   ```sh
   git clone <repo-url>
   cd tactical-trap-app
   ```
2. **Install dependencies:**
   ```sh
   npm install
   ```
3. **Install required plugins:**
   (Most are already in `package.json`, but for reference)
   ```sh
   npm install @ionic-native/ble @ionic-native/bluetooth-le @ionic-native/app-version @ionic-native/android-permissions @capacitor/device @capacitor/preferences
   ```
4. **Install Cordova/Capacitor plugins:**
   ```sh
   npx cap sync
   ```

---

## Running the App

### Web (for UI development only)
```sh
ionic serve
```

### Android
1. **Build the web assets:**
   ```sh
   npm run build
   ```
2. **Sync with Android project:**
   ```sh
   npx cap sync android
   ```
3. **Open in Android Studio:**
   ```sh
   npx cap open android
   ```
   - Let Android Studio update Gradle/plugins if prompted.
   - Build and run on a device or emulator (API 23–35).
4. **Or run directly (for live reload):**
   ```sh
   npm run android:dev -- --host=YOUR_LOCAL_IP --port=8100
   ```

### iOS
1. **Build the web assets:**
   ```sh
   npm run build
   ```
2. **Sync with iOS project:**
   ```sh
   npx cap sync ios
   ```
3. **Open in Xcode:**
   ```sh
   npx cap open ios
   ```
   - Set up signing and provisioning profiles.
   - Build and run on a device or simulator.

---

## BLE & Permissions
- **Android 12+ (API 31+):** Uses `BLUETOOTH_SCAN`, `BLUETOOTH_CONNECT`, `BLUETOOTH_ADVERTISE` (no location required).
- **Android 6–11 (API 23–30):** Uses `BLUETOOTH`, `BLUETOOTH_ADMIN`, and `ACCESS_FINE_LOCATION` (added for compatibility).
- **iOS:** Requires Bluetooth usage description in `Info.plist`.

---

## Customization & UX
- **Lock Names:** Users can assign custom names to each lock. Names are stored in localStorage and persist across sessions.
- **Auto-Reconnect:** The app remembers the last connected lock and will auto-reconnect on app restart if the lock is in range.
- **Keep-Alive:** The app sends periodic pings to the lock to prevent Bluetooth timeouts.
- **UI:** Modern, responsive, and touch-friendly, styled with Tailwind CSS.

---

## Building for Production

### Android (Release Build)
1. **Update version in `package.json` and `android/variables.gradle` if needed.**
2. **Build:**
   ```sh
   npm run build
   npx cap sync android
   npx cap open android
   ```
   - In Android Studio: Build > Generate Signed Bundle/APK.

### iOS (Release Build)
1. **Update version in `package.json`.**
2. **Build:**
   ```sh
   npm run build
   npx cap sync ios
   npx cap open ios
   ```
   - In Xcode: Set up signing, archive, and distribute via TestFlight or Ad Hoc.

---

## Troubleshooting
- **Permissions:** If BLE scan/connect fails, ensure all permissions are granted in system settings.
- **Live Reload:** Use `npm run android:dev` with your local IP for live reload on device.
- **Gradle/SDK Issues:** Open in Android Studio and let it update dependencies as needed.
- **BLE Quirks:** Some locks may require multiple scan attempts due to microcontroller power-saving. The app now retries and pings to keep connections alive.

---

## Legacy & Platform Notes
- **BLE Microcontroller:** The lock's microcontroller may be slow to respond. The app uses generous delays and retries to ensure reliable operation.
- **iOS BLE:** iOS requires a Bluetooth usage description in `Info.plist`. BLE scanning/connection is handled natively.
- **Android Permissions:** The app dynamically requests the correct permissions for each Android version (see manifest for details).
- **Provisioning & Signing:** See below for legacy and advanced build/distribution steps for iOS and Android.

---

## Advanced: iOS & Android Distribution

### iOS
- Use Xcode for signing, archiving, and distributing via TestFlight or Ad Hoc.
- Ensure provisioning profiles and certificates are up to date.
- For manual IPA install, use services like [Diawi](https://www.diawi.com/).
- See legacy notes in previous README versions for detailed certificate and provisioning steps if needed.

### Android
- Use Android Studio to generate signed APKs or App Bundles.
- Keystore files are required for release signing (see `/android/app/ble_lock.keystore`).
- For legacy Cordova builds, see previous README versions for manual signing and zipalign steps.

---

## Resources & Assets
- **Icons & Splash Screens:** Use `cordova-res` to generate platform assets:
  ```sh
  cordova-res ios --skip-config --copy
  cordova-res android --skip-config --copy
  ```
- **Screen Sizes:** See legacy notes for iPhone/Android screen size references.

---

## Contributing
- Fork and PRs welcome!
- Please open issues for bugs or feature requests.

---

## License
Proprietary – Tactical Traps.  
Contact for commercial use or distribution.
