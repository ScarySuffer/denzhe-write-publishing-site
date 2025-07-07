import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Journey from './components/Journey';
import TargetAudience from './components/TargetAudience';
import Marketing from './components/Marketing';
import CompetitiveAdvantage from './components/CompetitiveAdvantage';
import FinancialPlan from './components/FinancialPlan';
import Contact from './components/Contact';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.body.classList.remove('light-mode', 'dark-mode');
    document.body.classList.add(theme === 'dark' ? 'dark-mode' : 'light-mode');
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(prev => (prev === 'light' ? 'dark' : 'light'));

  return (
    <Router>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/journey" element={<Journey />} />
        <Route path="/target-audience" element={<TargetAudience />} />
        <Route path="/marketing" element={<Marketing />} />
        <Route path="/competitive-advantage" element={<CompetitiveAdvantage />} />
        <Route path="/financial-plan" element={<FinancialPlan />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      
      <Footer />
    </Router>
  );
}

export default App;
