import { progress, type Project } from "@/content/projects";

// Milestones drawn as a row of spans, like the bars in the work timeline.
// Filled spans are merged. Empty ones are still ahead.
export default function Milestones({ project, list = false }: { project: Project; list?: boolean }) {
  const { total, done, next } = progress(project);
  if (total === 0) return null;

  return (
    <div className="milestones">
      <div className="milestone-spans" role="img" aria-label={`${done} of ${total} milestones done`}>
        {project.milestones!.map((m) => (
          <span key={m.name} className="milestone-span" data-done={m.done ? "true" : undefined} title={m.name} />
        ))}
      </div>
      <p className="milestone-note">
        {done} of {total} milestones done
        {next && !list ? `. Next up: ${next.name}` : ""}
      </p>
      {list && (
        <ol className="milestone-list">
          {project.milestones!.map((m) => (
            <li key={m.name} data-done={m.done ? "true" : undefined}>
              <span className="milestone-mark" aria-hidden="true" />
              {m.name}
              <span className="milestone-state">{m.done ? "Done" : m === next ? "In progress" : "Planned"}</span>
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}
