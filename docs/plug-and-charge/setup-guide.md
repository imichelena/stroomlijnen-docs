---
sidebar_position: 4
title: Plug & Charge Setup Guide
description: How to enable Plug & Charge for your fleet through the Stroomlijnen portal — from registration to first automated session.
keywords: [Plug and Charge setup, fleet registration, contract certificate, My Fleet portal, PnC activation]
---

# Plug & Charge Setup Guide

Setting up Plug & Charge for your fleet takes about 15 minutes of portal work. Once configured, every registered truck will authenticate and charge automatically at any Stroomlijnen location — no cards, no apps.

## Prerequisites

Before you begin:

- [ ] A **Stroomlijnen fleet account** (sign up at [stroomlijnen.nl](https://stroomlijnen.nl) or contact your account manager)
- [ ] Your trucks' **VIN numbers** (Vehicle Identification Numbers)
- [ ] Access to your OEM fleet portal (Volvo Connect, DAF Connect, Fleetboard, etc.)
- [ ] A **compatible vehicle** (see [Compatible Vehicles](./compatible-vehicles))

## Step 1: Log In to My Fleet

Navigate to **my.stroomlijnen.nl** and log in with your fleet manager credentials.

If you don't have an account yet:
1. Click **Register** and fill in your company details (KVK number, billing address)
2. You'll receive a verification email — click the link
3. Your account will be reviewed and activated within one business day

## Step 2: Add Your Vehicles

In the My Fleet dashboard:

1. Go to **Vehicles** → **Add Vehicle**
2. Enter the vehicle details:
   - **VIN** — 17-character Vehicle Identification Number (on the driver's door frame or registration document)
   - **License plate** — For identification and reporting
   - **Make/Model** — Select from the dropdown (e.g., Volvo FH Electric)
   - **Nickname** — Optional, for easy recognition (e.g., "Truck 014 — Amsterdam route")
3. Click **Save & Continue**

Repeat for each truck in your fleet. You can also **bulk import** via CSV upload.

### CSV Format

```csv
vin,license_plate,make,model,nickname
YV2RT60A1PB123456,AB-123-C,Volvo,FH Electric,Truck 014
XLRAE75PC0H987654,DE-456-F,DAF,XF Electric,Truck 022
```

## Step 3: Enable Plug & Charge

For each vehicle:

1. Go to **Vehicles** → select a vehicle → **Plug & Charge** tab
2. Toggle **Enable Plug & Charge** to ON
3. The system will:
   - Generate a **Contract Certificate** for this vehicle
   - Request installation via the OEM's Certificate Provisioning Service
   - Display status: `Pending → Installing → Active`

:::note Certificate Installation Time
Certificate installation typically takes **1–24 hours**, depending on the OEM:
- **Volvo**: Usually within 2 hours via Volvo Connect
- **DAF**: 4–8 hours via DAF Connect
- **Mercedes-Benz**: 2–6 hours via Fleetboard
- **Scania**: 4–12 hours via Scania Fleet Management
- **MAN**: 6–24 hours via RIO platform

The truck must be **online** (ignition on or connected to charging) for the certificate to be delivered.
:::

## Step 4: Authorize via OEM Portal

Some OEMs require you to approve third-party PnC services in their fleet portal:

### Volvo Connect
1. Log in to Volvo Connect → **Services** → **Charging Services**
2. Find "Stroomlijnen B.V." in the partner list and click **Authorize**
3. Confirm the vehicles to include
4. See [Volvo brand guide](./brand-guides/volvo-trucks) for detailed steps

### DAF Connect
1. Log in to DAF Connect → **Settings** → **Charging Partners**
2. Enable Stroomlijnen and select vehicles
3. See [DAF brand guide](./brand-guides/daf) for detailed steps

### Mercedes-Benz Fleetboard
1. Log in to Fleetboard → **eMobility** → **Charging Management**
2. Add Stroomlijnen as a charging provider
3. See [Mercedes brand guide](./brand-guides/mercedes-trucks) for detailed steps

## Step 5: Verify Activation

Once the certificate is installed:

1. In My Fleet → **Vehicles** → select vehicle → **Plug & Charge** tab
2. Status should show: **✅ Active**
3. Certificate details will display:
   - EMAID (e-Mobility Account Identifier)
   - Certificate expiry date
   - Last successful PnC session (if any)

## Step 6: Test It

Drive to any Stroomlijnen location and plug in. The charging session should start within 5–10 seconds without any manual action.

**What to look for:**
- Charger display shows "Plug & Charge — Authenticated" (or similar)
- Session appears in My Fleet → **Sessions** within 1 minute
- No RFID tap or app action was needed

## Troubleshooting Setup

| Issue | Solution |
|-------|----------|
| Certificate status stuck on "Pending" | Ensure the truck is online (ignition on). Check OEM portal for pending authorizations. |
| OEM portal doesn't show Stroomlijnen | Contact us — we may need to establish the backend connection for your specific OEM account. |
| Certificate installed but PnC fails | See [Troubleshooting Guide](./troubleshooting) for detailed diagnostics. |
| "EMAID not found" error on charger | The certificate may not have propagated to our backend yet. Wait 1 hour and retry. |
| Bulk import errors | Verify VIN format (17 chars, no O/I/Q), check CSV encoding is UTF-8. |

## Managing Certificates

### Renewal
Contract certificates expire after **2 years**. The My Fleet portal sends email notifications 60, 30, and 7 days before expiry. Renewal is automatic if your fleet subscription is active.

### Revocation
If a truck is sold, stolen, or decommissioned:
1. Go to **Vehicles** → select vehicle → **Plug & Charge** tab
2. Click **Revoke Certificate**
3. The certificate is immediately invalidated across all connected charging networks

### Transfer
When a truck changes to a different billing entity within your organization:
1. Revoke the current certificate
2. Re-register the vehicle under the new billing entity
3. A new certificate will be issued

---

**Next:** [Brand Guides →](./brand-guides/volvo-trucks)
