import data from "./projects.json";

// Typed access to content/projects.json, plus small helpers the pages share.

export type Milestone = { name: string; done: boolean };

export type Project = {
  slug: string;
  title: string;
  status: "shipped" | "in-progress";
  summary: string;
  featured?: boolean;
  highlights?: string[];
  stack?: string[];
  links?: { repo?: string; demo?: string; writeup?: string };
  milestones?: Milestone[];
  problem?: string;
  built?: string[];
  decisions?: { title: string; body: string }[];
  results?: { note?: string; columns: string[]; rows: string[][] };
  updated: string;
};

export const projects: Project[] = [...(data as Project[])].sort((a, b) =>
  b.updated.localeCompare(a.updated)
);

export const linkNames: Record<string, string> = { repo: "Code", demo: "Live demo", writeup: "Write-up" };

export function progress(p: Project) {
  const all = p.milestones ?? [];
  const done = all.filter((m) => m.done).length;
  const next = all.find((m) => !m.done);
  return { total: all.length, done, next };
}

// The project to show on the home page: the one marked featured, or the newest.
export const featured: Project | undefined = projects.find((p) => p.featured) ?? projects[0];

// What's being built right now: the newest in-progress project.
export const building: Project | undefined = projects.find((p) => p.status === "in-progress");
