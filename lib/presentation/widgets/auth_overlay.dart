import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

import '../providers/auth_provider.dart';
import '../providers/ble_provider.dart';
import '../style/design_system.dart';

class AuthOverlay extends StatefulWidget {
  final Widget child;

  const AuthOverlay({super.key, required this.child});

  @override
  State<AuthOverlay> createState() => _AuthOverlayState();
}

class _AuthOverlayState extends State<AuthOverlay>
    with TickerProviderStateMixin, WidgetsBindingObserver {
  late AnimationController _fadeController;
  late AnimationController _pulseController;
  late Animation<double> _fadeAnimation;
  late Animation<double> _pulseAnimation;

  @override
  void initState() {
    super.initState();
    WidgetsBinding.instance.addObserver(this);

    _fadeController = AnimationController(
      duration: const Duration(milliseconds: 300),
      vsync: this,
    );

    _pulseController = AnimationController(
      duration: const Duration(milliseconds: 1500),
      vsync: this,
    );

    _fadeAnimation = Tween<double>(begin: 0.0, end: 1.0).animate(
      CurvedAnimation(parent: _fadeController, curve: Curves.easeInOut),
    );

    _pulseAnimation = Tween<double>(begin: 0.8, end: 1.2).animate(
      CurvedAnimation(parent: _pulseController, curve: Curves.easeInOut),
    );

    _fadeController.forward();
    _pulseController.repeat(reverse: true);
  }

  @override
  void dispose() {
    WidgetsBinding.instance.removeObserver(this);
    _fadeController.dispose();
    _pulseController.dispose();
    super.dispose();
  }

  @override
  void didChangeAppLifecycleState(AppLifecycleState state) {
    super.didChangeAppLifecycleState(state);
    final authProvider = Provider.of<AuthProvider>(context, listen: false);

    if (state == AppLifecycleState.paused) {
      // App went to background - reset the logout flag
      print('AuthOverlay: App went to background, resetting logout flag');
      authProvider.resetBackgroundLogoutFlag();
    } else if (state == AppLifecycleState.resumed) {
      // App resumed from background - require authentication
      if (authProvider.isPinProtectionEnabled) {
        print(
          'AuthOverlay: App resumed from background, requiring re-authentication',
        );
        authProvider.logout(); // This will trigger re-authentication
      }
    }
  }

  @override
  Widget build(BuildContext context) {
    return Consumer<AuthProvider>(
      builder: (context, authProvider, child) {
        print(
          'AuthOverlay: isPinProtectionEnabled=${authProvider.isPinProtectionEnabled}, isAuthenticated=${authProvider.isAuthenticated}, isAuthenticating=${authProvider.isAuthenticating}',
        );

        // Only show overlay if PIN protection is enabled AND user is not authenticated
        if (authProvider.isPinProtectionEnabled &&
            !authProvider.isAuthenticated) {
          print('AuthOverlay: Showing authentication overlay');
          // Pause BLE operations when overlay is shown
          _pauseAppOperations(context);
          // Automatically trigger authentication when overlay appears
          WidgetsBinding.instance.addPostFrameCallback((_) {
            if (!authProvider.isAuthenticating) {
              print('AuthOverlay: Auto-triggering authentication');
              _handleAuthentication(context, authProvider);
            }
          });
          return Stack(children: [widget.child, _buildAuthOverlay(context)]);
        }

        print('AuthOverlay: Hiding authentication overlay');
        // Resume BLE operations when overlay is hidden
        _resumeAppOperations(context);
        return widget.child;
      },
    );
  }

  Widget _buildAuthOverlay(BuildContext context) {
    final isDark = Theme.of(context).brightness == Brightness.dark;

    return AnimatedBuilder(
      animation: _fadeAnimation,
      builder: (context, child) {
        return Opacity(
          opacity: _fadeAnimation.value,
          child: Container(
            color: isDark ? Colors.black87 : Colors.white.withOpacity(0.87),
            child: Center(child: _buildAuthContent(context, isDark)),
          ),
        );
      },
    );
  }

  Widget _buildAuthContent(BuildContext context, bool isDark) {
    final authProvider = Provider.of<AuthProvider>(context);

    return Column(
      mainAxisAlignment: MainAxisAlignment.center,
      children: [
        // Animated lock icon
        AnimatedBuilder(
          animation: _pulseAnimation,
          builder: (context, child) {
            return Transform.scale(
              scale: _pulseAnimation.value,
              child: Container(
                width: DS.xl * 2,
                height: DS.xl * 2,
                decoration: BoxDecoration(
                  color: DS.brandRed,
                  shape: BoxShape.circle,
                ),
                child: Icon(
                  Icons.lock_rounded,
                  color: Colors.white,
                  size: DS.xl,
                ),
              ),
            );
          },
        ),

        SizedBox(height: DS.l),

        // Title
        Text(
          'Tactical Traps',
          style: TextStyle(
            fontSize: 24,
            fontWeight: FontWeight.bold,
            color: isDark ? Colors.white : DS.brandDark,
            decoration: TextDecoration.none, // Remove underline
          ),
        ),

        SizedBox(height: DS.s),

        // Subtitle
        Text(
          'Secure Access Required',
          style: TextStyle(
            fontSize: 16,
            color: isDark ? Colors.grey[300] : Colors.grey[600],
            decoration: TextDecoration.none, // Remove underline
          ),
        ),

        SizedBox(height: DS.xl),

        // Authentication Button
        _buildAuthButton(context, authProvider, isDark),
      ],
    );
  }

  Widget _buildAuthButton(
    BuildContext context,
    AuthProvider authProvider,
    bool isDark,
  ) {
    return GestureDetector(
      onTap: () {
        print('AuthOverlay: GestureDetector tapped!');
        if (!authProvider.isAuthenticating) {
          print(
            'AuthOverlay: Button pressed - isAuthenticating: ${authProvider.isAuthenticating}',
          );
          _handleAuthentication(context, authProvider);
        }
      },
      child: Container(
        padding: EdgeInsets.symmetric(horizontal: DS.xl, vertical: DS.m),
        decoration: BoxDecoration(
          color: DS.brandRed,
          borderRadius: BorderRadius.circular(DS.rMedium),
          boxShadow: [
            BoxShadow(
              color: DS.brandRed.withOpacity(0.3),
              blurRadius: 8,
              offset: Offset(0, 4),
            ),
          ],
        ),
        child: Row(
          mainAxisSize: MainAxisSize.min,
          children: [
            Icon(Icons.security_rounded, size: 20, color: Colors.white),
            SizedBox(width: DS.s),
            Text(
              authProvider.isAuthenticating
                  ? 'Authenticating...'
                  : 'Unlock App',
              style: TextStyle(
                fontSize: 16,
                fontWeight: FontWeight.w600,
                color: Colors.white,
                decoration: TextDecoration.none, // Remove underline
              ),
            ),
          ],
        ),
      ),
    );
  }

  Future<void> _handleAuthentication(
    BuildContext context,
    AuthProvider authProvider,
  ) async {
    print('AuthOverlay: Authentication button pressed');
    try {
      print('AuthOverlay: Calling authProvider.authenticate()');
      await authProvider.authenticate();
      print('AuthOverlay: Authentication completed successfully');
    } catch (e) {
      print('AuthOverlay: Authentication error: $e');
      // Handle authentication error
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
          SnackBar(
            content: Text('Authentication failed. Please try again.'),
            backgroundColor: DS.brandRed,
          ),
        );
      }
    }
  }

  /// Pause app operations when authentication overlay is shown
  void _pauseAppOperations(BuildContext context) {
    try {
      // Stop BLE scanning and operations
      final bleProvider = Provider.of<BleProvider>(context, listen: false);
      if (bleProvider.isScanning) {
        print('AuthOverlay: Stopping BLE scan during authentication');
        bleProvider.stopScan();
      }
    } catch (e) {
      print('AuthOverlay: Error pausing app operations: $e');
    }
  }

  /// Resume app operations when authentication overlay is hidden
  void _resumeAppOperations(BuildContext context) {
    try {
      // Resume BLE operations if needed
      final bleProvider = Provider.of<BleProvider>(context, listen: false);
      if (!bleProvider.isScanning && bleProvider.isInitialized) {
        print('AuthOverlay: Resuming BLE operations after authentication');
        // Don't auto-start scan, let the app decide when to scan
      }
    } catch (e) {
      print('AuthOverlay: Error resuming app operations: $e');
    }
  }
}
