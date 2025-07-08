import React from 'react';
import './styles/Home.css';

export default function Hero() {
  return (
    <>
  <section className="hero fade-in-section">
    <img
      src="/assets/hero.jpg"
      alt="Books and Creativity"
      className="hero-image"
    />
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
