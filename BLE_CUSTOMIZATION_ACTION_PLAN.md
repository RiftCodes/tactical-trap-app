# BLE Customization Action Plan for Tactical Traps Locks

## Overview

This document outlines the specific steps needed to customize the BLE implementation for Tactical Traps KR-S80 locks. The current implementation has the complete structure but needs device-specific protocol details.

## 🔍 Phase 1: Protocol Analysis (Week 1)

### 1.1 Device Identification Analysis

**Current Status**: Generic lock detection logic
**Required Action**: Analyze actual Tactical Traps lock characteristics

```dart
// CURRENT IMPLEMENTATION (generic)
bool _isTacticalTrapsLock(ScanResult result) {
  final name = result.device.platformName.toLowerCase();
  final localName = result.advertisementData.localName.toLowerCase() ?? '';

  return name.contains('tactical') ||
         name.contains('trap') ||
         name.contains('lock') ||
         localName.contains('tactical') ||
         localName.contains('trap') ||
         localName.contains('lock');
}

// NEEDED: Specific Tactical Traps identification
bool _isTacticalTrapsLock(ScanResult result) {
  // 1. Check manufacturer data for Tactical Traps identifier
  // 2. Verify specific service UUIDs
  // 3. Check device name patterns (e.g., "KR-S80", "TT-Lock")
  // 4. Validate advertisement data structure
}
```

**Action Items**:

- [ ] Connect to actual Tactical Traps lock using existing Angular app
- [ ] Capture and analyze advertisement data
- [ ] Identify manufacturer data patterns
- [ ] Document device naming conventions
- [ ] Capture service UUIDs

### 1.2 Service UUID Discovery

**Current Status**: Generic service discovery
**Required Action**: Identify specific Tactical Traps service and characteristic UUIDs

```dart
// CURRENT IMPLEMENTATION (generic)
for (final service in services) {
  for (final characteristic in service.characteristics) {
    if (characteristic.properties.write) {
      // Use any writable characteristic
    }
  }
}

// NEEDED: Specific UUIDs
const String TACTICAL_TRAPS_SERVICE_UUID = "XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX";
const String TACTICAL_TRAPS_WRITE_CHARACTERISTIC_UUID = "XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX";
const String TACTICAL_TRAPS_NOTIFY_CHARACTERISTIC_UUID = "XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX";
```

**Action Items**:

- [ ] Use Bluetooth scanner app to identify service UUIDs
- [ ] Document write and notify characteristic UUIDs
- [ ] Verify service discovery order
- [ ] Test characteristic properties and permissions

### 1.3 Command Structure Analysis

**Current Status**: Basic command structure
**Required Action**: Implement exact Tactical Traps command format

```dart
// CURRENT IMPLEMENTATION (example)
final command = [BleConstants.CMD, 0x01]; // Generic lock command

// NEEDED: Exact Tactical Traps format
List<int> buildLockCommand() {
  // 1. Command type (CMD = 1)
  // 2. Lock action (0x01 = lock, 0x02 = unlock)
  // 3. Checksum calculation
  // 4. Additional parameters (PIN, lock ID, etc.)
  return [CMD, 0x01, checksum];
}

List<int> buildUnlockCommand() {
  // 1. Command type (CMD = 1)
  // 2. Unlock action (0x02)
  // 3. PIN verification
  // 4. Checksum
  return [CMD, 0x02, pin, checksum];
}

List<int> buildStatusCommand() {
  // 1. Command type (ASK = 2)
  // 2. Status request (0x00)
  // 3. Checksum
  return [ASK, 0x00, checksum];
}
```

**Action Items**:

- [ ] Analyze existing Angular app command structure
- [ ] Document exact byte sequences for each command
- [ ] Identify checksum algorithm
- [ ] Document PIN handling and verification process
- [ ] Test command transmission and response

## 🔧 Phase 2: Implementation (Week 2)

### 2.1 Update BLE Constants

**File**: `lib/core/constants/ble_constants.dart`

```dart
class BleConstants {
  // Add Tactical Traps specific constants
  static const String TACTICAL_TRAPS_SERVICE_UUID = "XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX";
  static const String TACTICAL_TRAPS_WRITE_CHARACTERISTIC_UUID = "XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX";
  static const String TACTICAL_TRAPS_NOTIFY_CHARACTERISTIC_UUID = "XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX";

  // Add device identification constants
  static const List<int> TACTICAL_TRAPS_MANUFACTURER_ID = [0xXX, 0xXX];
  static const List<String> TACTICAL_TRAPS_DEVICE_PREFIXES = ["KR-S80", "TT-Lock", "Tactical"];

  // Add command structure constants
  static const int CMD_LOCK = 0x01;
  static const int CMD_UNLOCK = 0x02;
  static const int CMD_STATUS = 0x00;

  // Add checksum constants
  static const int CHECKSUM_ALGORITHM = 0x01; // Specify algorithm type
}
```

### 2.2 Update BLE Service

**File**: `lib/services/bluetooth/ble_service.dart`

