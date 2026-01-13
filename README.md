# Frank Thoeny — Portfolio (Vite + React)

A small portfolio site built with Vite + React and Tailwind-style utility classes.

## Overview

- Single-page portfolio showcasing experience, case studies, and architectural insights.
- Small component-based structure under `src/components` and data in `src/data`.
- Basic theme toggle and a Strategy AI modal (requires a Gemini API key).

## Quick Start

1. Install dependencies

```bash
npm install
```

2. Create environment file from the example and set your Gemini API key (optional):

```bash
cp .env.example .env
# then edit .env and set VITE_GEMINI_API_KEY
```

3. Start the dev server

```bash
npm run dev
```

Open http://localhost:5173 in your browser.

## Environment

- `VITE_GEMINI_API_KEY` — Gemini API key (optional). If not set, AI features (Strategy Modal, Tech Insights) will not function.

## Project Structure (high level)

- `src/App.jsx` — application composition and top-level state
- `src/components/` — UI components (NavBar, Hero, StatTally, ExperienceList, CaseStudiesGrid, TechMatrix, StrategyModal, etc.)
- `src/data/` — static data files (experience, caseStudies, techStack, stats)
- `src/services/gemini.js` — wrapper for Gemini API with retry logic
- `src/context/ThemeContext.jsx` — theme provider (light/dark)

## Notes & Troubleshooting

- If you see a browser console error like `Unexpected token '<'` pointing to a `.js` data file, ensure the data files do not contain JSX (use plain objects or string references for icons). The codebase was updated to move icons into components and keep data as plain JS objects.
- Hard-refresh the browser after code changes to avoid stale cached modules: `Ctrl/Cmd+Shift+R`.

## Next steps you might want

- Wire theme persistence (`localStorage`) in `ThemeContext`.
- Move sensitive API keys to a secure backend proxy.
- Add basic unit tests for components.

If you'd like, I can run the dev server and verify the app in a headless check, or add theme persistence now.
