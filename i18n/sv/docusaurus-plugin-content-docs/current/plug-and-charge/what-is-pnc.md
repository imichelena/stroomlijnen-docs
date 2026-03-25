---
sidebar_position: 1
title: Vad är Plug & Charge?
description: "När en Plug & Charge-kompatibel lastbil ansluter till vår laddare startar faktureringen automatiskt — ingen behörighetskontroll, inga appar, ingen åtgärd från föraren krävs."
keywords: [Plug and Charge, ISO 15118, automatisk laddning, el-lastbil, flottladdning, PnC]
---

# Vad är Plug & Charge?

**När en Plug & Charge-kompatibel lastbil ansluter till vår laddare startar faktureringen automatiskt — ingen behörighetskontroll, inga appar, ingen åtgärd från föraren krävs.**

Det är allt. Anslut, gå därifrån, kom tillbaka till en uppladdad lastbil. Laddaren och lastbilen hanterar autentisering, auktorisering och fakturering sinsemellan.

## Problemet som Plug & Charge löser

För närvarande kräver de flesta laddningssessioner att föraren:
1. Har rätt behörighetskontroll eller app
2. Vet vilket nätverk som hanterar denna laddare
3. Använder en behörighetskontroll, skannar en QR-kod eller startar en session i en app
4. Väntar på auktorisering
5. Sedan ansluter

För en personbilägare som laddar en gång i veckan är detta ett litet problem. För en flotta med 20 lastbilar med flera förare över skift är det en operativ börda:

- Förare glömmer behörighetskontroller
- Behörighetskontroller förloras eller skadas
- Nya förare måste utbildas
- Olika laddningsnätverk kräver olika appar
- Delade fordon kräver delade behörighetskontroller (säkerhetsrisk)
- Varje misslyckad autentisering är förlorad laddningstid

### De verkliga kostnaderna för problemet

För en flotta med 20 el-lastbilar:
- Genomsnittligt **3 minuter** per session på autentiseringsproblem
- Genomsnittligt **2 laddningssessioner** per lastbil per dag
- Det är **120 minuter per dag** — två timmars förartid som slösas bort på att använda behörighetskontroller
- Vid €35/timme fullt belastad förarkostnad: **€1.225/månad** i förlorad produktivitet
- Plus misslyckade sessioner, supportanrop och frustrerade förare

## Hur Plug & Charge löser problemet

Med Plug & Charge:
1. Föraren ansluter kabeln
2. **Klar.**

Lastbilens certifikat hanterar allt. Laddaren vet vem du är, vilken flotta du tillhör och vart fakturan ska skickas — allt kryptografiskt utbytt på mindre än 5 sekunder.

Inga behörighetskontroller att förlora. Inga appar att installera. Ingen utbildning behövs. Inget som skiljer en förare från dag ett från en veteran på 10 år.

## Vem kan använda det?

Plug & Charge kräver:

1. **Ett kompatibelt fordon** — lastbilen eller skåpbilen måste stödja ISO 15118-2 eller högre. Se vår lista med [Kompatibla fordon](/docs/plug-and-charge/compatible-vehicles).
2. **En kompatibel laddare** — måste stödja ISO 15118 och vara ansluten till ett Plug & Charge-ekosystem. Alla Stroomlijnens laddare stöder detta.
3. **Certifikatprovisionering** — ditt fordon behöver ett kontraktscertifikat. Vi hanterar detta via vårt portal.

## Är det säkert?

Ja. Plug & Charge använder samma typ av kryptografi som skyddar internetbanker:

- **X.509-certifikat** — varje fordon har ett unikt digitalt certifikat
- **PKI (Public Key Infrastructure)** — en förtroendekedja från fordonet till eMSP
- **TLS-kryptering** — all kommunikation mellan fordon och laddare är krypterad
- **Inga känsliga uppgifter exponeras** — kabeln bär krypterade certifikatuppgifter, inga kontonummer

Ett stulet fordon kan avaktiveras på distans genom att återkalla certifikatet. En RFID-behörighetskontroll fungerar tills någon märker att den är borta.

:::info
Plug & Charge är **säkrare** än RFID-behörighetskontroller. Behörighetskontroller kan klonas (även om moderna behörighetskontroller gör detta svårt). Certifikat inte — de använder asymmetrisk kryptografi med 256-bitarsnycklar.
:::

## Affärsfallet

För flottchefer är Plug & Charge inte bara bekvämt — det är en kostnadsbesparing:

| Faktor | RFID | Plug & Charge |
|--------|------|---------------|
| Förartid per session | 2–5 minuter | 0 minuter |
| Administrativ börda för behörighetskontroller | Hög | Inga |
| Risk för förlust/stöld | Reell | Inget |
| Utbildning för nya förare | Utfärda behörighetskontroll, förklara processen | "Bara anslut" |
| Fordon med flera skift | Delade behörighetskontroller (riskabelt) | Automatiskt per fordon |
| Månadsvis administrativ tid | Timmar | Minuter |

## Kom igång

Redo att konfigurera Plug & Charge för din flotta?

1. **[Kontrollera fordonkompatibilitet](/docs/plug-and-charge/compatible-vehicles)** — stöder ditt fordon det?
2. **[Förstå hur det fungerar](/docs/plug-and-charge/how-it-works)** — tekniken bakom
3. **[Konfigurera det](/docs/plug-and-charge/setup-guide)** — steg för steg i vårt portal
4. **[Tillverkarspecifika instruktioner](/docs/plug-and-charge/brand-guides/volvo-trucks)** — detaljerade instruktioner per tillverkare