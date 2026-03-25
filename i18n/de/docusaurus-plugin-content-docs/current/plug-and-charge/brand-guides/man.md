---
sidebar_position: 5
title: MAN Electric — Plug & Charge Einrichten
description: Schritt-für-Schritt-Anleitung zur Aktivierung von Plug & Charge auf MAN eTGX und eTGS Elektro-Lkw über die RIO-Plattform.
keywords: [MAN, eTGX, eTGS, RIO, Plug and Charge, ISO 15118, TRATON]
---

# MAN Electric — Plug & Charge Einrichten

Das elektrische Lkw-Angebot von MAN (Teil der TRATON-Gruppe zusammen mit Scania) unterstützt ISO 15118-2 Plug & Charge auf den eTGX- und eTGS-Modellen. Die eTGL und eTGM erhalten PnC-Unterstützung durch schrittweise Firmware-Ausrollung im Jahr 2026. Die Konfiguration wird über die RIO-Plattform verwaltet.

## Unterstützte Modelle

| Modell | Batterieoptionen | Max. DC-Laden | PnC Bereit |
|-------|-----------|---------------|:---------:|
| eTGX | Bis 480 kWh | 375 kW (CCS) | ✅ |
| eTGS | Bis 400 kWh | 250 kW (CCS) | ✅ |
| eTGL | Bis 265 kWh | 150 kW (CCS) | ⚠️ Wird ausgerollt |
| eTGM | Bis 265 kWh | 150 kW (CCS) | ⚠️ Wird ausgerollt |

## Anforderungen

- RIO-Plattform-Konto mit Flottenmanager-Zugang
- eTGX/eTGS mit aktuellster Firmware (Ende 2025+)
- Stroomlijnen-Flottenkonto mit PnC aktiviert ([Installationsanleitung](../setup-guide))

## Schritt für Schritt: RIO-Plattform

### 1. Zugriff auf Ladeverwaltung

1. Melden Sie sich bei [RIO](https://rio.cloud) an
2. Navigieren Sie zu **Dienste** → **Ladeverwaltung**
3. Wenn die Ladeverwaltung nicht sichtbar ist, muss sie möglicherweise aktiviert werden — gehen Sie zu **Marketplace** → suchen nach "Ladeverwaltung" → **Aktivieren**

### 2. Stroomlijnen Verbinden

1. Gehen Sie in der Ladeverwaltung zu **Ladepartnern**
2. Klicken Sie auf **Neuen Partner verbinden**
3. Suchen nach **"Stroomlijnen B.V."** (oder verwenden Sie die eMSP-ID `NL-STM`)
4. Klicken Sie auf **Verbinden & Autorisieren**
5. Akzeptieren Sie die Bedingungen

### 3. Fahrzeuge Auswählen

1. Nach dem Verbinden zeigt die Partnerseite Ihre berechtigten Fahrzeuge an
2. Aktivieren Sie die Kontrollkästchen für Lkw, für die PnC aktiviert werden soll
3. Klicken Sie auf **Auswahl speichern**

### 4. Warten auf Zertifikatinstallation

- RIO aktiviert die Zertifikatbereitstellung über das Telematiksystem von MAN
- Der Lkw muss online sein und der Kontakt muss eingeschaltet sein
- **Wichtig:** MAN verwendet ein Hardware Security Module (HSM) für die Zertifikatspeicherung. Das HSM geht in den "Provisioningmodus" während der ersten 30 Minuten nach dem Einschalten des Kontakts. Wenn der Lkw geparkt ist und der Kontakt eingeschaltet ist, ohne dass das Zertifikat empfangen wird, schalten Sie den Kontakt aus und wieder ein, um den Provisioningmodus erneut zu aktivieren.
- **Typische Installationszeit: 6–24 Stunden**

### 5. Verifizieren

Überprüfen Sie den Zertifikatsstatus in RIO und Stroomlijnen Mein Flotte. Testen Sie an einem Stroomlijnen-Lader.

## HSM-Provisioningmodus — Wichtig

Die Sicherheitsarchitektur von MAN verwendet ein Hardware Security Module mit einem spezifischen Provisioningfenster:

1. Wenn der Kontakt des Lkw eingeschaltet wird, geht das HSM während 30 Minuten in den Provisioningmodus
2. Während dieses Fensters können neue Zertifikate installiert werden
3. Nach 30 Minuten sperrt das HSM, um unbefugte Zertifikatsänderungen zu verhindern
4. Um das Fenster erneut zu öffnen: Kontakt ausschalten, 10 Sekunden warten, wieder einschalten

**Was dies in der Praxis bedeutet:** Wenn Sie PnC im RIO-Portal aktivieren, während der Lkw eine Fahrt durchführt, wird das Zertifikat in die Warteschleife gestellt und bei der nächsten Startsequenz (innerhalb des ersten 30-Minuten-Fensters) installiert.

## TRATON-Gruppenintegration

MAN und Scania sind beide Teil der TRATON-Gruppe und teilen einige Backend-Infrastrukturen. Allerdings:

- Jedes Marken hat sein eigenes Flottenportal (RIO für MAN, My Scania für Scania)
- PnC muss separat in jedem Portal konfiguriert werden
- Zertifikate sind markenspezifisch und nicht übertragbar

## Problemlösung

| Problem | Lösung |
|---------|----------|
| "Ladeverwaltung" nicht in RIO | Aktivieren Sie es von der RIO-Marketplace aus |
| Zertifikat in Bearbeitung > 24 Stunden | Kontaktzyklus durchführen, um HSM-Provisioningmodus erneut zu aktivieren |
| eTGL/eTGM zeigt "PnC nicht verfügbar" an | Firmware-Update möglicherweise in Bearbeitung — überprüfen Sie bei Ihrem MAN-Händler |
| PnC funktioniert einmalig, dann fehlschlägt | HSM hat möglicherweise ein Verbindungsproblem — Diagnose durch den Händler erforderlich |

---

**Weiter:** [Andere Lkw →](./other-trucks)