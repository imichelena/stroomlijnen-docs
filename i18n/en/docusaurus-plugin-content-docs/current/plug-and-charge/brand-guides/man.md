---
---
sidebar_position: 5
title: MAN Electric — Enabling Plug & Charge
description: Step-by-step guide for enabling Plug & Charge on MAN eTGX and eTGS electric trucks via the RIO platform.
keywords: [MAN, eTGX, eTGS, RIO, Plug and Charge, ISO 15118, TRATON]
---

# MAN Electric — Enabling Plug & Charge

The electric truck range from MAN (part of the TRATON Group along with Scania) supports ISO 15118-2 Plug & Charge on the eTGX and eTGS models. The eTGL and eTGM will receive PnC support through phased firmware rollout during 2026. Configuration is managed via the RIO platform.

## Supported Models

| Model | Battery Options | Max. DC Charging | PnC Ready |
|-------|-----------|---------------|:---------:|
| eTGX | Up to 480 kWh | 375 kW (CCS) | ✅ |
| eTGS | Up to 400 kWh | 250 kW (CCS) | ✅ |
| eTGL | Up to 265 kWh | 150 kW (CCS) | ⚠️ Being rolled out |
| eTGM | Up to 265 kWh | 150 kW (CCS) | ⚠️ Being rolled out |

## Requirements

- RIO platform account with fleet manager access
- eTGX/eTGS with the latest firmware (end of 2025+)
- Stroomlijnen fleet account with PnC enabled ([Setup Guide](../setup-guide))

## Step by Step: RIO Platform

### 1. Accessing Charging Management

1. Log in to [RIO](https://rio.cloud)
2. Navigate to **Services** → **Charging Management**
3. If Charging Management is not visible, it may need to be activated — go to **Marketplace** → search for "Charging Management" → **Activate**

### 2. Connecting Stroomlijnen

1. In Charging Management, go to **Charging Partners**
2. Click on **Connect New Partner**
3. Search for **"Stroomlijnen B.V."** (or use eMSP-ID `NL-STM`)
4. Click on **Connect & Authorize**
5. Accept the terms

### 3. Selecting Vehicles

1. After connecting, the partner page will display your eligible vehicles
2. Check the boxes for trucks where PnC should be enabled
3. Click on **Save Selection**

### 4. Waiting for Certificate Installation

- RIO activates certificate provisioning via MAN's telematics system
- The truck must be online with ignition on
- **Important:** MAN uses a Hardware Security Module (HSM) for certificate storage. The HSM enters "provisioning mode" for the first 30 minutes after ignition is turned on. If the truck is parked with ignition on for more than 30 minutes without receiving the certificate, turn the ignition off and then back on to reactivate provisioning mode.
- **Typical installation time: 6–24 hours**

### 5. Verify

Check the certificate status in both RIO and Stroomlijnen My Fleet. Test at a Stroomlijnen charger.

## HSM Provisioning Mode — Important

MAN's security architecture uses a hardware security module with a specific provisioning window:

1. When the truck's ignition is turned on, the HSM enters provisioning mode for 30 minutes
2. During this window, new certificates can be installed
3. After 30 minutes, the HSM locks to prevent unauthorized certificate changes
4. To reopen the window: turn off the ignition, wait 10 seconds, and then turn it back on

**What this means in practice:** If you enable PnC in the RIO portal while the truck is on a trip, the certificate will be queued and installed the next time the truck starts (within the first 30-minute window).

## TRATON Group Integration

MAN and Scania are both part of the TRATON Group and share some backend infrastructure. However:

- Each brand has its own fleet portal (RIO for MAN, My Scania for Scania)
- PnC must be configured separately in each portal
- Certificates are brand-specific and not transferable

## Troubleshooting

| Issue | Solution |
|---------|----------|
| "Charging Management" not in RIO | Activate it from the RIO Marketplace |
| Certificate pending > 24 hours | Perform an ignition cycle to reactivate HSM provisioning mode |
| eTGL/eTGM shows "PnC not available" | Firmware update may be in progress — check with MAN dealer |
| PnC works once then fails | HSM may have a connectivity issue — diagnostics by dealer required |

---

**Next:** [Other Trucks →](./other-trucks)

---