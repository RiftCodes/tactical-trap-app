import 'dart:async';

import 'package:flutter/foundation.dart';
import 'package:flutter/widgets.dart';
import 'package:flutter_localizations/flutter_localizations.dart';
import 'package:intl/intl.dart' as intl;

import 'app_localizations_en.dart';
import 'app_localizations_es.dart';
import 'app_localizations_fr.dart';

// ignore_for_file: type=lint

/// Callers can lookup localized strings with an instance of AppLocalizations
/// returned by `AppLocalizations.of(context)`.
///
/// Applications need to include `AppLocalizations.delegate()` in their app's
/// `localizationDelegates` list, and the locales they support in the app's
/// `supportedLocales` list. For example:
///
/// ```dart
/// import 'l10n/app_localizations.dart';
///
/// return MaterialApp(
///   localizationsDelegates: AppLocalizations.localizationsDelegates,
///   supportedLocales: AppLocalizations.supportedLocales,
///   home: MyApplicationHome(),
/// );
/// ```
///
/// ## Update pubspec.yaml
///
/// Please make sure to update your pubspec.yaml to include the following
/// packages:
///
/// ```yaml
/// dependencies:
///   # Internationalization support.
///   flutter_localizations:
///     sdk: flutter
///   intl: any # Use the pinned version from flutter_localizations
///
///   # Rest of dependencies
/// ```
///
/// ## iOS Applications
///
/// iOS applications define key application metadata, including supported
/// locales, in an Info.plist file that is built into the application bundle.
/// To configure the locales supported by your app, you’ll need to edit this
/// file.
///
/// First, open your project’s ios/Runner.xcworkspace Xcode workspace file.
/// Then, in the Project Navigator, open the Info.plist file under the Runner
/// project’s Runner folder.
///
/// Next, select the Information Property List item, select Add Item from the
/// Editor menu, then select Localizations from the pop-up menu.
///
/// Select and expand the newly-created Localizations item then, for each
/// locale your application supports, add a new item and select the locale
/// you wish to add from the pop-up menu in the Value field. This list should
/// be consistent with the languages listed in the AppLocalizations.supportedLocales
/// property.
abstract class AppLocalizations {
  AppLocalizations(String locale) : localeName = intl.Intl.canonicalizedLocale(locale.toString());

  final String localeName;

  static AppLocalizations? of(BuildContext context) {
    return Localizations.of<AppLocalizations>(context, AppLocalizations);
  }

  static const LocalizationsDelegate<AppLocalizations> delegate = _AppLocalizationsDelegate();

  /// A list of this localizations delegate along with the default localizations
  /// delegates.
  ///
  /// Returns a list of localizations delegates containing this delegate along with
  /// GlobalMaterialLocalizations.delegate, GlobalCupertinoLocalizations.delegate,
  /// and GlobalWidgetsLocalizations.delegate.
  ///
  /// Additional delegates can be added by appending to this list in
  /// MaterialApp. This list does not have to be used at all if a custom list
  /// of delegates is preferred or required.
  static const List<LocalizationsDelegate<dynamic>> localizationsDelegates = <LocalizationsDelegate<dynamic>>[
    delegate,
    GlobalMaterialLocalizations.delegate,
    GlobalCupertinoLocalizations.delegate,
    GlobalWidgetsLocalizations.delegate,
  ];

  /// A list of this localizations delegate's supported locales.
  static const List<Locale> supportedLocales = <Locale>[
    Locale('en'),
    Locale('es'),
    Locale('fr')
  ];

  /// No description provided for @appTitle.
  ///
  /// In en, this message translates to:
  /// **'Tactical Traps'**
  String get appTitle;

  /// No description provided for @settings.
  ///
  /// In en, this message translates to:
  /// **'Settings'**
  String get settings;

  /// No description provided for @appearance.
  ///
  /// In en, this message translates to:
  /// **'Appearance'**
  String get appearance;

  /// No description provided for @notConnected.
  ///
  /// In en, this message translates to:
  /// **'Not Connected'**
  String get notConnected;

  /// No description provided for @connectToLockMessage.
  ///
  /// In en, this message translates to:
  /// **'Connect to your Tactical Traps lock to control it'**
  String get connectToLockMessage;

  /// No description provided for @lockSettings.
  ///
  /// In en, this message translates to:
  /// **'Lock configuration options'**
  String get lockSettings;

  /// No description provided for @lockName.
  ///
  /// In en, this message translates to:
  /// **'Lock Name'**
  String get lockName;

  /// No description provided for @nameThisLock.
  ///
  /// In en, this message translates to:
  /// **'Name this lock'**
  String get nameThisLock;

  /// No description provided for @lockControls.
  ///
  /// In en, this message translates to:
  /// **'Lock Controls'**
  String get lockControls;

  /// No description provided for @deviceDetails.
  ///
  /// In en, this message translates to:
  /// **'Device Details'**
  String get deviceDetails;

  /// No description provided for @lockId.
  ///
  /// In en, this message translates to:
  /// **'Lock ID'**
  String get lockId;

  /// No description provided for @deviceVersion.
  ///
  /// In en, this message translates to:
  /// **'Device Version'**
  String get deviceVersion;

  /// No description provided for @discovered.
  ///
  /// In en, this message translates to:
  /// **'Discovered'**
  String get discovered;

  /// No description provided for @manufacturerData.
  ///
  /// In en, this message translates to:
  /// **'Manufacturer Data'**
  String get manufacturerData;

  /// No description provided for @none.
  ///
  /// In en, this message translates to:
  /// **'None'**
  String get none;

  /// No description provided for @deviceType.
  ///
  /// In en, this message translates to:
  /// **'Device Type'**
  String get deviceType;

  /// No description provided for @tacticalLock.
  ///
  /// In en, this message translates to:
  /// **'Tactical Lock'**
  String get tacticalLock;

  /// No description provided for @unknown.
  ///
  /// In en, this message translates to:
  /// **'Unknown'**
  String get unknown;

  /// No description provided for @excellent.
  ///
  /// In en, this message translates to:
  /// **'Excellent'**
  String get excellent;

  /// No description provided for @good.
  ///
  /// In en, this message translates to:
  /// **'Good'**
  String get good;

  /// No description provided for @fair.
  ///
  /// In en, this message translates to:
  /// **'Fair'**
  String get fair;

  /// No description provided for @poor.
  ///
  /// In en, this message translates to:
  /// **'Poor'**
  String get poor;

  /// No description provided for @veryPoor.
  ///
  /// In en, this message translates to:
  /// **'Very Poor'**
  String get veryPoor;

  /// No description provided for @pleaseWait.
  ///
  /// In en, this message translates to:
  /// **'Please wait while we verify your PIN'**
  String get pleaseWait;

  /// No description provided for @mayTakeFewSeconds.
  ///
  /// In en, this message translates to:
  /// **'This may take a few seconds'**
  String get mayTakeFewSeconds;

  /// No description provided for @tapScanToSearch.
  ///
  /// In en, this message translates to:
  /// **'Tap the scan button to search for Tactical Traps locks'**
  String get tapScanToSearch;

  /// No description provided for @systemLanguage.
  ///
  /// In en, this message translates to:
  /// **'System Language'**
  String get systemLanguage;

  /// No description provided for @switchedToSystemLanguage.
  ///
  /// In en, this message translates to:
  /// **'Switched to system language'**
  String get switchedToSystemLanguage;

  /// No description provided for @stopScan.
  ///
  /// In en, this message translates to:
  /// **'Stop Scan'**
  String get stopScan;

  /// No description provided for @theme.
  ///
  /// In en, this message translates to:
  /// **'Theme'**
  String get theme;

  /// No description provided for @preferences.
  ///
  /// In en, this message translates to:
  /// **'Preferences'**
  String get preferences;

  /// No description provided for @autoConnect.
  ///
  /// In en, this message translates to:
  /// **'Auto-connect'**
  String get autoConnect;

  /// No description provided for @notifications.
  ///
  /// In en, this message translates to:
  /// **'Notifications'**
  String get notifications;

  /// No description provided for @haptics.
  ///
  /// In en, this message translates to:
  /// **'Haptics'**
  String get haptics;

