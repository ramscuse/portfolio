import React, { useLayoutEffect } from 'react';
import '../css/Project.css';
import { download } from '../functions/Download';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const featuredProjects = [
  {
    title: 'healthtrkr',
    meta: 'React · Express · PostgreSQL · Prisma · Docker — 2025–Present',
    desc: 'Full-stack health and fitness tracker with calorie and protein logging, weekly progress charts, and USDA food database integration. Features JWT auth, PostgreSQL with Prisma ORM, and a Dockerized dev environment.',
    tags: ['React', 'Express', 'PostgreSQL', 'Prisma', 'Docker', 'JWT'],
    github: 'https://github.com/ramscuse/healthtrkr',
    featured: true,
  },
  {
    title: 'Chess Game',
    meta: 'React · TypeScript · Java · SQL · UNIX — Aug–Dec 2023',
    desc: 'Async multiplayer chess built with an Agile team. Uses two SQL databases to manage user accounts and live game state, with a React/TypeScript frontend and Java backend running on UNIX servers.',
    tags: ['React', 'TypeScript', 'Java', 'SQL', 'UNIX'],
    featured: true,
  },
  {
    title: 'Trip Itinerary',
    meta: 'React · Docker · REST · Optimization — Semester project',
    desc: 'Scrum-based semester project with a team of 3. Built a trip planning app with map/list views, trip upload/download, and a search engine using SQL and optimization algorithms to sort results.',
    tags: ['React', 'Docker', 'SQL', 'REST', 'Scrum'],
    github: 'https://github.com/ramscuse/cs314',
    featured: true,
  },
  {
    title: 'Portfolio Website',
    meta: 'React · Tailwind CSS · GSAP · Vercel',
    desc: "The site you're on right now. Built with React, redesigned with a dark/glassmorphism aesthetic, GSAP scroll animations, and deployed on Vercel with automatic CI/CD from GitHub.",
    tags: ['React', 'Tailwind CSS', 'GSAP', 'Vercel'],
    github: 'https://github.com/ramscuse/portfolio',
    featured: true,
  },
];

const moreProjects = [
  {
    title: 'Zombie FPS',
    meta: 'Unity · C#',
    desc: 'First-person round-based zombie shooter built in Unity, heavily inspired by Call of Duty Zombies. Goal: survive as long as possible using weapons scattered around the map.',
    tags: ['Unity', 'C#'],
    download: { label: 'Download Game', file: 'ZombiesGameBuild.zip' },
  },
  {
    title: 'Company Project Manager',
    meta: 'Java · Jest · JUnit · TDD',
    desc: 'Test-driven class project using ISP tables and use case diagrams. Fully functional REST backend with Jest and JUnit achieving high test coverage.',
    tags: ['Java', 'REST', 'JUnit', 'Jest', 'TDD'],
  },
  {
    title: 'Store Front (beanTech)',
    meta: 'React · JavaScript',
    desc: "Blank-but-functional storefront template built during internship. Some of my code powers Lima's Coffee Roasters website.",
    tags: ['React', 'JavaScript'],
    links: [
      { label: "Lima's Website", href: 'https://www.limacoffeeroasters.com/collections/coffee' },
      { label: 'Code', href: 'https://github.com/ramscuse/project2' },
    ],
  },
  {
    title: 'Color Coordinate Website',
    meta: 'PHP · JavaScript · SQL · HTML/CSS',
    desc: 'Built from scratch using PHP (Fuel framework), JavaScript for an interactive color painter, and a SQL database for storing/modifying color palettes.',
    tags: ['PHP', 'JavaScript', 'SQL'],
    github: 'https://github.com/ramscuse/school/tree/master/local_html/m2',
  },
  {
    title: 'Tron Game',
    meta: 'Java · JavaFX',
    desc: 'Tron light-cycle game built in Java with JavaFX. Includes custom collision detection, sprite rendering, and a simple AI opponent.',
    tags: ['Java', 'JavaFX'],
    github: 'https://github.com/ramscuse/TronGame/tree/main',
  },
  {
    title: 'TV Show Schedule (C++)',
    meta: 'C++',
    desc: 'A C++ project demonstrating data structure usage and STL for managing and displaying a TV show schedule.',
    tags: ['C++'],
    links: [
      { label: 'Schedule Code', href: 'https://github.com/ramscuse/school/tree/master/cs253/hw6' },
      { label: 'More C++ Projects', href: 'https://github.com/ramscuse/school/tree/master/cs253' },
    ],
  },
  {
    title: 'DETER Projects',
    meta: 'C · Systems Security',
    desc: 'Used the DETER cybersecurity testbed to create and defend against various DOS attacks, most notably an SQL injection attack.',
    tags: ['C', 'Systems Security', 'Networking'],
  },
];

function ProjectCard({ project }) {
  return (
    <div className={`project-card${project.featured ? ' featured' : ''}`}>
      <h3 className="project-card-title">{project.title}</h3>
      <p className="project-card-meta">{project.meta}</p>
      <p className="project-card-desc">{project.desc}</p>
      <div className="project-card-tags">
        {project.tags.map(t => <span key={t} className="project-tag">{t}</span>)}
      </div>
      <div className="project-card-links">
        {project.github && (
          <a className="project-link" href={project.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        )}
        {project.download && (
          <button className="project-link" onClick={() => download(project.download.file)}>
            {project.download.label}
          </button>
        )}
        {project.links && project.links.map(l => (
          <a key={l.label} className="project-link" href={l.href} target="_blank" rel="noopener noreferrer">
            {l.label}
          </a>
        ))}
      </div>
    </div>
  );
}

function Projects() {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Section header fades in
      gsap.from('.projects-section-heading, .projects-section-title', {
        scrollTrigger: {
          trigger: '.projects-body',
          start: 'top 82%',
          toggleActions: 'play none none none',
        },
        opacity: 0,
        y: 20,
        duration: 0.5,
        stagger: 0.1,
        ease: 'power3.out',
      });

      // Each grid animates its cards with a stagger
      gsap.utils.toArray('.projects-grid').forEach((grid) => {
        const cards = grid.querySelectorAll('.project-card');
        gsap.from(cards, {
          scrollTrigger: {
            trigger: grid,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
          opacity: 0,
          y: 32,
          duration: 0.5,
          stagger: 0.1,
          ease: 'power3.out',
        });
      });

      gsap.from('.more-projects-title', {
        scrollTrigger: {
          trigger: '.more-projects-title',
          start: 'top 88%',
          toggleActions: 'play none none none',
        },
        opacity: 0,
        y: 16,
        duration: 0.4,
        ease: 'power2.out',
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="projects-body">
      <p className="projects-section-heading">{'// projects'}</p>
      <h2 className="projects-section-title">Featured Work</h2>
      <div className="projects-grid">
        {featuredProjects.map(p => <ProjectCard key={p.title} project={p} />)}
      </div>

      <h3 className="more-projects-title">More Projects</h3>
      <div className="projects-grid">
        {moreProjects.map(p => <ProjectCard key={p.title} project={p} />)}
      </div>
    </div>
  );
}

export default Projects;
