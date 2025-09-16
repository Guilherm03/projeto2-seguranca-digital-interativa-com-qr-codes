import React, { useState } from 'react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="header">
      <nav className="nav">
        <div className="nav-brand">
          <i className="fas fa-shield-alt"></i>
          <span>Segurança Digital</span>
        </div>
        <ul className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <li><a href="#home" className="nav-link" onClick={() => scrollToSection('home')}>Início</a></li>
          <li><a href="#about" className="nav-link" onClick={() => scrollToSection('about')}>Sobre</a></li>
          <li><a href="#quiz" className="nav-link" onClick={() => scrollToSection('quiz')}>Quiz</a></li>
          <li><a href="#tips" className="nav-link" onClick={() => scrollToSection('tips')}>Dicas</a></li>
        </ul>
        <div className="hamburger" onClick={toggleMobileMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