  /// No description provided for @appInformation.
  ///
  /// In en, this message translates to:
  /// **'App Information'**
  String get appInformation;

  /// No description provided for @version.
  ///
  /// In en, this message translates to:
  /// **'Version'**
  String get version;

  /// No description provided for @company.
  ///
  /// In en, this message translates to:
  /// **'Company'**
  String get company;

  /// No description provided for @data.
  ///
  /// In en, this message translates to:
  /// **'Data'**
  String get data;

  /// No description provided for @clearAllData.
  ///
  /// In en, this message translates to:
  /// **'Clear All Data'**
  String get clearAllData;

  /// No description provided for @clearAllDataTitle.
  ///
  /// In en, this message translates to:
  /// **'Clear All Data?'**
  String get clearAllDataTitle;

  /// No description provided for @clearAllDataMessage.
  ///
  /// In en, this message translates to:
  /// **'This will remove all stored data and cannot be undone.'**
  String get clearAllDataMessage;

  /// No description provided for @cancel.
  ///
  /// In en, this message translates to:
  /// **'Cancel'**
  String get cancel;

  /// No description provided for @clear.
  ///
  /// In en, this message translates to:
  /// **'Clear'**
  String get clear;

  /// No description provided for @language.
  ///
  /// In en, this message translates to:
  /// **'Language'**
  String get language;

  /// No description provided for @english.
  ///
  /// In en, this message translates to:
  /// **'English'**
  String get english;

  /// No description provided for @spanish.
  ///
  /// In en, this message translates to:
  /// **'Spanish'**
  String get spanish;

  /// No description provided for @french.
  ///
  /// In en, this message translates to:
  /// **'French'**
  String get french;

  /// No description provided for @home.
  ///
  /// In en, this message translates to:
  /// **'Home'**
  String get home;

  /// No description provided for @scan.
  ///
  /// In en, this message translates to:
  /// **'Scan'**
  String get scan;

  /// No description provided for @connect.
  ///
  /// In en, this message translates to:
  /// **'Connect'**
  String get connect;

  /// No description provided for @disconnect.
  ///
  /// In en, this message translates to:
  /// **'Disconnect'**
  String get disconnect;

  /// No description provided for @lock.
  ///
  /// In en, this message translates to:
  /// **'Lock'**
  String get lock;

  /// No description provided for @unlock.
  ///
  /// In en, this message translates to:
  /// **'Unlock'**
  String get unlock;

  /// No description provided for @connected.
  ///
  /// In en, this message translates to:
  /// **'Connected'**
  String get connected;

  /// No description provided for @disconnected.
  ///
  /// In en, this message translates to:
  /// **'Disconnected'**
  String get disconnected;

  /// No description provided for @scanning.
  ///
  /// In en, this message translates to:
  /// **'Scanning...'**
  String get scanning;

  /// No description provided for @noDevicesFound.
  ///
  /// In en, this message translates to:
  /// **'No devices found'**
  String get noDevicesFound;

  /// No description provided for @deviceName.
  ///
  /// In en, this message translates to:
  /// **'Device Name'**
  String get deviceName;

  /// No description provided for @deviceId.
  ///
  /// In en, this message translates to:
  /// **'Device ID'**
  String get deviceId;

  /// No description provided for @serialNumber.
  ///
  /// In en, this message translates to:
  /// **'Serial Number'**
  String get serialNumber;

  /// No description provided for @signalStrength.
  ///
  /// In en, this message translates to:
  /// **'Signal Strength'**
  String get signalStrength;

  /// No description provided for @voltage.
  ///
  /// In en, this message translates to:
  /// **'Voltage'**
  String get voltage;

  /// No description provided for @lockTime.
  ///
  /// In en, this message translates to:
  /// **'Lock Time'**
  String get lockTime;

  /// No description provided for @status.
  ///
  /// In en, this message translates to:
  /// **'Status'**
  String get status;

  /// No description provided for @connectedLock.
  ///
  /// In en, this message translates to:
  /// **'Connected Lock'**
  String get connectedLock;

  /// No description provided for @essentialControls.
  ///
  /// In en, this message translates to:
  /// **'Essential Controls'**
  String get essentialControls;

  /// No description provided for @advancedControls.
  ///
  /// In en, this message translates to:
  /// **'Advanced Controls'**
  String get advancedControls;

  /// No description provided for @lockUnlockToggle.
  ///
  /// In en, this message translates to:
  /// **'Lock/Unlock Toggle'**
  String get lockUnlockToggle;

  /// No description provided for @getStatus.
  ///
  /// In en, this message translates to:
  /// **'Get Status'**
  String get getStatus;

  /// No description provided for @sleepMode.
  ///
  /// In en, this message translates to:
  /// **'Sleep Mode'**
  String get sleepMode;

  /// No description provided for @getVersion.
  ///
  /// In en, this message translates to:
  /// **'Get Version'**
  String get getVersion;

  /// No description provided for @initializeLock.
  ///
  /// In en, this message translates to:
  /// **'Initialize Lock'**
  String get initializeLock;

  /// No description provided for @pinVerification.
  ///
  /// In en, this message translates to:
  /// **'PIN Verification'**
  String get pinVerification;

  /// No description provided for @enterPin.
  ///
  /// In en, this message translates to:
  /// **'Enter PIN'**
  String get enterPin;

  /// No description provided for @verify.
  ///
  /// In en, this message translates to:
  /// **'Verify'**
  String get verify;

  /// No description provided for @pinRequired.
  ///
  /// In en, this message translates to:
  /// **'PIN Required'**
  String get pinRequired;

  /// No description provided for @pinVerificationFailed.
  ///
  /// In en, this message translates to:
  /// **'PIN verification failed'**
  String get pinVerificationFailed;

  /// No description provided for @lockNotPaired.
  ///
  /// In en, this message translates to:
  /// **'Lock not paired properly. Enter PIN.'**
  String get lockNotPaired;

  /// No description provided for @lockOperationSuccess.
  ///
  /// In en, this message translates to:
  /// **'Lock operation successful'**
  String get lockOperationSuccess;

  /// No description provided for @lockOperationFailed.
  ///
  /// In en, this message translates to:
  /// **'Lock operation failed'**
  String get lockOperationFailed;

  /// No description provided for @connectionFailed.
  ///
  /// In en, this message translates to:
  /// **'Connection failed'**
  String get connectionFailed;

  /// No description provided for @deviceNotFound.
  ///
  /// In en, this message translates to:
  /// **'Device not found'**
  String get deviceNotFound;

  /// No description provided for @bluetoothNotAvailable.
  ///
  /// In en, this message translates to:
  /// **'Bluetooth not available'**
  String get bluetoothNotAvailable;

  /// No description provided for @permissionDenied.
  ///
  /// In en, this message translates to:
  /// **'Permission denied'**
  String get permissionDenied;

  /// No description provided for @timeout.
  ///
  /// In en, this message translates to:
  /// **'Timeout'**
  String get timeout;

  /// No description provided for @error.
  ///
  /// In en, this message translates to:
  /// **'Error'**
  String get error;

  /// No description provided for @success.
  ///
  /// In en, this message translates to:
  /// **'Success'**
  String get success;

  /// No description provided for @warning.
  ///
  /// In en, this message translates to:
  /// **'Warning'**
  String get warning;

  /// No description provided for @info.
  ///
  /// In en, this message translates to:
  /// **'Information'**
  String get info;

  /// No description provided for @loading.
  ///
  /// In en, this message translates to:
  /// **'Loading...'**
  String get loading;

  /// No description provided for @retry.
  ///
  /// In en, this message translates to:
  /// **'Retry'**
  String get retry;

  /// No description provided for @ok.
  ///
  /// In en, this message translates to:
  /// **'OK'**
  String get ok;

  /// No description provided for @yes.
  ///
  /// In en, this message translates to:
  /// **'Yes'**
  String get yes;

  /// No description provided for @no.
  ///
  /// In en, this message translates to:
  /// **'No'**
  String get no;

  /// No description provided for @close.
  ///
  /// In en, this message translates to:
  /// **'Close'**
  String get close;

  /// No description provided for @back.
  ///
  /// In en, this message translates to:
  /// **'Back'**
  String get back;

