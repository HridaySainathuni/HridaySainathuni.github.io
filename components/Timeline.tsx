import { roles as allRoles, type Role } from "@/content/profile";

// Experience drawn as a trace waterfall: one row per role, a bar for its span of time.
// Click a row to expand what was done there.

const monthIndex = (ym: string) => {
  const [y, m] = ym.split("-").map(Number);
  return y * 12 + (m - 1);
};

const fmt = (ym: string) => {
  const [y, m] = ym.split("-").map(Number);
  return new Date(y, m - 1, 1).toLocaleString("en-US", { month: "short", year: "numeric" });
};

function nowYm() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`;
}

// Pass `theme` to keep every role on screen but dim the ones outside that thread.
export default function Timeline({ roles: givenRoles, theme }: { roles?: Role[]; theme?: string }) {
  const roles = givenRoles ?? allRoles;
  const now = nowYm();
  const startYear = Math.min(...roles.map((r) => Number(r.start.slice(0, 4))));
  const lastYm = roles.reduce((max, r) => {
    const end = r.end ?? r.start;
    return monthIndex(end) > monthIndex(max) ? end : max;
  }, now);
  const endYear = Number(lastYm.slice(0, 4)) + 1;

  const domainStart = startYear * 12; // Jan of first year
  const domainEnd = endYear * 12; // Jan of the year after the last event
  const span = domainEnd - domainStart;
  const pct = (i: number) => ((i - domainStart) / span) * 100;

  const years: number[] = [];
  for (let y = startYear + 1; y < endYear; y++) years.push(y);
  const nowPct = pct(monthIndex(now));

  const place = (r: Role) => {
    const s = monthIndex(r.start);
    const e = r.end ? monthIndex(r.end) + 1 : r.upcoming ? domainEnd : monthIndex(now) + 1;
    const left = pct(s);
    const width = Math.max(pct(e) - left, 0.8);
    // Put the note on whichever side of the bar has more room.
    const noteBefore = left + width / 2 > 50;
    const note = noteBefore ? { right: `calc(${100 - left}% + 0.6rem)` } : { left: `calc(${left + width}% + 0.6rem)` };
    return { left, width, note };
  };

  const dates = (r: Role) =>
    r.upcoming ? `Starting ${fmt(r.start)}` : `${fmt(r.start)} to ${r.end ? fmt(r.end) : "now"}`;

  return (
    <div className="trace">
      <div className="trace-axis" aria-hidden="true">
        <div />
        <div className="trace-track">
          <span className="trace-year" style={{ left: "0%" }}>{startYear}</span>
          {years.map((y) => (
            <span key={y} className="trace-year" style={{ left: `${pct(y * 12)}%` }}>
              {y}
            </span>
          ))}
        </div>
      </div>

      <ol className="trace-rows">
        {roles.map((r, i) => {
          const { left, width, note } = place(r);
          const dim = theme && theme !== "all" && !r.themes?.includes(theme);
          return (
            <li key={`${r.org}-${r.start}`}>
              <details
                className="trace-row"
                data-kind={r.kind}
                data-upcoming={r.upcoming ? "true" : undefined}
                data-dim={dim ? "true" : undefined}
              >
                <summary>
                  <span className="trace-label">
                    <span className="trace-org">{r.org}</span>
                    <span className="trace-title">{r.title}</span>
                    {r.highlight && <span className="trace-note trace-note-label">{r.highlight}</span>}
                  </span>
                  <span className="trace-track">
                    {years.map((y) => (
                      <span key={y} className="trace-grid" style={{ left: `${pct(y * 12)}%` }} />
                    ))}
                    <span className="trace-now" style={{ left: `${nowPct}%` }} />
                    <span
                      className="trace-bar"
                      style={{ left: `${left}%`, width: `${width}%`, animationDelay: `${i * 70}ms` }}
                    />
                    {r.highlight && (
                      <span className="trace-note trace-note-track" style={note} aria-hidden="true">
                        {r.highlight}
                      </span>
                    )}
                  </span>
                </summary>
                <div className="trace-detail">
                  <p className="trace-dates">{dates(r)}</p>
                  <ul>
                    {r.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </div>
              </details>
            </li>
          );
        })}
      </ol>

      <p className="trace-legend">
        <span className="swatch" data-kind="industry" /> Industry
        <span className="swatch" data-kind="research" /> Research
        <span className="swatch swatch-now" /> Today
      </p>
    </div>
  );
}
