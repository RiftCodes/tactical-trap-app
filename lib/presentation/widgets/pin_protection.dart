import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:shared_preferences/shared_preferences.dart';

import '../style/design_system.dart';

/// App authentication protection widget to prevent unauthorized access
class PinProtection extends StatefulWidget {
  final Widget child;
  final VoidCallback? onAuthVerified;

  const PinProtection({super.key, required this.child, this.onAuthVerified});

  @override
  State<PinProtection> createState() => _PinProtectionState();
}

class _PinProtectionState extends State<PinProtection>
    with WidgetsBindingObserver {
  bool _isAuthVerified = false;
  bool _isLoading = true;
  bool _isAuthEnabled = false;
  String _enteredPin = '';
  String? _storedPin;

  @override
  void initState() {
    super.initState();
    WidgetsBinding.instance.addObserver(this);
    _checkAuthSettings();
  }

  @override
  void dispose() {
    WidgetsBinding.instance.removeObserver(this);
    super.dispose();
  }

  @override
  void didChangeAppLifecycleState(AppLifecycleState state) {
    super.didChangeAppLifecycleState(state);

    // Require authentication when app resumes from background
    if (state == AppLifecycleState.resumed &&
        _isAuthVerified &&
        _isAuthEnabled) {
      setState(() {
        _isAuthVerified = false;
      });
    }
  }

  Future<void> _checkAuthSettings() async {
    final prefs = await SharedPreferences.getInstance();
    _isAuthEnabled = prefs.getBool('app_auth_enabled') ?? false;
    _storedPin = prefs.getString('app_pin');

    setState(() {
      _isLoading = false;
      // If auth is not enabled, allow access
      if (!_isAuthEnabled) {
        _isAuthVerified = true;
      }
    });
  }

  Future<void> _verifyPin() async {
    if (_enteredPin == _storedPin) {
      setState(() {
        _isAuthVerified = true;
      });
      widget.onAuthVerified?.call();
    } else {
      HapticFeedback.heavyImpact();
      setState(() {
        _enteredPin = '';
      });
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(
          content: Text('Incorrect PIN. Please try again.'),
          backgroundColor: DS.error,
        ),
      );
    }
  }

  Future<void> _setNewPin() async {
    if (_enteredPin.length >= 4) {
      final prefs = await SharedPreferences.getInstance();
      await prefs.setString('app_pin', _enteredPin);
      await prefs.setBool('app_auth_enabled', true);

      setState(() {
        _storedPin = _enteredPin;
        _isAuthEnabled = true;
        _isAuthVerified = true;
      });

      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(
          content: Text('PIN set successfully!'),
          backgroundColor: DS.success,
        ),
      );
    }
  }

  @override
  Widget build(BuildContext context) {
    if (_isLoading) {
      return Scaffold(body: Center(child: CircularProgressIndicator()));
    }

    if (_isAuthVerified) {
      return widget.child;
    }

    return _buildAuthScreen();
  }

  Widget _buildAuthScreen() {
    final isDark = Theme.of(context).brightness == Brightness.dark;
    final isNewPin = _storedPin == null || _storedPin!.isEmpty;

    return Scaffold(
      backgroundColor: isDark ? Colors.black : Colors.white,
      body: SafeArea(
        child: Padding(
          padding: EdgeInsets.all(DS.l),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              // App logo/icon
              Container(
                width: 80,
                height: 80,
                decoration: BoxDecoration(
                  color: DS.brandRed,
                  borderRadius: BorderRadius.circular(40),
                ),
                child: Icon(Icons.lock, color: Colors.white, size: 40),
              ),

              SizedBox(height: DS.xl),

              // Title
              Text(
                isNewPin ? 'Set App PIN' : 'Enter PIN',
                style: TextStyle(
                  fontSize: DS.textXL,
                  fontWeight: FontWeight.w600,
                  color: isDark ? Colors.white : Colors.black87,
                ),
              ),

              SizedBox(height: DS.s),

              // Subtitle
              Text(
                isNewPin
                    ? 'Create a PIN to secure your locks'
                    : 'Enter your PIN to access the app',
                style: TextStyle(
                  fontSize: DS.textSM,
                  color: isDark ? Colors.grey[400] : Colors.grey[600],
                ),
                textAlign: TextAlign.center,
              ),

              SizedBox(height: DS.xl),

              // PIN dots
              Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: List.generate(6, (index) {
                  final isFilled = index < _enteredPin.length;
                  return Container(
                    margin: EdgeInsets.symmetric(horizontal: DS.s),
                    width: 16,
                    height: 16,
                    decoration: BoxDecoration(
                      color: isFilled ? DS.brandRed : Colors.transparent,
                      shape: BoxShape.circle,
                      border: Border.all(
                        color: isFilled ? DS.brandRed : Colors.grey[400]!,
                        width: 2,
                      ),
                    ),
                  );
                }),
              ),

              SizedBox(height: DS.xl * 2),

              // Number pad
              _buildNumberPad(),

              SizedBox(height: DS.l),

              // Action button
              if (_enteredPin.length >= 4)
                Container(
                  width: double.infinity,
                  height: 50,
                  decoration: BoxDecoration(
                    color: DS.brandRed,
                    borderRadius: BorderRadius.circular(8),
                  ),
                  child: Material(
                    color: Colors.transparent,
                    child: InkWell(
                      onTap: isNewPin ? _setNewPin : _verifyPin,
                      borderRadius: BorderRadius.circular(8),
                      child: Center(
                        child: Text(
                          isNewPin ? 'SET PIN' : 'VERIFY',
                          style: TextStyle(
                            color: Colors.white,
                            fontSize: DS.textSM,
                            fontWeight: FontWeight.w600,
                          ),
                        ),
                      ),
                    ),
                  ),
                ),

              SizedBox(height: DS.m),

              // Skip button (only show if no PIN is set)
              if (isNewPin)
                TextButton(
                  onPressed: () {
                    setState(() {
                      _isAuthVerified = true;
                    });
                  },
                  child: Text(
                    'Skip for now',
                    style: TextStyle(
                      color: Colors.grey[600],
                      fontSize: DS.textSM,
                    ),
                  ),
                ),
            ],
          ),
        ),
      ),
    );
  }

  Widget _buildNumberPad() {
    final isDark = Theme.of(context).brightness == Brightness.dark;

    return Column(
      children: [
        // Row 1: 1, 2, 3
        Row(
          mainAxisAlignment: MainAxisAlignment.spaceEvenly,
          children: [
            '1',
            '2',
            '3',
          ].map((number) => _buildNumberButton(number, isDark)).toList(),
        ),
        SizedBox(height: DS.m),
        // Row 2: 4, 5, 6
        Row(
          mainAxisAlignment: MainAxisAlignment.spaceEvenly,
          children: [
            '4',
            '5',
            '6',
          ].map((number) => _buildNumberButton(number, isDark)).toList(),
        ),
        SizedBox(height: DS.m),
        // Row 3: 7, 8, 9
        Row(
          mainAxisAlignment: MainAxisAlignment.spaceEvenly,
          children: [
            '7',
            '8',
            '9',
          ].map((number) => _buildNumberButton(number, isDark)).toList(),
        ),
        SizedBox(height: DS.m),
        // Row 4: Clear, 0, Backspace
        Row(
          mainAxisAlignment: MainAxisAlignment.spaceEvenly,
          children: [
            _buildActionButton('CLEAR', isDark, () {
              setState(() {
                _enteredPin = '';
              });
            }),
            _buildNumberButton('0', isDark),
            _buildActionButton('⌫', isDark, () {
              if (_enteredPin.isNotEmpty) {
                setState(() {
                  _enteredPin = _enteredPin.substring(
                    0,
                    _enteredPin.length - 1,
                  );
                });
              }
            }),
          ],
        ),
      ],
    );
  }

  Widget _buildNumberButton(String number, bool isDark) {
    return Container(
      width: 60,
      height: 60,
      decoration: BoxDecoration(
        color: isDark ? Colors.grey[800] : Colors.grey[100],
        borderRadius: BorderRadius.circular(30),
        border: Border.all(
          color: isDark ? Colors.grey[700]! : Colors.grey[300]!,
          width: 1,
        ),
      ),
      child: Material(
        color: Colors.transparent,
        child: InkWell(
          onTap: () {
            HapticFeedback.lightImpact();
            if (_enteredPin.length < 6) {
              setState(() {
                _enteredPin += number;
              });
            }
          },
          borderRadius: BorderRadius.circular(30),
          child: Center(
            child: Text(
              number,
              style: TextStyle(
                fontSize: DS.textLG,
                fontWeight: FontWeight.w600,
                color: isDark ? Colors.white : Colors.black87,
              ),
            ),
          ),
        ),
      ),
    );
  }

  Widget _buildActionButton(String text, bool isDark, VoidCallback onTap) {
    return Container(
      width: 60,
      height: 60,
      decoration: BoxDecoration(
        color: isDark ? Colors.grey[800] : Colors.grey[100],
        borderRadius: BorderRadius.circular(30),
        border: Border.all(
          color: isDark ? Colors.grey[700]! : Colors.grey[300]!,
          width: 1,
        ),
      ),
      child: Material(
        color: Colors.transparent,
        child: InkWell(
          onTap: () {
            HapticFeedback.lightImpact();
            onTap();
          },
          borderRadius: BorderRadius.circular(30),
          child: Center(
            child: Text(
              text,
              style: TextStyle(
                fontSize: DS.textSM,
                fontWeight: FontWeight.w600,
                color: isDark ? Colors.white : Colors.black87,
              ),
            ),
          ),
        ),
      ),
    );
  }
}
