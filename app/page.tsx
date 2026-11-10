import Timeline from "@/components/Timeline";
import Projects from "@/components/Projects";
import { profile, papers } from "@/content/profile";

export default function Home() {
  const { links } = profile;

  return (
    <main className="page">
      <header className="hero">
        <h1>{profile.name}</h1>
        <p className="tagline">{profile.tagline}</p>
        {profile.intro.map((p) => (
          <p key={p} className="intro">
            {p}
          </p>
        ))}
        <nav className="hero-links" aria-label="Contact and profiles">
          <a href={links.resume}>Resume</a>
          <a href={links.github} target="_blank" rel="noreferrer">GitHub</a>
          {links.linkedin && (
            <a href={links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          )}
          <a href={`mailto:${links.email}`}>Email</a>
        </nav>
      </header>

      <section aria-labelledby="work">
        <h2 id="work">Work and research</h2>
        <p className="section-note">Click a row to see what I did there.</p>
        <Timeline />
      </section>

      <section aria-labelledby="projects">
        <h2 id="projects">Projects</h2>
        <Projects />
      </section>

      <section aria-labelledby="papers">
        <h2 id="papers">Papers</h2>
        <ul className="papers">
          {papers.map((p) => (
            <li key={p.description}>
              {p.title ? (
                p.url ? (
                  <a href={p.url} target="_blank" rel="noreferrer" className="paper-title">{p.title}</a>
                ) : (
                  <span className="paper-title">{p.title}</span>
                )
              ) : null}
              <span className="paper-desc">{p.description}</span>
              <span className="paper-venue">{p.venue}</span>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="outside">
        <h2 id="outside">Outside of work</h2>
        <p className="prose">{profile.outside}</p>
      </section>

      <footer className="footer">
        <p>
          Want to talk? Email me at <a href={`mailto:${links.email}`}>{links.email}</a>.
        </p>
      </footer>
    </main>
  );
}
