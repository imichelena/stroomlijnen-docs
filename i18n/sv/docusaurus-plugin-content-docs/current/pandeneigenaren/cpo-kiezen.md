---
sidebar_position: 4
title: Välja en CPO
description: Checklista och överväganden när du väljer en Charge Point Operator för din plats.
keywords: [Välja CPO, OCPP, roaming, laddstolshantering, kontraktform, leverantörsbunden]
---

# Välja en CPO

En **CPO (Charge Point Operator)** hanterar ditt laddningsstolles drift: användarauktorisation, fakturering, övervakning och felhantering. Du ingår ett kontrakt som vanligtvis varar i 5 till 10 år - ett välgrundat val är därför viktigt.

## Vad gör en CPO exakt?

| Uppgift | Förklaring |
|---|---|
| **Auktorisation** | Kontrollerar om en användare får ladda (via laddkort, QR eller Plug & Charge) |
| **Mätning** | Registrerar exakt hur mycket kWh som har laddats per session |
| **Fakturering** | Fakturerar användaren och beräknar din andel |
| **Övervakning** | Håller koll på laddstolens status (online, fel, i bruk) |
| **Felhantering** | Lös tekniska problem - på distans eller på plats |
| **Rapportering** | Levererar en månatlig översikt av sessioner och intäkter |

## Checklista när du väljer en CPO

### ✅ Öppen standard (OCPP)

Se till att din laddstol kommunicerar via **OCPP 2.0.1** (Open Charge Point Protocol). Detta förhindrar leverantörsbunden: du kan byta CPO utan att behöva byta ut hårdvaran.

**Fråga till CPO:** "Är er system OCPP-kompatibelt och kan jag ansluta stolpen till en annan backoffice senare?"

---

### ✅ Roaming

Kontrollera om CPO är ansluten till roamingnätverk (OCPI). Då kan förare med vilket som helst nederländskt eller europeiskt laddkort använda din laddstol - inte bara kunder från en enda leverantör.

**Fråga:** "Vilka roamingnätverk är anslutna? Fungerar min stol med Vattenfall, Shell Recharge, Allego och andra stora leverantörer?"

---

### ✅ Ägarens instrumentpanel

Du bör som ägare kunna se hur mycket som har laddats, när, av vem (anonymt), och vad du har tjänat.

**Fråga:** "Har ni en ägarens instrumentpanel? Kan jag se realtidsdata för sessioner?"

---

### ✅ Felhantering och svarstid

Särskilt för lastbilar som laddar på natten är tillgänglighet kritisk. Vem hanterar felen, och hur snabbt?

**Fråga:** "Vad är er genomsnittliga svarstid vid fel? Har ni en 24/7-felhantering?"

---

### ✅ Kontraktform och äganderättsfråga

- Hyra, köpa eller leasa? Vem är ägare till hårdvaran efter avtalstiden?
- Vad är uppsägningstiderna?
- Vad händer om CPO går i konkurs?

**Fråga:** "Om jag säger upp kontraktet, kan jag ta med mig hårdvaran eller flytta den till en annan CPO?"

---

### ✅ Stöd för bidrag

Hjälper CPO till med SPRILA-ansökan, eller låter du det vara ditt ansvar?

---

## Frågor att ställa till varje CPO

1. Är er system OCPP 2.0.1-kompatibelt?
2. Vilka roamingnätverk är anslutna?
3. Kan jag ansluta stolpen till en annan backoffice senare?
4. Vem är ägare till hårdvaran - du eller jag?
5. Vad är uppsägningstiderna och kontraktstiden?
6. Hjälper ni till med SPRILA-bidragsansökan?
7. Vad är er SLA för fel (svarstid, tillgänglighetsgaranti)?
8. Har ni referenser från liknande platser (teatrar, kulturella institutioner)?

---

:::note
\* Stroomlijnen erbjuder ett specifikt paket för kulturella platser, inklusive SPRILA-behandling, ett kulturellt pris, dynamisk effekstyrning baserad på er kontrakterade effekt, och ett eget krypterat nätverk utan internetanslutning av hårdvaran till externa servrar. Systemet fungerar också vid internetavbrott. Mer information: [stroomlijnen.nl](https://stroomlijnen.nl)
:::