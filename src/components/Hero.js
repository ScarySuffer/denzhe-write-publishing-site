// src/components/Hero.js
import React, { useEffect } from 'react';
import './styles/Hero.css';

export default function Hero() {
  useEffect(() => {
    const handleScroll = () => {
      const fadeInElements = document.querySelectorAll('.fade-in-section');
      fadeInElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          el.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger once on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <section className="hero fade-in-section">
        <div className="hero-image-wrapper">
          <img
            src="/assets/hero.jpg"
            alt="Books and Creativity"
            className="hero-image"
          />
        </div>
      </section>

      <section className="hero-text-section fade-in-section">
        <div className="hero-text">
          <h1>Denzhewrites Publishers</h1>
          <p>Giving a voice to the youth, Empowering Generations</p>
          <a href="#contact" className="cta-btn">Start Your Publishing Journey</a>
        </div>
      </section>
    </>
  );
}