  /// No description provided for @next.
  ///
  /// In en, this message translates to:
  /// **'Next'**
  String get next;

  /// No description provided for @previous.
  ///
  /// In en, this message translates to:
  /// **'Previous'**
  String get previous;

  /// No description provided for @vibration.
  ///
  /// In en, this message translates to:
  /// **'Vibration'**
  String get vibration;

  /// No description provided for @refresh.
  ///
  /// In en, this message translates to:
  /// **'Refresh'**
  String get refresh;

  /// No description provided for @pdfManual.
  ///
  /// In en, this message translates to:
  /// **'PDF Manual'**
  String get pdfManual;

  /// No description provided for @loadingManual.
  ///
  /// In en, this message translates to:
  /// **'Loading manual...'**
  String get loadingManual;

  /// No description provided for @couldNotOpenLink.
  ///
  /// In en, this message translates to:
  /// **'Could not open link. Please install a browser app.'**
  String get couldNotOpenLink;

  /// No description provided for @failedToOpenLink.
  ///
  /// In en, this message translates to:
  /// **'Failed to open link'**
  String get failedToOpenLink;

  /// No description provided for @retryButton.
  ///
  /// In en, this message translates to:
  /// **'Retry'**
  String get retryButton;

  /// No description provided for @clearAllDataConfirmation.
  ///
  /// In en, this message translates to:
  /// **'Clear All Data?'**
  String get clearAllDataConfirmation;

  /// No description provided for @clearAllDataWarning.
  ///
  /// In en, this message translates to:
  /// **'This will remove all stored data and cannot be undone.'**
  String get clearAllDataWarning;

  /// No description provided for @cancelButton.
  ///
  /// In en, this message translates to:
  /// **'Cancel'**
  String get cancelButton;

  /// No description provided for @clearButton.
  ///
  /// In en, this message translates to:
  /// **'Clear'**
  String get clearButton;

  /// No description provided for @system.
  ///
  /// In en, this message translates to:
  /// **'System'**
  String get system;

  /// No description provided for @englishLanguage.
  ///
  /// In en, this message translates to:
  /// **'English'**
  String get englishLanguage;

  /// No description provided for @spanishLanguage.
  ///
  /// In en, this message translates to:
  /// **'Español'**
  String get spanishLanguage;

  /// No description provided for @frenchLanguage.
  ///
  /// In en, this message translates to:
  /// **'Français'**
  String get frenchLanguage;

  /// No description provided for @languageChanged.
  ///
  /// In en, this message translates to:
  /// **'Language changed to {languageName}'**
  String languageChanged(Object languageName);

  /// No description provided for @languageChangedPlaceholder.
  ///
  /// In en, this message translates to:
  /// **'Language changed to {languageName}'**
  String languageChangedPlaceholder(Object languageName);

  /// No description provided for @switchingToSystem.
  ///
  /// In en, this message translates to:
  /// **'Switching to system language'**
  String get switchingToSystem;

  /// No description provided for @settingLanguage.
  ///
  /// In en, this message translates to:
  /// **'Setting language to {languageCode}'**
  String settingLanguage(Object languageCode);

  /// No description provided for @languageChangeRequested.
  ///
  /// In en, this message translates to:
  /// **'Language change requested: {languageCode}'**
  String languageChangeRequested(Object languageCode);

  /// No description provided for @languageChangeCompleted.
  ///
  /// In en, this message translates to:
  /// **'Language change completed'**
  String get languageChangeCompleted;

  /// No description provided for @languageDisplay.
  ///
  /// In en, this message translates to:
  /// **'Current language - {languageCode} ({languageName})'**
  String languageDisplay(Object languageCode, Object languageName);

  /// No description provided for @languageDisplayPlaceholder.
  ///
  /// In en, this message translates to:
  /// **'Current language - {languageCode} ({languageName})'**
  String languageDisplayPlaceholder(Object languageCode, Object languageName);

  /// No description provided for @rebuildingWithLanguage.
  ///
  /// In en, this message translates to:
  /// **'Rebuilding with language: {languageCode}'**
  String rebuildingWithLanguage(Object languageCode);

  /// No description provided for @rebuildingWithLanguagePlaceholder.
  ///
  /// In en, this message translates to:
  /// **'Rebuilding with language: {languageCode}'**
  String rebuildingWithLanguagePlaceholder(Object languageCode);

  /// No description provided for @failedToLoadPackageInfo.
  ///
  /// In en, this message translates to:
  /// **'Failed to load package info: {error}'**
  String failedToLoadPackageInfo(Object error);

  /// No description provided for @failedToLoadPackageInfoPlaceholder.
  ///
  /// In en, this message translates to:
  /// **'Failed to load package info: {error}'**
  String failedToLoadPackageInfoPlaceholder(Object error);

  /// No description provided for @failedToLaunchUrl.
  ///
  /// In en, this message translates to:
  /// **'Failed to launch URL with all modes: {url}'**
  String failedToLaunchUrl(Object url);

  /// No description provided for @failedToLaunchUrlPlaceholder.
  ///
  /// In en, this message translates to:
  /// **'Failed to launch URL with all modes: {url}'**
  String failedToLaunchUrlPlaceholder(Object url);

  /// No description provided for @failedToLaunchUrlError.
  ///
  /// In en, this message translates to:
  /// **'Failed to launch URL: {error}'**
  String failedToLaunchUrlError(Object error);

  /// No description provided for @failedToLaunchUrlErrorPlaceholder.
  ///
  /// In en, this message translates to:
  /// **'Failed to launch URL: {error}'**
  String failedToLaunchUrlErrorPlaceholder(Object error);

  /// No description provided for @urlLaunchAttempt.
  ///
  /// In en, this message translates to:
  /// **'Attempting to launch URL: {url}'**
  String urlLaunchAttempt(Object url);

  /// No description provided for @urlLaunchAttemptPlaceholder.
  ///
  /// In en, this message translates to:
  /// **'Attempting to launch URL: {url}'**
  String urlLaunchAttemptPlaceholder(Object url);

  /// No description provided for @tryingLaunchMode.
  ///
  /// In en, this message translates to:
  /// **'Trying launch mode: {mode}'**
  String tryingLaunchMode(Object mode);

  /// No description provided for @tryingLaunchModePlaceholder.
  ///
  /// In en, this message translates to:
  /// **'Trying launch mode: {mode}'**
  String tryingLaunchModePlaceholder(Object mode);

  /// No description provided for @successfullyLaunched.
  ///
  /// In en, this message translates to:
  /// **'Successfully launched with mode: {mode}'**
  String successfullyLaunched(Object mode);

  /// No description provided for @successfullyLaunchedPlaceholder.
  ///
  /// In en, this message translates to:
  /// **'Successfully launched with mode: {mode}'**
  String successfullyLaunchedPlaceholder(Object mode);

  /// No description provided for @failedWithMode.
  ///
  /// In en, this message translates to:
  /// **'Failed with mode {mode}: {error}'**
  String failedWithMode(Object error, Object mode);

  /// No description provided for @failedWithModePlaceholder.
  ///
  /// In en, this message translates to:
  /// **'Failed with mode {mode}: {error}'**
  String failedWithModePlaceholder(Object error, Object mode);

  /// No description provided for @launchResult.
  ///
  /// In en, this message translates to:
  /// **'Launch result: {result}'**
  String launchResult(Object result);

  /// No description provided for @launchResultPlaceholder.
  ///
  /// In en, this message translates to:
  /// **'Launch result: {result}'**
  String launchResultPlaceholder(Object result);

  /// No description provided for @loadingManualFile.
  ///
  /// In en, this message translates to:
  /// **'Loading manual file: {fileName}'**
  String loadingManualFile(Object fileName);

  /// No description provided for @loadingManualFilePlaceholder.
  ///
  /// In en, this message translates to:
  /// **'Loading manual file: {fileName}'**
  String loadingManualFilePlaceholder(Object fileName);

  /// No description provided for @successfullyLoadedManual.
  ///
  /// In en, this message translates to:
  /// **'Successfully loaded manual content ({length} characters)'**
  String successfullyLoadedManual(Object length);

