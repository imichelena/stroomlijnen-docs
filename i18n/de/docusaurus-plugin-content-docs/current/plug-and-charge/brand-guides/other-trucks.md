---
sidebar_position: 6
title: Andere LKW-Marken — Plug & Charge
description: Plug & Charge-Status und Installationsinformationen für Scania, MAN, Renault Trucks, Ford Trucks, IVECO und VW Nutzfahrzeuge.
keywords: [Scania, MAN, Renault Trucks, IVECO, Plug and Charge, ISO 15118, Elektro-LKW]
---

# Andere LKW-Marken — Plug & Charge

Diese Seite behandelt die PnC-Installation für LKW-Marken, die noch keine eigene umfassende Anleitung haben. Im Laufe der Zeit werden wir diese in separate Anleitungen aufteilen.

## Scania BEV

**Modelle:** R-Serie BEV, P-Serie BEV
**PnC-Status:** ✅ Unterstützt (Firmware 2025.3+)
**Flottenportal:** Scania Fleet Management

### Installationschritte

1. Melden Sie sich bei [Scania Fleet Management](https://my.scania.com) an
2. Gehen Sie zu **Elektrifizierung** → **Ladedienste**
3. Klicken Sie auf **Ladepartner hinzufügen** → suchen Sie nach "Stromlinien"
4. Autorisieren und auswählen Sie Fahrzeuge
5. Scania überträgt Zertifikate über ihr Telematik-Gateway
6. **Typische Installationszeit: 4–12 Stunden**

### Hinweise
- Scania erfordert Firmware-Version 2025.3 oder höher für vollständige PnC-Unterstützung
- Ältere Firmware unterstützt ISO 15118-Kommunikation, aber nicht die Verarbeitung von Vertragszertifikaten
- Wenden Sie sich an Ihren Scania-Händler für Firmware-Updates — OTA-Updates für PnC werden schrittweise ausgerollt
- Das Telematiksystem von Scania verwendet eine separate mobile Verbindung vom Infotainmentsystem des Fahrzeugs — stellen Sie sicher, dass die Telematik-SIM aktiv ist

## MAN Electric

**Modelle:** eTGX, eTGS, eTGL, eTGM
**PnC-Status:** ✅ Unterstützt auf eTGX/eTGS | ⚠️ Wird ausgerollt auf eTGL/eTGM
**Flottenportal:** RIO-Plattform

### Installationschritte

1. Melden Sie sich bei [RIO](https://rio.cloud) an
2. Navigieren Sie zu **Dienste** → **Lademanagement**
3. Klicken Sie unter **Externe Ladepartner** auf **Partner verbinden**
4. Suchen Sie nach **"Stromlinien B.V."** und klicken Sie auf **Autorisieren**
5. Wählen Sie Fahrzeuge aus und bestätigen Sie
6. **Typische Installationszeit: 6–24 Stunden**

### Hinweise
- Die RIO-Plattform wird von MAN und einigen anderen TRATON-Marken genutzt
- eTGX und eTGS haben seit Ende 2025 vollständige PnC-Unterstützung
- eTGL und eTGM erhalten PnC-Unterstützung durch schrittweise Firmware-Updates im Laufe des Jahres 2026
- MAN-Zertifikate verwenden ein Hardware-Sicherheitsmodul (HSM) im Fahrzeug — dies bietet hervorragende Sicherheit, aber bedeutet, dass Zertifikate nur installiert werden können, wenn der Sicherheitsmodus des LKWs in "Provisioning-Modus" ist (erste 30 Minuten nach Kontakt)

## Renault Trucks E-Tech

**Modelle:** E-Tech T, E-Tech D, E-Tech Master (Lieferwagen)
**PnC-Status:** ⚠️ Kommt H1 2026
**Flottenportal:** Renault Trucks Fleet Management

### Aktueller Status
- ISO 15118-2-Hardware ist in E-Tech T und E-Tech D vorhanden
- PnC-Software-Aktivierung wird über OTA-Update im ersten Halbjahr 2026 erwartet
- Renault Trucks führt PnC-Interoperabilitätstests mit Hubject seit Q3 2025 durch
- Der E-Tech Master-Lieferwagen hat keine ISO 15118-Unterstützung

### Was Sie jetzt tun können
1. Stellen Sie sicher, dass Ihr Flottenportal-Konto eingerichtet ist und Administrator-Zugriff hat
2. Registrieren Sie Ihre Fahrzeuge im Stroomlijnen-Mijn-Vloot-Portal
3. Verwenden Sie RFID-Pässe für das Laden in der Zwischenzeit
4. Wir informieren Sie, wenn PnC für Renault Trucks verfügbar ist

## Ford Trucks

**Modelle:** F-MAX Electric
**PnC-Status:** ❌ Noch nicht unterstützt

### Aktueller Status
- Der Ford F-MAX Electric (hergestellt bei Ford Otosan in der Türkei) unterstützt derzeit kein ISO 15118
- Ford Otosan hat ISO 15118-Unterstützung für das Modelljahr 2027 angekündigt
- Verwenden Sie RFID-Pässe oder die Stroomlijnen-App für das Laden

## IVECO

**Modelle:** S-eWay
**PnC-Status:** ⚠️ Angekündigt für Modelle 2026

### Aktueller Status
- IVECO hat ISO 15118-2 PnC-Unterstützung für S-eWay-LKWs des Modelljahrs 2026 angekündigt
- Modelle vor 2026 verfügen nicht über die erforderliche ISO 15118-Hardware
- Umrüstung ist nicht möglich — PnC erfordert fabrikseitig installierte Kommunikationsmodule
- Verwenden Sie RFID-Pässe für aktuelle S-eWay-LKWs

## VW Nutzfahrzeuge

**Modelle:** ID. Buzz Cargo
**PnC-Status:** ⚠️ Eingeschränkte Unterstützung

### Aktueller Status
- Der ID. Buzz Cargo unterstützt ISO 15118-2, aber PnC wird über das VW We Charge-Ökosystem verwaltet
- Cross-Provider-PnC (Verwenden von Stroomlijnen-Zertifikaten mit VW-Fahrzeugen) ist technisch möglich, erfordert jedoch zusätzliche Konfiguration
- Wenden Sie sich an den Stroomlijnen-Support für VW-spezifische PnC-Konfiguration

---

:::info Ihr Markenname nicht gefunden?
Kontaktieren Sie uns über [info@stroomlijnen.nl](mailto:info@stroomlijnen.nl). Wir erweitern die PnC-Unterstützung aktiv, sobald mehr OEMs ISO 15118 aktivieren.
:::

**Weiter:** [Fehlerbehebung →](../troubleshooting)