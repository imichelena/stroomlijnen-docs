---
sidebar_position: 4
title: Scania BEV — Plug & Charge Instellen
description: Stapsgewijze handleiding voor het inschakelen van Plug & Charge op Scania R-serie en P-serie BEV-vrachtwagens via Scania Fleet Management.
keywords: [Scania, BEV, R-series, P-series, Scania Fleet Management, Plug and Charge, ISO 15118]
---

# Scania BEV — Plug & Charge Instellen

De batterij-elektrische vrachtwagens van Scania (R-serie en P-serie BEV) ondersteunen ISO 15118-2 Plug & Charge met firmwareversie 2025.3 of hoger. PnC wordt beheerd via het Scania Fleet Management-portaal.

## Ondersteunde Modellen

| Model | Accuopties | Max. DC-laden | PnC Klaar |
|-------|-----------|---------------|:---------:|
| R-serie BEV | Tot 624 kWh | 375 kW (CCS) | ✅ (fw 2025.3+) |
| P-serie BEV | Tot 416 kWh | 250 kW (CCS) | ✅ (fw 2025.3+) |

## Vereisten

- Scania Fleet Management-account met beheerderstoegang
- Vrachtwagenfiware versie 2025.3 of hoger
- Stroomlijnen-vlootaccount met PnC ingeschakeld ([Installatiehandleiding](../setup-guide))

## Stap voor Stap: Scania Fleet Management

### 1. Firmware Verifiëren

1. Log in op [My Scania](https://my.scania.com) (Scania Fleet Management)
2. Selecteer uw voertuig → **Voertuiginfo** → **Softwareversie**
3. Bevestig versie 2025.3 of hoger
4. Als lager, plan een dealerbezoek of controleer op beschikbare OTA-updates onder **Onderhoud** → **Software-updates**

### 2. Elektrificatiediensten Inschakelen

1. Ga in Scania Fleet Management naar **Diensten** → **Elektrificatie**
2. Als dit gedeelte niet zichtbaar is, heeft uw abonnement mogelijk de Elektrificatie-add-on nodig — neem contact op met uw Scania-dealer
3. Klik op **Laadpartnerbeheer**

### 3. Stroomlijnen Toevoegen

1. Klik op **Partner toevoegen**
2. Zoek op **"Stroomlijnen B.V."** of voer eMSP-ID `NL-STM` in
3. Klik op **Verbinden**
4. Bekijk en accepteer de gegevensdelingsovereenkomst (voertuigidentificatie voor certificaatkoppeling)
5. Klik op **Bevestigen**

### 4. Voertuigen Toewijzen

1. Klik na het verbinden van Stroomlijnen op **Voertuigen beheren**
2. Selecteer de vrachtwagens waarvoor PnC ingeschakeld moet worden
3. Klik op **Toepassen**

### 5. Certificaatinstallatie

- De telematicagateway van Scania pusht het contractcertificaat naar het voertuig
- De vrachtwagen moet online zijn (contact aan of aangesloten op lader)
- **Typische installatietijd: 4–12 uur**
- Volg de voortgang in Scania Fleet Management → Elektrificatie → Certificaatstatus

### 6. Verifieer

1. Controleer de status in zowel Scania Fleet Management als Stroomlijnen Mijn Vloot
2. Plug in bij een Stroomlijnen-lader om te testen
3. Automatische authenticatie zou binnen 5–10 seconden voltooid moeten zijn

## Belangrijke Opmerkingen

### Telematica-SIM
Scania-vrachtwagens hebben een aparte telematicamodule met een eigen mobiele verbinding (onafhankelijk van het infotainmentsysteem). Zorg dat het telematica-SIM-abonnement actief is — certificaatlevering is afhankelijk van deze verbinding, niet van de WiFi van de vrachtwagen.

### Firmware-updates
Scania rolt PnC-gerelateerde firmware-updates geleidelijk per regio uit. Als uw vrachtwagen firmware 2025.2 of eerder heeft, is de PnC-update mogelijk nog niet beschikbaar via OTA. Uw dealer kan het handmatig installeren.

### Meerdere Vloten
Als uw vrachtwagens zijn geregistreerd bij meerdere Scania Fleet Management-accounts (bijv. na overnames), moet elk account Stroomlijnen afzonderlijk autoriseren.

## Probleemoplossing

| Probleem | Oplossing |
|---------|----------|
| "Elektrificatie" niet in menu | Abonnement heeft mogelijk upgrade nodig — neem contact op met Scania-dealer |
| Certificaat vastzit op "In behandeling" | Verifieer dat vrachtwagen online is, telematica-SIM actief, firmware ≥ 2025.3 |
| PnC mislukt bij lader | Herstart vrachtwagen (volledige contactcyclus), probeer opnieuw. Controleer certificaatstatus. |
| "Partner niet gevonden" bij zoeken | Zorg dat u zoekt met de juiste naam of code (NL-STM) |

---

**Volgende:** [MAN Instellen →](./man)