  /// No description provided for @successfullyLoadedManualPlaceholder.
  ///
  /// In en, this message translates to:
  /// **'Successfully loaded manual content ({length} characters)'**
  String successfullyLoadedManualPlaceholder(Object length);

  /// No description provided for @failedToLoadManualFile.
  ///
  /// In en, this message translates to:
  /// **'Failed to load manual file: {error}'**
  String failedToLoadManualFile(Object error);

  /// No description provided for @failedToLoadManualFilePlaceholder.
  ///
  /// In en, this message translates to:
  /// **'Failed to load manual file: {error}'**
  String failedToLoadManualFilePlaceholder(Object error);

  /// No description provided for @usingFallbackManual.
  ///
  /// In en, this message translates to:
  /// **'Using fallback manual content ({length} characters)'**
  String usingFallbackManual(Object length);

  /// No description provided for @usingFallbackManualPlaceholder.
  ///
  /// In en, this message translates to:
  /// **'Using fallback manual content ({length} characters)'**
  String usingFallbackManualPlaceholder(Object length);

  /// No description provided for @failedToLoadManual.
  ///
  /// In en, this message translates to:
  /// **'Failed to load manual: {error}'**
  String failedToLoadManual(Object error);

  /// No description provided for @failedToLoadManualPlaceholder.
  ///
  /// In en, this message translates to:
  /// **'Failed to load manual: {error}'**
  String failedToLoadManualPlaceholder(Object error);

  /// No description provided for @pdfNotAvailable.
  ///
  /// In en, this message translates to:
  /// **'PDF not available: {error}'**
  String pdfNotAvailable(Object error);

  /// No description provided for @pdfNotAvailablePlaceholder.
  ///
  /// In en, this message translates to:
  /// **'PDF not available: {error}'**
  String pdfNotAvailablePlaceholder(Object error);

  /// No description provided for @supportAndFeedback.
  ///
  /// In en, this message translates to:
  /// **'Support & Feedback'**
  String get supportAndFeedback;

  /// No description provided for @contactSupport.
  ///
  /// In en, this message translates to:
  /// **'Contact Support'**
  String get contactSupport;

  /// No description provided for @reportBug.
  ///
  /// In en, this message translates to:
  /// **'Report Bug'**
  String get reportBug;

  /// No description provided for @featureRequest.
  ///
  /// In en, this message translates to:
  /// **'Feature Request'**
  String get featureRequest;

  /// No description provided for @generalFeedback.
  ///
  /// In en, this message translates to:
  /// **'General Feedback'**
  String get generalFeedback;

  /// No description provided for @phoneSupport.
  ///
  /// In en, this message translates to:
  /// **'Phone Support'**
  String get phoneSupport;

  /// No description provided for @emailSupport.
  ///
  /// In en, this message translates to:
  /// **'Email Support'**
  String get emailSupport;

  /// No description provided for @callUs.
  ///
  /// In en, this message translates to:
  /// **'Call Us'**
  String get callUs;

  /// No description provided for @emailUs.
  ///
  /// In en, this message translates to:
  /// **'Email Us'**
  String get emailUs;

  /// No description provided for @developedBy.
  ///
  /// In en, this message translates to:
  /// **'Developed by'**
  String get developedBy;

  /// No description provided for @reckapSolutions.
  ///
  /// In en, this message translates to:
  /// **'Reckap Solutions LLC'**
  String get reckapSolutions;

  /// No description provided for @reckapWebsite.
  ///
  /// In en, this message translates to:
  /// **'https://reckap.com/'**
  String get reckapWebsite;

  /// No description provided for @tacticalTrapsProduct.
  ///
  /// In en, this message translates to:
  /// **'Tactical Traps'**
  String get tacticalTrapsProduct;

  /// No description provided for @tacticalTrapsWebsite.
  ///
  /// In en, this message translates to:
  /// **'https://www.tacticaltraps.com/'**
  String get tacticalTrapsWebsite;

  /// No description provided for @productBy.
  ///
  /// In en, this message translates to:
  /// **'Product by'**
  String get productBy;

  /// No description provided for @phoneNumber.
  ///
  /// In en, this message translates to:
  /// **'1 (800) 651-9171'**
  String get phoneNumber;

  /// No description provided for @supportEmail.
  ///
  /// In en, this message translates to:
  /// **'Support@TacticalTraps.com'**
  String get supportEmail;

  /// No description provided for @tapToCallSupport.
  ///
  /// In en, this message translates to:
  /// **'Tap to call our support team'**
  String get tapToCallSupport;

  /// No description provided for @tapToOpenEmail.
  ///
  /// In en, this message translates to:
  /// **'Tap to open your email app'**
  String get tapToOpenEmail;

  /// No description provided for @weWillHelpResolve.
  ///
  /// In en, this message translates to:
  /// **'We\'ll help you resolve the issue quickly.'**
  String get weWillHelpResolve;

  /// No description provided for @weLoveToHearIdeas.
  ///
  /// In en, this message translates to:
  /// **'We\'d love to hear your ideas!'**
  String get weLoveToHearIdeas;

  /// No description provided for @yourFeedbackHelps.
  ///
  /// In en, this message translates to:
  /// **'Your feedback helps us improve!'**
  String get yourFeedbackHelps;

  /// No description provided for @quickContact.
  ///
  /// In en, this message translates to:
  /// **'Quick Contact'**
  String get quickContact;

  /// No description provided for @feedbackAndSupport.
  ///
  /// In en, this message translates to:
  /// **'Feedback & Support'**
  String get feedbackAndSupport;

  /// No description provided for @reportIssuesOrBugs.
  ///
  /// In en, this message translates to:
  /// **'Report issues or bugs'**
  String get reportIssuesOrBugs;

  /// No description provided for @suggestNewFeatures.
  ///
  /// In en, this message translates to:
  /// **'Suggest new features'**
  String get suggestNewFeatures;

  /// No description provided for @shareYourThoughts.
  ///
  /// In en, this message translates to:
  /// **'Share your thoughts'**
  String get shareYourThoughts;

  /// No description provided for @bugReportSubject.
  ///
  /// In en, this message translates to:
  /// **'Bug Report'**
  String get bugReportSubject;

  /// No description provided for @featureRequestSubject.
  ///
  /// In en, this message translates to:
  /// **'Feature Request'**
  String get featureRequestSubject;

  /// No description provided for @feedbackSubject.
  ///
  /// In en, this message translates to:
  /// **'Feedback'**
  String get feedbackSubject;

  /// No description provided for @pleaseDescribeBug.
  ///
  /// In en, this message translates to:
  /// **'Please describe the bug you encountered:'**
  String get pleaseDescribeBug;

  /// No description provided for @pleaseDescribeFeature.
  ///
  /// In en, this message translates to:
  /// **'Please describe the feature you\'d like to see:'**
  String get pleaseDescribeFeature;

  /// No description provided for @pleaseShareFeedback.
  ///
  /// In en, this message translates to:
  /// **'Please share your feedback:'**
  String get pleaseShareFeedback;

  /// No description provided for @supportDescription.
  ///
  /// In en, this message translates to:
  /// **'Need help? Contact our support team or report issues directly from the app.'**
  String get supportDescription;

  /// No description provided for @bugReportDescription.
  ///
  /// In en, this message translates to:
  /// **'Found a bug? Help us improve by reporting it with details.'**
  String get bugReportDescription;

  /// No description provided for @featureRequestDescription.
  ///
  /// In en, this message translates to:
  /// **'Have an idea? Request new features to make the app better.'**
  String get featureRequestDescription;

  /// No description provided for @feedbackDescription.
  ///
  /// In en, this message translates to:
  /// **'Share your thoughts and suggestions to help us improve.'**
  String get feedbackDescription;

  /// No description provided for @contactMethod.
  ///
  /// In en, this message translates to:
  /// **'Contact Method'**
  String get contactMethod;

  /// No description provided for @chooseContactMethod.
  ///
  /// In en, this message translates to:
  /// **'Choose how you\'d like to contact us:'**
  String get chooseContactMethod;

  /// No description provided for @phoneCall.
  ///
  /// In en, this message translates to:
  /// **'Phone Call'**
  String get phoneCall;

  /// No description provided for @emailMessage.
  ///
  /// In en, this message translates to:
  /// **'Email Message'**
  String get emailMessage;

