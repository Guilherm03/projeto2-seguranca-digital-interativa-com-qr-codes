import React from 'react';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">Por que a Segurança Digital é Importante?</h2>
        <div className="about-grid">
          <div className="about-card">
            <div className="card-icon">
              <i className="fas fa-chart-line"></i>
            </div>
            <h3>Crescimento dos Ataques</h3>
            <p>Os ataques cibernéticos aumentaram 600% durante a pandemia, afetando milhões de usuários em todo o mundo.</p>
          </div>
          <div className="about-card">
            <div className="card-icon">
              <i className="fas fa-dollar-sign"></i>
            </div>
            <h3>Prejuízos Financeiros</h3>
            <p>Empresas perdem bilhões de dólares anualmente devido a violações de segurança e ataques de ransomware.</p>
          </div>
          <div className="about-card">
            <div className="card-icon">
              <i className="fas fa-users"></i>
            </div>
            <h3>Dados Pessoais</h3>
            <p>Seus dados pessoais são valiosos e podem ser usados para fraudes, roubo de identidade e outros crimes.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
