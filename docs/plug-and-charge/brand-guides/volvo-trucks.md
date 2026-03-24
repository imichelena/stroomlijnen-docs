---
sidebar_position: 1
title: Volvo Trucks — Plug & Charge Instellen
description: Stapsgewijze handleiding voor het activeren van Plug & Charge op Volvo FH, FM, FE en FL Electric vrachtwagens via Volvo Connect.
keywords: [Volvo, FH Electric, FM Electric, Volvo Connect, Plug and Charge, ISO 15118, fleet charging]
---

# Volvo Trucks — Plug & Charge Instellen

Volvo was een van de eerste vrachtwagenproducenten die ISO 15118-2 Plug & Charge volledig ondersteunt. Alle huidige Volvo Electric-modellen (FH, FM, FE, FL) ondersteunen PnC met firmware v3.2 of hoger.

## Ondersteunde Modellen

| Model | Accu-opties | Max DC-laden | PnC-gereed |
|-------|----------------|-----------------|:---------:|
| FH Electric | 540 kWh | 250 kW (CCS) | ✅ |
| FM Electric | 540 kWh | 250 kW (CCS) | ✅ |
| FE Electric | 265 kWh | 150 kW (CCS) | ✅ |
| FL Electric | 265 kWh | 150 kW (CCS) | ✅ |

## Vereisten

- Volvo Connect vlootbeheeraccount met beheerdersrechten
- Vrachtwagen-firmware v3.2 of hoger (controleer via Volvo Connect → Voertuig → Software)
- Stroomlijnen-vlootaccount met PnC ingeschakeld ([Installatiehandleiding](../setup-guide))

## Stapsgewijze Handleiding: Volvo Connect

### 1. Firmwareversie Controleren

1. Log in op [Volvo Connect](https://connect.volvotrucks.com)
2. Selecteer uw voertuig uit de vlootlijst
3. Ga naar **Voertuigdetails** → **Software**
4. Controleer of de firmwareversie **3.2 of hoger** is
5. Zo niet, neem contact op met uw Volvo-dealer voor een update

### 2. Laaddiensten Activeren

1. Ga in Volvo Connect naar **Diensten** → **Laaddiensten**
2. Als deze sectie niet zichtbaar is, neem contact op met uw Volvo Connect-beheerder om de **eMobility-module** voor uw account te activeren
3. Klik op **Laadpartners beheren**

### 3. Stroomlijnen Autoriseren

1. Zoek in de laadpartnerslijst naar **"Stroomlijnen B.V."**
   - Als niet vermeld, klik op **Partner toevoegen** en zoek naar "Stroomlijnen" of gebruik partnercode `NL-STM`
2. Klik op **Autoriseren**
3. Controleer de rechten:
   - ✅ Certificaatinstallatie — Vereist voor PnC
   - ✅ Voertuigidentificatie — Vereist voor certificaatbinding
   - ❌ Locatiegegevens — Niet vereist, u kunt weigeren
4. Klik op **Autorisatie bevestigen**

### 4. Voertuigen Selecteren

1. Na autorisatie ziet u een voertuigselectiescherm
2. Vink de vakjes aan voor alle vrachtwagens die Stroomlijnen PnC moeten gebruiken
3. Klik op **Toepassen**

### 5. Certificaatinstallatie

Na autorisatie stuurt de Stroomlijnen-backend een certificaatinstallatieverzoek:

1. Het verzoek verschijnt in Volvo Connect → **Meldingen** (meestal binnen 30 minuten)
2. Volvo's systeem pusht het contractcertificaat naar de vrachtwagen
3. De vrachtwagen moet **online** zijn om het te ontvangen (contact aan, of aangesloten op AC-lader)
4. Installatie is doorgaans voltooid binnen **1–2 uur**

U kunt de voortgang volgen via:
- **Volvo Connect** → Voertuig → Laaddiensten → Certificaatstatus
- **Stroomlijnen Mijn Vloot** → Voertuig → Plug & Charge-tabblad

### 6. Installatie Verifiëren

Als de status "Actief" toont in beide portalen:

1. Rijd naar een Stroomlijnen-lader
2. Sluit de CCS-kabel aan
3. De lader zou "Plug & Charge — Geauthenticeerd" moeten tonen binnen 5–10 seconden
4. Het laden start automatisch

## Firmware-updateproces

Als uw vrachtwagen firmware onder v3.2 draait:

1. **Neem contact op met uw Volvo-dealer** om een firmware-update in te plannen
2. Updates kunnen bij de dealer worden uitgevoerd (duurt ~2 uur)
3. Sommige updates zijn beschikbaar als **OTA (Over-The-Air)** — controleer Volvo Connect → Voertuig → Software-updates
4. Na de update, ga terug naar Stap 2 hierboven

:::caution
Probeer de vrachtwagenfirmware niet zelf bij te werken. Firmware-updates moeten worden uitgevoerd door een geautoriseerde Volvo-dealer of via het officiële OTA-kanaal.
:::

## Probleemoplossing

### "Laaddiensten" niet zichtbaar in Volvo Connect
Uw Volvo Connect-abonnement bevat mogelijk niet de eMobility-module. Neem contact op met uw Volvo-dealer of Volvo Connect-ondersteuning om deze te activeren.

### Certificaat toont "In behandeling" langer dan 24 uur
1. Controleer of de vrachtwagen online is geweest (contact aan) gedurende ten minste 30 minuten sinds het verzoek
2. Controleer Volvo Connect op eventuele wachtende autorisatieverzoeken die u mogelijk heeft gemist
3. Neem contact op met Stroomlijnen-ondersteuning — we kunnen het certificaatverzoek opnieuw triggeren

### PnC mislukt maar certificaat toont "Actief"
1. Controleer het laderdisplay op specifieke foutcodes
2. Probeer een andere CCS-kabel (indien meerdere beschikbaar)
3. Zet het contact uit, wacht 30 seconden, zet aan, en sluit opnieuw aan
4. Zie de algemene [Probleemoplossing](../troubleshooting)

### Meerdere Volvo-accounts
Als uw vloot verspreid is over meerdere Volvo Connect-accounts (bijv. verschillende dochterondernemingen), moet elk account Stroomlijnen apart autoriseren. Neem contact op met uw Stroomlijnen-accountmanager voor het instellen van meerdere accounts.

---

**Volgende:** [DAF Instellen →](./daf)
