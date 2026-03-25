---
sidebar_position: 10
title: CPO, eMSP och roaming förklarat
description: Vad är CPO och eMSP, hur fungerar roaming mellan laddnätverk, och vilka protokoll används?
keywords: [CPO, eMSP, roaming, OCPI, OCPP, laddnätverk, interoperabilitet, laddkort]
---

# CPO, eMSP och roaming förklarat

Världen av elektrisk laddning har sin egen jargong. Denna sida förklarar de viktigaste begreppen och rollerna.

## De två rollerna i laddningssystemet

### CPO — Laddningspunktoperatör

En **CPO** hanterar den fysiska laddningsinfrastrukturen. CPO är ansvarig för:

- Installation och underhåll av laddstolpar
- Kommunikation mellan laddstolpe och backoffice (via OCPP)
- Auktorisering av laddningssessioner
- Mätning och fakturering av levererad energi
- Drifttjänst och övervakning

En CPO driver laddningspunkter på en eller flera platser. Som fastighetsägare har du ett kontrakt med en CPO.

---

### eMSP — E-mobilitetstjänsteleverantör

En **eMSP** tillhandahåller tjänster till slutanvändaren (förare/flottledare):

- Utgivning av laddkort (RFID) eller appar
- Roaming-tillgång till laddningspunkter från olika CPO
- Månadsfaktura för alla laddningssessioner
- Kundtjänst

En flottledare har ett kontrakt med en eMSP. Dennes förare kan då ladda vid alla laddningspunkter som är anslutna via roaming.

:::note Ett företag kan ha båda rollerna
Vissa leverantörer är både CPO och eMSP. Det innebär att de hanterar både laddningspunkter och utger laddkort. Exempel: Vattenfall, Shell Recharge, Allego, Eneco.
:::

---

## OCPP — protokollet mellan laddstolpe och backoffice

**OCPP (Open Charge Point Protocol)** är den internationella öppna standarden för kommunikation mellan en laddstolpe och CPO:s backofficesystem.

| Version | Status | Egenskaper |
|---|---|---|
| OCPP 1.6 | Utbredd, äldre installationer | Grundläggande funktionalitet |
| OCPP 2.0.1 | Nuvarande standard | Smart laddning, V2G, förbättrad säkerhet |
| OCPP 2.1 | Under utveckling | MCS, utökad V2G |

**Varför OCPP är viktigt för fastighetsägare:** En laddstolpe som stöder OCPP är inte bunden till en CPO. Du kan byta CPO utan att behöva ersätta hårdvaran.

---

## OCPI — protokollet för roaming

**OCPI (Open Charge Point Interface)** är protokollet som möjliggör kommunikation mellan CPO och eMSP. Det möjliggör roaming: en förare med ett laddkort från eMSP A kan ladda vid en laddningspunkt från CPO B, och båda parterna reglerar sessionen automatiskt.

```
Förare (eMSP A-kort)
        ↓
Laddstolpe (CPO B)
        ↓ OCPI-anslutning
Backoffice CPO B → Backoffice eMSP A
        ↓
Faktura till flottledare
```

Ju fler CPO och eMSP som är anslutna via OCPI, desto större nätverk har en förare tillgång till.

---

## Roaming i praktiken

I Nederländerna är de flesta stora CPO anslutna via roaming-hubbar. De största hubbarna är:

| Hub | Roll |
|---|---|
| **Gireve** | Europeisk roaming-hubb, många stora nätverk |
| **Hubject** | Plug & Charge-roaming (ISO 15118) |
| **e-Laad** | Nederländska nätoperatörer (Nuon, Stedin etc.) |

Ett laddkort från en nederländsk eMSP fungerar vanligtvis på 300 000+ laddningspunkter i Europa via dessa hubbar.

---

## Vad betyder detta för dig som fastighetsägare?

Om du låter installera en laddningspunkt av en CPO som är ansluten till roaming-nätverk, kan **alla förare med ett giltigt laddkort** ladda vid din punkt — inte bara kunder från den specifika CPO.

**Fråga när du väljer en CPO:**
- "Via vilka roaming-nätverk är era laddningspunkter tillgängliga?"
- "Fungerar laddkort från Vattenfall, Shell Recharge och Allego vid era punkter?"

---

## Relevanta källor

| Organisation | Länk |
|---|---|
| Open Charge Alliance (OCPP/OCPI) | [openchargealliance.org](https://openchargealliance.org) |
| ElaadNL (tekniska standarder NL) | [elaadnl.nl](https://elaadnl.nl) |
| Gireve (roaming-hubb) | [gireve.com](https://gireve.com) |
| Hubject (Plug & Charge) | [hubject.com](https://hubject.com) |
| NAL (Nationell agenda för laddningsinfrastruktur) | [agendalaadinfrastructuur.nl](https://agendalaadinfrastructuur.nl) |