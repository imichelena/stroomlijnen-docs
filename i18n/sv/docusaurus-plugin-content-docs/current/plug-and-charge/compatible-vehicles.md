---
sidebar_position: 3
title: Kompatibla fordon
description: Vilka el-lastbilar, skåpbilar och personbilar som stöder Plug & Charge vid Stroomlijnens laddstation.
keywords: [kompatibla fordon, Plug and Charge, el-lastbilar, ISO 15118, Volvo, DAF, Mercedes, Scania, MAN]
---

# Kompatibla fordon

Plug & Charge-kompatibilitet beror på fordonets stöd för **ISO 15118-2** med kontraktscertifikatshantering. Här visas den aktuella statusen för fordon som ofta ses vid Stroomlijnens platser.

:::info Uppdaterad mars 2026
Kompatibilitet utvecklas snabbt. Vi uppdaterar denna sida allteftersom OEM:er släpper ny firmware och modeller. Om ditt fordon inte är listat, [kontakta oss](mailto:info@stroomlijnen.nl).
:::

## El-lastbilar

| Tillverkare | Modell | PnC-stöd | Kommentarer |
|-------------|-------|:-----------:|-------|
| **Volvo** | FH Electric | ✅ | Via Volvo Connect. Fullständig PnC från och med firmware v3.2+ |
| **Volvo** | FM Electric | ✅ | Via Volvo Connect. Samma plattform som FH Electric |
| **Volvo** | FE Electric | ✅ | Via Volvo Connect |
| **Volvo** | FL Electric | ✅ | Via Volvo Connect |
| **DAF** | XF Electric | ✅ | Via DAF Connect. Kräver aktivering av flottledare |
| **DAF** | XD Electric | ✅ | Via DAF Connect |
| **DAF** | XB Electric | ✅ | Via DAF Connect |
| **Mercedes-Benz** | eActros 600 | ✅ | Via Fleetboard. PnC tillgänglig från Q4 2025 |
| **Mercedes-Benz** | eActros 300 | ✅ | Via Fleetboard |
| **Mercedes-Benz** | eEconic | ⚠️ | PnC via OTA-uppdatering förväntas Q2 2026 |
| **Scania** | BEV R-serie | ✅ | Via Scania Fleet Management. Firmware 2025.3+ |
| **Scania** | BEV P-serie | ✅ | Via Scania Fleet Management |
| **MAN** | eTGX | ✅ | Via RIO-plattformen. Fullständig PnC från och med slutet av 2025 |
| **MAN** | eTGS | ✅ | Via RIO-plattformen |
| **MAN** | eTGL/eTGM | ⚠️ | PnC-utrullning pågår, kontakta återförsäljare |
| **Renault Trucks** | E-Tech T | ⚠️ | ISO 15118-2-hårdvara finns, PnC-aktivering via OTA förväntas H1 2026 |
| **Renault Trucks** | E-Tech D | ⚠️ | Samma status som E-Tech T |
| **Ford Trucks** | F-MAX Electric | ❌ | ISO 15118 inte stöds. Endast RFID/app |
| **IVECO** | S-eWay | ⚠️ | PnC har annonserats för modeller från 2026 |

### Förklaring

- ✅ **Stöds** — PnC fungerar idag vid Stroomlijnens laddare
- ⚠️ **Snart** — Hårdvara är lämplig, programvaruuppdatering väntas
- ❌ **Inte stöds** — Använd RFID-pass eller app

## El-skåpbilar

| Tillverkare | Modell | PnC-stöd | Kommentarer |
|-------------|-------|:-----------:|-------|
| **Mercedes-Benz** | eSprinter | ✅ | ISO 15118-2 från och med modellår 2025 |
| **Mercedes-Benz** | eVito | ✅ | ISO 15118-2 från och med modellår 2025 |
| **Volvo** | EM90 | ✅ | Via Volvo Connect |
| **Ford** | E-Transit | ⚠️ | Hårdvara är lämplig, PnC-aktivering varierar per marknad |
| **MAN** | eTGE | ⚠️ | Begränsad PnC-stöd, kontakta återförsäljare |
| **Renault** | Master E-Tech | ❌ | Endast RFID/app |
| **VW** | ID. Buzz Cargo | ⚠️ | PnC via VW-backend, kräver Volkswagen We Charge-kontrakt |
| **Fiat** | E-Ducato | ❌ | Inget ISO 15118-stöd |
| **Maxus** | eDeliver 7 | ❌ | Inget ISO 15118-stöd |

## Personbilar (CCS DC)

Även om Stroomlijnens laddare är utformade för yrkesfordon, kan personbilar med CCS-kontakter också ladda vid våra stationer. PnC-stöd:

| Tillverkare | PnC-stöd | Kommentarer |
|-------------|:-----------:|-------|
| **BMW** | ✅ | i4, iX, i5, i7 — via BMW Charging |
| **Mercedes-Benz** | ✅ | EQS, EQE, EQA, EQB — via Mercedes me Charge |
| **Porsche** | ✅ | Taycan, Macan Electric — via Porsche Charging Service |
| **Audi** | ✅ | e-tron GT, Q6 e-tron, Q8 e-tron — via myAudi |
| **VW** | ⚠️ | ID.-serien — via Volkswagen We Charge, utrullning pågår |
| **Hyundai/Kia** | ⚠️ | Ioniq 5/6, EV6/9 — PnC varierar per marknad och firmware |
| **Tesla** | ❌ | Använder egen Supercharger PnC, CCS PnC inte stöds |
| **Stellantis-märken** | ❌ | Inget ISO 15118 PnC på nuvarande modeller |

:::tip
Även utan PnC kan alla fordon med en **CCS Combo 2**-kontakt ladda vid Stroomlijnens platser via en RFID-pass eller Stroomlijnen-appen. PnC tar bort behovet av manuell autentisering.
:::

## Kontrollera ditt fordon

1. **Kontrollera din OEM-portalsida** — Volvo Connect, DAF Connect, Fleetboard, RIO eller Scania Fleet Management visar "Plug & Charge" eller "ISO 15118"-inställningar
2. **Kontrollera firmwareversionen** — Se till att ditt fordon har den senaste firmware (se [tillverkarsspecifika instruktioner](./brand-guides/volvo-trucks))
3. **Kontakta din återförsäljare** — De kan bekräfta ISO 15118-möjlighet och installera certifikat om nödvändigt
4. **Kontakta Stroomlijnen** — Vi kan kontrollera kompatibilitet när du registrerar dig i vårt portal

## Ditt fordon är inte listat?

Om din lastbil eller skåpbil inte är listad, kan den ändå fungera. Nya modeller och firmware-uppdateringar släpps regelbundet. Kontakta oss via [info@stroomlijnen.nl](mailto:info@stroomlijnen.nl) med märke, modell och VIN för ditt fordon, så ska vi undersöka.

---

**Nästa:** [Installationshandbok →](./setup-guide)