#!/bin/bash

echo "========================================"
echo "Tactical Traps Flutter App - Production Build"
echo "========================================"
echo

echo "[1/5] Cleaning previous builds..."
flutter clean
echo

echo "[2/5] Getting dependencies..."
flutter pub get
echo

echo "[3/5] Building Release APK..."
flutter build apk --release
if [ $? -ne 0 ]; then
    echo "ERROR: APK build failed!"
    exit 1
fi
echo "✅ APK built successfully!"
echo

echo "[4/5] Building Release App Bundle (AAB)..."
flutter build appbundle --release
if [ $? -ne 0 ]; then
    echo "ERROR: AAB build failed!"
    exit 1
fi
echo "✅ AAB built successfully!"
echo

echo "[5/5] Build Summary:"
echo
echo "📱 APK Location: build/app/outputs/flutter-apk/app-release.apk"
echo "📦 AAB Location: build/app/outputs/bundle/release/app-release.aab"
echo
echo "🎯 APK Size:"
ls -lh "build/app/outputs/flutter-apk/app-release.apk"
echo
echo "🎯 AAB Size:"
ls -lh "build/app/outputs/bundle/release/app-release.aab"
echo

echo "========================================"
echo "🎉 Production Build Complete!"
echo "========================================"
echo
echo "Next steps:"
echo "1. Test the APK on a device"
echo "2. Upload AAB to Google Play Console"
echo "3. Submit for review"
echo
