---
sidebar_position: 3
title: RFID-passen
description: Hoe u RFID-laadpassen bestelt, activeert en beheert voor uw elektrische vloot bij Stroomlijnen.
keywords: [RFID card, charging card, NL*STM, fleet charging, activate card]
---

# RFID-passen

RFID (Radio Frequency Identification) passen zijn de traditionele manier om te authenticeren bij een laadstation. Tik uw pas, begin met laden — eenvoudig en betrouwbaar.

## Hoe RFID-laadpassen Werken

Elke pas bevat een unieke identificatiecode (een **token** of **UID**) die is gekoppeld aan uw vlootaccount. Wanneer u de pas op de lezer van een lader tikt:

1. De lader leest de UID van de pas
2. Stuurt die via OCPP naar de Stroomlijnen-backend
3. Ons systeem controleert: is deze pas geldig? Bij welke vloot hoort hij?
4. Als geldig → start het laden. De sessie wordt gefactureerd aan het vlootaccount.

Dit werkt op elke Stroomlijnen-locatie en bij **roamingpartner-laders** door heel Europa — de pas draagt uw NL\*STM eMSP-identiteit.

## Passen Bestellen

### Nieuwe Vlootregistratie
Wanneer u uw vloot registreert, kunt u passen rechtstreeks via het portaal bestellen:

1. Ga naar **Mijn Vloot → RFID-passen**
2. Klik op **Passen bestellen**
3. Geef het benodigde aantal passen op
4. Voer het verzendadres in
5. Passen arriveren binnen 3–5 werkdagen

### Extra Passen
Meer nodig? Zelfde procedure. U kunt op elk moment extra passen bestellen.

### Prijs
- Passen worden gratis verstrekt bij uw vlootabonnement
- Vervanging bij verlies: gratis (eerste twee per jaar), €5 per pas daarna

## Een Pas Activeren

Passen worden **voorgeactiveerd** geleverd en zijn al gekoppeld aan uw vloot. U dient echter:

1. Naar **Mijn Vloot → RFID-passen** in het portaal te gaan
2. Te controleren of de nieuwe passen in uw lijst verschijnen
3. **Elke pas aan een bestuurder toe te wijzen** (optioneel maar aanbevolen — helpt bij het bijhouden van sessies)
4. De pas te testen bij een lader

:::tip
Wijs passen toe aan specifieke bestuurders. Zo tonen uw laadrapportages welke bestuurder welke pas heeft gebruikt, wat de kostentoedeling per vloot veel eenvoudiger maakt.
:::

## Passen Beheren

### Een Pas Deactiveren
Als een pas verloren is of een bestuurder het bedrijf verlaat:
1. Ga naar **Mijn Vloot → RFID-passen**
2. Zoek de pas (op nummer of bestuurdernaam)
3. Klik op **Deactiveren**
4. De pas werkt onmiddellijk niet meer op alle laders

### Een Pas Opnieuw Activeren
Die "verloren" pas toch teruggevonden? U kunt hem op dezelfde manier opnieuw activeren.

### Pasgroepen
Voor grotere vloten kunt u passen in groepen organiseren:
- **Per voertuig** — één pas per vrachtwagen
- **Per bestuurder** — persoonlijke passen die op elk voertuig werken
- **Per afdeling** — aparte facturering per bedrijfseenheid

## Verloren of Gestolen Passen

1. **Deactiveer onmiddellijk** in het portaal (of bel ons)
2. De pas wordt binnen 60 seconden ongeldig op alle verbonden laders
3. Bestel een vervanging
4. Eventuele kosten vóór deactivering verschijnen op uw gebruikelijke factuur

:::caution
Deactiveer verloren passen zo snel mogelijk. Tot die tijd kan iedereen met de pas laden op uw account. We verwerken deactivering binnen 60 seconden — maar u moet het initiatief nemen.
:::

## RFID versus Plug & Charge

| Functie | RFID-pas | Plug & Charge |
|---------|-----------|---------------|
| Insteltijd | Passen bestellen, aan bestuurders toewijzen | VIN registreren, certificaat installeren |
| Actie bestuurder | Pas tikken voor/na laden | Gewoon inpluggen |
| Werkt bij meerdere vloten | Pas volgt de bestuurder | Certificaat volgt het voertuig |
| Verliesrisico | Pas kan kwijtraken/gestolen worden | Niets fysiek te verliezen |
| Roaming | Werkt overal | Groeit, maar nog niet universeel |
| Terugvaloptie | Werkt altijd | RFID nodig als terugval |

**Onze aanbeveling:** Stel Plug & Charge in voor het gemak, houd RFID-passen als reserveoptie. Riem én bretels.

## Technische Details

- **Pastechnologie:** MIFARE DESFire EV2 (versleuteld, veilig)
- **Frequentie:** 13,56 MHz (NFC)
- **Standaard:** ISO 14443
- **UID-formaat:** 14 hexadecimale tekens
- **Branding:** Stroomlijnen-logo met NL\*STM-identificatie

## Volgende Stappen

- [Stel Plug & Charge in](/docs/plug-and-charge/setup-guide) naast uw RFID-passen
- [Beheer uw bestuurders](/docs/fleet-management/driver-management)
- [Uw facturen begrijpen](/docs/fleet-management/invoicing)