  /// No description provided for @visitWebsite.
  ///
  /// In en, this message translates to:
  /// **'Visit Website'**
  String get visitWebsite;

  /// No description provided for @delete.
  ///
  /// In en, this message translates to:
  /// **'Delete'**
  String get delete;

  /// No description provided for @serialNumberShort.
  ///
  /// In en, this message translates to:
  /// **'SN: {sn}'**
  String serialNumberShort(Object sn);

  /// No description provided for @online.
  ///
  /// In en, this message translates to:
  /// **'Online'**
  String get online;

  /// No description provided for @originalName.
  ///
  /// In en, this message translates to:
  /// **'Original Name'**
  String get originalName;

  /// No description provided for @signalQuality.
  ///
  /// In en, this message translates to:
  /// **'Signal Quality:'**
  String get signalQuality;

  /// No description provided for @found.
  ///
  /// In en, this message translates to:
  /// **'Found'**
  String get found;

  /// No description provided for @justNow.
  ///
  /// In en, this message translates to:
  /// **'Just now'**
  String get justNow;

  /// No description provided for @appRating.
  ///
  /// In en, this message translates to:
  /// **'App Rating'**
  String get appRating;

  /// No description provided for @shareApp.
  ///
  /// In en, this message translates to:
  /// **'Share App'**
  String get shareApp;

  /// No description provided for @privacyPolicy.
  ///
  /// In en, this message translates to:
  /// **'Privacy Policy'**
  String get privacyPolicy;

  /// No description provided for @userManual.
  ///
  /// In en, this message translates to:
  /// **'User Manual'**
  String get userManual;

  /// No description provided for @viewFullManual.
  ///
  /// In en, this message translates to:
  /// **'View Full Manual'**
  String get viewFullManual;

  /// No description provided for @rateApp.
  ///
  /// In en, this message translates to:
  /// **'Rate App'**
  String get rateApp;

  /// No description provided for @rateAppMessage.
  ///
  /// In en, this message translates to:
  /// **'Would you like to rate this app on the Play Store?'**
  String get rateAppMessage;

  /// No description provided for @rateOnPlayStore.
  ///
  /// In en, this message translates to:
  /// **'Rate on Play Store'**
  String get rateOnPlayStore;

  /// No description provided for @shareAppMessage.
  ///
  /// In en, this message translates to:
  /// **'Check out this awesome Tactical Traps Bluetooth Lock app!'**
  String get shareAppMessage;

  /// No description provided for @buildNumber.
  ///
  /// In en, this message translates to:
  /// **'Build Number'**
  String get buildNumber;

  /// No description provided for @packageName.
  ///
  /// In en, this message translates to:
  /// **'Package Name'**
  String get packageName;

  /// No description provided for @installSource.
  ///
  /// In en, this message translates to:
  /// **'Install Source'**
  String get installSource;

  /// No description provided for @lastUpdated.
  ///
  /// In en, this message translates to:
  /// **'Last Updated'**
  String get lastUpdated;

  /// No description provided for @support.
  ///
  /// In en, this message translates to:
  /// **'Support'**
  String get support;

  /// No description provided for @introduction.
  ///
  /// In en, this message translates to:
  /// **'Introduction'**
  String get introduction;

  /// No description provided for @welcomeMessage.
  ///
  /// In en, this message translates to:
  /// **'Welcome to the Tactical Traps Bluetooth Lock Control App!'**
  String get welcomeMessage;

  /// No description provided for @whatsIncluded.
  ///
  /// In en, this message translates to:
  /// **'What\'s included with your lock'**
  String get whatsIncluded;

  /// No description provided for @gettingStarted.
  ///
  /// In en, this message translates to:
  /// **'Getting Started'**
  String get gettingStarted;

  /// No description provided for @systemRequirements.
  ///
  /// In en, this message translates to:
  /// **'System requirements and setup'**
  String get systemRequirements;

  /// No description provided for @firstTimeSetup.
  ///
  /// In en, this message translates to:
  /// **'First-time setup instructions'**
  String get firstTimeSetup;

  /// No description provided for @appFeatures.
  ///
  /// In en, this message translates to:
  /// **'App Features'**
  String get appFeatures;

  /// No description provided for @mainInterface.
  ///
  /// In en, this message translates to:
  /// **'Main interface and navigation'**
  String get mainInterface;

  /// No description provided for @securityFeatures.
  ///
  /// In en, this message translates to:
  /// **'Security features and PIN management'**
  String get securityFeatures;

  /// No description provided for @connectingToLock.
  ///
  /// In en, this message translates to:
  /// **'Connecting to Your Lock'**
  String get connectingToLock;

  /// No description provided for @initialConnection.
  ///
  /// In en, this message translates to:
  /// **'Initial connection process'**
  String get initialConnection;

  /// No description provided for @pinManagement.
  ///
  /// In en, this message translates to:
  /// **'PIN management and security'**
  String get pinManagement;

  /// No description provided for @connectionStatus.
  ///
  /// In en, this message translates to:
  /// **'Connection status indicators'**
  String get connectionStatus;

  /// No description provided for @basicOperations.
  ///
  /// In en, this message translates to:
  /// **'Basic Operations'**
  String get basicOperations;

  /// No description provided for @lockingUnlocking.
  ///
  /// In en, this message translates to:
  /// **'Locking and unlocking procedures'**
  String get lockingUnlocking;

  /// No description provided for @statusCheck.
  ///
  /// In en, this message translates to:
  /// **'Status checking and monitoring'**
  String get statusCheck;

  /// No description provided for @quickActions.
  ///
  /// In en, this message translates to:
  /// **'Quick action buttons'**
  String get quickActions;

  /// No description provided for @advancedFeatures.
  ///
  /// In en, this message translates to:
  /// **'Advanced Features'**
  String get advancedFeatures;

  /// No description provided for @userManagement.
  ///
  /// In en, this message translates to:
  /// **'User management and access control'**
  String get userManagement;

  /// No description provided for @monitoringLogs.
  ///
  /// In en, this message translates to:
  /// **'Activity monitoring and logs'**
  String get monitoringLogs;

  /// No description provided for @troubleshooting.
  ///
  /// In en, this message translates to:
  /// **'Troubleshooting'**
  String get troubleshooting;

  /// No description provided for @commonIssues.
  ///
  /// In en, this message translates to:
  /// **'Common problems and solutions'**
  String get commonIssues;

  /// No description provided for @errorMessages.
  ///
  /// In en, this message translates to:
  /// **'Error message explanations'**
  String get errorMessages;

  /// No description provided for @resetProcedures.
  ///
  /// In en, this message translates to:
  /// **'Reset and recovery procedures'**
  String get resetProcedures;

  /// No description provided for @safetyMaintenance.
  ///
  /// In en, this message translates to:
  /// **'Safety & Maintenance'**
  String get safetyMaintenance;

  /// No description provided for @securityBestPractices.
  ///
  /// In en, this message translates to:
  /// **'Security best practices'**
  String get securityBestPractices;

  /// No description provided for @lockMaintenance.
  ///
  /// In en, this message translates to:
  /// **'Lock maintenance procedures'**
  String get lockMaintenance;

  /// No description provided for @emergencyProcedures.
  ///
  /// In en, this message translates to:
  /// **'Emergency procedures'**
  String get emergencyProcedures;

  /// No description provided for @fullManualDescription.
  ///
  /// In en, this message translates to:
  /// **'Choose how you\'d like to view the complete manual:'**
  String get fullManualDescription;

  /// No description provided for @chooseManualType.
  ///
  /// In en, this message translates to:
  /// **'Online manual or PDF download'**
  String get chooseManualType;

  /// No description provided for @onlineManual.
  ///
  /// In en, this message translates to:
  /// **'View Online'**
  String get onlineManual;

  /// No description provided for @pdfLoadError.
  ///
  /// In en, this message translates to:
  /// **'PDF manual not available locally'**
  String get pdfLoadError;

  /// No description provided for @viewOnline.
  ///
  /// In en, this message translates to:
  /// **'View Online Manual'**
  String get viewOnline;

  /// No description provided for @alarm.
  ///
  /// In en, this message translates to:
  /// **'Alarm'**
  String get alarm;

