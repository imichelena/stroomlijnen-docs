---
sidebar_position: 6
title: Andere Vrachtwagenmerken — Plug & Charge
description: Plug & Charge-status en installatieinfo voor Scania, MAN, Renault Trucks, Ford Trucks, IVECO en VW Bedrijfsvoertuigen.
keywords: [Scania, MAN, Renault Trucks, IVECO, Plug and Charge, ISO 15118, electric truck]
---

# Andere Vrachtwagenmerken — Plug & Charge

Deze pagina behandelt PnC-installatie voor vrachtwagenmerken die nog geen eigen uitgebreide handleiding hebben. Naarmate de adoptie groeit, splitsen we deze uit in afzonderlijke handleidingen.

## Scania BEV

**Modellen:** R-serie BEV, P-serie BEV
**PnC-status:** ✅ Ondersteund (firmware 2025.3+)
**Vlootportaal:** Scania Fleet Management

### Installatiestappen

1. Log in op [Scania Fleet Management](https://my.scania.com)
2. Ga naar **Elektrificatie** → **Laaddiensten**
3. Klik op **Laadpartner toevoegen** → zoek op "Stroomlijnen"
4. Autoriseer en selecteer voertuigen
5. Scania pusht certificaten via hun telematicagateway
6. **Typische installatietijd: 4–12 uur**

### Opmerkingen
- Scania vereist firmwareversie 2025.3 of hoger voor volledige PnC-ondersteuning
- Oudere firmware ondersteunt ISO 15118-communicatie maar niet de verwerking van contractcertificaten
- Neem contact op met uw Scania-dealer voor firmware-updates — OTA-updates voor PnC worden geleidelijk uitgerold
- Het telematicasysteem van Scania gebruikt een aparte mobiele verbinding van het infotainment van het voertuig — zorg dat de telematica-SIM actief is

## MAN Electric

**Modellen:** eTGX, eTGS, eTGL, eTGM
**PnC-status:** ✅ Ondersteund op eTGX/eTGS | ⚠️ Wordt uitgerold op eTGL/eTGM
**Vlootportaal:** RIO-platform

### Installatiestappen

1. Log in op [RIO](https://rio.cloud)
2. Navigeer naar **Diensten** → **Laadbeheer**
3. Klik onder **Externe Laadpartners** op **Partner verbinden**
4. Zoek **"Stroomlijnen B.V."** en klik op **Autoriseren**
5. Selecteer voertuigen en bevestig
6. **Typische installatietijd: 6–24 uur**

### Opmerkingen
- Het RIO-platform is gedeeld door MAN en enkele andere TRATON-merken
- eTGX en eTGS hebben volledige PnC-ondersteuning sinds eind 2025
- eTGL en eTGM ontvangen PnC-ondersteuning via gefaseerde firmware-updates gedurende 2026
- MAN-certificaten gebruiken een hardware security module (HSM) in het voertuig — dit biedt uitstekende beveiliging maar betekent dat certificaten alleen geïnstalleerd kunnen worden wanneer de beveiligingsmodule van de vrachtwagen in "provisioningmodus" staat (eerste 30 minuten na contact aan)

## Renault Trucks E-Tech

**Modellen:** E-Tech T, E-Tech D, E-Tech Master (bestelwagen)
**PnC-status:** ⚠️ Komt H1 2026
**Vlootportaal:** Renault Trucks Fleet Management

### Huidige Status
- ISO 15118-2-hardware is aanwezig in E-Tech T en E-Tech D
- PnC-software-activering wordt verwacht via OTA-update in de eerste helft van 2026
- Renault Trucks voert PnC-interoperabiliteitstests uit met Hubject sinds Q3 2025
- De E-Tech Master-bestelwagen heeft geen ISO 15118-ondersteuning

### Wat Nu te Doen
1. Zorg dat uw vlootportaalaccount is ingesteld met beheerderstoegang
2. Registreer uw voertuigen in het Stroomlijnen Mijn Vloot-portaal
3. Gebruik RFID-passen voor laden in de tussentijd
4. Wij informeren u wanneer PnC beschikbaar wordt voor Renault Trucks

## Ford Trucks

**Modellen:** F-MAX Electric
**PnC-status:** ❌ Nog niet ondersteund

### Huidige Status
- De Ford F-MAX Electric (geproduceerd bij Ford Otosan in Turkije) ondersteunt momenteel geen ISO 15118
- Ford Otosan heeft ISO 15118-ondersteuning aangekondigd in hun routekaart voor modeljaar 2027
- Gebruik RFID-passen of de Stroomlijnen-app voor laden

## IVECO

**Modellen:** S-eWay
**PnC-status:** ⚠️ Aangekondigd voor modellen 2026

### Huidige Status
- IVECO heeft ISO 15118-2 PnC-ondersteuning aangekondigd voor S-eWay-vrachtwagens van modeljaar 2026
- Modellen van vóór 2026 beschikken niet over de benodigde ISO 15118-hardware
- Ombouw is niet beschikbaar — PnC vereist fabriek-geïnstalleerde communicatiemodules
- Gebruik RFID-passen voor huidige S-eWay-vrachtwagens

## VW Bedrijfsvoertuigen

**Modellen:** ID. Buzz Cargo
**PnC-status:** ⚠️ Beperkte ondersteuning

### Huidige Status
- De ID. Buzz Cargo ondersteunt ISO 15118-2, maar PnC wordt beheerd via het VW We Charge-ecosysteem
- Cross-provider PnC (Stroomlijnen-certificaten gebruiken met VW-voertuigen) is technisch mogelijk maar vereist aanvullende configuratie
- Neem contact op met Stroomlijnen-support voor VW-specifieke PnC-configuratie

---

:::info Uw merk niet gevonden?
Neem contact op via [info@stroomlijnen.nl](mailto:info@stroomlijnen.nl). We breiden PnC-ondersteuning actief uit naarmate meer OEM's ISO 15118 inschakelen.
:::

**Volgende:** [Probleemoplossing →](../troubleshooting)
