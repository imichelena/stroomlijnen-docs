---
sidebar_position: 100
title: FAQ
description: Veelgestelde vragen over Stroomlijnen elektrisch vrachtwagenopladen — Plug & Charge, tarieven, RFID, vlootbeheer en meer.
keywords: [FAQ, frequently asked questions, EV charging, Plug and Charge, fleet charging, RFID, pricing]
---

# Veelgestelde Vragen

## Algemeen

### 1. Wat is Stroomlijnen?
Stroomlijnen is een Nederlandse Charge Point Operator (CPO) en e-Mobility Service Provider (eMSP) gespecialiseerd in hoogvermogen DC-laden voor elektrische vrachtwagens. We plaatsen laadinfrastructuur bij theaters, logistieke hubs en strategische locaties door heel Nederland.

### 2. Waarom theaters?
Theaters beschikken over grote elektriciteitsaansluitingen (voor belichting, geluid en toneelinstallaties), parkeerplaatsen die toegankelijk zijn voor vrachtwagens (voor leveringen van toneelsets) en zijn 's nachts beschikbaar wanneer vrachtwagens doorgaans laden. Een logische combinatie — we maken gebruik van bestaande infrastructuur die anders 's nachts onbenut zou blijven.

### 3. Welke voertuigen kunnen laden bij Stroomlijnen?
Elk voertuig met een **CCS Combo 2**-stekker kan laden bij onze DC-stations. Dat omvat elektrische vrachtwagens, bestelwagens, bussen en personenwagens. Onze laders leveren tot 400 kW, maar passen zich aan het maximale vermogen aan dat het voertuig aankan.

### 4. Waar staan Stroomlijnen-laders?
Voornamelijk in Nederland, met uitbreiding gepland naar België en Duitsland. Bekijk onze [laderskaart](./locations/finding-charger) voor alle huidige locaties.

### 5. Kunnen personenwagens gebruikmaken van uw laders?
Ja. Hoewel onze laders zijn ontworpen en gepositioneerd voor bedrijfsvoertuigen, kan elke CCS-uitgeruste auto ook laden. Houd er rekening mee dat vrachtwagenvakken hogere randen of een andere indeling kunnen hebben dan een gewoon laadstation voor personenwagens.

## Plug & Charge

### 6. Wat is Plug & Charge?
Plug & Charge betekent dat uw vrachtwagen automatisch authenticeert en begint met laden zodra u de kabel aansluit — geen pas, geen app, geen actie van de bestuurder. Het maakt gebruik van ISO 15118-digitale certificaten die in het voertuig zijn ingebouwd. Zie [Wat is Plug & Charge?](./plug-and-charge/what-is-pnc) voor meer details.

### 7. Is Plug & Charge veilig?
Ja — zelfs veiliger dan RFID-passen. PnC gebruikt TLS-wederzijdse authenticatie en digitale certificaten (dezelfde technologie als internetbankieren). Certificaten zijn gekoppeld aan het VIN van het voertuig en opgeslagen in een hardwarebeveiligingsmodule, waardoor klonen uiterst moeilijk is.

### 8. Welke vrachtwagens ondersteunen Plug & Charge?
De meeste grote elektrische vrachtwagenfabrikanten ondersteunen nu PnC: Volvo, DAF, Mercedes-Benz, Scania en MAN. Zie onze [lijst met compatibele voertuigen](./plug-and-charge/compatible-vehicles) voor de volledige details.

### 9. Hoe lang duurt het instellen van Plug & Charge?
Ongeveer 15 minuten portaalconfiguratie, daarna 1–24 uur voor de installatie van het certificaat in het voertuig (afhankelijk van de fabrikant). Zie de [installatiehandleiding](./plug-and-charge/setup-guide).

### 10. Kan ik Plug & Charge EN RFID tegelijk gebruiken?
Ja. PnC en RFID kunnen naast elkaar bestaan. Als PnC om welke reden dan ook mislukt, kan de bestuurder altijd terugvallen op het tikken van de RFID-pas. De lader probeert eerst PnC; als PnC binnen 15 seconden niet authenticeert, wordt om een RFID-pas gevraagd.

