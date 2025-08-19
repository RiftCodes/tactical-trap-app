#!/bin/bash

echo "========================================"
echo "    Tactical Trap - Release Build"
echo "========================================"
echo

echo "Cleaning previous builds..."
flutter clean

echo "Getting dependencies..."
flutter pub get

echo "Building release APK..."
flutter build apk --release

echo
echo "========================================"
echo "    Build Complete!"
echo "========================================"
echo
echo "Release APK location:"
echo "build/app/outputs/flutter-apk/app-release.apk"
echo
echo "APK size:"
ls -lh "build/app/outputs/flutter-apk/app-release.apk"
echo
echo "Ready for publishing to Google Play Store!"
echo
