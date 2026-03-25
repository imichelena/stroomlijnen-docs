---
sidebar_position: 3
title: Mercedes-Benz Lastbilar — Konfigurera Plug & Charge
description: Steg för steg-guide för att aktivera Plug & Charge på Mercedes-Benz eActros och eEconic-lastbilar via Fleetboard.
keywords: [Mercedes-Benz, eActros, eEconic, Fleetboard, Plug and Charge, ISO 15118, Daimler Truck]
---

# Mercedes-Benz Lastbilar — Konfigurera Plug & Charge

Mercedes-Benz (Daimler Truck) stödjer ISO 15118-2 Plug & Charge på eActros 600 och eActros 300. eEconic förväntas få PnC-stöd via en OTA-uppdatering i Q2 2026. Konfigurationen hanteras via Fleetboard-plattformen.

## Stödda Modeller

| Modell | Batterialternativ | Max. DC-laddning | PnC Klar |
|-------|-----------|---------------|:---------:|
| eActros 600 | Upp till 621 kWh | 400 kW (MCS/CCS) | ✅ |
| eActros 300 | Upp till 336 kWh | 160 kW (CCS) | ✅ |
| eEconic | Upp till 336 kWh | 160 kW (CCS) | ⚠️ Q2 2026 |

## Krav

- Fleetboard-konto med administratörsåtkomst för flottahantering
- eActros-firmware med eMobility-modul (standard sedan Q4 2025)
- Stroomlijnen-flottkonto med PnC aktiverat ([Installationsguide](../setup-guide))

## Steg för Steg: Fleetboard

### 1. Åtkomst till eMobility-inställningar

1. Logga in på [Fleetboard](https://fleetboard.com)
2. Navigera till **eMobility** → **Laddningshantering**
3. Om du använder det nya **Daimler Truck Digital**-portalen, gå till **Tjänster** → **Laddningshantering**

### 2. Lägga till Stroomlijnen som Leverantör

1. Klicka på **Laddleverantörer** i Laddningshantering
2. Klicka på **Lägg till leverantör**
3. Sök efter **"Stroomlijnen B.V."** (eller använd eMSP-ID `NL-STM`)
4. Klicka på **Anslut**
5. Godkänn villkoren för dataöverföring (fordons-ID och certifikatutbyte)

### 3. Registrera fordon för PnC

1. Gå till **Laddningshantering** → **Fordon PnC-inställningar**
2. Följ dessa steg för varje eActros du vill aktivera:
   - Klicka på fordonets rad
   - Ställ in **Plug & Charge** på PÅ
   - Välj **Stroomlijnen** som föredragen laddleverantör (eller en av flera)
3. Klicka på **Spara ändringar**

### 4. Certifikatdistribution

Efter att du har sparat:
1. Fleetboard initierar certifikatbegäran till Stroomlijnen
2. Kontraktscertifikatet genereras av vår backend
3. Det skickas till lastbilen via Daimler Trucks telematikenheter
4. **Typisk distributionstid: 2–6 timmar**
5. Lastbilen måste vara online (kontakt på eller ansluten till laddare)

### 5. Verifiera i Båda Portalerna

- **Fleetboard** → eMobility → Fordon → PnC-status: ska visa "Certifikat Aktivt"
- **Stroomlijnen Min Flotta** → Fordon → Plug & Charge: ska visa "✅ Aktiv"

### 6. Första Sessionen

Anslut eActros till en Stroomlijnen-laddare. Instrumentpanelen på eActros visar autentiseringsstatusen "Plug & Charge". Laddningen bör starta automatiskt inom 5–10 sekunder.

## Flera Laddleverantörer

Mercedes-Benz stödjer flera PnC-leverantörer samtidigt. Du kan ha Stroomlijnen-certifikat tillsammans med certifikat från andra leverantörer på samma fordon. Lastbilen använder rätt certifikat baserat på laddarens nätverk.

## Fleetboard vs Daimler Truck Digital

Daimler Truck övergår från Fleetboard till det nya **Daimler Truck Digital**-plattformen. Båda portalerna stödjer för närvarande PnC-hantering:

- **Fleetboard (äldre):** Fullständig PnC-stöd, väl dokumenterad
- **Daimler Truck Digital (ny):** PnC tillgänglig under Tjänster → Laddningshantering

Om du migrerar mellan plattformar överförs PnC-inställningarna automatiskt.

## Felsökning

### Avdelning "eMobility" inte tillgänglig i Fleetboard
- Se till att ditt Fleetboard-abonnemang innehåller eMobility-modulen
- eMobility-modulen ingår i Fleetboard Premium för elfordon
- Kontakta din Mercedes-Benz-återförsäljare för verifiering

### Certifikat visar "Under behandling" under en längre period
1. Se till att lastbilen varit online i minst 2 timmar
2. Kontrollera Fleetboard → Meddelanden på eventuella väntande godkännanden
3. Verifiera att Daimler Trucks telematikenheter har mobilnätverksanslutning (kontrollera antenn i lastbilen)
4. Kontakta Stroomlijnen-support för backend-verifiering

### eActros 600 med MCS-anslutning
eActros 600 stödjer både CCS och MCS (Megawatt Charging System). PnC fungerar på båda anslutningstyperna på Stroomlijnen-platser. MCS-laddare kommer att distribueras på utvalda platser 2026.

---

**Nästa:** [Andra Lastbilar →](./other-trucks)