---
sidebar_position: 3
title: Ladesitzungen
description: Überwachen und analysieren Sie die Ladesitzungen für Ihre Elektroflotte im Stroomlijnen Mijn Vloot-Portal.
keywords: [Ladesitzungen, Sitzungsüberwachung, Energieverbrauch, Ladehistorie, Flottenanalyse]
---

# Ladesitzungen

Jedes Mal, wenn eines Ihrer Fahrzeuge an einem Stroomlijnen-Standort lädt, wird ein Sitzungsprotokoll mit vollständigen Daten erstellt — Energie, Kosten, Dauer, Leistungsverlauf und Authentifizierungsmethode.

## Aktive Sitzungen

Die Ansicht **Aktive Sitzungen** zeigt alle Fahrzeuge, die derzeit laden:

- **Fahrzeug** — Identifiziert durch Kennzeichen, Spitznamen oder VIN
- **Standort** — Name des Laderstandorts und spezifische EVSE-ID
- **Gestartet** — Datum und Uhrzeit des Sitzungsstarts
- **Dauer** — Laufende Timer
- **Energie** — Bisher gelieferte kWh (wird alle 60 Sekunden aktualisiert)
- **Leistung** — Aktuelle Ladeleistung in kW
- **SoC** — Ladezustand des Akkus (sofern vom Fahrzeug gemeldet)
- **Authentifizierungsmethode** — Plug & Charge, RFID oder App

Sie können auf jede aktive Sitzung klicken, um eine **Live-Leistungsverlauf** zu sehen, die das Ladeprofil in Echtzeit anzeigt.

## Sitzungshistorie

Die Historieansicht zeigt alle abgeschlossenen Sitzungen mit Filtermöglichkeiten:

### Filter
- **Datumsbereich** — Benutzerdefinierte Daten oder Voreinstellungen (heute, diese Woche, dieser Monat, letzte 30 Tage)
- **Fahrzeug** — Ein Fahrzeug oder eine Fahrzeuggruppe
- **Standort** — Spezifischer Standort oder alle Standorte
- **Authentifizierungsmethode** — PnC, RFID, App oder alles
- **Minimale Energie** — Filter sehr kurze Sitzungen heraus

### Sitzungsdetails

Klicken Sie auf eine Sitzung, um zu sehen:

- **Vollständiger Leistungsverlauf** — Grafik von kW im Laufe der Zeit, mit Start, Plateau und Abschwung
- **Energie-Aufschlüsselung** — Gesamte kWh, Spitzenleistung, Durchschnittsleistung
- **Kosten-Aufschlüsselung** — Energiekosten (€/kWh), eventuelle Zuschläge, Gesamtkosten
- **Fahrzeugdaten** — SoC bei Start und Ende (sofern gemeldet), VIN, Kennzeichen
- **Laderdaten** — EVSE-ID, Anschlusstyp, Firmware-Version
- **CDR** — Charge Detail Record konform OCPI (herunterladbar)

## Analyse

Das Analytics-Dashboard bietet flottenweite Einblicke:

### Energieverbrauch
- Gesamte kWh pro Tag/Woche/Monat
- Aufschlüsselung nach Fahrzeug oder Fahrzeuggruppe
- Vergleich über Zeiträume
- Trends in Kosten pro kWh

### Effizienzindikatoren
- Durchschnittliche Energie pro Sitzung
- Durchschnittliche Kosten pro kWh
- Auslastungsgrad (Ladezeit im Verhältnis zur Stillstandszeit pro Fahrzeug)
- Spitzenlastmuster

### Standortanalyse
- Welche Standorte Ihre Flotte am häufigsten nutzt
- Durchschnittliche Wartezeit für einen freien Lader
- Energiepreise pro Standort

## Benachrichtigungen

Konfigurieren Sie Benachrichtigungen für:

- **Fehlgeschlagene Sitzungen** — Eine Sitzung, die gestartet wurde, aber abnormal beendet wurde
- **Lange Sitzungen** — Ein Fahrzeug lädt länger als eine festgelegte Dauer
- **Hohe Kosten** — Eine Sitzung überschreitet einen Kosten-Schwellenwert
- **SoC-Grenzwert** — Der Ladezustand eines Fahrzeugs ist unter einem Minimum gesunken, bevor es an einem Lader ankam

Benachrichtigungen werden per E-Mail und/oder im Mijn Vloot-Dashboard angezeigt.

## Export und Integration

### CSV-Export
Laden Sie jede gefilterte Ansicht als CSV-Datei herunter. Spalten enthalten alle Sitzungsdetails sowie berechnete Felder wie Kosten pro kWh und Dauer.

### API
Sitzungsdaten programmatisch abrufen:

```
GET /api/v1/sessions?start_date=2026-03-01&end_date=2026-03-31
GET /api/v1/sessions/{session_id}
GET /api/v1/sessions/active
```

### Webhooks
Erhalten Sie Echtzeit-Benachrichtigungen, wenn Sitzungen starten, aktualisiert werden oder beendet werden:

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

Konfigurieren Sie Webhooks über **Einstellungen** → **API** → **Webhooks**.

## Der Leistungsverlauf verstehen

Eine typische DC-Ladesitzung für einen Elektro-Lkw zeigt das folgende Muster:

1. **Start** (0–3 Min) — Die Leistung steigt, während der Lader und das Fahrzeug verhandeln und der Akku vorgewärmt wird
2. **Plateau** (3 Min – 60%+ SoC) — Maximale Ladeleistung, oft 150–350 kW je nach Lkw-Modell
3. **Abschwung** (60%+ SoC – Ziel-SoC) — Die Leistung nimmt allmählich ab, wenn der Akku voller wird, um die Zellgesundheit zu schützen
4. **Vervollständigung** — Die Sitzung endet beim Ziel-SoC oder wenn sie manuell gestoppt wird

Das Verständnis dieser Kurve hilft bei der Planung: Wenn Sie nur von 20% auf 80% SoC aufladen müssen, erhalten Sie die meiste Energie während der schnellen Plateauphase. Das Aufladen von 80–100% dauert unverhältnismäßig länger.