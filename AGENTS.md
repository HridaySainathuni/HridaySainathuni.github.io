# Instructions for coding agents

This is Hriday's personal website. You keep the **Projects** section up to date as he finishes the projects in his project brief. Don't change anything else unless he asks.

## What you edit

Only `content/projects.json`. The site reads it at build time and renders every entry. You never need to touch components or styles to add a project.

## When to update

- When a project from the brief reaches its first merged milestone, add it with `"status": "in-progress"`.
- When it meets its "done when" criteria, change it to `"status": "shipped"`, update the summary and highlights to match what actually exists, and add the live demo link if there is one.
- Each time you update an entry, set `"updated"` to the current month.

Only describe what is built and merged. Never list planned features as done.

## Entry format

```json
{
  "slug": "agent-eval-toolkit",
  "title": "Judgecheck",
  "status": "in-progress",
  "summary": "One or two sentences on what it does and who it helps.",
  "highlights": [
    "Up to four short lines, each a concrete result or feature",
    "Lead with numbers when you have them"
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

- `slug`: lowercase letters, numbers, and hyphens. Unique.
- `status`: `"shipped"` or `"in-progress"`.
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
