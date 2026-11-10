"use client";

import { usePathname } from "next/navigation";
import { profile } from "@/content/profile";

const links = [
  { href: "/", label: "Home" },
  { href: "/experience/", label: "Experience" },
  { href: "/projects/", label: "Projects" },
  { href: "/papers/", label: "Papers" },
  { href: "/about/", label: "About" },
];

// Plain <a> links on purpose. Each click is a full page load, which lets the
// browser run cross-document view transitions (see @view-transition in globals.css).
// The site is static and small, so full loads are fast.
export default function Nav() {
  // The site is exported with trailing slashes, so compare paths without them.
  const clean = (p: string) => (p.length > 1 ? p.replace(/\/+$/, "") : p);
  const pathname = clean(usePathname() ?? "/");
  const onHome = pathname === "/";

  return (
    <header className="site-nav">
      <div className="site-nav-inner">
        <a
          href="/"
          className="site-nav-brand"
          data-home={onHome ? "true" : undefined}
          aria-hidden={onHome ? "true" : undefined}
          tabIndex={onHome ? -1 : undefined}
        >
          {profile.name}
        </a>
        <nav className="site-nav-links" aria-label="Site">
          {links.map((l) => {
            const active = pathname === clean(l.href);
            return (
              <a key={l.href} href={l.href} aria-current={active ? "page" : undefined}>
                {l.label}
                {active && <span className="nav-indicator" aria-hidden="true" />}
              </a>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
