import React, { useState } from 'react';

const QRAlert = ({ onContinue }) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleContinue = () => {
    setIsVisible(false);
    onContinue();
  };

  if (!isVisible) return null;

  return (
    <div className="qr-alert-overlay">
      <div className="qr-alert-modal">
        <div className="qr-alert-header">
          <div className="qr-alert-icon">
            <i className="fas fa-exclamation-triangle"></i>
          </div>
          <h2>⚠️ Alerta de Segurança</h2>
        </div>
        
        <div className="qr-alert-content">
          <h3>Cuidados ao Escanear QR Codes</h3>
          
          <div className="qr-alert-warning">
            <p>QR codes podem ser usados por criminosos para:</p>
            <ul>
              <li><i className="fas fa-times-circle"></i> Redirecionar para sites maliciosos</li>
              <li><i className="fas fa-times-circle"></i> Instalar vírus no seu dispositivo</li>
              <li><i className="fas fa-times-circle"></i> Roubar informações pessoais</li>
              <li><i className="fas fa-times-circle"></i> Fazer cobranças indevidas</li>
            </ul>
          </div>

          <div className="qr-alert-tips">
            <h4>🛡️ Dicas de Segurança:</h4>
            <ul>
              <li><i className="fas fa-check-circle"></i> Verifique a origem do QR code</li>
              <li><i className="fas fa-check-circle"></i> Use aplicativos confiáveis para escanear</li>
              <li><i className="fas fa-check-circle"></i> Desconfie de QR codes em locais públicos</li>
              <li><i className="fas fa-check-circle"></i> Verifique o link antes de acessar</li>
              <li><i className="fas fa-check-circle"></i> Mantenha seu antivírus atualizado</li>
            </ul>
          </div>

          <div className="qr-alert-footer">
            <p><strong>Lembre-se:</strong> A segurança digital é responsabilidade de todos!</p>
            <button className="btn btn-primary" onClick={handleContinue}>
              <i className="fas fa-shield-alt"></i>
              Entendi, Continuar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QRAlert;
