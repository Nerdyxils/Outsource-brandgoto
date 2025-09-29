import '../styles/portfolio.css';
import projectImage1 from '../assets/images/1.png';
import projectImage2 from '../assets/images/2.png';
import projectImage3 from '../assets/images/3.png';
import projectImage4 from '../assets/images/4.png';
import projectImage5 from '../assets/images/5.png';
import projectImage6 from '../assets/images/6.png';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Cropper Finance - DeFi Liquidity Platform",
      technologies: "React, Solidity, Web3.js, Ethereum",
      tags: ["Blockchain", "DeFi", "Smart contracts", "Web3", "Ethereum", "React", "JavaScript", "Solidity", "Liquidity pools", "Cryptocurrency"],
      image: projectImage1
    },
    {
      id: 2,
      title: "Newton Supply Co - E-commerce Platform",
      technologies: "Shopify, Liquid, JavaScript, CSS",
      tags: ["E-commerce", "Shopify", "Liquid", "JavaScript", "CSS", "Web development", "Online store", "Payment integration", "Inventory management", "Responsive design"],
      image: projectImage2
    },
    {
      id: 3,
      title: "Spruce Health - AI-Powered Healthcare MVP",
      technologies: "React, Node.js, GPT-4/5, Healthcare APIs",
      tags: ["Healthcare", "AI", "GPT-4", "Machine learning", "React", "Node.js", "MVP", "Telemedicine", "Patient care", "Skincare recommendations"],
      image: projectImage3
    },
    {
      id: 4,
      title: "Trading Bot Platform - Automated Trading System",
      technologies: "React, Python, FastAPI, WebSockets, PostgreSQL",
      tags: ["Trading", "Crypto", "Stock market", "React", "Python", "FastAPI", "WebSockets", "PostgreSQL", "AWS", "Binance API", "Coinbase API", "Backtesting", "Risk management", "Real-time data"],
      image: projectImage4
    },
    {
      id: 5,
      title: "Real Estate Vendor Marketplace - B2B Platform",
      technologies: "Next.js, Node.js, Elasticsearch, Stripe",
      tags: ["B2B", "Marketplace", "Real estate", "Next.js", "Node.js", "ExpressJS", "Elasticsearch", "Stripe", "Vendor onboarding", "Subscription billing", "Search filtering", "Property management"],
      image: projectImage5
    },
    {
      id: 6,
      title: "Dala - Animated SaaS Landing Page",
      technologies: "React, GSAP, Three.js, WebGL",
      tags: ["SaaS", "Landing page", "React", "GSAP", "Three.js", "WebGL", "Animation", "Interactive design", "UI/UX", "Frontend development", "Visual effects", "Modern web design"],
      image: projectImage6
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