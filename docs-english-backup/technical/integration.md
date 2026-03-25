---
sidebar_position: 4
title: API & Integratie
description: Overzicht van de Stroomlijnen REST API voor integratie met vlootbeheersystemen — sessies, voertuigen, webhooks.
keywords: [laad-API, vloot-API, integratie, REST API, webhooks, OCPI, vlootbeheersysteemintegratie]
---

# API & Integratie

Voor vloten die laadgegevens van Stroomlijnen willen integreren in hun eigen beheersystemen.

## REST API Overzicht

Onze API biedt programmatische toegang tot alle vlootbeheerfuncties:

**Basis-URL:** `https://api.stroomlijnen.nl/v1`
**Authenticatie:** Bearer-token (API-sleutel via portaal → Instellingen → API)
**Formaat:** JSON
**Snelheidslimiet:** 100 verzoeken/minuut

## Eindpunten

### Sessies

```
GET /sessions                    — Sessies ophalen (gepagineerd, filterbaar)
GET /sessions/{id}               — Sessiedetail opvragen
GET /sessions/{id}/meter-values  — Gedetailleerde meterreadings opvragen
```

**Filters:**
- `?from=2026-03-01&to=2026-03-31` — datumbereik
- `?vehicle=XX-123-YY` — op kenteken
- `?location=theater-carre` — op locatie-slug
- `?status=completed` — op status (active, completed, failed)
- `?auth_method=plug_and_charge` — op authenticatiemethode

**Antwoord:**
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

### Voertuigen

```
GET    /vehicles         — Vlootvoertuigen ophalen
POST   /vehicles         — Voertuig toevoegen
GET    /vehicles/{vin}   — Voertuigdetail opvragen
PATCH  /vehicles/{vin}   — Voertuig bijwerken
DELETE /vehicles/{vin}   — Voertuig verwijderen
```

### Bestuurders

```
GET    /drivers          — Bestuurders ophalen
POST   /drivers          — Bestuurder toevoegen
GET    /drivers/{id}     — Bestuurdersdetail opvragen
PATCH  /drivers/{id}     — Bestuurder bijwerken
DELETE /drivers/{id}     — Bestuurder deactiveren
```

### Locaties

```
GET /locations           — Alle beschikbare locaties ophalen
GET /locations/{id}      — Locatiedetail met laderstatus
```

### Facturen

```
GET /invoices            — Facturen ophalen
GET /invoices/{id}       — Factuurdetail opvragen
GET /invoices/{id}/pdf   — PDF downloaden
GET /invoices/{id}/csv   — CSV downloaden (sessiegegevens)
```

## Webhooks

Ontvang realtime meldingen voor gebeurtenissen:

### Instellen
1. Ga naar **Portaal → Instellingen → Webhooks**
2. Voeg uw eindpunt-URL toe
3. Selecteer te ontvangen gebeurtenissen
4. We sturen een testgebeurtenis ter verificatie

### Beschikbare Gebeurtenissen

| Gebeurtenis | Trigger | Payload |
|-------|---------|---------|
| `session.started` | Nieuwe laadsessie begint | Sessieobject |
| `session.updated` | Sessiegegevens bijgewerkt (elke 60s tijdens laden) | Sessieobject |
| `session.completed` | Sessie eindigt normaal | Sessieobject met eindgegevens |
| `session.failed` | Sessie mislukt (auth, vermogen, fout) | Sessieobject met fout |
| `vehicle.alert` | Certificaat bijna verlopen, passprobleem, enz. | Meldingsobject |
| `invoice.created` | Nieuwe factuur beschikbaar | Factuuroverzicht |

### Webhookformaat
```json
{
  "event": "session.completed",
  "timestamp": "2026-03-23T10:47:00Z",
  "data": { /* gebeurtenisspecifieke payload */ }
}
```

**Herhalingsbeleid:** 3 pogingen met exponentiële vertraging (10s, 60s, 300s). Als alle mislukken, wordt de gebeurtenis gelogd en beschikbaar gesteld via de API voor handmatig ophalen.

## OCPI-integratie

Voor eMSP/CPO-naar-CPO-integratie ondersteunen we **OCPI 2.2.1**:
- **Locatiesmodule** — realtime laderbeschikbaarheid
- **Sessiesmodule** — live sessiegegevens
- **CDR-module** — Charge Detail Records
- **Tarievenmodule** — actuele prijzen
- **Commandosmodule** — op afstand starten/stoppen

Neem contact met ons op voor OCPI-eindpuntgegevens en integratietests.

## SDK's & Voorbeelden

We verstrekken voorbeelden in gangbare programmeertalen:

```python
# Python-voorbeeld
import requests

API_KEY = "uw_api_sleutel_hier"
BASE = "https://api.stroomlijnen.nl/v1"
headers = {"Authorization": f"Bearer {API_KEY}"}

# Laatste 10 sessies ophalen
sessions = requests.get(f"{BASE}/sessions?limit=10", headers=headers)
for s in sessions.json()["data"]:
    print(f"{s['vehicle']['nickname']}: {s['energy_kwh']} kWh bij {s['location']['name']}")
```

## Snelheidslimieten & Quota's

| Plan | Snelheidslimiet | Webhookgebeurtenissen | Gegevensbewaring |
|------|-----------|----------------|----------------|
| Standaard | 100 verz./min | 1.000/dag | 12 maanden |
| Professioneel | 500 verz./min | 10.000/dag | 24 maanden |
| Enterprise | 2.000 verz./min | Onbeperkt | 36 maanden |

## Ondersteuning

- **API-problemen:** [api-support@stroomlijnen.nl](mailto:api-support@stroomlijnen.nl)
- **Statuspagina:** [status.stroomlijnen.nl](https://status.stroomlijnen.nl)
- **Wijzigingslog:** API-wijzigingen worden 30 dagen van tevoren aangekondigd per e-mail
