# 🚀 Tactical Traps BLE Lock Control App

**Flutter Version 1.5.1** - Controls a Bluetooth Low Energy lock

## 📱 App Information

- **App Name**: Tactical Traps
- **Version**: 1.5.1
- **Build Number**: 2
- **Package ID**: `com.tacticaltraps.bluetooth.lock_2`
- **Description**: Controls a Bluetooth Low Energy lock
- **Company**: Tactical Traps
- **Website**: https://tacticaltraps.com/

## 🔧 Features

### ✅ Core Functionality
- **Bluetooth Low Energy (BLE) Communication**
- **Lock/Unlock Commands** with PIN verification
- **Device Discovery & Scanning** (Tactical Traps locks only)
- **Auto-reconnection** to last connected device
- **Device History & Management**
- **PIN Storage & Security**

### 🎨 User Interface
- **Material Design 3** with Tactical Traps branding
- **Responsive Design** for all screen sizes
- **Dark/Light Theme** support
- **Loading States** and error handling
- **Intuitive Controls** for lock management

### 🔐 Security Features
- **PIN Verification** required for lock access
- **Secure PIN Storage** using device-specific encryption
- **Session Management** with auto-logout
- **Permission Handling** for Bluetooth and Location

## 🏗️ Architecture

### **Clean Architecture Pattern**
```
lib/
├── core/           # Core utilities, constants, and models
├── data/           # Data layer (models, repositories)
├── domain/         # Business logic and use cases
├── presentation/   # UI layer (pages, widgets, providers)
└── services/       # External services (BLE, storage)
```

### **State Management**
- **Provider Pattern** for state management
- **Stream-based** BLE communication
- **Reactive UI** updates

### **BLE Protocol Implementation**
- **Tactical Traps Protocol** support
- **Command Structure**: `F5 [CMD] [LEN] [DATA] [5F] [CHECKSUM]`
- **Response Handling** with timeout management
- **Checksum Validation** for data integrity

## 🚀 Getting Started

### **Prerequisites**
- Flutter SDK 3.8.1+
- Android Studio / VS Code
- Android SDK (API 21+)
- iOS Development Tools (for iOS builds)

### **Installation**
```bash
# Clone the repository
git clone <repository-url>
cd tactical_trap_flutter

# Install dependencies
flutter pub get

# Run the app
flutter run
```

### **Building for Production**

#### **Android APK**
```bash
# Debug build
flutter build apk --debug

# Release build
flutter build apk --release

# Split APKs for different architectures
flutter build apk --split-per-abi --release
```

#### **Android App Bundle (AAB)**
```bash
# Generate app bundle for Play Store
flutter build appbundle --release
```

#### **iOS**
```bash
# Build for iOS
flutter build ios --release
```

## 🔑 Keystore Configuration

### **Android Keystore Setup**
1. **Generate Keystore**:
   ```bash
   keytool -genkey -v -keystore tactical-traps-key.keystore -alias tactical-traps -keyalg RSA -keysize 2048 -validity 10000
   ```

2. **Configure in `android/app/build.gradle.kts`**:
   ```kotlin
   android {
       signingConfigs {
           create("release") {
               storeFile = file("tactical-traps-key.keystore")
               storePassword = "your-store-password"
               keyAlias = "tactical-traps"
               keyPassword = "your-key-password"
           }
       }
       
       buildTypes {
           release {
               signingConfig = signingConfigs.getByName("release")
               minifyEnabled = true
               proguardFiles(getDefaultProguardFile("proguard-android-optimize.txt"), "proguard-rules.pro")
           }
       }
   }
   ```

3. **Add keystore file** to `android/app/` directory

### **iOS Code Signing**
1. **Configure in Xcode**:
   - Set Bundle Identifier: `com.tacticaltraps.bluetooth.lock2`
   - Configure Team and Provisioning Profile
   - Set version and build number

## 📱 App Icons & Splash Screen

### **Generated Assets**
- **App Icons**: Multiple sizes for Android, iOS, Web, Windows, macOS
- **Splash Screen**: Native splash with Tactical Traps branding
- **Dark/Light Mode**: Support for both themes

### **Customization**
- **Logo Source**: `assets/images/logo.png`
- **Icon Generation**: Uses `flutter_launcher_icons`
- **Splash Generation**: Uses `flutter_native_splash`

## 🔧 Configuration Files

### **pubspec.yaml**
- **Version**: 1.5.1+2
- **Dependencies**: Production-ready packages
- **Assets**: Images and icons configuration

### **Android Configuration**
- **Application ID**: `com.tacticaltraps.bluetooth.lock_2`
- **Version Code**: 2
- **Version Name**: 1.5.1
- **Min SDK**: 21 (Android 5.0+)

### **iOS Configuration**
- **Bundle ID**: `com.tacticaltraps.bluetooth.lock2`
- **Version**: 1.5.1
- **Build**: 2

## 🚀 Deployment

### **Google Play Store**
1. **Build AAB**: `flutter build appbundle --release`
2. **Upload to Play Console**
3. **Configure Store Listing**
4. **Submit for Review**

### **Apple App Store**
1. **Build iOS**: `flutter build ios --release`
2. **Archive in Xcode**
3. **Upload to App Store Connect**
4. **Submit for Review**

### **Direct Distribution**
1. **Build APK**: `flutter build apk --release`
2. **Sign with production keystore**
3. **Distribute via direct download**

## 🔍 Testing

### **Unit Tests**
```bash
flutter test
```

### **Integration Tests**
```bash
flutter test integration_test/
```

### **Device Testing**
- **Android**: Test on multiple API levels (21+)
- **iOS**: Test on different iOS versions
- **BLE Testing**: Test with actual Tactical Traps locks

## 📊 Performance

### **Optimizations**
- **Minified Release Builds**
- **ProGuard Rules** for Android
- **Asset Optimization**
- **Memory Management**

### **Monitoring**
- **Performance Profiling**
- **Memory Usage Tracking**
- **Battery Usage Optimization**

## 🔒 Security

### **Data Protection**
- **PIN Encryption** using device-specific keys
- **Secure Storage** using Flutter's secure storage
- **Permission Handling** for sensitive features

### **Network Security**
- **BLE Communication** encryption
- **No Internet Access** required
- **Local Data Storage** only

## 📞 Support

### **Technical Support**
- **Email**: support@tacticaltraps.com
- **Website**: https://tacticaltraps.com/
- **Documentation**: This README

### **User Support**
- **FAQ**: www.tacticaltraps.com/faqs/
- **User Manual**: Available in app settings

## 📄 License

**Proprietary Software** - Tactical Traps
© 2024 Tactical Traps. All rights reserved.

## 🚀 Version History

### **v1.5.1 (Current)**
- ✅ Complete Flutter migration from Angular
- ✅ BLE protocol implementation
- ✅ PIN verification system
- ✅ Production-ready configuration
- ✅ App icons and splash screen
- ✅ Keystore setup for publishing

### **v1.0.0 (Original Angular)**
- ✅ Initial Angular + Ionic + Capacitor app
- ✅ Basic BLE functionality
- ✅ Lock/unlock commands

---

**Built with ❤️ by Tactical Traps Team**
