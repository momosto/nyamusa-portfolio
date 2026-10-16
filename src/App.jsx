import Phone from './Phone.jsx';
import { profile, projects, workSystems, experience, skills, education } from './data.js';

function Section({ id, title, intro, children }) {
  return (
    <section id={id} className="section" tabIndex={-1} aria-labelledby={`${id}-title`}>
      <header className="section-head">
        <h2 id={`${id}-title`}>{title}</h2>
        {intro && <p className="section-intro">{intro}</p>}
      </header>
      {children}
    </section>
  );
}

export default function App() {
  return (
    <>
      <a className="skip" href="#projects">Skip to projects</a>
      <main>
        <section className="hero">
          <div className="hero-text">
            <p className="eyebrow">{profile.role} · {profile.location}</p>
            <h1>{profile.name}</h1>
            <p className="lede">{profile.summary}</p>
            <ul className="hero-links">
              <li><a href={profile.github}>GitHub</a></li>
              <li><a href={profile.linkedin}>LinkedIn</a></li>
              <li><a href={`mailto:${profile.email}`}>{profile.email}</a></li>
            </ul>
          </div>
          <Phone />
        </section>

        <Section
          id="projects"
          title="Projects you can read"
          intro="Public repositories, built from scratch with synthetic or public data."
        >
          <ul className="projects">
            {projects.map((p) => (
              <li key={p.name} className="project">
                <h3><a href={p.repo}>{p.name}</a></h3>
                <p>{p.pitch}</p>
                <ul className="stack" aria-label="Built with">
                  {p.stack.map((s) => <li key={s}>{s}</li>)}
                </ul>
                <p className="project-links">
                  <a href={p.repo}>Read the code</a>
                  {p.demo && <a href={p.demo}>Open the live demo</a>}
                </p>
              </li>
            ))}
          </ul>
        </Section>

        <Section
          id="telone"
          title="Systems I run at TelOne"
          intro="Production work for 500,000+ subscribers. The code belongs to my employer, so these are described rather than linked."
        >
          <dl className="systems">
            {workSystems.map((s) => (
              <div key={s.name} className="system">
                <dt>{s.name}<span className="system-stack">{s.stack}</span></dt>
                <dd>{s.text}</dd>
              </div>
            ))}
          </dl>
        </Section>

        <Section id="experience" title="Experience">
          <ol className="timeline">
            {experience.map((e) => (
              <li key={e.org}>
                <p className="period">{e.period}</p>
                <h3>{e.role}</h3>
                <p className="org">{e.org}</p>
                <ul>{e.points.map((pt) => <li key={pt}>{pt}</li>)}</ul>
              </li>
            ))}
          </ol>
          <h3 className="sub">Education</h3>
          <ul className="education">
            {education.map((ed) => (
              <li key={ed.award}><strong>{ed.award}</strong>, {ed.school}, {ed.year}</li>
            ))}
          </ul>
        </Section>

        <Section id="skills" title="Skills">
          <dl className="skills">
            {skills.map((s) => (
              <div key={s.group}>
                <dt>{s.group}</dt>
                <dd>{s.items.join(' · ')}</dd>
              </div>
            ))}
          </dl>
        </Section>

        <Section id="contact" title="Contact">
          <p className="contact-line">
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </p>
          <p className="contact-meta">
            {profile.phone} · <a href={profile.linkedin}>LinkedIn</a> · <a href={profile.github}>GitHub</a>
          </p>
        </Section>
      </main>
      <footer className="footer">
        <p>© {new Date().getFullYear()} {profile.name}. Source on <a href="https://github.com/momosto/nyamusa-portfolio">GitHub</a>.</p>
      </footer>
    </>
  );
}
