---
sidebar_position: 3
title: Mercedes-Benz Trucks — Plug & Charge Instellen
description: Stapsgewijze handleiding voor het activeren van Plug & Charge op Mercedes-Benz eActros en eEconic vrachtwagens via Fleetboard.
keywords: [Mercedes-Benz, eActros, eEconic, Fleetboard, Plug and Charge, ISO 15118, Daimler Truck]
---

# Mercedes-Benz Trucks — Plug & Charge Instellen

Mercedes-Benz (Daimler Truck) ondersteunt ISO 15118-2 Plug & Charge op de eActros 600 en eActros 300. De eEconic krijgt naar verwachting PnC-ondersteuning via OTA-update in Q2 2026. Configuratie verloopt via het Fleetboard-platform.

## Ondersteunde Modellen

| Model | Accu-opties | Max DC-laden | PnC-gereed |
|-------|----------------|-----------------|:---------:|
| eActros 600 | Tot 621 kWh | 400 kW (MCS/CCS) | ✅ |
| eActros 300 | Tot 336 kWh | 160 kW (CCS) | ✅ |
| eEconic | Tot 336 kWh | 160 kW (CCS) | ⚠️ Q2 2026 |

## Vereisten

- Fleetboard-account met vlootbeheerdersrechten
- eActros-firmware met eMobility-module (standaard geleverd sinds Q4 2025)
- Stroomlijnen-vlootaccount met PnC ingeschakeld ([Installatiehandleiding](../setup-guide))

## Stapsgewijze Handleiding: Fleetboard

### 1. Toegang tot eMobility-instellingen

1. Log in op [Fleetboard](https://fleetboard.com)
2. Navigeer naar **eMobility** → **Laadbeheer**
3. Als u het nieuwe **Daimler Truck Digital**-portaal gebruikt, ga naar **Diensten** → **Laadbeheer**

### 2. Stroomlijnen als Aanbieder Toevoegen

1. Klik in Laadbeheer op **Laadaanbieders**
2. Klik op **Aanbieder toevoegen**
3. Zoek naar **"Stroomlijnen B.V."** (of gebruik EMSP-ID `NL-STM`)
4. Klik op **Verbinden**
5. Accepteer de voorwaarden voor gegevensdeling (voertuig-ID en certificaatuitwisseling)

### 3. Voertuigen Registreren voor PnC

1. Ga naar **Laadbeheer** → **Voertuig PnC-instellingen**
2. Voor elke eActros die u wilt inschakelen:
   - Klik op de voertuigrij
   - Zet **Plug & Charge** op AAN
   - Selecteer **Stroomlijnen** als voorkeurs-laadaanbieder (of één van meerdere)
3. Klik op **Wijzigingen opslaan**

### 4. Certificaatuitrol

Na het opslaan:
1. Fleetboard initieert het certificaatverzoek bij Stroomlijnen
2. Het contractcertificaat wordt gegenereerd door onze backend
3. Het wordt naar de vrachtwagen gepusht via de Daimler Truck telematica-unit
4. **Typische uitroltijd: 2–6 uur**
5. De vrachtwagen moet online zijn (contact aan of aangesloten op lader)

### 5. Verifieer in Beide Portalen

- **Fleetboard** → eMobility → Voertuig → PnC-status: moet "Certificaat actief" tonen
- **Stroomlijnen Mijn Vloot** → Voertuig → Plug & Charge: moet "✅ Actief" tonen

### 6. Eerste Sessie

Sluit de eActros aan op een Stroomlijnen-lader. Het eActros-dashboard toont de Plug & Charge-authenticatiestatus. Het laden zou automatisch moeten starten binnen 5–10 seconden.

## Meerdere Laadaanbieders

Mercedes-Benz ondersteunt meerdere PnC-aanbieders tegelijkertijd. U kunt Stroomlijnen-certificaten naast certificaten van andere aanbieders op hetzelfde voertuig hebben. De vrachtwagen gebruikt het juiste certificaat op basis van het netwerk van de lader.

## Fleetboard vs. Daimler Truck Digital

Daimler Truck maakt de overgang van Fleetboard naar het nieuwe **Daimler Truck Digital**-platform. Beide portalen ondersteunen momenteel PnC-beheer:

- **Fleetboard (legacy):** Volledige PnC-ondersteuning, goed gedocumenteerd
- **Daimler Truck Digital (nieuw):** PnC beschikbaar onder Diensten → Laadbeheer

Als u migreert tussen platformen, worden PnC-instellingen automatisch overgenomen.

## Probleemoplossing

### Sectie "eMobility" niet beschikbaar in Fleetboard
- Controleer of uw Fleetboard-abonnement de eMobility-module bevat
- De eMobility-module is inbegrepen bij Fleetboard Premium voor elektrische voertuigen
- Neem contact op met uw Mercedes-Benz-dealer ter verificatie

### Certificaat toont "In behandeling" voor langere periode
1. Zorg dat de vrachtwagen ten minste 2 uur online is geweest
2. Controleer Fleetboard → Meldingen op eventuele wachtende goedkeuringen
3. Controleer of de Daimler Truck telematica-unit mobiele netwerkverdekking heeft (controleer antenne in de vrachtwagen)
4. Neem contact op met Stroomlijnen-ondersteuning voor backend-verificatie

### eActros 600 met MCS-connector
De eActros 600 ondersteunt zowel CCS als MCS (Megawatt Charging System). PnC werkt op beide connectortypes bij Stroomlijnen-locaties. MCS-laders worden in 2026 uitgerold op geselecteerde locaties.

---

**Volgende:** [Overige Vrachtwagens →](./other-trucks)
