---
sidebar_position: 3
title: Mercedes-Benz Trucks — Plug & Charge Instellen
description: Stapsgewijze handleiding voor het inschakelen van Plug & Charge op Mercedes-Benz eActros en eEconic-vrachtwagens via Fleetboard.
keywords: [Mercedes-Benz, eActros, eEconic, Fleetboard, Plug and Charge, ISO 15118, Daimler Truck]
---

# Mercedes-Benz Trucks — Plug & Charge Instellen

Mercedes-Benz (Daimler Truck) ondersteunt ISO 15118-2 Plug & Charge op de eActros 600 en eActros 300. De eEconic zal naar verwachting PnC-ondersteuning ontvangen via een OTA-update in Q2 2026. De configuratie wordt beheerd via het Fleetboard-platform.

## Ondersteunde Modellen

| Model | Accuopties | Max. DC-laden | PnC Klaar |
|-------|-----------|---------------|:---------:|
| eActros 600 | Tot 621 kWh | 400 kW (MCS/CCS) | ✅ |
| eActros 300 | Tot 336 kWh | 160 kW (CCS) | ✅ |
| eEconic | Tot 336 kWh | 160 kW (CCS) | ⚠️ Q2 2026 |

## Vereisten

- Fleetboard-account met beheerderstoegang voor vlootbeheer
- eActros-firmware met eMobility-module (standaard meegeleverd sinds Q4 2025)
- Stroomlijnen-vlootaccount met PnC ingeschakeld ([Installatiehandleiding](../setup-guide))

## Stap voor Stap: Fleetboard

### 1. Toegang tot eMobility-instellingen

1. Log in op [Fleetboard](https://fleetboard.com)
2. Navigeer naar **eMobility** → **Laadbeheer**
3. Als u het nieuwe **Daimler Truck Digital**-portaal gebruikt, ga naar **Diensten** → **Laadbeheer**

### 2. Stroomlijnen Toevoegen als Aanbieder

1. Klik in Laadbeheer op **Laadaanbieders**
2. Klik op **Aanbieder toevoegen**
3. Zoek op **"Stroomlijnen B.V."** (of gebruik eMSP-ID `NL-STM`)
4. Klik op **Verbinden**
5. Accepteer de gegevensdeling-voorwaarden (voertuig-ID en certificaatuitwisseling)

### 3. Voertuigen Registreren voor PnC

1. Ga naar **Laadbeheer** → **Voertuig PnC-instellingen**
2. Doe het volgende voor elke eActros die u wilt inschakelen:
   - Klik op de voertuigrij
   - Zet **Plug & Charge** op AAN
   - Selecteer **Stroomlijnen** als voorkeurzaadaanbieder (of een van meerdere)
3. Klik op **Wijzigingen opslaan**

### 4. Certificaatuitrol

Na opslaan:
1. Fleetboard initieert het certificaatverzoek bij Stroomlijnen
2. Het contractcertificaat wordt gegenereerd door onze backend
3. Het wordt naar de vrachtwagen gepusht via de telematica-eenheid van Daimler Truck
4. **Typische uitroltijd: 2–6 uur**
5. De vrachtwagen moet online zijn (contact aan of aangesloten op lader)

### 5. Verifieer in Beide Portalen

- **Fleetboard** → eMobility → Voertuig → PnC-status: moet "Certificaat Actief" tonen
- **Stroomlijnen Mijn Vloot** → Voertuig → Plug & Charge: moet "✅ Actief" tonen

### 6. Eerste Sessie

Verbind de eActros met een Stroomlijnen-lader. Het dashboard van de eActros toont de authenticatiestatus "Plug & Charge". Het laden zou automatisch moeten starten binnen 5–10 seconden.

## Meerdere Laadaanbieders

Mercedes-Benz ondersteunt meerdere PnC-aanbieders tegelijkertijd. U kunt Stroomlijnen-certificaten naast certificaten van andere aanbieders op hetzelfde voertuig hebben. De vrachtwagen gebruikt het juiste certificaat op basis van het netwerk van de lader.

## Fleetboard versus Daimler Truck Digital

Daimler Truck stapt over van Fleetboard naar het nieuwe **Daimler Truck Digital**-platform. Beide portalen ondersteunen momenteel PnC-beheer:

- **Fleetboard (legacy):** Volledige PnC-ondersteuning, goed gedocumenteerd
- **Daimler Truck Digital (nieuw):** PnC beschikbaar onder Diensten → Laadbeheer

Als u tussen platforms migreert, worden PnC-instellingen automatisch overgedragen.

## Probleemoplossing

### Sectie "eMobility" niet beschikbaar in Fleetboard
- Zorg dat uw Fleetboard-abonnement de eMobility-module bevat
- De eMobility-module is inbegrepen in Fleetboard Premium voor elektrische voertuigen
- Neem contact op met uw Mercedes-Benz-dealer ter verificatie

### Certificaat toont gedurende langere periode "In behandeling"
1. Zorg dat de vrachtwagen minimaal 2 uur online is geweest
2. Controleer Fleetboard → Meldingen op eventuele wachtende goedkeuringen
3. Verifieer dat de telematica-eenheid van Daimler Truck mobiele netwerkverbinding heeft (controleer antenne in vrachtwagen)
4. Neem contact op met Stroomlijnen-support voor backendverificatie

### eActros 600 met MCS-connector
De eActros 600 ondersteunt zowel CCS als MCS (Megawatt Charging System). PnC werkt op beide connectortypen op Stroomlijnen-locaties. MCS-laders worden in 2026 ingezet op geselecteerde locaties.

---

**Volgende:** [Andere Vrachtwagens →](./other-trucks)
