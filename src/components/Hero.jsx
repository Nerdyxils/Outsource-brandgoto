import '../styles/hero.css';

const Hero = () => {
  const handleScheduleCall = () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="hero-glow"></div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title fade-in-up">
              Your Dedicated Tech Outsourcing Partner
            </h1>
            <p className="hero-subtitle fade-in-up">
              Extend your team with expert developers, designers, and product thinkers from BrandGoto.
            </p>
            <div className="hero-cta fade-in-up">
              <button 
                className="btn btn-primary hero-btn"
                onClick={handleScheduleCall}
              >
                Start Your Project
              </button>
            </div>
          </div>
          
          <div className="hero-visual fade-in">
            <div className="hero-placeholder">
              <div className="placeholder-icon">🚀</div>
              <p>Hero Illustration</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 