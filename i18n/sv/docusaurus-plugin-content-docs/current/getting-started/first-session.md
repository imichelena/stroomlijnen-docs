---
sidebar_position: 2
title: Din Första Laddningssession
description: Steg-för-steg-guide för din första laddningssession för eldrivna lastbilar på en Stroomlijnen-plats.
keywords: [första laddningssession, hur man laddar, eldriven lastbil, RFID, Plug and Charge]
---

# Din Första Laddningssession

Oavsett om du är en flottchef som konfigurerar allt eller en förare som står vid laddaren för första gången — här hittar du exakt vad som händer.

## Innan Du Anländer

### Som Flottchef

1. **Registrera** dig på Stroomlijnen-portalen på [portal.stroomlijnen.nl](https://portal.stroomlijnen.nl)
2. **Lägg till dina fordon** — VIN-nummer och registreringsskyltar
3. **Välj din autentiseringsmetod:**
   - **RFID-kort** — vi skickar dem till dig (se [RFID-kort](/docs/getting-started/rfid-cards))
   - **Plug & Charge** — konfigurera via portalen (se [Installationsguide](/docs/plug-and-charge/setup-guide))
4. **Informera dina förare** — dela platsadressen och eventuella åtkomstkoder

### Som Förare

- Se till att du har ditt **RFID-kort** med dig (eller att din lastbil stöder Plug & Charge)
- Känn till **platsadressen** och eventuella åtkomstkoder för grindar
- Kontrollera **batteriets nuvarande nivå** — planera den nödvändiga laddningstiden

## Vid Laddaren

### Steg 1: Parkera och Anslut

1. Kör till en ledig laddare
2. Stäng av fordonet (vissa lastbilar kräver detta; andra inte — se tillverkarens manual)
3. Öppna laddningsporten
4. Anslut laddkabeln:
   - **CCS2** (Combined Charging System) — den europeiska standarden för DC-snabbladdning
   - Kontakten passar bara på ett sätt. Tvinga inte.

### Steg 2: Autentisera

**Med RFID-kort:**
1. Håll ditt kort framför kortläsaren på laddaren
2. Vänta på den gröna LED-lampan och/eller bekräftelse på displayen
3. Laddningen startar automatiskt

**Med Plug & Charge:**
1. Anslut kabeln. Det är allt.
2. Lastbilen och laddaren utbyter certifikat via ISO 15118
3. Laddningen startar inom 5–10 sekunder

**Med laddapp (roaming):**
1. Öppna appen från din eMSP
2. Skanna QR-koden på laddaren eller ange laddarens ID
3. Starta sessionen i appen

### Steg 3: Övervaka

- Laddarens display visar den aktuella effekten (kW) och den levererade energin (kWh)
- Du kan också övervaka via Stroomlijnen-portalen eller din flottledningsapp
- De flesta eldrivna lastbilar laddas från 20% till 80% på 60–90 minuter med våra DC-laddare

### Steg 4: Koppla Loss

1. Avsluta sessionen:
   - **RFID:** tryck kortet igen
   - **Plug & Charge:** koppla loss (sessionen avslutas automatiskt)
   - **App:** stoppa i appen, sedan koppla loss
2. Häng tillbaka kabeln i hållaren
3. Stäng laddningsporten
4. Kör iväg

## Vad Om Något Går Fel?

| Problem | Vad du ska göra |
|-------|-----------|
| Kort inte erkänt | Kontrollera om kortet är aktiverat i portalen. Försök att hålla kortet närmare / längre tid för läsaren. |
| Plug & Charge startar inte | Kontrollera PnC-statusen för din lastbil i OEM-portalen. Se [Felsökning](/docs/plug-and-charge/troubleshooting). |
| Laddaren visar felmeddelande | Anteckna felkoden och kontakta oss. Se [FAQ](/docs/faq). |
| Laddar långsammare än förväntat | Batteritemperatur, laddningsnivå (SoC) och nätverkskapacitet påverkar alla laddningshastigheten. Över 80% SoC bromsar laddningen avsevärt. |
| Kabel inte loss att ta bort | Kabeln låses under laddning. Se till att sessionen är helt avslutad innan du drar ut den. |

## Förväntade Laddningshastigheter

Eldrivna lastbilar har olika laddningsförmågor:

| Effektnivå | Typiskt användning | Tid för 200 kWh |
|-------------|------------|-------------------|
| 50 kW DC | Natt- / depåladdning | ~4 timmar |
| 150 kW DC | Tillfällig laddning | ~1,5 timme |
| 350 kW DC | Snabb omloppstid | ~40 minuter |

:::note
Den faktiska laddningshastigheten beror på fordonets inbyggda laddare, batteritemperatur, laddningsnivå och tillgänglig effekt från laddaren. Laddaren levererar den maximala effekten som fordonet begär, upp till laddarens nominella effekt.
::: 

## Nästa Steg

- [Konfigurera Plug & Charge](/docs/plug-and-charge/setup-guide) för framtida sessioner utan problem
- [Förstå dina fakturor](/docs/fleet-management/invoicing)
- [Lägg till fler förare](/docs/fleet-management/driver-management)