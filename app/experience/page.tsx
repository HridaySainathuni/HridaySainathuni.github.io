import Timeline from "@/components/Timeline";
import { roles } from "@/content/profile";

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

export default function Experience() {
  return (
    <main className="page">
      <h1>Experience</h1>
      <p className="section-note">
        My work follows three threads. Some roles show up in more than one
        thread. Workday covers both agents and evals.
      </p>
      {themes.map((t) => {
        const list = roles.filter((r) => r.themes?.includes(t.id));
        return (
          <section key={t.id} id={t.id} aria-labelledby={`${t.id}-heading`}>
            <h2 id={`${t.id}-heading`}>{t.title}</h2>
            <p className="section-note">{t.desc}</p>
            <Timeline roles={list} />
          </section>
        );
      })}
    </main>
  );
}
