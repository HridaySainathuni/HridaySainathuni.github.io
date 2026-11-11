# Instructions for coding agents

This is Hriday's personal website. You keep the **Projects** section up to date as he finishes the projects in his project brief. Don't change anything else unless he asks.

## What you edit

Only `content/projects.json`. The site reads it at build time. Each entry gets a card on the Projects page and its own page at `/projects/<slug>/`. You never need to touch components or styles to add a project.

## When to update

- When a project from the brief reaches its first merged milestone, add it with `"status": "in-progress"`.
- When it meets its "done when" criteria, change it to `"status": "shipped"`, update the summary and highlights to match what actually exists, and add the live demo link if there is one.
- Each time a milestone is merged, mark it done in `milestones`.
- Each time you update an entry, set `"updated"` to the current month.

Only describe what is built and merged. Never list planned features as done.

## Entry format

```json
{
  "slug": "agent-eval-toolkit",
  "title": "Judgecheck",
  "status": "in-progress",
  "featured": false,
  "summary": "One or two sentences on what it does and who it helps.",
  "problem": "A short paragraph on the problem and why it matters.",
  "built": [
    "One paragraph on what the project does for the person using it.",
    "One paragraph on how it works."
  ],
  "highlights": [
    "Up to four short lines, each a concrete result or feature",
    "Lead with numbers when you have them"
  ],
  "decisions": [
    { "title": "Postgres over a vector database", "body": "Why, and what it cost." }
  ],
  "results": {
    "note": "Measured on 80 resume and job pairs.",
    "columns": ["Approach", "Fabrication rate", "Keyword coverage"],
    "rows": [
      ["Single call", "12%", "61%"],
      ["Agent with check", "1%", "74%"]
    ]
  },
  "milestones": [
    { "name": "Ingest traces", "done": true },
    { "name": "Run judges", "done": false }
  ],
  "stack": ["Python", "OpenTelemetry", "Anthropic API"],
  "links": {
    "repo": "https://github.com/HridaySainathuni/...",
    "demo": "https://...",
    "writeup": "https://..."
  },
  "updated": "2026-12"
}
```

Required: `slug`, `title`, `status`, `summary`, `updated`. Everything else is optional, and the site only shows a section when its field is filled in.

- `slug`: lowercase letters, numbers, and hyphens. Unique. It becomes the page address, `/projects/<slug>/`.
- `status`: `"shipped"` or `"in-progress"`.
- `featured`: set `true` on one project at most. It shows on the home page. Feature the strongest project that has real results.
- `milestones`: copy the milestone list from the project brief, at most 8. Flip `done` to `true` when a milestone's pull request is merged. The site draws these as progress spans and uses the first unfinished one for the "Right now I'm building" line on the home page.
- `decisions`: pull the two to four most interesting entries from the project's `DECISIONS.md`.
- `results`: only measured numbers from the project's evals or benchmarks. Never estimates.
- `links`: only `repo`, `demo`, and `writeup`. Leave a key out instead of using an empty string.
- `updated`: `"YYYY-MM"`. The list shows newest first.

## Writing rules

Write the way Hriday writes.

- Active voice. Plain words. Short and direct.
- Address the reader as "you" when it fits, for example "Paste a job link and you get a tailored resume."
- No semicolons, em dashes, hashtags, emojis, or asterisks. Use periods and commas.
- No hype words like "cutting-edge", "revolutionary", or "seamless".
- State results as facts when they're measured. Don't hedge with "might" or "could".

## Before you open a pull request

1. Run `npm run check:projects`. It must pass.
2. Run `npm run build`. It must pass.
3. Open a pull request with the change. Hriday reviews and merges it. GitHub Actions deploys the site automatically after the merge.
