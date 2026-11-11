import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <section className="hero page-width">
      <p className="eyebrow"><span className="status-dot" /> BSIT STUDENT PORTFOLIO</p>
      <h1>Hello, I'm <span className="accent-text">Jerry Andrew.</span></h1>
      <p className="hero-copy">
        I'm a BSIT student who enjoys working with computer hardware, building PCs,
        troubleshooting technical problems, and creating thoughtful UI/UX experiences.
        I'm also learning more about backend development, one project at a time.
      </p>
      <div className="hero-actions">
        <Link className="button button-primary" to="/projects">Explore my projects <span aria-hidden="true">↗</span></Link>
        <Link className="button button-secondary" to="/about">Get to know me</Link>
      </div>
      <div className="hero-bottom">
        <span>JERRY ANDREW F. FAMANILA · BSIT</span>
        <span>BUILDING · TROUBLESHOOTING · LEARNING</span>
      </div>
    </section>
  );
}
