---
sidebar_position: 6
title: Kapacitets- och nätanslutningshantering
description: Förklaring av anslutningseffekt, kontrakterad effekt, peakshaving och smart laddning för fastighetsägare.
keywords: [anslutningseffekt, kontrakterad effekt, peakshaving, smart laddning, nätanslutning, lasthantering]
---

# Kapacitets- och nätanslutningshantering

Innan du installerar laddstationer är det viktigt att förstå hur din elanslutning fungerar och hur laddinfrastrukturen samverkar med den.

## Två begrepp som du bör känna till

### Anslutningseffekt

**Anslutningseffekten** är det fysiska maxvärdet som din nätanslutning kan hantera — bestämt av kablar och transformatorstation från din nätoperatör. Detta är den absoluta övre gränsen.

**Typiskt för en teater:** 400–2000 kVA (= 400–2000 kW per fas, beroende på storlek)

### Kontrakterad effekt

**Kontrakterad effekt** är den maximala effekten som du har ett avtal med din nätoperatör om. Du betalar en fast avgift baserat på denna effekt. Om du regelbundet tar ut mer kan du få böter eller behöva justera ditt avtal.

Den kontrakterade effekten är vanligtvis **lägre** än anslutningseffekten.

**Typiskt för en teater:** 150–500 kW

---

:::tip Riktningsgivare
- **Anslutningseffekt** = vad kablar kan hantera (tak)
- **Kontrakterad effekt** = vad du har betalat för (avtal)
- **Aktuellt förbruk** = vad du faktiskt använder (varierar per timme)

På dagen har du vanligtvis mycket utrymme mellan ditt aktuella förbruk och din kontrakterade effekt. Detta utrymme kan du använda för laddning.
:::

---

## Hur en DC-laddare relaterar till din anslutning

En DC-laddare drar sin effekt direkt och snabbt från din anslutning. En 60 kW DC-laddare drar 60 kW så länge den är aktiv. Detta är:

| Laddartyp | Effekt | % av 270 kW kontrakt |
|---|---|---|
| AC-laddare (enkelfasig) | 3,7–7,4 kW | 1–3% |
| AC-laddare (3-fasig) | 11–22 kW | 4–8% |
| DC-laddare | 50–150 kW | 18–55% |
| DC-snabbladdare (lastbil) | 100–350 kW | 37–130% |

En enda DC-laddare på 150 kW på ett kontrakt av 270 kW tar därmed mer än hälften av din kontraktutrymme. Detta är bra på dagen när teatern har lågt förbruk — men på kvällen under en föreställning kan det ge problem.

**Lösningen: peakshaving / lasthantering**

---

## Peakshaving och smart laddning

**Peakshaving** (även kallat lasthantering eller smart laddning) är ett system som automatiskt anpassar laddningskapaciteten baserat på det tillgängliga värdet för tillfället.

### Hur det fungerar

1. Systemet mäter kontinuerligt den aktuella strömförbrukningen i byggnaden
2. Det beräknar hur mycket utrymme som finns kvar under din kontrakterade effekt
3. Laddstolpen får exakt så mycket effekt som är tillgänglig — inte mer
4. Om salen fylls och förbrukningen ökar, minskas laddningskapaciteten automatiskt
5. Om förbrukningen minskar (t.ex. efter en föreställning), ökar laddningskapaciteten igen

### Resultat

- **Aldrig** överskridning av din kontrakterade effekt
- **Maximal laddningshastighet** när det är möjligt
- **Ingen manuell åtgärd** behövs

```
Kontrakterad effekt:     270 kW
Teaterförbruk på kvällen:       220 kW
Tillgänglig för laddning:       50 kW → laddstolpe laddar på 50 kW

Teaterförbruk på dagen:      40 kW
Tillgänglig för laddning:      230 kW → laddstolpe laddar på 150 kW (max stolpe)
```

---

## När krävs nätutvidgning?

I de flesta teatrar krävs **inte** nätutvidgning för en första laddstolpe på 60–150 kW, under förutsättning att peakshaving är installerad.

Nätutvidgning blir relevant först när du:
- Vill driva flera laddstationer samtidigt (>3 snabbladdare)
- Vill reservera fast effektkapacitet för laddning (t.ex. för avtalsgarantier till transportörer)
- Vill lägga till batterilagring (BSS) för extra buffertkapacitet

:::note Nätoperatör
Väntetider för nätutvidgning i Sverige är för närvarande 5–10 år i många regioner. Batterilagring (BSS) kan vara ett alternativ för att överbrygga väntetiden. Se [ElaadNL Outlook Logistiek](https://elaadnl.nl) för aktuella siffror om nätcongestion och laddinfrastruktur.
:::

---

## Batterilagring som buffert

Ett Battery Storage System (BSS) laddar när ditt strömförbruk är lågt och levererar sedan energin tillbaka till laddstolparna under toppmoment. Detta möjliggör högre laddningskapaciteter utan att överskrida din nätanslutning.

| Scenario | Utan BSS | Med BSS |
|---|---|---|
| Tillgänglig på dagen | 230 kW | 230 kW + buffert |
| Tillgänglig på kvällen | 50 kW | 50 kW + buffert från BSS |
| Maximal laddningskapacitet på kvällen | 50 kW | 150 kW (från BSS) |