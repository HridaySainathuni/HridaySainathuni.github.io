import Timeline from "@/components/Timeline";
import { profile, roles, papers } from "@/content/profile";
import ProjectCard from "@/components/ProjectCard";
import { building, featured, progress } from "@/content/projects";

const themes = [
  {
    id: "agents",
    title: "Agents and memory",
    desc: "Agents that remember past work and use tools to get things done.",
  },
  {
    id: "evals",
    title: "Evals and reliability",
    desc: "Tests and judges that tell you whether an agent actually got better.",
  },
  {
    id: "robots",
    title: "Multi-agent robots",
    desc: "Robots that coordinate in tight spaces instead of getting stuck.",
  },
];

export default function Home() {
  const { links } = profile;
  const next = building ? progress(building).next : undefined;

  return (
    <main className="page">
      <header className="hero">
        <h1 className="hero-name">{profile.name}</h1>
        <p className="tagline">{profile.tagline}</p>
        {profile.intro.map((p) => (
          <p key={p} className="intro">
            {p}
          </p>
        ))}
        {building && (
          <p className="now-building">
            <span className="now-dot" aria-hidden="true" />
            Right now I&apos;m building <a href={`/projects/${building.slug}/`}>{building.title}</a>
            {next ? `. Next up: ${next.name}.` : "."}
          </p>
        )}
        <nav className="hero-links" aria-label="Contact and profiles">
          <a href={links.github} target="_blank" rel="noreferrer">GitHub</a>
          {links.linkedin && (
            <a href={links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          )}
          <a href={`mailto:${links.email}`}>Email</a>
        </nav>
      </header>

      {featured && (
        <section aria-labelledby="featured">
          <h2 id="featured">Featured project</h2>
          <div className="featured">
            <ProjectCard project={featured} />
          </div>
          <p className="latest-link">
            <a href="/projects/">See all projects</a>
          </p>
        </section>
      )}

      <section aria-labelledby="where">
        <h2 id="where">Where I&apos;ve worked</h2>
        <p className="section-note">
          Every role on one timeline, like a trace of an agent run. Click a row to see what I did there.
        </p>
        <Timeline />
      </section>

      <section aria-labelledby="threads">
        <h2 id="threads">Three threads</h2>
        <p className="section-note">My work keeps coming back to three ideas. Pick one to see the roles behind it.</p>
        <div className="theme-cards">
          {themes.map((t) => {
            const count = roles.filter((r) => r.themes?.includes(t.id)).length;
            return (
              <a key={t.id} href={`/experience/#${t.id}`} className="theme-card" data-theme={t.id}>
                <h3>{t.title}</h3>
                <p>{t.desc}</p>
                <span className="theme-count">
                  {count} {count === 1 ? "role" : "roles"}
                </span>
              </a>
            );
          })}
        </div>
      </section>

      <section aria-labelledby="published" className="published">
        <h2 id="published">Published</h2>
          <ul className="latest-papers">
            {papers.map((p) => (
              <li key={p.description}>
                {p.url ? (
                  <a href={p.url} target="_blank" rel="noreferrer">{p.title ?? p.description}</a>
                ) : (
                  <span>{p.title ?? p.description}</span>
                )}
                <span className="paper-venue">{p.venue}</span>
              </li>
            ))}
          </ul>
      </section>
    </main>
  );
}
