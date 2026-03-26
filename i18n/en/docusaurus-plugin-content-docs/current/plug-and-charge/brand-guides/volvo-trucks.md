---
---
sidebar_position: 1
title: Volvo Trucks — Setting Up Plug & Charge
description: Step-by-step guide to enabling Plug & Charge on Volvo FH, FM, FE, and FL Electric trucks via Volvo Connect.
keywords: [Volvo, FH Electric, FM Electric, Volvo Connect, Plug and Charge, ISO 15118, fleet charging]
---

# Volvo Trucks — Setting Up Plug & Charge

Volvo was one of the first truck manufacturers to fully support ISO 15118-2 Plug & Charge. All current Volvo Electric models (FH, FM, FE, FL) support PnC with firmware v3.2 or higher.

## Supported Models

| Model | Battery Options | Max. DC Charging | PnC Ready |
|-------|-----------|---------------|:---------:|
| FH Electric | 540 kWh | 250 kW (CCS) | ✅ |
| FM Electric | 540 kWh | 250 kW (CCS) | ✅ |
| FE Electric | 265 kWh | 150 kW (CCS) | ✅ |
| FL Electric | 265 kWh | 150 kW (CCS) | ✅ |

## Requirements

- Volvo Connect fleet management account with administrator access
- Truck firmware v3.2 or higher (check in Volvo Connect → Vehicle → Software)
- Stroomlijnen fleet account with PnC enabled ([Setup Guide](../setup-guide))

## Step by Step: Volvo Connect

### 1. Check Firmware Version

1. Log in to [Volvo Connect](https://connect.volvotrucks.com)
2. Select your vehicle from the fleet list
3. Go to **Vehicle Details** → **Software**
4. Verify that the firmware version is **3.2 or higher**
5. If not, contact your Volvo dealer for an update

### 2. Enable Charging Services

1. In Volvo Connect, go to **Services** → **Charging Services**
2. If this section is not visible, ask your Volvo Connect administrator to enable the **eMobility module** for your account
3. Click on **Manage Charging Partners**

### 3. Authorize Stroomlijnen

1. Search for **"Stroomlijnen B.V."** in the charging partners list
   - If not listed, click on **Add Partner** and search for "Stroomlijnen" or use partner code `NL-STM`
2. Click on **Authorize**
3. Review the permissions:
   - ✅ Certificate installation — Required for PnC
   - ✅ Vehicle identification — Required for certificate linking
   - ❌ Location data — Not required, you can deny this
4. Click on **Confirm Authorization**

### 4. Select Vehicles

1. After authorization, you will see a screen for vehicle selection
2. Check the boxes for all trucks that should use Stroomlijnen PnC
3. Click on **Apply**

### 5. Certificate Installation

After authorization, Stroomlijnen's backend sends a certificate installation request:

1. The request appears in Volvo Connect → **Notifications** (usually within 30 minutes)
2. Volvo's system pushes the contract certificate to the truck
3. The truck must be **online** to receive it (ignition on, or connected to AC charger)
4. Installation is usually completed within **1–2 hours**

You can track progress in:
- **Volvo Connect** → Vehicle → Charging Services → Certificate Status
- **Stroomlijnen Fleet Portal** → Vehicle → Plug & Charge tab

### 6. Verify Installation

Once the status shows "Active" in both portals:

1. Drive to a Stroomlijnen charger
2. Connect the CCS cable
3. The charger should display "Plug & Charge — Authenticated" within 5–10 seconds
4. Charging starts automatically

## Firmware Update Procedure

If your truck has firmware lower than v3.2:

1. **Contact your Volvo dealer** for a firmware update
2. Updates can be performed at the dealer (~2 hours)
3. Some updates are available as **OTA (Over-The-Air)** — check Volvo Connect → Vehicle → Software Updates
4. Return to step 2 after the update

:::caution
Do not attempt to update the truck's firmware yourself. Firmware updates must be performed by an authorized Volvo dealer or through the official OTA channel.
:::

## Troubleshooting

### "Charging Services" Not Visible in Volvo Connect
Your Volvo Connect subscription may not include the eMobility module. Contact your Volvo dealer or Volvo Connect support for activation.

### Certificate Shows "In Progress" for More Than 24 Hours
1. Verify that the truck has been online (ignition on) for at least 30 minutes after the request
2. Check Volvo Connect for any pending authorization requests
3. Contact Stroomlijnen support — we can re-activate the certificate request

### PnC Fails but Certificate Shows "Active"
1. Check the charger's display for specific error codes
2. Try a different CCS cable (if multiple are available)
3. Turn off the truck's ignition, wait 30 seconds, turn it back on, and reconnect
4. See the general [Troubleshooting Guide](../troubleshooting)

### Multiple Volvo Accounts
If your fleet is managed through multiple Volvo Connect accounts (e.g., different subsidiaries), each account must authorize Stroomlijnen separately. Contact your Stroomlijnen account manager for multi-account setup.

---

**Next:** [DAF Setup →](./daf)

---