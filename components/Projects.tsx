import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/content/projects";

export default function Projects() {
  return (
    <ul className="projects">
      {projects.map((p) => (
        <li key={p.slug}>
          <ProjectCard project={p} />
        </li>
      ))}
    </ul>
  );
}
