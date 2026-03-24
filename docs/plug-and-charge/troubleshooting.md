---
sidebar_position: 10
title: Plug & Charge Probleemoplossing
description: Veelvoorkomende Plug & Charge-problemen en oplossingen — van certificaatfouten tot communicatiestoringen bij de lader.
keywords: [Plug and Charge troubleshooting, PnC errors, ISO 15118 problems, charging fails, certificate error]
---

# Plug & Charge Probleemoplossing

Wanneer Plug & Charge niet werkt zoals verwacht, valt het probleem meestal in een van de volgende categorieën: certificaatproblemen, communicatiestoringen of configuratielacunes. Deze handleiding behandelt de meest voorkomende problemen.

## Snelle Diagnostische Checklist

Voordat u dieper ingaat, loop deze checklist door:

- [ ] Is het voertuig [PnC-compatibel](./compatible-vehicles)?
- [ ] Is de firmware van het voertuig up-to-date?
- [ ] Is PnC ingeschakeld in het Stroomlijnen Mijn Vloot-portaal?
- [ ] Toont de certificaatstatus "Actief" in beide portalen (OEM + Stroomlijnen)?
- [ ] Staat het contact van het voertuig aan of staat het in accessoiremodus?
- [ ] Zit de CCS-kabel volledig in de aansluiting van het voertuig?

## Veelvoorkomende Problemen

### 1. Lader toont "Authenticatie mislukt"

**Symptomen:** Kabel aangesloten, lader probeert PnC maar toont een authenticatiefout.

**Oorzaken en oplossingen:**

| Oorzaak | Oplossing |
|-------|----------|
| Certificaat verlopen | Controleer vervaldatum via Mijn Vloot → Voertuig → PnC-tabblad. Verleng indien verlopen. |
| Certificaat nog niet geïnstalleerd | Status kan "In behandeling" tonen. Zorg dat de vrachtwagen online is. Wacht maximaal 24 uur. |
| Certificaat ingetrokken | Als bewust ingetrokken, schakel PnC opnieuw in via het portaal. |
| EMAID niet gesynchroniseerd | Neem contact op met Stroomlijnen-ondersteuning — onze backend moet mogelijk synchroniseren met Hubject. |
| Verkeerd certificaat gepresenteerd | Als meerdere eMSP-certificaten zijn geïnstalleerd, presenteert de vrachtwagen mogelijk het verkeerde. Controleer OEM-portaal. |

### 2. Lader Valt Terug op RFID

**Symptomen:** In plaats van PnC vraagt de lader "Tik uw RFID-pas a.u.b."

**Oorzaken en oplossingen:**

- **Voertuig initieert ISO 15118-2 niet:** De communicatiemodule van de vrachtwagen biedt mogelijk geen PnC aan. Herstart het voertuig en probeer opnieuw.
- **PLC-communicatie mislukt:** Power Line Communication tussen kabel en voertuig komt niet tot stand. Probeer een andere kabel of connector (indien beschikbaar). Reinig de CCS-connectorcontacten.
- **Lader PnC tijdelijk uitgeschakeld:** Soms is PnC op een lader uitgeschakeld voor onderhoud. Probeer een andere lader op dezelfde locatie.

### 3. Certificaatstatus Blijft op "In behandeling"

**Symptomen:** U heeft PnC dagen geleden ingeschakeld maar het certificaat is niet geïnstalleerd.

**Oplossingen:**
1. **Zorg dat de vrachtwagen online is geweest** — De vrachtwagen moet aan staan (contact of accessoiremodus) met mobiele verbinding voor de levering van het certificaat
2. **Controleer OEM-portaal** — Er kan een wachtend autorisatieverzoek zijn dat u moet goedkeuren
3. **Controleer portaalrechten** — Zorg dat uw account beheerdersrechten heeft voor PnC-beheer
4. **Trigger installatie opnieuw** — In Mijn Vloot → Voertuig → PnC-tabblad, klik op **Certificaatverzoek opnieuw verzenden**
5. **Neem contact op met ondersteuning** — Als het langer dan 48 uur vastzit, neem contact op met zowel Stroomlijnen als uw OEM-dealer

### 4. PnC Werkt Wisselvallig

**Symptomen:** PnC werkt bij sommige laders of op sommige momenten, maar mislukt willekeurig.

**Mogelijke oorzaken:**

