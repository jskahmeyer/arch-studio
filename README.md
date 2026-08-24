# Arch Studio

[![CI](https://github.com/jskahmeyer/arch-studio/actions/workflows/ci.yml/badge.svg)](https://github.com/jskahmeyer/arch-studio/actions/workflows/ci.yml)

A fictional architecture firm marketing site — a front-end build of the [Frontend Mentor "Architecture agency"](https://www.frontendmentor.io/) challenge, extended with client-side routing, a real contact-form integration, an interactive map, and a responsive, accessible, tested front end.

## Stack

- [React 19](https://react.dev/) + [React Router v7](https://reactrouter.com/) (`createBrowserRouter` data router)
- [Vite 8](https://vitejs.dev/) for dev/build tooling
- [TypeScript](https://www.typescriptlang.org/) (strict mode)
- [Sass](https://sass-lang.com/) (`@use` module system)
- [Leaflet](https://leafletjs.com/) / [react-leaflet](https://react-leaflet.js.org/) for the office locations map
- [Formspree](https://formspree.io/) for the contact form (no backend of its own)

## Getting started

Requires Node (see `.nvmrc`).

```bash
npm install
npm run dev             # start the dev server
npm run build           # type-check and produce a production build in dist/
npm run preview         # serve the production build locally
npm run type-check      # run TypeScript with no emit
npm run lint            # eslint
npm run format          # prettier --write
npm run format:check    # prettier --check (what CI runs)
npm test                # vitest run
npm run test:watch      # vitest, watch mode
```

A pre-commit hook (husky + lint-staged) runs eslint/prettier on staged files and the full test suite on every commit. CI runs type-check, lint, format:check, test, and build on every push/PR to `main`.

## Testing & quality

- **[Vitest](https://vitest.dev/) + [React Testing Library](https://testing-library.com/react)** for component/hook tests — 20 tests covering component behavior (Hero slide rotation/pause, Navbar mobile-menu-closes-on-navigation, PageLinks routing), the `useViewport` hook, and `ContactForm`'s validation, focus-clearing, and real Formspree submit/success/error paths (with `fetch` mocked).
- **[jest-axe](https://github.com/NickColley/jest-axe)** runs an automated accessibility check (`axe-core` under the hood) against every interactive component's rendered output, including `ContactForm` in both its default and post-validation-error states. (Chosen over `vitest-axe`, which hasn't published in over a year and pins an outdated peer dependency against this project's Vitest version.)
- **ESLint** (flat config) with `typescript-eslint`, `eslint-plugin-react-hooks`, `eslint-plugin-jsx-a11y`, and `eslint-config-prettier`.
- **Prettier**, configured to match this codebase's existing conventions (4-space indent, single quotes, no semicolons) rather than Prettier's defaults.

## Accessibility

This was a deliberate focus, not an afterthought:

- Skip-to-content link + a `<main>` landmark, so keyboard/screen-reader users can bypass the nav.
- The contact form uses real `<label>` elements (visually hidden to preserve the placeholder-driven design) properly associated via `htmlFor`/`id`, plus `aria-invalid`/`aria-describedby` on each field and a `role="status"` region announcing submit success/failure.
- The home page's hero carousel respects `prefers-reduced-motion` (starts paused) and has an explicit, always-visible pause/play control — auto-advancing carousels with no way to stop them fail WCAG 2.2.2.
- Every content image has real descriptive `alt` text; only genuinely decorative images (icons, background photos) use `alt=""`.
- Verified with both automated tooling (`jest-axe`, above) and manual keyboard navigation through every page.

## Project structure

```
src/
  components/
    shared/     # cross-cutting components used by more than one page (ArrowLink, Page, PageLinks)
    home/, about/, contact/, portfolio/   # page-specific components
  pages/        # route-level components
  layout/       # Navbar, Footer
  hooks/        # shared hooks (e.g. useViewport)
  data/         # static JSON content (hero slides, portfolio items, leaders)
  sass/         # base styles, components, and per-page partials, imported via App.scss
  assets/       # images (WebP) and icons, organized by page and breakpoint
  router.tsx    # createBrowserRouter route table
  setupTests.ts # Vitest setup (jest-dom, jest-axe, matchMedia stub)
```

Tests live alongside the code they test (`Component.test.tsx`), not in a separate `__tests__` tree.

Responsive images are picked up per-breakpoint via `import.meta.glob` rather than a manual `<picture>`/`srcset` per component — see `src/components/home/Hero.tsx` for the pattern.

## Engineering decisions

A few choices worth explaining rather than leaving implicit:

- **`createBrowserRouter` instead of `<BrowserRouter>`/`<Routes>`.** Client-side navigation doesn't reset scroll position the way a full page load does — a link clicked near the bottom of a page used to leave the next page scrolled to the same spot. The data-router API ships a built-in `<ScrollRestoration />`, which fixes this without hand-rolling a `useEffect`. Migrating to it also made adding a proper catch-all 404 route trivial.
- **`ContactForm` uses React state, not DOM refs.** It originally drove validation by walking `formRef.current.children` by array index and mutating `classList`/`innerText` directly — fragile, and bypassed React's rendering model entirely. Rewritten to be state-driven, which is also what made real accessible error messaging (`aria-describedby`, `role="alert"`) straightforward to add.
- **WebP images, no `<picture>`/JPG fallback.** WebP has had near-universal browser support for years now. Maintaining two image formats plus fallback markup across the six components that render responsive images would have been complexity with no real payoff. Converting cut total image payload by 44% (3.18MB → 1.76MB) with no visible quality loss.
- **Local inline SVGs instead of the Font Awesome CDN kit.** Two social icons were pulling in an entire external icon-kit script (which also swaps icons in via JS after load, causing a layout shift). Replaced with inline SVGs matching the rest of the site's local-icon convention — one less third-party script, no more shift.
- **`jest-axe` over `vitest-axe`** — see Testing & quality above.
- **Pre-commit runs the full test suite, not just lint-staged.** Unlike lint-staged (which only touches staged files and stays fast regardless of repo size), a full `vitest run` doesn't scale the same way — but at 20 tests and ~1.5s, the cost is negligible today. Worth revisiting as a pre-push hook instead if the suite grows enough to make every commit noticeably slower.

## Notes

- The Leaflet default marker icon is re-pointed at the bundled image assets in `src/components/contact/LocationsMap.tsx`, working around a [known issue](https://github.com/Leaflet/Leaflet/issues/4968) where Leaflet's icon URL resolution breaks under bundlers.
- No backend of its own — the contact form submits directly to Formspree via `fetch`, with real loading/success/error states (not a simulated one).
