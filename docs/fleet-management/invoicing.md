---
sidebar_position: 4
title: Facturering
description: Hoe de facturering van Stroomlijnen vlootladen werkt — maandelijkse facturen, kostenspecificaties, betaalmethoden en belastingdocumentatie.
keywords: [invoicing, billing, fleet charging costs, monthly invoice, BTW, kWh pricing, fleet account]
---

# Facturering

Stroomlijnen biedt transparante, gedetailleerde facturering voor alle laadactiviteiten van uw vloot. Facturen worden maandelijks opgesteld en bevatten uitsplitsingen per sessie.

## Tariefmodel

Vlootklanten worden gefactureerd op basis van verbruikte energie:

- **Energiekosten** — €/kWh-tarief conform uw vlootcontract
- **Geen sessiekosten** — In tegenstelling tot publiek laden, rekenen wij geen startkosten per sessie
- **Geen tijdgebonden kosten** — U betaalt voor energie, niet voor parkeertijd
- **Volumekortingen** — Beschikbaar voor vloten die maandelijkse energiedrempels overschrijden (zie uw contract)

Uw contracttarief is zichtbaar in **Mijn Vloot** → **Instellingen** → **Facturering** → **Tariefkaart**.

## Maandelijkse Factuur

Facturen worden op de **1e van elke maand** gegenereerd voor de laadactiviteiten van de vorige maand.

### Factuurinhoud

Elke factuur bevat:

- **Samenvatting** — Totaal energie (kWh), totale kosten (€), aantal sessies, aantal voertuigen
- **Uitsplitsing per voertuig** — Energie en kosten per voertuig
- **Detail per sessie** — Datum, tijd, locatie, EVSE-ID, kWh, kosten, authenticatiemethode
- **Belastingdetails** — BTW (21%) apart berekend en weergegeven
- **Betalingsvoorwaarden** — 14 dagen netto

### Factuurformaten

- **PDF** — Opgemaakt factuurdocument voor uw administratie
- **CSV** — Machineleesbaar detail voor import in boekhouding/ERP-systemen
- **UBL** — Universal Business Language XML voor geautomatiseerde factuurverwerking (Nederlandse standaard)

Alle formaten zijn beschikbaar via **Mijn Vloot** → **Facturering** → **Downloaden**.

## Betaalmethoden

### Automatische incasso (SEPA)
De voorkeursbetaalmethode voor vlootklanten:
1. Ga naar **Instellingen** → **Facturering** → **Betaalmethode**
2. Klik op **Automatische incasso instellen**
3. Voer uw IBAN in en autoriseer het SEPA-mandaat
4. Facturen worden automatisch 14 dagen na uitgifte geïncasseerd

### Bankoverschrijving
Voor klanten die handmatig betalen:
- Betalingsgegevens staan op elke factuur
- Referentie: Factuurnummer (formaat: `STM-2026-XXXXX`)
- Bank: ING Bank, NL
- Vervaldatum: 14 dagen na factuurdatum

## Kostentoewijzing

### Per Kostenplaats
Als uw voertuigen zijn toegewezen aan kostenplaatsen in de Voertuigen-sectie, kunnen facturen kostenplaats-uitsplitsingen bevatten. Dit sluit direct aan op uw interne boekhouding.

### Per Afdeling/Groep
Voertuiggroepen worden weerspiegeld in het factuurdetail, waardoor het eenvoudig is om kosten over afdelingen te verdelen.

### Aangepaste Toewijzing
Heeft u een specifieke toewijzingslogica nodig? We kunnen aangepaste factuurgroeperingen voor uw organisatie configureren. Neem contact op met uw accountmanager.

## Belasting en Compliance

### BTW
- Alle prijzen worden vermeld **exclusief BTW**
- BTW van 21% wordt toegevoegd aan alle facturen
- Het BTW-nummer staat op elke factuur (Stroomlijnen B.V., KVK 93264526)

### Energiebelasting
- Energiebelasting is opgenomen in het kWh-tarief waar van toepassing
- Het tarief hangt af van de netaansluitingscategorie van de locatie
- Dit is transparant — zie uw contract voor de specificatie

### CSRD / ESG-rapportage
Voor bedrijven met duurzaamheidsrapportageverplichtingen:
- We leveren **jaarlijkse energiecertificaten** die het totale verbruik van hernieuwbare energie tonen
- Berekeningen van vermeden CO₂ zijn opgenomen in het jaarlijkse vlootrapport
- Dataformaat compatibel met gangbare ESG-rapportageframeworks

## Geschillen en Correcties

Als u denkt dat een factuur een fout bevat:

1. Ga naar **Facturering** → selecteer de factuur → **Betwisten**
2. Selecteer de betreffende sessie(s)
3. Beschrijf het probleem
4. Ons factureringsteam onderzoekt het en reageert binnen 5 werkdagen
5. Correcties worden verwerkt als tegoed op de volgende factuur

## Historische Facturen

Alle facturen worden **7 jaar** bewaard (Nederlandse wettelijke verplichting) en zijn toegankelijk in het Mijn Vloot-portaal. U kunt ook automatische factuurverzending naar extra e-mailadressen instellen via **Instellingen** → **Facturering** → **Factuurontvangers**.
