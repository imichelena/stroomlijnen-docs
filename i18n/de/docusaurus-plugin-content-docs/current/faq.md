---
sidebar_position: 100
title: Häufig gestellte Fragen
description: Häufig gestellte Fragen zu Stroomlijnen elektrischer Lkw-Ladestationen — Plug & Charge, Tarife, RFID, Flottenmanagement und mehr.
keywords: [FAQ, häufig gestellte Fragen, E-Laden, Plug and Charge, Flottenladung, RFID, Preise]
---

# Häufig gestellte Fragen

## Allgemein

### 1. Was ist Stroomlijnen?
Stroomlijnen ist ein niederländischer Charge Point Operator (CPO) und e-Mobility Service Provider (eMSP), der sich auf Hochleistungs-DC-Laden für elektrische Lkw spezialisiert hat. Wir installieren Ladinfrastruktur bei Theatern, Logistikzentren und strategischen Standorten in ganz Nederland.

### 2. Warum Theater?
Theater verfügen über große Stromanschlüsse (für Beleuchtung, Ton und Bühnentechnik), Parkplätze, die für Lkw zugänglich sind (für die Lieferung von Bühnendekorationen), und sind nachts verfügbar, wenn Lkw normalerweise laden. Eine logische Kombination – wir nutzen bestehende Infrastruktur, die sonst nachts ungenutzt bleiben würde.

### 3. Welche Fahrzeuge können bei Stroomlijnen laden?
Jedes Fahrzeug mit einer **CCS Combo 2**-Steckdose kann an unseren DC-Stationen laden. Dazu gehören elektrische Lkw, Transporter, Busse und Personenkraftwagen. Unsere Ladegeräte liefern bis zu 400 kW, aber passen sich dem maximalen Leistungsaufnahme des Fahrzeugs an.

### 4. Wo stehen Stroomlijnen-Ladestationen?
Hauptsächlich in den Niederlanden, mit geplanten Erweiterungen nach Belgien und Deutschland. Siehe unsere [Ladestationskarte](./locations/finding-charger) für alle aktuellen Standorte.

### 5. Können Personenkraftwagen Ihre Ladestationen nutzen?
Ja. Obwohl unsere Ladestationen für Nutzfahrzeuge konzipiert und positioniert sind, kann jeder CCS-ausgestattete PKW auch laden. Beachten Sie, dass Lkw-Stellplätze höhere Randsteine oder eine andere Anordnung haben können als ein normales Ladegerät für Personenkraftwagen.

## Plug & Charge

### 6. Was ist Plug & Charge?
Plug & Charge bedeutet, dass Ihr Lkw automatisch authentifiziert und mit dem Laden beginnt, sobald Sie das Kabel anschließen – keine Karte, keine App, keine Aktion des Fahrers erforderlich. Es verwendet ISO 15118-Digitale Zertifikate, die im Fahrzeug integriert sind. Siehe [Was ist Plug & Charge?](./plug-and-charge/what-is-pnc) für weitere Details.

### 7. Ist Plug & Charge sicher?
Ja – sogar sicherer als RFID-Karten. PnC verwendet TLS-wechselseitige Authentifizierung und digitale Zertifikate (ähnliche Technologie wie Online-Banking). Zertifikate sind mit der Fahrzeug-Identifikationsnummer (FIN) verknüpft und in einem Hardware-Sicherheitsmodul gespeichert, was es sehr schwierig macht, sie zu klonen.

### 8. Welche Lkw unterstützen Plug & Charge?
Die meisten großen Hersteller von elektrischen Lkw unterstützen jetzt PnC: Volvo, DAF, Mercedes-Benz, Scania und MAN. Siehe unsere [Liste der kompatiblen Fahrzeuge](./plug-and-charge/compatible-vehicles) für die vollständigen Details.

### 9. Wie lange dauert die Einrichtung von Plug & Charge?
Ungefähr 15 Minuten Portal-Konfiguration, dann 1–24 Stunden für die Installation des Zertifikats im Fahrzeug (je nach Hersteller). Siehe die [Installationsanleitung](./plug-and-charge/setup-guide).

### 10. Kann ich Plug & Charge UND RFID gleichzeitig verwenden?
Ja. PnC und RFID können nebeneinander existieren. Wenn PnC aus irgendeinem Grund fehlschlägt, kann der Fahrer immer auf die RFID-Karte zurückgreifen. Das Ladegerät versucht zunächst, PnC zu authentifizieren; wenn PnC innerhalb von 15 Sekunden nicht authentifiziert, wird eine RFID-Karte angefordert.