  /// No description provided for @buzzer.
  ///
  /// In en, this message translates to:
  /// **'Buzzer'**
  String get buzzer;

  /// No description provided for @reset.
  ///
  /// In en, this message translates to:
  /// **'Reset'**
  String get reset;

  /// No description provided for @connectedToDevice.
  ///
  /// In en, this message translates to:
  /// **'Connected to {deviceName}'**
  String connectedToDevice(Object deviceName);

  /// No description provided for @failedToConnectToDevice.
  ///
  /// In en, this message translates to:
  /// **'Failed to connect to {device}'**
  String failedToConnectToDevice(Object device);

  /// No description provided for @connectionError.
  ///
  /// In en, this message translates to:
  /// **'Connection error: {error}'**
  String connectionError(Object error);

  /// No description provided for @failedToConnectCheckPin.
  ///
  /// In en, this message translates to:
  /// **'Failed to connect. Please check your PIN.'**
  String get failedToConnectCheckPin;

  /// No description provided for @factoryResetLock.
  ///
  /// In en, this message translates to:
  /// **'Factory Reset Lock?'**
  String get factoryResetLock;

  /// No description provided for @factoryResetMessage.
  ///
  /// In en, this message translates to:
  /// **'This will clear all user data on the lock and disconnect.'**
  String get factoryResetMessage;

  /// No description provided for @verifyingPin.
  ///
  /// In en, this message translates to:
  /// **'Verifying PIN...'**
  String get verifyingPin;

  /// No description provided for @save.
  ///
  /// In en, this message translates to:
  /// **'Save'**
  String get save;

  /// No description provided for @edit.
  ///
  /// In en, this message translates to:
  /// **'Edit'**
  String get edit;

  /// No description provided for @add.
  ///
  /// In en, this message translates to:
  /// **'Add'**
  String get add;

  /// No description provided for @remove.
  ///
  /// In en, this message translates to:
  /// **'Remove'**
  String get remove;

  /// No description provided for @search.
  ///
  /// In en, this message translates to:
  /// **'Search'**
  String get search;

  /// No description provided for @filter.
  ///
  /// In en, this message translates to:
  /// **'Filter'**
  String get filter;

  /// No description provided for @sort.
  ///
  /// In en, this message translates to:
  /// **'Sort'**
  String get sort;

  /// No description provided for @sync.
  ///
  /// In en, this message translates to:
  /// **'Sync'**
  String get sync;

  /// No description provided for @export.
  ///
  /// In en, this message translates to:
  /// **'Export'**
  String get export;

  /// No description provided for @import.
  ///
  /// In en, this message translates to:
  /// **'Import'**
  String get import;

  /// No description provided for @help.
  ///
  /// In en, this message translates to:
  /// **'Help'**
  String get help;

  /// No description provided for @about.
  ///
  /// In en, this message translates to:
  /// **'About'**
  String get about;

  /// No description provided for @privacy.
  ///
  /// In en, this message translates to:
  /// **'Privacy'**
  String get privacy;

  /// No description provided for @terms.
  ///
  /// In en, this message translates to:
  /// **'Terms'**
  String get terms;

  /// No description provided for @contact.
  ///
  /// In en, this message translates to:
  /// **'Contact'**
  String get contact;

  /// No description provided for @feedback.
  ///
  /// In en, this message translates to:
  /// **'Feedback'**
  String get feedback;

  /// No description provided for @rate.
  ///
  /// In en, this message translates to:
  /// **'Rate'**
  String get rate;

  /// No description provided for @share.
  ///
  /// In en, this message translates to:
  /// **'Share'**
  String get share;

  /// No description provided for @copy.
  ///
  /// In en, this message translates to:
  /// **'Copy'**
  String get copy;

  /// No description provided for @paste.
  ///
  /// In en, this message translates to:
  /// **'Paste'**
  String get paste;

  /// No description provided for @cut.
  ///
  /// In en, this message translates to:
  /// **'Cut'**
  String get cut;

  /// No description provided for @undo.
  ///
  /// In en, this message translates to:
  /// **'Undo'**
  String get undo;

  /// No description provided for @redo.
  ///
  /// In en, this message translates to:
  /// **'Redo'**
  String get redo;

  /// No description provided for @selectAll.
  ///
  /// In en, this message translates to:
  /// **'Select All'**
  String get selectAll;

  /// No description provided for @deselectAll.
  ///
  /// In en, this message translates to:
  /// **'Deselect All'**
  String get deselectAll;

  /// No description provided for @select.
  ///
  /// In en, this message translates to:
  /// **'Select'**
  String get select;

  /// No description provided for @deselect.
  ///
  /// In en, this message translates to:
  /// **'Deselect'**
  String get deselect;

  /// No description provided for @choose.
  ///
  /// In en, this message translates to:
  /// **'Choose'**
  String get choose;

  /// No description provided for @browse.
  ///
  /// In en, this message translates to:
  /// **'Browse'**
  String get browse;

  /// No description provided for @upload.
  ///
  /// In en, this message translates to:
  /// **'Upload'**
  String get upload;

  /// No description provided for @download.
  ///
  /// In en, this message translates to:
  /// **'Download'**
  String get download;

  /// No description provided for @install.
  ///
  /// In en, this message translates to:
  /// **'Install'**
  String get install;

  /// No description provided for @uninstall.
  ///
  /// In en, this message translates to:
  /// **'Uninstall'**
  String get uninstall;

  /// No description provided for @update.
  ///
  /// In en, this message translates to:
  /// **'Update'**
  String get update;

  /// No description provided for @upgrade.
  ///
  /// In en, this message translates to:
  /// **'Upgrade'**
  String get upgrade;

  /// No description provided for @downgrade.
  ///
  /// In en, this message translates to:
  /// **'Downgrade'**
  String get downgrade;

  /// No description provided for @restart.
  ///
  /// In en, this message translates to:
  /// **'Restart'**
  String get restart;

  /// No description provided for @shutdown.
  ///
  /// In en, this message translates to:
  /// **'Shutdown'**
  String get shutdown;

  /// No description provided for @reboot.
  ///
  /// In en, this message translates to:
  /// **'Reboot'**
  String get reboot;

  /// No description provided for @power.
  ///
  /// In en, this message translates to:
  /// **'Power'**
  String get power;

  /// No description provided for @battery.
  ///
  /// In en, this message translates to:
  /// **'Battery'**
  String get battery;

  /// No description provided for @charging.
  ///
  /// In en, this message translates to:
  /// **'Charging'**
  String get charging;

  /// No description provided for @discharging.
  ///
  /// In en, this message translates to:
  /// **'Discharging'**
  String get discharging;

  /// No description provided for @full.
  ///
  /// In en, this message translates to:
  /// **'Full'**
  String get full;

  /// No description provided for @empty.
  ///
  /// In en, this message translates to:
  /// **'Empty'**
  String get empty;

  /// No description provided for @low.
  ///
  /// In en, this message translates to:
  /// **'Low'**
  String get low;

  /// No description provided for @medium.
  ///
  /// In en, this message translates to:
  /// **'Medium'**
  String get medium;

  /// No description provided for @high.
  ///
  /// In en, this message translates to:
  /// **'High'**
  String get high;

  /// No description provided for @on.
  ///
  /// In en, this message translates to:
  /// **'On'**
  String get on;

  /// No description provided for @off.
  ///
  /// In en, this message translates to:
  /// **'Off'**
  String get off;

  /// No description provided for @enabled.
  ///
  /// In en, this message translates to:
  /// **'Enabled'**
  String get enabled;

  /// No description provided for @disabled.
  ///
  /// In en, this message translates to:
  /// **'Disabled'**
  String get disabled;

  /// No description provided for @active.
  ///
  /// In en, this message translates to:
  /// **'Active'**
  String get active;

  /// No description provided for @inactive.
  ///
  /// In en, this message translates to:
  /// **'Inactive'**
  String get inactive;

  /// No description provided for @visible.
  ///
  /// In en, this message translates to:
  /// **'Visible'**
  String get visible;

  /// No description provided for @hidden.
  ///
  /// In en, this message translates to:
  /// **'Hidden'**
  String get hidden;

