# Personal website

My personal site. Built with Next.js, TypeScript, and Tailwind, exported as static files, and hosted free on GitHub Pages.

## Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Edit content

- **Projects:** `content/projects.json`. Coding agents update this file. See `AGENTS.md`.
- **Everything else:** `content/profile.ts` has the intro, links, work history, and papers.
- **Pages:** `app/` has Home, Experience, Projects, Papers, and About, with a top menu in `components/Nav.tsx`. Experience groups roles by theme using the `themes` field on each role in `profile.ts`.

The work timeline draws itself from the dates in `profile.ts`. Add a role and its bar appears.

## Put it online

The site deploys to GitHub Pages from the `HridaySainathuni.github.io` repo.

1. In the repo, open **Settings > Pages** and set **Source** to **GitHub Actions**. You only do this once.
2. Every push to `main` builds the site and publishes it to https://hridaysainathuni.github.io.
3. Pull requests run the same checks and build, but don't publish.

To use your own domain, buy one (around $10 to $15 a year), add it under **Settings > Pages > Custom domain**, and point the domain's DNS at GitHub Pages.

## Check before you push

```bash
npm run check:projects
npm run build
```
