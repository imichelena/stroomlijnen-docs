---
sidebar_position: 6
title: Andra lastbilsvarumärken — Plug & Charge
description: Plug & Charge-status och installationsinformation för Scania, MAN, Renault Trucks, Ford Trucks, IVECO och VW Transportbilar.
keywords: [Scania, MAN, Renault Trucks, IVECO, Plug and Charge, ISO 15118, el-lastbil]
---

# Andra lastbilsvarumärken — Plug & Charge

Denna sida behandlar PnC-installation för lastbilsvarumärken som ännu inte har en egen omfattande handbok. Allteftersom antagandet växer, kommer vi att dela upp dem i separata handböcker.

## Scania BEV

**Modeller:** R-serien BEV, P-serien BEV
**PnC-status:** ✅ Stöds (firmware 2025.3+)
**Flottportalen:** Scania Fleet Management

### Installationssteg

1. Logga in på [Scania Fleet Management](https://my.scania.com)
2. Gå till **Elektrifiering** → **Laddningstjänster**
3. Klicka på **Lägg till laddningspartner** → sök efter "Stroomlijnen"
4. Auktorisera och välj fordon
5. Scania skickar certifikat via sin telematikgateway
6. **Typisk installations tid: 4–12 timmar**

### Kommentarer
- Scania kräver firmwareversion 2025.3 eller senare för fullständig PnC-stöd
- Äldre firmware stöder ISO 15118-kommunikation men inte bearbetning av kontraktscertifikat
- Kontakta din Scania-återförsäljare för firmware-uppdateringar — OTA-uppdateringar för PnC rullas ut gradvis
- Scanias telematiksystem använder en separat mobil anslutning från fordonets infotainment — se till att telematik-SIM-kortet är aktivt

## MAN Electric

**Modeller:** eTGX, eTGS, eTGL, eTGM
**PnC-status:** ✅ Stöds på eTGX/eTGS | ⚠️ Rullas ut på eTGL/eTGM
**Flottportalen:** RIO-plattformen

### Installationssteg

1. Logga in på [RIO](https://rio.cloud)
2. Navigera till **Tjänster** → **Laddningshantering**
3. Klicka under **Externa laddningspartners** på **Anslut partner**
4. Sök efter **"Stroomlijnen B.V."** och klicka på **Auktorisera**
5. Välj fordon och bekräfta
6. **Typisk installations tid: 6–24 timmar**

### Kommentarer
- RIO-plattformen delas av MAN och vissa andra TRATON-märken
- eTGX och eTGS har fullständigt PnC-stöd sedan slutet av 2025
- eTGL och eTGM får PnC-stöd via fasade firmware-uppdateringar under 2026
- MAN-certifikat använder en hårdvarusäkerhetsmodul (HSM) i fordonet — detta ger utmärkt säkerhet men innebär att certifikat endast kan installeras när fordonets säkerhetsmodul är i "provisioneringsläge" (de första 30 minuterna efter kontakt)

## Renault Trucks E-Tech

**Modeller:** E-Tech T, E-Tech D, E-Tech Master (skåpbil)
**PnC-status:** ⚠️ Kommer H1 2026
**Flottportalen:** Renault Trucks Fleet Management

### Nuvarande Status
- ISO 15118-2-hårdvara finns i E-Tech T och E-Tech D
- PnC-mjukvaruaktivering förväntas via OTA-uppdatering i den första halvan av 2026
- Renault Trucks genomför PnC-interoperabilitetstester med Hubject sedan Q3 2025
- E-Tech Master-skåpbilen har ingen ISO 15118-stöd

### Vad Du Kan Göra Nu
1. Se till att ditt flottportalkonto är inställt med administratörtillgång
2. Registrera dina fordon i Stroomlijnen Mijn Vloot-portalen
3. Använd RFID-kort för laddning under tiden
4. Vi informerar dig när PnC blir tillgängligt för Renault Trucks

## Ford Trucks

**Modeller:** F-MAX Electric
**PnC-status:** ❌ Inte stöds ännu

### Nuvarande Status
- Ford F-MAX Electric (tillverkad av Ford Otosan i Turkiet) stöder för närvarande inte ISO 15118
- Ford Otosan har meddelat ISO 15118-stöd i sin färdplan för modellår 2027
- Använd RFID-kort eller Stroomlijnen-appen för laddning

## IVECO

**Modeller:** S-eWay
**PnC-status:** ⚠️ Tillkännagiven för modellår 2026

### Nuvarande Status
- IVECO har tillkännagett ISO 15118-2 PnC-stöd för S-eWay-lastbilar från modellår 2026
- Modeller före 2026 saknar den nödvändiga ISO 15118-hårdvaran
- Ombyggnad är inte tillgänglig — PnC kräver fabriksinstallerade kommunikationsmoduler
- Använd RFID-kort för nuvarande S-eWay-lastbilar

## VW Transportbilar

**Modeller:** ID. Buzz Cargo
**PnC-status:** ⚠️ Begränsat stöd

### Nuvarande Status
- ID. Buzz Cargo stöder ISO 15118-2, men PnC hanteras via VW We Charge-ekosystemet
- Cross-provider PnC (användning av Stroomlijnen-certifikat med VW-fordon) är tekniskt möjlig men kräver ytterligare konfiguration
- Kontakta Stroomlijnen-support för VW-specifik PnC-konfiguration

---

:::info Ditt varumärke hittades inte?
Kontakta oss via [info@stroomlijnen.nl](mailto:info@stroomlijnen.nl). Vi utökar PnC-stödet aktivt allteftersom fler OEM:er aktiverar ISO 15118.
:::

**Nästa:** [Felsökning →](../troubleshooting)