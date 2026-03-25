---
sidebar_position: 2
title: Ihre Erste Ladesession
description: Schritt-für-Schritt-Anleitung für Ihre erste Ladesession für Elektro-Lkw an einem Stroomlijnen-Standort.
keywords: [erste Ladesession, wie man auflädt, Elektro-Lkw, RFID, Plug and Charge]
---

# Ihre Erste Ladesession

Ob Sie nun ein Flottenmanager sind, der alles einrichtet, oder ein Fahrer, der zum ersten Mal an dem Lader steht — hier erfahren Sie genau, was passiert.

## Bevor Sie Ankommen

### Als Flottenmanager

1. **Registrieren** Sie sich auf dem Stroomlijnen-Portal unter [portal.stroomlijnen.nl](https://portal.stroomlijnen.nl)
2. **Fügen Sie Ihre Fahrzeuge hinzu** — Fahrgestellnummern und Kennzeichen
3. **Wählen Sie Ihre Authentifizierungsmethode:**
   - **RFID-Karten** — wir senden sie Ihnen zu (siehe [RFID-Karten](/docs/getting-started/rfid-cards))
   - **Plug & Charge** — Einrichtung über das Portal (siehe [Installationsanleitung](/docs/plug-and-charge/setup-guide))
4. **Informieren Sie Ihre Fahrer** — teilen Sie die Standortadresse und eventuelle Zugangscodes

### Als Fahrer

- Stellen Sie sicher, dass Sie Ihre **RFID-Karte** bei sich haben (oder dass Ihr Lkw Plug & Charge unterstützt)
- Kennen Sie die **Standortadresse** und eventuelle Zugangscodes für Schranken
- Überprüfen Sie das **aktuelle Batterieniveau** Ihres Lkws — planen Sie die erforderliche Ladezeit ein

## Am Lader

### Schritt 1: Parken und Anschließen

1. Fahren Sie zu einem verfügbaren Lader
2. Schalten Sie das Fahrzeug aus (einige Lkws erfordern dies; andere nicht — siehe Handbuch des Herstellers)
3. Öffnen Sie die Ladeklappe
4. Schließen Sie das Ladekabel an:
   - **CCS2** (Combined Charging System) — der europäische Standard für DC-Schnellladen
   - Der Stecker passt nur auf eine Weise. Nicht zwangsweise anpassen.

### Schritt 2: Authentifizieren

**Mit RFID-Karte:**
1. Halten Sie Ihre Karte vor den Kartenzähler am Lader
2. Warten Sie auf die grüne LED und/oder Bestätigung auf dem Display
3. Das Laden startet automatisch

**Mit Plug & Charge:**
1. Schließen Sie das Kabel an. Das ist alles.
2. Der Lkw und der Lader tauschen Zertifikate über ISO 15118 aus
3. Das Laden startet innerhalb von 5–10 Sekunden

**Mit Lade-App (Roaming):**
1. Öffnen Sie die App Ihres eMSP
2. Scannen Sie den QR-Code am Lader oder geben Sie die Lader-ID ein
3. Starten Sie die Sitzung in der App

### Schritt 3: Überwachen

- Das Display des Laders zeigt die Echtzeit-Leistung (kW) und die gelieferte Energie (kWh)
- Sie können auch über das Stroomlijnen-Portal oder Ihre Flottenmanagement-App überwachen
- Die meisten Elektro-Lkws laden von 20% auf 80% in 60–90 Minuten an unseren DC-Ladern

### Schritt 4: Trennen

1. Stoppen Sie die Sitzung:
   - **RFID:** tippen Sie die Karte erneut
   - **Plug & Charge:** trennen Sie einfach ab (Sitzung endet automatisch)
   - **App:** stoppen Sie in der App, dann trennen
2. Hängen Sie das Kabel zurück in den Halter
3. Schließen Sie Ihre Ladeklappe
4. Fahren Sie los

## Was passiert, wenn etwas schiefgeht?

| Problem | Was zu tun ist |
|-------|-----------|
| Karte nicht erkannt | Überprüfen Sie, ob die Karte im Portal aktiviert ist. Versuchen Sie, die Karte näher an / länger vor den Leser zu halten. |
| Plug & Charge startet nicht | Überprüfen Sie den PnC-Status Ihres Lkws im OEM-Portal. Siehe [Fehlerbehebung](/docs/plug-and-charge/troubleshooting). |
| Lader zeigt Fehlermeldung an | Notieren Sie die Fehlercode und kontaktieren Sie uns. Siehe [FAQ](/docs/faq). |
| Langsameres Laden als erwartet | Batterietemperatur, Ladezustand (SoC) und Netzkapazität beeinflussen alle die Ladeschnelligkeit. Oberhalb von 80% SoC verlangsamt sich das Laden deutlich. |
| Kabel nicht abtrennbar | Das Kabel wird während des Ladens gesperrt. Stellen Sie sicher, dass die Sitzung vollständig gestoppt ist, bevor Sie ziehen. |

## Erwartete Ladeschnelligkeiten

Elektro-Lkws haben unterschiedliche Ladekapazitäten:

| Leistungsstufe | Typisches Einsatzgebiet | Zeit für 200 kWh |
|-------------|------------|-------------------|
| 50 kW DC | Nacht- / Depotladen | ~4 Stunden |
| 150 kW DC | Gelegenheitsladung | ~1,5 Stunden |
| 350 kW DC | Schnelle Umlaufzeit | ~40 Minuten |

:::note
Die tatsächliche Ladeschnelligkeit hängt von der Bordlader des Fahrzeugs, der Batterietemperatur, dem Ladezustand und der verfügbaren Leistung des Laders ab. Der Lader liefert die maximale Leistung, die das Fahrzeug anfordert, bis zur Nennleistung des Laders.
::: 

## Nächste Schritte

- [Konfigurieren Sie Plug & Charge](/docs/plug-and-charge/setup-guide) für problemlose zukünftige Sitzungen
- [Verstehen Sie Ihre Rechnungen](/docs/fleet-management/invoicing)
- [Fügen Sie weitere Fahrer hinzu](/docs/fleet-management/driver-management)