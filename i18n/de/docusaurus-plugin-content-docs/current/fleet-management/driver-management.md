---
sidebar_position: 5
title: Fahrermanagement
description: Fahrer in Ihrer Elektroflotte verwalten — Fahrzeuge zuweisen, RFID-Pässe ausstellen, Ladelimits festlegen und Fahreraktivitäten überwachen.
keywords: [Fahrermanagement, Flottenfahrer, RFID-Zuweisung, Ladelimits, Fahrer-App]
---

# Fahrermanagement

Der Bereich Fahrermanagement ermöglicht es Flottenmanagern, zu bestimmen, wer laden darf, auf welchen Fahrzeugen und mit welchen Limiten.

## Fahrer Hinzufügen

1. Gehen Sie zu **Fahrer** → **Fahrer hinzufügen**
2. Füllen Sie die Fahrerdaten aus:
   - **Name** — Vor- und Nachname
   - **E-Mail** — Für Zugriff auf das Konto und Benachrichtigungen
   - **Telefon** — Für App-Authentifizierung (optional)
   - **Personalnummer** — Für interne Referenzen
   - **Abteilung/Gruppe** — Für organisatorische Filterung
3. Klicken Sie auf **Speichern**

Der Fahrer erhält eine E-Mail-Einladung, um sein Stroomlijnen-Konto einzurichten und die mobile App herunterzuladen.

## Fahrzeuge Zuweisen

Fahrer können einem oder mehreren Fahrzeugen zugeordnet werden:

1. Gehen Sie zu **Fahrer** → Wählen Sie einen Fahrer → **Fahrzeuge**
2. Klicken Sie auf **Fahrzeug zuweisen** und wählen Sie aus Ihrer Flotte
3. Ein Fahrer kann nur Sitzungen starten auf zugeordneten Fahrzeugen (wenn die Fahrzeug-Fahrer-Kopplung in Ihren Flotteneinstellungen aktiviert ist)

### Flexible Zuweisung
Für Flotten, bei denen Fahrer Fahrzeuge teilen:
- Stellen Sie **Fahrzeug-Fahrer-Kopplung** auf "Flexibel" in den Flotteneinstellungen
- Jeder registrierte Fahrer kann jedes Flottenfahrzeug laden
- Sitzungen werden weiterhin pro Fahrer (über RFID-Pass oder App) nachverfolgt

## RFID-Pässe für Fahrer

Jeder Fahrer kann einen persönlichen RFID-Pass erhalten:

1. Gehen Sie zu **Fahrer** → Wählen Sie einen Fahrer → **RFID-Pässe**
2. Klicken Sie auf **Pass zuweisen** und geben Sie die UID des Passes ein (auf dem Pass gedruckt)
3. Der Pass ist nun diesem Fahrer und seinen zugeordneten Fahrzeugen zugeordnet

Wenn ein Fahrer seinen persönlichen Pass an einem Lader berührt, wird die Sitzung spezifisch ihm zugeordnet — nützlich für Berichterstattung und Kostenzuweisung pro Fahrer.

Siehe auch: [RFID-Pässe](../getting-started/rfid-cards) für Bestellung und Aktivierung.

## Ladelimits

Legen Sie Limits pro Fahrer fest, um Kosten zu kontrollieren:

### Monatliches Energielimit
Maximale kWh, die ein Fahrer pro Monat laden darf. Wenn das Limit erreicht ist:
- Wird der Fahrer per E-Mail/App benachrichtigt
- Ist weiteres Laden von der Genehmigung des Flottenmanagers abhängig (oder das Limit wird nächsten Monat zurückgesetzt)

### Limit pro Sitzung
Maximale kWh pro einzelner Sitzung. Nützlich, um unbeabsichtigtes Nachtladen zu verhindern.

### Standortbeschränkungen
Begrenzen Sie, an welchen Standorten ein Fahrer laden darf. Zum Beispiel nur Stroomlijnen-Standorte auf der zugeordneten Route.

## Fahrer-App

Fahrer können die Stroomlijnen-App herunterladen, um:

- **Lader zu finden** — Karte aller Stroomlijnen-Standorte mit Echtzeit-Verfügbarkeit
- **Sitzungen zu starten** — QR-Code scannen oder Bluetooth verwenden, um das Laden zu starten (alternativ zu RFID)
- **Sitzungen zu überwachen** — Aktuelle Ladeleistung, gelieferte Energie, geschätzte Zeit bis zum gewünschten SoC
- **Verlauf zu betrachten** — Vergangene Sitzungen mit Energie- und Kosteninformationen
- **Benachrichtigungen zu erhalten** — Sitzung abgeschlossen, Lader verfügbar, PnC-Ereignisse

Die App ist für iOS und Android verfügbar. Fahrer melden sich mit der in Mijn Vloot registrierten E-Mail-Adresse an.

## Berichterstattung

### Berichte pro Fahrer
- Gesamte kWh pro Fahrer pro Monat
- Anzahl der Sitzungen
- Durchschnittliche Sitzungsdauer
- Meistgenutzte Standorte
- Kostenzuweisung

### Fahrervergleich
Vergleichen Sie Lademuster von Fahrern, um zu erkennen:
- Effizientes versus ineffizientes Ladeverhalten
- Möglichkeiten für Routenoptimierung
- Kostenausreißer

Berichte sind über **Berichte** → **Fahreranalyse** verfügbar und können als CSV oder PDF exportiert werden.