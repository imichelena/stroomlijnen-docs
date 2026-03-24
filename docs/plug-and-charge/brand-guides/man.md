---
sidebar_position: 5
title: MAN Electric — Plug & Charge Instellen
description: Stapsgewijze handleiding voor het inschakelen van Plug & Charge op MAN eTGX en eTGS elektrische vrachtwagens via het RIO-platform.
keywords: [MAN, eTGX, eTGS, RIO, Plug and Charge, ISO 15118, TRATON]
---

# MAN Electric — Plug & Charge Instellen

Het elektrische vrachtwagenassortiment van MAN (onderdeel van de TRATON Groep samen met Scania) ondersteunt ISO 15118-2 Plug & Charge op de eTGX- en eTGS-modellen. De eTGL en eTGM ontvangen PnC-ondersteuning via gefaseerde firmware-uitrol gedurende 2026. De configuratie wordt beheerd via het RIO-platform.

## Ondersteunde Modellen

| Model | Accuopties | Max. DC-laden | PnC Klaar |
|-------|-----------|---------------|:---------:|
| eTGX | Tot 480 kWh | 375 kW (CCS) | ✅ |
| eTGS | Tot 400 kWh | 250 kW (CCS) | ✅ |
| eTGL | Tot 265 kWh | 150 kW (CCS) | ⚠️ Wordt uitgerold |
| eTGM | Tot 265 kWh | 150 kW (CCS) | ⚠️ Wordt uitgerold |

## Vereisten

- RIO-platformaccount met vlootbeheerderaccess
- eTGX/eTGS met meest recente firmware (eind 2025+)
- Stroomlijnen-vlootaccount met PnC ingeschakeld ([Installatiehandleiding](../setup-guide))

## Stap voor Stap: RIO-platform

### 1. Toegang tot Laadbeheer

1. Log in op [RIO](https://rio.cloud)
2. Navigeer naar **Diensten** → **Laadbeheer**
3. Als Laadbeheer niet zichtbaar is, moet het mogelijk geactiveerd worden — ga naar **Marketplace** → zoek op "Laadbeheer" → **Activeren**

### 2. Stroomlijnen Verbinden

1. Ga in Laadbeheer naar **Laadpartners**
2. Klik op **Nieuwe partner verbinden**
3. Zoek op **"Stroomlijnen B.V."** (of gebruik eMSP-ID `NL-STM`)
4. Klik op **Verbinden & Autoriseren**
5. Accepteer de voorwaarden

### 3. Voertuigen Selecteren

1. Na het verbinden toont de partnerpagina uw in aanmerking komende voertuigen
2. Vink de vakjes aan voor vrachtwagens waarvoor PnC ingeschakeld moet worden
3. Klik op **Selectie opslaan**

### 4. Wacht op Certificaatinstallatie

- RIO activeert certificaatprovisioning via het telematicasysteem van MAN
- De vrachtwagen moet online zijn met contact aan
- **Belangrijk:** MAN gebruikt een Hardware Security Module (HSM) voor certificaatopslag. De HSM gaat in "provisioningmodus" gedurende de eerste 30 minuten na het aanzetten van het contact. Als de vrachtwagen geparkeerd staat met contact aan gedurende meer dan 30 minuten zonder het certificaat te ontvangen, zet het contact dan uit en weer aan om de provisioningmodus opnieuw te activeren.
- **Typische installatietijd: 6–24 uur**

### 5. Verifieer

Controleer de certificaatstatus in zowel RIO als Stroomlijnen Mijn Vloot. Test bij een Stroomlijnen-lader.

## HSM Provisioningmodus — Belangrijk

De beveiligingsarchitectuur van MAN gebruikt een hardware security module met een specifiek provisioningvenster:

1. Wanneer het contact van de vrachtwagen wordt aangezet, gaat de HSM gedurende 30 minuten in provisioningmodus
2. Gedurende dit venster kunnen nieuwe certificaten worden geïnstalleerd
3. Na 30 minuten vergrendelt de HSM om onbevoegde certificaatwijzigingen te voorkomen
4. Om het venster opnieuw te openen: contact uitschakelen, 10 seconden wachten, weer aanzetten

**Wat dit in de praktijk betekent:** Als u PnC inschakelt in het RIO-portaal terwijl de vrachtwagen een rit rijdt, wordt het certificaat in de wachtrij geplaatst en geïnstalleerd de volgende keer dat de vrachtwagen opstart (binnen het eerste venster van 30 minuten).

## TRATON Groep-integratie

MAN en Scania maken allebei deel uit van de TRATON Groep en delen enige backend-infrastructuur. Echter:

- Elk merk heeft zijn eigen vlootportaal (RIO voor MAN, My Scania voor Scania)
- PnC moet afzonderlijk worden geconfigureerd in elk portaal
- Certificaten zijn merkspecifiek en niet overdraagbaar

## Probleemoplossing

| Probleem | Oplossing |
|---------|----------|
| "Laadbeheer" niet in RIO | Activeer het vanuit de RIO Marketplace |
| Certificaat in behandeling > 24 uur | Contactcyclus uitvoeren om HSM-provisioningmodus opnieuw te activeren |
| eTGL/eTGM toont "PnC niet beschikbaar" | Firmware-update mogelijk in behandeling — controleer bij MAN-dealer |
| PnC werkt eenmalig dan mislukt | HSM heeft mogelijk een verbindingsprobleem — diagnostiek door dealer vereist |

---

**Volgende:** [Andere Vrachtwagens →](./other-trucks)
