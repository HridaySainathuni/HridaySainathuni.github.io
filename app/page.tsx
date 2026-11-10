import { profile } from "@/content/profile";

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
          <a href={links.github} target="_blank" rel="noreferrer">GitHub</a>
          {links.linkedin && (
            <a href={links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          )}
          <a href={`mailto:${links.email}`}>Email</a>
        </nav>
      </header>

      <section aria-labelledby="threads">
        <h2 id="threads">Three threads</h2>
        <p className="section-note">My work follows three ideas. Pick one to see the roles behind it.</p>
        <div className="theme-cards">
          {themes.map((t) => (
            <a key={t.id} href={`/experience#${t.id}`} className="theme-card">
              <h3>{t.title}</h3>
              <p>{t.desc}</p>
            </a>
          ))}
        </div>
      </section>

      <section aria-labelledby="more">
        <h2 id="more">More</h2>
        <p className="prose">
          See what I built on the <a href="/projects">Projects</a> page, what I
          published on the <a href="/papers">Papers</a> page, and a bit about
          me on the <a href="/about">About</a> page.
        </p>
      </section>
    </main>
  );
}
