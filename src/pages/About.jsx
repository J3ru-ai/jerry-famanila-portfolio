const skillGroups = [
  {
    title: 'Hardware & technical support',
    skills: ['PC assembly and building', 'Hardware troubleshooting', 'Computer diagnostics', 'Basic printer repair'],
  },
  {
    title: 'Design & development',
    skills: ['UI/UX design', 'User-friendly interface design', 'Frontend fundamentals', 'Backend development (currently learning)'],
  },
];

export default function About() {
  return (
    <section className="page-width page-section">
      <p className="eyebrow">GET TO KNOW ME</p>
      <h1 className="page-title">About <span className="accent-text">me.</span></h1>
      <div className="content-grid">
        <div className="text-panel">
          <h2>A little introduction</h2>
          <p>
            Hi! I'm Jerry Andrew F. Famanila, a Bachelor of Science in Information
            Technology (BSIT) student. I enjoy hands-on work with computers, especially
            assembling PCs, diagnosing hardware issues, and troubleshooting technical
            problems. I also have some experience handling minor printer repairs.
          </p>
          <p>
            I'm interested in UI/UX because I like designing interfaces that are clear
            and easy to use. Backend development is an area I still find challenging,
            but I'm actively learning and improving through practice and school projects.
            I use this portfolio to document what I build and the skills I continue to develop.
          </p>
        </div>
        <aside className="skills-panel">
          <h2>My skills</h2>
          <p className="muted">What I can do today and what I'm continuing to learn.</p>
          {skillGroups.map((group) => (
            <div className="skill-group" key={group.title}>
              <h3>{group.title}</h3>
              <ul className="skill-list">
                {group.skills.map((skill) => (
                  <li key={skill}><span aria-hidden="true">✳</span>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </aside>
      </div>
    </section>
  );
}
