@echo off
echo ========================================
echo Tactical Traps Flutter App - Production Build
echo ========================================
echo.

echo [1/5] Cleaning previous builds...
flutter clean
echo.

echo [2/5] Getting dependencies...
flutter pub get
echo.

echo [3/5] Building Release APK...
flutter build apk --release
if %errorlevel% neq 0 (
    echo ERROR: APK build failed!
    pause
    exit /b 1
)
echo ✅ APK built successfully!
echo.

echo [4/5] Building Release App Bundle (AAB)...
flutter build appbundle --release
if %errorlevel% neq 0 (
    echo ERROR: AAB build failed!
    pause
    exit /b 1
)
echo ✅ AAB built successfully!
echo.

echo [5/5] Build Summary:
echo.
echo 📱 APK Location: build\app\outputs\flutter-apk\app-release.apk
echo 📦 AAB Location: build\app\outputs\bundle\release\app-release.aab
echo.
echo 🎯 APK Size: 
dir "build\app\outputs\flutter-apk\app-release.apk" | find "app-release.apk"
echo.
echo 🎯 AAB Size:
dir "build\app\outputs\bundle\release\app-release.aab" | find "app-release.aab"
echo.

echo ========================================
echo 🎉 Production Build Complete!
echo ========================================
echo.
echo Next steps:
echo 1. Test the APK on a device
echo 2. Upload AAB to Google Play Console
echo 3. Submit for review
echo.
pause
