import 'dart:io';

import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_pdfview/flutter_pdfview.dart';
import 'package:path_provider/path_provider.dart';
import 'package:tactical_trap_flutter/l10n/app_localizations.dart';

import '../style/design_system.dart';

class UserManualViewer extends StatefulWidget {
  final bool isDark;

  const UserManualViewer({super.key, required this.isDark});

  @override
  State<UserManualViewer> createState() => _UserManualViewerState();
}

class _UserManualViewerState extends State<UserManualViewer> {
  String _manualContent = '';
  bool _isLoading = false;
  String? _error;

  @override
  void initState() {
    super.initState();
    // Don't call _loadManualContent here, wait for didChangeDependencies
  }

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    // Only load content if we haven't loaded it yet
    if (_manualContent.isEmpty && mounted) {
      WidgetsBinding.instance.addPostFrameCallback((_) {
        if (mounted) {
          _loadManualContent();
        }
      });
    }
  }

  Future<void> _loadManualContent() async {
    try {
      setState(() {
        _isLoading = true;
        _error = null;
      });

      // Get current locale to load appropriate language
      String content;

      try {
        final locale = Localizations.localeOf(context).languageCode;
        String fileName;

        switch (locale) {
          case 'es':
            fileName = 'user_manual_es.md';
            break;
          case 'fr':
            fileName = 'user_manual_fr.md';
            break;
          default:
            fileName = 'user_manual_en.md';
        }

        if (kDebugMode) print('Loading manual file: assets/manuals/$fileName');
        content = await rootBundle.loadString('assets/manuals/$fileName');
        if (kDebugMode)
          print(
            'Successfully loaded manual content (${content.length} characters)',
          );
      } catch (e) {
        if (kDebugMode) print('Failed to load manual file: $e');
        // Fallback to simple manual content if file loading fails
        content = _getFallbackManualContent();
        if (kDebugMode)
          print('Using fallback manual content (${content.length} characters)');
      }

      if (mounted) {
        setState(() {
          _manualContent = content;
          _isLoading = false;
        });
      }
    } catch (e) {
      if (mounted) {
        setState(() {
          _error = 'Failed to load manual: $e';
          _isLoading = false;
        });
      }
    }
  }

  String _getFallbackManualContent() {
    return '''# Tactical Traps Lock Manual

## Getting Started
- Ensure Bluetooth is enabled on your device
- Place the lock within range (approximately 10 meters)
- Open the Tactical Traps app

## Basic Operations
- **Scan**: Tap the scan button to find nearby locks
- **Connect**: Select your lock from the device list
- **Lock/Unlock**: Use the main control buttons
- **PIN Setup**: Set a secure PIN for your lock

## Features
- **Alarm Control**: Toggle lock alarm system
- **Buzzer Control**: Control lock sound notifications
- **Reset Function**: Reset lock to factory settings
- **Status Monitoring**: Real-time lock status updates

## Troubleshooting
- If connection fails, try moving closer to the lock
- Ensure the lock has sufficient battery power
- Restart the app if issues persist
- Check Bluetooth permissions in device settings

## Support
For additional help, visit our website or contact support.''';
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
        actions: [
          IconButton(
            onPressed: () => _showPDFManual(context),
            icon: Icon(
              Icons.picture_as_pdf_rounded,
              color: widget.isDark ? Colors.white : const Color(0xFF1E293B),
            ),
            tooltip: 'PDF Manual',
          ),
        ],
      ),
      body: _isLoading
          ? Center(child: CircularProgressIndicator(color: DS.brandRed))
          : _error != null
          ? SingleChildScrollView(
              padding: EdgeInsets.all(DS.m),
              child: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  SizedBox(height: DS.xl * 2),
                  Icon(
                    Icons.error_outline,
                    size: 48,
                    color: widget.isDark
                        ? Colors.grey[400]
                        : const Color(0xFF64748B),
                  ),
                  SizedBox(height: DS.m),
                  Text(
                    _error!,
                    style: TextStyle(
                      fontSize: DS.textBase,
                      color: widget.isDark
                          ? Colors.grey[400]
                          : const Color(0xFF64748B),
                    ),
                    textAlign: TextAlign.center,
                  ),
                  SizedBox(height: DS.m),
                  ElevatedButton(
                    onPressed: _loadManualContent,
                    child: Text('Retry'),
                  ),
                  SizedBox(height: DS.xl * 2),
                ],
              ),
            )
          : _manualContent.isEmpty
          ? Center(
              child: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  CircularProgressIndicator(color: DS.brandRed),
                  SizedBox(height: DS.m),
                  Text(
                    'Loading manual...',
                    style: TextStyle(
                      color: widget.isDark
                          ? Colors.grey[400]
                          : Colors.grey[600],
                    ),
                  ),
                ],
              ),
            )
          : SingleChildScrollView(
              padding: EdgeInsets.all(DS.m),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  _buildMarkdownContent(),
                  SizedBox(height: DS.xl),
                ],
              ),
            ),
    );
  }

  void _showPDFManual(BuildContext context) {
    Navigator.of(context).push(
      MaterialPageRoute(
        builder: (context) => PDFViewerScreen(isDark: widget.isDark),
      ),
    );
  }

  Widget _buildMarkdownContent() {
    if (_manualContent.isEmpty) {
      return const SizedBox.shrink();
    }

    // Enhanced markdown parsing for headers, lists, bold text, and links
    final lines = _manualContent.split('\n');
    final widgets = <Widget>[];

    for (int i = 0; i < lines.length; i++) {
      final line = lines[i].trim();

      if (line.isEmpty) {
        widgets.add(SizedBox(height: DS.s));
        continue;
      }

      if (line.startsWith('#')) {
        // Header
        final level = line.split(' ')[0].length;
        final text = line.substring(level).trim();
        final fontSize = level == 1
            ? DS.textXL
            : level == 2
            ? DS.textLG
            : DS.textBase;
        final fontWeight = level == 1 ? FontWeight.bold : FontWeight.w600;

        widgets.add(
          Padding(
            padding: EdgeInsets.only(
              top: level == 1 ? DS.l : DS.m,
              bottom: DS.s,
            ),
            child: Text(
              text,
              style: TextStyle(
                fontSize: fontSize,
                fontWeight: fontWeight,
                color: widget.isDark ? Colors.white : Colors.black87,
              ),
            ),
          ),
        );
      } else if (line.startsWith('- ') || line.startsWith('* ')) {
        // Bullet list item with enhanced parsing
        final text = line.substring(2);
        widgets.add(
          Padding(
            padding: EdgeInsets.only(left: DS.m, bottom: DS.xs),
            child: Row(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  '• ',
                  style: TextStyle(
                    color: widget.isDark ? Colors.grey[400] : Colors.grey[600],
                    fontSize: DS.textSM,
                  ),
                ),
                Expanded(child: _parseInlineMarkdown(text)),
              ],
            ),
          ),
        );
      } else if (RegExp(r'^\d+\.\s').hasMatch(line)) {
        // Numbered list item
        final match = RegExp(r'^\d+\.\s').firstMatch(line)!;
        final number = line.substring(0, match.end);
        final text = line.substring(match.end);
        widgets.add(
          Padding(
            padding: EdgeInsets.only(left: DS.m, bottom: DS.xs),
            child: Row(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  number,
                  style: TextStyle(
                    color: widget.isDark ? Colors.grey[400] : Colors.grey[600],
                    fontSize: DS.textSM,
                    fontWeight: FontWeight.bold,
                  ),
                ),
                SizedBox(width: DS.xs),
                Expanded(child: _parseInlineMarkdown(text)),
              ],
            ),
          ),
        );
      } else if (line.startsWith('**') && line.endsWith('**')) {
        // Bold text
        final text = line.substring(2, line.length - 2);
        widgets.add(
          Padding(
            padding: EdgeInsets.only(bottom: DS.s),
            child: Text(
              text,
              style: TextStyle(
                fontSize: DS.textSM,
                fontWeight: FontWeight.bold,
                color: widget.isDark ? Colors.white : Colors.black87,
              ),
            ),
          ),
        );
      } else if (line.trim() == '---') {
        // Horizontal rule
        widgets.add(
          Padding(
            padding: EdgeInsets.symmetric(vertical: DS.m),
            child: Divider(
              color: widget.isDark ? Colors.grey[600] : Colors.grey[300],
              thickness: 1,
            ),
          ),
        );
      } else {
        // Regular paragraph with inline markdown parsing
        widgets.add(
          Padding(
            padding: EdgeInsets.only(bottom: DS.s),
            child: _parseInlineMarkdown(line),
          ),
        );
      }
    }

    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: widgets,
    );
  }

  Widget _parseInlineMarkdown(String text) {
    // Parse inline markdown like **bold**, [link](#section), etc.
    final spans = <TextSpan>[];
    int currentIndex = 0;

    while (currentIndex < text.length) {
      // Handle bold text: **text**
      if (text.startsWith('**', currentIndex)) {
        final endIndex = text.indexOf('**', currentIndex + 2);
        if (endIndex != -1) {
          final boldText = text.substring(currentIndex + 2, endIndex);
          spans.add(
            TextSpan(
              text: boldText,
              style: TextStyle(
                fontWeight: FontWeight.bold,
                color: widget.isDark ? Colors.white : Colors.black87,
              ),
            ),
          );
          currentIndex = endIndex + 2;
          continue;
        }
      }

      // Handle links: [text](#section)
      if (text.startsWith('[', currentIndex)) {
        final endBracketIndex = text.indexOf(']', currentIndex);
        if (endBracketIndex != -1 &&
            text.startsWith('(#', endBracketIndex + 1)) {
          final linkText = text.substring(currentIndex + 1, endBracketIndex);
          final endParenIndex = text.indexOf(')', endBracketIndex + 2);
          if (endParenIndex != -1) {
            spans.add(
              TextSpan(
                text: linkText,
                style: TextStyle(
                  color: DS.brandRed,
                  decoration: TextDecoration.underline,
                ),
              ),
            );
            currentIndex = endParenIndex + 1;
            continue;
          }
        }
      }

      // Regular text
      final nextBoldIndex = text.indexOf('**', currentIndex);
      final nextLinkIndex = text.indexOf('[', currentIndex);

      int nextSpecialIndex = text.length;
      if (nextBoldIndex != -1 && nextBoldIndex < nextSpecialIndex) {
        nextSpecialIndex = nextBoldIndex;
      }
      if (nextLinkIndex != -1 && nextLinkIndex < nextSpecialIndex) {
        nextSpecialIndex = nextLinkIndex;
      }

      final regularText = text.substring(currentIndex, nextSpecialIndex);
      if (regularText.isNotEmpty) {
        spans.add(
          TextSpan(
            text: regularText,
            style: TextStyle(
              color: widget.isDark ? Colors.grey[300] : Colors.black87,
            ),
          ),
        );
      }

      currentIndex = nextSpecialIndex;
    }

    return RichText(
      text: TextSpan(
        children: spans,
        style: TextStyle(fontSize: DS.textSM),
      ),
    );
  }
}