```dart
class BleService {
  // Add Tactical Traps specific methods
  bool _isTacticalTrapsLock(ScanResult result) {
    // Implement specific identification logic
    return _checkManufacturerData(result) &&
           _checkServiceUUIDs(result) &&
           _checkDeviceName(result);
  }

  bool _checkManufacturerData(ScanResult result) {
    // Check for Tactical Traps manufacturer ID
    final manufacturerData = result.advertisementData.manufacturerData;
    // Implement specific manufacturer data checking
  }

  bool _checkServiceUUIDs(ScanResult result) {
    // Check for Tactical Traps service UUIDs
    final serviceUUIDs = result.advertisementData.serviceUUIDs;
    // Implement specific service UUID checking
  }

  bool _checkDeviceName(ScanResult result) {
    // Check for Tactical Traps device name patterns
    final name = result.device.platformName;
    final localName = result.advertisementData.advName;
    // Implement specific name pattern checking
  }

  // Update command sending with specific UUIDs
  Future<LockStatus?> _sendCommand(List<int> command) async {
    final services = await _currentDevice!.device.discoverServices();

    // Find Tactical Traps service
    final tacticalTrapsService = services.firstWhere(
      (service) => service.uuid.toString() == BleConstants.TACTICAL_TRAPS_SERVICE_UUID,
      orElse: () => throw Exception('Tactical Traps service not found'),
    );

    // Find write characteristic
    final writeCharacteristic = tacticalTrapsService.characteristics.firstWhere(
      (char) => char.uuid.toString() == BleConstants.TACTICAL_TRAPS_WRITE_CHARACTERISTIC_UUID,
      orElse: () => throw Exception('Write characteristic not found'),
    );

    // Send command
    await writeCharacteristic.write(command);

    // Wait for response
    return await _waitForResponse(writeCharacteristic);
  }

  // Update response parsing
  LockStatus? _parseResponse(List<int> response) {
    // Implement specific Tactical Traps response parsing
    // Extract voltage, hook state, alarm status, etc.
  }
}
```

### 2.3 Update BLE Provider

**File**: `lib/presentation/providers/ble_provider.dart`

```dart
class BleProvider extends ChangeNotifier {
  // Update command methods with specific implementations
  Future<bool> sendLockCommand() async {
    if (!isConnected || _currentDevice == null) {
      _errorMessage = 'No device connected';
      notifyListeners();
      return false;
    }

    try {
      _errorMessage = null;
      notifyListeners();

      // Build specific Tactical Traps lock command
      final command = _buildLockCommand();
      final status = await _bleService.sendCommand(command);

      if (status != null) {
        _lastStatus = status;
        if (status.isSuccess) {
          return true;
        } else {
          _errorMessage = status.statusDescription;
        }
      } else {
        _errorMessage = 'No response from device';
      }

      notifyListeners();
      return false;
    } catch (e) {
      _errorMessage = 'Command error: $e';
      notifyListeners();
      return false;
    }
  }

  // Add command building methods
  List<int> _buildLockCommand() {
    // Implement specific lock command structure
    // Include checksum calculation
  }

  List<int> _buildUnlockCommand() {
    // Implement specific unlock command structure
    // Include PIN and checksum
  }

  List<int> _buildStatusCommand() {
    // Implement specific status command structure
    // Include checksum
  }
}
```

## 🧪 Phase 3: Testing & Validation (Week 3)

### 3.1 Unit Testing

**Action Items**:

- [ ] Test device identification logic
- [ ] Test command building methods
- [ ] Test response parsing
- [ ] Test error handling scenarios

### 3.2 Integration Testing

**Action Items**:

- [ ] Test with actual Tactical Traps lock
- [ ] Verify command transmission
- [ ] Verify response reception
- [ ] Test connection stability
- [ ] Test error scenarios

### 3.3 Performance Testing

**Action Items**:

- [ ] Test battery usage
- [ ] Test connection speed
- [ ] Test reconnection reliability
- [ ] Test memory usage

## 📋 Implementation Checklist

### Phase 1: Analysis ✅

- [ ] Connect to actual Tactical Traps lock
- [ ] Capture advertisement data
- [ ] Identify service UUIDs
- [ ] Document command structure
- [ ] Analyze response format

### Phase 2: Implementation 🔄

- [ ] Update BLE constants
- [ ] Implement device identification
- [ ] Implement command building
- [ ] Implement response parsing
- [ ] Update service discovery

### Phase 3: Testing 🔄

- [ ] Unit tests
- [ ] Integration tests
- [ ] Performance tests
- [ ] User acceptance tests

## 🚀 Success Criteria

### Technical Success

- [ ] Successfully identifies Tactical Traps locks
- [ ] Successfully sends lock/unlock commands
- [ ] Successfully receives and parses responses
- [ ] Maintains stable connections
- [ ] Handles errors gracefully

### User Experience Success

- [ ] Fast device discovery
- [ ] Reliable connection
- [ ] Clear status feedback
- [ ] Intuitive error messages
- [ ] Smooth operation flow

## ⚠️ Risk Mitigation

### High Risk Items

1. **Protocol Mismatch**: If Tactical Traps protocol differs from assumptions
   - **Mitigation**: Thorough analysis before implementation
2. **UUID Changes**: If service UUIDs change between lock models

   - **Mitigation**: Implement fallback discovery methods

3. **Command Format**: If command structure is more complex than expected
   - **Mitigation**: Implement modular command building

### Medium Risk Items

1. **Response Parsing**: Complex response structures

   - **Mitigation**: Implement robust parsing with fallbacks

2. **Connection Stability**: Connection drops during operation
   - **Mitigation**: Implement automatic reconnection

## 📞 Support Resources

### Documentation

- [ ] Tactical Traps lock manual
- [ ] BLE protocol specifications
- [ ] Flutter BLE implementation guide

### Tools

- [ ] Bluetooth scanner app
- [ ] BLE packet analyzer
- [ ] Flutter debugging tools

### Contacts

- [ ] Tactical Traps technical support
- [ ] Flutter community forums
- [ ] BLE development resources

---

**Estimated Completion Time**: 3 weeks
**Critical Path**: Protocol analysis → Implementation → Testing
**Success Probability**: 95% (with proper analysis and testing)
