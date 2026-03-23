---
sidebar_position: 5
title: Driver Management
description: Manage drivers in your electric fleet — assign vehicles, issue RFID cards, set charging limits, and track driver activity.
keywords: [driver management, fleet drivers, RFID assignment, charging limits, driver app]
---

# Driver Management

The Driver Management section lets fleet administrators manage who can charge, on which vehicles, and with what limits.

## Adding Drivers

1. Go to **Drivers** → **Add Driver**
2. Enter driver details:
   - **Name** — First and last name
   - **Email** — For account access and notifications
   - **Phone** — For app authentication (optional)
   - **Employee ID** — For internal reference
   - **Department/Group** — For organizational filtering
3. Click **Save**

The driver receives an email invitation to set up their Stroomlijnen account and download the mobile app.

## Assigning Vehicles

Drivers can be assigned to one or more vehicles:

1. Go to **Drivers** → select a driver → **Vehicles**
2. Click **Assign Vehicle** and select from your fleet
3. A driver can only start sessions on their assigned vehicles (if vehicle-driver linking is enforced in your fleet settings)

### Flexible Assignment
For fleets where drivers share vehicles:
- Set **Vehicle-Driver Linking** to "Flexible" in fleet settings
- Any registered driver can charge any fleet vehicle
- Sessions still track which driver initiated them (via RFID card or app)

## RFID Cards for Drivers

Each driver can have a personal RFID card:

1. Go to **Drivers** → select a driver → **RFID Cards**
2. Click **Assign Card** and enter the card's UID (printed on the card)
3. The card is now linked to this driver and their assigned vehicles

When a driver taps their personal card at a charger, the session is attributed to them specifically — useful for reporting and per-driver cost tracking.

See also: [RFID Cards](../getting-started/rfid-cards) for ordering and activation.

## Charging Limits

Set per-driver limits to control costs:

### Monthly Energy Limit
Maximum kWh a driver can charge per month. When the limit is reached:
- The driver is notified via email/app
- Further charging requires fleet manager approval (or the limit resets next month)

### Per-Session Limit
Maximum kWh per individual session. Useful for preventing overnight charges when not intended.

### Location Restrictions
Limit which locations a driver can charge at. For example, only Stroomlijnen locations on their assigned route.

## Driver App

Drivers can download the Stroomlijnen app to:

- **Find chargers** — Map of all Stroomlijnen locations with real-time availability
- **Start sessions** — Scan QR code or use Bluetooth to start charging (alternative to RFID)
- **Monitor sessions** — See current charging power, energy delivered, estimated time to target SoC
- **View history** — Past sessions with energy and cost details
- **Receive notifications** — Session complete, charger available, PnC events

The app is available for iOS and Android. Drivers log in with the email address registered in My Fleet.

## Reporting

### Per-Driver Reports
- Total kWh per driver per month
- Number of sessions
- Average session duration
- Most-used locations
- Cost attribution

### Driver Comparison
Compare driver charging patterns to identify:
- Efficient vs. inefficient charging behavior
- Route optimization opportunities
- Cost outliers

Reports are available in **Reports** → **Driver Analysis** and can be exported as CSV or PDF.
