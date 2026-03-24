---
sidebar_position: 5
title: Bestuurderbeheer
description: Bestuurders beheren in uw elektrische vloot — voertuigen toewijzen, RFID-passen verstrekken, laadlimieten instellen en bestuurdersactiviteit bijhouden.
keywords: [driver management, fleet drivers, RFID assignment, charging limits, driver app]
---

# Bestuurderbeheer

De sectie Bestuurderbeheer stelt vlootbeheerders in staat te bepalen wie mag laden, op welke voertuigen en met welke limieten.

## Bestuurders Toevoegen

1. Ga naar **Bestuurders** → **Bestuurder toevoegen**
2. Vul de bestuurdersgegevens in:
   - **Naam** — Voor- en achternaam
   - **E-mail** — Voor accounttoegang en meldingen
   - **Telefoon** — Voor app-authenticatie (optioneel)
   - **Personeelsnummer** — Voor interne referentie
   - **Afdeling/Groep** — Voor organisatorisch filteren
3. Klik op **Opslaan**

De bestuurder ontvangt een e-mailuitnodiging om zijn/haar Stroomlijnen-account in te stellen en de mobiele app te downloaden.

## Voertuigen Toewijzen

Bestuurders kunnen aan één of meerdere voertuigen worden toegewezen:

1. Ga naar **Bestuurders** → selecteer een bestuurder → **Voertuigen**
2. Klik op **Voertuig toewijzen** en selecteer uit uw vloot
3. Een bestuurder kan alleen sessies starten op toegewezen voertuigen (als voertuig-bestuurderkoppeling is ingeschakeld in uw vlootinstellingen)

### Flexibele Toewijzing
Voor vloten waarbij bestuurders voertuigen delen:
- Stel **Voertuig-bestuurderkoppeling** in op "Flexibel" in de vlootinstellingen
- Elke geregistreerde bestuurder kan elk vlootvoertuig laden
- Sessies worden nog steeds bijgehouden per bestuurder (via RFID-pas of app)

## RFID-passen voor Bestuurders

Elke bestuurder kan een persoonlijke RFID-pas krijgen:

1. Ga naar **Bestuurders** → selecteer een bestuurder → **RFID-passen**
2. Klik op **Pas toewijzen** en voer de UID van de pas in (gedrukt op de pas)
3. De pas is nu gekoppeld aan deze bestuurder en zijn/haar toegewezen voertuigen

Wanneer een bestuurder zijn/haar persoonlijke pas tikt bij een lader, wordt de sessie specifiek aan hem/haar toegeschreven — handig voor rapportage en kostentoedeling per bestuurder.

Zie ook: [RFID-passen](../getting-started/rfid-cards) voor bestellen en activeren.

## Laadlimieten

Stel limieten per bestuurder in om kosten te beheersen:

### Maandelijkse Energielimiet
Maximaal kWh dat een bestuurder per maand mag laden. Als de limiet is bereikt:
- Wordt de bestuurder per e-mail/app op de hoogte gesteld
- Is verder laden onderhevig aan goedkeuring door de vlootbeheerder (of de limiet wordt volgende maand gereset)

### Limiet per Sessie
Maximaal kWh per individuele sessie. Handig om onbedoeld nachtladen te voorkomen.

### Locatiebeperkingen
Beperk op welke locaties een bestuurder mag laden. Bijvoorbeeld alleen Stroomlijnen-locaties op de toegewezen route.

## Bestuurdersapp

Bestuurders kunnen de Stroomlijnen-app downloaden om:

- **Laders te vinden** — Kaart van alle Stroomlijnen-locaties met realtime beschikbaarheid
- **Sessies te starten** — QR-code scannen of Bluetooth gebruiken om laden te starten (alternatief voor RFID)
- **Sessies te bewaken** — Huidig laadvermogen, geleverde energie, geschatte tijd tot gewenste SoC
- **Geschiedenis te bekijken** — Afgelopen sessies met energie- en kostendetails
- **Meldingen te ontvangen** — Sessie voltooid, lader beschikbaar, PnC-gebeurtenissen

De app is beschikbaar voor iOS en Android. Bestuurders loggen in met het e-mailadres dat is geregistreerd in Mijn Vloot.

## Rapportage

### Rapporten per Bestuurder
- Totaal kWh per bestuurder per maand
- Aantal sessies
- Gemiddelde sessieduur
- Meest gebruikte locaties
- Kostentoedeling

### Bestuurdervergelijking
Vergelijk laadpatronen van bestuurders om te herkennen:
- Efficiënt versus inefficiënt laadgedrag
- Mogelijkheden voor routeoptimalisatie
- Kostenuitschieters

Rapporten zijn beschikbaar via **Rapporten** → **Bestuurdersanalyse** en kunnen worden geëxporteerd als CSV of PDF.
