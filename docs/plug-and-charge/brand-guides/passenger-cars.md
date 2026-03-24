---
sidebar_position: 7
title: Personenwagens — Plug & Charge
description: Hoe Plug & Charge werkt voor personenwagens op Stroomlijnen-laadstations — BMW, Mercedes, Porsche, Audi, VW en meer.
keywords: [passenger cars, Plug and Charge, BMW, Mercedes, Porsche, Audi, VW, CCS, electric car]
---

# Personenwagens — Plug & Charge

Hoewel de laadstations van Stroomlijnen zijn ontworpen voor bedrijfsvoertuigen, kunnen personenwagens met CCS-connectoren ook laden bij onze stations. Veel moderne EV's ondersteunen al Plug & Charge.

## Hoe Het Werkt voor Personenwagens

Plug & Charge voor personenwagens werkt op dezelfde manier als voor vrachtwagens — het voertuig presenteert een digitaal contractcertificaat via ISO 15118, en de lader authenticeert automatisch.

Het verschil zit in **hoe het certificaat in de auto terechtkomt**:
- Auto's krijgen PnC-certificaten doorgaans via de eigen laaddienst van de fabrikant (BMW Charging, Mercedes me Charge, enz.)
- Het PnC-certificaat van de auto kan gekoppeld zijn aan de eMSP van de fabrikant, niet rechtstreeks aan Stroomlijnen
- Roaming via Hubject maakt cross-netwerk PnC mogelijk — het certificaat van de auto werkt bij Stroomlijnen via roaming

## Ondersteunde Merken

| Merk | PnC-methode | Werkt bij Stroomlijnen |
|------|-------------|:----------------------:|
| **BMW** | BMW Charging / Hubject | ✅ Via roaming |
| **Mercedes-Benz** | Mercedes me Charge / Hubject | ✅ Via roaming |
| **Porsche** | Porsche Charging Service / Hubject | ✅ Via roaming |
| **Audi** | myAudi / Hubject | ✅ Via roaming |
| **VW** | Volkswagen We Charge | ⚠️ Uitrol loopt |
| **Hyundai** | Hyundai Bluelink | ⚠️ Marktafhankelijk |
| **Kia** | Kia Connect | ⚠️ Marktafhankelijk |
| **Tesla** | Eigen Supercharger PnC | ❌ Niet via ISO 15118 |
| **Stellantis** | — | ❌ Nog niet ondersteund |

### Hoe Roaming PnC Werkt

1. U activeert PnC in de app van uw autofabrikant (bijv. BMW Charging in de My BMW-app)
2. De fabrikant installeert een contractcertificaat in uw auto
3. Wanneer u inplugt bij een Stroomlijnen-lader, presenteert de auto zijn certificaat
4. Onze lader valideert het via de certificaatpool van Hubject
5. De sessie wordt geautoriseerd en gefactureerd via de laaddienst van uw fabrikant
6. U ziet de sessie in de app van uw fabrikant (en wij zien hem in onze backend)

**Let op tarieven:** Bij laden via roaming PnC geldt de prijs van uw eMSP (bijv. BMW Charging-tarieven), niet de vlooттarieven van Stroomlijnen. Voor de beste prijzen op Stroomlijnen-locaties kunt u overwegen een direct vlootaccount aan te vragen.

## Directe PnC voor Personenwagens

Als u een vloot personenwagens beheert (zakelijke auto's, bijvoorbeeld), kunt u directe Stroomlijnen PnC instellen:

1. Registreer de voertuigen in Mijn Vloot (zelfde procedure als voor vrachtwagens)
2. Schakel PnC in voor elk voertuig
3. Voor ondersteunde merken (BMW, Mercedes, Audi) pusht ons CPS certificaten via de OEM-backend
4. U ontvangt de directe vlootprijzen van Stroomlijnen in plaats van roamingtarieven

Dit is met name waardevol voor zakelijke wagenparken waarbij kostenbeheer van belang is.

## Praktische Opmerkingen

### Fysieke Compatibiliteit
Stroomlijnen-stations zijn ontworpen voor vrachtwagens. Bij het laden van een personenwagen:
- Parkeer in een aangewezen autoparkeerplaats als die beschikbaar is
- De CCS-kabel kan zwaarder zijn dan bij standaard autolaadstations (ontworpen voor vrachtwagenaansluitingen)
- Het kabelbereik is voldoende — onze kabels zijn 5 m of langer

### Laadsnelheid
Onze laders leveren tot 400 kW, maar uw auto neemt alleen af wat hij aankan. Een gemiddelde personenwagen laadt op 50–250 kW afhankelijk van model en accustatus.

### Auto-vriendelijke Locaties Vinden
Zoek in de Stroomlijnen-app of op de kaart naar locaties die zijn aangeduid met zowel een vrachtwagen- als een autopictogram. Sommige locaties hebben speciale autoparkeerplaatsen met lagere kabelhouders.
