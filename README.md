# Simbarashe Nyamusa · Portfolio
n[![CI](https://github.com/momosto/nyamusa-portfolio/actions/workflows/ci.yml/badge.svg)](https://github.com/momosto/nyamusa-portfolio/actions/workflows/ci.yml)

Personal site: projects, experience and contact. Live at **https://simbarashe-nyamusa.vercel.app**.

The navigation is a feature-phone USSD menu: press 1–5 (or tap the keypad) to jump to a section, a nod to the mobile money and USSD systems I build.

## Run it

```bash
npm install
npm run dev     # http://localhost:5173
npm test        # vitest
npm run build
```

## Add a project

All content is in [`src/data.js`](src/data.js). Append an entry to `projects` (name, repo, pitch, stack, optional `demo`) and push; Vercel redeploys on every push to `main`.

Built with React 19 and Vite. No tracking, no backend.
