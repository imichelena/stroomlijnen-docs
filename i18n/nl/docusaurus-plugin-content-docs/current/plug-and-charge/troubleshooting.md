---
sidebar_position: 10
title: Probleemoplossing Plug & Charge
description: Veelvoorkomende Plug & Charge-problemen en oplossingen — van certificaatfouten tot communicatiestoringen bij de lader.
keywords: [Plug and Charge probleemoplossing, PnC-fouten, ISO 15118-problemen, laden mislukt, certificaatfout]
---

# Probleemoplossing Plug & Charge

Wanneer Plug & Charge niet werkt zoals verwacht, valt het probleem doorgaans in een van een paar categorieën: certificaatproblemen, communicatiestoringen of configuratiegebreken. Deze handleiding behandelt de meest voorkomende problemen.

## Snelle Diagnostische Checklist

Voer deze checklist door voordat u in details duikt:

- [ ] Is het voertuig [PnC-compatibel](./compatible-vehicles)?
- [ ] Is de firmware van het voertuig up-to-date?
- [ ] Is PnC ingeschakeld in het Stroomlijnen Mijn Vloot-portaal?
- [ ] Toont de certificaatstatus "Actief" in beide portalen (OEM + Stroomlijnen)?
- [ ] Staat het contact van het voertuig aan of is de accessoiremodus actief?
- [ ] Zit de CCS-kabel volledig in de aansluiting van het voertuig?

## Veelvoorkomende Problemen

### 1. Lader toont "Authenticatie mislukt"

**Symptomen:** Kabel aangesloten, lader probeert PnC maar geeft een authenticatiefout.

**Oorzaken & Oplossingen:**

| Oorzaak | Oplossing |
|---------|----------|
| Certificaat verlopen | Controleer vervaldatum in Mijn Vloot → Voertuig → PnC-tabblad. Verleng indien verlopen. |
| Certificaat nog niet geïnstalleerd | Status kan "In afwachting" tonen. Zorg dat vrachtwagen online is. Wacht tot 24 uur. |
| Certificaat ingetrokken | Als opzettelijk ingetrokken, schakel PnC opnieuw in via het portaal. |
| EMAID niet gesynchroniseerd | Neem contact op met Stroomlijnen-ondersteuning — onze backend moet mogelijk synchroniseren met Hubject. |
| Verkeerd certificaat gepresenteerd | Als meerdere eMSP-certificaten zijn geïnstalleerd, kan de vrachtwagen het verkeerde presenteren. Controleer het OEM-portaal. |

### 2. Lader valt terug op RFID

**Symptomen:** In plaats van PnC vraagt de lader "Tik uw RFID-pas."

**Oorzaken & Oplossingen:**

- **Voertuig start ISO 15118-2 niet:** De communicatiemodule van de vrachtwagen biedt mogelijk PnC niet aan. Start het voertuig opnieuw op en probeer opnieuw.
- **PLC-communicatie mislukt:** Power Line Communication tussen kabel en voertuig komt niet tot stand. Probeer een andere kabel of connector (indien beschikbaar). Maak de CCS-connectorcontacten schoon.
- **PnC van lader tijdelijk uitgeschakeld:** Zelden kan een lader PnC uitgeschakeld hebben voor onderhoud. Probeer een andere lader op dezelfde locatie.

### 3. Certificaatstatus blijft op "In afwachting"

**Symptomen:** U heeft PnC dagen geleden ingeschakeld maar het certificaat is niet geïnstalleerd.

**Oplossingen:**
1. **Zorg dat de vrachtwagen online is geweest** — De vrachtwagen moet aanstaan (contact of accessoiremodus) met mobiele verbinding voor het certificaat te worden afgeleverd
2. **Controleer OEM-portaal** — Er kan een openstaand autorisatieverzoek zijn dat u moet goedkeuren
3. **Controleer vlootportaalrechten** — Zorg dat uw account beheerderstoegang heeft voor PnC-beheer
4. **Installatie opnieuw triggeren** — In Mijn Vloot → Voertuig → PnC-tabblad, klik op **Certificaatverzoek opnieuw verzenden**
5. **Neem contact op met ondersteuning** — Als langer dan 48 uur vastgelopen, neem contact op met zowel Stroomlijnen als uw OEM-dealer

### 4. PnC Werkt Sporadisch

**Symptomen:** PnC werkt bij sommige laders of op bepaalde momenten, maar mislukt willekeurig.

