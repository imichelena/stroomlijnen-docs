---
sidebar_position: 3
title: Charging Sessions
description: Monitor and analyze charging sessions for your electric fleet in the Stroomlijnen My Fleet portal.
keywords: [charging sessions, session monitoring, energy consumption, charging history, fleet analytics]
---

# Charging Sessions

Every time one of your vehicles charges at a Stroomlijnen location, a session record is created with complete details — energy, cost, duration, power curve, and authentication method.

## Active Sessions

The **Active Sessions** view shows all currently charging vehicles:

- **Vehicle** — Identified by license plate, nickname, or VIN
- **Location** — Charger site name and specific EVSE ID
- **Started** — Date and time the session began
- **Duration** — Running timer
- **Energy** — kWh delivered so far (updates every 60 seconds)
- **Power** — Current charging power in kW
- **SoC** — Battery state of charge (if reported by vehicle)
- **Auth method** — Plug & Charge, RFID, or app

You can click any active session for a **live power curve** showing the charging profile in real time.

## Session History

The history view shows all completed sessions with filtering:

### Filters
- **Date range** — Custom dates or presets (today, this week, this month, last 30 days)
- **Vehicle** — Single vehicle or vehicle group
- **Location** — Specific site or all sites
- **Auth method** — PnC, RFID, app, or all
- **Minimum energy** — Filter out very short sessions

### Session Details

Click any session to see:

- **Full power curve** — Graph of kW over time, showing ramp-up, plateau, and taper
- **Energy breakdown** — Total kWh, peak power, average power
- **Cost breakdown** — Energy cost (€/kWh), any applicable fees, total cost
- **Vehicle data** — SoC at start and end (if reported), VIN, license plate
- **Charger data** — EVSE ID, connector type, firmware version
- **CDR** — Charge Detail Record compliant with OCPI (downloadable)

## Analytics

The analytics dashboard provides fleet-wide insights:

### Energy Consumption
- Total kWh per day/week/month
- Breakdown by vehicle or vehicle group
- Comparison across time periods
- Cost per kWh trends

### Efficiency Metrics
- Average energy per session
- Average cost per kWh
- Utilization rate (charging time vs. idle time per vehicle)
- Peak demand patterns

### Location Analysis
- Which sites your fleet uses most
- Average wait time for a free charger
- Energy prices by location

## Alerts

Configure alerts for:

- **Failed sessions** — A session that started but terminated abnormally
- **Long sessions** — A vehicle has been charging beyond a set duration
- **High cost** — A session exceeds a cost threshold
- **SoC limit** — A vehicle's SoC dropped below a minimum before arriving at a charger

Alerts are sent via email and/or shown in the My Fleet dashboard.

## Export & Integration

### CSV Export
Download any filtered view as a CSV file. Columns include all session details plus calculated fields like cost per kWh and duration.

### API
Access session data programmatically:

```
GET /api/v1/sessions?start_date=2026-03-01&end_date=2026-03-31
GET /api/v1/sessions/{session_id}
GET /api/v1/sessions/active
```

### Webhooks
Receive real-time notifications when sessions start, update, or complete:

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

Configure webhooks in **Settings** → **API** → **Webhooks**.

## Understanding the Power Curve

A typical electric truck DC charging session shows this pattern:

1. **Ramp-up** (0–3 min) — Power increases as the charger and vehicle negotiate and the battery pre-conditions
2. **Plateau** (3 min – 60%+ SoC) — Maximum charging power, often 150–350 kW depending on truck model
3. **Taper** (60%+ SoC – target SoC) — Power gradually reduces as the battery fills, to protect cell health
4. **Completion** — Session ends at the target SoC or when manually stopped

Understanding this curve helps with scheduling: if you only need to charge from 20% to 80% SoC, you'll get most of the energy during the fast plateau phase. Charging 80–100% takes disproportionately longer.
