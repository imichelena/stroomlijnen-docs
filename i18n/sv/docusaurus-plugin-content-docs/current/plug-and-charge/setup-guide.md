---
sidebar_position: 4
title: Installationshandbok Plug & Charge
description: Hur du konfigurerar Plug & Charge för din flotta via Stroomlijnen-portalen — från registrering till den första automatiserade sessionen.
keywords: [Konfigurera Plug and Charge, flottregistrering, kontraktscertifikat, Mina Flotta-portalen, PnC-aktivering]
---

# Installationshandbok Plug & Charge

Att konfigurera Plug & Charge för din flotta tar cirka 15 minuter av portalarbete. När den är konfigurerad autentiserar varje registrerad lastbil automatiskt och laddar på alla Stroomlijnen-platser — inga pass, inga appar.

## Krav

Innan du börjar:

- [ ] Ett **Stroomlijnen-flottkonto** (registrera via [stroomlijnen.nl](https://stroomlijnen.nl) eller kontakta din kundansvarige)
- [ ] **Chassinumren** för dina lastbilar (Fordonsidentifikationsnummer)
- [ ] Tillgång till ditt OEM-flottportalsystem (Volvo Connect, DAF Connect, Fleetboard, etc.)
- [ ] Ett **kompatibelt fordon** (se [Kompatibla fordon](./compatible-vehicles))

## Steg 1: Logga in på Mina Flotta

Navigera till **my.stroomlijnen.nl** och logga in med dina flottadministratörsuppgifter.

Om du inte har ett konto:
1. Klicka på **Registrera** och fyll i dina företagsuppgifter (företagsnummer, fakturaadress)
2. Du kommer att få en bekräftelse-e-post — klicka på länken
3. Ditt konto kommer att granskas och aktiveras inom en arbetsdag

## Steg 2: Lägg till dina fordon

I Mina Flotta-instrumentpanelen:

1. Gå till **Fordon** → **Lägg till fordon**
2. Fyll i fordonets uppgifter:
   - **Chassinummer** — 17-teckens fordonssignum (på förarsidodörren eller på registreringsbeviset)
   - **Registreringsskylt** — För identifiering och rapportering
   - **Märke/Modell** — Välj från menyn (t.ex. Volvo FH Electric)
   - **Smeknamn** — Valfritt, för enkel identifiering (t.ex. "Lastbil 014 — Stockholmstrafik")
3. Klicka på **Spara & Fortsätt**

Upprepa detta för varje lastbil i din flotta. Du kan också **importera i bulk** via CSV-uppladdning.

### CSV-format

```csv
chassinummer,registreringsskylt,märke,modell,smeknamn
YV2RT60A1PB123456,ABC123,Volvo,FH Electric,Lastbil 014
XLRAE75PC0H987654,DEF456,DAF,XF Electric,Lastbil 022
```

## Steg 3: Aktivera Plug & Charge

För varje fordon:

1. Gå till **Fordon** → Välj ett fordon → fliken **Plug & Charge**
2. Ställ **Aktivera Plug & Charge** på PÅ
3. Systemet kommer att:
   - Generera ett **kontraktscertifikat** för detta fordon
   - Begära installation via OEM:s certifikatprovisioneringstjänst
   - Visa status: `Väntar → Installerar → Aktiv`

:::note Installations tid Certifikat
Certifikatinstallationen tar vanligtvis **1–24 timmar**, beroende på OEM:
- **Volvo**: Vanligtvis inom 2 timmar via Volvo Connect
- **DAF**: 4–8 timmar via DAF Connect
- **Mercedes-Benz**: 2–6 timmar via Fleetboard
- **Scania**: 4–12 timmar via Scania Fleet Management
- **MAN**: 6–24 timmar via RIO-plattformen

Lastbilen måste vara **online** (kontakt på eller ansluten till laddning) för att certifikatet ska kunna levereras.
:::

## Steg 4: Auktorisera via OEM-portalen

Vissa OEM:er kräver att du godkänner tredjepartstjänster för PnC i deras flottportalsystem:

### Volvo Connect
1. Logga in på Volvo Connect → **Tjänster** → **Laddningstjänster**
2. Sök efter "Stroomlijnen B.V." i partnerlistan och klicka på **Auktorisera**
3. Bekräfta de fordon som ska inkluderas
4. Se [Volvo-varumärkesguiden](./brand-guides/volvo-trucks) för detaljerade steg

### DAF Connect
1. Logga in på DAF Connect → **Inställningar** → **Laddningspartners**
2. Aktivera Stroomlijnen och välj fordon
3. Se [DAF-varumärkesguiden](./brand-guides/daf) för detaljerade steg

### Mercedes-Benz Fleetboard
1. Logga in på Fleetboard → **eMobility** → **Laddningshantering**
2. Lägg till Stroomlijnen som laddningsleverantör
3. Se [Mercedes-varumärkesguiden](./brand-guides/mercedes-trucks) för detaljerade steg

## Steg 5: Verifiera aktivering

När certifikatet har installerats:

1. I Mina Flotta → **Fordon** → Välj ett fordon → fliken **Plug & Charge**
2. Statusen bör visa: **✅ Aktiv**
3. Certifikatdetaljer visas:
   - EMAID (e-Mobility-kontoidentifierare)
   - Certifikatets utgångsdatum
   - Senaste lyckade PnC-session (om tillgänglig)

## Steg 6: Testa

Kör till en Stroomlijnen-plats och anslut kabeln. Laddningssessionen bör starta inom 5–10 sekunder utan manuell åtgärd.

**Vad att leta efter:**
- Laddarens display visar "Plug & Charge — Verifierad" (eller liknande)
- Sessionen visas i Mina Flotta → **Sessioner** inom 1 minut
- Inga RFID-kort eller app-åtgärder behövdes

## Felsökning av installation

| Problem | Lösning |
|---------|----------|
| Certifikatstatus förblir "Väntar" | Se till att lastbilen är online (kontakt på). Kontrollera OEM-portalen för eventuella väntande auktoriseringar. |
| OEM-portalen visar inte Stroomlijnen | Kontakta oss — det kan vara så att vi måste etablera en backend-anslutning för ditt specifika OEM-konto. |
| Certifikat installerat men PnC misslyckas | Se [Felsökningsguiden](./troubleshooting) för detaljerad diagnostik. |
| Fel "EMAID inte hittad" på laddare | Certifikatet kan vara inte har levererats till vår backend ännu. Vänta 1 timme och försök igen. |
| Bulkimportfel | Kontrollera chassinumrens format (17 tecken, inga O/I/Q), kontrollera att CSV-kodningen är UTF-8. |

## Hantera certifikat

### Förlängning
Kontraktscertifikat upphör att gälla efter **2 år**. Mina Flotta-portalen skickar e-postmeddelanden 60, 30 och 7 dagar före utgången. Förlängning är automatisk om ditt flottabonnemang är aktivt.

### Återkallande
Om en lastbil säljs, stjäls eller tas ur bruk:
1. Gå till **Fordon** → Välj ett fordon → fliken **Plug & Charge**
2. Klicka på **Återkalla certifikat**
3. Certifikatet kommer att ogiltigförklaras omedelbart på alla anslutna laddningsnätverk

### Överföring
När en lastbil överförs till en annan faktureringsenhet inom din organisation:
1. Återkalla det nuvarande certifikatet
2. Registrera fordonet igen under den nya faktureringsenheten
3. Ett nytt certifikat kommer att utfärdas

---

**Nästa:** [Varumärkesguider →](./brand-guides/volvo-trucks)