---
sidebar_position: 10
title: CPO, eMSP en roaming uitgelegd
description: Wat zijn CPO's en eMSP's, hoe werkt roaming tussen laadnetwerken, en welke protocollen worden gebruikt?
keywords: [CPO, eMSP, roaming, OCPI, OCPP, laadnetwerk, interoperabiliteit, laadpas]
---

# CPO, eMSP en roaming uitgelegd

De wereld van elektrisch laden heeft een eigen jargon. Deze pagina legt de belangrijkste begrippen en rollen uit.

## De twee rollen in het laadecosysteem

### CPO — Charge Point Operator

Een **CPO** beheert de fysieke laadinfrastructuur. De CPO is verantwoordelijk voor:

- Installatie en onderhoud van laadpalen
- Communicatie tussen laadpaal en backoffice (via OCPP)
- Autorisatie van laadsessies
- Meting en facturering van geleverde energie
- Storingsdienst en monitoring

Een CPO exploiteert laadpunten op een of meer locaties. Als pandeneigenaar heeft u een contract met een CPO.

---

### eMSP — e-Mobility Service Provider

Een **eMSP** levert diensten aan de eindgebruiker (chauffeur/vlootbeheerder):

- Uitgifte van laadpassen (RFID) of apps
- Roaming-toegang tot laadpunten van verschillende CPO's
- Maandelijkse factuur voor alle laadsessies
- Klantenservice

Een vlootbeheerder heeft een contract met een eMSP. Zijn chauffeurs kunnen dan laden bij alle laadpunten die via roaming zijn aangesloten.

:::note Een bedrijf kan beide rollen hebben
Sommige aanbieders zijn zowel CPO als eMSP. Dat betekent dat zij zowel laadpunten beheren als laadpassen uitgeven. Voorbeelden: Vattenfall, Shell Recharge, Allego, Eneco.
:::

---

## OCPP — het protocol tussen laadpaal en backoffice

**OCPP (Open Charge Point Protocol)** is de internationale open standaard voor communicatie tussen een laadpaal en het beheersysteem (backoffice) van de CPO.

| Versie | Status | Kenmerken |
|---|---|---|
| OCPP 1.6 | Wijdverbreid, oudere installaties | Basis functionaliteit |
| OCPP 2.0.1 | Huidige standaard | Smart charging, V2G, betere beveiliging |
| OCPP 2.1 | In ontwikkeling | MCS, uitgebreidere V2G |

**Waarom OCPP belangrijk is voor pandeneigenaren:** Een laadpaal die OCPP ondersteunt, is niet gebonden aan één CPO. U kunt van CPO wisselen zonder de hardware te vervangen.

---

## OCPI — het protocol voor roaming

**OCPI (Open Charge Point Interface)** is het protocol waarmee CPO's en eMSP's onderling communiceren. Het maakt roaming mogelijk: een chauffeur met een pas van eMSP A kan laden bij een laadpunt van CPO B, en beide partijen verrekenen de sessie automatisch.

```
Chauffeur (eMSP A-pas)
        ↓
Laadpaal (CPO B)
        ↓ OCPI-koppeling
Backoffice CPO B → Backoffice eMSP A
        ↓
Factuur naar vlootbeheerder
```

Hoe meer CPO's en eMSP's via OCPI zijn gekoppeld, hoe groter het netwerk waar een chauffeur toegang toe heeft.

---

## Roaming in de praktijk

In Nederland zijn de meeste grote CPO's via roaming-hubs verbonden. De grootste hubs zijn:

| Hub | Rol |
|---|---|
| **Gireve** | Europese roaming-hub, veel grote netwerken |
| **Hubject** | Plug & Charge roaming (ISO 15118) |
| **e-Laad** | Nederlandse netbeheerders (Nuon, Stedin etc.) |

Een laadpas van een Nederlandse eMSP werkt doorgaans op 300.000+ laadpunten in Europa via deze hubs.

---

## Wat betekent dit voor u als pandeneigenaar?

Als u een laadpunt laat installeren door een CPO die is aangesloten op roaming-netwerken, kunnen **alle chauffeurs met een geldige laadpas** bij uw paal laden — niet alleen klanten van die ene CPO.

**Vraag bij selectie van een CPO:**
- "Via welke roaming-netwerken zijn uw laadpunten bereikbaar?"
- "Werken laadpassen van Vattenfall, Shell Recharge en Allego bij uw palen?"

---

## Relevante bronnen

| Organisatie | Link |
|---|---|
| Open Charge Alliance (OCPP/OCPI) | [openchargealliance.org](https://openchargealliance.org) |
| ElaadNL (technische standaarden NL) | [elaadnl.nl](https://elaadnl.nl) |
| Gireve (roaming hub) | [gireve.com](https://gireve.com) |
| Hubject (Plug & Charge) | [hubject.com](https://hubject.com) |
| NAL (Nationale Agenda Laadinfrastructuur) | [agendalaadinfrastructuur.nl](https://agendalaadinfrastructuur.nl) |
