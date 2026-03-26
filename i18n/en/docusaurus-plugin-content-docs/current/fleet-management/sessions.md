---
---
sidebar_position: 3
title: Charging Sessions
description: Monitor and analyze charging sessions for your electric fleet in the Streamline My Fleet portal.
keywords: [charging sessions, session monitoring, energy consumption, charging history, fleet analytics]
---

# Charging Sessions

Every time one of your vehicles charges at a Streamline location, a session record is created with full details — energy, costs, duration, power curve, and authentication method.

## Active Sessions

The **Active Sessions** view displays all vehicles currently charging:

- **Vehicle** — Identified by license plate, nickname, or VIN
- **Location** — Name of the charger location and specific EVSE-ID
- **Started** — Date and time of session start
- **Duration** — Ongoing timer
- **Energy** — Energy delivered so far in kWh (updated every 60 seconds)
- **Power** — Current charging power in kW
- **SoC** — Battery charge level (if reported by the vehicle)
- **Authentication Method** — Plug & Charge, RFID, or app

You can click on any active session for a **live power curve** showing the charging profile in real-time.

## Session History

The history view displays all completed sessions with filtering options:

### Filters
- **Date Range** — Custom dates or presets (today, this week, this month, last 30 days)
- **Vehicle** — One vehicle or vehicle group
- **Location** — Specific location or all locations
- **Authentication Method** — PnC, RFID, app, or all
- **Minimum Energy** — Filter out very short sessions

### Session Details

Click on a session to see:

- **Full Power Curve** — Graph of kW over time, with startup, plateau, and decline
- **Energy Breakdown** — Total kWh, peak power, average power
- **Cost Breakdown** — Energy costs (€/kWh), any surcharges, total costs
- **Vehicle Details** — SoC at start and end (if reported), VIN, license plate
- **Charger Details** — EVSE-ID, connector type, firmware version
- **CDR** — Charge Detail Record conforming to OCPI (downloadable)

## Analytics

The analytics dashboard provides fleet-wide insights:

### Energy Consumption
- Total kWh per day/week/month
- Breakdown by vehicle or vehicle group
- Comparison over time periods
- Trends in costs per kWh

### Efficiency Metrics
- Average energy per session
- Average cost per kWh
- Utilization rate (charging time vs. idle time per vehicle)
- Peak demand patterns

### Location Analysis
- Which locations your fleet uses most
- Average wait time for a free charger
- Energy prices per location

## Notifications

Configure notifications for:

- **Failed Sessions** — A session that started but ended abnormally
- **Long Sessions** — A vehicle charging longer than a set duration
- **High Costs** — A session exceeding a cost threshold
- **SoC Limit** — The charge level of a vehicle dropping below a minimum before arriving at a charger

Notifications are sent via email and/or displayed in the My Fleet dashboard.

## Export and Integration

### CSV Export
Download any filtered view as a CSV file. Columns include all session details plus calculated fields like costs per kWh and duration.

### API
Retrieve session data programmatically:

```bash
GET /api/v1/sessions?start_date=2026-03-01&end_date=2026-03-31
GET /api/v1/sessions/{session_id}
GET /api/v1/sessions/active
```

### Webhooks
Receive real-time notifications when sessions start, are updated, or end:

```json
{
  "event": "session.completed",
  "session_id": "ses_abc123",
  "vehicle_vin": "YV2RT60A1PB123456",
  "energy_kwh": 287.4,
  "cost_eur": 34.49,
  "duration_minutes": 142,
  "location": "Theater De Flint, Amersfoort"
}
```

Configure webhooks via **Settings** → **API** → **Webhooks**.

## Understanding the Power Curve

A typical DC charging session for an electric truck exhibits the following pattern:

1. **Startup** (0–3 min) — Power increases as the charger and vehicle negotiate and the battery is preheated
2. **Plateau** (3 min – 60%+ SoC) — Maximum charging power, often 150–350 kW depending on the truck model
3. **Decline** (60%+ SoC – target SoC) — Power gradually decreases as the battery becomes fuller, to protect cell health
4. **Completion** — The session ends at the target SoC or when manually stopped

Insight into this curve helps with planning: if you only need to charge from 20% to 80% SoC, you receive the most energy during the fast plateau phase. Charging from 80–100% takes disproportionately longer.

---