import './App.css';

const skills = [
  {
    title: 'Backend & API',
    items: ['PHP (Laravel)', 'Python (Django)', 'Node.js (Express)'],
  },
  {
    title: 'Frontend',
    items: ['HTML5, CSS3', 'JavaScript', 'React.js / Next.js'],
  },
  {
    title: 'DevOps & Cloud',
    items: ['Docker', 'Kubernetes', 'CI/CD', 'Git / GitHub'],
  },
  {
    title: 'Bases de données',
    items: ['MySQL', 'PostgreSQL', 'MongoDB'],
  },
  {
    title: 'Méthodes',
    items: ['Agile / Scrum', 'UML / Merise', 'POO / Design Patterns'],
  },
];

const projects = [
  {
    name: 'Plateforme immobilière sécurisée',
    description: 'Backend, API REST et gestion des utilisateurs avec un focus sur la sécurité et la scalabilité.',
    tech: 'PHP, Laravel, SQL',
    github: 'https://github.com/ibr8him/immobilier-securise',
  },
  {
    name: 'Eco-track',
    description: 'Système intelligent de gestion des déchets avec collecte et traitement des données.',
    tech: 'Python, API, Gestion de données',
    github: 'https://github.com/ibr8him/eco-track',
  },
  {
    name: 'Application gestion employés',
    description: 'Backend métier pour suivre les collaborateurs, les rôles et les indicateurs internes.',
    tech: 'Node.js, Express, SQL',
    github: 'https://github.com/ibr8him/gestion-employes',
  },
  {
    name: 'Application besoins clients',
    description: 'Structuration et traitement des données clients pour un suivi plus fluide et sécurisé.',
    tech: 'API, PHP, Base de données',
    github: 'https://github.com/ibr8him/besoins-clients',
  },
];

const softSkills = ['Esprit d’analyse', 'Travail en équipe', 'Rigueur technique', 'Apprentissage rapide', 'Communication technique'];

function App() {
  return (
    <div className="app">
      <div className="page-glow" aria-hidden="true" />
      <header className="navbar">
        <div className="brand">MO</div>
        <nav>
          <a href="#about">À propos</a>
          <a href="#skills">Compétences</a>
          <a href="#projects">Projets</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section id="hero" className="hero section-appear">
          <div className="hero-copy">
            <p className="eyebrow">Développeur Full-Stack</p>
            <h1>Mohamed Ibrahim</h1>
            <p className="hero-text">
              Je conçois des applications web performantes et scalables.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#projects">Voir mes projets</a>
              <a className="btn btn-secondary" href="#contact">Me contacter</a>
            </div>
            <p className="availability">Disponible pour une alternance dès septembre 2026</p>
          </div>
          <div className="hero-panel">
            <div className="hero-card">
              <span className="hero-card-tag">Profil full-stack</span>
              <p>
                Étudiant en Master Architecture et Développement Logiciel à Ingétis Paris,
                spécialisé dans le backend, les API et les architectures logicielles.
              </p>
              <div className="stats-grid">
                <div>
                  <strong>6 mois</strong>
                  <span>stage développeur web</span>
                </div>
                <div>
                  <strong>Backend</strong>
                  <span>API, architectures, BDD</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section section-appear">
          <div className="section-heading">
            <span>01.</span>
            <h2>À propos de moi</h2>
          </div>
          <div className="about-grid">
            <div>
              <p>
                Étudiant en Master à Ingétis Paris, passionné par le développement backend, les API et les architectures logicielles.
                Mon objectif est d’intégrer une équipe technique pour travailler sur des projets concrets et produire des solutions robustes.
              </p>
            </div>
            <div className="about-card">
              <h3>Ce que je recherche</h3>
              <ul>
                <li>Alternance développeur full-stack</li>
                <li>Projets backend, API et DevOps</li>
                <li>Environnement technique exigeant</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="skills" className="section section-appear">
          <div className="section-heading">
            <span>02.</span>
            <h2>Compétences techniques</h2>
          </div>
          <div className="skills-grid">
            {skills.map((skill) => (
              <div key={skill.title} className="skill-card">
                <h3>{skill.title}</h3>
                <ul>
                  {skill.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="experience" className="section section-appear">
          <div className="section-heading">
            <span>03.</span>
            <h2>Expérience professionnelle</h2>
          </div>
          <div className="experience-card">
            <div className="experience-header">
              <div>
                <h3>Stage développeur web</h3>
                <p>2N Corporate — Douala</p>
              </div>
              <span>6 mois</span>
            </div>
            <ul>
              <li>Développement d’une application e-commerce avec Laravel</li>
              <li>Mise en place d’un ERP (Dolibarr)</li>
              <li>Optimisation des performances</li>
              <li>Gestion base de données et requêtes SQL</li>
              <li>Travail en équipe</li>
            </ul>
          </div>
        </section>

        <section id="projects" className="section section-appear">
          <div className="section-heading">
            <span>04.</span>
            <h2>Projets</h2>
          </div>
          <div className="projects-grid">
            {projects.map((project) => (
              <article key={project.name} className="project-card">
                <div className="project-image" aria-hidden="true">
                  <span>{project.name.split(' ')[0]}</span>
                </div>
                <div className="project-content">
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <p className="project-tech">Tech : {project.tech}</p>
                  <a href={project.github} target="_blank" rel="noreferrer">Voir sur GitHub</a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="soft-skills" className="section section-appear">
          <div className="section-heading">
            <span>05.</span>
            <h2>Soft skills</h2>
          </div>
          <div className="soft-grid">
            {softSkills.map((softSkill) => (
              <div key={softSkill} className="soft-chip">{softSkill}</div>
            ))}
          </div>
        </section>

        <section id="contact" className="section section-appear contact-section">
          <div className="section-heading">
            <span>06.</span>
            <h2>Contact</h2>
          </div>
          <div className="contact-card">
            <div>
              <p>Envoyez-moi un message pour discuter d’une alternance ou de projets techniques.</p>
            </div>
            <div className="contact-list">
              <a href="mailto:mnazirou70@gmail.com">mnazirou70@gmail.com</a>
              <a href="tel:+33700000000">+33 7 00 00 00 00</a>
              <a href="https://github.com/ibr8him" target="_blank" rel="noreferrer">github.com/ibr8him</a>
            </div>
            <a className="btn btn-primary" href="mailto:mnazirou70@gmail.com">Me contacter</a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>© 2026 Mohamed Ibrahim — Développeur full-stack en alternance</p>
      </footer>
    </div>
  );
}

export default App;
