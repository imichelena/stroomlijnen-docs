---
sidebar_position: 1
title: Elturer — vad du bör veta
description: Praktisk guide för förare som åker på turné med ett elfordon. Från räckvidd till laddhantering under resan.
keywords: [eltur, förare, räckvidd, OBC, laddstrategi, snabbladdare, lastbil, skåpbil]
---

# Elturer — vad du bör veta

En praktisk guide för förare som åker på turné med ett elfordon. Huvudregeln är enkel: **ladda när du står still, inte när du kör**.

---

## Fordonet

### Räckvidd avgör allt

Räckvidden för ditt fordon avgör om du kan åka från A till B utan att behöva ladda under resan. Några tumregler för Sverige:

- **Personbil med stort batteripack** (t.ex. 77+ kWh): från Uppsala kan du komma till de flesta teatrarna och tillbaka på en laddning
- **Skåpbil**: det är nästan omöjligt att åka på en laddning med de flesta modellerna — laddning under resan är oundviklig
- **Lastbil**: beroende på rutt och last, men laddning på teatern är avgörande

### WLTP-räckvidd vs. verklighet

Den officiella WLTP-räckvidden baseras på blandad körning och är inte en bra måttstock för konstant motorvägskörning.

| Hastighet | Förbrukning i förhållande till WLTP | Effektiv räckvidd |
|---|---|---|
| 90 km/h | ~100% | WLTP-räckvidd uppnås |
| 100 km/h | ~110% | ~10% kortare räckvidd |
| 120 km/h | ~150% | ~30% kortare räckvidd |

**Praktiskt exempel (Kia e-Soul, WLTP 452 km):**
- Vid 90 km/h: ~450 km uppnås
- Vid 120 km/h: ~300 km i praktiken
- Tumregel vid genomsnittlig hastighet 100 km/h: räkna med ~330 km

Temperatur och vind minskar räckvidden ytterligare. Räkna alltid med en marginal.

### OBC — on board charger

**OBC (On Board Charger)** är fordonets inbyggda laddare. Den avgör hur snabbt du kan ladda vid en vanlig AC-laddstolpe. Det är den långsammaste delen i kedjan.

| OBC-effekt | Tid att ladda 60 kWh fullt |
|---|---|
| 3 kW | ~20 timmar |
| 7 kW | ~8,5 timmar |
| 11 kW | ~5,5 timmar |
| 22 kW | ~2,75 timmar |

:::varning
En OBC på 11 kW laddar maximalt på 11 kW, även om laddstolpen kan leverera mer. OBC är den begränsande faktorn vid AC-laddning.
:::

De flesta fordon med B-körkort (personbilar, skåpbilar) har en begränsad OBC — detta var redan så för diesel (kräftström för påbyggnad), men för el är det desto mer relevant.

---

## Laddare

### AC-laddare (offentliga stolpar, hemmaladdare)

AC-laddare levererar växelström till fordonet — OBC omvandlar den till likström för batteriet.

- **Effekt:** 3,7–22 kW (beroende på stolpe och OBC)
- **Platser:** offentliga laddstolpar på gatan, vid företag, på teatrar
- **Pris:** relativt lågt (0,25–0,45 €/kWh)
- **Nackdel:** långsamt, och allt fler stolpar begränsar laddningen under eftermiddagsrusningen (16:00–22:00) eller levererar inte alls

:::varning Eftermiddagsrusning
Många offentliga laddstolpar begränsar laddningen eller slutar helt att fungera mellan 16:00 och 22:00 på grund av nätbelastning. Om du räknar med en full batteri på morgonen, men stolpen har knappt laddat under 6 timmar — då står du inför en överraskning.
:::

:::anteckning Laddstolpsböter
Vid många laddstolpar gäller böter om du stannar kvar efter att batteriet är fullt. Ställ in en påminnelse i din app.
:::

### DC-laddare (snabbladdare)

DC-laddare omvandlar strömmen själva och laddar direkt till batteriet — utan OBC. Mycket snabbare.

