---
sidebar_position: 4
title: Scania BEV — Konfigurera Plug & Charge
description: Steg för steg-guide för att aktivera Plug & Charge på Scania R-serie och P-serie BEV-lastbilar via Scania Fleet Management.
keywords: [Scania, BEV, R-serie, P-serie, Scania Fleet Management, Plug and Charge, ISO 15118]
---

# Scania BEV — Konfigurera Plug & Charge

Scanias batterielektriska lastbilar (R-serie och P-serie BEV) stöder ISO 15118-2 Plug & Charge med firmwareversion 2025.3 eller högre. PnC hanteras via Scania Fleet Management-portalen.

## Stödda Modeller

| Modell | Batterialternativ | Max. DC-laddning | PnC Klar |
|-------|-----------|---------------|:---------:|
| R-serie BEV | Upp till 624 kWh | 375 kW (CCS) | ✅ (fw 2025.3+) |
| P-serie BEV | Upp till 416 kWh | 250 kW (CCS) | ✅ (fw 2025.3+) |

## Krav

- Scania Fleet Management-konto med administratörsåtkomst
- Lastbilsfiware version 2025.3 eller högre
- Stroomlijnen-flottkonto med PnC aktiverat ([Installationsguide](../setup-guide))

## Steg för Steg: Scania Fleet Management

### 1. Verifiera Firmware

1. Logga in på [My Scania](https://my.scania.com) (Scania Fleet Management)
2. Välj fordon → **Fordoninfo** → **Programvaruversion**
3. Bekräfta version 2025.3 eller högre
4. Om lägre, planera ett besök hos återförsäljaren eller kontrollera tillgängliga OTA-uppdateringar under **Underhåll** → **Programvaruuppdateringar**

### 2. Aktivera Elektrifieringstjänster

1. Gå till Scania Fleet Management och välj **Tjänster** → **Elektrifiering**
2. Om detta avsnitt inte är synligt, kan ditt abonnemang behöva Elektrifierings-tillägget — kontakta din Scania-återförsäljare
3. Klicka på **Laddningspartnershantering**

### 3. Lägg till Stroomlijnen

1. Klicka på **Lägg till partner**
2. Sök efter **"Stroomlijnen B.V."** eller ange eMSP-ID `NL-STM`
3. Klicka på **Anslut**
4. Granska och acceptera dataöverföringsavtalet (fordonsidentifiering för certifikatkoppling)
5. Klicka på **Bekräfta**

### 4. Tilldela fordon

1. Klicka på **Fordonshantering** efter att ha anslutit Stroomlijnen
2. Välj de lastbilar som ska aktiveras för PnC
3. Klicka på **Tillämpa**

### 5. Certifikatinstallation

- Scanias telematikgateway skickar kontraktscertifikatet till fordonet
- Lastbilen måste vara online (kontakt på eller ansluten till laddare)
- **Typisk installations tid: 4–12 timmar**
- Följ förloppet i Scania Fleet Management → Elektrifiering → Certifikatstatus

### 6. Verifiera

1. Kontrollera statusen i både Scania Fleet Management och Stroomlijnen Mina flottor
2. Anslut till en Stroomlijnen-laddare för att testa
3. Automatisk autentisering bör vara klar inom 5–10 sekunder

## Viktiga Anteckningar

### Telematik-SIM
Scanias lastbilar har en separat telematikmodul med egen mobil anslutning (oberoende av infotainmentsystemet). Se till att telematik-SIM-abonnemanget är aktiverat — certifikatleverans beror på denna anslutning, inte på lastbilens WiFi.

### Firmware-uppdateringar
Scania rullar ut PnC-relaterade firmware-uppdateringar gradvis per region. Om din lastbil har firmware 2025.2 eller tidigare, kan PnC-uppdateringen ännu inte vara tillgänglig via OTA. Din återförsäljare kan installera den manuellt.

### Flera flottor
Om dina lastbilar är registrerade hos flera Scania Fleet Management-konton (t.ex. efter förvärv), måste varje konto separat auktorisera Stroomlijnen.

## Felsökning

| Problem | Lösning |
|---------|----------|
| "Elektrifiering" inte i menyn | Abonnemanget kan behöva uppgraderas — kontakta din Scania-återförsäljare |
| Certifikat fastnar på "Pågår" | Verifiera att lastbilen är online, telematik-SIM aktiverat, firmware ≥ 2025.3 |
| PnC misslyckas vid laddare | Starta om lastbilen (fullständig kontaktcykel), försök igen. Kontrollera certifikatstatus. |
| "Partner inte hittad" vid sökning | Se till att du söker med rätt namn eller kod (NL-STM) |

---

**Nästa:** [MAN Konfigurera →](./man)