import Milestones from "@/components/Milestones";
import { linkNames, type Project } from "@/content/projects";

export default function ProjectCard({ project: p }: { project: Project }) {
  return (
    <article className="project">
      <div className="project-head">
        <h3>
          <a href={`/projects/${p.slug}/`} style={{ viewTransitionName: `project-${p.slug}` }}>
            {p.title}
          </a>
        </h3>
        {p.status === "in-progress" && <span className="project-status">In progress</span>}
      </div>
      <p>{p.summary}</p>
      <Milestones project={p} />
      {p.stack && p.stack.length > 0 && <p className="project-stack">Built with {p.stack.join(", ")}</p>}
      <p className="project-links">
        <a href={`/projects/${p.slug}/`}>Read more</a>
        {Object.entries(p.links ?? {})
          .filter(([, url]) => url)
          .map(([key, url]) => (
            <a key={key} href={url} target="_blank" rel="noreferrer">
              {linkNames[key] ?? key}
            </a>
          ))}
      </p>
    </article>
  );
}
