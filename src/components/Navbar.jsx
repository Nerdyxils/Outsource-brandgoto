import { useState, useEffect } from 'react';
import '../styles/navbar.css';
import logo from '../assets/images/logo.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const handleMobileMenuToggle = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
        <div className="container navbar-container">
          {/* Logo */}
          <div className="navbar-logo">
            <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>
              <img src={logo} alt="BrandGoto" className="logo-image" />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="navbar-nav">
            <a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}>
              Services
            </a>
            <a href="#portfolio" onClick={(e) => { e.preventDefault(); scrollToSection('portfolio'); }}>
              Portfolio
            </a>
            <a href="#tech-stack" onClick={(e) => { e.preventDefault(); scrollToSection('tech-stack'); }}>
              Tech Stack
            </a>
            <a href="#industries" onClick={(e) => { e.preventDefault(); scrollToSection('industries'); }}>
              Industries
            </a>
            <a href="#why-us" onClick={(e) => { e.preventDefault(); scrollToSection('why-us'); }}>
              Why Us
            </a>
            <a href="#faq" onClick={(e) => { e.preventDefault(); scrollToSection('faq'); }}>
              FAQ
            </a>
            <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className={`navbar-toggle ${isMobileMenuOpen ? 'active' : ''}`}
            onClick={handleMobileMenuToggle}
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileMenuOpen}
            type="button"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          {/* Mobile Navigation */}
          <div className={`navbar-mobile ${isMobileMenuOpen ? 'active' : ''}`}>
            <div className="mobile-menu-header">
              <button 
                className="mobile-menu-close"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Close navigation menu"
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
            <div className="mobile-menu-links">
              <a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}>
                Services
              </a>
              <a href="#portfolio" onClick={(e) => { e.preventDefault(); scrollToSection('portfolio'); }}>
                Portfolio
              </a>
              <a href="#tech-stack" onClick={(e) => { e.preventDefault(); scrollToSection('tech-stack'); }}>
                Tech Stack
              </a>
              <a href="#industries" onClick={(e) => { e.preventDefault(); scrollToSection('industries'); }}>
                Industries
              </a>
              <a href="#why-us" onClick={(e) => { e.preventDefault(); scrollToSection('why-us'); }}>
                Why Us
              </a>
              <a href="#faq" onClick={(e) => { e.preventDefault(); scrollToSection('faq'); }}>
                FAQ
              </a>
              <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>
      
      {/* Mobile Menu Backdrop */}
      {isMobileMenuOpen && (
        <div 
          className="mobile-menu-backdrop"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Navbar; 