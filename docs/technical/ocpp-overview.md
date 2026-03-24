---
sidebar_position: 1
title: OCPP Overzicht
description: Hoe Stroomlijnen OCPP (Open Charge Point Protocol) gebruikt om laadstations op afstand te beheren en te bewaken.
keywords: [OCPP, Open Charge Point Protocol, OCPP 2.0.1, laderstationbeheer, CSMS, extern beheer]
---

# OCPP Overzicht

**OCPP (Open Charge Point Protocol)** is het industriestandaard communicatieprotocol tussen laadstations en een centraal beheersysteem. Stroomlijnen gebruikt OCPP om al onze laders op afstand te beheren, bewaken en besturen.

## Wat is OCPP?

OCPP definieert hoe een laadstation (Charge Point) communiceert met een Charging Station Management System (CSMS — dat zijn wij). Het omvat:

- **Autorisatie** — Controleren of een gebruiker/voertuig mag laden
- **Sessiebeheer** — Laadsessies starten, bewaken en stoppen
- **Meting** — Energieverbruik in realtime rapporteren
- **Bediening op afstand** — Sessies op afstand starten/stoppen, vermogen aanpassen, laders herstarten
- **Diagnostiek** — Firmware-updates, logopvraging, gezondheidsbewaking
- **Slim laden** — Dynamisch vermogensbeheer over meerdere laders

## OCPP-versies

| Versie | Status bij Stroomlijnen | Kernfuncties |
|---------|----------------------|--------------|
| OCPP 1.6-J | ✅ Ondersteund | JSON/WebSocket, slimme laadprofielen, breed ingezet |
| OCPP 2.0.1 | ✅ Voorkeur | ISO 15118-integratie, apparaatmodel, verbeterde beveiliging, transactieverwerking |

### Waarom OCPP 2.0.1 Belangrijk Is

OCPP 2.0.1 is een significante upgrade van 1.6, met name voor vlootladen:

- **ISO 15118-integratie** — Ingebouwde ondersteuning voor Plug & Charge-certificaatbeheer via OCPP
- **Verbeterde beveiliging** — Veilige firmware-updates, ondertekende meterwaarden, TLS verplicht
- **Apparaatmodel** — Gestandaardiseerde manier om ladermogelijkheden en -configuratie op te vragen
- **Transactieverwerking** — Betere verwerking van complexe transacties (voorautorisatie, parkeren, energie)
- **Slim laden** — Meer gedetailleerde controle over laadprofielen en vermogensverdeling
- **Displayberichten** — Stuur aangepaste berichten naar het scherm van de lader

Alle nieuwe Stroomlijnen-laders worden ingezet met OCPP 2.0.1. Bestaande 1.6-J-laders blijven werken en worden bijgewerkt wanneer de hardware dit ondersteunt.

## Architectuur

```mermaid
graph LR
    subgraph Stroomlijnen Cloud
        CSMS[CSMS<br/>Charging Station<br/>Management System]
        API[Vloot-API]
        Portal[Mijn Vloot-portaal]
    end

    subgraph Laadlocatie
        CS1[Lader 1]
        CS2[Lader 2]
        CS3[Lader 3]
        EMS[Energiebeheersysteem]
    end

    CS1 -->|OCPP 2.0.1<br/>WebSocket/TLS| CSMS
    CS2 -->|OCPP 2.0.1<br/>WebSocket/TLS| CSMS
    CS3 -->|OCPP 2.0.1<br/>WebSocket/TLS| CSMS
    EMS -->|Modbus/API| CSMS
    CSMS --> API
    API --> Portal
```

### Communicatiestroom

1. **Lader → CSMS:** De lader verbindt met ons CSMS via een beveiligde WebSocket (wss://) verbinding
2. **Heartbeats:** Laders sturen periodieke heartbeats om te bevestigen dat ze online zijn
3. **Autorisatie:** Wanneer een gebruiker een RFID-pas of PnC-certificaat presenteert, stuurt de lader een autorisatieverzoek naar ons CSMS
4. **Meting:** Tijdens het laden worden meterwaarden (energie, vermogen, SoC) met regelmatige intervallen verzonden
5. **Externe opdrachten:** Ons CSMS kan opdrachten naar laders sturen (starten, stoppen, resetten, firmware bijwerken)

## Slim Laden

De slimme laadmogelijkheden van OCPP zijn essentieel voor locaties met beperkte netcapaciteit:

### Laadprofielen
We stellen laadprofielen in die elke lader vertellen hoeveel vermogen hij op elk moment mag gebruiken:

- **TxDefaultProfile** — Standaard vermogenslimiet voor elke transactie
- **TxProfile** — Vermogensaanpassing per transactie
- **ChargingStationMaxProfile** — Algehele locatie vermogenslimiet

### Taakverdeling
Wanneer meerdere vrachtwagens gelijktijdig laden en de locatie beperkte netcapaciteit heeft:

1. Ons EMS bewaakt de totale locatiebelasting (via Modbus/API)
2. CSMS berekent beschikbare capaciteit per lader
3. Laadprofielen worden dynamisch bijgewerkt via OCPP
4. Vermogen wordt eerlijk verdeeld of op basis van prioriteit (op basis van vlootinstellingen)

Voorbeeld: Een locatie met 600 kW netcapaciteit en 3 laders van elk 350 kW:
- 1 vrachtwagen laden → krijgt tot 350 kW
- 2 vrachtwagens laden → elk 300 kW
- 3 vrachtwagens laden → elk 200 kW
- Tijdens piekuren op het net → verder verlaagd om binnen gecontracteerde capaciteit te blijven

### Gepland Laden
Vlootbeheerders kunnen vertrektijden en doel-SoC instellen. Ons systeem optimaliseert wanneer te laden:
- Vertraagt de start totdat elektriciteit het goedkoopst is
- Garandeert dat doel-SoC voor vertrektijd is bereikt
- Balanceert over alle voertuigen op de locatie

## Beveiliging

OCPP 2.0.1-beveiligingsfuncties die wij implementeren:

- **TLS 1.3** — Alle OCPP-verbindingen zijn versleuteld
- **Clientcertificaten** — Laders authenticeren bij ons CSMS met certificaten
- **Ondertekende meterwaarden** — Manipulatiebestendige energiemetingen
- **Veilige firmware-updates** — Cryptografisch ondertekende firmware-images
- **Toegangscontrole** — Fysieke en netwerktoegangsbeperkingen op elke locatie

## Voor Hardwarepartners

Als u een laderfabrikant of installateur bent die met Stroomlijnen werkt:

- We vereisen **OCPP 2.0.1**-conformiteit (1.6-J geaccepteerd voor bestaande voorraad)
- Laders moeten **ISO 15118-2** PnC ondersteunen
- TLS 1.2+ is verplicht
- We verstrekken CSMS-eindpunten en -gegevens tijdens het onboardingproces
- Interoperabiliteitstests zijn vereist voor inzet

Neem contact op via [technical@stroomlijnen.nl](mailto:technical@stroomlijnen.nl) voor integratiedocumentatie.
