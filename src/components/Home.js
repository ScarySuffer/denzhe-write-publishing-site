import Hero from './Hero';
import About from './About';
import Services from './Services';
import Journey from './Journey';
import Contact from './Contact';


import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    const sections = document.querySelectorAll('section');

    const onScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top + scrollY;
        if (scrollY + windowHeight * 0.85 > sectionTop) {
          section.classList.add('visible');
        } else {
          section.classList.remove('visible');
        }
      });
    };

    // Initial check
    onScroll();

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <Hero />
      <About />
      <Services />
      <Journey />
      <Contact />
    </>
  );
}
