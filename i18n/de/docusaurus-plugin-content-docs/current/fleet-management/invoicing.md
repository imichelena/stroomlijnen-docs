---
sidebar_position: 4
title: Abrechnung
description: Wie die Abrechnung von Stroomlijnen-Flottenladungen funktioniert — monatliche Rechnungen, Kostenübersichten, Zahlungsmethoden und Steuerdokumentation.
keywords: [Abrechnung, Rechnungswesen, Flottenladungskosten, monatliche Rechnung, MwSt, kWh-Preis, Flottenconto]
---

# Abrechnung

Stroomlijnen bietet transparente, detaillierte Abrechnungen für alle Ladeaktivitäten Ihrer Flotte. Rechnungen werden monatlich erstellt und enthalten Aufschlüsselungen pro Sitzung.

## Taridfmodell

Flottenkunden werden nach verbrauchter Energie abgerechnet:

- **Energiekosten** — €/kWh-Tarif gemäß Ihrem Flottenvertrag
- **Keine Sitzungskosten** — Im Gegensatz zum öffentlichen Laden berechnen wir keine Startkosten pro Sitzung
- **Keine zeitabhängigen Kosten** — Sie zahlen für Energie, nicht für Parkzeit
- **Volumenrabatte** — Verfügbar für Flotten, die monatliche Energieschwellen überschreiten (siehe Ihren Vertrag)

Ihr Vertrags-Tarif ist in **Meine Flotte** → **Einstellungen** → **Abrechnung** → **Tarifkarte** sichtbar.

## Monatliche Rechnung

Rechnungen werden am **1. eines jeden Monats** generiert für die Ladeaktivitäten des Vormonats.

### Rechnungsinhalt

Jede Rechnung enthält:

- **Zusammenfassung** — Gesamte Energie (kWh), Gesamtkosten (€), Anzahl der Sitzungen, Anzahl der Fahrzeuge
- **Aufschlüsselung pro Fahrzeug** — Energie und Kosten pro Fahrzeug
- **Detail pro Sitzung** — Datum, Uhrzeit, Ort, EVSE-ID, kWh, Kosten, Authentifizierungsmethode
- **Steuerdetails** — MwSt (21%) separat berechnet und angezeigt
- **Zahlungsbedingungen** — 14 Tage netto

### Rechnungsformate

- **PDF** — Formatierter Rechnungsdokument für Ihre Verwaltung
- **CSV** — Maschinenlesbares Detail für die Import in Buchhaltungs-/ERP-Systeme
- **UBL** — Universal Business Language XML für automatisierte Rechnungsverarbeitung (niederländischer Standard)

Alle Formate sind über **Meine Flotte** → **Abrechnung** → **Herunterladen** verfügbar.

## Zahlungsmethoden

### Automatische Abbuchung (SEPA)
Die bevorzugte Zahlungsmethode für Flottenkunden:
1. Gehen Sie zu **Einstellungen** → **Abrechnung** → **Zahlungsmethode**
2. Klicken Sie auf **Automatische Abbuchung einrichten**
3. Geben Sie Ihre IBAN ein und autorisieren Sie das SEPA-Mandat
4. Rechnungen werden automatisch 14 Tage nach Ausstellung abgebucht

### Banküberweisung
Für Kunden, die manuell zahlen:
- Zahlungsdetails finden sich auf jeder Rechnung
- Referenz: Rechnungsnummer (Format: `STM-2026-XXXXX`)
- Bank: ING Bank, NL
- Fälligkeitsdatum: 14 Tage nach Rechnungsdatum

## Kostenzuweisung

### Pro Kostenstelle
Wenn Ihre Fahrzeuge Kostenstellen in der Fahrzeugsektion zugewiesen sind, können Rechnungen Kostenstellenaufschlüsselungen enthalten. Dies entspricht direkt Ihrer internen Buchhaltung.

### Pro Abteilung/Gruppe
Fahrzeuggruppen werden im Rechnungsdetail widergespiegelt, sodass es einfach ist, Kosten auf Abteilungen zu verteilen.

### Anpassbare Zuweisung
Haben Sie eine spezifische Zuweisungslogik benötigt? Wir können anpassbare Rechnungsgruppierungen für Ihre Organisation konfigurieren. Nehmen Sie Kontakt mit Ihrem Accountmanager auf.

## Steuern und Compliance

### MwSt
- Alle Preise werden **exklusive MwSt** angegeben
- MwSt von 21% wird allen Rechnungen hinzugefügt
- Die MwSt-Nummer befindet sich auf jeder Rechnung (Stroomlijnen B.V., KVK 93264526)

### Energiesteuer
- Energiesteuer ist im kWh-Tarif enthalten, wo zutreffend
- Der Tarif hängt von der Netzanbindungskategorie des Standorts ab
- Dies ist transparent — siehe Ihren Vertrag für die Spezifikation

### CSRD / ESG-Berichterstattung
Für Unternehmen mit Nachhaltigkeitsberichterstattungspflichten:
- Wir liefern **jährliche Energiezertifikate**, die den Gesamtverbrauch erneuerbarer Energien zeigen
- Berechnungen der vermiedenen CO₂-Emissionen sind im jährlichen Flottenbericht enthalten
- Datenformat kompatibel mit gängigen ESG-Berichterstattungsframeworks

## Streitigkeiten und Korrekturen

Wenn Sie denken, dass eine Rechnung einen Fehler enthält:

1. Gehen Sie zu **Abrechnung** → wählen Sie die Rechnung → **Anfechten**
2. Wählen Sie die betreffenden Sitzungen
3. Beschreiben Sie das Problem
4. Unser Abrechnungsteam untersucht dies und reagiert innerhalb von 5 Werktagen
5. Korrekturen werden als Gutschrift auf der nächsten Rechnung verarbeitet

## Historische Rechnungen

Alle Rechnungen werden **7 Jahre** aufbewahrt (niederländische gesetzliche Verpflichtung) und sind im Mijn Vloot-Portal zugänglich. Sie können auch automatische Rechnungsversendung an zusätzliche E-Mail-Adressen über **Einstellungen** → **Abrechnung** → **Rechnungsempfänger** einrichten.