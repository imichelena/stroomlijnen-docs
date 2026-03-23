---
sidebar_position: 5
title: MAN Electric — Plug & Charge Setup
description: Step-by-step guide to enabling Plug & Charge on MAN eTGX and eTGS electric trucks via the RIO platform.
keywords: [MAN, eTGX, eTGS, RIO, Plug and Charge, ISO 15118, TRATON]
---

# MAN Electric — Plug & Charge Setup

MAN's electric truck lineup (part of the TRATON Group alongside Scania) supports ISO 15118-2 Plug & Charge on the eTGX and eTGS models. The eTGL and eTGM are receiving PnC support in staged firmware rollouts through 2026. Configuration is managed through the RIO platform.

## Supported Models

| Model | Battery Options | Max DC Charging | PnC Ready |
|-------|----------------|-----------------|:---------:|
| eTGX | Up to 480 kWh | 375 kW (CCS) | ✅ |
| eTGS | Up to 400 kWh | 250 kW (CCS) | ✅ |
| eTGL | Up to 265 kWh | 150 kW (CCS) | ⚠️ Rolling out |
| eTGM | Up to 265 kWh | 150 kW (CCS) | ⚠️ Rolling out |

## Prerequisites

- RIO platform account with fleet admin access
- eTGX/eTGS with latest firmware (late 2025+)
- Stroomlijnen fleet account with PnC enabled ([Setup Guide](../setup-guide))

## Step-by-Step: RIO Platform

### 1. Access Charge Management

1. Log in to [RIO](https://rio.cloud)
2. Navigate to **Services** → **Charge Management**
3. If Charge Management isn't visible, it may need to be activated — go to **Marketplace** → search "Charge Management" → **Activate**

### 2. Connect Stroomlijnen

1. In Charge Management, go to **Charging Partners**
2. Click **Connect New Partner**
3. Search for **"Stroomlijnen B.V."** (or use eMSP ID `NL-STM`)
4. Click **Connect & Authorize**
5. Accept the terms

### 3. Select Vehicles

1. After connecting, the partner page shows your eligible vehicles
2. Check the boxes for trucks you want to enable PnC on
3. Click **Save Selection**

### 4. Wait for Certificate Installation

- RIO triggers certificate provisioning through MAN's telematics system
- The truck must be online with ignition on
- **Important:** MAN uses a Hardware Security Module (HSM) for certificate storage. The HSM enters "provisioning mode" during the first 30 minutes after ignition. If the truck is parked with ignition on for more than 30 minutes without receiving the certificate, cycle the ignition (off → on) to re-enter provisioning mode.
- **Typical installation time: 6–24 hours**

### 5. Verify

Check certificate status in both RIO and Stroomlijnen My Fleet. Test at a Stroomlijnen charger.

## HSM Provisioning Mode — Important

MAN's security architecture uses a hardware security module that has a specific provisioning window:

1. When the truck's ignition turns ON, the HSM enters provisioning mode for 30 minutes
2. During this window, new certificates can be installed
3. After 30 minutes, the HSM locks to prevent unauthorized certificate modifications
4. To re-open the window: turn ignition OFF, wait 10 seconds, turn ON again

**What this means in practice:** If you enable PnC in the RIO portal and the truck is running a shift, the certificate will be queued and installed the next time the truck starts up (within the first 30-minute window).

## TRATON Group Integration

MAN and Scania are both part of the TRATON Group and share some backend infrastructure. However:

- Each brand has its own fleet portal (RIO for MAN, My Scania for Scania)
- PnC must be configured separately in each portal
- Certificates are brand-specific and not transferable

## Troubleshooting

| Issue | Solution |
|-------|----------|
| "Charge Management" not in RIO | Activate it from RIO Marketplace |
| Certificate pending > 24 hours | Cycle ignition to re-enter HSM provisioning mode |
| eTGL/eTGM shows "PnC not available" | Firmware update may be pending — check with MAN dealer |
| PnC works once then fails | HSM may have a connectivity issue — dealer diagnostic required |

---

**Next:** [Other Trucks →](./other-trucks)
