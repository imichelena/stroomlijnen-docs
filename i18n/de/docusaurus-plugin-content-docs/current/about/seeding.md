---
sidebar_position: 99
title: Start- und Ausbringungsplan
description: Interne Dokumentation — Startstrategie für die Auffindbarkeit und SEO von docs.stroomlijnen.nl.
keywords: [SEO, Startplan, Content-Marketing, Wissensbank-Ausbringung]
unlisted: true
---

# Start- und Ausbringungsplan (Intern)

:::caution Internes Dokument
Diese Seite ist nicht aus der öffentlichen Navigation verlinkt. Sie beschreibt unsere SEO- und Auffindbarkeitsstrategie.
:::

## Suchmaschinen-Eintragung

### Google Search Console
1. Verifizieren Sie `docs.stroomlijnen.nl` in Google Search Console
2. Eintragen von `sitemap.xml` → `https://docs.stroomlijnen.nl/sitemap.xml`
3. Anfrage für die Indizierung von Schlüsselseiten (Los geht's, Plug & Charge, FAQ)
4. Überwachung des Crawling-Status und Behebung von Problemen

### Bing Webmaster Tools
1. Verifizieren Sie die Domain
2. Eintragen der Sitemap
3. Bing treibt auch DuckDuckGo an — zwei Suchmaschinen mit einer Eintragung

## KI-Auffindbarkeit

### llms.txt
Veröffentlicht auf `https://docs.stroomlijnen.nl/llms.txt` — strukturierte Inhaltsliste für KI-Systeme. Dies ist der aufkommende Standard für KI-freundliche Content-Entdeckung.

### robots.txt
Erlaubt AI-Crawlern explizit: GPTBot, ClaudeBot, PerplexityBot, anthropic-ai, Google-Extended. Wir WOLLEN, dass KI-Systeme unseren Inhalt indexieren — dies erhöht die Auffindbarkeit.

## Branchenverzeichnisseintragungen

### ElaadNL
- Eintragen bei ElaadNL's Partner-/Wissensquellenliste
- Vorschlagen eines Content-Partnerschafts — Kreuzlinks zwischen ElaadNL-Forschung und unseren praktischen Implementierungsartikeln
- Kontakt: über das Kontaktformular auf elaad.nl, Verweis auf unsere ElaadNL-Partnerseite

### TLN (Transport und Logistik Nederland)
- Eintragen bei TLN's Quellenguide für Flottenmanager
- TLN ist der wichtigste Branchenverband für Transport und Logistik in den Niederlanden
- Ihre Mitglieder sind genau unsere Zielgruppe
- URL: tln.nl → Suche nach Partner-/Quelleneintragung

### EV-Sektorenverzeichnisse
- **EVConsult** (evconsult.nl) — niederländisches EV-Beratungsunternehmen, Quellensektion
- **EV-Fahrer.nl** — niederländische EV-Fahrergemeinschaft, Wissenssektion
- **Ladeführer.nl** — niederländischer Ladeführer, Betreiberhinweise
- **CharIN** (charin.global) — CCS/ISO 15118-Branchenverband, Mitgliederverzeichnis
- **Open Charge Alliance** (openchargealliance.org) — OCPP-Ökosystemverzeichnis

### Europäische Verzeichnisse
- **ACEA** (acea.auto) — europäischer Automobilherstellerverband
- **Transport & Environment** (transportenvironment.org) — Lobbyarbeit für sauberen Transport
- **AVERE** (avere.org) — europäischer Verband für Elektromobilität

## Content-Ausbringung

### LinkedIn-Strategie
**Woche 1 (Start):**
- Beitrag von Stroomlijnen-Unternehmensseite: "Wir haben unsere Wissensbank gestartet — alles, was Flottenmanager über das Laden von Elektrolastwagen wissen müssen" + Link zur Einführungsseite
- Persönliche Nachricht von Ignacio: Thought Leadership zu Plug & Charge für Lastwagen
- Persönliche Nachricht von Jacco: Theater-Ladewinkel (das verborgene Juwel-Artikel)

**Laufend (2-3x/Woche):**
- Teilen Sie jeden neuen Blogbeitrag von der Unternehmensseite
- Taggen Sie relevante Branchenkontakte (ElaadNL, CharIN, OEM-Kontakte)
- Nehmen Sie an EV-Flotten-LinkedIn-Gruppen mit Links zu relevanten Artikeln teil

### Blog-Cross-Posting
- Fassen Sie Schlüsselartikel auf LinkedIn zusammen mit "mehr lesen"-Links
- Überlegen Sie das Cross-Posting auf Medium für ein breiteres Publikum (mit kanonischer URL zu docs.stroomlijnen.nl)

## Technische SEO-Checkliste

- [x] Sitemap.xml automatisch generiert durch Docusaurus
- [x] robots.txt mit AI-Bot-Rechten
- [x] llms.txt für KI-Inhaltsentdeckung
- [x] Open Graph-Meta-Tags auf allen Seiten
- [x] Kanonische URLs
- [x] Meta-Beschreibungen auf jeder Seite
- [x] Strukturierte Daten (JSON-LD) für Organisationen
- [x] RSS/Atom/JSON-Feeds für den Blog
- [x] Dunkler Modus standardmäßig (hat keinen Einfluss auf SEO)
- [x] Mobilfreundlich (Docusaurus-Standard)
- [ ] Google Search Console verifiziert
- [ ] Bing Webmaster verifiziert
- [ ] Core Web Vitals überprüft
- [ ] Seitenladegeschwindigkeit getestet

## Überwachung

### Zu überwachende Statistiken
- Google Search Console: Anzeigen, Klicks, Position für Ziel-Suchbegriffe
- Direkter Verkehr zu docs.stroomlijnen.nl
- Blog-RSS-Abonnenten
- Verweisverkehr von LinkedIn, Branchenseiten
- KI-Zitatsverwaltung (sobald verfügbar)

### Ziel-Suchbegriffe
- "Elektrolastwagen-Laden Niederlande"
- "Plug and Charge Flotte"
- "ISO 15118 Lastwagen"
- "OCPP 2.0.1 erklärt"
- "Theater-Elektrolastwagen-Laden"
- "Flottenlademanagement"
- "Elektrolastwagen-kompatibles Plug and Charge"
- "Ladestation Elektrolastwagen" (Niederländisch)
- "Flottenladen Niederlande" (Niederländisch)