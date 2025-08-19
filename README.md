# 🔒 Tactical Traps BLE Lock Control App

**Professional Bluetooth Low Energy (BLE) Lock Management Application**

[![Flutter](https://img.shields.io/badge/Flutter-3.8.1-blue.svg)](https://flutter.dev/)
[![Dart](https://img.shields.io/badge/Dart-3.8.1-blue.svg)](https://dart.dev/)
[![Platform](https://img.shields.io/badge/Platform-Android%20%7C%20iOS%20%7C%20Web%20%7C%20Windows%20%7C%20macOS%20%7C%20Linux-lightgrey.svg)](https://flutter.dev/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

## 📱 **Product Overview**

The **Tactical Traps BLE Lock Control App** is a professional-grade mobile application designed for managing and controlling Tactical Traps Bluetooth Low Energy (BLE) smart locks. Built with Flutter, it provides a modern, elegant, and user-friendly interface for lock management with advanced security features.

### **🎯 Key Features**
- **🔐 Smart Lock Control**: Lock/unlock locks remotely via Bluetooth
- **📱 Cross-Platform**: Works on Android, iOS, Web, Windows, macOS, and Linux
- **🎨 Modern UI/UX**: iOS 26-style glassmorphism design with dark/light themes
- **⚡ Real-time Updates**: Live lock status monitoring and signal strength tracking
- **🔒 Secure Authentication**: PIN-based security with encrypted storage
- **🔄 Auto-reconnect**: Intelligent connection management and recovery
- **📊 Device Management**: Comprehensive lock information and control panel
- **🌓 Theme Support**: Automatic dark/light mode with system theme detection

## 🏗️ **Architecture & Technology Stack**

### **Frontend Framework**
- **Flutter 3.8.1**: Cross-platform UI framework
- **Dart 3.8.1**: Programming language
- **Material Design 3**: Modern design system

### **State Management**
- **Provider 6.1.1**: State management solution
- **ChangeNotifier**: Reactive state updates
- **Consumer Pattern**: Efficient widget rebuilding

### **Bluetooth & Communication**
- **flutter_blue_plus 1.31.15**: BLE communication library
- **Custom BLE Service**: Proprietary lock communication protocol
- **Real-time Polling**: Smart status updates with battery optimization

### **UI Components & Design**
- **Glassmorphism Effects**: iOS 26-style blur and transparency
- **Custom Design System**: Centralized colors, spacing, and typography
- **Responsive Layout**: Adaptive design for all screen sizes
- **Smooth Animations**: Flutter Animate for fluid transitions

### **Data & Storage**
- **Shared Preferences**: Local data persistence
- **Encrypted Storage**: Secure PIN and device information
- **Device Management**: Custom names and connection history

### **Platform Support**
- **Android**: Native Android 12+ splash screen support
- **iOS**: Dark mode and light mode splash screens
- **Web**: Progressive web app capabilities
- **Desktop**: Windows, macOS, and Linux support

## 🔧 **Technical Specifications**

### **BLE Protocol Implementation**
- **Device Discovery**: Automatic lock scanning and identification
- **Connection Management**: Stable BLE connections with error handling
- **Command Protocol**: 
  - Lock/Unlock commands
  - Status polling
  - Version information
  - Sleep mode activation
- **Data Encryption**: Secure communication with locks

### **Performance Optimizations**
- **Smart Polling**: Reduces battery usage when app is backgrounded
- **Connection Pooling**: Efficient BLE connection management
- **Memory Management**: Proper disposal of resources and timers
- **Background Processing**: Optimized for app lifecycle changes

### **Security Features**
- **PIN Authentication**: Secure lock access control
- **Encrypted Storage**: Local data protection
- **Session Management**: Automatic reconnection with security validation
- **Permission Handling**: Proper Bluetooth and location permissions

## 📱 **App Structure**

### **Core Architecture (Clean Architecture)**
```
lib/
├── core/           # Constants, exceptions, utilities
├── data/           # Data sources, models, repositories
├── domain/         # Business logic, entities, use cases
├── presentation/   # UI layers, pages, widgets, providers
└── services/       # External services (BLE, storage, permissions)
```

### **Key Components**
- **BLE Service**: Low-level Bluetooth communication
- **Device Provider**: Lock state and connection management
- **Theme Provider**: Dark/light mode switching
- **Storage Service**: Local data persistence
- **Permission Handler**: Bluetooth and location permissions

### **UI Widgets**
- **Glass App Bar**: Elegant iOS-style navigation
- **Control Panel**: Lock/unlock controls and status
- **Device Card**: Lock information and management
- **Status Chips**: Real-time lock status display
- **PIN Dialog**: Secure authentication interface
- **Theme Toggle**: Dark/light mode switcher

## 🚀 **Installation & Setup**

### **Prerequisites**
- Flutter SDK 3.8.1 or higher
- Dart SDK 3.8.1 or higher
- Android Studio / VS Code
- Android SDK (for Android development)
- Xcode (for iOS development)

### **Installation Steps**
1. **Clone Repository**
   ```bash
   git clone https://github.com/RiftCodes/tactical-trap-app.git
   cd tactical-trap-app
   ```

2. **Install Dependencies**
   ```bash
   flutter pub get
   ```

3. **Generate Assets**
   ```bash
   # Generate app icons
   flutter pub run flutter_launcher_icons:main
   
   # Generate splash screens
   flutter pub run flutter_native_splash:create
   ```

4. **Run Application**
   ```bash
   # Debug mode
   flutter run
   
   # Release build
   flutter build apk --release
   ```

### **Build Scripts**
- **Windows**: `build_release.bat`
- **Linux/macOS**: `build_release.sh`

## 🔑 **Configuration**

### **App Icons & Splash Screen**
- **App Icon**: `assets/icons/square.png` (1024x1024)
- **Splash Screen**: `assets/icons/square.png` with theme-aware backgrounds
- **Light Theme**: White background (`#FFFFFF`)
- **Dark Theme**: Dark background (`#1A1A1A`)

### **Android Configuration**
- **Package Name**: `com.tacticaltraps.bluetooth.lock_2`
- **Min SDK**: Android 5.0 (API 21)
- **Target SDK**: Android 14 (API 34)
- **Keystore**: `android/app/ble_lock.keystore`

### **iOS Configuration**
- **Bundle ID**: `com.tacticaltraps.tacticalTrapFlutter`
- **Deployment Target**: iOS 12.0+
- **Permissions**: Bluetooth, Location, Notifications

## 📊 **Features & Functionality**

### **Lock Management**
- **Device Discovery**: Scan and find nearby BLE locks
- **Connection**: Establish secure Bluetooth connections
- **Authentication**: PIN-based lock access control
- **Control**: Lock/unlock operations with real-time feedback
- **Status Monitoring**: Live lock state and battery information

### **Device Information**
- **Lock Details**: Name, ID, serial number, version
- **Signal Strength**: Real-time RSSI monitoring
- **Connection Status**: Stable connection management
- **Custom Names**: User-defined lock identifiers

### **User Experience**
- **Auto-reconnect**: Intelligent connection recovery
- **Theme Switching**: Dark/light mode with smooth transitions
- **Responsive Design**: Optimized for all screen sizes
- **Haptic Feedback**: Tactile response for user actions
- **Error Handling**: User-friendly error messages and recovery

### **Advanced Features**
- **Background Processing**: Optimized battery usage
- **Permission Management**: Automatic permission requests
- **Data Persistence**: User preferences and device history
- **Multi-language Support**: Ready for internationalization

## 🔒 **Security & Privacy**

### **Authentication**
- **PIN Storage**: Encrypted local storage
- **Session Management**: Secure connection handling
- **Permission Control**: Granular access permissions

### **Data Protection**
- **Local Storage**: No cloud data transmission
- **Encryption**: Secure PIN and sensitive data storage
- **Privacy**: Minimal data collection and processing

## 📱 **Platform Support**

### **Mobile Platforms**
- **Android**: Full BLE support with native splash screens
- **iOS**: Optimized for iOS with dark mode support

### **Desktop Platforms**
- **Windows**: Native Windows application
- **macOS**: Native macOS application
- **Linux**: Native Linux application

### **Web Platform**
- **Progressive Web App**: Installable web application
- **Responsive Design**: Mobile-first web experience

## 🧪 **Testing & Quality Assurance**

### **Testing Framework**
- **Unit Tests**: Core business logic testing
- **Widget Tests**: UI component testing
- **Integration Tests**: End-to-end functionality testing

### **Code Quality**
- **Flutter Lints**: Code style and best practices
- **Analysis Options**: Custom linting rules
- **Documentation**: Comprehensive code documentation

## 📈 **Performance & Optimization**

### **Memory Management**
- **Resource Disposal**: Proper cleanup of BLE connections
- **Widget Optimization**: Efficient widget rebuilding
- **Background Processing**: Minimal resource usage when inactive

### **Battery Optimization**
- **Smart Polling**: Reduced BLE activity when backgrounded
- **Connection Management**: Efficient connection handling
- **Sleep Mode**: Automatic power saving features

## 🚀 **Deployment & Distribution**

### **Android Release**
- **APK Generation**: `flutter build apk --release`
- **Keystore Signing**: Production-ready signing
- **Play Store Ready**: Optimized for Google Play Store

### **iOS Release**
- **IPA Generation**: `flutter build ios --release`
- **App Store Ready**: Optimized for Apple App Store

### **Desktop Release**
- **Windows**: `flutter build windows --release`
- **macOS**: `flutter build macos --release`
- **Linux**: `flutter build linux --release`

## 📚 **Documentation & Resources**

### **Technical Documentation**
- **BLE Protocol**: KR-S80 Bluetooth Lock Communication Protocol
- **User Manual**: E104-BT52 User Manual
- **API Reference**: Flutter and Dart documentation

### **Development Resources**
- **Flutter Documentation**: [flutter.dev](https://flutter.dev/)
- **Dart Documentation**: [dart.dev](https://dart.dev/)
- **Provider Package**: [pub.dev](https://pub.dev/packages/provider)
- **Flutter Blue Plus**: [pub.dev](https://pub.dev/packages/flutter_blue_plus)

## 🤝 **Contributing**

### **Development Setup**
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests and documentation
5. Submit a pull request

### **Code Standards**
- Follow Flutter best practices
- Use meaningful commit messages
- Add comprehensive documentation
- Ensure all tests pass

## 📄 **License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 **Support & Contact**

### **Technical Support**
- **Issues**: [GitHub Issues](https://github.com/RiftCodes/tactical-trap-app/issues)
- **Discussions**: [GitHub Discussions](https://github.com/RiftCodes/tactical-trap-app/discussions)

### **Product Support**
- **Tactical Traps**: Official product support
- **Documentation**: User manuals and technical guides

## 🔄 **Version History**

### **Current Version**: 1.5.1+2
- **Major Features**: Complete Flutter migration
- **UI/UX**: Modern glassmorphism design
- **Performance**: Optimized BLE communication
- **Platforms**: Full cross-platform support

### **Previous Versions**
- **v1.0.0**: Initial Android release
- **v1.5.0**: Flutter migration started
- **v1.5.1**: Complete Flutter implementation

---

**Built with ❤️ using Flutter for Tactical Traps**

*Professional BLE Lock Management Made Simple*
