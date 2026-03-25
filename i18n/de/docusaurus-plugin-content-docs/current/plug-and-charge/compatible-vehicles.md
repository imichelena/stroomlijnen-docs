---
sidebar_position: 3
title: Kompatible Fahrzeuge
description: Welche elektrischen Lkw, Transporter und Pkw das Plug-&-Charge-Verfahren bei Stroomlijnen-Ladestationen unterstützen.
keywords: [kompatible Fahrzeuge, Plug and Charge, elektrische Lkw, ISO 15118, Volvo, DAF, Mercedes, Scania, MAN]
---

# Kompatible Fahrzeuge

Die Kompatibilität von Plug & Charge hängt von der Unterstützung des Fahrzeugs für **ISO 15118-2** mit Vertragszertifikatverarbeitung ab. Nachfolgend finden Sie den aktuellen Status für auf Stroomlijnen-Standorten häufig gesehene Fahrzeuge.

:::info Aktualisiert März 2026
Die Kompatibilität entwickelt sich schnell. Wir aktualisieren diese Seite, sobald die Hersteller neue Firmware und Modelle veröffentlichen. Wenn Ihr Fahrzeug nicht aufgeführt ist, [kontaktieren Sie uns](mailto:info@stroomlijnen.nl).
:::

## Elektrische Lkw

| Hersteller | Modell | PnC-Unterstützung | Hinweise |
|-------------|-------|:-----------:|-------|
| **Volvo** | FH Electric | ✅ | Über Volvo Connect. Vollständiges PnC ab Firmware v3.2+ |
| **Volvo** | FM Electric | ✅ | Über Volvo Connect. Selbes Plattform wie FH Electric |
| **Volvo** | FE Electric | ✅ | Über Volvo Connect |
| **Volvo** | FL Electric | ✅ | Über Volvo Connect |
| **DAF** | XF Electric | ✅ | Über DAF Connect. Erfordert Aktivierung durch den Flottenmanager |
| **DAF** | XD Electric | ✅ | Über DAF Connect |
| **DAF** | XB Electric | ✅ | Über DAF Connect |
| **Mercedes-Benz** | eActros 600 | ✅ | Über Fleetboard. PnC verfügbar ab Q4 2025 |
| **Mercedes-Benz** | eActros 300 | ✅ | Über Fleetboard |
| **Mercedes-Benz** | eEconic | ⚠️ | PnC über OTA-Update erwartet Q2 2026 |
| **Scania** | BEV R-Serie | ✅ | Über Scania Fleet Management. Firmware 2025.3+ |
| **Scania** | BEV P-Serie | ✅ | Über Scania Fleet Management |
| **MAN** | eTGX | ✅ | Über RIO-Plattform. Vollständiges PnC ab Ende 2025 |
| **MAN** | eTGS | ✅ | Über RIO-Plattform |
| **MAN** | eTGL/eTGM | ⚠️ | PnC-Rollout in Bearbeitung, kontaktieren Sie den Händler |
| **Renault Trucks** | E-Tech T | ⚠️ | ISO 15118-2-Hardware vorhanden, PnC-Aktivierung über OTA erwartet H1 2026 |
| **Renault Trucks** | E-Tech D | ⚠️ | Selber Status wie E-Tech T |
| **Ford Trucks** | F-MAX Electric | ❌ | ISO 15118 noch nicht unterstützt. Nur RFID/App |
| **IVECO** | S-eWay | ⚠️ | PnC angekündigt für Modelle von 2026 |

### Legende

- ✅ **Unterstützt** — PnC funktioniert heute bei Stroomlijnen-Ladern
- ⚠️ **Bald** — Hardware geeignet, Software-Update in Bearbeitung
- ❌ **Nicht unterstützt** — Verwenden Sie RFID-Pass oder App

## Elektrische Transporter

