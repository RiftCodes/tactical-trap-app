import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:tactical_trap_flutter/l10n/app_localizations.dart';
import 'package:url_launcher/url_launcher.dart';

import '../style/design_system.dart';

class UserManualViewer extends StatefulWidget {
  final bool isDark;

  const UserManualViewer({super.key, required this.isDark});

  @override
  State<UserManualViewer> createState() => _UserManualViewerState();
}

class _UserManualViewerState extends State<UserManualViewer> {
  final ScrollController _scrollController = ScrollController();
  final Map<String, GlobalKey> _sectionKeys = {};

  @override
  void initState() {
    super.initState();
    // Create keys for all sections
    _sectionKeys['introduction'] = GlobalKey();
    _sectionKeys['getting-started'] = GlobalKey();
    _sectionKeys['app-features'] = GlobalKey();
    _sectionKeys['first-time-setup'] = GlobalKey();
    _sectionKeys['connecting'] = GlobalKey();
    _sectionKeys['basic-operations'] = GlobalKey();
    _sectionKeys['advanced-features'] = GlobalKey();
    _sectionKeys['troubleshooting'] = GlobalKey();
    _sectionKeys['safety-maintenance'] = GlobalKey();
    _sectionKeys['support'] = GlobalKey();
  }

  @override
  void dispose() {
    _scrollController.dispose();
    super.dispose();
  }

  void _scrollToSection(String sectionKey) {
    final key = _sectionKeys[sectionKey];
    if (key?.currentContext != null) {
      Scrollable.ensureVisible(
        key!.currentContext!,
        duration: const Duration(milliseconds: 500),
        curve: Curves.easeInOut,
        alignment: 0.1,
      );
    }
  }

