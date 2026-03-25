---
sidebar_position: 5
title: MAN Electric — Konfigurera Plug & Charge
description: Steg för steg-guide för att aktivera Plug & Charge på MAN eTGX och eTGS eldrivna lastbilar via RIO-plattformen.
keywords: [MAN, eTGX, eTGS, RIO, Plug and Charge, ISO 15118, TRATON]
---

# MAN Electric — Konfigurera Plug & Charge

MAN:s sortiment av eldrivna lastbilar (som är en del av TRATON-gruppen tillsammans med Scania) stöder ISO 15118-2 Plug & Charge på modellerna eTGX och eTGS. Modellerna eTGL och eTGM kommer att få PnC-stöd via fasvis firmware-uppdatering under 2026. Konfigurationen hanteras via RIO-plattformen.

## Stödda Modeller

| Modell | Batterialternativ | Max. DC-laddning | PnC Klar |
|-------|-----------|---------------|:---------:|
| eTGX | Upp till 480 kWh | 375 kW (CCS) | ✅ |
| eTGS | Upp till 400 kWh | 250 kW (CCS) | ✅ |
| eTGL | Upp till 265 kWh | 150 kW (CCS) | ⚠️ Kommer att distribueras |
| eTGM | Upp till 265 kWh | 150 kW (CCS) | ⚠️ Kommer att distribueras |

## Krav

- RIO-plattformskonto med åtkomst för flottledare
- eTGX/eTGS med senaste firmware (slutet av 2025 eller senare)
- Stroomlijnen-flottkonto med PnC aktiverat ([Installationsguide](../setup-guide))

## Steg för Steg: RIO-plattformen

### 1. Åtkomst till Laddningshantering

1. Logga in på [RIO](https://rio.cloud)
2. Navigera till **Tjänster** → **Laddningshantering**
3. Om Laddningshantering inte är synlig måste den aktiveras — gå till **Marketplace** → sök efter "Laddningshantering" → **Aktivera**

### 2. Anslut Stroomlijnen

1. Gå till Laddningshantering och klicka på **Laddningspartners**
2. Klicka på **Anslut ny partner**
3. Sök efter **"Stroomlijnen B.V."** (eller använd eMSP-ID `NL-STM`)
4. Klicka på **Anslut & Auktorisera**
5. Acceptera villkoren

### 3. Välj Fordon

1. Efter anslutning visas de berättigade fordonen på partner sidan
2. Markera rutorna för lastbilar som ska ha PnC aktiverat
3. Klicka på **Spara urval**

### 4. Vänta på Certifikatinstallation

- RIO aktiverar certifikatprovisionering via MAN:s telematiksystem
- Lastbilen måste vara online med kontakt på
- **Viktigt:** MAN använder en Hardware Security Module (HSM) för certifikatlagring. HSM går i "provisioneringsläge" under de första 30 minuterna efter att kontakten slås på. Om lastbilen står parkerad med kontakt på under mer än 30 minuter utan att erhålla certifikatet, stäng av och slå sedan på kontakten igen för att återaktivera provisioneringsläget.
- **Typisk installations tid: 6–24 timmar**

### 5. Verifiera

Kontrollera certifikatstatusen i både RIO och Stroomlijnen Min Flotta. Testa vid en Stroomlijnen-laddare.

## HSM Provisioneringsläge — Viktigt

MAN:s säkerhetsarkitektur använder en hardware security module med ett specifikt provisioneringsfönster:

1. När lastbilens kontakt slås på går HSM i provisioneringsläge under 30 minuter
2. Under detta fönster kan nya certifikat installeras
3. Efter 30 minuter låser HSM för att förhindra obehöriga certifikatändringar
4. För att öppna fönstret igen: stäng av kontakten, vänta 10 sekunder, slå sedan på igen

**Vad detta innebär i praktiken:** Om du aktiverar PnC i RIO-portalen medan lastbilen är på en resa, kommer certifikatet att placeras i kön och installeras nästa gång lastbilen startas (inom det första 30-minutersfönstret).

## TRATON Grupp-integrering

Både MAN och Scania ingår i TRATON-gruppen och delar viss backend-infrastruktur. Dock:

- Varje märke har sitt eget flottportal (RIO för MAN, My Scania för Scania)
- PnC måste konfigureras separat i varje portal
- Certifikat är märkesspecifika och inte överförbara

## Felsökning

| Problem | Lösning |
|---------|----------|
| "Laddningshantering" inte i RIO | Aktivera det från RIO Marketplace |
| Certifikat under behandling > 24 timmar | Utför kontaktcykel för att återaktivera HSM-provisioneringsläge |
| eTGL/eTGM visar "PnC inte tillgänglig" | Firmware-uppdatering kan vara under behandling — kontrollera med MAN-återförsäljare |
| PnC fungerar en gång sedan misslyckas | HSM har möjligen ett anslutningsproblem — diagnostik av återförsäljare krävs |

---

**Nästa:** [Andra Lastbilar →](./other-trucks)