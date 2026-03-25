---
sidebar_position: 3
title: RFID-Passausträge
description: Wie Sie RFID-Ladepassausträge für Ihre Elektroflotte bei Stroomlijnen bestellen, aktivieren und verwalten.
keywords: [RFID-Karte, Ladekarte, NL*STM, Flottenladung, Kartenaktivierung]
---

# RFID-Passausträge

RFID (Radio Frequency Identification) Passausträge sind die traditionelle Methode, um sich an einer Ladestation zu authentifizieren. Tippen Sie Ihre Karte, beginnen Sie mit dem Laden — einfach und zuverlässig.

## Wie RFID-Ladepassausträge funktionieren

Jede Karte enthält einen eindeutigen Identifikationscode (ein **Token** oder **UID**), der Ihrem Flottenkonto zugeordnet ist. Wenn Sie die Karte auf den Leser eines Laders tippen:

1. Der Lader liest den UID von der Karte
2. Sendet ihn über OCPP an die Stroomlijnen-Backend
3. Unser System überprüft: Ist diese Karte gültig? Zu welcher Flotte gehört sie?
4. Wenn gültig → startet das Laden. Die Sitzung wird Ihrem Flottenkonto berechnet.

Dies funktioniert an jedem Stroomlijnen-Standort und bei **Roaming-Partner-Ladern** in ganz Europa — die Karte trägt Ihre NL\*STM-eMSP-Identität.

## Passausträge bestellen

### Neue Flottenregistrierung
Wenn Sie Ihre Flotte registrieren, können Sie Passausträge direkt über das Portal bestellen:

1. Gehen Sie zu **Meine Flotte → RFID-Passausträge**
2. Klicken Sie auf **Passausträge bestellen**
3. Geben Sie die erforderliche Anzahl an Passausträgen ein
4. Geben Sie die Versandadresse ein
5. Passausträge arriveiren innerhalb von 3–5 Werktagen

### Zusätzliche Passausträge
Mehr benötigt? Gleiche Prozedur. Sie können jederzeit zusätzliche Passausträge bestellen.

### Preis
- Passausträge werden kostenlos mit Ihrem Flottenabonnement bereitgestellt
- Ersatz bei Verlust: kostenlos (erste zwei pro Jahr), 5 € pro Karte danach

## Eine Karte aktivieren

Passausträge werden **voraktiviert** geliefert und sind bereits Ihrem Flottenkonto zugeordnet. Sie müssen jedoch:

1. Zu **Meine Flotte → RFID-Passausträge** im Portal gehen
2. Überprüfen, ob die neuen Passausträge in Ihrer Liste erscheinen
3. **Jede Karte einem Fahrer zuweisen** (optional, aber empfohlen — hilft bei der Verfolgung von Sitzungen)
4. Die Karte an einem Lader testen

:::tip
Weisen Sie Passausträge bestimmten Fahrern zu. So zeigen Ihre Ladeberichte an, welcher Fahrer welche Karte verwendet hat, was die Kostenzuweisung pro Flotte viel einfacher macht.
:::

## Passausträge verwalten

### Eine Karte deaktivieren
Wenn eine Karte verloren ist oder ein Fahrer das Unternehmen verlässt:
1. Gehen Sie zu **Meine Flotte → RFID-Passausträge**
2. Suchen Sie die Karte (nach Nummer oder Fahrernamen)
3. Klicken Sie auf **Deaktivieren**
4. Die Karte funktioniert sofort nicht mehr an allen Ladern

### Eine Karte erneut aktivieren
Die "verlorene" Karte doch wieder gefunden? Sie können sie auf die gleiche Weise erneut aktivieren.

### Passausträgengruppen
Für größere Flotten können Sie Passausträge in Gruppen organisieren:
- **Pro Fahrzeug** — eine Karte pro LKW
- **Pro Fahrer** — persönliche Karten, die an jedem Fahrzeug funktionieren
- **Pro Abteilung** — separate Abrechnung pro Unternehmenseinheit

## Verlorene oder gestohlene Passausträge

1. **Deaktivieren Sie sofort** im Portal (oder rufen Sie uns an)
2. Die Karte wird innerhalb von 60 Sekunden ungültig auf allen verbundenen Ladern
3. Bestellen Sie eine Ersatzkarte
4. Eventuelle Kosten vor der Deaktivierung erscheinen auf Ihrer üblichen Rechnung

:::caution
Deaktivieren Sie verlorene Passausträge so schnell wie möglich. Bis dahin kann jeder mit der Karte an Ihrem Konto laden. Wir verarbeiten die Deaktivierung innerhalb von 60 Sekunden — aber Sie müssen das Initiativ nehmen.
:::

## RFID versus Plug & Charge

| Funktion | RFID-Karte | Plug & Charge |
|---------|-----------|---------------|
| Einrichtungszeit | Passausträge bestellen, Fahrern zuweisen | VIN registrieren, Zertifikat installieren |
| Aktion des Fahrers | Karte tippen vor/nach dem Laden | Einfach einstecken |
| Funktioniert bei mehreren Flotten | Karte folgt dem Fahrer | Zertifikat folgt dem Fahrzeug |
| Verlustrisiko | Karte kann verloren/geklaut werden | Nichts physisch zu verlieren |
| Roaming | Funktioniert überall | Wächst, aber noch nicht universell |
| Ausweichoption | Funktioniert immer | RFID erforderlich als Ausweichoption |

**Unsere Empfehlung:** Stellen Sie Plug & Charge für die Bequemlichkeit ein, halten Sie RFID-Passausträge als Reserveoption. Riemen und Gürtel.

## Technische Details

- **Kartentechnologie:** MIFARE DESFire EV2 (verschlüsselt, sicher)
- **Frequenz:** 13,56 MHz (NFC)
- **Standard:** ISO 14443
- **UID-Format:** 14 hexadezimale Zeichen
- **Branding:** Stroomlijnen-Logo mit NL\*STM-Identifikation

## Nächste Schritte

- [Stellen Sie Plug & Charge ein](/docs/plug-and-charge/setup-guide) neben Ihren RFID-Passausträgen
- [Verwalten Sie Ihre Fahrer](/docs/fleet-management/driver-management)
- [Verstehen Sie Ihre Rechnungen](/docs/fleet-management/invoicing)