  /// No description provided for @public.
  ///
  /// In en, this message translates to:
  /// **'Public'**
  String get public;

  /// No description provided for @private.
  ///
  /// In en, this message translates to:
  /// **'Private'**
  String get private;

  /// No description provided for @secure.
  ///
  /// In en, this message translates to:
  /// **'Secure'**
  String get secure;

  /// No description provided for @insecure.
  ///
  /// In en, this message translates to:
  /// **'Insecure'**
  String get insecure;

  /// No description provided for @locked.
  ///
  /// In en, this message translates to:
  /// **'Locked'**
  String get locked;

  /// No description provided for @unlocked.
  ///
  /// In en, this message translates to:
  /// **'Unlocked'**
  String get unlocked;

  /// No description provided for @open.
  ///
  /// In en, this message translates to:
  /// **'Open'**
  String get open;

  /// No description provided for @closed.
  ///
  /// In en, this message translates to:
  /// **'Closed'**
  String get closed;

  /// No description provided for @offline.
  ///
  /// In en, this message translates to:
  /// **'Offline'**
  String get offline;

  /// No description provided for @available.
  ///
  /// In en, this message translates to:
  /// **'Available'**
  String get available;

  /// No description provided for @unavailable.
  ///
  /// In en, this message translates to:
  /// **'Unavailable'**
  String get unavailable;

  /// No description provided for @busy.
  ///
  /// In en, this message translates to:
  /// **'Busy'**
  String get busy;

  /// No description provided for @idle.
  ///
  /// In en, this message translates to:
  /// **'Idle'**
  String get idle;

  /// No description provided for @ready.
  ///
  /// In en, this message translates to:
  /// **'Ready'**
  String get ready;

  /// No description provided for @notReady.
  ///
  /// In en, this message translates to:
  /// **'Not Ready'**
  String get notReady;

  /// No description provided for @pending.
  ///
  /// In en, this message translates to:
  /// **'Pending'**
  String get pending;

  /// No description provided for @processing.
  ///
  /// In en, this message translates to:
  /// **'Processing'**
  String get processing;

  /// No description provided for @completed.
  ///
  /// In en, this message translates to:
  /// **'Completed'**
  String get completed;

  /// No description provided for @failed.
  ///
  /// In en, this message translates to:
  /// **'Failed'**
  String get failed;

  /// No description provided for @cancelled.
  ///
  /// In en, this message translates to:
  /// **'Cancelled'**
  String get cancelled;

  /// No description provided for @scheduled.
  ///
  /// In en, this message translates to:
  /// **'Scheduled'**
  String get scheduled;

  /// No description provided for @overdue.
  ///
  /// In en, this message translates to:
  /// **'Overdue'**
  String get overdue;

  /// No description provided for @today.
  ///
  /// In en, this message translates to:
  /// **'Today'**
  String get today;

  /// No description provided for @yesterday.
  ///
  /// In en, this message translates to:
  /// **'Yesterday'**
  String get yesterday;

  /// No description provided for @tomorrow.
  ///
  /// In en, this message translates to:
  /// **'Tomorrow'**
  String get tomorrow;

  /// No description provided for @thisWeek.
  ///
  /// In en, this message translates to:
  /// **'This Week'**
  String get thisWeek;

  /// No description provided for @lastWeek.
  ///
  /// In en, this message translates to:
  /// **'Last Week'**
  String get lastWeek;

  /// No description provided for @nextWeek.
  ///
  /// In en, this message translates to:
  /// **'Next Week'**
  String get nextWeek;

  /// No description provided for @thisMonth.
  ///
  /// In en, this message translates to:
  /// **'This Month'**
  String get thisMonth;

  /// No description provided for @lastMonth.
  ///
  /// In en, this message translates to:
  /// **'Last Month'**
  String get lastMonth;

  /// No description provided for @nextMonth.
  ///
  /// In en, this message translates to:
  /// **'Next Month'**
  String get nextMonth;

  /// No description provided for @thisYear.
  ///
  /// In en, this message translates to:
  /// **'This Year'**
  String get thisYear;

  /// No description provided for @lastYear.
  ///
  /// In en, this message translates to:
  /// **'Last Year'**
  String get lastYear;

  /// No description provided for @nextYear.
  ///
  /// In en, this message translates to:
  /// **'Next Year'**
  String get nextYear;

  /// No description provided for @morning.
  ///
  /// In en, this message translates to:
  /// **'Morning'**
  String get morning;

  /// No description provided for @afternoon.
  ///
  /// In en, this message translates to:
  /// **'Afternoon'**
  String get afternoon;

  /// No description provided for @evening.
  ///
  /// In en, this message translates to:
  /// **'Evening'**
  String get evening;

  /// No description provided for @night.
  ///
  /// In en, this message translates to:
  /// **'Night'**
  String get night;

  /// No description provided for @midnight.
  ///
  /// In en, this message translates to:
  /// **'Midnight'**
  String get midnight;

  /// No description provided for @noon.
  ///
  /// In en, this message translates to:
  /// **'Noon'**
  String get noon;

  /// No description provided for @am.
  ///
  /// In en, this message translates to:
  /// **'AM'**
  String get am;

  /// No description provided for @pm.
  ///
  /// In en, this message translates to:
  /// **'PM'**
  String get pm;

  /// No description provided for @seconds.
  ///
  /// In en, this message translates to:
  /// **'seconds'**
  String get seconds;

  /// No description provided for @minutes.
  ///
  /// In en, this message translates to:
  /// **'minutes'**
  String get minutes;

  /// No description provided for @hours.
  ///
  /// In en, this message translates to:
  /// **'hours'**
  String get hours;

  /// No description provided for @days.
  ///
  /// In en, this message translates to:
  /// **'days'**
  String get days;

  /// No description provided for @weeks.
  ///
  /// In en, this message translates to:
  /// **'weeks'**
  String get weeks;

  /// No description provided for @months.
  ///
  /// In en, this message translates to:
  /// **'months'**
  String get months;

  /// No description provided for @years.
  ///
  /// In en, this message translates to:
  /// **'years'**
  String get years;

  /// No description provided for @second.
  ///
  /// In en, this message translates to:
  /// **'second'**
  String get second;

  /// No description provided for @minute.
  ///
  /// In en, this message translates to:
  /// **'minute'**
  String get minute;

  /// No description provided for @hour.
  ///
  /// In en, this message translates to:
  /// **'hour'**
  String get hour;

  /// No description provided for @day.
  ///
  /// In en, this message translates to:
  /// **'day'**
  String get day;

  /// No description provided for @week.
  ///
  /// In en, this message translates to:
  /// **'week'**
  String get week;

  /// No description provided for @month.
  ///
  /// In en, this message translates to:
  /// **'month'**
  String get month;

  /// No description provided for @year.
  ///
  /// In en, this message translates to:
  /// **'year'**
  String get year;

  /// No description provided for @bluetoothRequired.
  ///
  /// In en, this message translates to:
  /// **'Bluetooth Required'**
  String get bluetoothRequired;

  /// No description provided for @bluetoothEnableMessage.
  ///
  /// In en, this message translates to:
  /// **'Bluetooth must be enabled to scan for Tactical Traps locks. Would you like to enable Bluetooth now?'**
  String get bluetoothEnableMessage;

  /// No description provided for @enableBluetooth.
  ///
  /// In en, this message translates to:
  /// **'Enable Bluetooth'**
  String get enableBluetooth;

  /// No description provided for @bluetoothEnabledSuccess.
  ///
  /// In en, this message translates to:
  /// **'Bluetooth enabled successfully!'**
  String get bluetoothEnabledSuccess;

  /// No description provided for @bluetoothEnableFailed.
  ///
  /// In en, this message translates to:
  /// **'Failed to enable Bluetooth. Please enable it manually in settings.'**
  String get bluetoothEnableFailed;

  /// No description provided for @failedToConnect.
  ///
  /// In en, this message translates to:
  /// **'Failed to connect to {deviceName}'**
  String failedToConnect(Object deviceName);

  /// No description provided for @failedToConnectWithPin.
  ///
  /// In en, this message translates to:
  /// **'Failed to connect. Please check your PIN.'**
  String get failedToConnectWithPin;