class PDFViewerScreen extends StatelessWidget {
  final bool isDark;

  const PDFViewerScreen({super.key, required this.isDark});

  @override
  Widget build(BuildContext context) {
    final l10n = AppLocalizations.of(context)!;

    return Scaffold(
      backgroundColor: isDark ? const Color(0xFF1A1A1A) : Colors.white,
      appBar: AppBar(
        title: Text(
          l10n.userManual,
          style: TextStyle(
            color: isDark ? Colors.white : const Color(0xFF1E293B),
          ),
        ),
        backgroundColor: isDark ? const Color(0xFF1A1A1A) : Colors.white,
        elevation: 0,
        iconTheme: IconThemeData(
          color: isDark ? Colors.white : const Color(0xFF1E293B),
        ),
      ),
      body: FutureBuilder<String>(
        future: _getPDFPath(),
        builder: (context, snapshot) {
          if (snapshot.connectionState == ConnectionState.waiting) {
            return Center(child: CircularProgressIndicator(color: DS.brandRed));
          }

          if (snapshot.hasError || !snapshot.hasData) {
            return Center(
              child: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Icon(
                    Icons.error_outline,
                    size: 64,
                    color: isDark ? Colors.grey[400] : const Color(0xFF64748B),
                  ),
                  SizedBox(height: DS.m),
                  Text(
                    l10n.pdfLoadError,
                    style: TextStyle(
                      fontSize: DS.textLG,
                      color: isDark
                          ? Colors.grey[400]
                          : const Color(0xFF64748B),
                    ),
                    textAlign: TextAlign.center,
                  ),
                ],
              ),
            );
          }

          return PDFView(
            filePath: snapshot.data!,
            enableSwipe: true,
            swipeHorizontal: false,
            autoSpacing: true,
            pageFling: true,
            pageSnap: true,
            defaultPage: 0,
            fitPolicy: FitPolicy.BOTH,
            preventLinkNavigation: false,
          );
        },
      ),
    );
  }

  Future<String> _getPDFPath() async {
    try {
      // Load PDF from assets
      final ByteData data = await rootBundle.load(
        'assets/manuals/Tactical Traps - Lock Manual.pdf',
      );
      final List<int> bytes = data.buffer.asUint8List();

      // Get temporary directory
      final Directory tempDir = await getTemporaryDirectory();
      final String tempPath = '${tempDir.path}/tactical_traps_manual.pdf';

      // Write PDF to temporary file
      final File tempFile = File(tempPath);
      await tempFile.writeAsBytes(bytes);

      return tempPath;
    } catch (e) {
      throw Exception('PDF not available: $e');
    }
  }
}
