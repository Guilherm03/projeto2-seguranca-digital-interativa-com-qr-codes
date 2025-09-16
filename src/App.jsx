import React, { useState } from 'react';
import './App.css';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Quiz from './components/Quiz.jsx';
import Tips from './components/Tips.jsx';
import Footer from './components/Footer.jsx';
import QRAlert from './components/QRAlert.jsx';

function App() {
  const [showMainContent, setShowMainContent] = useState(false);

  const handleContinueFromAlert = () => {
    setShowMainContent(true);
  };

  return (
    <div className="App">
      <QRAlert onContinue={handleContinueFromAlert} />
      {showMainContent && (
        <>
          <Header />
          <Hero />
          <About />
          <Quiz />
          <Tips />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;