import React, { useRef, useLayoutEffect } from 'react';
import '../css/Home.css';
import photo1 from '../imgs/headshot.jpg';
import { scrollToSection } from '../utils/scroll';
import { gsap } from 'gsap';

function Home() {
  const heroRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.from('.hero-subtitle', { opacity: 0, y: -12, duration: 0.5 })
        .from('.hero-name',     { opacity: 0, y: 28,  duration: 0.6 }, '-=0.25')
        .from('.hero-role',     { opacity: 0, y: 16,  duration: 0.5 }, '-=0.3')
        .from('.hero-bio',      { opacity: 0, y: 16,  duration: 0.5 }, '-=0.3')
        .from('.btn-primary, .btn-ghost', {
          opacity: 0, y: 12, duration: 0.4, stagger: 0.12,
        }, '-=0.25')
        .from('.headshot-frame', { opacity: 0, scale: 0.88, duration: 0.6 }, '-=0.55')
        .from('.scroll-hint',    { opacity: 0, duration: 0.5 }, '-=0.1');
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="hero" ref={heroRef}>
      <div className="hero-inner">
        <div className="hero-text">
          <h1 className="hero-name">Jameson Walter</h1>
          <p className="hero-role"><span>Full-Stack Software Engineer</span></p>
          <p className="hero-bio">
            Hi, I'm Jameson. I'm a software engineer based in Colorado. I work across the full stack, building everything from React and TypeScript frontends to Rust APIs and AWS infrastructure. Currently, I'm at SpaceNav, where I develop and maintain the tools that power the platform for both customers and internal teams.
          </p>
          <p className="hero-bio">
            Outside of work, I like building side projects like healthtrkr, a full-stack fitness tracker, and experimenting with new tools and technologies. I also have a passion for sports and the outdoors.
          </p>
          <p className="hero-bio">
            Feel free to take a look around, and don't hesitate to reach out.
          </p>
        </div>
        <div className="hero-photo">
          <div className="headshot-frame">
            <img src={photo1} alt="Jameson Walter" />
          </div>
        </div>
      </div>

      <button className="scroll-hint" onClick={() => scrollToSection('about')} aria-label="Scroll to About">
        <span className="scroll-hint-label">About</span>
        <svg className="scroll-hint-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
    </section>
  );
}

export default Home;
