---
sidebar_position: 2
title: Vehicle Management
description: How to register, configure, and manage electric vehicles in the Stroomlijnen My Fleet portal.
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
   - **Make & Model** — Select from dropdown
   - **Year** — Model year
   - **Battery Capacity** — In kWh (auto-filled for known models)
3. Optional fields:
   - **Nickname** — For easy identification (e.g., "Amsterdam 014")
   - **Department/Group** — For organizational filtering
   - **Cost Center** — For billing allocation
4. Click **Save**

### Bulk Import

For fleets with many vehicles:

1. Go to **Vehicles** → **Import**
2. Download the CSV template
3. Fill in your vehicle data
4. Upload the completed CSV
5. Review the import preview — correct any validation errors
6. Click **Confirm Import**

## Vehicle Details

Each vehicle's detail page shows:

### Status
- **Current state** — Charging / Idle / Offline
- **Last seen** — When the vehicle last communicated with a charger
- **Battery level** — If reported by the vehicle during the last session

### Charging Configuration
- **Authentication method** — PnC, RFID, or both
- **Plug & Charge status** — Enabled/Disabled, certificate status
- **Assigned RFID cards** — Which cards are linked to this vehicle
- **Charging policy** — Maximum charge rate, preferred SoC target, scheduled charging windows

### Session History
- List of all past charging sessions for this vehicle
- Filter by date range, location, or authentication method
- Total energy, total cost, and average session duration

### Documents
- Vehicle registration (optional upload)
- Insurance certificate (optional upload)
- Maintenance records

## Charging Policies

You can set per-vehicle or per-group charging policies:

### Power Limit
Set a maximum charging power. Useful for:
- Battery longevity (limiting to 80% of max rate)
- Cost control (lower power = lower demand charges at some locations)

### SoC Target
Set a target State of Charge. When reached, the charger will reduce power or stop. This extends battery life and frees up chargers for other vehicles.

### Scheduled Charging
Define time windows when charging should occur. Useful for:
- Off-peak electricity pricing
- Grid load management
- Departure-time optimization (charge to 90% by 06:00)

### Priority
When multiple fleet vehicles are at the same location and power is limited, priority settings determine which vehicles get full power first.

## Vehicle Groups

Organize vehicles into groups for easier management:

- **By route** — Amsterdam routes, Rotterdam routes
- **By type** — Long-haul, regional delivery, last-mile
- **By department** — Operations, customer delivery

Groups can have shared charging policies and billing settings.

## Decommissioning a Vehicle

When a vehicle leaves your fleet:

1. Go to **Vehicles** → select vehicle → **Settings**
2. Click **Decommission Vehicle**
3. This will:
   - Revoke any active PnC certificates
   - Unlink all RFID cards
   - Archive the vehicle's session history (still accessible for reporting)
   - Stop billing for this vehicle

The vehicle can be reactivated if it returns to the fleet.

## Data Export

Export vehicle data for integration with your own systems:

- **Vehicle list** — CSV with all vehicle details
- **Session history** — CSV per vehicle or for all vehicles
- **API** — Programmatic access to vehicle data (see Fleet Management Overview → API)
