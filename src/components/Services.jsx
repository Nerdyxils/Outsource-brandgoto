import '../styles/services.css';

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Custom Software Development",
      description: "Tailored software solutions built from the ground up to meet your specific business requirements, from enterprise applications to specialized tools.",
      gradient: "gradient-blue",
      icon: "fa-code"
    },
    {
      id: 2,
      title: "Website Development",
      description: "Modern, responsive websites that deliver exceptional user experiences across all devices, from simple landing pages to complex e-commerce platforms.",
      gradient: "gradient-pink",
      icon: "fa-globe"
    },
    {
      id: 3,
      title: "Mobile Application Development",
      description: "Native and cross-platform mobile applications that engage users and drive business growth through innovative mobile solutions.",
      gradient: "gradient-purple",
      icon: "fa-mobile-alt"
    },
    {
      id: 4,
      title: "Product Strategy & Innovation",
      description: "Transform your ideas into market-winning products with our strategic approach to product development, market analysis, and innovation consulting.",
      gradient: "gradient-rainbow",
      icon: "fa-lightbulb"
    },
    {
      id: 5,
      title: "Digital Transformation Hub",
      description: "Complete digital overhaul services that modernize legacy systems, optimize workflows, and future-proof your business operations.",
      gradient: "gradient-orange",
      icon: "fa-sync-alt"
    },
    {
      id: 6,
      title: "Scalable Architecture Design",
      description: "Build robust, scalable systems that grow with your business. Our architects design solutions that handle millions of users and transactions.",
      gradient: "gradient-purple-pink",
      icon: "fa-layer-group"
    },
    {
      id: 7,
      title: "AI-Powered Automation",
      description: "Intelligent automation solutions that reduce costs by 60% while increasing efficiency. From chatbots to predictive analytics.",
      gradient: "gradient-blue-green",
      icon: "fa-robot"
    },
    {
      id: 8,
      title: "Real-time Analytics Engine",
      description: "Live data processing and analytics that provide instant insights, enabling data-driven decisions at the speed of business.",
      gradient: "gradient-purple-dark",
      icon: "fa-tachometer-alt"
    },
    {
      id: 9,
      title: "Microservices & API Ecosystems",
      description: "Modern, modular architectures that enable rapid development, easy scaling, and seamless third-party integrations.",
      gradient: "gradient-orange-yellow",
      icon: "fa-puzzle-piece"
    },
    {
      id: 10,
      title: "Blockchain & Web3 Solutions",
      description: "Next-generation decentralized applications, smart contracts, and blockchain infrastructure for the future of digital business.",
      gradient: "gradient-blue",
      icon: "fa-link"
    },
    {
      id: 11,
      title: "IoT & Edge Computing",
      description: "Connected device ecosystems and edge computing solutions that bring intelligence to the network's edge for real-time processing.",
      gradient: "gradient-pink",
      icon: "fa-microchip"
    },
    {
      id: 12,
      title: "Performance Optimization Lab",
      description: "Specialized optimization services that boost application speed by 300%, reduce costs, and enhance user experience.",
      gradient: "gradient-purple",
      icon: "fa-rocket"
    }
  ];

  return (
    <section id="services" className="section services">
      <div className="container">
        <div className="section-title">
          <h2>Our Tech Outsourcing Solutions</h2>
          <p>Transform your business with our comprehensive tech outsourcing services. From custom software development to cutting-edge AI solutions, we provide the expertise, flexibility, and scalability your organization needs to stay ahead in today's competitive digital landscape. Partner with us to accelerate your digital transformation journey.</p>
        </div>
        
        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className={`service-card ${service.gradient}`}>
              <div className="service-content">
                <h3 className="service-title">{service.title}</h3>
                <div className="service-icon">
                  <i className={`fas ${service.icon}`}></i>
                </div>
                <div className="service-description">
                  <p>{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 