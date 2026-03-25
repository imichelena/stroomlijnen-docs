---
sidebar_position: 99
title: Piano di Lancio e Semina
description: Documentazione interna — strategia di lancio per la visibilità e il SEO di docs.stroomlijnen.nl.
keywords: [SEO, piano di lancio, content marketing, banca dati di semina]
unlisted: true
---

# Piano di Lancio e Semina (Intern)

:::caution Documento Interno
Questa pagina non è collegata alla navigazione pubblica. Descrive la nostra strategia SEO e di visibilità.
:::

## Presentazione ai Motori di Ricerca

### Google Search Console
1. Verifica `docs.stroomlijnen.nl` in Google Search Console
2. Presenta `sitemap.xml` → `https://docs.stroomlijnen.nl/sitemap.xml`
3. Richiedi l'indicizzazione per le pagine chiave (inizia, Plug & Charge, FAQ)
4. Monitora lo stato di crawling e risolvi eventuali problemi

### Bing Webmaster Tools
1. Verifica il dominio
2. Presenta la mappa del sito
3. Bing gestisce anche DuckDuckGo — due motori di ricerca con una sola presentazione

## Visibilità AI

### llms.txt
Pubblicato su `https://docs.stroomlijnen.nl/llms.txt` — elenco strutturato dei contenuti per i sistemi AI. Questo è lo standard emergente per la scoperta dei contenuti friendly AI.

### robots.txt
Consenti esplicitamente ai crawler AI: GPTBot, ClaudeBot, PerplexityBot, anthropic-ai, Google-Extended. Vogliamo che i sistemi AI indicizzino i nostri contenuti — aumenta la visibilità.

## Presentazioni alle Directory di Settore

### ElaadNL
- Presenta la richiesta alla lista dei partner e delle risorse di ElaadNL
- Proponi un partenariato per i contenuti — collegamenti incrociati tra le ricerche di ElaadNL e i nostri articoli di implementazione pratica
- Contatto: tramite il modulo di contatto su elaad.nl, fare riferimento alla nostra pagina dei partner ElaadNL

### TLN (Trasporto e Logistica Paesi Bassi)
- Presenta la richiesta alla guida delle risorse per i gestori della flotta di TLN
- TLN è l'associazione di settore più importante per il trasporto e la logistica nei Paesi Bassi
- I suoi membri sono esattamente il nostro target
- URL: tln.nl → cerca la presentazione dei partner e delle risorse

### Directory del Settore EV
- **EVConsult** (evconsult.nl) — consulenza EV olandese, sezione risorse
- **EV-rijders.nl** — comunità di guidatori EV olandesi, sezione conoscenza
- **Laadwijzer.nl** — guida alla ricarica olandese, elenco degli operatori
- **CharIN** (charin.global) — associazione di settore CCS/ISO 15118, directory dei membri
- **Open Charge Alliance** (openchargealliance.org) — directory dell'ecosistema OCPP

### Directory Europee
- **ACEA** (acea.auto) — associazione europea dei produttori automobilistici
- **Transport & Environment** (transportenvironment.org) — lobby per il trasporto pulito
- **AVERE** (avere.org) — associazione europea per la mobilità elettrica

## Semina dei Contenuti

### Strategia LinkedIn
**Settimana 1 (lancio):**
- Messaggio dalla pagina aziendale di Stroomlijnen: "Abbiamo lanciato la nostra banca dati — tutto ciò che i gestori della flotta devono sapere sulla ricarica dei camion elettrici" + link alla pagina di introduzione
- Messaggio personale di Ignacio: leadership del pensiero su Plug & Charge per i camion
- Messaggio personale di Jacco: angolo di carico teatrale (l'articolo nascosto)

**Continuativo (2-3 volte a settimana):**
- Condividi ogni nuovo articolo del blog dalla pagina aziendale
- Tagga i contatti di settore rilevanti (ElaadNL, CharIN, contatti OEM)
- Partecipa ai gruppi LinkedIn sulla flotta EV con link agli articoli rilevanti

### Cross-posting del Blog
- Riassumi gli articoli chiave su LinkedIn con link "leggi di più"
- Considera il cross-posting su Medium per un pubblico più ampio (con URL canonico a docs.stroomlijnen.nl)

## Checklist Tecnica SEO

- [x] Sitemap.xml generato automaticamente da Docusaurus
- [x] robots.txt con diritti dei bot AI
- [x] llms.txt per la scoperta dei contenuti AI
- [x] Tag meta Open Graph su tutte le pagine
- [x] URL canonici
- [x] Descrizioni meta su ogni pagina
- [x] Dati strutturati (JSON-LD) per l'organizzazione
- [x] Feed RSS/Atom/JSON per il blog
- [x] Modalità scura predefinita (non influisce sul SEO)
- [x] Dispositivi mobili friendly (standard Docusaurus)
- [ ] Google Search Console verificato
- [ ] Bing Webmaster verificato
- [ ] Core Web Vitals controllati
- [ ] Velocità della pagina testata

## Monitoraggio

### Statistiche da Seguire
- Google Search Console: visualizzazioni, clic, posizione per le parole chiave di destinazione
- Traffico diretto su docs.stroomlijnen.nl
- Abbonamenti RSS del blog
- Traffico di riferimento da LinkedIn, siti di settore
- Gestione delle citazioni AI (non appena disponibile)

### Parole Chiave di Destinazione
- "ricarica camion elettrici Paesi Bassi"
- "Plug and Charge flotta"
- "ISO 15118 camion"
- "OCPP 2.0.1 spiegato"
- "ricarica EV teatrale"
- "gestione della ricarica della flotta"
- "camion elettrico compatibile Plug and Charge"
- "palo di ricarica per camion elettrici" (olandese)
- "caricamento della flotta Paesi Bassi" (olandese)