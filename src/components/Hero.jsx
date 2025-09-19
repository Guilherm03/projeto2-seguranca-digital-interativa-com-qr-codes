import React from 'react';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Proteja-se no <span className="gradient-text">Mundo Digital</span></h1>
          <h3>Projeto de Segurança da Informação Desenvolvido por Guilherme e Helder</h3>
          <p>Descubra como navegar na internet com segurança e aprenda as melhores práticas para proteger seus dados pessoais e privacidade online.</p>
          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={() => scrollToSection('quiz')}>
              <i className="fas fa-play"></i>
              Teste seus Conhecimentos
            </button>
            <button className="btn btn-secondary" onClick={() => scrollToSection('about')}>
              <i className="fas fa-info-circle"></i>
              Saiba Mais
            </button>
          </div>
        </div>
        <div className="hero-visual">
          <div className="security-icons">
            <div className="icon-item">
              <i className="fas fa-lock"></i>
              <span>Senhas Seguras</span>
            </div>
            <div className="icon-item">
              <i className="fas fa-user-shield"></i>
              <span>Privacidade</span>
            </div>
            <div className="icon-item">
              <i className="fas fa-virus"></i>
              <span>Antivírus</span>
            </div>
            <div className="icon-item">
              <i className="fas fa-key"></i>
              <span>Criptografia</span>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-bg">
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;


