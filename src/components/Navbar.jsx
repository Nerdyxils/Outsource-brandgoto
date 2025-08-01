import { useState, useEffect } from 'react';
import '../styles/navbar.css';

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

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>
            BrandGoto
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="navbar-nav">
          <a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}>
            Services
          </a>
          <a href="#industries" onClick={(e) => { e.preventDefault(); scrollToSection('industries'); }}>
            Industries
          </a>
          <a href="#why-us" onClick={(e) => { e.preventDefault(); scrollToSection('why-us'); }}>
            Why Us
          </a>
          <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className={`navbar-toggle ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Mobile Navigation */}
        <div className={`navbar-mobile ${isMobileMenuOpen ? 'active' : ''}`}>
          <a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}>
            Services
          </a>
          <a href="#industries" onClick={(e) => { e.preventDefault(); scrollToSection('industries'); }}>
            Industries
          </a>
          <a href="#why-us" onClick={(e) => { e.preventDefault(); scrollToSection('why-us'); }}>
            Why Us
          </a>
          <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 