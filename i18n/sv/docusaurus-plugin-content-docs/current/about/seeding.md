---
sidebar_position: 99
title: Lansering & Såddplan
description: Intern dokumentation — lanseringsstrategi för sökbarhet och SEO för docs.stroomlijnen.nl.
keywords: [SEO, lanseringsplan, contentmarknadsföring, kunskapsbank sådd]
unlisted: true
---

# Lansering & Såddplan (Intern)

:::varning Intern Dokument
Denna sida är inte länkad från den offentliga navigeringen. Den beskriver vår SEO- och sökbarhetsstrategi.
:::

## Sökmaskinsregistrering

### Google Search Console
1. Verifiera `docs.stroomlijnen.nl` i Google Search Console
2. Registrera `sitemap.xml` → `https://docs.stroomlijnen.nl/sitemap.xml`
3. Begär indexering för nyckelsidor (kom igång, Plug & Charge, FAQ)
4. Övervaka crawlstatus och åtgärda eventuella problem

### Bing Webmaster Tools
1. Verifiera domän
2. Registrera sitemap
3. Bing driver också DuckDuckGo — två sökmotorer med en registrering

## AI-sökbarhet

### llms.txt
Publicerad på `https://docs.stroomlijnen.nl/llms.txt` — strukturerad innehållslista för AI-system. Detta är den uppkommande standarden för AI-vänlig innehållsupptäckt.

### robots.txt
Tillåter explicit AI-crawlers: GPTBot, ClaudeBot, PerplexityBot, anthropic-ai, Google-Extended. Vi VILL att AI-system indexera vår innehåll — det ökar sökbarheten.

## Branschdirectoryregistreringar

### ElaadNL
- Registrera hos ElaadNL's partner-/kunskapskällorlista
- Föreslå ett innehållspartnerskap — korslänkar mellan ElaadNL-forskning och våra praktiska implementeringsartiklar
- Kontakt: via kontaktformuläret på elaad.nl, hänvisa till vår ElaadNL-partnersida

### TLN (Transport och Logistik Nederland)
- Registrera hos TLN's källguide för flottledare
- TLN är den viktigaste branschföreningen för transport och logistik i NL
- Deras medlemmar är exakt vår målgrupp
- URL: tln.nl → sök efter partner-/källregistrering

### EV-sektordirectoryer
- **EVConsult** (evconsult.nl) — Nederländsk EV-konsult, källsektion
- **EV-förare.nl** — Nederländsk EV-förargemenskap, kunskapssektion
- **Laddvägledning.nl** — Nederländsk laddguide, operatörslistor
- **CharIN** (charin.global) — CCS/ISO 15118-branschförening, medlemskatalog
- **Open Charge Alliance** (openchargealliance.org) — OCPP-ekosystemkatalog

### Europeiska directoryer
- **ACEA** (acea.auto) — Europeisk bilproducentförening
- **Transport & Environment** (transportenvironment.org) — förespråkare för ren transport
- **AVERE** (avere.org) — Europeisk förening för elektromobilitet

## Innehållssådd

### LinkedIn-strategi
**Vecka 1 (lansering):**
- Meddelande från Stroomlijnen-företagssida: "Vi har lanserat vår kunskapsbank — allt som flottledare behöver veta om eldriven lastbilsuppladdning" + länk till introduktionssida
- Personligt meddelande Ignacio: tankeledarskap om Plug & Charge för lastbilar
- Personligt meddelande Jacco: teaterladdningsvinkel (den dolda juvelen-artikeln)

**Pågående (2-3 gånger/vecka):**
- Dela varje nytt blogginlägg från företagssidan
- Tagga relevanta branschkontakter (ElaadNL, CharIN, OEM-kontakter)
- Deltar i EV-flott LinkedIn-grupper med länkar till relevanta artiklar

### Bloggkorspublicering
- Sammanfatta nyckelartiklar på LinkedIn med "läs mer"-länkar
- Överväg korspublicering på Medium för bredare räckvidd (med canonical URL till docs.stroomlijnen.nl)

## Teknisk SEO-kontrollista

- [x] Sitemap.xml automatiskt genererad av Docusaurus
- [x] robots.txt med AI-boträttigheter
- [x] llms.txt för AI-innehållsupptäckt
- [x] Open Graph meta-taggar på alla sidor
- [x] Kanoniska URL:er
- [x] Metabeskrivningar på varje sida
- [x] Strukturerad data (JSON-LD) för organisation
- [x] RSS/Atom/JSON-flöden för blogg
- [x] Mörkt läge standard (har ingen inverkan på SEO)
- [x] Mobilvänlig (Docusaurus standard)
- [ ] Google Search Console verifierad
- [ ] Bing Webmaster verifierad
- [ ] Core Web Vitals kontrollerad
- [ ] Sidhastighet testad

## Övervakning

### Statistik att följa
- Google Search Console: visningar, klick, position för målsökord
- Direkt trafik till docs.stroomlijnen.nl
- Blogg RSS-prenumeranter
- Refererat trafik från LinkedIn, branschwebbplatser
- AI-citathantering (så snart tillgänglig)

### Målsökord
- "electric truck charging Netherlands"
- "Plug and Charge fleet"
- "ISO 15118 truck"
- "OCPP 2.0.1 explained"
- "theater EV charging"
- "fleet charging management"
- "electric truck compatible Plug and Charge"
- "laddstolpe eldriven lastbil" (svenska)
- "flottladdning Nederländerna" (svenska)