- **Effekt:** 20–350+ kW
- **Pris:** upp till 4 gånger priset för en AC-stolpe (0,60–0,90 €/kWh på offentliga snabbladdare)
- **Platser för personbilar/skåpbilar:** Fastned, Shell Recharge, Allego, etc.
- **Platser för lastbilar:** ~100 offentliga laddplatser i Sverige (finns via [Chargemap](https://chargemap.com) eller [Truckcharging från Volvo](https://truckscharging.com))

:::varning Lastbilar får inte använda vanliga snabbladdare
Lastbilar är inte välkomna på Fastned, Shell Recharge och liknande konsument-snabbladdare. De måste använda särskilda lastbils-laddplatser.
:::

### Ta med egen laddare

Att ta med en egen laddare (mobil laddkabel eller vägguttag) är ett smart val — du vet då att du kan ladda om det finns en starkströmsanslutning tillgänglig.

**Tänk på vid starkströmsanslutningar:**
- En 32A-kabel/kontakt kan endast leverera den effekten under toppbelastning, men bara **25A kontinuerligt** (netto ~15 kW kontinuerlig laddning)
- En 63A-kabel ger dubbla kapaciteten (~30 kW kontinuerlig)
- Kabellängd och tjocklek avgör om du kan uppnå full effekt — tunga kablar över långa avstånd förlorar effekt

Inte alla ladd- och lossområden vid teatrar har starkström i närheten. Kontrollera detta i förväg.

---

## Körbeteende

### Regenerativ bromsning

De flesta elfordon kan återvinna energi vid bromsning (regenerativ bromsning). Motorn fungerar som en generator och laddar batteriet när du bromsar.

- Du **kan inte längre rulla** — fordonet bromsar så fort du släpper gasen
- Detta är lite att vänja sig vid, men ger betydande räckvidd vid varje utfart eller hastighetsminskning
- Dina bromsar slits knappt

**Tips:** Lär dig köra med ett pedal. Vid varje utfart eller fil får du gratis räckvidd.

---

## Laddstrategi under resa

Den ideala strategin för en turnerande förare:

```
Hemmaplan       → Full batteri vid avresa
        ↓
Teater/plats  → Laddning under uppbyggnad/föreställning/nedmontering
        ↓
Hemmaplan       → Eventuell efterladdning hemma
```

Om räckvidden för den enskilda resan inte räcker till:

- Välj ett fordon med **hög DC-laddningshastighet (>100 kW)** — det gör en snabbladdningsstopp på 15 minuter möjligt istället för 45 minuter
- Sök efter snabbladdare längs rutten via [Chargemap](https://chargemap.com), [ABRP](https://abetterrouteplanner.com) eller [PlugShare](https://www.plugshare.com)

---

## Lastbilar: särskilda överväganden

För lastbilar gäller extra begränsningar:

- **Körkortslag:** att kombinera laddning med teknikerarbete är lagligt problematiskt om föraren måste vänta vid laddaren. Vid teatrar som inte kan ladda krävs en **dedikerad förare**.
- **Ingen tillgång till konsument-snabbladdare** — sök efter särskilda lastbils-laddplatser
- **Laddning på teatern**: inte alltid möjligt och inte överallt finns det en anslutning i närheten av ladd-dockan

---

## Sammanfattning

- **Ladda när du står still** — hemma och på teatern. Laddning under resan räknas som arbetstid.
- **Räckvidd > laddningshastighet** om du kan ladda överallt på plats
- **Laddningshastighet > räckvidd** om du inte kan undvika stopp under resan — då vill du ha >100 kW DC
- **Eftermiddagsrusning** (16:00–22:00): offentliga stolpar kan leverera förvånansvärt lite
- **Ta med egen laddare** är smart — oberoende av tillgänglig infrastruktur
- **Snabbladdare är dyra** — använd dem bara när det verkligen behövs
- **Lastbilar**: sök efter laddplatser, inte vanliga snabbladdare
- **Lastbil + ingen teaterladdare** = dedikerad förare behövs (körkortslag)