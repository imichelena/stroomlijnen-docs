---
sidebar_position: 2
title: Fahrzeugverwaltung
description: Wie Sie Elektrofahrzeuge im Stroomlijnen Mijn Vloot-Portal registrieren, konfigurieren und verwalten.
keywords: [Fahrzeugverwaltung, Flottenregistrierung, Elektrolastkraftwagen, VIN, RFID-Zuweisung, Ladeverhaltensregel]
---

# Fahrzeugverwaltung

Der Bereich Fahrzeuge in Mijn Vloot ist der Ort, an dem Sie Lastkraftwagen und Lieferwagen registrieren, ihre Ladeeinstellungen konfigurieren und ihren Status überwachen.

## Fahrzeuge Hinzufügen

### Einzelnes Fahrzeug

1. Gehen Sie zu **Fahrzeuge** → **Fahrzeug hinzufügen**
2. Füllen Sie die erforderlichen Felder aus:
   - **VIN** — 17-stellige Fahrzeugidentifikationsnummer
   - **Kennzeichen** — Niederländisches oder EU-Format
   - **Marke & Modell** — Wählen Sie aus dem Auswahlmenü
   - **Baujahr** — Modelljahr
   - **Batteriekapazität** — In kWh (automatisch ausgefüllt für bekannte Modelle)
3. Optionalen Felder:
   - **Spitzname** — Für einfache Erkennung (z.B. "Amsterdam 014")
   - **Abteilung/Gruppe** — Für organisatorische Filterung
   - **Kostenstelle** — Für Rechnungszuweisung
4. Klicken Sie auf **Speichern**

### Bulkimport

Für Flotten mit vielen Fahrzeugen:

1. Gehen Sie zu **Fahrzeuge** → **Importieren**
2. Laden Sie das CSV-Vorlagendatei herunter
3. Füllen Sie Ihre Fahrzeugdaten aus
4. Laden Sie die ausgefüllte CSV-Datei hoch
5. Überprüfen Sie die Importübersicht — korrigieren Sie eventuelle Validierungsfehler
6. Klicken Sie auf **Import bestätigen**

## Fahrzeugdetails

Die Detailseite jedes Fahrzeugs zeigt:

### Status
- **Aktueller Zustand** — Laden / Inaktiv / Offline
- **Zuletzt gesehen** — Wann das Fahrzeug zuletzt mit einem Ladegerät kommuniziert hat
- **Batteriestatus** — Wenn vom Fahrzeug während der letzten Sitzung gemeldet

### Ladekonfiguration
- **Authentifizierungsmethode** — PnC, RFID oder beides
- **Plug & Charge-Status** — Aktiviert/Deaktiviert, Zertifikatsstatus
- **Zugewiesene RFID-Pässe** — Welche Pässe diesem Fahrzeug zugeordnet sind
- **Ladeverhaltensregel** — Maximale Ladeschnelligkeit, gewünschtes SoC-Ziel, geplante Ladezeiten

### Sitzungshistorie
- Liste aller vergangenen Ladesitzungen für dieses Fahrzeug
- Filtern nach Datumsbereich, Ort oder Authentifizierungsmethode
- Gesamtenergie, Gesamtkosten und durchschnittliche Sitzungsdauer

### Dokumente
- Kraftfahrzeugbrief (optional hochladen)
- Versicherungszertifikat (optional hochladen)
- Wartungsdaten

## Ladeverhaltensregel

Sie können pro Fahrzeug oder pro Gruppe eine Ladeverhaltensregel einstellen:

### Leistungsbeschränkung
Stellen Sie eine maximale Ladeleistung ein. Nützlich für:
- Batterie-Haltbarkeit (Begrenzung auf 80% der maximalen Leistung)
- Kostenkontrolle (niedrigere Leistung = niedrigere Kapazitätskosten an bestimmten Orten)

### SoC-Ziel
Stellen Sie ein gewünschtes Ladeziel (State of Charge) ein. Wenn erreicht, reduziert der Ladegerät die Leistung oder stoppt. Dies verlängert die Batterielebensdauer und macht Ladegeräte für andere Fahrzeuge frei.

### Geplantes Laden
Definieren Sie Zeitfenster, in denen geladen werden darf. Nützlich für:
- Tiefpreise für Strom
- Netzbelastungsmanagement
- Optimierung auf Abfahrtzeit (Laden bis 90% vor 06:00)

### Priorität
Wenn mehrere Flottenfahrzeuge am selben Ort stehen und die Leistung begrenzt ist, bestimmen Prioritäts-Einstellungen, welche Fahrzeuge als erste volle Leistung erhalten.

## Fahrzeuggruppen

Organisieren Sie Fahrzeuge in Gruppen für einfacheres Management:

- **Pro Route** — Amsterdam-Routen, Rotterdam-Routen
- **Pro Typ** — Langstrecke, regionale Zustellung, letzte Meile
- **Pro Abteilung** — Betrieb, Kundenbetreuung

Gruppen können gemeinsame Ladeverhaltensregeln und Rechnungseinstellungen haben.

## Ein Fahrzeug Außerbetriebsetzen

Wenn ein Fahrzeug Ihre Flotte verlässt:

1. Gehen Sie zu **Fahrzeuge** → Wählen Sie das Fahrzeug → **Einstellungen**
2. Klicken Sie auf **Fahrzeug außerbetriebsetzen**
3. Dies wird:
   - Alle aktiven PnC-Zertifikate widerrufen
   - Alle RFID-Pässe entkoppeln
   - Die Sitzungshistorie des Fahrzeugs archivieren (noch zugänglich für Berichterstellung)
   - Rechnungstellung für dieses Fahrzeug stoppen

Das Fahrzeug kann wieder aktiviert werden, wenn es in die Flotte zurückkehrt.

## Datenausfuhr

Exportieren Sie Fahrzeugdaten für die Integration mit Ihren eigenen Systemen:

- **Fahrzeugliste** — CSV mit allen Fahrzeugdetails
- **Sitzungshistorie** — CSV pro Fahrzeug oder für alle Fahrzeuge
- **API** — Programmatischer Zugriff auf Fahrzeugdaten (siehe Überblick Flottenmanagement → API)