## Tarife und Abrechnung

### 11. Was kostet das Laden?
Flottenkunden erhalten einen vertraglich festgelegten €/kWh-Tarif. Es gibt keine Sitzungsgebühren oder zeitabhängigen Kosten – Sie zahlen nur für die verbrauchte Energie. Kontaktieren Sie uns für ein Flottenangebot.

### 12. Wie funktioniert die Abrechnung?
Monatliche Rechnungen mit detaillierten Sitzungsdaten, als PDF, CSV oder UBL-XML verfügbar. Rechnungen werden am 1. eines jeden Monats generiert. Siehe [Abrechnung](./fleet-management/invoicing) für Details.

### 13. Bieten Sie Mengenrabatte an?
Ja. Flotten, die monatliche Energienschwellen überschreiten, sind für gestaffelte Tarife berechtigt. Kontaktieren Sie Ihren Account-Manager oder senden Sie eine E-Mail an [sales@stroomlijnen.nl](mailto:sales@stroomlijnen.nl) für Details.

### 14. Können Roaming-Nutzer bei Stroomlijnen laden?
Ja, über unsere Hubject- und OCPI-Roaming-Verbindungen. Nutzer mit Ladekarten anderer Anbieter können ihre Karte verwenden und laden. Roaming-Tarife können von den Direktflottentarifen abweichen.

## RFID-Karten

### 15. Wie erhalte ich RFID-Karten?
Bestellen Sie über das [Meine Flotte-Portal](./getting-started/rfid-cards) oder kontaktieren Sie Ihren Account-Manager. Karten werden innerhalb von 3 Werktagen versendet und müssen aktiviert werden.

### 16. Was passiert, wenn eine RFID-Karte verloren oder gestohlen wird?
Deaktivieren Sie die Karte sofort über Meine Flotte → RFID-Karten → auswählen → Deaktivieren. Die Karte wird innerhalb von Sekunden auf allen Stroomlijnen-Ladestationen gesperrt. Bestellen Sie eine Ersatzkarte über das Portal.

### 17. Kann eine RFID-Karte auf mehreren Fahrzeugen funktionieren?
Ja. RFID-Karten sind mit Ihrem Flottenkonto verknüpft, nicht mit einem bestimmten Fahrzeug. Jede Karte, die Ihrer Flotte zugewiesen ist, kann eine Ladesitzung auf jeder Ladestation für jedes Ihrer Fahrzeuge starten.

## Technisch

### 18. Welche OCPP-Version verwenden Ihre Ladestationen?
Alle neuen Ladestationen verwenden **OCPP 2.0.1**. Einige ältere Installationen verwenden OCPP 1.6-J. Beide werden vollständig von unserem CSMS unterstützt. Siehe [OCPP-Überblick](./technical/ocpp-overview).

### 19. Unterstützen Sie intelligente Ladung / Lastverteilung?
Ja. Unser CSMS verteilt die Leistung dynamisch über die Ladestationen an jedem Standort auf der Grundlage der Netzkapazität, Fahrzeugpriorität und Optimierung nach Zeit. Siehe [OCPP-Überblick → Intelligente Ladung](./technical/ocpp-overview#smart-charging).

### 20. Kann ich Ladedaten in mein Flottenmanagementsystem integrieren?
Ja. Wir bieten eine REST-API mit Echtzeit-Webhooks für Sitzungsdaten, Fahrzeugverwaltung und Abrechnung an. SDKs sind für Python, JavaScript und C# verfügbar. Siehe [API & Integration](./technical/integration).

## Support

### Wie melde ich einen defekten Lader?
- **App:** Hilfe → Problem melden → Ladestation auswählen
- **Telefon:** Support-Nummer auf jeder Ladestation
- **E-Mail:** [support@stroomlijnen.nl](mailto:support@stroomlijnen.nl)
- **Mitteilen:** Ladegeräte-ID (Format: `NL*STM*E...`), Zeitpunkt und Beschreibung des Problems

### Wie kontaktiere ich Stroomlijnen?
- **Allgemeine Fragen:** [info@stroomlijnen.nl](mailto:info@stroomlijnen.nl)
- **Flottenverkauf:** [sales@stroomlijnen.nl](mailto:sales@stroomlijnen.nl)
- **Technischer Support:** [support@stroomlijnen.nl](mailto:support@stroomlijnen.nl)
- **Technische Integration:** [technical@stroomlijnen.nl](mailto:technical@stroomlijnen.nl)