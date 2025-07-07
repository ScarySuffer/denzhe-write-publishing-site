import React from 'react';
import './styles/Home.css';

export default function Hero() {
  return (
    <section className="hero">
      <img
        src="/assets/hero-bg.jpg"
        alt="Books and Creativity"
        className="hero-image"
      />
      <div className="hero-text">
        <h1>Denzhewrites Publishers</h1>
        <p>Giving a voice to the youth, Empowering Generations</p>
        <a href="#contact" className="cta-btn">Start Your Publishing Journey</a>
      </div>
    </section>
  );
}
