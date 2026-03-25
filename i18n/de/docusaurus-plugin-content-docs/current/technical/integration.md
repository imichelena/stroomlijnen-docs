---
sidebar_position: 4
title: API & Integration
description: Überblick über die Stroomlijnen REST API für die Integration mit Flottenmanagementsystemen — Sitzungen, Fahrzeuge, Webhooks.
keywords: [Ladegeräte-API, Flotten-API, Integration, REST API, Webhooks, OCPI, Flottenmanagementsystemintegration]
---

# API & Integration

Für Flotten, die Ladedaten von Stroomlijnen in ihre eigenen Managementsysteme integrieren möchten.

## REST API Überblick

Unsere API bietet programmatischen Zugriff auf alle Flottenmanagementsfunktionen:

**Basis-URL:** `https://api.stroomlijnen.nl/v1`
**Authentifizierung:** Bearer-Token (API-Schlüssel über Portal → Einstellungen → API)
**Format:** JSON
**Rate Limit:** 100 Anfragen/Minute

## Endpunkte

### Sitzungen

```
GET /sessions                    — Sitzungen abrufen (seitig, filterbar)
GET /sessions/{id}               — Sitzungsdetail abrufen
GET /sessions/{id}/meter-values  — Detaillierte Zählerstände abrufen
```

**Filter:**
- `?from=2026-03-01&to=2026-03-31` — Datumswertebereich
- `?vehicle=XX-123-YY` — nach Kennzeichen
- `?location=theater-carre` — nach Standort-Slug
- `?status=completed` — nach Status (active, completed, failed)
- `?auth_method=plug_and_charge` — nach Authentifizierungsmethode

**Antwort:**
```json
{
  "id": "STM-2026-03-001234",
  "vehicle": {
    "vin": "YV2E4C1A1RB123456",
    "license_plate": "XX-123-YY",
    "nickname": "LKW 14"
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

### Fahrzeuge

```
GET    /vehicles         — Flottenfahrzeuge abrufen
POST   /vehicles         — Fahrzeug hinzufügen
GET    /vehicles/{vin}   — Fahrzeugdetail abrufen
PATCH  /vehicles/{vin}   — Fahrzeug aktualisieren
DELETE /vehicles/{vin}   — Fahrzeug entfernen
```

### Fahrer

```
GET    /drivers          — Fahrer abrufen
POST   /drivers          — Fahrer hinzufügen
GET    /drivers/{id}     — Fahrerdetail abrufen
PATCH  /drivers/{id}     — Fahrer aktualisieren
DELETE /drivers/{id}     — Fahrer deaktivieren
```

### Standorte

```
GET /locations           — Alle verfügbaren Standorte abrufen
GET /locations/{id}      — Standortdetail mit Laderstatus
```

### Rechnungen

```
GET /invoices            — Rechnungen abrufen
GET /invoices/{id}       — Rechnungsdetail abrufen
GET /invoices/{id}/pdf   — PDF herunterladen
GET /invoices/{id}/csv   — CSV herunterladen (Sitzungsdaten)
```

## Webhooks

Erhalten Sie Echtzeit-Benachrichtigungen für Ereignisse:

### Einrichten
1. Gehen Sie zu **Portal → Einstellungen → Webhooks**
2. Fügen Sie Ihre Endpunkt-URL hinzu
3. Wählen Sie die zu empfangenden Ereignisse aus
4. Wir senden ein Testereignis zur Verifizierung

### Verfügbare Ereignisse

| Ereignis | Trigger | Payload |
|-------|---------|---------|
| `session.started` | Neue Ladesitzung beginnt | Sitzungsobjekt |
| `session.updated` | Sitzungsdaten aktualisiert (alle 60s während des Ladens) | Sitzungsobjekt |
| `session.completed` | Sitzung endet normal | Sitzungsobjekt mit Enddaten |
| `session.failed` | Sitzung schlägt fehl (Auth, Leistung, Fehler) | Sitzungsobjekt mit Fehler |
| `vehicle.alert` | Zertifikat läuft bald ab, Passwortproblem usw. | Meldungsobjekt |
| `invoice.created` | Neue Rechnung verfügbar | Rechnungsübersicht |

### Webhook-Format
```json
{
  "event": "session.completed",
  "timestamp": "2026-03-23T10:47:00Z",
  "data": { /* ereignisspezifische Payload */ }
}
```

**Wiederholungsrichtlinie:** 3 Versuche mit exponentieller Verzögerung (10s, 60s, 300s). Wenn alle fehlschlagen, wird das Ereignis protokolliert und über die API für manuelles Abrufen bereitgestellt.

## OCPI-Integration

Für eMSP/CPO-zu-CPO-Integration unterstützen wir **OCPI 2.2.1**:
- **Standortmodul** — Echtzeit-Laderverfügbarkeit
- **Sitzungsmodul** — Live-Sitzungsdaten
- **CDR-Modul** — Charge Detail Records
- **Tarifmodul** — aktuelle Preise
- **Commandosmodul** — Fernstart/Fernstop

Kontaktieren Sie uns für OCPI-Endpunktdaten und IntegrationsTests.

## SDKs & Beispiele

Wir stellen Beispiele in gängigen Programmiersprachen bereit:

```python
# Python-Beispiel
import requests

API_KEY = "Ihr_API_Schlüssel_hier"
BASE = "https://api.stroomlijnen.nl/v1"
headers = {"Authorization": f"Bearer {API_KEY}"}

# Letzte 10 Sitzungen abrufen
sessions = requests.get(f"{BASE}/sessions?limit=10", headers=headers)
for s in sessions.json()["data"]:
    print(f"{s['vehicle']['nickname']}: {s['energy_kwh']} kWh bei {s['location']['name']}")
```

## Rate Limits & Kontingente

| Plan | Rate Limit | Webhook-Ereignisse | Datenspeicherung |
|------|-----------|----------------|----------------|
| Standard | 100 Anfr./Min | 1.000/Tag | 12 Monate |
| Professionell | 500 Anfr./Min | 10.000/Tag | 24 Monate |
| Enterprise | 2.000 Anfr./Min | Unbegrenzt | 36 Monate |

## Support

- **API-Probleme:** [api-support@stroomlijnen.nl](mailto:api-support@stroomlijnen.nl)
- **Statusseite:** [status.stroomlijnen.nl](https://status.stroomlijnen.nl)
- **Änderungsprotokoll:** API-Änderungen werden 30 Tage im Voraus per E-Mail angekündigt