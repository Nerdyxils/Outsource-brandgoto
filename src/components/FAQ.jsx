import { useState } from 'react';
import '../styles/faq.css';

const FAQ = () => {
  const [expandedQuestion, setExpandedQuestion] = useState(null);

  const faqData = [
    {
      id: 1,
      question: "Why 'BrandGoto'? What stands behind your brand?",
      answer: "BrandGoto represents our commitment to helping businesses 'go to' their next level through innovative technology solutions. Our brand embodies trust, expertise, and the journey of digital transformation that we guide our clients through."
    },
    {
      id: 2,
      question: "What makes you different?",
      answer: "We combine deep technical expertise with industry-specific knowledge, offering personalized solutions rather than one-size-fits-all approaches. Our agile methodology, transparent communication, and commitment to long-term partnerships set us apart from traditional outsourcing providers."
    },
    {
      id: 3,
      question: "How big is your company?",
      answer: "We maintain a carefully curated team of 50+ vetted engineers and have successfully onboarded 30+ teams. Our size allows us to provide personalized attention while delivering enterprise-level solutions and maintaining the flexibility to scale according to your needs."
    },
    {
      id: 4,
      question: "Where are you based?",
      answer: "We operate as a global team with distributed expertise, allowing us to provide 24/7 development cycles and support. Our diverse team brings together the best talent from around the world to deliver exceptional results for our clients."
    },
    {
      id: 5,
      question: "What is a Core Team, and how is it organized?",
      answer: "A Core Team is a pre-built, specialized development unit with deep expertise in specific technologies or domains. Each team includes senior developers, tech leads, and dedicated project managers, organized to hit the ground running and deliver results from day one."
    },
    {
      id: 6,
      question: "What types of clients do you work with?",
      answer: "We work with startups, scale-ups, and enterprise companies across diverse industries including fintech, healthcare, e-commerce, and enterprise software. Our clients range from early-stage startups to Fortune 500 companies seeking digital transformation."
    },
    {
      id: 7,
      question: "What is your preferred development methodology?",
      answer: "We follow Agile and Scrum methodologies with a focus on continuous delivery and iterative development. Our approach emphasizes regular communication, transparent progress tracking, and the ability to adapt to changing requirements while maintaining high code quality."
    },
    {
      id: 8,
      question: "What's your post-launch policy?",
      answer: "We provide comprehensive post-launch support including bug fixes, performance optimization, feature enhancements, and ongoing maintenance. Our support extends beyond launch with dedicated teams available for long-term partnership and system evolution."
    }
  ];

  const toggleQuestion = (questionId) => {
    setExpandedQuestion(expandedQuestion === questionId ? null : questionId);
  };

  const leftColumnQuestions = faqData.slice(0, 4);
  const rightColumnQuestions = faqData.slice(4, 8);

  return (
    <section id="faq" className="section faq">
      <div className="container">
        <div className="faq-header">
          <h2>Questions?</h2>
          <h3>The answers are here</h3>
        </div>
        
        <div className="faq-content">
          <div className="faq-column">
            {leftColumnQuestions.map((item) => (
              <div key={item.id} className="faq-item">
                <button 
                  className={`faq-question ${expandedQuestion === item.id ? 'expanded' : ''}`}
                  onClick={() => toggleQuestion(item.id)}
                >
                  <i className={`fas ${expandedQuestion === item.id ? 'fa-minus' : 'fa-plus'}`}></i>
                  <span>{item.question}</span>
                </button>
                {expandedQuestion === item.id && (
                  <div className="faq-answer">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="faq-column">
            {rightColumnQuestions.map((item) => (
              <div key={item.id} className="faq-item">
                <button 
                  className={`faq-question ${expandedQuestion === item.id ? 'expanded' : ''}`}
                  onClick={() => toggleQuestion(item.id)}
                >
                  <i className={`fas ${expandedQuestion === item.id ? 'fa-minus' : 'fa-plus'}`}></i>
                  <span>{item.question}</span>
                </button>
                {expandedQuestion === item.id && (
                  <div className="faq-answer">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ; 