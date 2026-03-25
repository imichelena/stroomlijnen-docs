---
sidebar_position: 7
title: Personbilar — Plug & Charge
description: Hur Plug & Charge fungerar för personbilar på Stroomlijnen-laddstationer — BMW, Mercedes, Porsche, Audi, VW och fler.
keywords: [personbilar, Plug and Charge, BMW, Mercedes, Porsche, Audi, VW, CCS, elbil]
---

# Personbilar — Plug & Charge

Även om Stroomlijnen-laddstationer är utformade för yrkesfordon, kan personbilar med CCS-kontakter också ladda vid våra stationer. Många moderna elbilar stöder redan Plug & Charge.

## Hur Det Fungerar för Personbilar

Plug & Charge för personbilar fungerar på samma sätt som för lastbilar — fordonet presenterar ett digitalt kontraktscertifikat via ISO 15118, och laddaren autentiserar automatiskt.

Skillnaden ligger i **hur certifikatet hamnar i bilen**:
- Bilar får vanligtvis PnC-certifikat via tillverkarens egen laddningstjänst (BMW Charging, Mercedes me Charge, etc.)
- Bilens PnC-certifikat kan vara kopplat till tillverkarens eMSP, inte direkt till Stroomlijnen
- Roaming via Hubject möjliggör cross-nätverks-PnC — bilens certifikat fungerar vid Stroomlijnen via roaming

## Stödda Märken

| Märke | PnC-metod | Fungerar vid Stroomlijnen |
|------|-------------|:----------------------:|
| **BMW** | BMW Charging / Hubject | ✅ Via roaming |
| **Mercedes-Benz** | Mercedes me Charge / Hubject | ✅ Via roaming |
| **Porsche** | Porsche Charging Service / Hubject | ✅ Via roaming |
| **Audi** | myAudi / Hubject | ✅ Via roaming |
| **VW** | Volkswagen We Charge | ⚠️ Utrullning pågår |
| **Hyundai** | Hyundai Bluelink | ⚠️ Marknadsberoende |
| **Kia** | Kia Connect | ⚠️ Marknadsberoende |
| **Tesla** | Egen Supercharger PnC | ❌ Inte via ISO 15118 |
| **Stellantis** | — | ❌ Ej stödd ännu |

### Hur Roaming PnC Fungerar

1. Du aktiverar PnC i tillverkarens app (t.ex. BMW Charging i My BMW-appen)
2. Tillverkaren installerar ett kontraktscertifikat i din bil
3. När du ansluter till en Stroomlijnen-laddare, presenterar bilen sitt certifikat
4. Vår laddare validerar det via Hubjects certifikatpool
5. Sessionen autentiseras och faktureras via tillverkarens laddningstjänst
6. Du ser sessionen i tillverkarens app (och vi ser den i vår backend)

**Obs tariffer:** Vid laddning via roaming PnC gäller din eMSP:s pris (t.ex. BMW Charging-tariffer), inte Stroomlijnen-vägtariffer. För de bästa priserna på Stroomlijnen-platser kan du överväga att begära ett direkt flottkonto.

## Direkt PnC för Personbilar

Om du hanterar en flotta personbilar (företagsbilar, t.ex.), kan du ställa in direkt Stroomlijnen PnC:

1. Registrera fordonen i Min Flotta (samma procedur som för lastbilar)
2. Aktivera PnC för varje fordon
3. För stödda märken (BMW, Mercedes, Audi) skickar vårt CPS certifikat via OEM-backend
4. Du får direkt flottpriser från Stroomlijnen istället för roamingtariffer

Detta är särskilt värdefullt för företagsflottor där kostnadshantering är viktigt.

## Praktiska Anmärkningar

### Fysisk Kompatibilitet
Stroomlijnen-stationer är utformade för lastbilar. När du laddar en personbil:
- Parkera i en avsedd bilparkering om den finns tillgänglig
- CCS-kabeln kan vara tyngre än på standard bil-laddstationer (utformad för lastbilsanslutningar)
- Kabelns räckvidd är tillräcklig — våra kablar är 5 m eller längre

### Laddhastighet
Våra laddare levererar upp till 400 kW, men din bil tar bara emot vad den kan hantera. En genomsnittlig personbil laddar med 50–250 kW beroende på modell och batteristatus.

### Bilvänliga Platser Hitta
Sök i Stroomlijnen-appen eller på kartan efter platser som är markerade med både en lastbils- och en bilpiktogram. Vissa platser har särskilda bilparkeringar med lägre kabelhållare.