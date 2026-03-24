---
sidebar_position: 3
title: Laadsessies
description: Laadsessies bewaken en analyseren voor uw elektrische vloot in het Stroomlijnen Mijn Vloot-portaal.
keywords: [charging sessions, session monitoring, energy consumption, charging history, fleet analytics]
---

# Laadsessies

Elke keer dat een van uw voertuigen laadt bij een Stroomlijnen-locatie, wordt een sessierecord aangemaakt met volledige gegevens — energie, kosten, duur, vermogenscurve en authenticatiemethode.

## Actieve Sessies

De weergave **Actieve sessies** toont alle voertuigen die momenteel laden:

- **Voertuig** — Geïdentificeerd aan de hand van kenteken, bijnaam of VIN
- **Locatie** — Naam van de laderlocatie en specifiek EVSE-ID
- **Gestart** — Datum en tijd van sessiestart
- **Duur** — Lopende timer
- **Energie** — Tot nu toe geleverde kWh (wordt elke 60 seconden bijgewerkt)
- **Vermogen** — Huidig laadvermogen in kW
- **SoC** — Laadniveau van de accu (indien door het voertuig gerapporteerd)
- **Authenticatiemethode** — Plug & Charge, RFID of app

U kunt op elke actieve sessie klikken voor een **live vermogenscurve** die het laadprofiel in realtime toont.

## Sessiehistorie

De historieweergave toont alle voltooide sessies met filtermogelijkheden:

### Filters
- **Datumbereik** — Aangepaste datums of presets (vandaag, deze week, deze maand, laatste 30 dagen)
- **Voertuig** — Eén voertuig of voertuiggroep
- **Locatie** — Specifieke locatie of alle locaties
- **Authenticatiemethode** — PnC, RFID, app of alles
- **Minimale energie** — Filter heel korte sessies weg

### Sessiedetails

Klik op een sessie om te zien:

- **Volledige vermogenscurve** — Grafiek van kW in de tijd, met opstart, plateau en afname
- **Energie-uitsplitsing** — Totaal kWh, piekvermogen, gemiddeld vermogen
- **Kostenuitsplitsing** — Energiekosten (€/kWh), eventuele toeslagen, totale kosten
- **Voertuiggegevens** — SoC bij start en einde (indien gerapporteerd), VIN, kenteken
- **Ladergegevens** — EVSE-ID, connectortype, firmwareversie
- **CDR** — Charge Detail Record conform OCPI (downloadbaar)

## Analytics

Het analytics-dashboard biedt vlootbrede inzichten:

### Energieverbruik
- Totaal kWh per dag/week/maand
- Uitsplitsing per voertuig of voertuiggroep
- Vergelijking over tijdsperioden
- Trends in kosten per kWh

### Efficiëntiecijfers
- Gemiddelde energie per sessie
- Gemiddelde kosten per kWh
- Bezettingsgraad (laadtijd versus stilstandtijd per voertuig)
- Piekvraagpatronen

### Locatieanalyse
- Welke locaties uw vloot het meest gebruikt
- Gemiddelde wachttijd voor een vrije lader
- Energieprijzen per locatie

## Meldingen

Configureer meldingen voor:

- **Mislukte sessies** — Een sessie die is gestart maar abnormaal is beëindigd
- **Lange sessies** — Een voertuig laadt langer dan een ingestelde duur
- **Hoge kosten** — Een sessie overschrijdt een kostendrempel
- **SoC-limiet** — Het laadniveau van een voertuig is onder een minimum gezakt voordat het bij een lader aankwam

Meldingen worden verzonden via e-mail en/of getoond in het Mijn Vloot-dashboard.

## Export en Integratie

### CSV-export
Download elke gefilterde weergave als CSV-bestand. Kolommen bevatten alle sessiedetails plus berekende velden zoals kosten per kWh en duur.

### API
Sessiegegevens programmatisch ophalen:

```
GET /api/v1/sessions?start_date=2026-03-01&end_date=2026-03-31
GET /api/v1/sessions/{session_id}
GET /api/v1/sessions/active
```

### Webhooks
Ontvang realtime meldingen wanneer sessies starten, bijgewerkt worden of eindigen:

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

Configureer webhooks via **Instellingen** → **API** → **Webhooks**.

## De Vermogenscurve Begrijpen

Een typische DC-laadsessie voor een elektrische vrachtwagen vertoont het volgende patroon:

1. **Opstart** (0–3 min) — Het vermogen stijgt terwijl de lader en het voertuig onderhandelen en de accu wordt voorverwarmd
2. **Plateau** (3 min – 60%+ SoC) — Maximaal laadvermogen, vaak 150–350 kW afhankelijk van het vrachtwagenmodel
3. **Afname** (60%+ SoC – doel-SoC) — Het vermogen neemt geleidelijk af naarmate de accu voller wordt, ter bescherming van de celgezondheid
4. **Voltooiing** — De sessie eindigt bij het doel-SoC of wanneer handmatig gestopt

Inzicht in deze curve helpt bij de planning: als u alleen van 20% naar 80% SoC hoeft te laden, ontvangt u het meeste energie tijdens de snelle plateaufase. Laden van 80–100% duurt onevenredig langer.
