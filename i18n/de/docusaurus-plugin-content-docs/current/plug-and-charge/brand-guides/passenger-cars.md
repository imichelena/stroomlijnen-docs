---
sidebar_position: 7
title: Personenwagen — Plug & Charge
description: Wie Plug & Charge für Personenwagen an Stroomlijnen-Ladestationen funktioniert — BMW, Mercedes, Porsche, Audi, VW und mehr.
keywords: [Personenwagen, Plug and Charge, BMW, Mercedes, Porsche, Audi, VW, CCS, Elektroauto]
---

# Personenwagen — Plug & Charge

Obwohl die Ladestationen von Stroomlijnen für Nutzfahrzeuge konzipiert sind, können Personenwagen mit CCS-Steckern auch an unseren Stationen laden. Viele moderne Elektrofahrzeuge unterstützen bereits Plug & Charge.

## Wie es für Personenwagen funktioniert

Plug & Charge für Personenwagen funktioniert auf die gleiche Weise wie für Lkw — das Fahrzeug präsentiert ein digitales Vertragszertifikat via ISO 15118, und der Ladestation authentifiziert automatisch.

Der Unterschied liegt in **wie das Zertifikat in das Auto gelangt**:
- Autos erhalten PnC-Zertifikate in der Regel über den eigenen Ladedienst des Herstellers (BMW Charging, Mercedes me Charge usw.)
- Das PnC-Zertifikat des Autos kann mit dem eMSP des Herstellers verknüpft sein, nicht direkt mit Stroomlijnen
- Roaming via Hubject ermöglicht Cross-Netzwerk-PnC — das Zertifikat des Autos funktioniert bei Stroomlijnen über Roaming

## Unterstützte Marken

| Marke | PnC-Methode | Funktioniert bei Stroomlijnen |
|------|-------------|:----------------------:|
| **BMW** | BMW Charging / Hubject | ✅ Via Roaming |
| **Mercedes-Benz** | Mercedes me Charge / Hubject | ✅ Via Roaming |
| **Porsche** | Porsche Charging Service / Hubject | ✅ Via Roaming |
| **Audi** | myAudi / Hubject | ✅ Via Roaming |
| **VW** | Volkswagen We Charge | ⚠️ Ausrollung läuft |
| **Hyundai** | Hyundai Bluelink | ⚠️ Marktabhängig |
| **Kia** | Kia Connect | ⚠️ Marktabhängig |
| **Tesla** | Eigenes Supercharger-PnC | ❌ Nicht via ISO 15118 |
| **Stellantis** | — | ❌ Noch nicht unterstützt |

### Wie Roaming PnC funktioniert

1. Sie aktivieren PnC in der App des Fahrzeugherstellers (z.B. BMW Charging in der My BMW-App)
2. Der Hersteller installiert ein Vertragszertifikat in Ihrem Auto
3. Wenn Sie an einer Stroomlijnen-Ladestation einstecken, präsentiert das Auto sein Zertifikat
4. Unsere Ladestation validiert es über den Zertifikatpool von Hubject
5. Die Sitzung wird autorisiert und abgerechnet über den Ladedienst des Herstellers
6. Sie sehen die Sitzung in der App des Herstellers (und wir sehen sie in unserer Backend)

**Achten Sie auf Tarife:** Beim Laden via Roaming PnC gilt der Preis des eMSP (z.B. BMW Charging-Tarife), nicht die Tarife von Stroomlijnen. Für die besten Preise an Stroomlijnen-Standorten können Sie einen direkten Flottenauftrag in Erwägung ziehen.

## Direktes PnC für Personenwagen

Wenn Sie eine Flotte von Personenwagen verwalten (Geschäftswagen, z.B.), können Sie direktes Stroomlijnen-PnC einrichten:

1. Registrieren Sie die Fahrzeuge in Mijn Vloot (gleiches Verfahren wie für Lkw)
2. Aktivieren Sie PnC für jedes Fahrzeug
3. Für unterstützte Marken (BMW, Mercedes, Audi) pusht unser CPS Zertifikate via OEM-Backend
4. Sie erhalten die direkten Flottentarife von Stroomlijnen anstelle von Roamingtarifen

Dies ist insbesondere wertvoll für Geschäftswagenflotten, bei denen Kostenmanagement wichtig ist.

## Praktische Hinweise

### Physische Kompatibilität
Stroomlijnen-Stationen sind für Lkw konzipiert. Beim Laden eines Personenwagens:
- Parken Sie in einem ausgewiesenen Autoparkplatz, wenn dieser verfügbar ist
- Die CCS-Kabel können schwerer sein als bei Standard-Autoladestationen (konzipiert für Lkw-Anschlüsse)
- Der Kabelbereich ist ausreichend — unsere Kabel sind 5 m oder länger

### Ladeschnelligkeit
Unsere Ladestationen liefern bis zu 400 kW, aber Ihr Auto nimmt nur auf, was es aushält. Ein durchschnittliches Personenwagen lädt mit 50–250 kW abhängig von Modell und Akkustatus.

### Auto-freundliche Standorte finden
Suchen Sie in der Stroomlijnen-App oder auf der Karte nach Standorten, die sowohl ein Lkw- als auch ein Autopiktogramm haben. Einige Standorte haben spezielle Autoparkplätze mit niedrigeren Kabelhaltern.