import 'package:flutter_blue_plus/flutter_blue_plus.dart';

/// Represents a Bluetooth Low Energy device
class BleDevice {
  final BluetoothDevice device;
  final String? name;
  final String? localName;
  final int rssi;
  final List<int> manufacturerData;
  final bool isConnected;
  final bool isExpanded; // For UI expansion
  final DateTime discoveredAt;
  final String? customName; // User-defined name
  final String? serialNumber; // Extracted from device data
  final bool isLock; // Whether this is a Tactical Traps lock

  BleDevice({
    required this.device,
    this.name,
    this.localName,
    required this.rssi,
    required this.manufacturerData,
    this.isConnected = false,
    this.isExpanded = false,
    required this.discoveredAt,
    this.customName,
    this.serialNumber,
    this.isLock = false,
  });

  /// Get the display name for the device
  String get displayName {
    if (customName != null && customName!.isNotEmpty) {
      return customName!;
    }
    if (localName != null && localName!.isNotEmpty) {
      return localName!;
    }
    if (name != null && name!.isNotEmpty) {
      return name!;
    }
    return device.remoteId.toString();
  }

  /// Get the device ID
  String get id => device.remoteId.toString();

  /// Get the device address
  String get address => device.remoteId.toString();

  /// Check if device has a custom name
  bool get hasCustomName => customName != null && customName!.isNotEmpty;

  /// Create a copy with updated properties
  BleDevice copyWith({
    BluetoothDevice? device,
    String? name,
    String? localName,
    int? rssi,
    List<int>? manufacturerData,
    bool? isConnected,
    bool? isExpanded,
    DateTime? discoveredAt,
    String? customName,
    String? serialNumber,
    bool? isLock,
  }) {
    return BleDevice(
      device: device ?? this.device,
      name: name ?? this.name,
      localName: localName ?? this.localName,
      rssi: rssi ?? this.rssi,
      manufacturerData: manufacturerData ?? this.manufacturerData,
      isConnected: isConnected ?? this.isConnected,
      isExpanded: isExpanded ?? this.isExpanded,
      discoveredAt: discoveredAt ?? this.discoveredAt,
      customName: customName ?? this.customName,
      serialNumber: serialNumber ?? this.serialNumber,
      isLock: isLock ?? this.isLock,
    );
  }

  /// Convert to JSON for storage
  Map<String, dynamic> toJson() {
    return {
      'id': id,
      'name': name,
      'localName': localName,
      'customName': customName,
      'serialNumber': serialNumber,
      'isLock': isLock,
    };
  }

  /// Create from JSON
  factory BleDevice.fromJson(
    Map<String, dynamic> json,
    BluetoothDevice device,
  ) {
    return BleDevice(
      device: device,
      name: json['name'],
      localName: json['localName'],
      rssi: 0, // RSSI is not stored
      manufacturerData: [], // Manufacturer data is not stored
      discoveredAt: DateTime.now(),
      customName: json['customName'],
      serialNumber: json['serialNumber'],
      isLock: json['isLock'] ?? false,
    );
  }

  @override
  bool operator ==(Object other) {
    if (identical(this, other)) return true;
    return other is BleDevice && other.id == id;
  }

  @override
  int get hashCode => id.hashCode;

  @override
  String toString() {
    return 'BleDevice(id: $id, displayName: $displayName, isConnected: $isConnected)';
  }
}
