---
sidebar_position: 2
title: Uw Eerste Laadsessie
description: Stapsgewijze handleiding voor uw eerste laadsessie voor elektrische vrachtwagens bij een Stroomlijnen-locatie.
keywords: [first charging session, how to charge, electric truck, RFID, Plug and Charge]
---

# Uw Eerste Laadsessie

Of u nu een vlootbeheerder bent die alles instelt of een bestuurder die voor het eerst bij de lader staat — hier leest u precies wat er gebeurt.

## Voordat U Aankomt

### Als Vlootbeheerder

1. **Registreer** u op het Stroomlijnen-portaal op [portal.stroomlijnen.nl](https://portal.stroomlijnen.nl)
2. **Voeg uw voertuigen toe** — VIN-nummers en kentekens
3. **Kies uw authenticatiemethode:**
   - **RFID-passen** — we sturen ze naar u op (zie [RFID-passen](/docs/getting-started/rfid-cards))
   - **Plug & Charge** — instellen via het portaal (zie [Installatiehandleiding](/docs/plug-and-charge/setup-guide))
4. **Informeer uw bestuurders** — deel het locatieadres en eventuele toegangscodes

### Als Bestuurder

- Zorg dat u uw **RFID-pas** bij u heeft (of dat uw vrachtwagen Plug & Charge ondersteunt)
- Ken het **locatieadres** en eventuele toegangscodes voor slagbomen
- Controleer het **huidige accuniveau** van uw vrachtwagen — plan de benodigde laadtijd in

## Bij de Lader

### Stap 1: Parkeren en Aansluiten

1. Rijd naar een beschikbare lader
2. Zet het voertuig uit (sommige vrachtwagens vereisen dit; andere niet — raadpleeg de merkhandleiding)
3. Open de laadpoort
4. Sluit de laadkabel aan:
   - **CCS2** (Combined Charging System) — de Europese standaard voor DC-snelladen
   - De stekker past maar op één manier. Niet forceren.

### Stap 2: Authenticeren

**Met RFID-pas:**
1. Houd uw pas voor de kaartlezer op de lader
2. Wacht op de groene LED en/of bevestiging op het display
3. Het laden start automatisch

**Met Plug & Charge:**
1. Sluit de kabel aan. Dat is alles.
2. De vrachtwagen en lader wisselen certificaten uit via ISO 15118
3. Het laden start binnen 5–10 seconden

**Met laad-app (roaming):**
1. Open de app van uw eMSP
2. Scan de QR-code op de lader of voer het lader-ID in
3. Start de sessie in de app

### Stap 3: Monitoren

- Het display van de lader toont het realtime vermogen (kW) en geleverde energie (kWh)
- U kunt ook monitoren via het Stroomlijnen-portaal of uw vlootbeheer-app
- De meeste elektrische vrachtwagens laden van 20% naar 80% in 60–90 minuten op onze DC-laders

### Stap 4: Ontkoppelen

1. Stop de sessie:
   - **RFID:** tik de pas opnieuw
   - **Plug & Charge:** koppel gewoon los (sessie eindigt automatisch)
   - **App:** stop in de app, daarna loskoppelen
2. Hang de kabel terug in de houder
3. Sluit uw laadpoort
4. Rijden maar

## Wat Als Er Iets Misgaat?

| Probleem | Wat te doen |
|-------|-----------|
| Pas niet herkend | Controleer of de pas is geactiveerd in het portaal. Probeer de pas dichter bij / langer voor de lezer te houden. |
| Plug & Charge start niet | Controleer de PnC-status van uw vrachtwagen in het OEM-portaal. Zie [Probleemoplossing](/docs/plug-and-charge/troubleshooting). |
| Lader toont foutmelding | Noteer de foutcode en neem contact met ons op. Zie [FAQ](/docs/faq). |
| Langzamer laden dan verwacht | Accutemperatuur, laadniveau (SoC) en netcapaciteit beïnvloeden allemaal de laadsnelheid. Boven 80% SoC vertraagt het laden aanzienlijk. |
| Kabel niet los te maken | De kabel vergrendelt tijdens het laden. Zorg dat de sessie volledig gestopt is voordat u trekt. |

## Verwachte Laadsnelheden

Elektrische vrachtwagens hebben verschillende laadcapaciteiten:

| Vermogensniveau | Typisch gebruik | Tijd voor 200 kWh |
|-------------|------------|-------------------|
| 50 kW DC | Nacht- / depotladen | ~4 uur |
| 150 kW DC | Gelegenheidsladen | ~1,5 uur |
| 350 kW DC | Snelle omlooptijd | ~40 minuten |

:::note
De werkelijke laadsnelheid hangt af van de boordlader van het voertuig, de accutemperatuur, het laadniveau en het beschikbare vermogen van de lader. De lader levert het maximale vermogen dat het voertuig aanvraagt, tot aan het nominale vermogen van de lader.
:::

## Volgende Stappen

- [Stel Plug & Charge in](/docs/plug-and-charge/setup-guide) voor moeiteloze toekomstige sessies
- [Begrijp uw facturen](/docs/fleet-management/invoicing)
- [Voeg meer bestuurders toe](/docs/fleet-management/driver-management)
