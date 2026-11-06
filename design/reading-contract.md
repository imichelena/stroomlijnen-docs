# Reading layer integration contract

Owned by reading subagent. No homepage/global CSS/config/package changes.

## Shared API (ES module)
Import from `../utils/readingStorage.mjs` (adjust relative path).
- `READING_EVENT = 'stroomlijnen:reading-change'`: window CustomEvent after successful local write. detail `{locale, kind}`; kind bookmarks/positions/settings. Listen also to browser `storage` for cross-tab refresh.
- `listBookmarks(locale)` => array of `{path, title, updatedAt}` newest first.
- `listRecentReading(locale)` => array of `{path, title, progress, updatedAt}` newest first. progress is 0..1, article-relative.
- `isBookmarked(locale, path)` => boolean.
- `toggleBookmark(locale, {path,title})` => `{ok, bookmarked}`.
- `getReadingPosition(locale,path)` => entry or null.
- `saveReadingPosition(locale,{path,title,progress})` => boolean.
- `getReadingSettings()` => `{fontSize:'standard'|'large'|'larger',width:'standard'|'wide',focus:boolean}`.
- `saveReadingSettings(settings)` => boolean.
Paths are local absolute pathnames, never external URLs, queries or fragments. Locale is explicit (`nl` or `en`). Lists tolerate blocked storage/corrupt data and return []. Settings are shared across locales, bookmarks/history are separate. Entries capped to 100 per locale. No automatic resume jumping.

## Integration
`src/theme/DocItem/Layout/index.tsx` wraps original theme layout with ReadingTools. Toolbar uses Docusaurus current locale and pathname. Existing reading client module becomes inert to eliminate injected badges/listeners/timers.
Scoped CSS lives at `src/components/ReadingTools/styles.css`. Root `html` receives reading font/width/focus data attributes only while a document is mounted. Focus mode retains toolbar and explicit exit button (Escape also exits). Native labelled buttons/selects, status live region, native progress element; no modal focus trap required. Toolbar not included in word count.

## Strings
NL and EN labels are centralized in `src/components/ReadingTools/strings.mjs`, exported as `readingStrings`. Homepage may reuse labels if useful. Full exact text is in that module.

## Verification / handoff
- Storage/metrics and mounted React integration tests: `node --test tests/reading*.test.mjs` (4 passing tests, covering many interactions).
- UI tests use jsdom installed outside the project to avoid package/lockfile ownership conflicts: `npm install --prefix /tmp/reading-test-deps --no-package-lock --no-audit --no-fund jsdom@26`.
- `npm run typecheck` and `git diff --check` passed.
- Initial English build was blocked by homepage's still-being-written `src/css/home.css`. Retried after it appeared: server compilation passed, but overall command exceeded 300 seconds during client compilation. Full build/browser visual validation remains with the coordinating agent; do not treat this as a successful production build.
- History records actual scrolling rather than initial mounting, to avoid destroying stored resume positions. Resume offered for progress >2% and <98%, never auto-scrolls. Font/width/focus persist globally; document data attributes/listeners/ResizeObserver/animation frame and async clipboard completion are cleaned up on navigation.
- Storage denied: toolbar shows failure on bookmark/settings writes; settings still work for the current page. Reading-position writes fail silently to avoid repetitive scroll alerts. Clipboard failures instruct use of the address bar. Browser print dialog itself is browser-owned.
- No deployment or commit performed.
