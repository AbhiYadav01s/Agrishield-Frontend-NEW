# Agri-Vyakaroti

A responsive React workspace for farmers, field officers, and agronomists.

## Run locally

```sh
npm install
npm run dev
```

Open the URL printed by Vite. Demo accounts are `farmer`, `worker`, and `expert`, each with password `123`. These are demonstration role selectors, not production authentication.

The app works without the Python backend. To enable optional image validation and sample forecast refresh, start the sibling `Agri-Backend` service on port 10000. Vite proxies `/api` to that local service. A production host must provide an equivalent reverse proxy.

## Validation

```sh
npm run lint
npm run build
```

## Structure

- `src/MainApp.jsx`: sign-in, role navigation, app shell, accessibility controls.
- `src/ui.jsx`: shared icons, buttons, cards, dialogs, and landscape illustration.
- `src/screens.jsx`: dashboards and the twelve feature screens.
- `src/workspace.js`: sample records, browser persistence, API and export helpers.
- `src/design.css`: responsive design system and styles.
- `src/index.css`: Tailwind 4 entry and application stylesheet.

Legacy screen files are retained for reference but are not imported by the new entry point.

## Working workflows

Fields can be added and searched. Crop photographs are validated, previewed, and recorded as observations. Officers can verify or escalate observations; agronomists can record assessments. Saved assessments feed an explicitly labeled training simulation. Farmer and village filters produce matching audiences for communication drafts. Officers prepare claim batches, which agronomists review locally. Reports and drafts can be exported as JSON. Conversations and search work locally; speech features depend on browser support.

Data is saved under `agri-workspace-v1` in browser localStorage and shared across demo roles on the same origin. This is not a multi-user database. Use non-sensitive sample data. The navigation language selector translates navigation labels; detailed content is English.

## Demonstration boundaries

Weather, map telemetry, and initial records are samples. No trained disease model is present. The app never invents a diagnosis or confidence score for a newly uploaded photo. Chat replies are a local rule-based guide. Broadcasts and expert requests remain drafts. Training does not modify a model. Relief review does not issue a legal signature, submit a government claim, or release funds.

OpenStreetMap tiles require internet access. If they cannot load, the observation list stays available with a visible fallback notice. Leaflet CSS and icons are bundled locally. Fonts use the operating system, avoiding a font CDN dependency.
