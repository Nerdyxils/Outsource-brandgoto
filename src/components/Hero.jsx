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
              Software Development
              <br />
              & IT Consulting Company
            </h1>
            <p className="hero-subtitle fade-in-up">
              Empower your business with our seasoned engineers and deep tech expertise.
            </p>
            <div className="hero-cta fade-in-up">
              <button 
                className="btn btn-primary hero-btn"
                onClick={handleScheduleCall}
              >
                SCHEDULE A CALL
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 