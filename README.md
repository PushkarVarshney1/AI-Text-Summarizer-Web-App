# Syntex AI — AI Text Summarizer

React + Vite frontend, tiny Express backend, powered by Google Gemini.

## Project structure

```
syntex-ai/
├── index.html
├── vite.config.js          # dev server + proxies /api → backend
├── package.json
├── .env.example             # copy to .env and add your key
├── server/
│   └── index.js             # Express backend, calls the Gemini API
└── src/
    ├── main.jsx              # React entry point
    ├── App.jsx                # top-level layout + state
    ├── components/
    │   ├── NetworkCanvas.jsx      # animated background
    │   ├── Header.jsx
    │   ├── Hero.jsx
    │   ├── FeatureStrip.jsx
    │   ├── TextInputPanel.jsx     # textarea + summarize button
    │   ├── ErrorBox.jsx
    │   ├── ResultsSection.jsx     # wraps the two result cards
    │   ├── ResultCard.jsx         # reusable card (loading/empty/filled)
    │   ├── CopyButton.jsx
    │   ├── StatsBar.jsx
    │   ├── DownloadButton.jsx
    │   ├── Footer.jsx
    │   └── Icons.jsx               # shared inline SVGs
    ├── hooks/
    │   └── useIsNarrow.js          # responsive breakpoint hook
    ├── utils/
    │   ├── text.js                 # word count + sample text
    │   └── api.js                  # calls the local backend
    └── styles/
        ├── theme.js                # color/font tokens
        └── global.css              # fonts, reset, keyframes
```

## 1. Prerequisites

- [Node.js](https://nodejs.org/) 18 or newer (check with `node -v`)
- A Gemini API key from https://aistudio.google.com/apikey (free tier available)

## 2. Get the code into VS Code

Unzip the project, then in VS Code: **File → Open Folder…** and select the `syntex-ai` folder.
Open the integrated terminal with `` Ctrl+` `` (or **Terminal → New Terminal**).

## 3. Install dependencies

```bash
npm install
```

## 4. Add your API key

```bash
cp .env.example .env
```

Open `.env` and paste your key:

```
GEMINI_API_KEY=your-gemini-key-here
```

`.env` is already in `.gitignore`, so it won't be committed.

## 5. Run it

```bash
npm run dev
```

This starts **two** processes together:
- the Vite dev server (frontend) at **http://localhost:5173**
- the Express backend (holds your API key, calls Gemini) at **http://localhost:3001**

Open **http://localhost:5173** in your browser — that's the app. The frontend never sees your API key; it just calls `/api/summarize`, which Vite proxies to the backend.

To stop, press `Ctrl+C` in the terminal.

## 6. Building for production

```bash
npm run build      # outputs static files to dist/
npm run preview     # preview the production build locally
```

For a real deployment you'd host `dist/` as static files and deploy `server/index.js` (or an equivalent serverless function) somewhere that can hold the `GEMINI_API_KEY` secret — e.g. a small Node host, or convert `server/index.js`'s route into a Vercel/Netlify serverless function.

## Troubleshooting

- **"Server missing GEMINI_API_KEY"** → you skipped step 4, or the key isn't in `.env` in the project root, or the variable is misspelled (must be exactly `GEMINI_API_KEY`).
- **Nothing happens when you click Summarize** → check the terminal running `npm run dev`; the SERVER pane will print the real error from the Gemini API (e.g. invalid key, rate limit, quota).
- **Port already in use** → change `PORT` in `.env` for the backend, and update the `target` in `vite.config.js`'s proxy to match.
