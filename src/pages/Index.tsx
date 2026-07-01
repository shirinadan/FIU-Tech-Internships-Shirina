import React from "react";

const featuredLinks = [
  {
    title: "Sprinternship",
    description: "Explore FIU's signature tech internship experience and program overview.",
    href: "https://webs.cs.fiu.edu/sprinternship/",
  },
  {
    title: "Industry Partners",
    description: "See the organizations and collaborators connected to the internship program.",
    href: "https://webs.cs.fiu.edu/sprinternship/sprinternship-industry/",
  },
  {
    title: "Sistas",
    description: "Learn about the Sistas initiative and community-centered programming.",
    href: "https://webs.cs.fiu.edu/sprinternship/sistas/",
  },
  {
    title: "Career Roadmap",
    description: "Review the pathway for internships, growth, and technical preparation.",
    href: "https://webs.cs.fiu.edu/sprinternship/roadmap/",
  },
  {
    title: "Research",
    description: "Browse research-related opportunities and academic connections.",
    href: "https://webs.cs.fiu.edu/sprinternship/research/",
  },
  {
    title: "Break Through Tech",
    description: "Understand the partnership supporting internship access and innovation.",
    href: "https://www.breakthroughtech.org/",
  },
];

const quickSearches = [
  "Software",
  "Cybersecurity",
  "Data Science",
  "Research",
  "Industry Partners",
  "Career Roadmap",
];

const resourceGroups = {
  program: [
    "About the Program",
    "Application Process",
    "Eligibility",
    "Program Timeline",
  ],
  opportunities: [
    "Internships",
    "Partner Projects",
    "Workshops",
    "Research Opportunities",
  ],
  support: [
    "Career Resources",
    "Student Support",
    "Mentorship",
    "Contact",
  ],
};

const Index = () => {
  return (
    <div className="fiu-site">
      <header className="fiu-utility-bar">
        <div className="fiu-utility-inner">
          <div className="fiu-brand">
            <div className="fiu-brand-badge">FIU</div>
            <div className="fiu-brand-text">
              <span className="fiu-brand-title">FIU Tech Internships</span>
              <span className="fiu-brand-subtitle">Public Program Search</span>
            </div>
          </div>

          <div className="fiu-utility-actions">
            <a
              className="fiu-utility-link"
              href="https://webs.cs.fiu.edu/sprinternship/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Program Home
            </a>
            <a
              className="fiu-utility-link"
              href="https://webs.cs.fiu.edu/sprinternship/sprinternship-industry/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Partners
            </a>
            <a
              className="fiu-utility-link"
              href="https://webs.cs.fiu.edu/sprinternship/roadmap/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Roadmap
            </a>
          </div>
        </div>
      </header>

      <main className="fiu-main">
        <section className="fiu-hero">
          <h1 className="fiu-hero-title">Public Internship Search</h1>
          <p className="fiu-hero-subtitle">
            Search FIU Tech Internship pathways, partner resources, research connections,
            and program opportunities in one place.
          </p>

          <div className="fiu-search-shell">
            <div className="fiu-search-bar">
              <span className="fiu-search-icon">⌕</span>
              <input
                className="fiu-search-input"
                type="text"
                placeholder="Search internships, projects, partners, and resources"
              />
              <button className="fiu-search-button" type="button">
                Search
              </button>
            </div>

            <div className="fiu-suggestions">
              {quickSearches.map((item) => (
                <button key={item} type="button" className="fiu-chip">
                  {item}
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="fiu-section">
          <h2 className="fiu-section-title">Featured Resources</h2>
          <div className="fiu-college-grid">
            {featuredLinks.map((item) => (
              <article key={item.title} className="fiu-college-card">
                <div>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="fiu-college-link"
                  >
                    {item.title}
                  </a>
                  <p className="fiu-card-copy">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="fiu-link-groups">
          <div>
            <h3 className="fiu-link-group-title">Program</h3>
            <div className="fiu-link-list">
              {resourceGroups.program.map((item) => (
                <a key={item} href="#">
                  {item}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="fiu-link-group-title">Opportunities</h3>
            <div className="fiu-link-list">
              {resourceGroups.opportunities.map((item) => (
                <a key={item} href="#">
                  {item}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="fiu-link-group-title">Support</h3>
            <div className="fiu-link-list">
              {resourceGroups.support.map((item) => (
                <a key={item} href="#">
                  {item}
                </a>
              ))}
            </div>
          </div>
        </section>

        <footer className="fiu-footer">
          Florida International University · FIU Tech Internships
        </footer>
      </main>
    </div>
  );
};

export default Index;
