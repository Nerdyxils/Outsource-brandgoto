import { useState } from 'react';
import '../styles/industries.css';

const Industries = () => {
  const [expandedIndustries, setExpandedIndustries] = useState([]); // All cards collapsed by default

  const industries = [
    {
      id: 1,
      name: "Finance Software",
      services: [
        "Next-gen digital banking",
        "Seamless payment ecosystems", 
        "AI-powered lending platforms",
        "Advanced trading systems",
        "Smart personal finance tools"
      ],
      gradient: "gradient-red"
    },
        {
      id: 2,
      name: "Healthcare & Life Sciences",
      services: [
        "Revolutionary telemedicine platforms",
        "Intelligent patient care systems",
        "Connected medical devices (IoMT)",
        "Real-time health monitoring",
        "Smart hospital management",
        "Pharmaceutical innovation"
      ],
      gradient: "gradient-purple"
    },
    {
      id: 3,
      name: "eCommerce & Retail",
      services: [
        "Cutting-edge e-commerce platforms",
        "Multi-vendor marketplace solutions",
        "AI-driven inventory optimization",
        "Next-generation POS systems",
        "Advanced customer insights"
      ],
      gradient: "gradient-blue"
    },
    {
      id: 4,
      name: "Hi-Tech & Innovations",
      services: [
        "Breakthrough AI/ML solutions",
        "Connected IoT ecosystems",
        "Revolutionary blockchain applications",
        "Immersive AR/VR experiences",
        "Intelligent robotics platforms"
      ],
      gradient: "gradient-green"
    },
    {
      id: 5,
      name: "eLearning & Education",
      services: [
        "Next-generation learning platforms",
        "Immersive virtual classrooms",
        "Intelligent student portals",
        "Adaptive assessment systems",
        "Interactive educational experiences"
      ],
      gradient: "gradient-orange"
    },
    {
      id: 6,
      name: "Enterprise & Manufacturing",
      services: [
        "Intelligent content management",
        "Next-gen ERP solutions",
        "Predictive maintenance systems",
        "Advanced process automation"
      ],
      gradient: "gradient-cyan"
    }
  ];

  const toggleIndustry = (industryId) => {
    setExpandedIndustries(prev => {
      // If clicking the same industry, collapse it
      if (prev.includes(industryId)) {
        return prev.filter(id => id !== industryId);
      } else {
        // Find which column this card is in (0 = left, 1 = right)
        const column = (industryId - 1) % 2;
        
        // Find all cards in the same column
        const cardsInSameColumn = [];
        for (let i = 1; i <= 6; i++) {
          if ((i - 1) % 2 === column) {
            cardsInSameColumn.push(i);
          }
        }
        
        // Remove any currently expanded card in the same column and add the clicked card
        const cardsNotInSameColumn = prev.filter(id => !cardsInSameColumn.includes(id));
        return [...cardsNotInSameColumn, industryId];
      }
    });
  };

  return (
    <section id="industries" className="section industries">
      <div className="container">
        <div className="industries-header">
          <div className="industries-title">
            <h2>Industries we transform</h2>
          </div>
          <div className="industries-description">
            <p>From fintech revolutions to healthcare breakthroughs, we craft digital solutions that transform industries. Our expertise spans the full spectrum of modern business, delivering innovative technology that drives growth, efficiency, and competitive advantage across every sector.</p>
          </div>
        </div>
        
        <div className="industries-grid">
          {industries.map((industry) => (
            <div 
              key={industry.id} 
              className={`industry-card ${industry.gradient} ${expandedIndustries.includes(industry.id) ? 'expanded' : ''}`}
              onClick={() => toggleIndustry(industry.id)}
            >
              <div className="industry-header">
                <h3 className="industry-name">{industry.name}</h3>
                <div className="expand-icon">
                  <i className={`fas ${expandedIndustries.includes(industry.id) ? 'fa-minus' : 'fa-plus'}`}></i>
                </div>
              </div>
              
              {expandedIndustries.includes(industry.id) && (
                <div className="industry-services">
                  {industry.services.map((service, index) => (
                    <div key={index} className="service-item">
                      <span className="service-bullet">-</span>
                      <span className="service-text">{service}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="industries-cta">
          <button 
            className="btn btn-outline"
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
          >
            TRANSFORM YOUR INDUSTRY
          </button>
        </div>
      </div>
    </section>
  );
};

export default Industries; 