import { Link } from 'react-router-dom';

export default function Contact() {
  return (
    <section className="page-width page-section contact-section">
      <p className="eyebrow">LET'S CONNECT</p>
      <h1 className="page-title">Get in <span className="accent-text">touch.</span></h1>
      <div className="contact-card">
        <div>
          <h2>Have a project or opportunity in mind?</h2>
          <p className="section-intro">
            I'm interested in learning opportunities, collaboration, computer hardware
            projects, UI/UX, and photography-related inquiries. My direct contact links
            will be added here soon.
          </p>
        </div>
        <div className="contact-detail">
          <span className="contact-label">NAME</span>
          <span>Jerry Andrew F. Famanila</span>
        </div>
        <div className="contact-detail">
          <span className="contact-label">COURSE</span>
          <span>Bachelor of Science in Information Technology (BSIT)</span>
        </div>
        <p className="contact-note">Email and social links can be added when you're ready to share them.</p>
        <Link className="text-link" to="/projects">View my projects <span aria-hidden="true">→</span></Link>
      </div>
    </section>
  );
}
