import '../styles/why-us.css';

const WhyUs = () => {
  const trustFactors = [
    {
      id: 1,
      title: "Top-tier Vetted Talent",
      description: "Our developers undergo rigorous screening and testing to ensure they meet the highest standards of technical expertise and professional conduct.",
      icon: "fa-star"
    },
    {
      id: 2,
      title: "Flexible Engagement Models",
      description: "Choose from project-based, dedicated teams, or staff augmentation models that adapt to your specific needs and budget requirements.",
      icon: "fa-users"
    },
    {
      id: 3,
      title: "Fast Onboarding & Delivery",
      description: "Get your team up and running within days, not weeks. Our streamlined processes ensure quick project kickoff and rapid delivery cycles.",
      icon: "fa-rocket"
    }
  ];

  return (
    <section id="why-us" className="section why-us">
      <div className="container">
        <div className="why-us-header">
          <div className="why-us-title">
            <h2>Why Companies Trust BrandGoto</h2>
          </div>
          <div className="why-us-description">
            <p>We've built our reputation on delivering exceptional results through proven methodologies and world-class talent</p>
          </div>
        </div>
        
        <div className="trust-factors-grid">
          {trustFactors.map((factor) => (
            <div key={factor.id} className="trust-factor-card">
              <div className="trust-factor-icon">
                <i className={`fas ${factor.icon}`}></i>
              </div>
              <h3 className="trust-factor-title">{factor.title}</h3>
              <p className="trust-factor-description">{factor.description}</p>
            </div>
          ))}
        </div>
        
        <div className="why-us-stats">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">30+</div>
              <div className="stat-label">teams onboarded</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-label">vetted engineers involved</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">60+</div>
              <div className="stat-label">projects accomplished</div>
            </div>
          </div>
        </div>
        
        <div className="why-us-cta">
          <button 
            className="btn btn-outline"
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
          >
            TRUST US WITH YOUR PROJECT
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyUs; 