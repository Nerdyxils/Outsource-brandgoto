import '../styles/footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-left">
            <p className="copyright">
              © BrandGoto {currentYear}. All rights reserved.
            </p>
          </div>
          
          <div className="footer-center">
            <div className="footer-links">
              <a 
                href="https://www.brandgoto.ca/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="footer-link"
              >
                <span className="link-icon">🏠</span>
                <div className="link-content">
                  <span className="link-title">Main Hub</span>
                  <span className="link-caption">Where creativity meets technology</span>
                </div>
              </a>
              <a 
                href="https://smartlaunch.brandgoto.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="footer-link"
              >
                <span className="link-icon">🚀</span>
                <div className="link-content">
                  <span className="link-title">SmartLaunch</span>
                  <span className="link-caption">Launch your startup in 30 days</span>
                </div>
              </a>
            </div>
          </div>
          
          <div className="footer-right">
            <div className="social-links">
              <a 
                href="https://x.com/Brand_goto" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
                aria-label="X (Twitter)"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a 
                href="https://www.linkedin.com/company/brandgoto/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a 
                href="https://www.instagram.com/brand_goto/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 