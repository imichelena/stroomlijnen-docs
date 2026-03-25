---
sidebar_position: 2
title: DAF Lastbilar — Konfigurera Plug & Charge
description: Steg för steg-guide för att aktivera Plug & Charge på DAF XF, XD och XB Electric-lastbilar via DAF Connect.
keywords: [DAF, XF Electric, XD Electric, XB Electric, DAF Connect, Plug and Charge, ISO 15118]
---

# DAF Lastbilar — Konfigurera Plug & Charge

DAF:s sortiment av eldrivna lastbilar — en del av PACCAR-koncernen — stöder ISO 15118-2 Plug & Charge på alla nuvarande BEV-modeller. Konfigurationen hanteras via DAF Connect, plattformen för flottledning.

## Stödda Modeller

| Modell | Batterialternativ | Max. DC-laddning | PnC Klar |
|-------|-----------|---------------|:---------:|
| XF Electric | Upp till 525 kWh | 350 kW (CCS) | ✅ |
| XD Electric | Upp till 350 kWh | 250 kW (CCS) | ✅ |
| XB Electric | Upp till 210 kWh | 175 kW (CCS) | ✅ |

## Krav

- DAF Connect-flottledningskonto med administratörsåtkomst
- Senaste fordonssystemprogramvara (kontrollera i DAF Connect → Fordon → Diagnostik)
- Stroomlijnen-flottkonto med PnC aktiverat ([Installationsguide](../setup-guide))

## Steg för Steg: DAF Connect

### 1. Åtkomst till Laddningsinställningar

1. Logga in på [DAF Connect](https://dafconnect.paccar.com)
2. Navigera till **Flottledning** → **Elektromobilitet**
3. Om du inte ser avdelningen Elektromobilitet, kontakta DAF Connect-support för att aktivera den för ditt konto

### 2. Konfigurera Laddningspartners

1. Gå till **Elektromobilitet** → **Laddningspartners**
2. Klicka på **Lägg till laddningspartner**
3. Sök efter **"Stroomlijnen"** eller ange partner-ID `NL-STM`
4. Klicka på **Lägg till och auktorisera**

### 3. Tilldela Fordon

1. Gå till **Laddningspartners** → **Stroomlijnen B.V.** efter att ha lagt till Stroomlijnen
2. Klicka på **Hantera fordon**
3. Välj lastbilar som ska använda PnC
4. Klicka på **Spara**

### 4. Godkänn Certifikatinstallation

1. DAF Connect visar en avisering för godkännande av certifikatinstallation
2. Granska begärandedetaljer (fordon, behörigheter)
3. Klicka på **Godkänn**
4. Kontraktscertifikaten skickas till de valda lastbilar

### 5. Vänta på Installation

- Certifikatleveransen tar vanligtvis **4–8 timmar**
- Lastbilen måste vara online (kontakt på eller ansluten till ström)
- Följ statusen i DAF Connect → **Elektromobilitet** → **Certifikatstatus**

### 6. Verifiera och Testa

1. Kontrollera status i både DAF Connect och Stroomlijnen Mina Fordon
2. Anslut till en Stroomlijnen-laddare för att verifiera automatisk autentisering
3. Den första PnC-sessionen bekräftar att allt fungerar

## Notering om Aktivering av Flottledare

DAF kräver att **flottledaren** (inte enskilda förare) aktiverar PnC för varje fordon. Detta är en säkerhetsfunktion — endast behöriga flottledare kan aktivera automatisk fakturering på företagsfordon.

Om din organisation har flera flottledare:
- Var och en kan aktivera PnC för fordon under deras ledning
- En superledare kan delegera Elektromobilitetsrättigheter

## Felsökning

### Avdelningen "Elektromobilitet" syns inte
Denna funktion kräver ett DAF Connect Premium-abonnemang. Kontakta din DAF-återförsäljare för att verifiera ditt abonnemangsnummer.

### Certifikatinstallation tar längre tid än 24 timmar
1. Verifiera att lastbilen varit online i minst 1 timme efter godkännande
2. Kontrollera DAF Connect på felmeddelanden under Elektromobilitet → Meddelanden
3. Kontakta Stroomlijnen-support för att verifiera om begäran mottagits på vår sida

### Autentisering misslyckas vid laddare
1. Verifiera i DAF Connect att certifikatstatusen är "Aktiv"
2. Kontrollera om fordonets programvara är uppdaterad
3. Starta om fordonet (fullständig kontaktcykel)
4. Se den allmänna [Felsökningsguiden](../troubleshooting)

---

**Nästa:** [Konfigurera Mercedes-Benz →](./mercedes-trucks)