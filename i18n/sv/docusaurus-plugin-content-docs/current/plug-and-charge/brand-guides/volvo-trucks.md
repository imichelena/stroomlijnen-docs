---
sidebar_position: 1
title: Volvo Lastbilar — Konfigurera Plug & Charge
description: Steg för steg-guide för att aktivera Plug & Charge på Volvo FH, FM, FE och FL elektriska lastbilar via Volvo Connect.
keywords: [Volvo, FH Electric, FM Electric, Volvo Connect, Plug and Charge, ISO 15118, flottladdning]
---

# Volvo Lastbilar — Konfigurera Plug & Charge

Volvo var en av de första lastbilstillverkarna som helt stödde ISO 15118-2 Plug & Charge. Alla nuvarande Volvo Electric-modeller (FH, FM, FE, FL) stöder PnC med firmware v3.2 eller högre.

## Stödda Modeller

| Modell | Batterialternativ | Max. DC-laddning | PnC Klar |
|-------|-----------|---------------|:---------:|
| FH Electric | 540 kWh | 250 kW (CCS) | ✅ |
| FM Electric | 540 kWh | 250 kW (CCS) | ✅ |
| FE Electric | 265 kWh | 150 kW (CCS) | ✅ |
| FL Electric | 265 kWh | 150 kW (CCS) | ✅ |

## Krav

- Volvo Connect-flottledningskonto med administratörsåtkomst
- Lastbilsprogramvara v3.2 eller högre (kontrollera i Volvo Connect → Fordon → Programvara)
- Stroomlijnen-flottkonto med PnC aktiverat ([Installationsguide](../setup-guide))

## Steg för Steg: Volvo Connect

### 1. Kontrollera Firmwareversionen

1. Logga in på [Volvo Connect](https://connect.volvotrucks.com)
2. Välj ditt fordon från flottlistan
3. Gå till **Fordoninformation** → **Programvara**
4. Verifiera att firmwareversionen är **3.2 eller högre**
5. Om inte, kontakta din Volvo-återförsäljare för en uppdatering

### 2. Aktivera Laddningstjänster

1. Gå i Volvo Connect till **Tjänster** → **Laddningstjänster**
2. Om detta avsnitt inte är synligt, be din Volvo Connect-administratör om att aktivera **eMobility-modulen** för ditt konto
3. Klicka på **Hantera laddningspartners**

### 3. Auktorisera Stroomlijnen

1. Sök i listan över laddningspartners efter **"Stroomlijnen B.V."**
   - Om detta inte anges, klicka på **Lägg till partner** och sök efter "Stroomlijnen" eller använd partnerkoden `NL-STM`
2. Klicka på **Auktorisera**
3. Granska behörigheterna:
   - ✅ Certifikatinstallation — Krävs för PnC
   - ✅ Fordonsidentifiering — Krävs för certifikatsassociation
   - ❌ Platsdata — Ej krävt, du kan neka detta
4. Klicka på **Bekräfta auktorisering**

### 4. Välj fordon

1. Efter auktorisering ser du en skärm för fordonsväljning
2. Markera rutorna för alla lastbilar som ska använda Stroomlijnen PnC
3. Klicka på **Tillämpa**

### 5. Certifikatinstallation

Efter auktorisering skickar Stroomlijnens backend en certifikatinstallationsbegäran:

1. Begäran visas i Volvo Connect → **Meddelanden** (vanligtvis inom 30 minuter)
2. Volvos system pushar kontraktscertifikatet till lastbilen
3. Lastbilen måste vara **online** för att ta emot det (kontakt på, eller ansluten till AC-laddare)
4. Installationen är vanligtvis slutförd inom **1–2 timmar**

Du kan följa förloppet i:
- **Volvo Connect** → Fordon → Laddningstjänster → Certifikatstatus
- **Stroomlijnen Min Flotta** → Fordon → fliken Plug & Charge

### 6. Verifiera installationen

Så snart statusen "Aktiv" visas i båda portalerna:

1. Kör till en Stroomlijnen-laddare
2. Anslut CCS-kabeln
3. Laddaren bör visa "Plug & Charge — Autentiserad" inom 5–10 sekunder
4. Laddningen startar automatiskt

## Firmware-uppdateringsförfarande

Om din lastbils firmware är lägre än v3.2:

1. **Kontakta din Volvo-återförsäljare** för en firmware-uppdatering
2. Uppdateringar kan utföras hos återförsäljaren (~2 timmar)
3. Vissa uppdateringar är tillgängliga som **OTA (Over-The-Air)** — kontrollera Volvo Connect → Fordon → Programvaruuppdateringar
4. Återgå till steg 2 efter uppdateringen

:::caution
Försök inte att uppdatera lastbilens firmware själv. Firmware-uppdateringar måste utföras av en auktoriserad Volvo-återförsäljare eller via det officiella OTA-kanalen.
:::

## Felsökning

### "Laddningstjänster" syns inte i Volvo Connect
Ditt Volvo Connect-abonnemang kan sakna eMobility-modulen. Kontakta din Volvo-återförsäljare eller Volvo Connect-support för aktivering.

### Certifikatet visar mer än 24 timmar "Under behandling"
1. Verifiera att lastbilen varit online (kontakt på) under minst 30 minuter efter begäran
2. Kontrollera Volvo Connect för eventuella öppna auktoriseringsbegäranden
3. Kontakta Stroomlijnen-support — vi kan aktivera certifikatbegäran igen

### PnC misslyckas men certifikatet visar "Aktiv"
1. Kontrollera laddarens display för specifika felkoder
2. Försök med en annan CCS-kabel (om flera är tillgängliga)
3. Stäng av lastbilens kontakt, vänta 30 sekunder, sätt på den igen och anslut på nytt
4. Se den allmänna [Felsökningsguiden](../troubleshooting)

### Flera Volvo-konton
Om din flotta hanteras via flera Volvo Connect-konton (t.ex. olika dotterbolag), måste varje konto auktorisera Stroomlijnen separat. Kontakta din Stroomlijnen-kontohanterare för multi-konto-inställning.

---

**Nästa:** [DAF Inställningar →](./daf)