  @override
  Widget build(BuildContext context) {
    final l10n = AppLocalizations.of(context)!;

    return Scaffold(
      backgroundColor: widget.isDark ? const Color(0xFF1A1A1A) : Colors.white,
      appBar: AppBar(
        title: Text(
          l10n.userManual,
          style: TextStyle(
            color: widget.isDark ? Colors.white : const Color(0xFF1E293B),
          ),
        ),
        backgroundColor: widget.isDark ? const Color(0xFF1A1A1A) : Colors.white,
        elevation: 0,
        iconTheme: IconThemeData(
          color: widget.isDark ? Colors.white : const Color(0xFF1E293B),
        ),
      ),
      body: SingleChildScrollView(
        controller: _scrollController,
              padding: EdgeInsets.all(DS.m),
              child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
                children: [
            _buildTableOfContents(),
            SizedBox(height: DS.xl),
            _buildSection('introduction', 'Introduction', _buildIntroduction()),
            _buildSection(
              'getting-started',
              'Getting Started',
              _buildGettingStarted(),
            ),
            _buildSection('app-features', 'App Features', _buildAppFeatures()),
            _buildSection(
              'first-time-setup',
              'First-Time Setup',
              _buildFirstTimeSetup(),
            ),
            _buildSection(
              'connecting',
              'Connecting to Your Lock',
              _buildConnecting(),
            ),
            _buildSection(
              'basic-operations',
              'Basic Operations',
              _buildBasicOperations(),
            ),
            _buildSection(
              'advanced-features',
              'Advanced Features',
              _buildAdvancedFeatures(),
            ),
            _buildSection(
              'troubleshooting',
              'Troubleshooting',
              _buildTroubleshooting(),
            ),
            _buildSection(
              'safety-maintenance',
              'Safety & Maintenance',
              _buildSafetyMaintenance(),
            ),
            _buildSection('support', 'Support & Contact', _buildSupport()),
            SizedBox(height: DS.xl),
            _buildFooter(),
          ],
        ),
      ),
    );
  }

  Widget _buildTableOfContents() {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
                  Text(
          'Table of Contents',
                    style: TextStyle(
            fontSize: DS.textXL,
            fontWeight: FontWeight.bold,
            color: widget.isDark ? Colors.white : Colors.black87,
          ),
        ),
        SizedBox(height: DS.m),
        _tocItem('1. Introduction', 'introduction'),
        _tocItem('2. Getting Started', 'getting-started'),
        _tocItem('3. App Features', 'app-features'),
        _tocItem('4. First-Time Setup', 'first-time-setup'),
        _tocItem('5. Connecting to Your Lock', 'connecting'),
        _tocItem('6. Basic Operations', 'basic-operations'),
        _tocItem('7. Advanced Features', 'advanced-features'),
        _tocItem('8. Troubleshooting', 'troubleshooting'),
        _tocItem('9. Safety & Maintenance', 'safety-maintenance'),
        _tocItem('10. Support & Contact', 'support'),
        Divider(
          color: widget.isDark ? Colors.grey[700] : Colors.grey[300],
          thickness: 1,
          height: DS.l,
        ),
      ],
    );
  }

  Widget _tocItem(String title, String sectionKey) {
    return InkWell(
      onTap: () => _scrollToSection(sectionKey),
      child: Padding(
        padding: EdgeInsets.symmetric(vertical: 6),
        child: Text(
          title,
          style: TextStyle(
            fontSize: DS.textSM,
            color: widget.isDark ? Colors.blue[300] : Colors.blue[700],
            fontWeight: FontWeight.w500,
            decoration: TextDecoration.underline,
          ),
        ),
      ),
    );
  }

  Widget _buildSection(String key, String title, Widget content) {
    return Container(
      key: _sectionKeys[key],
      margin: EdgeInsets.only(bottom: DS.l),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(
            title,
            style: TextStyle(
              fontSize: DS.textXL,
              fontWeight: FontWeight.bold,
              color: widget.isDark ? Colors.white : Colors.black87,
            ),
          ),
          SizedBox(height: DS.m),
          content,
        ],
      ),
    );
  }

  Widget _buildIntroduction() {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        _paragraph(
          'Welcome to the Tactical Traps Bluetooth Lock Control App! This app allows you to control your Tactical Traps Bluetooth-enabled lock using your smartphone. The app provides secure, convenient access to your lock with features like PIN verification, status monitoring, and remote control.',
        ),
        SizedBox(height: DS.m),
        _subheading('What\'s Included'),
        _bulletPoint(
          'Bluetooth Lock: High-security lock with Bluetooth connectivity',
        ),
        _bulletPoint('Mobile App: Cross-platform app for iOS and Android'),
        _bulletPoint('User Manual: This comprehensive guide'),
        _bulletPoint('Installation Kit: Mounting hardware and instructions'),
      ],
    );
  }

  Widget _buildGettingStarted() {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        _subheading('System Requirements'),
        _bulletPoint('Smartphone: iOS 12+ or Android 8+'),
        _bulletPoint('Bluetooth: Bluetooth 4.0 or higher'),
        _bulletPoint(
          'Permissions: Location and Bluetooth permissions required',
        ),
      ],
    );
  }

  Widget _buildAppFeatures() {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        _subheading('Main Interface'),
        _bulletPoint(
          'Home Screen: Shows connected lock status and quick controls',
        ),
        _bulletPoint('Scan Button: Search for available locks in range'),
        _bulletPoint('Lock Controls: Lock/unlock, status check, and settings'),
        _bulletPoint('Device Management: View and manage connected locks'),
        SizedBox(height: DS.m),
        _subheading('Security Features'),
        _bulletPoint('PIN Verification: Secure PIN-based authentication'),
        _bulletPoint('Encrypted Communication: All data is encrypted'),
        _bulletPoint('Auto-lock: Automatic locking for security'),
      ],
    );
  }

  Widget _buildFirstTimeSetup() {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        _numberedPoint(
          '1. ',
          'Install the App: Download from App Store or Google Play',
        ),
        _numberedPoint(
          '2. ',
          'Enable Bluetooth: Turn on Bluetooth in your phone settings',
        ),
        _numberedPoint(
          '3. ',
          'Grant Permissions: Allow location and Bluetooth access',
        ),
        _numberedPoint(
          '4. ',
          'Scan for Locks: Use the scan button to find nearby locks',
        ),
      ],
    );
  }

  Widget _buildConnecting() {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        _subheading('Initial Connection'),
        SizedBox(height: DS.s),
        _boldText('Power On'),
        _paragraph(
          'Ensure your lock has power. The lock runs on 4 AAA batteries.',
        ),
        SizedBox(height: DS.s),
        _boldText('Scan'),
        _paragraph(
          'Tap the scan button in the app to search for available locks.',
        ),
        SizedBox(height: DS.s),
        _boldText('Select Lock'),
        _paragraph(
          'Choose your lock\'s serial number (SN) from the discovered devices.',
        ),
        SizedBox(height: DS.s),
        _boldText('Enter PIN'),
        _paragraph('Input your lock\'s PIN when prompted.'),
        SizedBox(height: DS.s),
        _boldText('Verify'),
        _paragraph('Wait for connection confirmation.'),
      ],
    );
  }

  Widget _buildBasicOperations() {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        _subheading('Locking/Unlocking'),
        _numberedPoint(
          '1. ',
          'Ensure Connection: Verify lock is connected to app',
        ),
        _numberedPoint('2. ', 'Choose Action: Select Lock or Unlock button'),
        _numberedPoint('3. ', 'Confirm: Wait for operation confirmation'),
        _numberedPoint('4. ', 'Verify: Check lock status to confirm action'),
        SizedBox(height: DS.m),
        _subheading('Status Check'),
        _bulletPoint('Current State: Shows if lock is locked or unlocked'),
        _bulletPoint('Battery Level: Displays remaining battery power'),
      ],
    );
  }

  Widget _buildAdvancedFeatures() {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        _subheading('Lock Settings'),
        _bulletPoint('Auto-lock Timer: Set automatic locking delay'),
        _bulletPoint('Sound Alerts: Enable/disable lock operation sounds'),
      ],
    );
  }

  Widget _buildTroubleshooting() {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        _subheading('Error Messages'),
        _paragraph(
          'If the following error messages appear, please try the steps below:',
        ),
        SizedBox(height: DS.m),
        _errorMessage('"Device Not Found"'),
        _paragraph(
          'Lock is out of range or powered off. Move closer to the shelf and confirm the lock is powered on. If internal batteries have died, plug in external battery backup pack and try again. Once opened, replace all 4 AAA batteries inside the lock with brand new high alkaline batteries like Duracell or Energizer.',
        ),
        SizedBox(height: DS.s),
        _errorMessage('"Connection Failed"'),
        _paragraph(
          'PIN is incorrect or lock is powered off. Confirm lock is powered on or external battery backup is plugged in. Verify PIN is correct and try again.',
        ),
        SizedBox(height: DS.s),
        _errorMessage('"Bluetooth Unavailable"'),
        _paragraph(
          'Enable Bluetooth on your phone. Go to your phone\'s Settings > Bluetooth and turn it on.',
        ),
        SizedBox(height: DS.s),
        _errorMessage('"Permission Denied"'),
        _paragraph(
          'Grant required app permissions. Go to your phone\'s Settings > Apps > Tactical Traps > Permissions and enable Bluetooth and Location permissions.',
        ),
        SizedBox(height: DS.m),
        _subheading('Reset Procedures'),
        _paragraph(
          'If the app crashes or is slow to respond, please try these reset steps:',
        ),
        SizedBox(height: DS.s),
        _boldText('App Reset'),
        _paragraph(
          'Clear app data and reconnect. Go to phone Settings > Apps > Tactical Traps > Storage > Clear Data. Then reopen the app and reconnect to your lock.',
        ),
        SizedBox(height: DS.s),
        _boldText('Phone Reset'),
        _paragraph('Restart your phone and open the app to try again.'),
      ],
    );
  }

  Widget _buildSafetyMaintenance() {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        _subheading('Lock Maintenance'),
        _paragraph(
          'Monitor battery level regularly to prevent being locked out of the unit. The lock runs on 4 AAA high alkaline batteries that should be changed every 4-6 months or when you hear the low battery warning.',
        ),
        SizedBox(height: DS.s),
        _paragraph(
          'To change the batteries, remove the thumbscrew on the battery compartment and remove cover. Remove old batteries and install new high alkaline batteries like Duracell or Energizer. Batteries are stacked and can be hard to see when the unit is mounted on the wall. Be sure to change all 4 batteries.',
        ),
        SizedBox(height: DS.s),
        _warningBox(
          'Do NOT use lithium batteries in the lock - doing so will cause the lock to malfunction.',
        ),
        SizedBox(height: DS.s),
        _paragraph(
          'If internal batteries have died, you\'ll need to open the unit using the external battery backup pack. Insert 4 AAA batteries in the backup pack and plug the pack into the aux port on the unit. Then use the app to unlock the unit.',
        ),
        SizedBox(height: DS.s),
        _linkBox(
          'Additional instructions for opening a locked out unit can be found at:',
          'https://tacticaltraps.weebly.com/locked-out.html',
        ),
      ],
    );
  }

  Widget _buildSupport() {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        _subheading('Technical Support'),
        _clickableInfoRow(
          'Email',
          'support@tacticaltraps.com',
          'mailto:support@tacticaltraps.com',
        ),
        _clickableInfoRow('Phone', '1-800-651-9171', 'tel:1-800-651-9171'),
        _clickableInfoRow(
          'Website',
          'www3.tacticaltraps.com',
          'https://www3.tacticaltraps.com',
        ),
        _infoRow('Hours', 'Monday-Friday, 10 AM - 3 PM CST'),
        SizedBox(height: DS.m),
        _subheading('Documentation'),
        _paragraph(
          'Online manuals, video tutorials and troubleshooting available at:',
        ),
        _linkBox('', 'www.tacticaltraps.com/quickstartguide'),
      ],
    );
  }

  Widget _buildFooter() {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Divider(color: widget.isDark ? Colors.grey[700] : Colors.grey[300]),
        SizedBox(height: DS.m),
        _boldText('Note'),
        _paragraph(
          'This manual covers the basic operation of your Tactical Traps Bluetooth Lock. For detailed technical specifications, installation instructions, or advanced features, please refer to the complete product documentation or contact our support team.',
        ),
        SizedBox(height: DS.m),
        Text(
          'Version: 1.0  |  Last Updated: 2024',
          style: TextStyle(
            fontSize: DS.textXS,
            color: widget.isDark ? Colors.grey[500] : Colors.grey[600],
          ),
        ),
        SizedBox(height: DS.xs),
        Text(
          'Tactical Traps - Your Security, Our Priority',
          style: TextStyle(
            fontSize: DS.textSM,
            fontWeight: FontWeight.w600,
            color: widget.isDark ? Colors.grey[400] : Colors.grey[700],
          ),
        ),
      ],
    );
  }

  // Helper widgets
  Widget _subheading(String text) {
    return Padding(
      padding: EdgeInsets.only(top: DS.s, bottom: DS.s),
            child: Text(
              text,
              style: TextStyle(
          fontSize: DS.textLG,
          fontWeight: FontWeight.w600,
                color: widget.isDark ? Colors.white : Colors.black87,
              ),
      ),
    );
  }

  Widget _paragraph(String text) {
    return Padding(
      padding: EdgeInsets.only(bottom: DS.xs),
      child: Text(
        text,
        style: TextStyle(
          fontSize: DS.textSM,
          color: widget.isDark ? Colors.grey[300] : Colors.grey[700],
          height: 1.5,
            ),
          ),
        );
  }

  Widget _bulletPoint(String text) {
    return Padding(
            padding: EdgeInsets.only(left: DS.m, bottom: DS.xs),
            child: Row(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  '• ',
                  style: TextStyle(
              fontSize: DS.textSM,
                    color: widget.isDark ? Colors.grey[400] : Colors.grey[600],
            ),
          ),
          Expanded(
            child: Text(
              text,
              style: TextStyle(
                fontSize: DS.textSM,
                color: widget.isDark ? Colors.grey[300] : Colors.grey[700],
                height: 1.5,
              ),
            ),
          ),
        ],
      ),
    );
  }

  Widget _numberedPoint(String number, String text) {
    return Padding(
      padding: EdgeInsets.only(left: DS.s, bottom: DS.xs),
            child: Row(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  number,
            style: TextStyle(
                    fontSize: DS.textSM,
                    fontWeight: FontWeight.bold,
              color: widget.isDark ? Colors.grey[400] : Colors.grey[600],
            ),
          ),
          Expanded(
            child: Text(
              text,
              style: TextStyle(
                fontSize: DS.textSM,
                color: widget.isDark ? Colors.grey[300] : Colors.grey[700],
                height: 1.5,
              ),
            ),
          ),
        ],
      ),
    );
  }

  Widget _boldText(String text) {
    return Padding(
      padding: EdgeInsets.only(bottom: DS.xs),
      child: Text(
        text,
        style: TextStyle(
          fontSize: DS.textBase,
          fontWeight: FontWeight.bold,
          color: widget.isDark ? Colors.white : Colors.black87,
        ),
      ),
    );
  }

  Widget _errorMessage(String text) {
    return Padding(
      padding: EdgeInsets.only(bottom: DS.xs),
      child: Text(
        text,
        style: TextStyle(
          fontSize: DS.textSM,
          fontWeight: FontWeight.bold,
          color: widget.isDark ? Colors.white : Colors.black87,
        ),
      ),
    );
      }

  Widget _warningBox(String text) {
    return Container(
      padding: EdgeInsets.all(DS.m),
      decoration: BoxDecoration(
        border: Border(left: BorderSide(color: Colors.orange, width: 4)),
        color: widget.isDark
            ? Colors.orange[900]?.withValues(alpha: 0.1)
            : Colors.orange[50],
      ),
      child: Text(
        text,
        style: TextStyle(
          fontSize: DS.textSM,
          fontWeight: FontWeight.w600,
          color: widget.isDark ? Colors.orange[200] : Colors.orange[900],
        ),
      ),
    );
  }

  Widget _linkBox(String label, String link) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        if (label.isNotEmpty) _paragraph(label),
        InkWell(
          onTap: () => _launchUrl(link),
          child: Text(
            link,
            style: TextStyle(
              fontSize: DS.textSM,
              fontWeight: FontWeight.w500,
              color: Colors.blue[600],
              decoration: TextDecoration.underline,
            ),
          ),
        ),
      ],
    );
  }

  Future<void> _launchUrl(String url) async {
    try {
      String formattedUrl = url;
      if (!url.startsWith('http://') && !url.startsWith('https://')) {
        formattedUrl = 'https://$url';
      }

      final uri = Uri.parse(formattedUrl);
      if (await canLaunchUrl(uri)) {
        await launchUrl(uri, mode: LaunchMode.externalApplication);
      }
    } catch (e) {
      if (kDebugMode) print('Failed to launch URL: $e');
    }
  }

  Widget _infoRow(String label, String value) {
    return Padding(
      padding: EdgeInsets.only(bottom: DS.xs),
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          SizedBox(
            width: 80,
            child: Text(
              '$label:',
              style: TextStyle(
                fontSize: DS.textSM,
                fontWeight: FontWeight.w600,
                color: widget.isDark ? Colors.grey[400] : Colors.grey[600],
              ),
            ),
          ),
          Expanded(
            child: Text(
              value,
              style: TextStyle(
                fontSize: DS.textSM,
                color: widget.isDark ? Colors.grey[300] : Colors.grey[700],
              ),
            ),
          ),
        ],
      ),
    );
  }

  Widget _clickableInfoRow(String label, String value, String url) {
    return Padding(
      padding: EdgeInsets.only(bottom: DS.xs),
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          SizedBox(
            width: 80,
            child: Text(
              '$label:',
              style: TextStyle(
                fontSize: DS.textSM,
                fontWeight: FontWeight.w600,
                color: widget.isDark ? Colors.grey[400] : Colors.grey[600],
              ),
            ),
          ),
          Expanded(
            child: InkWell(
              onTap: () => _launchUrl(url),
              child: Text(
                value,
                style: TextStyle(
                  fontSize: DS.textSM,
                  color: Colors.blue[600],
                  decoration: TextDecoration.underline,
                ),
              ),
            ),
          ),
        ],
      ),
    );
  }
}

