Development Notes

- Install dependencies:

```bash
npm install
```

- Run dev server:

```bash
npm run dev
```

Environment

- Copy `.env.example` to `.env` and set your Gemini API key:

```bash
cp .env.example .env
# then edit .env and set VITE_GEMINI_API_KEY
```

Vite exposes `import.meta.env.VITE_GEMINI_API_KEY` to the app. Without a key, AI features (Strategy Modal / Tech Insights) will not function.
