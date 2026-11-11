import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className="page-width page-section not-found">
      <p className="eyebrow">404 · PAGE NOT FOUND</p>
      <h1 className="page-title">Looks like a <span className="accent-text">wrong turn.</span></h1>
      <p className="section-intro">The page you're looking for doesn't exist yet.</p>
      <Link className="button button-primary" to="/">Back to home</Link>
    </section>
  );
}
