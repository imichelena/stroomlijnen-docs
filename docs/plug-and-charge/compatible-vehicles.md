---
sidebar_position: 3
title: Compatibele Voertuigen
description: Welke elektrische vrachtwagens, bestelwagens en personenwagens Plug & Charge ondersteunen bij Stroomlijnen-laadstations.
keywords: [compatibele voertuigen, Plug and Charge, elektrische vrachtwagens, ISO 15118, Volvo, DAF, Mercedes, Scania, MAN]
---

# Compatibele Voertuigen

Plug & Charge-compatibiliteit hangt af van de ondersteuning van het voertuig voor **ISO 15118-2** met contractcertificaatverwerking. Hieronder staat de huidige status voor voertuigen die veel worden gezien op Stroomlijnen-locaties.

:::info Bijgewerkt maart 2026
Compatibiliteit evolueert snel. We werken deze pagina bij naarmate OEM's nieuwe firmware en modellen uitbrengen. Als uw voertuig niet vermeld staat, [neem contact met ons op](mailto:info@stroomlijnen.nl).
:::

## Elektrische Vrachtwagens

| Fabrikant | Model | PnC-ondersteuning | Opmerkingen |
|-------------|-------|:-----------:|-------|
| **Volvo** | FH Electric | ✅ | Via Volvo Connect. Volledige PnC vanaf firmware v3.2+ |
| **Volvo** | FM Electric | ✅ | Via Volvo Connect. Zelfde platform als FH Electric |
| **Volvo** | FE Electric | ✅ | Via Volvo Connect |
| **Volvo** | FL Electric | ✅ | Via Volvo Connect |
| **DAF** | XF Electric | ✅ | Via DAF Connect. Vereist activering door vlootbeheerder |
| **DAF** | XD Electric | ✅ | Via DAF Connect |
| **DAF** | XB Electric | ✅ | Via DAF Connect |
| **Mercedes-Benz** | eActros 600 | ✅ | Via Fleetboard. PnC beschikbaar vanaf Q4 2025 |
| **Mercedes-Benz** | eActros 300 | ✅ | Via Fleetboard |
| **Mercedes-Benz** | eEconic | ⚠️ | PnC via OTA-update verwacht Q2 2026 |
| **Scania** | BEV R-serie | ✅ | Via Scania Fleet Management. Firmware 2025.3+ |
| **Scania** | BEV P-serie | ✅ | Via Scania Fleet Management |
| **MAN** | eTGX | ✅ | Via RIO-platform. Volledige PnC vanaf eind 2025 |
| **MAN** | eTGS | ✅ | Via RIO-platform |
| **MAN** | eTGL/eTGM | ⚠️ | PnC-uitrol in uitvoering, raadpleeg dealer |
| **Renault Trucks** | E-Tech T | ⚠️ | ISO 15118-2-hardware aanwezig, PnC-activering via OTA verwacht H1 2026 |
| **Renault Trucks** | E-Tech D | ⚠️ | Zelfde status als E-Tech T |
| **Ford Trucks** | F-MAX Electric | ❌ | ISO 15118 nog niet ondersteund. Alleen RFID/app |
| **IVECO** | S-eWay | ⚠️ | PnC aangekondigd voor modellen van 2026 |

### Legenda

- ✅ **Ondersteund** — PnC werkt vandaag bij Stroomlijnen-laders
- ⚠️ **Binnenkort** — Hardware geschikt, software-update in afwachting
- ❌ **Niet ondersteund** — Gebruik RFID-pas of app

## Elektrische Bestelwagens

| Fabrikant | Model | PnC-ondersteuning | Opmerkingen |
|-------------|-------|:-----------:|-------|
| **Mercedes-Benz** | eSprinter | ✅ | ISO 15118-2 vanaf modeljaar 2025 |
| **Mercedes-Benz** | eVito | ✅ | ISO 15118-2 vanaf modeljaar 2025 |
| **Volvo** | EM90 | ✅ | Via Volvo Connect |
| **Ford** | E-Transit | ⚠️ | Hardware geschikt, PnC-activering verschilt per markt |
| **MAN** | eTGE | ⚠️ | Beperkte PnC-ondersteuning, raadpleeg dealer |
| **Renault** | Master E-Tech | ❌ | Alleen RFID/app |
| **VW** | ID. Buzz Cargo | ⚠️ | PnC via VW-backend, vereist Volkswagen We Charge-contract |
| **Fiat** | E-Ducato | ❌ | Geen ISO 15118-ondersteuning |
| **Maxus** | eDeliver 7 | ❌ | Geen ISO 15118-ondersteuning |

## Personenwagens (CCS DC)

Hoewel Stroomlijnen-laders zijn ontworpen voor bedrijfsvoertuigen, kunnen personenwagens met CCS-stekkers ook laden bij onze stations. PnC-ondersteuning:

| Fabrikant | PnC-ondersteuning | Opmerkingen |
|-------------|:-----------:|-------|
| **BMW** | ✅ | i4, iX, i5, i7 — via BMW Charging |
| **Mercedes-Benz** | ✅ | EQS, EQE, EQA, EQB — via Mercedes me Charge |
| **Porsche** | ✅ | Taycan, Macan Electric — via Porsche Charging Service |
| **Audi** | ✅ | e-tron GT, Q6 e-tron, Q8 e-tron — via myAudi |
| **VW** | ⚠️ | ID.-serie — via Volkswagen We Charge, uitrol gaande |
| **Hyundai/Kia** | ⚠️ | Ioniq 5/6, EV6/9 — PnC verschilt per markt en firmware |
| **Tesla** | ❌ | Gebruikt eigen Supercharger PnC, CCS PnC niet ondersteund |
| **Stellantis-merken** | ❌ | Geen ISO 15118 PnC op huidige modellen |

:::tip
Zelfs zonder PnC kunnen alle voertuigen met een **CCS Combo 2**-stekker laden bij Stroomlijnen-locaties via een RFID-pas of de Stroomlijnen-app. PnC verwijdert simpelweg de noodzaak voor handmatige authenticatie.
:::

## Uw Voertuig Controleren

1. **Controleer uw OEM-portaal** — Volvo Connect, DAF Connect, Fleetboard, RIO of Scania Fleet Management toont "Plug & Charge" of "ISO 15118"-instellingen
2. **Controleer de firmwareversie** — Zorg dat uw voertuig de nieuwste firmware heeft (zie [merkspecifieke handleidingen](./brand-guides/volvo-trucks))
3. **Neem contact op met uw dealer** — Zij kunnen ISO 15118-mogelijkheid bevestigen en certificaten installeren indien nodig
4. **Neem contact op met Stroomlijnen** — We kunnen compatibiliteit controleren wanneer u registreert in ons portaal

## Uw Voertuig Staat Niet Vermeld?

Als uw vrachtwagen of bestelwagen niet vermeld staat, kan het toch werken. Nieuwe modellen en firmware-updates worden regelmatig uitgebracht. Neem contact met ons op via [info@stroomlijnen.nl](mailto:info@stroomlijnen.nl) met het merk, model en VIN van uw voertuig, dan zullen we het onderzoeken.

---

**Volgende:** [Installatiehandleiding →](./setup-guide)
