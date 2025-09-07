import 'dart:ui';

import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:fluttertoast/fluttertoast.dart';
import 'package:in_app_review/in_app_review.dart';
import 'package:package_info_plus/package_info_plus.dart';
import 'package:provider/provider.dart';
import 'package:share_plus/share_plus.dart';
import 'package:tactical_trap_flutter/l10n/app_localizations.dart';
import 'package:url_launcher/url_launcher.dart';

import '../../core/constants/app_constants.dart';
import '../../core/utils/logger.dart';
import '../providers/ble_provider.dart';
import '../providers/device_provider.dart';
import '../providers/language_provider.dart';
import '../providers/theme_provider.dart';
import '../style/design_system.dart';
import '../widgets/glass_background.dart';
import '../widgets/glass_card.dart';
import '../widgets/user_manual_viewer.dart';

/// Elegant settings page with glassmorphism
class SettingsPage extends StatefulWidget {
  const SettingsPage({super.key});

  @override
  State<SettingsPage> createState() => _SettingsPageState();
}

class _SettingsPageState extends State<SettingsPage> {
  PackageInfo? _packageInfo;

  @override
  void initState() {
    super.initState();
    _loadPackageInfo();
    // Refresh buzzer status when settings page opens
    WidgetsBinding.instance.addPostFrameCallback((_) {
      final bleProvider = Provider.of<BleProvider>(context, listen: false);
      if (bleProvider.isConnected) {
        bleProvider.getBuzzerStatus();
      }
    });
  }

  Future<void> _loadPackageInfo() async {
    try {
      final packageInfo = await PackageInfo.fromPlatform();
      setState(() {
        _packageInfo = packageInfo;
      });
    } catch (e) {
      if (kDebugMode) Logger.error('Failed to load package info: $e');
    }
  }

  @override
  Widget build(BuildContext context) {
    final isDark = Theme.of(context).brightness == Brightness.dark;
    final l10n = AppLocalizations.of(context)!;

    return Scaffold(
      appBar: AppBar(
        title: Image.asset(
          'assets/icons/horizontal.png',
          height: 28,
          errorBuilder: (_, __, ___) => Text(l10n.settings),
        ),
        backgroundColor: Theme.of(context).brightness == Brightness.dark
            ? Colors.black.withValues(alpha: 0.4)
            : Colors.white.withValues(alpha: 0.85),
        elevation: 0,
        centerTitle: true,
        leading: IconButton(
          onPressed: () => Navigator.of(context).pop(),
          icon: Icon(
            Icons.arrow_back_rounded,
            color: Theme.of(context).brightness == Brightness.dark
                ? Colors.white
                : DS.brandDark,
          ),
        ),
        flexibleSpace: ClipRect(
          child: BackdropFilter(
            filter: ImageFilter.blur(sigmaX: 30, sigmaY: 30),
            child: Container(),
          ),
        ),
      ),
      body: Stack(
        children: [
          const GlassBackground(),
          Consumer3<DeviceProvider, ThemeProvider, LanguageProvider>(
            builder:
                (
                  context,
                  deviceProvider,
                  themeProvider,
                  languageProvider,
                  child,
                ) {
                  // Force rebuild when language changes
                  if (kDebugMode)
                    Logger.info(
                      l10n.rebuildingWithLanguage(
                        languageProvider.currentLanguageCode,
                      ),
                    );
                  return CustomScrollView(
                    slivers: [
                      SliverPadding(
                        padding: EdgeInsets.all(DS.s),
                        sliver: SliverList(
                          delegate: SliverChildListDelegate([
                            SizedBox(height: DS.l),
                            _section(context, l10n.lockSettings, [
                              _lockRenameRow(context, deviceProvider, isDark),
                              _batteryInfoRow(context, isDark),
                              _buzzerControlRow(context, isDark),
                              _resetLockRow(context, isDark),
                            ]),
                            SizedBox(height: DS.l),
                            _section(context, l10n.support, [
                              _infoRow(
                                context,
                                l10n.version,
                                _packageInfo?.version ??
                                    AppConstants.appVersion,
                                isDark,
                              ),
                              _infoRow(
                                context,
                                l10n.company,
                                AppConstants.companyName,
                                isDark,
                                onTap: () => _launchUrl(
                                  'https://www3.tacticaltraps.com/',
                                ),
                                showUnderline: false,
                              ),
                              _actionRow(
                                context,
                                l10n.userManual,
                                Icons.menu_book_rounded,
                                isDark ? Colors.white : const Color(0xFF1E293B),
                                () => _showUserManual(context, isDark),
                                isDark,
                              ),
                              _actionRow(
                                context,
                                l10n.privacyPolicy,
                                Icons.privacy_tip_rounded,
                                isDark ? Colors.white : const Color(0xFF1E293B),
                                () => _launchUrl(
                                  'https://www3.tacticaltraps.com/privacy-policy',
                                ),
                                isDark,
                              ),
                              _actionRow(
                                context,
                                l10n.rateApp,
                                Icons.star_rounded,
                                isDark ? Colors.white : const Color(0xFF1E293B),
                                () => _showInAppRating(context),
                                isDark,
                              ),
                              _actionRow(
                                context,
                                l10n.shareApp,
                                Icons.share_rounded,
                                isDark ? Colors.white : const Color(0xFF1E293B),
                                () => _shareApp(),
                                isDark,
                              ),
                              _actionRow(
                                context,
                                l10n.clearAllData,
                                Icons.delete_forever_rounded,
                                DS.brandRed,
                                () => _confirmClear(context, deviceProvider),
                                isDark,
                              ),
                            ]),
                            SizedBox(height: DS.l),
                            _actionRow(
                              context,
                              l10n.supportAndFeedback,
                              Icons.support_agent_rounded,
                              Colors.blue[600]!,
                              () => _showSupportOptions(context),
                              isDark,
                            ),

                            _infoRow(
                              context,
                              l10n.developedBy,
                              l10n.reckapSolutions,
                              isDark,
                              onTap: () => _launchUrl(l10n.reckapWebsite),
                              showUnderline: false,
                            ),
                            SizedBox(height: DS.xl * 2), // Bottom padding
                          ]),
                        ),
                      ),
                    ],
                  );
                },
          ),
        ],
      ),
    );
  }

