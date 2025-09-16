import React, { useState, useEffect } from 'react';

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [quizStarted, setQuizStarted] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [questionAnswered, setQuestionAnswered] = useState(false);

  const quizQuestions = [
    {
      question: "Qual é a característica mais importante de uma senha segura?",
      options: [
        "Ser fácil de lembrar",
        "Ter pelo menos 12 caracteres com letras, números e símbolos",
        "Usar apenas letras minúsculas",
        "Ser o nome do seu animal de estimação"
      ],
      correct: 1,
      explanation: "Senhas seguras devem ter pelo menos 12 caracteres e combinar letras maiúsculas, minúsculas, números e símbolos especiais."
    },
    {
      question: "O que é autenticação de dois fatores (2FA)?",
      options: [
        "Usar duas senhas diferentes",
        "Um método de segurança que requer dois tipos de verificação",
        "Fazer login duas vezes",
        "Usar o mesmo código duas vezes"
      ],
      correct: 1,
      explanation: "2FA adiciona uma camada extra de segurança exigindo algo que você sabe (senha) e algo que você tem (código do celular)."
    },
    {
      question: "Qual é a melhor prática ao receber um e-mail suspeito?",
      options: [
        "Clicar nos links para verificar se é legítimo",
        "Responder perguntando sobre o conteúdo",
        "Deletar imediatamente sem clicar em nada",
        "Encaminhar para amigos para alertá-los"
      ],
      correct: 2,
      explanation: "E-mails suspeitos devem ser deletados imediatamente. Nunca clique em links ou baixe anexos de remetentes desconhecidos."
    },
    {
      question: "O que é phishing?",
      options: [
        "Um tipo de vírus",
        "Uma técnica para roubar informações pessoais se passando por entidades confiáveis",
        "Um programa antivírus",
        "Uma forma de criptografia"
      ],
      correct: 1,
      explanation: "Phishing é uma técnica de engenharia social onde criminosos se passam por empresas legítimas para roubar dados pessoais."
    },
    {
      question: "Qual é a forma mais segura de usar Wi-Fi público?",
      options: [
        "Conectar diretamente sem proteção",
        "Usar uma VPN (Rede Privada Virtual)",
        "Compartilhar arquivos pessoais",
        "Fazer compras online com cartão de crédito"
      ],
      correct: 1,
      explanation: "VPNs criptografam sua conexão, protegendo seus dados mesmo em redes Wi-Fi públicas não seguras."
    },
    {
      question: "O que você deve fazer se suspeitar que sua conta foi comprometida?",
      options: [
        "Aguardar para ver se o problema se resolve sozinho",
        "Alterar imediatamente todas as senhas e ativar 2FA",
        "Compartilhar a situação nas redes sociais",
        "Continuar usando a conta normalmente"
      ],
      correct: 1,
      explanation: "Se suspeitar de comprometimento, altere imediatamente as senhas, ative 2FA e monitore suas contas bancárias."
    },
    {
      question: "Qual é a importância de manter o software atualizado?",
      options: [
        "Apenas para ter novos recursos",
        "Para corrigir vulnerabilidades de segurança",
        "Para economizar espaço de armazenamento",
        "Para melhorar a velocidade do computador"
      ],
      correct: 1,
      explanation: "Atualizações de software frequentemente incluem correções de segurança que protegem contra vulnerabilidades conhecidas."
    },
    {
      question: "O que é um gerenciador de senhas?",
      options: [
        "Um programa que cria senhas fracas",
        "Uma ferramenta que armazena e gerencia senhas de forma segura",
        "Um tipo de antivírus",
        "Um programa para compartilhar senhas"
      ],
      correct: 1,
      explanation: "Gerenciadores de senhas armazenam suas senhas de forma criptografada e podem gerar senhas seguras automaticamente."
    },
    {
      question: "Qual é a melhor prática para backup de dados?",
      options: [
        "Fazer backup apenas uma vez por ano",
        "Fazer backup regular e testar a restauração",
        "Armazenar tudo apenas na nuvem",
        "Não fazer backup de dados importantes"
      ],
      correct: 1,
      explanation: "Backups regulares e testes de restauração garantem que seus dados possam ser recuperados em caso de perda."
    },
    {
      question: "O que é engenharia social?",
      options: [
        "Uma área de estudo acadêmico",
        "Técnicas para manipular pessoas a revelar informações confidenciais",
        "Um tipo de software de segurança",
        "Uma forma de criptografia avançada"
      ],
      correct: 1,
      explanation: "Engenharia social usa manipulação psicológica para convencer pessoas a revelar informações confidenciais ou realizar ações inseguras."
    }
  ];

  useEffect(() => {
    startQuiz();
  }, []);

  const startQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setUserAnswers([]);
    setQuizStarted(true);
    setShowResult(false);
    setQuestionAnswered(false);
  };

  const selectOption = (selectedIndex) => {
    if (!quizStarted || questionAnswered) return;

    const question = quizQuestions[currentQuestion];
    const isCorrect = selectedIndex === question.correct;
    
    const newScore = isCorrect ? score + 1 : score;
    setScore(newScore);

    const newUserAnswers = [...userAnswers, {
      question: currentQuestion,
      selected: selectedIndex,
      correct: question.correct,
      isCorrect: isCorrect
    }];
    setUserAnswers(newUserAnswers);
    setQuestionAnswered(true);

    setTimeout(() => {
      if (currentQuestion + 1 >= quizQuestions.length) {
        setShowResult(true);
        setQuizStarted(false);
      } else {
        setCurrentQuestion(currentQuestion + 1);
        setQuestionAnswered(false);
      }
    }, 2000);
  };

  const restartQuiz = () => {
    startQuiz();
  };

  const getResultContent = () => {
    const percentage = (score / quizQuestions.length) * 100;
    
    if (percentage >= 90) {
      return {
        title: 'Excelente! 🎉',
        description: 'Você demonstra um conhecimento excepcional sobre segurança digital! Continue mantendo essas boas práticas e ajude outros a se protegerem online.',
        icon: 'fas fa-trophy'
      };
    } else if (percentage >= 70) {
      return {
        title: 'Muito Bom! 👍',
        description: 'Você tem um bom conhecimento sobre segurança digital, mas ainda pode melhorar em algumas áreas. Continue aprendendo e praticando as melhores práticas.',
        icon: 'fas fa-thumbs-up'
      };
    } else if (percentage >= 50) {
      return {
        title: 'Bom Começo! 📚',
        description: 'Você tem conhecimentos básicos sobre segurança digital. Recomendamos estudar mais sobre o assunto e implementar as dicas disponíveis neste site.',
        icon: 'fas fa-book'
      };
    } else {
      return {
        title: 'Precisa Melhorar! ⚠️',
        description: 'Sua segurança digital precisa de atenção. Recomendamos fortemente estudar as dicas deste site e implementar as práticas de segurança recomendadas.',
        icon: 'fas fa-exclamation-triangle'
      };
    }
  };

  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;
  const resultContent = getResultContent();

  return (
    <section id="quiz" className="quiz">
      <div className="container">
        <h2 className="section-title">Teste seus Conhecimentos</h2>
        <p className="section-subtitle">Responda as perguntas e descubra o quão seguro você está online</p>
        
        <div className="quiz-container">
          <div className="quiz-header">
            <div className="quiz-progress">
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: `${progress}%` }}></div>
              </div>
              <span className="progress-text">Pergunta {currentQuestion + 1} de {quizQuestions.length}</span>
            </div>
            <div className="quiz-score">
              <span>Pontuação: <span>{score}</span></span>
            </div>
          </div>

          <div className="quiz-content">
            {!showResult ? (
              <div className="question-container">
                <h3 className="question">{quizQuestions[currentQuestion]?.question}</h3>
                <div className="options">
                  {quizQuestions[currentQuestion]?.options.map((option, index) => (
                    <div
                      key={index}
                      className="option"
                      onClick={() => selectOption(index)}
                    >
                      {option}
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="quiz-result">
                <div className="result-content">
                  <div className="result-icon">
                    <i className={resultContent.icon}></i>
                  </div>
                  <h3>{resultContent.title}</h3>
                  <p>{resultContent.description}</p>
                  <div className="final-score">
                    <span>Sua pontuação: <strong>{score}/{quizQuestions.length}</strong></span>
                  </div>
                  <button className="btn btn-primary" onClick={restartQuiz}>
                    <i className="fas fa-redo"></i>
                    Refazer Quiz
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quiz;
