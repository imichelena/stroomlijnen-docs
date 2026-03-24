---
sidebar_position: 1
title: Overzicht Vlootbeheer
description: Beheer het laden van uw elektrische vloot met het Mijn Vloot-portaal van Stroomlijnen — voertuigen, sessies, facturering en bestuurderbeheer.
keywords: [fleet management, My Fleet portal, electric fleet, charging management, fleet dashboard]
---

# Overzicht Vlootbeheer

Het **Mijn Vloot**-portaal van Stroomlijnen geeft vlootbeheerders volledig inzicht en controle over hun elektrische voertuiglaadactiviteiten. Vanuit één dashboard kunt u voertuigen beheren, laadsessies realtime bewaken, kosten beheersen en rapporten genereren.

## Toegang tot Mijn Vloot

Ga naar **my.stroomlijnen.nl** en log in met uw vlootbeheerdergegevens. Nieuwe gebruikers moeten zich registreren met het KVK-nummer van hun bedrijf en worden goedgekeurd door een Stroomlijnen-accountmanager.

## Dashboard

Het hoofddashboard toont:

- **Vlootstatus** — Hoeveel voertuigen momenteel laden, stilstaan of onderweg zijn
- **Energie van vandaag** — Totaal kWh geleverd aan uw vloot vandaag
- **Actieve sessies** — Realtime overzicht van alle lopende laadsessies met vermogenscurven
- **Meldingen** — Verlopen certificaten, mislukte sessies of ongebruikelijke laadpatronen
- **Maandoverzicht** — Lopend kostentotaal en vergelijking met vorige maand

## Belangrijkste Functies

### Voertuigbeheer
Registreer, configureer en bewaak al uw elektrische voertuigen op één plek. Activeer Plug & Charge, wijs RFID-passen toe en stel laadbeleid in per voertuig of groep.

→ [Details Voertuigbeheer](./vehicles)

### Sessiebewaking
Volg elke laadsessie — verleden en heden. Bekijk geleverde energie, duur, kosten, authenticatiemethode en laderlocatie. Exporteer naar CSV of integreer via API.

→ [Details Sessies](./sessions)

### Facturering
Maandelijkse facturen met gedetailleerde uitsplitsingen per voertuig, locatie en datum. Download facturen als PDF, ontvang kosten-per-km-analyse en stel automatische facturering in.

→ [Details Facturering](./invoicing)

### Bestuurderbeheer
Wijs bestuurders toe aan voertuigen, verstrek persoonlijke RFID-passen en stel laadlimieten per bestuurder in. Bestuurders kunnen de Stroomlijnen-app gebruiken om laders te vinden en sessies te starten.

→ [Details Bestuurderbeheer](./driver-management)

## Gebruikersrollen

| Rol | Bevoegdheden |
|------|-------------|
| **Vlootbeheerder** | Volledige toegang: voertuigen, facturering, PnC, gebruikers, API-sleutels |
| **Vlootmanager** | Voertuigbeheer, sessiebewaking, rapporten |
| **Factuurbeheerder** | Toegang tot facturen, betaalmethoden, kostenrapporten |
| **Bestuurder** | Eigen sessies bekijken, laders zoeken, sessies starten/stoppen |

## API-toegang

Voor bedrijven die laadgegevens willen integreren in hun eigen vlootbeheer- of ERP-systemen bieden we een REST API:

- Realtime sessie-webhooks
- Historische sessiegegevens
- Voertuig- en bestuurderbeheer
- Factuuropvraag

API-documentatie is beschikbaar in het Mijn Vloot-portaal onder **Instellingen** → **API**.

## Aan de Slag

1. [Registreer uw vloot](https://stroomlijnen.nl/fleet-signup) of neem contact op met uw accountmanager
2. [Voeg uw voertuigen toe](./vehicles)
3. [Activeer Plug & Charge](../plug-and-charge/setup-guide) of [verstrek RFID-passen](../getting-started/rfid-cards)
4. Begin met laden — alle sessies worden automatisch bijgehouden en gefactureerd