- **Zwak PLC-signaal:** Het Power Line Communication-signaal kan worden beïnvloed door kabelconditie, connectorslijtage of elektromagnetische interferentie. Probeer volledig los te koppelen en opnieuw aan te sluiten.
- **Softwareprobleem voertuig:** Herstart de vrachtwagen (volledige contactcyclus: uit → 30 seconden wachten → aan).
- **Backend-timeout:** Als onze backend langzaam reageert, kan de lader een timeout geven. Lost zich meestal op bij een nieuwe poging.
- **Certificaat nadert vervaldatum:** Sommige systemen valideren strenger als certificaten bijna verlopen. Controleer resterende geldigheid.

### 5. "Contractcertificaat ongeldig" Fout

**Symptomen:** De lader meldt specifiek dat het contractcertificaat ongeldig is.

**Oplossingen:**
1. **Controleer certificaatketen:** Controleer in Mijn Vloot de certificaatdetails. Als de keten gebroken is (bijv. tussenliggende CA verlopen), neem contact op met Stroomlijnen-ondersteuning.
2. **Tijdsynchronisatie:** Als de klok van het voertuig significant verkeerd staat, kan certificaatvalidatie mislukken. Zeldzaam bij moderne vrachtwagens, maar mogelijk na langdurige stalling.
3. **Root CA-update nodig:** De lader heeft mogelijk een bijgewerkt rootcertificaat nodig. Stroomlijnen beheert dit automatisch, maar tijdens uitrolperioden kunnen er tijdelijke lacunes zijn. Meld het specifieke lader-ID bij de ondersteuning.

### 6. Sessie Start Maar Stopt Direct

**Symptomen:** PnC authenticeert succesvol, laden begint, dan stopt het binnen seconden.

**Dit is meestal geen PnC-probleem.** De authenticatie werkte — het probleem zit in de laadsessie zelf:

- **Batteriemanagementsysteem (BMS) interventie:** Het BMS van de vrachtwagen beperkt mogelijk de laadacceptatie (temperatuur, SoC, celbalancering)
- **Vermogensonderhandeling mislukt:** De lader en het voertuig konden niet overeenstemmen over laadparameters. Probeer opnieuw — dynamische vermogenstoewijzing kan variëren.
- **Aardlekdetectie:** Het veiligheidssysteem heeft een probleem gedetecteerd. Ontkoppel, inspecteer kabel en connector op vocht of vuil, probeer opnieuw.

## Foutcodes

Als de lader een specifieke foutcode toont, noteer deze en neem contact op met de ondersteuning. Veelvoorkomende codes:

| Code | Betekenis | Actie |
|------|---------|--------|
| AUTH-001 | Geen geldig contractcertificaat gevonden | Controleer certificaatinstallatie |
| AUTH-002 | Certificaatketen validatie mislukt | Neem contact op met ondersteuning |
| AUTH-003 | EMAID niet geautoriseerd | Controleer Mijn Vloot PnC-status |
| AUTH-004 | Backend-communicatie timeout | Wacht 2 minuten, probeer opnieuw |
| COMM-001 | PLC-verbinding mislukt | Kabel opnieuw aansluiten, contacten reinigen |
| COMM-002 | ISO 15118 protocolversie mismatch | Firmware van voertuig bijwerken |
| COMM-003 | TLS-handshake mislukt | Neem contact op met ondersteuning |

## Diagnostische Informatie Verzamelen

Geef bij contact met de ondersteuning het volgende door:

1. **Voertuigdetails:** Merk, model, VIN, firmwareversie
2. **Laderdetails:** Locatienaam, lader-ID (gedrukt op het apparaat, formaat: `NL*STM*E...`)
3. **Datum en tijd** van de mislukte poging
4. **Foutmelding** of code getoond op de lader
5. **Screenshots** van het laderdisplay en/of voertuigdashboard (indien veilig vast te leggen)

## Contact Ondersteuning

- **E-mail:** [support@stroomlijnen.nl](mailto:support@stroomlijnen.nl)
- **Telefoon:** Beschikbaar voor vlootklanten (zie uw contract voor het ondersteuningsnummer)
- **Mijn Vloot-portaal:** Dien een supportticket in via de Help-sectie

---

**Vastgelopen?** Bekijk de [FAQ](../faq) voor meer veelgestelde vragen, of neem contact op met uw Stroomlijnen-accountmanager.
