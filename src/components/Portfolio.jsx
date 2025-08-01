import '../styles/portfolio.css';
import projectImage from '../assets/images/project-1.png';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Automated Direct Material Risk Assessment",
      technologies: "Snowflake, Talend, dbt",
      tags: ["Data analytics", "dbt", "Git", "Integration", "Pharma", "Snowflake", "Tableau", "Talend", "Testing"],
      image: projectImage
    },
    {
      id: 2,
      title: "AI-Powered Point Cloud to BIM Conversion Solution",
      technologies: "Python, Computer Vision, Cloud",
      tags: ["Architecture", "Cloud", "Computer vision", "Data engineering", "Data management (DMS)", "DevOps", "Integration", "Python"],
      image: projectImage
    },
    {
      id: 3,
      title: "Salesforce Omnistudio Testing for Insurance Company",
      technologies: "Salesforce, BPA, CRM",
      tags: ["BPA", "CRM", "Insurance", "QA", "Salesforce"],
      image: projectImage
    },
    {
      id: 4,
      title: "Carbon Capture Technology Solution",
      technologies: "Python, IoT, Docker",
      tags: ["Backend development", "Biotechnology", "Cloud", "Data management (DMS)", "Docker", "IoT", "Python"],
      image: projectImage
    },
    {
      id: 5,
      title: "Mobile Game Development Services for Unity-based Projects",
      technologies: "Unity, C#, AWS",
      tags: ["AWS", "C#", "Entertainment", "Game", "Gaming", "Node.js", "Staff augmentation", "Unity"],
      image: projectImage
    },
    {
      id: 6,
      title: "Microlearning Platform for Professional and Personal Education",
      technologies: "React, Node.js, Flutter",
      tags: ["AWS", "Edtech", "Flutter", "Mobile development", "MongoDB", "Node.js", "React", "Stripe", "TypeScript", "Web development"],
      image: projectImage
    }
  ];

  const handleViewProject = (projectId) => {
    // For now, just scroll to contact form
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="portfolio" className="section portfolio">
      <div className="container">
        <div className="portfolio-header">
          <h2>Portfolio of IT projects</h2>
        </div>
        <div className="portfolio-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <div className="project-tags">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="project-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio; 