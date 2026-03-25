---
sidebar_position: 8
title: AC- en DC-laders uitgelegd
description: Verschil tussen wisselstroom (AC) en gelijkstroom (DC) laden — techniek, vermogen, kosten en toepassingen.
keywords: [AC lader, DC lader, wisselstroom, gelijkstroom, laadvermogen, CCS2, Type 2, laadpaal types]
---

# AC- en DC-laders uitgelegd

Er zijn twee fundamenteel verschillende manieren om een elektrisch voertuig op te laden: via wisselstroom (AC) of via gelijkstroom (DC). Het verschil zit in waar de omzetting plaatsvindt.

## Het principe

Elektriciteit in het net is altijd wisselstroom (AC). Batterijen slaan gelijkstroom (DC) op. Er moet dus ergens een omzetting plaatsvinden.

- **AC-lader:** de omzetting van AC naar DC gebeurt **in het voertuig** (via de boordlader)
- **DC-lader:** de omzetting vindt plaats **in de laadpaal** — het voertuig ontvangt direct DC

## Vergelijking

| Kenmerk | AC-lader | DC-lader |
|---|---|---|
| Omzetting | In voertuig (boordlader) | In laadpaal |
| Vermogen | 3,7–22 kW | 22–350+ kW |
| Laadtijd (truck 300 kWh) | 14–80 uur | 1–6 uur |
| Aanschafprijs paal | €500–€3.000 | €15.000–€80.000 |
| Installatiekosten | Laag | Hoog |
| Connector (vrachtwagen) | Type 2 (AC) | CCS2 (DC) |
| Geschikt voor nachtladen | ✅ Ja | ✅ Ja |
| Geschikt voor snelladen overdag | ❌ Nee | ✅ Ja |

## AC-laders

AC-laders leveren wisselstroom aan het voertuig. De ingebouwde boordlader van het voertuig bepaalt de maximale laadsnelheid — niet de paal. Een paal van 22 kW laadt een voertuig met een boordlader van 11 kW maximaal op 11 kW.

**Toepassingen bij theaters:**
- Personenwagens van medewerkers
- Bestelwagens die de hele nacht staan
- Als aanvulling op DC-laders voor langere verblijven

**Voordeel:** Goedkoop, eenvoudig te installeren, laag vermogensprofiel (minder impact op netaansluiting)

**Nadeel:** Te langzaam voor vrachtwagens met beperkte verblijfstijd

## DC-laders

DC-laders leveren gelijkstroom direct aan de batterij, waarbij de omzetting in de laadpaal zit. Het maximale laadvermogen wordt bepaald door het minimum van paalvermogen en voertuigcapaciteit.

**Toepassingen bij theaters:**
- Elektrische vrachtwagens bij het laaddok
- Bussen
- Snelladen van bestelauto's

**Voordeel:** Snel, geschikt voor vrachtwagens, professionele betrouwbaarheid

**Nadeel:** Hogere aanschaf- en installatiekosten, hoger vermogensprofiel (vraagt om loadmanagement)

## Aanbevolen vermogen per voertuigtype

| Voertuigtype | Verblijfsduur | Aanbevolen ladertype | Vermogen |
|---|---|---|---|
| Personenwagen | 2–8 uur | AC | 11–22 kW |
| Bestelwagen | 8–12 uur | AC of lichte DC | 22–50 kW |
| Lichte truck (7,5T) | 8–12 uur | DC | 50–100 kW |
| Zware truck (40T) | 8–12 uur | DC | 100–150 kW |
| Snel doorladen (pauze) | 30–90 min | DC snellader | 150–350 kW |

:::note Verblijfsduur bij theaters
Trucks bij theaters staan doorgaans **8–12 uur** tijdens opbouw, voorstelling en afbouw. Een DC-lader van 60–100 kW is in de meeste gevallen voldoende voor een volledige laadcyclus.
:::

## Toekomstige standaard: MCS

Voor de zwaarste vrachtwagens (40T+) wordt het **Megawatt Charging System (MCS)** de nieuwe standaard. Dit levert vermogens tot 3,75 MW, wat een laadtijd van 30–45 minuten mogelijk maakt voor de grootste batterijpakketten. MCS wordt verwacht tussen 2025 en 2028 uitgerold te worden langs Europese hoofdcorridors.

Bron: [CharIN MCS specificatie](https://www.charin.global)
