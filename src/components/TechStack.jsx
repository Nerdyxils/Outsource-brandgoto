import '../styles/tech-stack.css';

const TechStack = () => {
  const technologies = [
    { name: "React", logo: "fab fa-react", color: "#61DAFB" },
    { name: "Angular", logo: "fab fa-angular", color: "#DD0031" },
    { name: "Vue", logo: "fab fa-vuejs", color: "#4FC08D" },
    { name: "Node.js", logo: "fab fa-node-js", color: "#339933" },
    { name: "Python", logo: "fab fa-python", color: "#3776AB" },
    { name: "Java", logo: "fab fa-java", color: "#ED8B00" },
    { name: "PHP", logo: "fab fa-php", color: "#777BB4" },
    { name: "C++", logo: "fas fa-code", color: "#00599C" },
    { name: "JavaScript", logo: "fab fa-js-square", color: "#F7DF1E" },
    { name: "TypeScript", logo: "fab fa-js", color: "#3178C6" },
    { name: "AWS", logo: "fab fa-aws", color: "#FF9900" },
    { name: "Azure", logo: "fab fa-microsoft", color: "#0078D4" },
    { name: "Google Cloud", logo: "fab fa-google", color: "#4285F4" },
    { name: "Docker", logo: "fab fa-docker", color: "#2496ED" },
    { name: "Kubernetes", logo: "fas fa-cube", color: "#326CE5" },
    { name: "Flutter", logo: "fas fa-mobile-alt", color: "#02569B" },
    { name: "iOS", logo: "fab fa-apple", color: "#000000" },
    { name: "Android", logo: "fab fa-android", color: "#3DDC84" },
    { name: ".NET", logo: "fab fa-microsoft", color: "#512BD4" },
    { name: "Salesforce", logo: "fab fa-salesforce", color: "#00A1E0" },
    { name: "SAP", logo: "fas fa-database", color: "#003366" },
    { name: "Ruby", logo: "fas fa-gem", color: "#CC342D" },
    { name: "Go", logo: "fas fa-code", color: "#00ADD8" },
    { name: "Figma", logo: "fab fa-figma", color: "#F24E1E" },
    { name: "Selenium", logo: "fas fa-check-circle", color: "#43B02A" },
    { name: "Xamarin", logo: "fas fa-mobile", color: "#3498DB" }
  ];

  return (
    <section id="tech-stack" className="section tech-stack">
      <div className="container">
        <div className="tech-stack-header">
          <div className="tech-stack-title">
            <h2>We cover your stack</h2>
          </div>
          <div className="tech-stack-description">
            <p>We're well-versed in most programming languages, tools, and frameworks essential for innovative solutions. We will provide the perfect combination based on your business needs, our tech stack, and best industry practices.</p>
          </div>
        </div>
        
        <div className="tech-carousel-container">
          <div className="tech-carousel">
            {[...technologies, ...technologies].map((tech, index) => (
              <div key={index} className="tech-item" style={{ '--tech-color': tech.color }}>
                <i className={tech.logo}></i>
                <span className="tech-name">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="tech-stack-cta">
          <button 
            className="btn btn-outline"
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
          >
            BUILD WITH OUR TECH STACK
          </button>
        </div>
      </div>
    </section>
  );
};

export default TechStack; 