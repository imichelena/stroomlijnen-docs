---
sidebar_position: 2
title: Fordonsadministration
description: Hur du registrerar, konfigurerar och hanterar elfordon i Stroomlijnen Mina Flottans portal.
keywords: [fordonsadministration, flottregistrering, ellastbil, VIN, RFID-tilldelning, laddningspolicy]
---

# Fordonsadministration

Avdelningen fordon i Mina Flotta är platsen där du registrerar lastbilar och skåpbilar, konfigurerar deras laddinställningar och övervakar deras status.

## Lägga till fordon

### Enskilt fordon

1. Gå till **Fordon** → **Lägg till fordon**
2. Fyll i de obligatoriska fälten:
   - **VIN** — 17-teckens fordonssignum
   - **Registreringsskylt** — Nederländsk eller EU-format
   - **Märke & Modell** — Välj från menyn
   - **Modellår** — Årsmodell
   - **Batterikapacitet** — I kWh (automatiskt ifyllt för kända modeller)
3. Valbara fält:
   - **Smeknamn** — För enkel identifiering (t.ex. "Amsterdam 014")
   - **Avdelning/Grupp** — För organisatorisk filtrering
   - **Kostnadsställe** — För faktureringsändamål
4. Klicka på **Spara**

### Bulkimport

För flottor med många fordon:

1. Gå till **Fordon** → **Importera**
2. Ladda ner CSV-mallen
3. Fyll i dina fordonsuppgifter
4. Ladda upp den ifyllda CSV-filen
5. Kontrollera importöversikten — korrigera eventuella valideringsfel
6. Klicka på **Bekräfta import**

## Fordonsinformation

Detaljsidan för varje fordon visar:

### Status
- **Aktuell status** — Laddning / Inaktiv / Offline
- **Senast sedd** — När fordonet senast kommunicerade med en laddare
- **Batterinivå** — Om rapporterat av fordonet under den senaste sessionen

### Laddkonfiguration
- **Autentiseringsmetod** — PnC, RFID eller båda
- **Plug & Charge-status** — Aktiverad/Inaktiverad, certifikatstatus
- **Tilldelade RFID-kort** — Vilka kort som är kopplade till detta fordon
- **Laddningspolicy** — Maximal laddhastighet, önskat SoC-mål, planerade laddningsfönster

### Sessionshistorik
- Lista över alla tidigare laddningssessioner för detta fordon
- Filtrera på datumintervall, plats eller autentiseringsmetod
- Total energi, totala kostnader och genomsnittlig sessionstid

### Dokument
- Registreringsbevis (valfritt upploadning)
- Försäkringscertifikat (valfritt upploadning)
- Underhållsdata

## Laddningspolicy

Du kan ställa in laddningspolicy per fordon eller per grupp:

### Effektbegränsning
Ställ in en maximal laddhastighet. Användbart för:
- Batterihållbarhet (begränsa till 80% av den maximala effekten)
- Kostnadshantering (lägre effekt = lägre kapacitetskostnader på vissa platser)

### SoC-mål
Ställ in ett önskat laddningsnivå (State of Charge). När detta uppnås, sänker laddaren effekten eller stannar. Detta förlänger batteriets livslängd och gör laddare tillgängliga för andra fordon.

### Planerad laddning
Definiera tidsfönster när laddning får ske. Användbart för:
- Låga elpriser under vissa tider
- Hantering av nätbelastning
- Optimering för avgångstid (ladda till 90% före 06:00)

### Prioritet
När flera flottfordon befinner sig på samma plats och effekten är begränsad, bestämmer prioriteringsinställningarna vilka fordon som får full effekt först.

## Fordonsgrupper

Organisera fordon i grupper för enklare hantering:

- **Per rutt** — Amsterdam-rutter, Rotterdam-rutter
- **Per typ** — Långväga, regionala leveranser, sista milen
- **Per avdelning** — Operativ, kundservice

Grupper kan ha delad laddningspolicy och faktureringsinställningar.

## Avveckla ett fordon

När ett fordon lämnar er flotta:

1. Gå till **Fordon** → Välj fordon → **Inställningar**
2. Klicka på **Avveckla fordon**
3. Detta kommer att:
   - Återkalla alla aktiva PnC-certifikat
   - Koppla bort alla RFID-kort
   - Arkivera sessionshistoriken för fordonet (fortfarande tillgänglig för rapportering)
   - Stoppa faktureringen för detta fordon

Fordonet kan återaktiveras om det återvänder till flottan.

## Dataexport

Exportera fordondata för integrering med era egna system:

- **Fordonslista** — CSV med alla fordonsspecifikationer
- **Sessionshistorik** — CSV per fordon eller för alla fordon
- **API** — Programmerad åtkomst till fordondata (se Översikt Flottadministration → API)