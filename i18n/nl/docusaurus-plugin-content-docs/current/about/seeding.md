---
sidebar_position: 99
title: Lancering & Seeding Plan
description: Interne documentatie — lanceringsstrategie voor de vindbaarheid en SEO van docs.stroomlijnen.nl.
keywords: [SEO, lanceerplan, contentmarketing, kennisbank seeding]
unlisted: true
---

# Lancering & Seeding Plan (Intern)

:::caution Intern Document
Deze pagina is niet gelinkt vanuit de publieke navigatie. Het beschrijft onze SEO- en vindbaarsheidsstrategie.
:::

## Zoekmachine-indiening

### Google Search Console
1. Verifieer `docs.stroomlijnen.nl` in Google Search Console
2. Dien `sitemap.xml` in → `https://docs.stroomlijnen.nl/sitemap.xml`
3. Vraag indexering aan voor sleutelpagina's (aan de slag, Plug & Charge, FAQ)
4. Bewaak crawlstatus en verhelp eventuele problemen

### Bing Webmaster Tools
1. Verifieer domein
2. Dien sitemap in
3. Bing drijft ook DuckDuckGo — twee zoekmachines met één indiening

## AI-vindbaarheid

### llms.txt
Gepubliceerd op `https://docs.stroomlijnen.nl/llms.txt` — gestructureerde inhoudslijst voor AI-systemen. Dit is de opkomende standaard voor AI-vriendelijke contentontdekking.

### robots.txt
Staat AI-crawlers expliciet toe: GPTBot, ClaudeBot, PerplexityBot, anthropic-ai, Google-Extended. We WILLEN dat AI-systemen onze content indexeren — het vergroot de vindbaarheid.

## Branche-directoryindieningen

### ElaadNL
- Dien in bij ElaadNL's partner-/kennisbronnenlijst
- Stel een contentpartnerschap voor — kruislinks tussen ElaadNL-onderzoek en onze praktische implementatieartikelen
- Contact: via het contactformulier op elaad.nl, refereer aan onze ElaadNL-partnerpagina

### TLN (Transport en Logistiek Nederland)
- Dien in bij TLN's bronnengids voor vlootbeheerders
- TLN is de belangrijkste branchevereniging voor transport en logistiek in NL
- Hun leden zijn precies onze doelgroep
- URL: tln.nl → zoek naar partner-/bronnenindiening

### EV-sectordirectories
- **EVConsult** (evconsult.nl) — Nederlandse EV-consultancy, bronnensectie
- **EV-rijders.nl** — Nederlandse EV-rijdersgemeenschap, kennissectie
- **Laadwijzer.nl** — Nederlandse laadgids, exploitantenvermeldingen
- **CharIN** (charin.global) — CCS/ISO 15118-branchevereniging, ledendirectory
- **Open Charge Alliance** (openchargealliance.org) — OCPP-ecosysteemdirectory

### Europese Directories
- **ACEA** (acea.auto) — Europese Automobielproducentenvereniging
- **Transport & Environment** (transportenvironment.org) — pleitbezorging voor schoon transport
- **AVERE** (avere.org) — Europese Vereniging voor Elektromobiliteit

## Contentseeding

### LinkedIn-strategie
**Week 1 (lancering):**
- Bericht van Stroomlijnen-bedrijfspagina: "We hebben onze kennisbank gelanceerd — alles wat vlootbeheerders moeten weten over elektrisch vrachtwagenopladen" + link naar intro-pagina
- Persoonlijk bericht Ignacio: thought leadership over Plug & Charge voor vrachtwagens
- Persoonlijk bericht Jacco: theater-laadhoek (het verborgen juweel artikel)

**Doorlopend (2-3x/week):**
- Deel elk nieuw blogartikel vanuit de bedrijfspagina
- Tag relevante branchecontacten (ElaadNL, CharIN, OEM-contacten)
- Neem deel aan EV-vloot LinkedIn-groepen met links naar relevante artikelen

### Blog cross-posting
- Vat sleutelartikelen samen op LinkedIn met "lees meer"-links
- Overweeg cross-posting op Medium voor breder bereik (met canonical URL naar docs.stroomlijnen.nl)

## Technische SEO-checklist

- [x] Sitemap.xml automatisch gegenereerd door Docusaurus
- [x] robots.txt met AI-botrechten
- [x] llms.txt voor AI-contentontdekking
- [x] Open Graph meta-tags op alle pagina's
- [x] Canonical URL's
- [x] Metabeschrijvingen op elke pagina
- [x] Gestructureerde data (JSON-LD) voor organisatie
- [x] RSS/Atom/JSON-feeds voor blog
- [x] Donkere modus standaard (heeft geen invloed op SEO)
- [x] Mobielvriendelijk (Docusaurus standaard)
- [ ] Google Search Console geverifieerd
- [ ] Bing Webmaster geverifieerd
- [ ] Core Web Vitals gecontroleerd
- [ ] Paginasnelheid getest

## Monitoring

### Te Volgen Statistieken
- Google Search Console: vertoningen, klikken, positie voor doelzoekwoorden
- Direct verkeer naar docs.stroomlijnen.nl
- Blog RSS-abonnees
- Verwijzingsverkeer van LinkedIn, branchesites
- AI-citatiebeheer (zodra beschikbaar)

### Doelzoekwoorden
- "electric truck charging Netherlands"
- "Plug and Charge fleet"
- "ISO 15118 truck"
- "OCPP 2.0.1 explained"
- "theater EV charging"
- "fleet charging management"
- "electric truck compatible Plug and Charge"
- "laadpaal elektrische vrachtwagen" (Nederlands)
- "vlootladen Nederland" (Nederlands)
