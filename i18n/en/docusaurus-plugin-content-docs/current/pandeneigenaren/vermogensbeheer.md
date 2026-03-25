---
sidebar_position: 6
title: Vermogensbeheer en netaansluiting
description: Uitleg over aansluitvermogen, gecontracteerd vermogen, peakshaving en smart charging voor pandeneigenaren.
keywords: [aansluitvermogen, gecontracteerd vermogen, peakshaving, smart charging, netaansluiting, loadmanagement]
---

# Vermogensbeheer en netaansluiting

Voordat u laadpunten plaatst, is het belangrijk te begrijpen hoe uw elektriciteitsaansluiting werkt en hoe laadinfrastructuur daarmee omgaat.

## Twee begrippen die u moet kennen

### Aansluitvermogen

Het **aansluitvermogen** is het fysieke maximum dat uw netaansluiting aankan — bepaald door de kabels en het transformatorstation van uw netbeheerder. Dit is de absolute bovengrens.

**Typisch voor een theater:** 400–2000 kVA (= 400–2000 kW per fase, afhankelijk van grootte)

### Gecontracteerd vermogen

Het **gecontracteerd vermogen** is het maximale vermogen waarvoor u een contract heeft met uw netbeheerder. U betaalt een vastrecht op basis van dit vermogen. Als u structureel meer afneemt, kunt u boetes krijgen of moet u uw contract aanpassen.

Het gecontracteerd vermogen is doorgaans **lager** dan het aansluitvermogen.

**Typisch voor een theater:** 150–500 kW

---

:::tip Vuistregel
- **Aansluitvermogen** = wat de kabels aankunnen (ceiling)
- **Gecontracteerd vermogen** = wat u heeft betaald voor (contract)
- **Huidig verbruik** = wat u daadwerkelijk gebruikt (varieert per uur)

Overdag heeft u doorgaans veel ruimte tussen uw huidig verbruik en uw gecontracteerd vermogen. Die ruimte kunt u inzetten voor laden.
:::

---

## Hoe een DC-lader zich verhoudt tot uw aansluiting

Een DC-lader trekt zijn vermogen direct en snel uit uw aansluiting. Een 60 kW DC-lader trekt 60 kW zolang hij actief is. Dat is:

| Ladertype | Vermogen | % van 270 kW contract |
|---|---|---|
| AC-lader (enkelfasig) | 3,7–7,4 kW | 1–3% |
| AC-lader (3-fasig) | 11–22 kW | 4–8% |
| DC-lader | 50–150 kW | 18–55% |
| DC-snellader (truck) | 100–350 kW | 37–130% |

Een enkele DC-lader van 150 kW op een contract van 270 kW neemt dus meer dan de helft van uw contractruimte in. Dat is prima overdag als het theater weinig verbruikt — maar 's avonds tijdens een voorstelling kan dat problemen geven.

**De oplossing: peakshaving / loadmanagement**

---

## Peakshaving en smart charging

**Peakshaving** (ook wel loadmanagement of smart charging) is een systeem dat het laadvermogen automatisch aanpast op basis van het beschikbare vermogen op dat moment.

### Hoe het werkt

1. Het systeem meet continu het actuele stroomverbruik van het gebouw
2. Het berekent hoeveel ruimte er nog is onder uw gecontracteerd vermogen
3. De laadpaal krijgt exact zoveel vermogen als beschikbaar is — niet meer
4. Als de zaal vult en het verbruik stijgt, wordt het laadvermogen automatisch teruggeschroefd
5. Als het verbruik daalt (bijv. na afloop voorstelling), gaat het laadvermogen weer omhoog

### Resultaat

- **Nooit** overschrijding van uw gecontracteerd vermogen
- **Maximale laadsnelheid** wanneer het kan
- **Geen handmatige actie** nodig

```
Gecontracteerd vermogen:     270 kW
Theaterverbruik avond:       220 kW
Beschikbaar voor laden:       50 kW → laadpaal laadt op 50 kW

Theaterverbruik overdag:      40 kW
Beschikbaar voor laden:      230 kW → laadpaal laadt op 150 kW (max paal)
```

---

## Wanneer is netuitbreiding nodig?

In de meeste theaters is netuitbreiding **niet** nodig voor een eerste laadpaal van 60–150 kW, mits peakshaving is geïnstalleerd.

Netuitbreiding wordt pas relevant als u:
- Meerdere laadpunten tegelijk wilt exploiteren (>3 snelladers)
- Vaste vermogenscapaciteit wilt reserveren voor laden (bijv. voor contractgaranties aan vervoerders)
- Batterijopslag (BSS) wilt toevoegen voor extra buffercapaciteit

:::note Netbeheerder
Wachttijden voor netuitbreiding in Nederland zijn momenteel 5–10 jaar in veel regio's. Batterijopslag (BSS) kan een alternatief zijn om de wachttijd te overbruggen. Zie de [ElaadNL Outlook Logistiek](https://elaadnl.nl) voor actuele cijfers over netcongestie en laadinfrastructuur.
:::

---

## Batterijopslag als buffer

Een Battery Storage System (BSS) laadt op wanneer uw stroomverbruik laag is, en levert die energie terug aan de laadpalen op piekmomenten. Dit maakt hogere laadvermogens mogelijk zonder uw netaansluiting te overschrijden.

| Scenario | Zonder BSS | Met BSS |
|---|---|---|
| Beschikbaar overdag | 230 kW | 230 kW + buffer |
| Beschikbaar avond | 50 kW | 50 kW + buffer uit BSS |
| Max. laadvermogen avond | 50 kW | 150 kW (uit BSS) |
