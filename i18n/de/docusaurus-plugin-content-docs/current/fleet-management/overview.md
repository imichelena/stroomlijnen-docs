---
sidebar_position: 1
title: Überblick Flottenmanagement
description: Verwalten Sie das Laden Ihrer Elektroflotte mit dem Mein Flotten-Portal von Stroomlijnen — Fahrzeuge, Sitzungen, Abrechnung und Fahrermanagement.
keywords: [Flottenmanagement, Mein Flotten-Portal, Elektroflotte, Ladeverwaltung, Flottendashboard]
---

# Überblick Flottenmanagement

Das **Mein Flotten**-Portal von Stroomlijnen bietet Flottenmanagern vollständige Einsicht und Kontrolle über ihre Elektrofahrzeug-Ladaktivitäten. Von einem Dashboard aus können Sie Fahrzeuge verwalten, Ladesitzungen in Echtzeit überwachen, Kosten kontrollieren und Berichte generieren.

## Zugang zu Mein Flotten

Gehen Sie zu **my.stroomlijnen.nl** und melden Sie sich mit Ihren Flottenmanager-Zugangsdaten an. Neue Benutzer müssen sich mit der KVK-Nummer ihres Unternehmens registrieren und von einem Stroomlijnen-Kontomanager genehmigt werden.

## Dashboard

Das Hauptdashboard zeigt:

- **Flottenstatus** — Wie viele Fahrzeuge derzeit laden, stillstehen oder unterwegs sind
- **Energie von heute** — GesamtkWh, die heute an Ihre Flotte geliefert wurden
- **Aktive Sitzungen** — Echtzeitübersicht aller laufenden Ladesitzungen mit Leistungscurven
- **Benachrichtigungen** — Abgelaufene Zertifikate, fehlgeschlagene Sitzungen oder ungewöhnliche Lademuster
- **Monatsübersicht** — Laufender Gesamtkostenbetrag und Vergleich mit dem Vormonat

## Hauptfunktionen

### Fahrzeugverwaltung
Registrieren, konfigurieren und überwachen Sie alle Ihre Elektrofahrzeuge an einem Ort. Aktivieren Sie Plug & Charge, weisen Sie RFID-Pässe zu und stellen Sie Laderichtlinien pro Fahrzeug oder Gruppe ein.

→ [Details Fahrzeugverwaltung](./vehicles)

### Sitzungsüberwachung
Verfolgen Sie jede Ladesitzung — vergangen und gegenwärtig. Überprüfen Sie die gelieferte Energie, Dauer, Kosten, Authentifizierungsmethode und Laderstandort. Exportieren Sie in CSV oder integrieren Sie über API.

→ [Details Sitzungen](./sessions)

### Abrechnung
Monatliche Rechnungen mit detaillierter Aufschlüsselung pro Fahrzeug, Standort und Datum. Laden Sie Rechnungen als PDF herunter, erhalten Sie Kosten-pro-Kilometer-Analysen und stellen Sie automatische Abrechnung ein.

→ [Details Abrechnung](./invoicing)

### Fahrermanagement
Weisen Sie Fahrer Fahrzeugen zu, stellen Sie persönliche RFID-Pässe bereit und legen Sie Ladebegrenzungen pro Fahrer fest. Fahrer können die Stroomlijnen-App verwenden, um Ladestationen zu finden und Sitzungen zu starten.

→ [Details Fahrermanagement](./driver-management)

## Benutzerrollen

| Rolle | Berechtigungen |
|------|-------------|
| **Flottenmanager** | Vollzugriff: Fahrzeuge, Abrechnung, PnC, Benutzer, API-Schlüssel |
| **Flottenverwalter** | Fahrzeugverwaltung, Sitzungsüberwachung, Berichte |
| **Rechnungsverwalter** | Zugriff auf Rechnungen, Zahlungsmethoden, Kostenberichte |
| **Fahrer** | Eigene Sitzungen anzeigen, Ladestationen finden, Sitzungen starten/stoppen |

## API-Zugriff

Für Unternehmen, die Ladedaten in ihre eigenen Flottenmanagement- oder ERP-Systeme integrieren möchten, bieten wir eine REST-API:

- Echtzeit-Sitzungs-Webhooks
- Historische Sitzungsdaten
- Fahrzeug- und Fahrermanagement
- Rechnungsanfrage

API-Dokumentation ist im Mein Flotten-Portal unter **Einstellungen** → **API** verfügbar.

## Los geht's

1. [Registrieren Sie Ihre Flotte](https://stroomlijnen.nl/fleet-signup) oder kontaktieren Sie Ihren Kontomanager
2. [Fügen Sie Ihre Fahrzeuge hinzu](./vehicles)
3. [Aktivieren Sie Plug & Charge](../plug-and-charge/setup-guide) oder [stellen Sie RFID-Pässe bereit](../getting-started/rfid-cards)
4. Beginnen Sie mit dem Laden — alle Sitzungen werden automatisch nachverfolgt und abgerechnet