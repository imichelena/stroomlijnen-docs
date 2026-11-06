# Redesign verification — 2026-11-03

Published to https://docs.stroomlijnen.nl/ after testing the production build.
English review: https://docs.stroomlijnen.nl/en/

## Executed checks
- TypeScript: pass.
- Node component/storage/homepage tests: 8 passed.
- Production build: nl and en succeeded; dependency pins unchanged.
- Browser layout: widths 320, 375, 390, 768, 1440 across EN homepage, EN energy article, EN OCPP article and NL energy article; no horizontal page overflow or page errors.
- Phone orientation: 320×568 and 844×390; homepage plus NL/EN article passed.
- Real Chromium interaction tests at 375 and 1440: bookmark persistence, copy link, font/width settings, focus/exit, resume, print styles, personal library, local search and light/dark themes.
- Same interaction suite rerun against live HTTPS site: all passed, zero page errors.
- Review regressions: focus Ctrl+K restores visible search; browser-only explanation appears in settings; unscrolled article visit appears in recent list.
- Screenshots inspected for mobile/desktop light/dark rendering. Theme tests use actual OS color scheme, not merely a DOM attribute.

## Release
- Archive SHA256: 0394ddd1728f673aa38e0fa6b160023c2fe14dd91d365ec087b401edb30e541d (identical local and edge).
- Web root: slm-edge-1 /var/www/docs.
- New rollback: /var/www/docs.pre-redesign-20261103.
- Original rollback /var/www/docs.bak-20261103 untouched.
- Copied built static files only. No Caddy, DNS, certificate or dependency changes. Old hashed assets retained for open browser tabs.
- Verified article Markdown unchanged. Generated Stitch content is a visual reference only, not published.

## Still separate/open
- Spanish translation, wildcard certificate renewal and GitHub publication are not completed by this UI release.
- Existing blog content was not fact-checked in this UI pass; search still includes existing blog pages.
