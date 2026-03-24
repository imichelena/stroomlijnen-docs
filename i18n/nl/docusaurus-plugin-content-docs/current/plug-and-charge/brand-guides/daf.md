---
sidebar_position: 2
title: DAF Trucks — Plug & Charge Instellen
description: Stapsgewijze handleiding voor het inschakelen van Plug & Charge op DAF XF, XD en XB Electric-vrachtwagens via DAF Connect.
keywords: [DAF, XF Electric, XD Electric, XB Electric, DAF Connect, Plug and Charge, ISO 15118]
---

# DAF Trucks — Plug & Charge Instellen

Het elektrische vrachtwagenassortiment van DAF — onderdeel van de PACCAR-groep — ondersteunt ISO 15118-2 Plug & Charge op alle huidige BEV-modellen. De configuratie wordt beheerd via DAF Connect, het vlootbeheerplatform.

## Ondersteunde Modellen

| Model | Accuopties | Max. DC-laden | PnC Klaar |
|-------|-----------|---------------|:---------:|
| XF Electric | Tot 525 kWh | 350 kW (CCS) | ✅ |
| XD Electric | Tot 350 kWh | 250 kW (CCS) | ✅ |
| XB Electric | Tot 210 kWh | 175 kW (CCS) | ✅ |

## Vereisten

- DAF Connect-vlootbeheeraccount met beheerderstoegang
- Meest recente voertuigsoftware (controleer in DAF Connect → Voertuig → Diagnostiek)
- Stroomlijnen-vlootaccount met PnC ingeschakeld ([Installatiehandleiding](../setup-guide))

## Stap voor Stap: DAF Connect

### 1. Toegang tot Laadinstellingen

1. Log in op [DAF Connect](https://dafconnect.paccar.com)
2. Navigeer naar **Vlootbeheer** → **Elektromobiliteit**
3. Als u de sectie Elektromobiliteit niet ziet, neem contact op met DAF Connect-support om deze voor uw account in te schakelen

### 2. Laadpartners Configureren

1. Ga naar **Elektromobiliteit** → **Laadpartners**
2. Klik op **Laadpartner toevoegen**
3. Zoek op **"Stroomlijnen"** of voer partner-ID `NL-STM` in
4. Klik op **Toevoegen en autoriseren**

### 3. Voertuigen Toewijzen

1. Ga na het toevoegen van Stroomlijnen naar **Laadpartners** → **Stroomlijnen B.V.**
2. Klik op **Voertuigen beheren**
3. Selecteer de vrachtwagens die PnC moeten gebruiken
4. Klik op **Opslaan**

### 4. Certificaatinstallatie Goedkeuren

1. DAF Connect toont een melding voor goedkeuring van certificaatinstallatie
2. Bekijk de verzoekdetails (voertuigen, machtigingen)
3. Klik op **Goedkeuren**
4. De contractcertificaten worden gepusht naar de geselecteerde vrachtwagens

### 5. Wacht op Installatie

- Certificaatlevering duurt doorgaans **4–8 uur**
- De vrachtwagen moet online zijn (contact aan of aangesloten op stroom)
- Volg de status in DAF Connect → **Elektromobiliteit** → **Certificaatstatus**

### 6. Verifieer en Test

1. Controleer status in zowel DAF Connect als Stroomlijnen Mijn Vloot
2. Plug in bij een Stroomlijnen-lader om automatische authenticatie te verifiëren
3. De eerste PnC-sessie bevestigt dat alles werkt

## Opmerking over Activering door Vlootbeheerder

DAF vereist dat de **vlootbeheerder** (niet individuele bestuurders) PnC voor elk voertuig activeert. Dit is een beveiligingsfunctie — alleen bevoegde vlootbeheerders kunnen automatische facturering op bedrijfsvoertuigen inschakelen.

Als uw organisatie meerdere vlootbeheerders heeft:
- Elk kan PnC activeren voor voertuigen onder hun beheer
- Een super-beheerder kan Elektromobiliteit-rechten delegeren

## Probleemoplossing

### Sectie "Elektromobiliteit" niet zichtbaar
Deze functie vereist een DAF Connect Premium-abonnement. Neem contact op met uw DAF-dealer om uw abonnementsniveau te verifiëren.

### Certificaatinstallatie duurt langer dan 24 uur
1. Verifieer dat de vrachtwagen minimaal 1 uur online is geweest na goedkeuring
2. Controleer DAF Connect op foutmeldingen onder Elektromobiliteit → Meldingen
3. Neem contact op met Stroomlijnen-support om te verifiëren of het verzoek aan onze kant ontvangen is

### Authenticatie mislukt bij lader
1. Verifieer in DAF Connect dat de certificaatstatus "Actief" is
2. Controleer of de software van het voertuig up-to-date is
3. Herstart het voertuig (volledige contactcyclus)
4. Zie de algemene [Probleemoplossingshandleiding](../troubleshooting)

---

**Volgende:** [Mercedes-Benz Instellen →](./mercedes-trucks)
