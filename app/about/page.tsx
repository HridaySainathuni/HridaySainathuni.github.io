import { profile } from "@/content/profile";

export default function About() {
  const { links } = profile;
  return (
    <main className="page">
      <h1>About</h1>
      {profile.intro.map((p) => (
        <p key={p} className="prose">
          {p}
        </p>
      ))}
      <section aria-labelledby="outside">
        <h2 id="outside">Outside of work</h2>
        <p className="prose">{profile.outside}</p>
      </section>
      <section aria-labelledby="contact">
        <h2 id="contact">Contact</h2>
        <p className="prose">
          Email me at <a href={`mailto:${links.email}`}>{links.email}</a>.
          Find my code on <a href={links.github} target="_blank" rel="noreferrer">GitHub</a>
          {links.linkedin && (
            <>
              {" "}and my work history on{" "}
              <a href={links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            </>
          )}
          .
        </p>
      </section>
    </main>
  );
}
