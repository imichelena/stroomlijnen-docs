---
sidebar_position: 10
title: Felsökning av Plug & Charge
description: Vanliga problem med Plug & Charge och lösningar — från certifikatfel till kommunikationsstörningar hos laddaren.
keywords: [Felsökning av Plug and Charge, PnC-fel, ISO 15118-problem, laddningsfel, certifikatfel]
---

# Felsökning av Plug & Charge

När Plug & Charge inte fungerar som förväntat faller problemet vanligtvis in i en av några kategorier: certifikatproblem, kommunikationsstörningar eller konfigurationsbrister. Den här handboken behandlar de vanligaste problemen.

## Snabb diagnostisk checklista

Gå igenom den här checklistan innan du dyker djupare:

- [ ] Är fordonet [PnC-kompatibelt](./compatible-vehicles)?
- [ ] Är fordonets firmware uppdaterad?
- [ ] Är PnC aktiverat i Stroomlijnen Mina Flottas portal?
- [ ] Visar certifikatstatusen "Aktiv" i båda portalerna (OEM + Stroomlijnen)?
- [ ] Är fordonets kontakt påslagen eller är tillbehörsmodus aktiverad?
- [ ] Är CCS-kabeln helt inkopplad i fordonets anslutning?

## Vanliga problem

### 1. Laddaren visar "Autentisering misslyckades"

**Symptom:** Kabel inkopplad, laddaren försöker PnC men ger en autentiseringsfel.

**Orsaker och lösningar:**

| Orsak | Lösning |
|---------|----------|
| Certifikat har gått ut | Kontrollera utgångsdatum i Mina Flotta → Fordon → PnC-fliken. Förläng om det har gått ut. |
| Certifikat är inte installerat | Statusen kan visa "Väntar". Se till att lastbilen är online. Vänta upp till 24 timmar. |
| Certifikat har återkallats | Om det avsiktligt har återkallats, aktivera PnC igen via portalen. |
| EMAID inte synkroniserad | Kontakta Stroomlijnen-support — vår backend kan behöva synkronisera med Hubject. |
| Fel certifikat presenteras | Om flera eMSP-certifikat är installerade, kan fordonet presentera fel certifikat. Kontrollera OEM-portalens status. |

### 2. Laddaren växlar tillbaka till RFID

**Symptom:** Istället för PnC ber laddaren om att "Klicka på din RFID-bricka."

**Orsaker och lösningar:**

- **Fordonet startar inte ISO 15118-2:** Fordonets kommunikationsmodul kan inte erbjuda PnC. Starta fordonet om och försök igen.
- **PLC-kommunikation misslyckas:** Power Line Communication mellan kabel och fordon lyckas inte. Försök med en annan kabel eller kontakt (om tillgänglig). Rengör CCS-kontaktens kontakter.
- **PnC på laddaren är tillfälligt inaktiverad:** Ibland kan en laddare ha PnC inaktiverat för underhåll. Försök med en annan laddare på samma plats.

### 3. Certifikatstatus förblir "Väntar"

**Symptom:** Du har aktiverat PnC för flera dagar sedan men certifikatet har inte installerats.

**Lösningar:**
1. **Se till att fordonet har varit online** — Fordonet måste vara påslaget (kontakt eller tillbehörsmodus) med mobil uppkoppling för att certifikatet ska kunna levereras
2. **Kontrollera OEM-portalens status** — Det kan finnas ett väntande auktoriseringsförfrågan som du måste godkänna
3. **Kontrollera flottportalsrättigheter** — Se till att ditt konto har administratörsåtkomst för PnC-hantering
4. **Utlös installationen på nytt** — I Mina Flotta → Fordon → PnC-fliken, klicka på **Skicka certifikatförfrågan igen**
5. **Kontakta support** — Om det har fastnat i mer än 48 timmar, kontakta både Stroomlijnen och din OEM-återförsäljare

### 4. PnC fungerar sporadiskt

**Symptom:** PnC fungerar på vissa laddare eller vid vissa tillfällen men misslyckas slumpmässigt.

**Möjliga orsaker:**