  Widget _section(BuildContext context, String title, List<Widget> children) {
    final isDark = Theme.of(context).brightness == Brightness.dark;

    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Padding(
          padding: EdgeInsets.only(left: DS.s, bottom: DS.s),
          child: Text(
            title.toUpperCase(),
            style: TextStyle(
              fontSize: DS.textXS,
              fontWeight: FontWeight.w600,
              color: isDark ? Colors.grey[500] : const Color(0xFF64748B),
              letterSpacing: 0.5,
            ),
          ),
        ),
        GlassCard(
          padding: EdgeInsets.zero,
          child: Column(children: children),
        ),
      ],
    );
  }

  // Removed theme and language methods as per feedback - not needed

  Future<void> _launchUrl(String url) async {
    try {
      final uri = Uri.parse(url);
      if (kDebugMode) Logger.info('Attempting to launch URL: $url');

      bool launched = false;

      // Try different launch modes as fallbacks
      final modes = [
        LaunchMode.inAppWebView,
        LaunchMode.externalApplication,
        LaunchMode.platformDefault,
      ];

      for (final mode in modes) {
        try {
          if (kDebugMode) Logger.info('Trying launch mode: $mode');
          launched = await launchUrl(uri, mode: mode);
          if (launched) {
            if (kDebugMode)
              Logger.info('Successfully launched with mode: $mode');
            break;
          }
        } catch (e) {
          if (kDebugMode) Logger.info('Failed with mode $mode: $e');
          continue;
        }
      }

      if (!launched) {
        if (kDebugMode)
          Logger.error('Failed to launch URL with all modes: $url');
        if (mounted) {
          Fluttertoast.showToast(
            msg: 'Could not open link. Please install a browser app.',
            toastLength: Toast.LENGTH_LONG,
            gravity: ToastGravity.BOTTOM,
              backgroundColor: Colors.red,
            textColor: Colors.white,
            fontSize: 14.0,
          );
        }
      }
    } catch (e) {
      if (kDebugMode) Logger.error('Error launching URL: $e');
      if (kDebugMode) Logger.error('Failed to launch URL: $e');

      if (mounted) {
        Fluttertoast.showToast(
          msg: 'Failed to open link: ${e.toString()}',
          toastLength: Toast.LENGTH_LONG,
          gravity: ToastGravity.BOTTOM,
            backgroundColor: Colors.red,
          textColor: Colors.white,
          fontSize: 14.0,
        );
      }
    }
  }

  void _showUserManual(BuildContext context, bool isDark) {
    Navigator.of(context).push(
      MaterialPageRoute(builder: (context) => UserManualViewer(isDark: isDark)),
    );
  }

  Future<void> _showInAppRating(BuildContext context) async {
    final l10n = AppLocalizations.of(context)!;
    final InAppReview inAppReview = InAppReview.instance;

    try {
      // Check if in-app review is available
      if (await inAppReview.isAvailable()) {
        // Show the in-app review dialog
        if (kDebugMode) Logger.info('Requesting in-app review');
        await inAppReview.requestReview();
      } else {
        // Fallback to opening Play Store
        if (kDebugMode)
          Logger.info('In-app review not available, opening Play Store');
        await _launchUrl(
          'https://play.google.com/store/apps/details?id=com.tacticaltraps.bluetooth.lock_0',
        );
      }
    } catch (e) {
      if (kDebugMode) Logger.error('Failed to show in-app review: $e');

      // Show custom dialog as fallback
      if (context.mounted) {
        showDialog(
          context: context,
          builder: (context) => AlertDialog(
            title: Row(
              children: [
                Icon(Icons.star_rounded, color: Colors.amber, size: 28),
                SizedBox(width: DS.s),
                Text(l10n.rateApp),
              ],
            ),
            content: Column(
              mainAxisSize: MainAxisSize.min,
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [Text(l10n.rateAppMessage)],
            ),
            actions: [
              TextButton(
                onPressed: () => Navigator.of(context).pop(),
                child: Text(l10n.cancel),
              ),
              ElevatedButton.icon(
                onPressed: () {
                  Navigator.of(context).pop();
                  _launchUrl(
                    'https://play.google.com/store/apps/details?id=com.tacticaltraps.bluetooth.lock_2',
                  );
                },
                icon: Icon(Icons.star_rounded, color: Colors.white),
                label: Text(l10n.rateOnPlayStore),
                style: ElevatedButton.styleFrom(
                  backgroundColor: Colors.amber[600],
                  foregroundColor: Colors.white,
                ),
              ),
            ],
          ),
        );
      }
    }
  }

  Future<void> _shareApp() async {
    final l10n = AppLocalizations.of(context)!;
    final packageInfo = _packageInfo;

    try {
      final String shareText =
          '''
${l10n.shareAppMessage}

📱 ${l10n.appTitle}
🔒 ${l10n.tacticalLock}

Download: https://play.google.com/store/apps/details?id=com.tacticaltraps.bluetooth.lock_2

${packageInfo != null ? '${l10n.version}: ${packageInfo.version}' : ''}
''';

      await Share.share(shareText, subject: l10n.appTitle);

      if (kDebugMode) Logger.info('App shared successfully');
    } catch (e) {
      if (kDebugMode) Logger.error('Failed to share app: $e');

      if (mounted) {
        Fluttertoast.showToast(
          msg: l10n.failedToOpenLink,
          toastLength: Toast.LENGTH_SHORT,
          gravity: ToastGravity.BOTTOM,
            backgroundColor: Colors.red,
          textColor: Colors.white,
          fontSize: 14.0,
        );
      }
    }
  }

  Widget _infoRow(
    BuildContext context,
    String label,
    String value,
    bool isDark, {
    VoidCallback? onTap,
    bool showUnderline = true,
  }) {
    Widget content = Padding(
      padding: EdgeInsets.all(DS.m),
      child: Row(
        children: [
          Expanded(
            child: Text(
              label,
              style: TextStyle(
                fontSize: DS.textSM,
                fontWeight: FontWeight.w500,
                color: isDark ? Colors.white : const Color(0xFF1E293B),
              ),
            ),
          ),
          Text(
            value,
            style: TextStyle(
              fontSize: DS.textSM,
              color: onTap != null
                  ? Colors.blue[600]
                  : (isDark ? Colors.grey[400] : const Color(0xFF64748B)),
              decoration: (onTap != null && showUnderline)
                  ? TextDecoration.underline
                  : null,
            ),
          ),
          if (onTap != null) ...[
            SizedBox(width: DS.xs),
            Icon(Icons.open_in_new_rounded, size: 16, color: Colors.blue[600]),
          ],
        ],
      ),
    );

    if (onTap != null) {
      return InkWell(onTap: onTap, child: content);
    }

    return content;
  }


  Widget _actionRow(
    BuildContext context,
    String label,
    IconData icon,
    Color color,
    VoidCallback onTap,
    bool isDark,
  ) {
    return InkWell(
      onTap: onTap,
      child: Padding(
        padding: EdgeInsets.all(DS.m),
        child: Row(
          children: [
            Icon(icon, color: color, size: 20),
            SizedBox(width: DS.m),
            Expanded(
              child: Text(
                label,
                style: TextStyle(
                  fontSize: DS.textSM,
                  fontWeight: FontWeight.w500,
                  color: color,
                ),
              ),
            ),
            Icon(
              Icons.chevron_right_rounded,
              color: isDark ? Colors.grey[500] : const Color(0xFF94A3B8),
              size: 20,
            ),
          ],
        ),
      ),
    );
  }

  void _confirmClear(BuildContext context, DeviceProvider provider) {
    final l10n = AppLocalizations.of(context)!;

    showDialog(
      context: context,
      builder: (ctx) => AlertDialog(
        title: Text(l10n.clearAllDataConfirmation),
        content: Text(l10n.clearAllDataWarning),
        actions: [
          TextButton(
            onPressed: () => Navigator.of(ctx).pop(),
            child: Text(l10n.cancelButton),
          ),
          ElevatedButton(
            onPressed: () async {
              Navigator.of(ctx).pop();
              await provider.clearAllData();
            },
            style: ElevatedButton.styleFrom(
              backgroundColor: DS.brandRed,
              foregroundColor: Colors.white,
            ),
            child: Text(l10n.clearButton),
          ),
        ],
      ),
    );
  }

  void _showSupportOptions(BuildContext context) {
    final l10n = AppLocalizations.of(context)!;
    final isDark = Theme.of(context).brightness == Brightness.dark;

    showDialog(
      context: context,
      builder: (context) => Dialog(
        insetPadding: EdgeInsets.all(DS.m),
        shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.circular(DS.s),
        ),
        child: Container(
          constraints: BoxConstraints(
            maxWidth: 400,
            maxHeight: MediaQuery.of(context).size.height * 0.8,
          ),
          child: Column(
            mainAxisSize: MainAxisSize.min,
            children: [
              // Header
              Container(
                padding: EdgeInsets.all(DS.s),
                decoration: BoxDecoration(
                  color: isDark ? Colors.grey[800] : Colors.blue[50],
                  borderRadius: BorderRadius.only(
                    topLeft: Radius.circular(DS.rMedium),
                    topRight: Radius.circular(DS.rMedium),
                  ),
                ),
                child: Row(
                  children: [
                    Icon(
                      Icons.support_agent_rounded,
                      color: Colors.blue[600],
                      size: 28,
                    ),
                    SizedBox(width: DS.s),
                    Expanded(
                      child: Text(
                        l10n.supportAndFeedback,
                        style: TextStyle(
                          fontSize: DS.textLG,
                          fontWeight: FontWeight.w600,
                          color: isDark ? Colors.white : Colors.black87,
                        ),
                      ),
                    ),
                    IconButton(
                      onPressed: () => Navigator.of(context).pop(),
                      icon: Icon(Icons.close_rounded, color: Colors.grey[600]),
                      padding: EdgeInsets.zero,
                      constraints: BoxConstraints(),
                    ),
                  ],
                ),
              ),
              // Content
              Flexible(
                child: SingleChildScrollView(
                  padding: EdgeInsets.all(DS.s),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(
                        l10n.supportDescription,
                        style: TextStyle(
                          fontSize: DS.textSM,
                          color: isDark ? Colors.grey[300] : Colors.grey[700],
                        ),
                      ),
                      SizedBox(height: DS.m),

                      // Quick Contact Section
                      _buildSupportSection(context, l10n.quickContact, [
                        _supportOption(
                          context,
                          l10n.phoneSupport,
                          l10n.phoneNumber,
                          Icons.phone_rounded,
                          Colors.green[600]!,
                          () => _makePhoneCall(context),
                          isDark,
                        ),
                        _supportOption(
                          context,
                          l10n.emailSupport,
                          l10n.supportEmail,
                          Icons.email_rounded,
                          Colors.blue[600]!,
                          () => _sendEmail(context),
                          isDark,
                        ),
                      ], isDark),
                      SizedBox(height: DS.m),

                      // Feedback Section
                      _buildSupportSection(context, l10n.feedbackAndSupport, [
                        _supportOption(
                          context,
                          l10n.reportBug,
                          l10n.reportIssuesOrBugs,
                          Icons.bug_report_rounded,
                          Colors.red[600]!,
                          () => _reportBug(context),
                          isDark,
                        ),
                        _supportOption(
                          context,
                          l10n.featureRequest,
                          l10n.suggestNewFeatures,
                          Icons.lightbulb_rounded,
                          Colors.amber[600]!,
                          () => _requestFeature(context),
                          isDark,
                        ),
                        _supportOption(
                          context,
                          l10n.generalFeedback,
                          l10n.shareYourThoughts,
                          Icons.feedback_rounded,
                          Colors.purple[600]!,
                          () => _sendFeedback(context),
                          isDark,
                        ),
                      ], isDark),
                    ],
                  ),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }

  Widget _buildSupportSection(
    BuildContext context,
    String title,
    List<Widget> options,
    bool isDark,
  ) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(
          title,
          style: TextStyle(
            fontSize: DS.textBase,
            fontWeight: FontWeight.w600,
            color: isDark ? Colors.white : Colors.black87,
          ),
        ),
        SizedBox(height: DS.s),
        ...options.map(
          (option) => Padding(
            padding: EdgeInsets.only(bottom: DS.s),
            child: option,
          ),
        ),
      ],
    );
  }

  Widget _supportOption(
    BuildContext context,
    String title,
    String description,
    IconData icon,
    Color color,
    VoidCallback onTap,
    bool isDark,
  ) {
    return InkWell(
      onTap: onTap,
      borderRadius: BorderRadius.circular(DS.rSmall),
      child: Container(
        padding: EdgeInsets.all(DS.s),
        decoration: BoxDecoration(
          color: isDark ? Colors.grey[800] : Colors.grey[100],
          borderRadius: BorderRadius.circular(DS.rSmall),
          border: Border.all(color: color.withValues(alpha: 0.3), width: 1),
        ),
        child: Row(
          children: [
            Icon(icon, color: color, size: 20),
            SizedBox(width: DS.s),
            Expanded(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    title,
                    style: TextStyle(
                      fontSize: DS.textSM,
                      fontWeight: FontWeight.w600,
                      color: isDark ? Colors.white : Colors.black87,
                    ),
                  ),
                  Text(
                    description,
                    style: TextStyle(
                      fontSize: DS.textXS,
                      color: isDark ? Colors.grey[400] : Colors.grey[600],
                    ),
                  ),
                ],
              ),
            ),
            Icon(
              Icons.arrow_forward_ios_rounded,
              size: 16,
              color: isDark ? Colors.grey[500] : Colors.grey[600],
            ),
          ],
        ),
      ),
    );
  }

  void _makePhoneCall(BuildContext context) {
    final l10n = AppLocalizations.of(context)!;
    final isDark = Theme.of(context).brightness == Brightness.dark;
    Navigator.of(context).pop();

    showDialog(
      context: context,
      builder: (context) => Dialog(
        insetPadding: EdgeInsets.all(DS.m),

        shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.circular(DS.rMedium),
        ),
        child: Container(
          constraints: BoxConstraints(maxWidth: 400),
          child: Column(
            mainAxisSize: MainAxisSize.min,
            children: [
              // Header
              Container(
                padding: EdgeInsets.all(DS.m),
                decoration: BoxDecoration(
                  color: isDark ? Colors.grey[800] : Colors.green[50],
                  borderRadius: BorderRadius.only(
                    topLeft: Radius.circular(DS.rMedium),
                    topRight: Radius.circular(DS.rMedium),
                  ),
                ),
                child: Row(
                  children: [
                    Icon(
                      Icons.phone_rounded,
                      color: Colors.green[600],
                      size: 28,
                    ),
                    SizedBox(width: DS.s),
                    Expanded(
                      child: Text(
                        l10n.phoneSupport,
                        style: TextStyle(
                          fontSize: DS.textLG,
                          fontWeight: FontWeight.w600,
                          color: isDark ? Colors.white : Colors.black87,
                        ),
                      ),
                    ),
                    IconButton(
                      onPressed: () => Navigator.of(context).pop(),
                      icon: Icon(Icons.close_rounded, color: Colors.grey[600]),
                      padding: EdgeInsets.zero,
                      constraints: BoxConstraints(),
                    ),
                  ],
                ),
              ),
              // Content
              Padding(
                padding: EdgeInsets.all(DS.m),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(
                      '${l10n.callUs}:',
                      style: TextStyle(
                        fontSize: DS.textSM,
                        fontWeight: FontWeight.w500,
                        color: isDark ? Colors.grey[300] : Colors.grey[700],
                      ),
                    ),
                    SizedBox(height: DS.xs),
                    Text(
                      l10n.phoneNumber,
                      style: TextStyle(
                        fontSize: DS.textLG,
                        fontWeight: FontWeight.w600,
                        color: isDark ? Colors.white : Colors.black87,
                      ),
                    ),
                    SizedBox(height: DS.m),
                    Container(
                      padding: EdgeInsets.all(DS.m),
                      decoration: BoxDecoration(
                        color: isDark ? Colors.grey[800] : Colors.grey[100],
                        borderRadius: BorderRadius.circular(DS.rSmall),
                        border: Border.all(color: Colors.green[200]!, width: 1),
                      ),
                      child: Row(
                        children: [
                          Icon(
                            Icons.info_outline_rounded,
                            color: Colors.green[600],
                            size: 20,
                          ),
                          SizedBox(width: DS.s),
                          Expanded(
                            child: Text(
                              l10n.tapToCallSupport,
                              style: TextStyle(
                                fontSize: DS.textSM,
                                color: isDark
                                    ? Colors.grey[300]
                                    : Colors.grey[700],
                              ),
                            ),
                          ),
                        ],
                      ),
                    ),
                  ],
                ),
              ),
              // Actions
              Container(
                padding: EdgeInsets.fromLTRB(DS.m, 0, DS.m, DS.m),
                child: Row(
                  children: [
                    Expanded(
                      child: TextButton(
                        onPressed: () => Navigator.of(context).pop(),
                        child: Text(l10n.cancel),
                      ),
                    ),
                    SizedBox(width: DS.s),
                    Expanded(
                      child: ElevatedButton.icon(
                        onPressed: () {
                          Navigator.of(context).pop();
                          _launchUrl('tel:${l10n.phoneNumber}');
                        },
                        icon: Icon(Icons.phone_rounded, color: Colors.white),
                        label: Text(l10n.callUs),
                        style: ElevatedButton.styleFrom(
                          backgroundColor: Colors.green[600],
                          foregroundColor: Colors.white,
                          padding: EdgeInsets.symmetric(vertical: DS.m),
                        ),
                      ),
                    ),
                  ],
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }

  void _sendEmail(BuildContext context) {
    final l10n = AppLocalizations.of(context)!;
    final isDark = Theme.of(context).brightness == Brightness.dark;
    Navigator.of(context).pop();

    showDialog(
      context: context,
      builder: (context) => Dialog(
        insetPadding: EdgeInsets.all(DS.m),

        shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.circular(DS.rMedium),
        ),
        child: Container(
          constraints: BoxConstraints(maxWidth: 400),
          child: Column(
            mainAxisSize: MainAxisSize.min,
            children: [
              // Header
              Container(
                padding: EdgeInsets.all(DS.m),
                decoration: BoxDecoration(
                  color: isDark ? Colors.grey[800] : Colors.blue[50],
                  borderRadius: BorderRadius.only(
                    topLeft: Radius.circular(DS.rMedium),
                    topRight: Radius.circular(DS.rMedium),
                  ),
                ),
                child: Row(
                  children: [
                    Icon(
                      Icons.email_rounded,
                      color: Colors.blue[600],
                      size: 28,
                    ),
                    SizedBox(width: DS.s),
                    Expanded(
                      child: Text(
                        l10n.emailSupport,
                        style: TextStyle(
                          fontSize: DS.textLG,
                          fontWeight: FontWeight.w600,
                          color: isDark ? Colors.white : Colors.black87,
                        ),
                      ),
                    ),
                    IconButton(
                      onPressed: () => Navigator.of(context).pop(),
                      icon: Icon(Icons.close_rounded, color: Colors.grey[600]),
                      padding: EdgeInsets.zero,
                      constraints: BoxConstraints(),
                    ),
                  ],
                ),
              ),
              // Content
              Padding(
                padding: EdgeInsets.all(DS.m),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(
                      '${l10n.emailUs}:',
                      style: TextStyle(
                        fontSize: DS.textSM,
                        fontWeight: FontWeight.w500,
                        color: isDark ? Colors.grey[300] : Colors.grey[700],
                      ),
                    ),
                    SizedBox(height: DS.xs),
                    Text(
                      l10n.supportEmail,
                      style: TextStyle(
                        fontSize: DS.textLG,
                        fontWeight: FontWeight.w600,
                        color: isDark ? Colors.white : Colors.black87,
                      ),
                    ),
                    SizedBox(height: DS.xs),
                    Container(
                      padding: EdgeInsets.symmetric(
                        horizontal: DS.s,
                        vertical: 4,
                      ),
                      decoration: BoxDecoration(
                        color: Colors.blue[100],
                        borderRadius: BorderRadius.circular(4),
                        border: Border.all(color: Colors.blue[300]!, width: 1),
                      ),
                      child: Text(
                        'Emails sent to: ${l10n.supportEmail}',
                        style: TextStyle(
                          fontSize: DS.textXS,
                          color: Colors.blue[700],
                          fontWeight: FontWeight.w500,
                        ),
                      ),
                    ),
                    SizedBox(height: DS.m),
                    Container(
                      padding: EdgeInsets.all(DS.m),
                      decoration: BoxDecoration(
                        color: isDark ? Colors.grey[800] : Colors.grey[100],
                        borderRadius: BorderRadius.circular(DS.rSmall),
                        border: Border.all(color: Colors.blue[200]!, width: 1),
                      ),
                      child: Row(
                        children: [
                          Icon(
                            Icons.info_outline_rounded,
                            color: Colors.blue[600],
                            size: 20,
                          ),
                          SizedBox(width: DS.s),
                          Expanded(
                            child: Text(
                              l10n.tapToOpenEmail,
                              style: TextStyle(
                                fontSize: DS.textSM,
                                color: isDark
                                    ? Colors.grey[300]
                                    : Colors.grey[700],
                              ),
                            ),
                          ),
                        ],
                      ),
                    ),
                  ],
                ),
              ),
              // Actions
              Container(
                padding: EdgeInsets.fromLTRB(DS.m, 0, DS.m, DS.m),
                child: Row(
                  children: [
                    Expanded(
                      child: TextButton(
                        onPressed: () => Navigator.of(context).pop(),
                        child: Text(l10n.cancel),
                      ),
                    ),
                    SizedBox(width: DS.s),
                    Expanded(
                      child: ElevatedButton.icon(
                        onPressed: () {
                          Navigator.of(context).pop();
                          _launchUrl('mailto:${l10n.supportEmail}');
                        },
                        icon: Icon(Icons.email_rounded, color: Colors.white),
                        label: Text(l10n.emailUs),
                        style: ElevatedButton.styleFrom(
                          backgroundColor: Colors.blue[600],
                          foregroundColor: Colors.white,
                          padding: EdgeInsets.symmetric(vertical: DS.m),
                        ),
                      ),
                    ),
                  ],
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }

  void _reportBug(BuildContext context) {
    final l10n = AppLocalizations.of(context)!;
    final isDark = Theme.of(context).brightness == Brightness.dark;
    Navigator.of(context).pop();

    showDialog(
      context: context,
      builder: (context) => Dialog(
        insetPadding: EdgeInsets.all(DS.m),

        shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.circular(DS.rMedium),
        ),
        child: Container(
          constraints: BoxConstraints(maxWidth: 400),
          child: Column(
            mainAxisSize: MainAxisSize.min,
            children: [
              // Header
              Container(
                padding: EdgeInsets.all(DS.m),
                decoration: BoxDecoration(
                  color: isDark ? Colors.grey[800] : Colors.red[50],
                  borderRadius: BorderRadius.only(
                    topLeft: Radius.circular(DS.rMedium),
                    topRight: Radius.circular(DS.rMedium),
                  ),
                ),
                child: Row(
                  children: [
                    Icon(
                      Icons.bug_report_rounded,
                      color: Colors.red[600],
                      size: 28,
                    ),
                    SizedBox(width: DS.s),
                    Expanded(
                      child: Text(
                        l10n.reportBug,
                        style: TextStyle(
                          fontSize: DS.textLG,
                          fontWeight: FontWeight.w600,
                          color: isDark ? Colors.white : Colors.black87,
                        ),
                      ),
                    ),
                    IconButton(
                      onPressed: () => Navigator.of(context).pop(),
                      icon: Icon(Icons.close_rounded, color: Colors.grey[600]),
                      padding: EdgeInsets.zero,
                      constraints: BoxConstraints(),
                    ),
                  ],
                ),
              ),
              // Content
              Padding(
                padding: EdgeInsets.all(DS.m),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(
                      l10n.bugReportDescription,
                      style: TextStyle(
                        fontSize: DS.textBase,
                        color: isDark ? Colors.white : Colors.black87,
                      ),
                    ),
                    SizedBox(height: DS.m),
                    Container(
                      padding: EdgeInsets.all(DS.m),
                      decoration: BoxDecoration(
                        color: isDark ? Colors.grey[800] : Colors.grey[100],
                        borderRadius: BorderRadius.circular(DS.rSmall),
                        border: Border.all(color: Colors.red[200]!, width: 1),
                      ),
                      child: Row(
                        children: [
                          Icon(
                            Icons.info_outline_rounded,
                            color: Colors.red[600],
                            size: 20,
                          ),
                          SizedBox(width: DS.s),
                          Expanded(
                            child: Text(
                              l10n.weWillHelpResolve,
                              style: TextStyle(
                                fontSize: DS.textSM,
                                color: isDark
                                    ? Colors.grey[300]
                                    : Colors.grey[700],
                              ),
                            ),
                          ),
                        ],
                      ),
                    ),
                  ],
                ),
              ),
              // Actions
              Container(
                padding: EdgeInsets.fromLTRB(DS.m, 0, DS.m, DS.m),
                child: Row(
                  children: [
                    Expanded(
                      child: TextButton(
                        onPressed: () => Navigator.of(context).pop(),
                        child: Text(l10n.cancel),
                      ),
                    ),
                    SizedBox(width: DS.s),
                    Expanded(
                      child: ElevatedButton.icon(
                        onPressed: () {
                          Navigator.of(context).pop();
                          _launchUrl(
                            'mailto:${l10n.supportEmail}?subject=${l10n.bugReportSubject} - ${l10n.appTitle}&body=${l10n.pleaseDescribeBug}',
                          );
                        },
                        icon: Icon(Icons.email_rounded, color: Colors.white),
                        label: Text(l10n.emailUs),
                        style: ElevatedButton.styleFrom(
                          backgroundColor: Colors.red[600],
                          foregroundColor: Colors.white,
                          padding: EdgeInsets.symmetric(vertical: DS.m),
                        ),
                      ),
                    ),
                  ],
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }

  void _requestFeature(BuildContext context) {
    final l10n = AppLocalizations.of(context)!;
    Navigator.of(context).pop();

    showDialog(
      context: context,
      builder: (context) => AlertDialog(
        insetPadding: EdgeInsets.all(DS.m),

        title: Row(
          children: [
            Icon(Icons.lightbulb_rounded, color: Colors.amber[600], size: 28),
            SizedBox(width: DS.s),
            Text(l10n.featureRequest),
          ],
        ),
        content: Column(
          mainAxisSize: MainAxisSize.min,
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(
              l10n.featureRequestDescription,
              style: TextStyle(fontSize: DS.textBase),
            ),
            SizedBox(height: DS.s),
            Text(
              l10n.weLoveToHearIdeas,
              style: TextStyle(fontSize: DS.textSM, color: Colors.grey[600]),
            ),
          ],
        ),
        actions: [
          TextButton(
            onPressed: () => Navigator.of(context).pop(),
            child: Text(l10n.cancel),
          ),
          ElevatedButton.icon(
            onPressed: () {
              Navigator.of(context).pop();
              _launchUrl(
                'mailto:${l10n.supportEmail}?subject=${l10n.featureRequestSubject} - ${l10n.appTitle}&body=${l10n.pleaseDescribeFeature}',
              );
            },
            icon: Icon(Icons.email_rounded, color: Colors.white),
            label: Text(l10n.emailUs),
            style: ElevatedButton.styleFrom(
              backgroundColor: Colors.amber[600],
              foregroundColor: Colors.white,
            ),
          ),
        ],
      ),
    );
  }

  void _sendFeedback(BuildContext context) {
    final l10n = AppLocalizations.of(context)!;
    Navigator.of(context).pop();

    showDialog(
      context: context,
      builder: (context) => AlertDialog(
        insetPadding: EdgeInsets.all(DS.m),

        title: Row(
          children: [
            Icon(Icons.feedback_rounded, color: Colors.purple[600], size: 28),
            SizedBox(width: DS.s),
            Text(l10n.generalFeedback),
          ],
        ),
        content: Column(
          mainAxisSize: MainAxisSize.min,
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(
              l10n.feedbackDescription,
              style: TextStyle(fontSize: DS.textBase),
            ),
            SizedBox(height: DS.s),
            Text(
              l10n.yourFeedbackHelps,
              style: TextStyle(fontSize: DS.textSM, color: Colors.grey[600]),
            ),
          ],
        ),
        actions: [
          TextButton(
            onPressed: () => Navigator.of(context).pop(),
            child: Text(l10n.cancel),
          ),
          ElevatedButton.icon(
            onPressed: () {
              Navigator.of(context).pop();
              _launchUrl(
                'mailto:${l10n.supportEmail}?subject=${l10n.feedbackSubject} - ${l10n.appTitle}&body=${l10n.pleaseShareFeedback}',
              );
            },
            icon: Icon(Icons.email_rounded, color: Colors.white),
            label: Text(l10n.emailUs),
            style: ElevatedButton.styleFrom(
              backgroundColor: Colors.purple[600],
              foregroundColor: Colors.white,
            ),
          ),
        ],
      ),
    );
  }

  /// Lock rename row for settings
  Widget _lockRenameRow(
    BuildContext context,
    DeviceProvider deviceProvider,
    bool isDark,
  ) {
    final l10n = AppLocalizations.of(context)!;

    return InkWell(
      onTap: () => _showLockRenameDialog(context, deviceProvider, isDark),
      child: Padding(
        padding: EdgeInsets.all(DS.m),
        child: Row(
          children: [
            Icon(Icons.edit_rounded, color: DS.info, size: 20),
            SizedBox(width: DS.m),
            Expanded(
              child: Text(
                l10n.lockName,
                style: TextStyle(
                  fontSize: DS.textSM,
                  fontWeight: FontWeight.w500,
                  color: isDark ? Colors.white : const Color(0xFF1E293B),
                ),
              ),
            ),
            Icon(
              Icons.chevron_right_rounded,
              color: isDark ? Colors.grey[500] : const Color(0xFF94A3B8),
              size: 20,
            ),
          ],
        ),
      ),
    );
  }

  /// Battery info row for settings
  Widget _batteryInfoRow(BuildContext context, bool isDark) {
    return Consumer<BleProvider>(
      builder: (context, bleProvider, child) {
        // Get real battery level from BLE service (voltageValue is in mV)
        final voltageMv = bleProvider.lastStatus?.voltageValue ?? 6100.0;
        final batteryLevel = voltageMv / 1000.0; // Convert mV to V

        // More realistic battery percentage calculation
        // 6.0V = 100%, 5.0V = 0% (typical Li-ion range)
        final batteryPercentage = ((batteryLevel - 5.0) / 1.0 * 100)
            .clamp(0, 100)
            .round();

        return Padding(
          padding: EdgeInsets.all(DS.m),
          child: Row(
            children: [
              Icon(
                _getBatteryIcon(batteryPercentage),
                color: _getBatteryColor(batteryPercentage),
                size: 20,
              ),
              SizedBox(width: DS.m),
              Expanded(
                child: Text(
                  'Battery Level',
                  style: TextStyle(
                    fontSize: DS.textSM,
                    fontWeight: FontWeight.w500,
                    color: isDark ? Colors.white : const Color(0xFF1E293B),
                  ),
                ),
              ),
              Column(
                crossAxisAlignment: CrossAxisAlignment.end,
                children: [
                  Text(
                    '${batteryLevel.toStringAsFixed(1)}V',
                    style: TextStyle(
                      fontSize: DS.textSM,
                      color: isDark
                          ? Colors.grey[400]
                          : const Color(0xFF64748B),
                    ),
                  ),
                  Text(
                    '$batteryPercentage%',
                    style: TextStyle(
                      fontSize: DS.textXS,
                      color: _getBatteryColor(batteryPercentage),
                    ),
                  ),
                ],
              ),
            ],
          ),
        );
      },
    );
  }

  /// Get battery icon based on percentage
  IconData _getBatteryIcon(int percentage) {
    if (percentage > 90) return Icons.battery_full_rounded;
    if (percentage > 75) return Icons.battery_6_bar_rounded;
    if (percentage > 50) return Icons.battery_4_bar_rounded;
    if (percentage > 25) return Icons.battery_2_bar_rounded;
    if (percentage > 10) return Icons.battery_1_bar_rounded;
    return Icons.battery_0_bar_rounded;
  }

  /// Get battery color based on percentage
  Color _getBatteryColor(int percentage) {
    if (percentage > 75) return DS.success; // Green for high battery
    if (percentage > 50) return Colors.orange; // Orange for medium battery
    if (percentage > 25) return DS.warning; // Yellow for low battery
    return DS.brandRed; // Red for critical battery
  }

  /// Buzzer control row for settings
  Widget _buzzerControlRow(BuildContext context, bool isDark) {
    final l10n = AppLocalizations.of(context)!;

    return Consumer<BleProvider>(
      builder: (context, bleProvider, child) {
        final isBuzzerOn = bleProvider.lastStatus?.buzzerOn ?? false;

        return InkWell(
          onTap: () async {
            HapticFeedback.lightImpact();
            // First get current buzzer status
            final currentStatus = await bleProvider.getBuzzerStatus();
            if (currentStatus != null) {
              final bool current = (currentStatus.buzzerOn == true);
              // Toggle buzzer
              final newStatus = await bleProvider.setBuzzerEnabled(!current);
              if (newStatus != null) {
                // Force UI update
                setState(() {});
              }
            }
          },
          child: Padding(
            padding: EdgeInsets.all(DS.m),
            child: Row(
              children: [
                Icon(
                  Icons.volume_up_rounded,
                  color: isBuzzerOn ? DS.success : DS.brandRed,
                  size: 20,
                ),
                SizedBox(width: DS.m),
                Expanded(
                  child: Text(
                    l10n.buzzer,
                    style: TextStyle(
                      fontSize: DS.textSM,
                      fontWeight: FontWeight.w500,
                      color: isDark ? Colors.white : const Color(0xFF1E293B),
                    ),
                  ),
                ),
                Container(
                  padding: EdgeInsets.symmetric(horizontal: DS.s, vertical: 2),
                  decoration: BoxDecoration(
                    color: isBuzzerOn ? DS.success : DS.brandRed,
                    borderRadius: BorderRadius.circular(4),
                  ),
                  child: Text(
                    isBuzzerOn ? 'ON' : 'OFF',
                    style: TextStyle(
                      fontSize: DS.textXS,
                      fontWeight: FontWeight.w600,
                      color: Colors.white,
                    ),
                  ),
                ),
              ],
            ),
          ),
        );
      },
    );
  }

  /// Reset lock row for settings
  Widget _resetLockRow(BuildContext context, bool isDark) {
    return InkWell(
      onTap: () async {
        HapticFeedback.lightImpact();
        // Show confirmation dialog
        final confirmed = await showDialog<bool>(
          context: context,
          builder: (context) => AlertDialog(
            title: Text('Reset Lock'),
            content: Text(
              'Are you sure you want to reset the lock? This action cannot be undone.',
            ),
            actions: [
              TextButton(
                onPressed: () => Navigator.of(context).pop(false),
                child: Text('Cancel'),
              ),
              TextButton(
                onPressed: () => Navigator.of(context).pop(true),
                child: Text('Reset', style: TextStyle(color: Colors.red)),
              ),
            ],
          ),
        );

        if (confirmed == true) {
          // Reset logic would go here
          Fluttertoast.showToast(
            msg: 'Lock reset successfully',
            toastLength: Toast.LENGTH_SHORT,
            gravity: ToastGravity.BOTTOM,
            backgroundColor: DS.success,
            textColor: Colors.white,
            fontSize: 14.0,
          );
        }
      },
      child: Padding(
        padding: EdgeInsets.all(DS.m),
        child: Row(
          children: [
            Icon(Icons.refresh_rounded, color: DS.error, size: 20),
            SizedBox(width: DS.m),
            Expanded(
              child: Text(
                'Reset Lock',
                style: TextStyle(
                  fontSize: DS.textSM,
                  fontWeight: FontWeight.w500,
                  color: isDark ? Colors.white : const Color(0xFF1E293B),
                ),
              ),
            ),
            Icon(
              Icons.chevron_right_rounded,
              color: isDark ? Colors.grey[500] : const Color(0xFF94A3B8),
              size: 20,
            ),
          ],
        ),
      ),
    );
  }

  /// Show lock rename dialog
  void _showLockRenameDialog(
    BuildContext context,
    DeviceProvider deviceProvider,
    bool isDark,
  ) {
    final l10n = AppLocalizations.of(context)!;
    final bleProvider = context.read<BleProvider>();
    final currentDevice = bleProvider.currentDevice;

    // Get current device name
    String currentName = '';
    if (currentDevice != null) {
      currentName = deviceProvider.getDisplayName(currentDevice);
    }

    final TextEditingController controller = TextEditingController(
      text: currentName,
    );

    showDialog(
      context: context,
      builder: (context) => Dialog(
        shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.circular(DS.rMedium),
        ),
        child: Container(
          constraints: BoxConstraints(
            maxWidth: 400,
            maxHeight: MediaQuery.of(context).size.height * 0.7, // Limit height
          ),
          child: Column(
            mainAxisSize: MainAxisSize.min,
            children: [
              // Header
              Container(
                padding: EdgeInsets.all(DS.m),
                decoration: BoxDecoration(
                  color: isDark ? Colors.grey[800] : Colors.blue[50],
                  borderRadius: BorderRadius.only(
                    topLeft: Radius.circular(DS.rMedium),
                    topRight: Radius.circular(DS.rMedium),
                  ),
                ),
                child: Row(
                  children: [
                    Icon(Icons.edit_rounded, color: DS.info, size: 24),
                    SizedBox(width: DS.s),
                    Expanded(
                      child: Text(
                        l10n.lockName,
                        style: TextStyle(
                          fontSize: DS.textLG,
                          fontWeight: FontWeight.w600,
                          color: isDark ? Colors.white : Colors.black87,
                        ),
                      ),
                    ),
                    IconButton(
                      onPressed: () => Navigator.of(context).pop(),
                      icon: Icon(Icons.close_rounded, color: Colors.grey[600]),
                      padding: EdgeInsets.zero,
                      constraints: BoxConstraints(),
                    ),
                  ],
                ),
              ),
              // Content - SingleChildScrollView to handle keyboard
              Flexible(
                child: SingleChildScrollView(
                  padding: EdgeInsets.all(DS.m),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(
                        l10n.lockName,
                        style: TextStyle(
                          fontSize: DS.textSM,
                          fontWeight: FontWeight.w500,
                          color: isDark ? Colors.grey[300] : Colors.grey[700],
                        ),
                      ),
                      SizedBox(height: DS.s),
                      TextField(
                        controller: controller,
                        autofocus: true,
                        decoration: InputDecoration(
                          hintText: l10n.nameThisLock,
                          border: OutlineInputBorder(
                            borderRadius: BorderRadius.circular(DS.rSmall),
                          ),
                          contentPadding: EdgeInsets.all(DS.s),
                        ),
                        maxLines: 1,
                        textInputAction: TextInputAction.done,
                      ),
                      SizedBox(height: DS.m),
                    ],
                  ),
                ),
              ),
              // Actions
              Container(
                padding: EdgeInsets.fromLTRB(DS.m, 0, DS.m, DS.m),
                child: Row(
                  children: [
                    Expanded(
                      child: TextButton(
                        onPressed: () => Navigator.of(context).pop(),
                        child: Text(l10n.cancel),
                      ),
                    ),
                    SizedBox(width: DS.s),
                    Expanded(
                      child: ElevatedButton(
                        onPressed: () async {
                          final name = controller.text.trim();
                          if (name.isNotEmpty) {
                            // Get the current connected device
                            final bleProvider = context.read<BleProvider>();
                            final currentDevice = bleProvider.currentDevice;

                            if (currentDevice != null) {
                              // Save the device name
                              final success = await deviceProvider
                                  .saveDeviceName(currentDevice.id, name);

                              Navigator.of(context).pop();

                              if (success) {
                                // Refresh device provider to update UI
                                await deviceProvider.refresh();

                                Fluttertoast.showToast(
                                  msg: 'Device renamed to: $name',
                                  toastLength: Toast.LENGTH_SHORT,
                                  gravity: ToastGravity.BOTTOM,
                                  backgroundColor: DS.success,
                                  textColor: Colors.white,
                                  fontSize: 14.0,
                                );
                              } else {
                                Fluttertoast.showToast(
                                  msg: 'Failed to save device name',
                                  toastLength: Toast.LENGTH_SHORT,
                                  gravity: ToastGravity.BOTTOM,
                                  backgroundColor: Colors.red,
                                  textColor: Colors.white,
                                  fontSize: 14.0,
                                );
                              }
                            } else {
                              Navigator.of(context).pop();
                              Fluttertoast.showToast(
                                msg: 'No device connected',
                                toastLength: Toast.LENGTH_SHORT,
                                gravity: ToastGravity.BOTTOM,
                                backgroundColor: Colors.red,
                                textColor: Colors.white,
                                fontSize: 14.0,
                              );
                            }
                          }
                        },
                        style: ElevatedButton.styleFrom(
                          backgroundColor: DS.info,
                          foregroundColor: Colors.white,
                        ),
                        child: Text(l10n.save),
                      ),
                    ),
                  ],
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }

}
