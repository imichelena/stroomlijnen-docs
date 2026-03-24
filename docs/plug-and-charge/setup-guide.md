---
sidebar_position: 4
title: Installatiehandleiding Plug & Charge
description: Hoe u Plug & Charge voor uw vloot instelt via het Stroomlijnen-portaal — van registratie tot de eerste geautomatiseerde sessie.
keywords: [Plug and Charge instellen, vlootregistratie, contractcertificaat, Mijn Vloot-portaal, PnC-activering]
---

# Installatiehandleiding Plug & Charge

Plug & Charge instellen voor uw vloot kost ongeveer 15 minuten portaalwerk. Eenmaal geconfigureerd authenticeert elke geregistreerde vrachtwagen automatisch en laadt hij op elke Stroomlijnen-locatie — geen passen, geen apps.

## Vereisten

Voordat u begint:

- [ ] Een **Stroomlijnen-vlootaccount** (registreer via [stroomlijnen.nl](https://stroomlijnen.nl) of neem contact op met uw accountmanager)
- [ ] De **VIN-nummers** van uw vrachtwagens (Vehicle Identification Numbers)
- [ ] Toegang tot uw OEM-vlootportaal (Volvo Connect, DAF Connect, Fleetboard, enz.)
- [ ] Een **compatibel voertuig** (zie [Compatibele Voertuigen](./compatible-vehicles))

## Stap 1: Inloggen op Mijn Vloot

Navigeer naar **my.stroomlijnen.nl** en log in met uw vlootbeheerdergegevens.

Als u nog geen account heeft:
1. Klik op **Registreren** en vul uw bedrijfsgegevens in (KVK-nummer, factuuradres)
2. U ontvangt een verificatie-e-mail — klik op de link
3. Uw account wordt beoordeeld en geactiveerd binnen één werkdag

## Stap 2: Uw Voertuigen Toevoegen

In het Mijn Vloot-dashboard:

1. Ga naar **Voertuigen** → **Voertuig toevoegen**
2. Voer de voertuiggegevens in:
   - **VIN** — 17-tekens Voertuig Identificatie Nummer (op het deurkozijn van de bestuurder of op het kentekenbewijs)
   - **Kenteken** — Voor identificatie en rapportage
   - **Merk/Model** — Selecteer uit het keuzemenu (bijv. Volvo FH Electric)
   - **Bijnaam** — Optioneel, voor eenvoudige herkenning (bijv. "Truck 014 — Amsterdam route")
3. Klik op **Opslaan & Doorgaan**

Herhaal dit voor elke vrachtwagen in uw vloot. U kunt ook **bulksgewijs importeren** via CSV-upload.

### CSV-formaat

```csv
vin,kenteken,merk,model,bijnaam
YV2RT60A1PB123456,AB-123-C,Volvo,FH Electric,Truck 014
XLRAE75PC0H987654,DE-456-F,DAF,XF Electric,Truck 022
```

## Stap 3: Plug & Charge Inschakelen

Voor elk voertuig:

1. Ga naar **Voertuigen** → selecteer een voertuig → tabblad **Plug & Charge**
2. Zet **Plug & Charge inschakelen** op AAN
3. Het systeem zal:
   - Een **Contractcertificaat** genereren voor dit voertuig
   - Installatie aanvragen via de Certificate Provisioning Service van de OEM
   - Status weergeven: `In afwachting → Installeren → Actief`

:::note Installatietijd Certificaat
Certificaatinstallatie duurt doorgaans **1–24 uur**, afhankelijk van de OEM:
- **Volvo**: Doorgaans binnen 2 uur via Volvo Connect
- **DAF**: 4–8 uur via DAF Connect
- **Mercedes-Benz**: 2–6 uur via Fleetboard
- **Scania**: 4–12 uur via Scania Fleet Management
- **MAN**: 6–24 uur via het RIO-platform

De vrachtwagen moet **online** zijn (contact aan of aangesloten op lading) voor het certificaat te worden afgeleverd.
:::

## Stap 4: Autoriseren via OEM-portaal

Sommige OEM's vereisen dat u diensten van derden voor PnC goedkeurt in hun vlootportaal:

### Volvo Connect
1. Log in op Volvo Connect → **Diensten** → **Laaddiensten**
2. Zoek "Stroomlijnen B.V." in de partnerlijst en klik op **Autoriseren**
3. Bevestig de op te nemen voertuigen
4. Zie de [Volvo-merkhandleiding](./brand-guides/volvo-trucks) voor gedetailleerde stappen

### DAF Connect
1. Log in op DAF Connect → **Instellingen** → **Laadpartners**
2. Schakel Stroomlijnen in en selecteer voertuigen
3. Zie de [DAF-merkhandleiding](./brand-guides/daf) voor gedetailleerde stappen

### Mercedes-Benz Fleetboard
1. Log in op Fleetboard → **eMobility** → **Laadmanagement**
2. Voeg Stroomlijnen toe als laadaanbieder
3. Zie de [Mercedes-merkhandleiding](./brand-guides/mercedes-trucks) voor gedetailleerde stappen

## Stap 5: Activering Verifiëren

Zodra het certificaat is geïnstalleerd:

1. In Mijn Vloot → **Voertuigen** → selecteer voertuig → tabblad **Plug & Charge**
2. Status moet weergeven: **✅ Actief**
3. Certificaatdetails worden getoond:
   - EMAID (e-Mobility Account Identifier)
   - Vervaldatum certificaat
   - Laatste succesvolle PnC-sessie (indien aanwezig)

## Stap 6: Testen

Rijd naar een Stroomlijnen-locatie en sluit de kabel aan. De laadsessie moet binnen 5–10 seconden starten zonder handmatige actie.

**Waar op te letten:**
- Het laderdisplay toont "Plug & Charge — Geverifieerd" (of vergelijkbaar)
- Sessie verschijnt in Mijn Vloot → **Sessies** binnen 1 minuut
- Geen RFID-tik of app-actie was nodig

## Probleemoplossing Instelling

| Probleem | Oplossing |
|---------|----------|
| Certificaatstatus blijft op "In afwachting" | Zorg dat de vrachtwagen online is (contact aan). Controleer OEM-portaal op openstaande autorisaties. |
| OEM-portaal toont Stroomlijnen niet | Neem contact met ons op — mogelijk moeten we de backendverbinding voor uw specifieke OEM-account tot stand brengen. |
| Certificaat geïnstalleerd maar PnC mislukt | Zie de [Probleemoplossingshandleiding](./troubleshooting) voor gedetailleerde diagnostiek. |
| Fout "EMAID niet gevonden" op lader | Het certificaat is mogelijk nog niet doorgegeven aan onze backend. Wacht 1 uur en probeer opnieuw. |
| Bulkimportfouten | Controleer VIN-formaat (17 tekens, geen O/I/Q), controleer of CSV-codering UTF-8 is. |

## Certificaten Beheren

### Verlenging
Contractcertificaten verlopen na **2 jaar**. Het Mijn Vloot-portaal stuurt e-mailmeldingen 60, 30 en 7 dagen voor het verlopen. Verlenging is automatisch als uw vlootabonnement actief is.

### Intrekking
Als een vrachtwagen wordt verkocht, gestolen of buiten gebruik gesteld:
1. Ga naar **Voertuigen** → selecteer voertuig → tabblad **Plug & Charge**
2. Klik op **Certificaat intrekken**
3. Het certificaat wordt onmiddellijk ongeldig gemaakt op alle verbonden laadnetwerken

### Overdracht
Wanneer een vrachtwagen naar een andere factureringsentiteit binnen uw organisatie overgaat:
1. Trek het huidige certificaat in
2. Registreer het voertuig opnieuw onder de nieuwe factureringsentiteit
3. Een nieuw certificaat wordt verstrekt

---

**Volgende:** [Merkhandleidingen →](./brand-guides/volvo-trucks)
