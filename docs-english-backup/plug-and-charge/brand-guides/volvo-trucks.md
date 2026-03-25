---
sidebar_position: 1
title: Volvo Trucks — Plug & Charge Instellen
description: Stapsgewijze handleiding voor het inschakelen van Plug & Charge op Volvo FH, FM, FE en FL Electric-vrachtwagens via Volvo Connect.
keywords: [Volvo, FH Electric, FM Electric, Volvo Connect, Plug and Charge, ISO 15118, fleet charging]
---

# Volvo Trucks — Plug & Charge Instellen

Volvo was een van de eerste vrachtwagenproducenten die ISO 15118-2 Plug & Charge volledig ondersteunde. Alle huidige Volvo Electric-modellen (FH, FM, FE, FL) ondersteunen PnC bij firmware v3.2 of hoger.

## Ondersteunde Modellen

| Model | Accuopties | Max. DC-laden | PnC Klaar |
|-------|-----------|---------------|:---------:|
| FH Electric | 540 kWh | 250 kW (CCS) | ✅ |
| FM Electric | 540 kWh | 250 kW (CCS) | ✅ |
| FE Electric | 265 kWh | 150 kW (CCS) | ✅ |
| FL Electric | 265 kWh | 150 kW (CCS) | ✅ |

## Vereisten

- Volvo Connect-vlootbeheeraccount met beheerderstoegang
- Vrachtwagenfiware v3.2 of hoger (controleer in Volvo Connect → Voertuig → Software)
- Stroomlijnen-vlootaccount met PnC ingeschakeld ([Installatiehandleiding](../setup-guide))

## Stap voor Stap: Volvo Connect

### 1. Controleer de Firmwareversie

1. Log in op [Volvo Connect](https://connect.volvotrucks.com)
2. Selecteer uw voertuig uit de vlootlijst
3. Ga naar **Voertuigdetails** → **Software**
4. Verifieer dat de firmwareversie **3.2 of hoger** is
5. Zo niet, neem contact op met uw Volvo-dealer voor een update

### 2. Schakel Laaddiensten In

1. Ga in Volvo Connect naar **Diensten** → **Laaddiensten**
2. Als dit gedeelte niet zichtbaar is, vraag uw Volvo Connect-beheerder om de **eMobility-module** voor uw account in te schakelen
3. Klik op **Laadpartners beheren**

### 3. Autoriseer Stroomlijnen

1. Zoek in de laadpartnerslijst **"Stroomlijnen B.V."**
   - Als deze niet vermeld staat, klik op **Partner toevoegen** en zoek op "Stroomlijnen" of gebruik partnercode `NL-STM`
2. Klik op **Autoriseren**
3. Bekijk de machtigingen:
   - ✅ Certificaatinstallatie — Vereist voor PnC
   - ✅ Voertuigidentificatie — Vereist voor certificaatkoppeling
   - ❌ Locatiegegevens — Niet vereist, u kunt dit weigeren
4. Klik op **Autorisatie bevestigen**

### 4. Selecteer Voertuigen

1. Na autorisatie ziet u een scherm voor voertuigselectie
2. Vink de vakjes aan voor alle vrachtwagens die Stroomlijnen PnC moeten gebruiken
3. Klik op **Toepassen**

### 5. Certificaatinstallatie

Na autorisatie stuurt de backend van Stroomlijnen een certificaatinstallatieverzoek:

1. Het verzoek verschijnt in Volvo Connect → **Meldingen** (doorgaans binnen 30 minuten)
2. Het systeem van Volvo pusht het contractcertificaat naar de vrachtwagen
3. De vrachtwagen moet **online** zijn om het te ontvangen (contact aan, of aangesloten op AC-lader)
4. Installatie is doorgaans voltooid binnen **1–2 uur**

U kunt de voortgang volgen in:
- **Volvo Connect** → Voertuig → Laaddiensten → Certificaatstatus
- **Stroomlijnen Mijn Vloot** → Voertuig → tabblad Plug & Charge

### 6. Verifieer Installatie

Zodra de status "Actief" toont in beide portalen:

1. Rijd naar een Stroomlijnen-lader
2. Sluit de CCS-kabel aan
3. De lader zou "Plug & Charge — Geauthenticeerd" moeten tonen binnen 5–10 seconden
4. Het laden start automatisch

## Firmware-updateprocedure

Als uw vrachtwagen firmware lager dan v3.2 heeft:

1. **Neem contact op met uw Volvo-dealer** voor een firmware-update
2. Updates kunnen worden uitgevoerd bij de dealer (~2 uur)
3. Sommige updates zijn beschikbaar als **OTA (Over-The-Air)** — controleer Volvo Connect → Voertuig → Software-updates
4. Keer na de update terug naar stap 2

:::caution
Probeer de firmware van de vrachtwagen niet zelf bij te werken. Firmware-updates moeten worden uitgevoerd door een erkende Volvo-dealer of via het officiële OTA-kanaal.
:::

## Probleemoplossing

### "Laaddiensten" niet zichtbaar in Volvo Connect
Uw Volvo Connect-abonnement bevat mogelijk niet de eMobility-module. Neem contact op met uw Volvo-dealer of Volvo Connect-support voor activering.

### Certificaat toont meer dan 24 uur "In behandeling"
1. Verifieer dat de vrachtwagen online is geweest (contact aan) gedurende minimaal 30 minuten na het verzoek
2. Controleer Volvo Connect op eventuele openstaande autorisatieverzoeken
3. Neem contact op met Stroomlijnen-support — wij kunnen het certificaatverzoek opnieuw activeren

### PnC mislukt maar certificaat toont "Actief"
1. Controleer het display van de lader op specifieke foutcodes
2. Probeer een andere CCS-kabel (indien meerdere beschikbaar)
3. Zet het contact van de vrachtwagen uit, wacht 30 seconden, zet het aan en verbind opnieuw
4. Zie de algemene [Probleemoplossingshandleiding](../troubleshooting)

### Meerdere Volvo-accounts
Als uw vloot wordt beheerd via meerdere Volvo Connect-accounts (bijv. verschillende dochterondernemingen), moet elk account Stroomlijnen afzonderlijk autoriseren. Neem contact op met uw Stroomlijnen-accountmanager voor multi-account-instelling.

---

**Volgende:** [DAF Instellen →](./daf)
