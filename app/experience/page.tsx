"use client";

import { useEffect, useState } from "react";
import RoleCards from "@/components/RoleCards";
import Timeline from "@/components/Timeline";
import { roles } from "@/content/profile";

const themes = [
  {
    id: "agents",
    label: "Agents and memory",
    desc: "Agents that remember past work and use tools to get things done.",
  },
  {
    id: "evals",
    label: "Evals and reliability",
    desc: "Tests and judges that tell you whether an agent actually got better.",
  },
  {
    id: "robots",
    label: "Multi-agent robots",
    desc: "Robots that coordinate in tight spaces instead of getting stuck.",
  },
  {
    id: "all",
    label: "All in order",
    desc: "Every role, newest first, on one timeline.",
  },
];

const validIds = themes.map((t) => t.id);

export default function Experience() {
  const [active, setActive] = useState("agents");

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (validIds.includes(hash)) setActive(hash);
  }, []);

  const select = (id: string) => {
    setActive(id);
    window.history.replaceState(null, "", `/experience#${id}`);
  };

  const theme = themes.find((t) => t.id === active)!;
  const list =
    active === "all" ? roles : roles.filter((r) => r.themes?.includes(active));

  return (
    <main className="page">
      <h1>Experience</h1>
      <p className="section-note">
        My work follows three threads. Pick one to see only that thread.
        Workday covers both agents and evals, so it shows up in both.
      </p>
      <div className="thread-tabs" role="tablist" aria-label="Experience threads">
        {themes.map((t) => {
          const count =
            t.id === "all" ? roles.length : roles.filter((r) => r.themes?.includes(t.id)).length;
          return (
            <button
              key={t.id}
              type="button"
              role="tab"
              aria-selected={active === t.id}
              className="thread-tab"
              onClick={() => select(t.id)}
            >
              {t.label} <span className="thread-count">{count}</span>
            </button>
          );
        })}
      </div>
      <section aria-labelledby="thread-heading">
        <h2 id="thread-heading">{theme.label}</h2>
        <p className="section-note">{theme.desc}</p>
        {active === "all" ? (
          <Timeline roles={roles} />
        ) : (
          <RoleCards roles={list} />
        )}
      </section>
    </main>
  );
}