## Tarieven en facturering

### 11. Wat kost laden?
Vlootklanten ontvangen een contractueel €/kWh-tarief. Er zijn geen sessiekosten of tijdgebonden kosten — u betaalt alleen voor verbruikte energie. Neem contact op voor een vlootprijsvoorstel.

### 12. Hoe werkt de facturering?
Maandelijkse facturen met uitgesplitste sessiegegevens, beschikbaar als PDF, CSV of UBL XML. Facturen worden op de 1e van elke maand gegenereerd. Zie [Facturering](./fleet-management/invoicing) voor details.

### 13. Biedt u volumekortingen?
Ja. Vloten die maandelijkse energiedrempels overschrijden, komen in aanmerking voor gestaffelde tarieven. Neem contact op met uw accountmanager of stuur een e-mail naar [sales@stroomlijnen.nl](mailto:sales@stroomlijnen.nl) voor details.

### 14. Kunnen roaming-gebruikers laden bij Stroomlijnen?
Ja, via onze Hubject- en OCPI-roamingverbindingen. Gebruikers met laadpassen van andere aanbieders kunnen tikken en laden. Roamingtarieven kunnen afwijken van directe vlooттarieven.

## RFID-passen

### 15. Hoe krijg ik RFID-passen?
Bestel via het [Mijn Vloot-portaal](./getting-started/rfid-cards) of neem contact op met uw accountmanager. Passen worden binnen 3 werkdagen verzonden en vereisen activering.

### 16. Wat als een RFID-pas verloren of gestolen is?
Deactiveer de pas onmiddellijk via Mijn Vloot → RFID-passen → selecteer de pas → Deactiveren. De pas wordt binnen seconden geblokkeerd op alle Stroomlijnen-laders. Bestel een vervanging via het portaal.

### 17. Kan één RFID-pas op meerdere voertuigen werken?
Ja. RFID-passen zijn gekoppeld aan uw vlootaccount, niet aan een specifiek voertuig. Elke pas die aan uw vloot is toegewezen, kan een laadsessie starten op elke lader voor elk van uw voertuigen.

## Technisch

### 18. Welke OCPP-versie gebruiken uw laders?
Alle nieuwe laders gebruiken **OCPP 2.0.1**. Sommige oudere installaties gebruiken OCPP 1.6-J. Beide worden volledig ondersteund door ons CSMS. Zie [OCPP-overzicht](./technical/ocpp-overview).

### 19. Ondersteunen jullie slim laden / taakverdeling?
Ja. Ons CSMS verdeelt het vermogen dynamisch over de laders op elke locatie op basis van netcapaciteit, voertuigprioriteit en optimalisatie op basis van het tijdstip. Zie [OCPP-overzicht → Slim laden](./technical/ocpp-overview#slim-laden).

### 20. Kan ik laadgegevens integreren met mijn vlootbeheersysteem?
Ja. We bieden een REST API met realtime webhooks voor sessiegegevens, voertuigbeheer en facturering. SDK's beschikbaar voor Python, JavaScript en C#. Zie [API & Integratie](./technical/integration).

## Ondersteuning

### Hoe meld ik een defecte lader?
- **App:** Help → Probleem melden → selecteer de lader
- **Telefoon:** Ondersteuningsnummer staat op elke lader
- **E-mail:** [support@stroomlijnen.nl](mailto:support@stroomlijnen.nl)
- **Vermeld:** Lader-ID (formaat: `NL*STM*E...`), tijdstip en omschrijving van het probleem

### Hoe neem ik contact op met Stroomlijnen?
- **Algemene vragen:** [info@stroomlijnen.nl](mailto:info@stroomlijnen.nl)
- **Vlootverkoop:** [sales@stroomlijnen.nl](mailto:sales@stroomlijnen.nl)
- **Technische ondersteuning:** [support@stroomlijnen.nl](mailto:support@stroomlijnen.nl)
- **Technische integratie:** [technical@stroomlijnen.nl](mailto:technical@stroomlijnen.nl)
