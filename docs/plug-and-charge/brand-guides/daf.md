---
sidebar_position: 2
title: DAF Trucks — Plug & Charge Setup
description: Step-by-step guide to enabling Plug & Charge on DAF XF, XD, and XB Electric trucks via DAF Connect.
keywords: [DAF, XF Electric, XD Electric, XB Electric, DAF Connect, Plug and Charge, ISO 15118]
---

# DAF Trucks — Plug & Charge Setup

DAF's electric truck lineup — part of the PACCAR group — supports ISO 15118-2 Plug & Charge across all current BEV models. Configuration is managed through DAF Connect, the fleet management platform.

## Supported Models

| Model | Battery Options | Max DC Charging | PnC Ready |
|-------|----------------|-----------------|:---------:|
| XF Electric | Up to 525 kWh | 350 kW (CCS) | ✅ |
| XD Electric | Up to 350 kWh | 250 kW (CCS) | ✅ |
| XB Electric | Up to 210 kWh | 175 kW (CCS) | ✅ |

## Prerequisites

- DAF Connect fleet management account with admin access
- Latest vehicle software (check in DAF Connect → Vehicle → Diagnostics)
- Stroomlijnen fleet account with PnC enabled ([Setup Guide](../setup-guide))

## Step-by-Step: DAF Connect

### 1. Access Charging Settings

1. Log in to [DAF Connect](https://dafconnect.paccar.com)
2. Navigate to **Fleet Management** → **Electromobility**
3. If you don't see the Electromobility section, contact DAF Connect support to enable it for your account

### 2. Configure Charging Partners

1. Go to **Electromobility** → **Charging Partners**
2. Click **Add Charging Partner**
3. Search for **"Stroomlijnen"** or enter partner ID `NL-STM`
4. Click **Add and Authorize**

### 3. Assign Vehicles

1. After adding Stroomlijnen, go to **Charging Partners** → **Stroomlijnen B.V.**
2. Click **Manage Vehicles**
3. Select the trucks that should use PnC
4. Click **Save**

### 4. Approve Certificate Installation

1. DAF Connect will show a notification requesting certificate installation approval
2. Review the request details (vehicles, permissions)
3. Click **Approve**
4. The contract certificates will be pushed to the selected trucks

### 5. Wait for Installation

- Certificate delivery typically takes **4–8 hours**
- The truck must be online (ignition on or connected to power)
- Track status in DAF Connect → **Electromobility** → **Certificate Status**

### 6. Verify and Test

1. Check status in both DAF Connect and Stroomlijnen My Fleet
2. Plug into a Stroomlijnen charger to verify automatic authentication
3. The first PnC session confirms everything is working

## Fleet Manager Activation Note

DAF requires the **fleet manager** (not individual drivers) to activate PnC for each vehicle. This is a security feature — only authorized fleet administrators can enable automatic billing on company vehicles.

If your organization has multiple fleet managers:
- Each can activate PnC for vehicles under their management
- A super-admin can delegate Electromobility permissions

## Troubleshooting

### "Electromobility" section not visible
This feature requires a DAF Connect Premium subscription. Contact your DAF dealer to verify your subscription level.

### Certificate installation takes longer than 24 hours
1. Verify the truck has been online for at least 1 hour since approval
2. Check DAF Connect for any error messages under Electromobility → Notifications
3. Contact Stroomlijnen support to verify the request was received on our end

### Authentication fails at charger
1. In DAF Connect, verify the certificate status is "Active"
2. Check if the vehicle's software is up to date
3. Restart the vehicle (full ignition cycle)
4. See the general [Troubleshooting Guide](../troubleshooting)

---

**Next:** [Mercedes-Benz Setup →](./mercedes-trucks)
