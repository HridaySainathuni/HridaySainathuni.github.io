import type { Metadata } from "next";
import "@fontsource-variable/schibsted-grotesk";
import "./globals.css";
import Nav from "@/components/Nav";
import { profile } from "@/content/profile";

export const metadata: Metadata = {
  title: "Hriday Sainathuni",
  description:
    "I build AI agents and the evals that tell you whether they work. Computer science at the University of Virginia. B.S. in 2027, M.S. in 2028.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        {children}
        <footer className="site-footer">
          <p>
            Want to talk? Email me at{" "}
            <a href={`mailto:${profile.links.email}`}>{profile.links.email}</a>.
          </p>
        </footer>
      </body>
    </html>
  );
}
