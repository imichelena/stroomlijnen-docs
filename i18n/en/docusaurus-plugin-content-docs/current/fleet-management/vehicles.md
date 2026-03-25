---
sidebar_position: 2
title: Voertuigbeheer
description: Hoe u elektrische voertuigen registreert, configureert en beheert in het Stroomlijnen Mijn Vloot-portaal.
keywords: [vehicle management, fleet registration, electric truck, VIN, RFID assignment, charging policy]
---

# Voertuigbeheer

De sectie Voertuigen van Mijn Vloot is de plek waar u vrachtwagens en bestelwagens registreert, hun laadinstellingen configureert en hun status bewaakt.

## Voertuigen Toevoegen

### Enkel Voertuig

1. Ga naar **Voertuigen** → **Voertuig toevoegen**
2. Vul de verplichte velden in:
   - **VIN** — 17-tekens Voertuig Identificatie Nummer
   - **Kenteken** — Nederlands of EU-formaat
   - **Merk & Model** — Selecteer uit het keuzemenu
   - **Bouwjaar** — Modeljaar
   - **Accucapaciteit** — In kWh (automatisch ingevuld voor bekende modellen)
3. Optionele velden:
   - **Bijnaam** — Voor makkelijke herkenning (bijv. "Amsterdam 014")
   - **Afdeling/Groep** — Voor organisatorisch filteren
   - **Kostenplaats** — Voor factuurtoedeling
4. Klik op **Opslaan**

### Bulkimport

Voor vloten met veel voertuigen:

1. Ga naar **Voertuigen** → **Importeren**
2. Download het CSV-sjabloon
3. Vul uw voertuiggegevens in
4. Upload het ingevulde CSV-bestand
5. Controleer het importoverzicht — corrigeer eventuele validatiefouten
6. Klik op **Import bevestigen**

## Voertuigdetails

De detailpagina van elk voertuig toont:

### Status
- **Huidige staat** — Laden / Inactief / Offline
- **Laatst gezien** — Wanneer het voertuig voor het laatst met een lader communiceerde
- **Accuniveau** — Indien gerapporteerd door het voertuig tijdens de laatste sessie

### Laadconfiguratie
- **Authenticatiemethode** — PnC, RFID of beide
- **Plug & Charge-status** — Ingeschakeld/Uitgeschakeld, certificaatstatus
- **Toegewezen RFID-passen** — Welke passen aan dit voertuig zijn gekoppeld
- **Laadbeleid** — Maximum laadsnelheid, gewenst SoC-doel, geplande laadvensters

### Sessiehistorie
- Lijst van alle afgelopen laadsessies voor dit voertuig
- Filteren op datumbereik, locatie of authenticatiemethode
- Totaal energie, totale kosten en gemiddelde sessieduur

### Documenten
- Kentekenbewijs (optioneel uploaden)
- Verzekeringscertificaat (optioneel uploaden)
- Onderhoudsgegevens

## Laadbeleid

U kunt per voertuig of per groep laadbeleid instellen:

### Vermogenslimiet
Stel een maximaal laadvermogen in. Handig voor:
- Accuduurzaamheid (beperken tot 80% van het maximale vermogen)
- Kostenbeheersing (lager vermogen = lagere capaciteitskosten op sommige locaties)

### SoC-doel
Stel een gewenst laadniveau (State of Charge) in. Wanneer bereikt, verlaagt de lader het vermogen of stopt. Dit verlengt de acculevensduur en maakt laders vrij voor andere voertuigen.

### Gepland Laden
Definieer tijdvensters wanneer geladen mag worden. Handig voor:
- Daluurprijzen voor elektriciteit
- Beheer van netbelasting
- Optimalisatie op vertrektijd (laden tot 90% voor 06:00)

### Prioriteit
Wanneer meerdere vlootvoertuigen op dezelfde locatie staan en het vermogen beperkt is, bepalen prioriteitsinstellingen welke voertuigen als eerste volledig vermogen krijgen.

## Voertuiggroepen

Organiseer voertuigen in groepen voor eenvoudiger beheer:

- **Per route** — Amsterdam-routes, Rotterdam-routes
- **Per type** — Langeafstand, regionale bezorging, last-mile
- **Per afdeling** — Operaties, klantbezorging

Groepen kunnen gedeeld laadbeleid en factureringsinstellingen hebben.

## Een Voertuig Uitfaseren

Wanneer een voertuig uw vloot verlaat:

1. Ga naar **Voertuigen** → selecteer voertuig → **Instellingen**
2. Klik op **Voertuig uitfaseren**
3. Dit zal:
   - Alle actieve PnC-certificaten intrekken
   - Alle RFID-passen ontkoppelen
   - De sessiehistorie van het voertuig archiveren (nog steeds toegankelijk voor rapportage)
   - Facturering voor dit voertuig stoppen

Het voertuig kan opnieuw worden geactiveerd als het terugkeert in de vloot.

## Gegevensexport

Exporteer voertuiggegevens voor integratie met uw eigen systemen:

- **Voertuigenlijst** — CSV met alle voertuigdetails
- **Sessiehistorie** — CSV per voertuig of voor alle voertuigen
- **API** — Programmatische toegang tot voertuiggegevens (zie Overzicht Vlootbeheer → API)
