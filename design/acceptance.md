# Redesign acceptance

- Real Stitch design: project 12350577886359851650, screen 8778f4dc61714db49712af0b05e958e9.
- Stitch is a visual reference only. Its generated article claims, API navigation, compliance deadlines and metrics are invented and MUST NOT enter published content.
- Existing verified Dutch and English Markdown stays unchanged.
- Phone-first: test 320, 375, 390, 768 and 1440px; portrait and landscape; no whole-page horizontal overflow; bounded scroll for tables/code; 44px interactive controls.
- Test navigation drawer, local search and keyboard shortcut, saved article and homepage library, font/width/focus settings, resume offer, copy-link, print, dark/light.
- Fonts self-hosted; preferences/bookmarks browser-local with explicit explanation, no account/sync claim.
- Production docroot only; never edit Caddy, wildcard certificates, DNS or original rollback.
- Certificate verification currently fails on public URL. This is a pre-existing infrastructure blocker, not part of the redesign.
