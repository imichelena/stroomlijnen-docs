---
sidebar_position: 3
title: RFID-kort
description: Hur du beställer, aktiverar och hanterar RFID-laddkort för din elbilflotta hos Stroomlijnen.
keywords: [RFID-kort, laddkort, NL*STM, flottladdning, aktivera kort]
---

# RFID-kort

RFID (Radio Frequency Identification) är det traditionella sättet att autentisera dig vid en laddstation. Ticka ditt kort, börja ladda — enkelt och tillförlitligt.

## Hur RFID-laddkort fungerar

Varje kort innehåller en unik identifieringskod (en **token** eller **UID**) som är kopplad till ditt flottkonto. När du tickar kortet på en laddares läsare:

1. Laddaren läser av UID från kortet
2. Skickar den via OCPP till Stroomlijnen-backend
3. Vårt system kontrollerar: är detta kort giltigt? Vilken flotta tillhör det?
4. Om giltigt → starta laddning. Sessionen faktureras till flottkontot.

Detta fungerar på alla Stroomlijnen-platser och hos **roamingpartner-laddare** i hela Europa — kortet bär din NL\*STM eMSP-identitet.

## Beställa kort

### Ny flottregistrering
När du registrerar din flotta kan du beställa kort direkt via portalen:

1. Gå till **Min Flotta → RFID-kort**
2. Klicka på **Beställ kort**
3. Ange det önskade antalet kort
4. Fyll i leveransadressen
5. Korten anländer inom 3–5 arbetsdagar

### Extra kort
Behöver du fler? Samma procedur. Du kan beställa extra kort när som helst.

### Pris
- Korten tillhandahålls kostnadsfritt med ditt flottabonnemang
- Ersättning vid förlust: gratis (de första två per år), 5 euro per kort därefter

## Aktivera ett kort

Korten levereras **föraktiverade** och är redan kopplade till din flotta. Du måste dock:

1. Gå till **Min Flotta → RFID-kort** i portalen
2. Kontrollera att de nya korten visas i din lista
3. **Tilldela varje kort till en förare** (valfritt men rekommenderat — underlättar spårning av sessioner)
4. Testa kortet vid en laddare

:::tip
Tilldela kort till specifika förare. Då visas det i dina laddningsrapporter vilken förare som använde vilket kort, vilket gör kostnadsfördelningen per flotta mycket enklare.
:::

## Hantera kort

### Deaktivera ett kort
Om ett kort har förlorats eller en förare lämnar företaget:
1. Gå till **Min Flotta → RFID-kort**
2. Sök efter kortet (på nummer eller förarnamn)
3. Klicka på **Deaktivera**
4. Kortet fungerar omedelbart inte längre på någon laddare

### Återaktivera ett kort
Den "förlorade" kortet hittades ändå? Du kan återaktivera det på samma sätt.

### Kortgrupper
För större flottor kan du organisera korten i grupper:
- **Per fordon** — ett kort per lastbil
- **Per förare** — personliga kort som fungerar på alla fordon
- **Per avdelning** — separat fakturering per företagsenhet

## Förlorade eller stulna kort

1. **Deaktivera omedelbart** i portalen (eller ring oss)
2. Kortet blir ogiltigt på alla anslutna laddare inom 60 sekunder
3. Beställ en ersättning
4. Eventuella kostnader före deaktivering visas på din vanliga faktura

:::caution
Deaktivera förlorade kort så snabbt som möjligt. Tills dess kan vem som helst med kortet ladda på ditt konto. Vi bearbetar deaktivering inom 60 sekunder — men du måste ta initiativet.
:::

## RFID jämfört med Plug & Charge

| Funktion | RFID-kort | Plug & Charge |
|---------|-----------|---------------|
| Inställtidsåtgärd | Beställ kort, tilldela förare | Registrera VIN, installera certifikat |
| Föraråtgärd | Ticka kort för/efter laddning | Bara sticka in |
| Fungerar med flera flottor | Kortet följer föraren | Certifikatet följer fordonet |
| Förlustrisk | Kort kan förloras/stulas | Inget fysiskt att förlora |
| Roaming | Fungerar överallt | Växer, men inte universellt ännu |
| Återfallsalternativ | Fungerar alltid | RFID behövs som återfallsalternativ |

**Vår rekommendation:** Ställ in Plug & Charge för enkelheten, håll RFID-kort som reservalternativ. Bälte och säkerhetsbälte.

## Tekniska detaljer

- **Kortteknologi:** MIFARE DESFire EV2 (krypterad, säker)
- **Frekvens:** 13,56 MHz (NFC)
- **Standard:** ISO 14443
- **UID-format:** 14 hexadecimala tecken
- **Varumärke:** Stroomlijnen-logotyp med NL\*STM-identifikation

## Nästa steg

- [Ställ in Plug & Charge](/docs/plug-and-charge/setup-guide) bredvid dina RFID-kort
- [Hantera dina förare](/docs/fleet-management/driver-management)
- [Förstå dina fakturor](/docs/fleet-management/invoicing)