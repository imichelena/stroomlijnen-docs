---
---
sidebar_position: 2
title: Vehicle Management
description: How to register, configure, and manage electric vehicles in the Streamline My Fleet portal.
keywords: [vehicle management, fleet registration, electric truck, VIN, RFID assignment, charging policy]
---

# Vehicle Management

The Vehicles section of My Fleet is where you register trucks and vans, configure their charging settings, and monitor their status.

## Adding Vehicles

### Single Vehicle

1. Go to **Vehicles** → **Add Vehicle**
2. Fill in the required fields:
   - **VIN** — 17-character Vehicle Identification Number
   - **License Plate** — Dutch or EU format
   - **Make & Model** — Select from the dropdown menu
   - **Model Year** — Year of manufacture
   - **Battery Capacity** — In kWh (automatically filled in for known models)
3. Optional fields:
   - **Nickname** — For easy recognition (e.g., "Amsterdam 014")
   - **Department/Group** — For organizational filtering
   - **Cost Center** — For invoice allocation
4. Click on **Save**

### Bulk Import

For fleets with many vehicles:

1. Go to **Vehicles** → **Import**
2. Download the CSV template
3. Fill in your vehicle data
4. Upload the completed CSV file
5. Review the import summary — correct any validation errors
6. Click on **Confirm Import**

## Vehicle Details

The detail page of each vehicle displays:

### Status
- **Current State** — Charging / Inactive / Offline
- **Last Seen** — When the vehicle last communicated with a charger
- **Battery Level** — If reported by the vehicle during the last session

### Charging Configuration
- **Authentication Method** — PnC, RFID, or both
- **Plug & Charge Status** — Enabled/Disabled, certificate status
- **Assigned RFID Passes** — Which passes are linked to this vehicle
- **Charging Policy** — Maximum charging power, desired SoC target, scheduled charging windows

### Session History
- List of all past charging sessions for this vehicle
- Filter by date range, location, or authentication method
- Total energy, total costs, and average session duration

### Documents
- Vehicle registration document (optional upload)
- Insurance certificate (optional upload)
- Maintenance data

## Charging Policy

You can set charging policy per vehicle or per group:

### Power Limit
Set a maximum charging power. Useful for:
- Battery durability (limit to 80% of maximum power)
- Cost management (lower power = lower capacity costs at some locations)

### SoC Target
Set a desired State of Charge (SoC) level. When reached, the charger reduces power or stops. This extends battery life and makes chargers available for other vehicles.

### Scheduled Charging
Define time windows when charging is allowed. Useful for:
- Off-peak electricity prices
- Grid load management
- Optimization based on departure time (charge to 90% by 06:00)

### Priority
When multiple fleet vehicles are at the same location and power is limited, priority settings determine which vehicles get full power first.

## Vehicle Groups

Organize vehicles into groups for easier management:

- **Per Route** — Amsterdam routes, Rotterdam routes
- **Per Type** — Long-distance, regional delivery, last-mile
- **Per Department** — Operations, customer delivery

Groups can have shared charging policies and billing settings.

## Decommissioning a Vehicle

When a vehicle leaves your fleet:

1. Go to **Vehicles** → select vehicle → **Settings**
2. Click on **Decommission Vehicle**
3. This will:
   - Revoke all active PnC certificates
   - Unlink all RFID passes
   - Archive the vehicle's session history (still accessible for reporting)
   - Stop billing for this vehicle

The vehicle can be reactivated if it returns to the fleet.

## Data Export

Export vehicle data for integration with your own systems:

- **Vehicle List** — CSV with all vehicle details
- **Session History** — CSV per vehicle or for all vehicles
- **API** — Programmatic access to vehicle data (see Fleet Management Overview → API)

---