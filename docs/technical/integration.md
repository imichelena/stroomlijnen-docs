---
sidebar_position: 4
title: API & Integration
description: Stroomlijnen REST API overview for fleet management system integration — sessions, vehicles, webhooks.
keywords: [charging API, fleet API, integration, REST API, webhooks, OCPI, fleet management integration]
---

# API & Integration

For fleets that want to integrate Stroomlijnen charging data into their own management systems.

## REST API Overview

Our API provides programmatic access to all fleet management features:

**Base URL:** `https://api.stroomlijnen.nu/v1`
**Authentication:** Bearer token (API key from portal → Settings → API)
**Format:** JSON
**Rate limit:** 100 requests/minute

## Endpoints

### Sessions

```
GET /sessions                    — List sessions (paginated, filterable)
GET /sessions/{id}               — Get session detail
GET /sessions/{id}/meter-values  — Get detailed meter readings
```

**Filters:**
- `?from=2026-03-01&to=2026-03-31` — date range
- `?vehicle=XX-123-YY` — by license plate
- `?location=theater-carre` — by location slug
- `?status=completed` — by status (active, completed, failed)
- `?auth_method=plug_and_charge` — by auth method

**Response:**
```json
{
  "id": "STM-2026-03-001234",
  "vehicle": {
    "vin": "YV2E4C1A1RB123456",
    "license_plate": "XX-123-YY",
    "nickname": "Truck 14"
  },
  "location": {
    "name": "Theater Carré, Amsterdam",
    "evse_id": "NL*STM*E001234*1"
  },
  "start_time": "2026-03-23T08:14:00+01:00",
  "end_time": "2026-03-23T10:47:00+01:00",
  "energy_kwh": 187.4,
  "max_power_kw": 148.2,
  "avg_power_kw": 73.8,
  "auth_method": "plug_and_charge",
  "cost": {
    "total": 18.74,
    "currency": "EUR",
    "tariff": "fleet-standard",
    "breakdown": {
      "energy": 18.74,
      "time": 0,
      "idle": 0
    }
  },
  "status": "completed"
}
```

### Vehicles

```
GET    /vehicles         — List fleet vehicles
POST   /vehicles         — Add vehicle
GET    /vehicles/{vin}   — Get vehicle detail
PATCH  /vehicles/{vin}   — Update vehicle
DELETE /vehicles/{vin}   — Remove vehicle
```

### Drivers

```
GET    /drivers          — List drivers
POST   /drivers          — Add driver
GET    /drivers/{id}     — Get driver detail
PATCH  /drivers/{id}     — Update driver
DELETE /drivers/{id}     — Deactivate driver
```

### Locations

```
GET /locations           — List all available locations
GET /locations/{id}      — Location detail with charger status
```

### Invoices

```
GET /invoices            — List invoices
GET /invoices/{id}       — Invoice detail
GET /invoices/{id}/pdf   — Download PDF
GET /invoices/{id}/csv   — Download CSV (session data)
```

## Webhooks

Receive real-time notifications for events:

### Setup
1. Go to **Portal → Settings → Webhooks**
2. Add your endpoint URL
3. Select events to receive
4. We'll send a test event for verification

### Available Events

| Event | Trigger | Payload |
|-------|---------|---------|
| `session.started` | New charging session begins | Session object |
| `session.updated` | Session data updated (every 60s during charge) | Session object |
| `session.completed` | Session ends normally | Session object with final data |
| `session.failed` | Session failed (auth, power, error) | Session object with error |
| `vehicle.alert` | Certificate expiring, card issue, etc. | Alert object |
| `invoice.created` | New invoice ready | Invoice summary |

### Webhook Format
```json
{
  "event": "session.completed",
  "timestamp": "2026-03-23T10:47:00Z",
  "data": { /* event-specific payload */ }
}
```

**Retry policy:** 3 retries with exponential backoff (10s, 60s, 300s). If all fail, event is logged and available via API for manual retrieval.

## OCPI Integration

For eMSP/CPO-to-CPO integration, we support **OCPI 2.2.1**:
- **Locations module** — real-time charger availability
- **Sessions module** — live session data
- **CDRs module** — Charge Detail Records
- **Tariffs module** — current pricing
- **Commands module** — remote start/stop

Contact us for OCPI endpoint credentials and integration testing.

## SDKs & Examples

We provide examples in common languages:

```python
# Python example
import requests

API_KEY = "your_api_key_here"
BASE = "https://api.stroomlijnen.nu/v1"
headers = {"Authorization": f"Bearer {API_KEY}"}

# Get last 10 sessions
sessions = requests.get(f"{BASE}/sessions?limit=10", headers=headers)
for s in sessions.json()["data"]:
    print(f"{s['vehicle']['nickname']}: {s['energy_kwh']} kWh at {s['location']['name']}")
```

## Rate Limits & Quotas

| Plan | Rate Limit | Webhook Events | Data Retention |
|------|-----------|----------------|----------------|
| Standard | 100 req/min | 1,000/day | 12 months |
| Professional | 500 req/min | 10,000/day | 24 months |
| Enterprise | 2,000 req/min | Unlimited | 36 months |

## Support

- **API issues:** [api-support@stroomlijnen.nu](mailto:api-support@stroomlijnen.nu)
- **Status page:** [status.stroomlijnen.nu](https://status.stroomlijnen.nu)
- **Changelog:** API changes are announced 30 days in advance via email
