import type { Metadata } from "next";
import "@fontsource-variable/schibsted-grotesk";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hriday Sainathuni",
  description:
    "I build AI agents and the evals that tell you whether they work. Computer science at the University of Virginia. B.S. in 2027, M.S. in 2028.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
