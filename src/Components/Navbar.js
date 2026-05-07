import React, { useState, useEffect, useRef } from 'react';
import '../css/Navbar.css';
import git from '../imgs/github.png';
import linkin from '../imgs/linkedin.png';
import { scrollToSection } from '../utils/scroll';

const SECTIONS = ['home', 'about', 'projects'];

function Navbar() {
  const [active, setActive] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuOpenRef = useRef(false);

  // Keep ref in sync so scroll handler doesn't go stale
  useEffect(() => {
    menuOpenRef.current = menuOpen;
  }, [menuOpen]);

  const handleNavClick = (id) => {
    // Close menu first, then scroll on next tick so the DOM settles
    setMenuOpen(false);
    setTimeout(() => scrollToSection(id), 10);
  };

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      if (menuOpenRef.current) setMenuOpen(false);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-50% 0px -45% 0px' }
    );

    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', onScroll);
    };
  }, []); // No menuOpen dependency — use ref instead

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="navbar-inner">
        <span className="navbar-brand" onClick={() => handleNavClick('home')}>
          Jameson Walter
        </span>

        <ul className="navbar-links">
          {SECTIONS.map((id) => (
            <li
              key={id}
              className={`nav-link${active === id ? ' active' : ''}`}
              onClick={() => handleNavClick(id)}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </li>
          ))}
        </ul>

        <div className="navbar-social">
          <a href="https://github.com/ramscuse" target="_blank" rel="noopener noreferrer">
            <img src={git} alt="GitHub" />
          </a>
          <a href="https://www.linkedin.com/in/jameson-walter-587388184/" target="_blank" rel="noopener noreferrer">
            <img src={linkin} alt="LinkedIn" />
          </a>
        </div>

        <button
          className={`hamburger${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div className={`mobile-menu${menuOpen ? ' visible' : ''}`} aria-hidden={!menuOpen}>
        <div className="mobile-menu-inner">
          {SECTIONS.map((id) => (
            <button
              key={id}
              className={`mobile-nav-link${active === id ? ' active' : ''}`}
              onClick={() => handleNavClick(id)}
              tabIndex={menuOpen ? 0 : -1}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </button>
          ))}
          <div className="mobile-social">
            <a href="https://github.com/ramscuse" target="_blank" rel="noopener noreferrer" tabIndex={menuOpen ? 0 : -1}>
              <img src={git} alt="GitHub" />
              <span>GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/jameson-walter-587388184/" target="_blank" rel="noopener noreferrer" tabIndex={menuOpen ? 0 : -1}>
              <img src={linkin} alt="LinkedIn" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
