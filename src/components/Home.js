import Hero from './Hero';
import About from './About';
import Services from './Services';
import Journey from './Journey';
import Contact from './Contact';

import { useEffect } from 'react';

export default function Home() {
 useEffect(() => {
  const fadeElements = document.querySelectorAll('.fade-in-section');

  const onScroll = () => {
    const windowHeight = window.innerHeight;

    fadeElements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < windowHeight * 0.85) {
        el.classList.add('visible');
      } else {
        el.classList.remove('visible');
      }
    });
  };

  onScroll();

  window.addEventListener('scroll', onScroll);
  return () => window.removeEventListener('scroll', onScroll);
}, []);

  return (
    <>
      <div className="fade-in-section"><Hero /></div>
      <div className="fade-in-section"><About /></div>
      <div className="fade-in-section"><Services /></div>
      <div className="fade-in-section"><Journey /></div>
      <div className="fade-in-section"><Contact /></div>
    </>
  );
}
