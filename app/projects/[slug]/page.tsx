import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Milestones from "@/components/Milestones";
import { linkNames, projects } from "@/content/projects";

// One page per project, built from content/projects.json.
// A section only shows up when its field is filled in.

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  return p ? { title: `${p.title} | Hriday Sainathuni`, description: p.summary } : {};
}

export default async function ProjectPage({ params }: Params) {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  if (!p) notFound();

  const links = Object.entries(p.links ?? {}).filter(([, url]) => url);

  return (
    <main className="page project-page">
      <p className="back-link">
        <a href="/projects/">All projects</a>
      </p>
      <div className="project-head">
        <h1 style={{ viewTransitionName: `project-${p.slug}` }}>{p.title}</h1>
        {p.status === "in-progress" && <span className="project-status">In progress</span>}
      </div>
      <p className="project-lede">{p.summary}</p>
      {links.length > 0 && (
        <p className="project-links">
          {links.map(([key, url]) => (
            <a key={key} href={url} target="_blank" rel="noreferrer">
              {linkNames[key] ?? key}
            </a>
          ))}
        </p>
      )}

      {p.problem && (
        <section aria-labelledby="problem">
          <h2 id="problem">The problem</h2>
          <p className="prose">{p.problem}</p>
        </section>
      )}

      {p.built && p.built.length > 0 && (
        <section aria-labelledby="built">
          <h2 id="built">What I built</h2>
          {p.built.map((para) => (
            <p key={para} className="prose">
              {para}
            </p>
          ))}
          {p.highlights && p.highlights.length > 0 && (
            <ul className="project-highlights">
              {p.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          )}
          {p.stack && p.stack.length > 0 && <p className="project-stack">Built with {p.stack.join(", ")}</p>}
        </section>
      )}

      {p.decisions && p.decisions.length > 0 && (
        <section aria-labelledby="decisions">
          <h2 id="decisions">Decisions and tradeoffs</h2>
          <dl className="decisions">
            {p.decisions.map((d) => (
              <div key={d.title}>
                <dt>{d.title}</dt>
                <dd>{d.body}</dd>
              </div>
            ))}
          </dl>
        </section>
      )}

      {p.results && (
        <section aria-labelledby="results">
          <h2 id="results">Results</h2>
          {p.results.note && <p className="section-note">{p.results.note}</p>}
          <div className="results-wrap">
            <table className="results">
              <thead>
                <tr>
                  {p.results.columns.map((c) => (
                    <th key={c} scope="col">{c}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {p.results.rows.map((row) => (
                  <tr key={row.join("|")}>
                    {row.map((cell, i) => (i === 0 ? <th key={i} scope="row">{cell}</th> : <td key={i}>{cell}</td>))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {p.milestones && p.milestones.length > 0 && (
        <section aria-labelledby="progress">
          <h2 id="progress">Progress</h2>
          <Milestones project={p} list />
        </section>
      )}
    </main>
  );
}
