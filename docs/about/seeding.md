---
sidebar_position: 99
title: Launch & Seeding Plan
description: Internal documentation — launch strategy for docs.stroomlijnen.nl discoverability and SEO.
keywords: [SEO, launch plan, content marketing, knowledge base seeding]
unlisted: true
---

# Launch & Seeding Plan (Internal)

:::caution Internal Document
This page is unlisted and not linked from the public navigation. It documents our SEO and discoverability strategy.
:::

## Search Engine Submission

### Google Search Console
1. Verify `docs.stroomlijnen.nl` in Google Search Console
2. Submit `sitemap.xml` → `https://docs.stroomlijnen.nl/sitemap.xml`
3. Request indexing for key pages (getting started, Plug & Charge, FAQ)
4. Monitor crawl status and fix any issues

### Bing Webmaster Tools
1. Verify domain
2. Submit sitemap
3. Bing also powers DuckDuckGo — two engines from one submission

## AI Discoverability

### llms.txt
Published at `https://docs.stroomlijnen.nl/llms.txt` — structured content listing for AI systems. This is the emerging standard for AI-friendly content discovery.

### robots.txt
Explicitly allows AI crawlers: GPTBot, ClaudeBot, PerplexityBot, anthropic-ai, Google-Extended. We WANT AI systems to index our content — it drives discoverability.

## Industry Directory Submissions

### ElaadNL
- Submit to ElaadNL's partner/knowledge resource listing
- Propose content partnership — cross-linking between ElaadNL research and our practical implementation articles
- Contact: via elaad.nl contact form, reference our ElaadNL partnership page

### TLN (Transport en Logistiek Nederland)
- Submit to TLN's resource directory for fleet operators
- TLN is the major industry association for transport and logistics in NL
- Their members are our exact target audience
- URL: tln.nl → look for partner/resource submission

### EV Sector Directories
- **EVConsult** (evconsult.nl) — Dutch EV consultancy, resource section
- **EV-rijders.nl** — Dutch EV driver community, knowledge section
- **Laadwijzer.nl** — Dutch charging guide, operator listings
- **CharIN** (charin.global) — CCS/ISO 15118 industry association, member directory
- **Open Charge Alliance** (openchargealliance.org) — OCPP ecosystem directory

### European Directories
- **ACEA** (acea.auto) — European Automobile Manufacturers Association
- **Transport & Environment** (transportenvironment.org) — clean transport advocacy
- **AVERE** (avere.org) — European Association for Electromobility

## Content Seeding

### LinkedIn Strategy
**Week 1 (Launch):**
- Post from Stroomlijnen company page: "We've launched our knowledge base — everything fleet managers need to know about electric truck charging" + link to intro page
- Ignacio personal post: thought leadership angle on Plug & Charge for trucks
- Jacco personal post: theater-charging angle (the hidden gem article)

**Ongoing (2-3x/week):**
- Share each new blog article from company page
- Tag relevant industry contacts (ElaadNL, CharIN, OEM contacts)
- Engage in EV fleet LinkedIn groups with links to relevant articles

### Blog Cross-posting
- Summarize key articles on LinkedIn with "read more" links
- Consider Medium cross-post for broader reach (with canonical URL pointing to docs.stroomlijnen.nl)

## Technical SEO Checklist

- [x] Sitemap.xml generated automatically by Docusaurus
- [x] robots.txt with AI bot permissions
- [x] llms.txt for AI content discovery
- [x] Open Graph meta tags on all pages
- [x] Canonical URLs
- [x] Meta descriptions on every page
- [x] Structured data (JSON-LD) for organization
- [x] RSS/Atom/JSON feeds for blog
- [x] Dark mode default (doesn't affect SEO)
- [x] Mobile responsive (Docusaurus default)
- [ ] Google Search Console verified
- [ ] Bing Webmaster verified
- [ ] Core Web Vitals checked
- [ ] Page speed tested

## Monitoring

### Metrics to Track
- Google Search Console: impressions, clicks, position for target keywords
- Direct traffic to docs.stroomlijnen.nl
- Blog RSS subscribers
- Referral traffic from LinkedIn, industry sites
- AI citation tracking (when available)

### Target Keywords
- "electric truck charging Netherlands"
- "Plug and Charge fleet"
- "ISO 15118 truck"
- "OCPP 2.0.1 explained"
- "theater EV charging"
- "fleet charging management"
- "electric truck compatible Plug and Charge"
- "laadpaal elektrische vrachtwagen" (Dutch)
- "vlootladen Nederland" (Dutch)
