import type { Role } from "@/content/profile";

const fmt = (ym: string) => {
  const [y, m] = ym.split("-").map(Number);
  return new Date(y, m - 1, 1).toLocaleString("en-US", { month: "short", year: "numeric" });
};

export default function RoleCards({ roles }: { roles: Role[] }) {
  return (
    <div>
      {roles.map((r) => (
        <article key={`${r.org}-${r.start}`} className="role-card" data-kind={r.kind}>
          <div className="role-card-head">
            <h3>{r.org}</h3>
            <span className="role-dates">
              {fmt(r.start)} to {r.end ? fmt(r.end) : "now"}
            </span>
          </div>
          <p className="role-title">{r.title}</p>
          <span className="role-kind" data-kind={r.kind}>
            {r.kind === "research" ? "Research" : "Industry"}
          </span>
          <ul className="role-bullets">
            {r.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}