| Hersteller | Modell | PnC-Unterstützung | Hinweise |
|-------------|-------|:-----------:|-------|
| **Mercedes-Benz** | eSprinter | ✅ | ISO 15118-2 ab Modelljahr 2025 |
| **Mercedes-Benz** | eVito | ✅ | ISO 15118-2 ab Modelljahr 2025 |
| **Volvo** | EM90 | ✅ | Über Volvo Connect |
| **Ford** | E-Transit | ⚠️ | Hardware geeignet, PnC-Aktivierung variiert je nach Markt |
| **MAN** | eTGE | ⚠️ | Eingeschränkte PnC-Unterstützung, kontaktieren Sie den Händler |
| **Renault** | Master E-Tech | ❌ | Nur RFID/App |
| **VW** | ID. Buzz Cargo | ⚠️ | PnC über VW-Backend, erfordert Volkswagen We Charge-Vertrag |
| **Fiat** | E-Ducato | ❌ | Keine ISO 15118-Unterstützung |
| **Maxus** | eDeliver 7 | ❌ | Keine ISO 15118-Unterstützung |

## Pkw (CCS DC)

Obwohl Stroomlijnen-Lader für Nutzfahrzeuge konzipiert sind, können Pkw mit CCS-Steckern auch an unseren Stationen laden. PnC-Unterstützung:

| Hersteller | PnC-Unterstützung | Hinweise |
|-------------|:-----------:|-------|
| **BMW** | ✅ | i4, iX, i5, i7 — über BMW Charging |
| **Mercedes-Benz** | ✅ | EQS, EQE, EQA, EQB — über Mercedes me Charge |
| **Porsche** | ✅ | Taycan, Macan Electric — über Porsche Charging Service |
| **Audi** | ✅ | e-tron GT, Q6 e-tron, Q8 e-tron — über myAudi |
| **VW** | ⚠️ | ID.-Serie — über Volkswagen We Charge, Rollout in Bearbeitung |
| **Hyundai/Kia** | ⚠️ | Ioniq 5/6, EV6/9 — PnC variiert je nach Markt und Firmware |
| **Tesla** | ❌ | Verwendet eigenes Supercharger-PnC, CCS-PnC nicht unterstützt |
| **Stellantis-Marken** | ❌ | Keine ISO 15118-PnC auf aktuellen Modellen |

:::tip
Auch ohne PnC können alle Fahrzeuge mit einem **CCS Combo 2**-Stecker an Stroomlijnen-Standorten über einen RFID-Pass oder die Stroomlijnen-App laden. PnC entfernt einfach die Notwendigkeit für manuelle Authentifizierung.
:::

## Ihr Fahrzeug Überprüfen

1. **Überprüfen Sie Ihr OEM-Portal** — Volvo Connect, DAF Connect, Fleetboard, RIO oder Scania Fleet Management zeigt "Plug & Charge" oder "ISO 15118"-Einstellungen an
2. **Überprüfen Sie die Firmware-Version** — Stellen Sie sicher, dass Ihr Fahrzeug die neueste Firmware hat (siehe [herstellerspezifische Anleitungen](./brand-guides/volvo-trucks))
3. **Kontaktieren Sie Ihren Händler** — Er kann die ISO 15118-Möglichkeit bestätigen und Zertifikate installieren, wenn notwendig
4. **Kontaktieren Sie Stroomlijnen** — Wir können die Kompatibilität überprüfen, wenn Sie sich in unserem Portal registrieren

## Ihr Fahrzeug Wird Nicht Aufgeführt?

Wenn Ihr Lkw oder Transporter nicht aufgeführt ist, kann es dennoch funktionieren. Neue Modelle und Firmware-Updates werden regelmäßig veröffentlicht. Kontaktieren Sie uns über [info@stroomlijnen.nl](mailto:info@stroomlijnen.nl) mit dem Hersteller, Modell und der Fahrgestellnummer Ihres Fahrzeugs, dann werden wir es überprüfen.

---

**Weiter:** [Installationsanleitung →](./setup-guide)