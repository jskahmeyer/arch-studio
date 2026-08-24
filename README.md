# Arch Studio

A fictional architecture firm marketing site — a front-end build of the [Frontend Mentor "Architecture agency"](https://www.frontendmentor.io/) challenge, extended with client-side routing, an interactive map, and a responsive image pipeline.

## Stack

- [React 19](https://react.dev/) + [React Router v6](https://reactrouter.com/)
- [Vite 8](https://vitejs.dev/) for dev/build tooling
- [TypeScript](https://www.typescriptlang.org/) (strict mode)
- [Sass](https://sass-lang.com/) (`@use` module system)
- [Leaflet](https://leafletjs.com/) / [react-leaflet](https://react-leaflet.js.org/) for the office locations map

## Getting started

Requires Node (see `.nvmrc`).

```bash
npm install
npm run dev       # start the dev server
npm run build     # type-check and produce a production build in dist/
npm run preview   # serve the production build locally
npm run type-check # run TypeScript with no emit
```

## Project structure

```
src/
  components/   # feature components, grouped by page (home, about, contact, portfolio)
  pages/        # route-level components
  layout/       # Navbar, Footer
  hooks/        # shared hooks (e.g. useViewport)
  data/         # static JSON content (hero slides, portfolio items, leaders)
  sass/         # base styles, components, and per-page partials, imported via App.scss
  assets/       # images and icons, organized by page and breakpoint
```

Responsive images are picked up per-breakpoint via `import.meta.glob` rather than a manual `<picture>`/`srcset` per component — see `src/components/home/Hero.tsx` for the pattern.

## Notes

- The Leaflet default marker icon is re-pointed at the bundled image assets in `src/components/contact/LocationsMap.tsx`, working around a [known issue](https://github.com/Leaflet/Leaflet/issues/4968) where Leaflet's icon URL resolution breaks under bundlers.
- No backend — the contact form validates client-side only and does not submit anywhere.