- **Svagt PLC-signal:** Power Line Communication-signalen kan påverkas av kabelkvalitet, kontaktsslitage eller elektromagnetisk interferens. Försök att koppla loss och sedan återansluta.
- **Programvarufel i fordonet:** Starta fordonet om (fullständig kontaktcykel: av → 30 sekunder väntan → på).
- **Backend-tidsgräns:** Om vår backend svarar långsamt kan laddaren få en tidsgräns. Det löser sig vanligtvis vid ett nytt försök.
- **Certifikat nära utgången:** Vissa system har strängare validering när certifikat är nära utgången. Kontrollera den återstående giltighetstiden.

### 5. Fel "Kontraktscertifikat ogiltigt"

**Symptom:** Laddaren rapporterar specifikt kontraktscertifikatet som ogiltigt.

**Lösningar:**
1. **Kontrollera certifikatkedjan:** Verifiera certifikatdetaljerna i Mina Flotta. Om kedjan är bruten (t.ex. en mellanliggande CA har gått ut), kontakta Stroomlijnen-support.
2. **Tidssynkronisering:** Om fordonets klocka avviker betydligt kan certifikatvalidering misslyckas. Detta är ovanligt på moderna fordon men möjligt efter långa lagringsperioder.
3. **Rotcertifikatuppdatering behövs:** Laddaren kan behöva ett uppdaterat rotcertifikat. Stroomlijnen hanterar detta automatiskt, men under utrullningsperioder kan det finnas tillfälliga luckor. Rapportera det specifika laddar-ID:t till support.

### 6. Sessionen startar men stoppar omedelbart

**Symptom:** PnC autentiserar framgångsrikt, laddning startar men stoppar inom sekunder.

**Detta är vanligtvis inte ett PnC-problem.** Autentiseringen fungerade — problemet ligger i laddningssessionen själv:

- **Ingripande från batterihanteringssystem (BMS):** Fordonets BMS kan begränsa laddningsmottagning (temperatur, SoC, cellbalansering)
- **Effektförhandling misslyckas:** Laddaren och fordonet kunde inte enas om laddparametrar. Försök igen — dynamisk effektstilldelning kan variera.
- **Jordfelsdetektering:** Säkerhetssystemet upptäckte ett problem. Koppla loss, inspektera kabel och kontakt för fukt eller smuts, försök igen.

## Felfelkoder

Om laddaren visar en specifik felfelkod, anteckna den och kontakta support. Vanliga felkoder:

| Kod | Betydelse | Åtgärd |
|------|---------|--------|
| AUTH-001 | Inget giltigt kontraktscertifikat hittades | Kontrollera certifikatinstallationen |
| AUTH-002 | Certifikatkedjavalidering misslyckades | Kontakta support |
| AUTH-003 | EMAID inte auktoriserad | Kontrollera PnC-status i Mina Flotta |
| AUTH-004 | Backend-kommunikationstidsgräns | Vänta 2 minuter, försök igen |
| COMM-001 | PLC-koppling misslyckades | Koppla loss kabeln och anslut den igen, rengör kontakterna |
| COMM-002 | ISO 15118-protokollversionsskillnad | Uppdatera fordonets firmware |
| COMM-003 | TLS-handshake misslyckades | Kontakta support |

## Insamling av diagnostisk information

Se till att du har följande information när du kontaktar support:

1. **Fordoninformation:** Märke, modell, VIN, firmwareversion
2. **Laddarinformation:** Platsnamn, laddar-ID (utskrivet på enheten, format: `NL*STM*E...`)
3. **Datum och tid** för det misslyckade försöket
4. **Felmeddelande** eller kod som visas på laddaren
5. **Skärmbilder** av laddarens display och/eller fordonets instrumentpanel (om det är säkert att göra)

## Kontakta support

- **E-post:** [support@stroomlijnen.nl](mailto:support@stroomlijnen.nl)
- **Telefon:** Tillgänglig för flottkunder (se ditt avtal för supportnumret)
- **Mina Flotta-portalen:** Skicka in en supportförfrågan via hjälpavdelningen

---

**Fortfarande fast?** Se [FAQ](../faq) för mer vanliga frågor eller kontakta din Stroomlijnen-kontohanterare.