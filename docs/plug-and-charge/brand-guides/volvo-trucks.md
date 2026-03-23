---
sidebar_position: 1
title: Volvo Trucks — Plug & Charge Setup
description: Step-by-step guide to enabling Plug & Charge on Volvo FH, FM, FE, and FL Electric trucks via Volvo Connect.
keywords: [Volvo, FH Electric, FM Electric, Volvo Connect, Plug and Charge, ISO 15118, fleet charging]
---

# Volvo Trucks — Plug & Charge Setup

Volvo was one of the first truck OEMs to fully support ISO 15118-2 Plug & Charge. All current Volvo Electric models (FH, FM, FE, FL) support PnC when running firmware v3.2 or later.

## Supported Models

| Model | Battery Options | Max DC Charging | PnC Ready |
|-------|----------------|-----------------|:---------:|
| FH Electric | 540 kWh | 250 kW (CCS) | ✅ |
| FM Electric | 540 kWh | 250 kW (CCS) | ✅ |
| FE Electric | 265 kWh | 150 kW (CCS) | ✅ |
| FL Electric | 265 kWh | 150 kW (CCS) | ✅ |

## Prerequisites

- Volvo Connect fleet management account with admin access
- Truck firmware v3.2 or later (check in Volvo Connect → Vehicle → Software)
- Stroomlijnen fleet account with PnC enabled ([Setup Guide](../setup-guide))

## Step-by-Step: Volvo Connect

### 1. Check Firmware Version

1. Log in to [Volvo Connect](https://connect.volvotrucks.com)
2. Select your vehicle from the fleet list
3. Go to **Vehicle Details** → **Software**
4. Verify the firmware version is **3.2 or higher**
5. If not, contact your Volvo dealer to schedule an update

### 2. Enable Charging Services

1. In Volvo Connect, go to **Services** → **Charging Services**
2. If this section is not visible, contact your Volvo Connect administrator to enable the **eMobility module** for your account
3. Click **Manage Charging Partners**

### 3. Authorize Stroomlijnen

1. In the charging partners list, find **"Stroomlijnen B.V."**
   - If not listed, click **Add Partner** and search for "Stroomlijnen" or use partner code `NL-STM`
2. Click **Authorize**
3. Review the permissions:
   - ✅ Certificate installation — Required for PnC
   - ✅ Vehicle identification — Required for certificate binding
   - ❌ Location data — Not required, you can decline
4. Click **Confirm Authorization**

### 4. Select Vehicles

1. After authorizing, you'll see a vehicle selection screen
2. Check the boxes for all trucks that should use Stroomlijnen PnC
3. Click **Apply**

### 5. Certificate Installation

Once authorized, Stroomlijnen's backend sends a certificate installation request:

1. The request appears in Volvo Connect → **Notifications** (usually within 30 minutes)
2. Volvo's system pushes the contract certificate to the truck
3. The truck must be **online** to receive it (ignition on, or connected to AC charging)
4. Installation typically completes within **1–2 hours**

You can track progress in:
- **Volvo Connect** → Vehicle → Charging Services → Certificate Status
- **Stroomlijnen My Fleet** → Vehicle → Plug & Charge tab

### 6. Verify Installation

Once the status shows "Active" in both portals:

1. Drive to a Stroomlijnen charger
2. Connect the CCS cable
3. The charger should display "Plug & Charge — Authenticated" within 5–10 seconds
4. Charging starts automatically

## Firmware Update Process

If your truck is running firmware below v3.2:

1. **Contact your Volvo dealer** to schedule a firmware update
2. Updates can be performed at the dealership (takes ~2 hours)
3. Some updates may be available as **OTA (Over-The-Air)** — check Volvo Connect → Vehicle → Software Updates
4. After the update, return to Step 2 above

:::caution
Do not attempt to update truck firmware yourself. Firmware updates must be performed by an authorized Volvo dealer or via the official OTA channel.
:::

## Troubleshooting

### "Charging Services" not visible in Volvo Connect
Your Volvo Connect subscription may not include the eMobility module. Contact your Volvo dealer or Volvo Connect support to activate it.

### Certificate shows "Pending" for more than 24 hours
1. Verify the truck has been online (ignition on) for at least 30 minutes since the request was made
2. Check Volvo Connect for any pending authorization requests you may have missed
3. Contact Stroomlijnen support — we can re-trigger the certificate request

### PnC fails but certificate shows "Active"
1. Check the charger's display for specific error codes
2. Try a different CCS cable (if multiple available)
3. Turn the truck's ignition off, wait 30 seconds, turn on, then reconnect
4. See the general [Troubleshooting Guide](../troubleshooting)

### Multiple Volvo accounts
If your fleet is managed across multiple Volvo Connect accounts (e.g., different subsidiaries), each account needs to authorize Stroomlijnen separately. Contact your Stroomlijnen account manager for multi-account setup.

---

**Next:** [DAF Setup →](./daf)
