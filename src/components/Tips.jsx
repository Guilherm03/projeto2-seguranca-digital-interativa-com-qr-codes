import React from 'react';

const Tips = () => {
  const tipsData = [
    {
      icon: 'fas fa-key',
      title: 'Senhas Fortes',
      items: [
        'Use pelo menos 12 caracteres',
        'Combine letras, números e símbolos',
        'Evite informações pessoais',
        'Use um gerenciador de senhas'
      ]
    },
    {
      icon: 'fas fa-shield-alt',
      title: 'Autenticação de Dois Fatores',
      items: [
        'Ative 2FA sempre que possível',
        'Use aplicativos autenticadores',
        'Evite SMS para 2FA',
        'Mantenha códigos de backup'
      ]
    },
    {
      icon: 'fas fa-wifi',
      title: 'Redes Seguras',
      items: [
        'Evite Wi-Fi público',
        'Use VPN em redes públicas',
        'Verifique certificados SSL',
        'Desative compartilhamento automático'
      ]
    },
    {
      icon: 'fas fa-envelope',
      title: 'E-mails Seguros',
      items: [
        'Desconfie de e-mails suspeitos',
        'Não clique em links desconhecidos',
        'Verifique o remetente',
        'Use filtros de spam'
      ]
    },
    {
      icon: 'fas fa-mobile-alt',
      title: 'Dispositivos Móveis',
      items: [
        'Mantenha o sistema atualizado',
        'Instale apenas apps confiáveis',
        'Use bloqueio de tela',
        'Ative localização apenas quando necessário'
      ]
    },
    {
      icon: 'fas fa-cloud',
      title: 'Backup e Nuvem',
      items: [
        'Faça backup regular dos dados',
        'Use serviços de nuvem confiáveis',
        'Criptografe dados sensíveis',
        'Teste restaurações periodicamente'
      ]
    }
  ];

  return (
    <section id="tips" className="tips">
      <div className="container">
        <h2 className="section-title">Dicas de Segurança</h2>
        <div className="tips-grid">
          {tipsData.map((tip, index) => (
            <div key={index} className="tip-card">
              <div className="tip-icon">
                <i className={tip.icon}></i>
              </div>
              <h3>{tip.title}</h3>
              <ul>
                {tip.items.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tips;
