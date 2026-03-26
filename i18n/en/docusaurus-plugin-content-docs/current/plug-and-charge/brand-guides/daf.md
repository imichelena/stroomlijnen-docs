---
---
sidebar_position: 2
title: DAF Trucks — Enabling Plug & Charge
description: Step-by-step guide to enabling Plug & Charge on DAF XF, XD, and XB Electric trucks via DAF Connect.
keywords: [DAF, XF Electric, XD Electric, XB Electric, DAF Connect, Plug and Charge, ISO 15118]
---

# DAF Trucks — Enabling Plug & Charge

The electric truck range from DAF — part of the PACCAR group — supports ISO 15118-2 Plug & Charge on all current BEV models. The configuration is managed via DAF Connect, the fleet management platform.

## Supported Models

| Model | Battery Options | Max. DC Charging | PnC Ready |
|-------|-----------|---------------|:---------:|
| XF Electric | Up to 525 kWh | 350 kW (CCS) | ✅ |
| XD Electric | Up to 350 kWh | 250 kW (CCS) | ✅ |
| XB Electric | Up to 210 kWh | 175 kW (CCS) | ✅ |

## Requirements

- DAF Connect fleet management account with administrator access
- Latest vehicle software (check in DAF Connect → Vehicle → Diagnostics)
- Stroomlijnen fleet account with PnC enabled ([Setup Guide](../setup-guide))

## Step-by-Step: DAF Connect

### 1. Accessing Charging Settings

1. Log in to [DAF Connect](https://dafconnect.paccar.com)
2. Navigate to **Fleet Management** → **Electromobility**
3. If you don't see the Electromobility section, contact DAF Connect support to enable it for your account

### 2. Configuring Charging Partners

1. Go to **Electromobility** → **Charging Partners**
2. Click on **Add Charging Partner**
3. Search for **"Stroomlijnen"** or enter partner ID `NL-STM`
4. Click on **Add and Authorize**

### 3. Assigning Vehicles

1. After adding Stroomlijnen, go to **Charging Partners** → **Stroomlijnen B.V.**
2. Click on **Manage Vehicles**
3. Select the trucks that should use PnC
4. Click on **Save**

### 4. Approving Certificate Installation

1. DAF Connect displays a notification for approving certificate installation
2. Review the request details (vehicles, permissions)
3. Click on **Approve**
4. The contract certificates are pushed to the selected trucks

### 5. Waiting for Installation

- Certificate delivery typically takes **4–8 hours**
- The truck must be online (contact on or plugged into power)
- Follow the status in DAF Connect → **Electromobility** → **Certificate Status**

### 6. Verify and Test

1. Check the status in both DAF Connect and Stroomlijnen Fleet Portal
2. Plug in at a Stroomlijnen charger to verify automatic authentication
3. The first PnC session confirms that everything is working

## Note on Activation by Fleet Manager

DAF requires that the **fleet manager** (not individual drivers) activates PnC for each vehicle. This is a security feature — only authorized fleet managers can enable automatic billing on company vehicles.

If your organization has multiple fleet managers:
- Each can activate PnC for vehicles under their management
- A super-administrator can delegate Electromobility rights

## Troubleshooting

### "Electromobility" Section Not Visible
This feature requires a DAF Connect Premium subscription. Contact your DAF dealer to verify your subscription level.

### Certificate Installation Takes Longer Than 24 Hours
1. Verify that the truck has been online for at least 1 hour after approval
2. Check DAF Connect for error messages under Electromobility → Notifications
3. Contact Stroomlijnen support to verify if the request was received on our end

### Authentication Fails at Charger
1. Verify in DAF Connect that the certificate status is "Active"
2. Check if the vehicle software is up-to-date
3. Restart the vehicle (full contact cycle)
4. See the general [Troubleshooting Guide](../troubleshooting)

---

**Next:** [Setting Up Mercedes-Benz →](./mercedes-trucks)

---