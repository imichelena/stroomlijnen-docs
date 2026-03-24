---
sidebar_position: 3
title: Compatibele Voertuigen
description: Welke elektrische vrachtwagens, bestelwagens en auto's ondersteunen Plug & Charge bij Stroomlijnen-laadstations.
keywords: [compatible vehicles, Plug and Charge, electric trucks, ISO 15118, Volvo, DAF, Mercedes, Scania, MAN]
---

# Compatibele Voertuigen

Plug & Charge-compatibiliteit hangt af van de ondersteuning van het voertuig voor **ISO 15118-2** met contractcertificaatafhandeling. Hieronder vindt u de huidige status voor voertuigen die veel voorkomen bij Stroomlijnen-locaties.

:::info Bijgewerkt maart 2026
Compatibiliteit ontwikkelt zich snel. We werken deze pagina bij zodra OEM's nieuwe firmware en modellen uitbrengen. Staat uw voertuig er niet bij? [Neem contact op](mailto:info@stroomlijnen.nl).
:::

## Elektrische Vrachtwagens

| Fabrikant | Model | PnC-ondersteuning | Opmerkingen |
|-------------|-------|:-----------:|-------|
| **Volvo** | FH Electric | ✅ | Via Volvo Connect. Volledige PnC sinds firmware v3.2+ |
| **Volvo** | FM Electric | ✅ | Via Volvo Connect. Zelfde platform als FH Electric |
| **Volvo** | FE Electric | ✅ | Via Volvo Connect |
| **Volvo** | FL Electric | ✅ | Via Volvo Connect |
| **DAF** | XF Electric | ✅ | Via DAF Connect. Vereist activatie door vlootbeheerder |
| **DAF** | XD Electric | ✅ | Via DAF Connect |
| **DAF** | XB Electric | ✅ | Via DAF Connect |
| **Mercedes-Benz** | eActros 600 | ✅ | Via Fleetboard. PnC beschikbaar sinds Q4 2025 |
| **Mercedes-Benz** | eActros 300 | ✅ | Via Fleetboard |
| **Mercedes-Benz** | eEconic | ⚠️ | PnC via OTA-update verwacht Q2 2026 |
| **Scania** | BEV R-serie | ✅ | Via Scania Fleet Management. Firmware 2025.3+ |
| **Scania** | BEV P-serie | ✅ | Via Scania Fleet Management |
| **MAN** | eTGX | ✅ | Via RIO-platform. Volledige PnC sinds eind 2025 |
| **MAN** | eTGS | ✅ | Via RIO-platform |
| **MAN** | eTGL/eTGM | ⚠️ | PnC-uitrol loopt, informeer bij dealer |
| **Renault Trucks** | E-Tech T | ⚠️ | ISO 15118-2 hardware aanwezig, PnC-activatie via OTA verwacht H1 2026 |
| **Renault Trucks** | E-Tech D | ⚠️ | Zelfde status als E-Tech T |
| **Ford Trucks** | F-MAX Electric | ❌ | ISO 15118 nog niet ondersteund. Alleen RFID/app |
| **IVECO** | S-eWay | ⚠️ | PnC aangekondigd voor 2026-modellen |

### Legenda

- ✅ **Ondersteund** — PnC werkt vandaag op Stroomlijnen-laders
- ⚠️ **Binnenkort beschikbaar** — Hardware geschikt, software-update in afwachting
- ❌ **Niet ondersteund** — Gebruik RFID-pas of app

## Elektrische Bestelwagens

| Fabrikant | Model | PnC-ondersteuning | Opmerkingen |
|-------------|-------|:-----------:|-------|
| **Mercedes-Benz** | eSprinter | ✅ | ISO 15118-2 sinds modeljaar 2025 |
| **Mercedes-Benz** | eVito | ✅ | ISO 15118-2 sinds modeljaar 2025 |
| **Volvo** | EM90 | ✅ | Via Volvo Connect |
| **Ford** | E-Transit | ⚠️ | Hardware geschikt, PnC-activatie verschilt per markt |
| **MAN** | eTGE | ⚠️ | Beperkte PnC-ondersteuning, informeer bij dealer |
| **Renault** | Master E-Tech | ❌ | Alleen RFID/app |
| **VW** | ID. Buzz Cargo | ⚠️ | PnC via VW-backend, vereist Volkswagen We Charge-contract |
| **Fiat** | E-Ducato | ❌ | Geen ISO 15118-ondersteuning |
| **Maxus** | eDeliver 7 | ❌ | Geen ISO 15118-ondersteuning |

## Personenwagens (CCS DC)

Hoewel Stroomlijnen-laders zijn ontworpen voor bedrijfsvoertuigen, kunnen personenwagens met CCS-connectoren ook laden. PnC-ondersteuning:

| Fabrikant | PnC-ondersteuning | Opmerkingen |
|-------------|:-----------:|-------|
| **BMW** | ✅ | i4, iX, i5, i7 — via BMW Charging |
| **Mercedes-Benz** | ✅ | EQS, EQE, EQA, EQB — via Mercedes me Charge |
| **Porsche** | ✅ | Taycan, Macan Electric — via Porsche Charging Service |
| **Audi** | ✅ | e-tron GT, Q6 e-tron, Q8 e-tron — via myAudi |
| **VW** | ⚠️ | ID.-serie — via Volkswagen We Charge, uitrol loopt |
| **Hyundai/Kia** | ⚠️ | Ioniq 5/6, EV6/9 — PnC verschilt per markt en firmware |
| **Tesla** | ❌ | Gebruikt eigen Supercharger PnC, CCS PnC niet ondersteund |
| **Stellantis-merken** | ❌ | Geen ISO 15118 PnC op huidige modellen |

:::tip
Ook zonder PnC kunnen alle voertuigen met een **CCS Combo 2**-connector laden op Stroomlijnen-locaties met een RFID-pas of de Stroomlijnen-app. PnC maakt alleen de handmatige authenticatie overbodig.
:::

## Hoe Controleert U Uw Voertuig

1. **Controleer uw OEM-portaal** — Volvo Connect, DAF Connect, Fleetboard, RIO, of Scania Fleet Management moet "Plug & Charge" of "ISO 15118"-instellingen tonen
2. **Controleer firmwareversie** — Zorg dat uw voertuig de nieuwste firmware draait (zie [merkspecifieke handleidingen](./brand-guides/volvo-trucks))
3. **Informeer bij uw dealer** — Zij kunnen ISO 15118-compatibiliteit verifiëren en indien nodig certificaten installeren
4. **Neem contact op met Stroomlijnen** — We kunnen compatibiliteit controleren wanneer u registreert in ons portaal

## Uw Voertuig Ontbreekt?

Als uw vrachtwagen of bestelwagen niet in de lijst staat, kan het alsnog werken. Nieuwe modellen en firmware-updates verschijnen regelmatig. Neem contact op via [info@stroomlijnen.nl](mailto:info@stroomlijnen.nl) met uw voertuigmerk, model en VIN, en we onderzoeken het.

---

**Volgende:** [Installatiehandleiding →](./setup-guide)
