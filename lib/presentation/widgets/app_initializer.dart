import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

import '../pages/home_page.dart';
import '../providers/auth_provider.dart';
import '../providers/ble_provider.dart';
import '../providers/device_provider.dart';
import '../providers/language_provider.dart';
import '../providers/theme_provider.dart';
import '../style/design_system.dart';
import 'auth_overlay.dart';
import 'glass_background.dart';

/// Centralized app initializer that manages the startup sequence
class AppInitializer extends StatefulWidget {
  const AppInitializer({super.key});

  @override
  State<AppInitializer> createState() => _AppInitializerState();
}

class _AppInitializerState extends State<AppInitializer> {
  bool _isInitializing = true;
  String _initializationStatus = 'Starting app...';
  String? _errorMessage;

  @override
  void initState() {
    super.initState();
    _initializeApp();
  }

  Future<void> _initializeApp() async {
    try {
      setState(() {
        _initializationStatus = 'Initializing themes...';
      });

      // Initialize theme provider first (synchronous)
      context.read<ThemeProvider>();
      await Future.delayed(const Duration(milliseconds: 100));

      setState(() {
        _initializationStatus = 'Loading language settings...';
      });

      // Initialize language provider
      final languageProvider = context.read<LanguageProvider>();
      await languageProvider.initialize();

      setState(() {
        _initializationStatus = 'Setting up authentication...';
      });

      // Initialize auth provider
      final authProvider = context.read<AuthProvider>();
      await authProvider.initialize();

      setState(() {
        _initializationStatus = 'Loading device settings...';
      });

      // Initialize device provider
      final deviceProvider = context.read<DeviceProvider>();
      await deviceProvider.initialize();

      setState(() {
        _initializationStatus = 'Initializing Bluetooth...';
      });

      // Initialize BLE provider last
      final bleProvider = context.read<BleProvider>();
      await bleProvider.initialize();

      // Small delay to ensure everything is settled
      await Future.delayed(const Duration(milliseconds: 300));

      setState(() {
        _isInitializing = false;
      });
    } catch (e) {
      setState(() {
        _errorMessage = 'Initialization failed: $e';
        _isInitializing = false;
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    if (_errorMessage != null) {
      return _buildErrorScreen();
    }

    if (_isInitializing) {
      return _buildLoadingScreen();
    }

    // App is fully initialized, show the main interface
    return AuthOverlay(child: const HomePage());
  }

  Widget _buildLoadingScreen() {
    final isDark = Theme.of(context).brightness == Brightness.dark;

    return Scaffold(
      body: Stack(
        children: [
          const GlassBackground(),
          Center(
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                // App logo/icon
                Container(
                  width: DS.xl * 3,
                  height: DS.xl * 3,
                  decoration: BoxDecoration(
                    color: DS.brandPrimary,
                    shape: BoxShape.circle,
                    boxShadow: [
                      BoxShadow(
                        color: DS.brandPrimary.withOpacity(0.3),
                        blurRadius: 20,
                        offset: const Offset(0, 8),
                      ),
                    ],
                  ),
                  child: const Icon(
                    Icons.security_rounded,
                    color: Colors.white,
                    size: 48,
                  ),
                ),

                SizedBox(height: DS.xl),

                // App title
                Text(
                  'Tactical Traps',
                  style: TextStyle(
                    fontSize: 28,
                    fontWeight: FontWeight.bold,
                    color: isDark ? Colors.white : DS.brandDark,
                  ),
                ),

                SizedBox(height: DS.l),

                // Loading indicator
                SizedBox(
                  width: 32,
                  height: 32,
                  child: CircularProgressIndicator(
                    strokeWidth: 3,
                    valueColor: AlwaysStoppedAnimation<Color>(DS.brandPrimary),
                  ),
                ),

                SizedBox(height: DS.m),

                // Status text
                Text(
                  _initializationStatus,
                  style: TextStyle(
                    fontSize: 16,
                    color: isDark ? Colors.grey[300] : Colors.grey[600],
                  ),
                  textAlign: TextAlign.center,
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildErrorScreen() {
    final isDark = Theme.of(context).brightness == Brightness.dark;

    return Scaffold(
      body: Stack(
        children: [
          const GlassBackground(),
          Center(
            child: Padding(
              padding: EdgeInsets.all(DS.xl),
              child: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Icon(Icons.error_outline, size: 64, color: DS.error),

                  SizedBox(height: DS.l),

                  Text(
                    'Initialization Error',
                    style: TextStyle(
                      fontSize: 24,
                      fontWeight: FontWeight.bold,
                      color: isDark ? Colors.white : DS.brandDark,
                    ),
                  ),

                  SizedBox(height: DS.m),

                  Text(
                    _errorMessage!,
                    style: TextStyle(
                      fontSize: 16,
                      color: isDark ? Colors.grey[300] : Colors.grey[600],
                    ),
                    textAlign: TextAlign.center,
                  ),

                  SizedBox(height: DS.xl),

                  ElevatedButton(
                    onPressed: () {
                      setState(() {
                        _isInitializing = true;
                        _errorMessage = null;
                        _initializationStatus = 'Starting app...';
                      });
                      _initializeApp();
                    },
                    style: ElevatedButton.styleFrom(
                      backgroundColor: DS.brandPrimary,
                      foregroundColor: Colors.white,
                      padding: EdgeInsets.symmetric(
                        horizontal: DS.xl,
                        vertical: DS.m,
                      ),
                    ),
                    child: const Text('Retry'),
                  ),
                ],
              ),
            ),
          ),
        ],
      ),
    );
  }
}