**Mogelijke oorzaken:**

- **Zwak PLC-signaal:** Het Power Line Communication-signaal kan worden beïnvloed door kabelconditie, connectorverslijting of elektromagnetische interferentie. Volledig loskoppelen en opnieuw aansluiten proberen.
- **Softwareglitch voertuig:** Start de vrachtwagen opnieuw op (volledige contactcyclus: uit → 30 seconden wachten → aan).
- **Backend-time-out:** Als onze backend traag reageert, kan de lader een time-out krijgen. Wordt doorgaans opgelost bij opnieuw proberen.
- **Certificaat bijna verlopen:** Sommige systemen hebben strengere validatie wanneer certificaten bijna verlopen. Controleer resterende geldigheid.

### 5. Fout "Contractcertificaat ongeldig"

**Symptomen:** De lader rapporteert specifiek het contractcertificaat als ongeldig.

**Oplossingen:**
1. **Controleer certificaatketen:** Verifieer de certificaatdetails in Mijn Vloot. Als de keten gebroken is (bijv. tussentijdse CA verlopen), neem contact op met Stroomlijnen-ondersteuning.
2. **Tijdsynchronisatie:** Als de klok van het voertuig significant afwijkt, kan certificaatvalidatie mislukken. Dit is zeldzaam op moderne vrachtwagens maar mogelijk na lange opslagperioden.
3. **Root CA-update nodig:** De lader heeft mogelijk een bijgewerkt rootcertificaat nodig. Stroomlijnen beheert dit automatisch, maar tijdens uitrolperioden kunnen er tijdelijke hiaten zijn. Meld het specifieke lader-ID bij ondersteuning.

### 6. Sessie Start Maar Stopt Onmiddellijk

**Symptomen:** PnC authenticeert succesvol, laden start, maar stopt binnen seconden.

**Dit is doorgaans geen PnC-probleem.** De authenticatie werkte — het probleem zit in de laadsessie zelf:

- **Interventie batterijbeheersysteem (BMS):** Het BMS van de vrachtwagen kan laadinname beperken (temperatuur, SoC, celbalancering)
- **Vermogensonderhandeling mislukt:** De lader en het voertuig konden het niet eens worden over laadparameters. Opnieuw proberen — dynamische vermogenstoewijzing kan variëren.
- **Aardlektdetectie:** Beveiligingssysteem detecteerde een probleem. Loskoppelen, kabel en connector inspecteren op vocht of vuil, opnieuw proberen.

## Foutcodes

Als de lader een specifieke foutcode toont, noteer die dan en neem contact op met ondersteuning. Veelvoorkomende codes:

| Code | Betekenis | Actie |
|------|---------|--------|
| AUTH-001 | Geen geldig contractcertificaat gevonden | Controleer certificaatinstallatie |
| AUTH-002 | Certificaatketenvalidatie mislukt | Neem contact op met ondersteuning |
| AUTH-003 | EMAID niet geautoriseerd | Controleer PnC-status in Mijn Vloot |
| AUTH-004 | Backend communicatie time-out | Wacht 2 minuten, probeer opnieuw |
| COMM-001 | PLC-koppeling mislukt | Kabel opnieuw aansluiten, contacten schoonmaken |
| COMM-002 | ISO 15118-protocolversie mismatch | Firmware voertuig bijwerken |
| COMM-003 | TLS-handshake mislukt | Neem contact op met ondersteuning |

## Diagnostische Informatie Verzamelen

Zorg bij contact met ondersteuning dat u het volgende verstrekt:

1. **Voertuigdetails:** Merk, model, VIN, firmwareversie
2. **Laderdetails:** Locatienaam, lader-ID (gedrukt op het apparaat, formaat: `NL*STM*E...`)
3. **Datum en tijdstip** van de mislukte poging
4. **Foutmelding** of code weergegeven op de lader
5. **Screenshots** van het laderdisplay en/of voertuigdashboard (indien veilig te maken)

## Contact Ondersteuning

- **E-mail:** [support@stroomlijnen.nl](mailto:support@stroomlijnen.nl)
- **Telefoon:** Beschikbaar voor vlootklanten (zie uw contract voor het ondersteuningsnummer)
- **Mijn Vloot-portaal:** Dien een ondersteuningsverzoek in via de Help-sectie

---

**Nog steeds vastgelopen?** Bekijk de [FAQ](../faq) voor meer veelgestelde vragen, of neem contact op met uw Stroomlijnen-accountmanager.
