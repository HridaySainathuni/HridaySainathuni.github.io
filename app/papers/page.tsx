import { papers } from "@/content/profile";

export default function PapersPage() {
  return (
    <main className="page">
      <h1>Papers</h1>
      <p className="section-note">What I published, and what I contributed to.</p>
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
    </main>
  );
}
