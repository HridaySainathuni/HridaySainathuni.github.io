// Validates content/projects.json. Run with: npm run check:projects
import { readFileSync } from "node:fs";

const projects = JSON.parse(readFileSync(new URL("../content/projects.json", import.meta.url), "utf8"));
const errors = [];
const slugs = new Set();

if (!Array.isArray(projects)) errors.push("projects.json must be an array");

for (const [i, p] of (Array.isArray(projects) ? projects : []).entries()) {
  const at = `projects[${i}]${p?.slug ? ` (${p.slug})` : ""}`;
  for (const key of ["slug", "title", "status", "summary", "updated"]) {
    if (typeof p[key] !== "string" || !p[key].trim()) errors.push(`${at}: "${key}" is required`);
  }
  if (p.slug && !/^[a-z0-9-]+$/.test(p.slug)) errors.push(`${at}: slug must be lowercase letters, numbers, and hyphens`);
  if (slugs.has(p.slug)) errors.push(`${at}: duplicate slug`);
  slugs.add(p.slug);
  if (p.status && !["shipped", "in-progress"].includes(p.status)) errors.push(`${at}: status must be "shipped" or "in-progress"`);
  if (p.updated && !/^\d{4}-\d{2}$/.test(p.updated)) errors.push(`${at}: updated must look like "2026-11"`);
  if (p.summary && p.summary.length > 260) errors.push(`${at}: keep the summary under 260 characters`);
  if (p.highlights && (!Array.isArray(p.highlights) || p.highlights.length > 4)) errors.push(`${at}: highlights must be an array of at most 4 items`);
  if (p.stack && !Array.isArray(p.stack)) errors.push(`${at}: stack must be an array`);
  for (const [k, url] of Object.entries(p.links ?? {})) {
    if (!["repo", "demo", "writeup"].includes(k)) errors.push(`${at}: unknown link "${k}" (use repo, demo, writeup)`);
    if (url && !/^https:\/\//.test(url)) errors.push(`${at}: link "${k}" must start with https://`);
  }
  const text = [p.summary, ...(p.highlights ?? [])].join(" ");
  if (/[;—–#*]/.test(text)) errors.push(`${at}: avoid semicolons, dashes, hashtags, and asterisks in copy`);
}

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}
console.log(`projects.json looks good (${projects.length} projects)`);
