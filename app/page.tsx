import Timeline from "@/components/Timeline";
import { profile, roles, papers } from "@/content/profile";
import projects from "@/content/projects.json";

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

type Project = { slug: string; title: string; summary: string; updated: string };

export default function Home() {
  const { links } = profile;
  const latest = [...(projects as Project[])].sort((a, b) => b.updated.localeCompare(a.updated))[0];

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
        <nav className="hero-links" aria-label="Contact and profiles">
          <a href={links.github} target="_blank" rel="noreferrer">GitHub</a>
          {links.linkedin && (
            <a href={links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          )}
          <a href={`mailto:${links.email}`}>Email</a>
        </nav>
      </header>

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

      <section aria-labelledby="latest" className="latest">
        <div>
          <h2 id="latest">Latest project</h2>
          {latest && (
            <>
              <h3 className="latest-title">{latest.title}</h3>
              <p className="prose">{latest.summary}</p>
              <p className="latest-link">
                <a href="/projects/">See all projects</a>
              </p>
            </>
          )}
        </div>
        <div>
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
        </div>
      </section>
    </main>
  );
}
