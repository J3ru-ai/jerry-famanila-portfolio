const projects = [
  {
    number: '01',
    title: 'Photography Gallery Website',
    category: 'PERSONAL PROJECT',
    description: 'A personal photography portfolio where visitors can browse my photos and work, explore event coverage, and learn how to hire me for weddings, debuts, and other occasions.',
    status: 'Personal use',
    detail: 'Photography portfolio · Client inquiries',
  },
  {
    number: '02',
    title: 'SOS Emergency Alert System',
    category: 'SCHOOL PROJECT',
    description: 'An emergency alert system built with PHP on the backend. Students can report emergencies from upper floors, notifying faculty and the clinic while helping responders identify where the alert was triggered.',
    status: 'School project',
    detail: 'PHP backend · Campus emergency response',
  },
];

export default function Projects() {
  return (
    <section className="page-width page-section">
      <p className="eyebrow">SELECTED WORK</p>
      <h1 className="page-title">My <span className="accent-text">projects.</span></h1>
      <p className="section-intro">
        A couple of projects that reflect my interests in photography, design, and
        building practical technology for real situations.
      </p>
      <div className="project-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.number}>
            <div className={`project-art art-${project.number}`} aria-hidden="true">
              <span className="art-number">{project.number}</span>
              <span className="art-shape" />
              <span className="art-caption">{project.category}</span>
            </div>
            <div className="project-info">
              <div className="project-meta">
                <span>{project.category}</span>
                <span className="project-status">{project.status}</span>
              </div>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <p className="project-detail">{project.detail}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
