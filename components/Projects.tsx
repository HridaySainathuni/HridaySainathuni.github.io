import projects from "@/content/projects.json";

type Project = {
  slug: string;
  title: string;
  status: "shipped" | "in-progress";
  summary: string;
  highlights?: string[];
  stack?: string[];
  links?: { repo?: string; demo?: string; writeup?: string };
  updated: string;
};

const linkNames: Record<string, string> = { repo: "Code", demo: "Live demo", writeup: "Write-up" };

export default function Projects() {
  const list = [...(projects as Project[])].sort((a, b) => b.updated.localeCompare(a.updated));

  return (
    <ul className="projects">
      {list.map((p) => (
        <li key={p.slug} className="project">
          <div className="project-head">
            <h3>{p.title}</h3>
            {p.status === "in-progress" && <span className="project-status">In progress</span>}
          </div>
          <p>{p.summary}</p>
          {p.highlights && p.highlights.length > 0 && (
            <ul className="project-highlights">
              {p.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          )}
          {p.stack && p.stack.length > 0 && <p className="project-stack">Built with {p.stack.join(", ")}</p>}
          {p.links && (
            <p className="project-links">
              {Object.entries(p.links)
                .filter(([, url]) => url)
                .map(([key, url]) => (
                  <a key={key} href={url} target="_blank" rel="noreferrer">
                    {linkNames[key] ?? key}
                  </a>
                ))}
            </p>
          )}
        </li>
      ))}
    </ul>
  );
}
