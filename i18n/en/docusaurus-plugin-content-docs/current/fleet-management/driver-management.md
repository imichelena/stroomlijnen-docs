---
---
sidebar_position: 5
title: Driver Management
description: Manage drivers in your electric fleet — assign vehicles, issue RFID passes, set charging limits, and track driver activity.
keywords: [driver management, fleet drivers, RFID assignment, charging limits, driver app]
---

# Driver Management

The Driver Management section enables fleet managers to determine who can charge, on which vehicles, and with what limits.

## Adding Drivers

1. Go to **Drivers** → **Add Driver**
2. Fill in the driver's details:
   - **Name** — First and last name
   - **Email** — For account access and notifications
   - **Phone** — For app authentication (optional)
   - **Employee ID** — For internal reference
   - **Department/Group** — For organizational filtering
3. Click on **Save**

The driver will receive an email invitation to set up their Stroomlijnen account and download the mobile app.

## Assigning Vehicles

Drivers can be assigned to one or multiple vehicles:

1. Go to **Drivers** → select a driver → **Vehicles**
2. Click on **Assign Vehicle** and select from your fleet
3. A driver can only start sessions on assigned vehicles (if vehicle-driver pairing is enabled in your fleet settings)

### Flexible Assignment
For fleets where drivers share vehicles:
- Set **Vehicle-Driver Pairing** to "Flexible" in the fleet settings
- Each registered driver can charge any fleet vehicle
- Sessions are still tracked per driver (via RFID pass or app)

## RFID Passes for Drivers

Each driver can be issued a personal RFID pass:

1. Go to **Drivers** → select a driver → **RFID Passes**
2. Click on **Assign Pass** and enter the UID of the pass (printed on the pass)
3. The pass is now linked to this driver and their assigned vehicles

When a driver taps their personal pass at a charger, the session is specifically attributed to them — useful for reporting and cost allocation per driver.

See also: [RFID Passes](../getting-started/rfid-cards) for ordering and activation.

## Charging Limits

Set limits per driver to control costs:

### Monthly Energy Limit
Maximum kWh a driver can charge per month. If the limit is reached:
- The driver is notified by email/app
- Further charging is subject to approval by the fleet manager (or the limit is reset next month)

### Per Session Limit
Maximum kWh per individual session. Useful for preventing unintended overnight charging.

### Location Restrictions
Restrict where a driver can charge. For example, only Stroomlijnen locations on the assigned route.

## Driver App

Drivers can download the Stroomlijnen app to:

- **Find Chargers** — Map of all Stroomlijnen locations with real-time availability
- **Start Sessions** — Scan QR code or use Bluetooth to start charging (alternative to RFID)
- **Monitor Sessions** — Current charging power, delivered energy, estimated time to desired SoC
- **View History** — Past sessions with energy and cost details
- **Receive Notifications** — Session completed, charger available, PnC events

The app is available for iOS and Android. Drivers log in with the email address registered in My Fleet.

## Reporting

### Driver Reports
- Total kWh per driver per month
- Number of sessions
- Average session duration
- Most used locations
- Cost allocation

### Driver Comparison
Compare charging patterns of drivers to identify:
- Efficient versus inefficient charging behavior
- Opportunities for route optimization
- Cost outliers

Reports are available via **Reports** → **Driver Analysis** and can be exported as CSV or PDF.

---