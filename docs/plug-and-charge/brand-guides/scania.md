---
sidebar_position: 4
title: Scania BEV — Plug & Charge Setup
description: Step-by-step guide to enabling Plug & Charge on Scania R-series and P-series BEV trucks via Scania Fleet Management.
keywords: [Scania, BEV, R-series, P-series, Scania Fleet Management, Plug and Charge, ISO 15118]
---

# Scania BEV — Plug & Charge Setup

Scania's battery-electric trucks (R-series and P-series BEV) support ISO 15118-2 Plug & Charge with firmware version 2025.3 or later. PnC is managed through the Scania Fleet Management portal.

## Supported Models

| Model | Battery Options | Max DC Charging | PnC Ready |
|-------|----------------|-----------------|:---------:|
| R-series BEV | Up to 624 kWh | 375 kW (CCS) | ✅ (fw 2025.3+) |
| P-series BEV | Up to 416 kWh | 250 kW (CCS) | ✅ (fw 2025.3+) |

## Prerequisites

- Scania Fleet Management account with admin access
- Truck firmware version 2025.3 or later
- Stroomlijnen fleet account with PnC enabled ([Setup Guide](../setup-guide))

## Step-by-Step: Scania Fleet Management

### 1. Verify Firmware

1. Log in to [My Scania](https://my.scania.com) (Scania Fleet Management)
2. Select your vehicle → **Vehicle Info** → **Software Version**
3. Confirm version 2025.3 or higher
4. If lower, schedule a dealer visit or check for available OTA updates under **Maintenance** → **Software Updates**

### 2. Enable Electrification Services

1. In Scania Fleet Management, go to **Services** → **Electrification**
2. If this section isn't visible, your subscription may need the Electrification add-on — contact your Scania dealer
3. Click **Charging Partner Management**

### 3. Add Stroomlijnen

1. Click **Add Partner**
2. Search for **"Stroomlijnen B.V."** or enter eMSP ID `NL-STM`
3. Click **Connect**
4. Review and accept the data sharing agreement (vehicle identification for certificate binding)
5. Click **Confirm**

### 4. Assign Vehicles

1. After connecting Stroomlijnen, click **Manage Vehicles**
2. Select the trucks to enable PnC for
3. Click **Apply**

### 5. Certificate Installation

- Scania's telematics gateway pushes the contract certificate to the vehicle
- The truck must be online (ignition on or connected to charging)
- **Typical installation time: 4–12 hours**
- Monitor progress in Scania Fleet Management → Electrification → Certificate Status

### 6. Verify

1. Check status in both Scania Fleet Management and Stroomlijnen My Fleet
2. Plug into a Stroomlijnen charger to test
3. Automatic authentication should complete within 5–10 seconds

## Important Notes

### Telematics SIM
Scania trucks have a separate telematics module with its own cellular connection (independent of the infotainment system). Ensure the telematics SIM subscription is active — certificate delivery depends on this connection, not the truck's WiFi.

### Firmware Updates
Scania is rolling out PnC-related firmware updates gradually by region. If your truck shows firmware 2025.2 or earlier, the PnC update may not be available OTA yet. Your dealer can install it manually.

### Multiple Fleets
If your trucks are registered across multiple Scania Fleet Management accounts (e.g., after acquisitions), each account needs to authorize Stroomlijnen separately.

## Troubleshooting

| Issue | Solution |
|-------|----------|
| "Electrification" not in menu | Subscription may need upgrade — contact Scania dealer |
| Certificate stuck on "Pending" | Verify truck is online, telematics SIM active, firmware ≥ 2025.3 |
| PnC fails at charger | Restart truck (full ignition cycle), retry. Check certificate status. |
| "Partner not found" when searching | Ensure you're searching with the correct name or code (NL-STM) |

---

**Next:** [MAN Setup →](./man)
