
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Consultoria from './pages/Consultoria';
import Loja from './pages/Loja';
import Dicas from './pages/Dicas';
import SobreNos from './pages/SobreNos';
import Contato from './pages/Contato';
import Irlanda from './pages/Irlanda';
import Portugal from './pages/Portugal';
import AreaDeMembrosInfo from './pages/AreaDeMembrosInfo';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return document.documentElement.classList.contains('dark');
    }
    return false;
  });

  const toggleTheme = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    if (newMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  useEffect(() => {
    // Listen for system theme changes if user hasn't set a preference
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem('theme')) {
        setIsDarkMode(e.matches);
        if (e.matches) document.documentElement.classList.add('dark');
        else document.documentElement.classList.remove('dark');
      }
    };
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return (
    <Router>
      <div className="flex flex-col min-h-screen transition-colors duration-300">
        <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/caminhos" element={<Consultoria />} />
            <Route path="/loja" element={<Loja />} />
            <Route path="/rotas" element={<Dicas />} />
            <Route path="/sobre-nos" element={<SobreNos />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/irlanda" element={<Irlanda />} />
            <Route path="/portugal" element={<Portugal />} />
            <Route path="/area-de-membros-info" element={<AreaDeMembrosInfo />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
