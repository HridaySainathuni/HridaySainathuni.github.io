"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { profile } from "@/content/profile";

const links = [
  { href: "/", label: "Home" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/papers", label: "Papers" },
  { href: "/about", label: "About" },
];

export default function Nav() {
  const pathname = usePathname();
  return (
    <header className="site-nav">
      <div className="site-nav-inner">
        <Link href="/" className="site-nav-brand">
          {profile.name}
        </Link>
        <nav className="site-nav-links" aria-label="Site">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              aria-current={pathname === l.href ? "page" : undefined}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