  /// No description provided for @scanForLocks.
  ///
  /// In en, this message translates to:
  /// **'Scan for Locks'**
  String get scanForLocks;

  /// No description provided for @noDevicesInRange.
  ///
  /// In en, this message translates to:
  /// **'No devices in range'**
  String get noDevicesInRange;

  /// No description provided for @deviceNotFoundInRange.
  ///
  /// In en, this message translates to:
  /// **'Device not found in range'**
  String get deviceNotFoundInRange;

  /// No description provided for @pinVerificationRequired.
  ///
  /// In en, this message translates to:
  /// **'PIN verification required'**
  String get pinVerificationRequired;

  /// No description provided for @enterPinToConnect.
  ///
  /// In en, this message translates to:
  /// **'Enter PIN to connect to {deviceName}'**
  String enterPinToConnect(Object deviceName);

  /// No description provided for @lockEngaged.
  ///
  /// In en, this message translates to:
  /// **'Lock engaged'**
  String get lockEngaged;

  /// No description provided for @lockReleased.
  ///
  /// In en, this message translates to:
  /// **'Lock released'**
  String get lockReleased;

  /// No description provided for @initializationFailed.
  ///
  /// In en, this message translates to:
  /// **'Initialization failed'**
  String get initializationFailed;

  /// No description provided for @noResponseFromDevice.
  ///
  /// In en, this message translates to:
  /// **'No response from device'**
  String get noResponseFromDevice;

  /// No description provided for @noVersionResponse.
  ///
  /// In en, this message translates to:
  /// **'No version response'**
  String get noVersionResponse;

  /// No description provided for @noAlarmResponse.
  ///
  /// In en, this message translates to:
  /// **'No alarm response'**
  String get noAlarmResponse;

  /// No description provided for @noAlarmSetResponse.
  ///
  /// In en, this message translates to:
  /// **'No alarm set response'**
  String get noAlarmSetResponse;

  /// No description provided for @noBuzzerResponse.
  ///
  /// In en, this message translates to:
  /// **'No buzzer response'**
  String get noBuzzerResponse;

  /// No description provided for @noBuzzerSetResponse.
  ///
  /// In en, this message translates to:
  /// **'No buzzer set response'**
  String get noBuzzerSetResponse;

  /// No description provided for @noTimeSetResponse.
  ///
  /// In en, this message translates to:
  /// **'No time set response'**
  String get noTimeSetResponse;

  /// No description provided for @noTimeReadResponse.
  ///
  /// In en, this message translates to:
  /// **'No time read response'**
  String get noTimeReadResponse;

  /// No description provided for @failedToEnableBluetooth.
  ///
  /// In en, this message translates to:
  /// **'Failed to enable Bluetooth'**
  String get failedToEnableBluetooth;

  /// No description provided for @failedToCheckStoredPin.
  ///
  /// In en, this message translates to:
  /// **'Failed to check stored PIN'**
  String get failedToCheckStoredPin;

  /// No description provided for @noLastConnectedDevice.
  ///
  /// In en, this message translates to:
  /// **'No last connected device found'**
  String get noLastConnectedDevice;

  /// No description provided for @noStoredPinForLastDevice.
  ///
  /// In en, this message translates to:
  /// **'No stored PIN for last device'**
  String get noStoredPinForLastDevice;

  /// No description provided for @deviceNotInRange.
  ///
  /// In en, this message translates to:
  /// **'Device not found in range'**
  String get deviceNotInRange;

  /// No description provided for @failedToInitializeBluetooth.
  ///
  /// In en, this message translates to:
  /// **'Failed to initialize Bluetooth service'**
  String get failedToInitializeBluetooth;

  /// No description provided for @noDeviceConnected.
  ///
  /// In en, this message translates to:
  /// **'No device connected'**
  String get noDeviceConnected;

  /// No description provided for @lockCommandFailed.
  ///
  /// In en, this message translates to:
  /// **'Lock command failed'**
  String get lockCommandFailed;

  /// No description provided for @unlockCommandFailed.
  ///
  /// In en, this message translates to:
  /// **'Unlock command failed'**
  String get unlockCommandFailed;

  /// No description provided for @statusRequestFailed.
  ///
  /// In en, this message translates to:
  /// **'Status request failed'**
  String get statusRequestFailed;

  /// No description provided for @versionRequestFailed.
  ///
  /// In en, this message translates to:
  /// **'Version request failed'**
  String get versionRequestFailed;

  /// No description provided for @alarmStatusRequestFailed.
  ///
  /// In en, this message translates to:
  /// **'Alarm status request failed'**
  String get alarmStatusRequestFailed;

  /// No description provided for @alarmSettingFailed.
  ///
  /// In en, this message translates to:
  /// **'Alarm setting failed'**
  String get alarmSettingFailed;

  /// No description provided for @buzzerStatusRequestFailed.
  ///
  /// In en, this message translates to:
  /// **'Buzzer status request failed'**
  String get buzzerStatusRequestFailed;

  /// No description provided for @buzzerSettingFailed.
  ///
  /// In en, this message translates to:
  /// **'Buzzer setting failed'**
  String get buzzerSettingFailed;

  /// No description provided for @timeSettingFailed.
  ///
  /// In en, this message translates to:
  /// **'Time setting failed'**
  String get timeSettingFailed;

  /// No description provided for @timeReadingFailed.
  ///
  /// In en, this message translates to:
  /// **'Time reading failed'**
  String get timeReadingFailed;

  /// No description provided for @noDeviceConnectedOrStatusNotFound.
  ///
  /// In en, this message translates to:
  /// **'No device connected or status characteristic not found'**
  String get noDeviceConnectedOrStatusNotFound;

  /// No description provided for @commandCharacteristicNotFound.
  ///
  /// In en, this message translates to:
  /// **'Command characteristic not found'**
  String get commandCharacteristicNotFound;

  /// No description provided for @failedToWriteCommand.
  ///
  /// In en, this message translates to:
  /// **'Failed to write command'**
  String get failedToWriteCommand;

  /// No description provided for @backgroundStatusPollFailed.
  ///
  /// In en, this message translates to:
  /// **'Background status poll failed'**
  String get backgroundStatusPollFailed;

  /// No description provided for @silentStatusRequestFailed.
  ///
  /// In en, this message translates to:
  /// **'Silent status request failed'**
  String get silentStatusRequestFailed;

  /// No description provided for @reconnecting.
  ///
  /// In en, this message translates to:
  /// **'Reconnecting...'**
  String get reconnecting;

  /// No description provided for @pleaseWaitWhileReconnect.
  ///
  /// In en, this message translates to:
  /// **'Please wait while we reconnect'**
  String get pleaseWaitWhileReconnect;

  /// No description provided for @lockRenamedTo.
  ///
  /// In en, this message translates to:
  /// **'Lock renamed to {name}'**
  String lockRenamedTo(Object name);

  /// No description provided for @failedToSaveName.
  ///
  /// In en, this message translates to:
  /// **'Failed to save name'**
  String get failedToSaveName;

  /// No description provided for @fetching.
  ///
  /// In en, this message translates to:
  /// **'Fetching...'**
  String get fetching;
}

class _AppLocalizationsDelegate extends LocalizationsDelegate<AppLocalizations> {
  const _AppLocalizationsDelegate();

  @override
  Future<AppLocalizations> load(Locale locale) {
    return SynchronousFuture<AppLocalizations>(lookupAppLocalizations(locale));
  }

  @override
  bool isSupported(Locale locale) => <String>['en', 'es', 'fr'].contains(locale.languageCode);

  @override
  bool shouldReload(_AppLocalizationsDelegate old) => false;
}

AppLocalizations lookupAppLocalizations(Locale locale) {


  // Lookup logic when only language code is specified.
  switch (locale.languageCode) {
    case 'en': return AppLocalizationsEn();
    case 'es': return AppLocalizationsEs();
    case 'fr': return AppLocalizationsFr();
  }

  throw FlutterError(
    'AppLocalizations.delegate failed to load unsupported locale "$locale". This is likely '
    'an issue with the localizations generation tool. Please file an issue '
    'on GitHub with a reproducible sample app and the gen-l10n configuration '
    'that was used.'
  );
}
