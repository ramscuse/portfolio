import React, { useLayoutEffect } from 'react';
import '../css/About.css';
import { download } from '../functions/Download';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function About() {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Each top-level about-section fades + rises on scroll
      gsap.utils.toArray('.about-section').forEach((section) => {
        gsap.from(section, {
          scrollTrigger: {
            trigger: section,
            start: 'top 82%',
            toggleActions: 'play none none none',
          },
          opacity: 0,
          y: 30,
          duration: 0.6,
          ease: 'power3.out',
        });
      });

      // Timeline items slide in from the left, staggered
      gsap.from('.timeline-item', {
        scrollTrigger: {
          trigger: '.timeline',
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        opacity: 0,
        x: -24,
        duration: 0.5,
        stagger: 0.15,
        ease: 'power3.out',
      });

      // Skill tag groups pop in staggered
      gsap.from('.skills-group', {
        scrollTrigger: {
          trigger: '.skills-group',
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
        opacity: 0,
        y: 16,
        duration: 0.4,
        stagger: 0.1,
        ease: 'power2.out',
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="about-body">
      <button className="btn-resume" onClick={() => download('https://ailhajmuhmtnb8vk.public.blob.vercel-storage.com/JamesonWalter_Resume.pdf?download=1')}>
        Download Resume
      </button>

      <div className="about-section">
        <p className="section-heading">{'// skills'}</p>
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-group">
          <p className="skills-group-label">Languages</p>
          <div className="tags">
            {['TypeScript', 'JavaScript', 'Rust', 'Java', 'Python', 'Bash', 'C++', 'C', 'C#'].map(s => (
              <span key={s} className="tag">{s}</span>
            ))}
          </div>
        </div>
        <div className="skills-group">
          <p className="skills-group-label">Frameworks</p>
          <div className="tags">
            {['React', 'Actix', 'MUI', 'TanStack Query', 'Next.js', 'Express', 'Node.js', 'Tailwind CSS'].map(s => (
              <span key={s} className="tag">{s}</span>
            ))}
          </div>
        </div>
        <div className="skills-group">
          <p className="skills-group-label">Cloud &amp; Infra</p>
          <div className="tags">
            {['AWS Lambda', 'AWS EC2', 'AWS Step Functions', 'S3', 'GCP', 'Docker', 'GitHub Actions'].map(s => (
              <span key={s} className="tag">{s}</span>
            ))}
          </div>
        </div>
        <div className="skills-group">
          <p className="skills-group-label">Databases</p>
          <div className="tags">
            {['PostgreSQL', 'MySQL', 'Prisma'].map(s => (
              <span key={s} className="tag">{s}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="about-section">
        <p className="section-heading">{'// experience'}</p>
        <h2 className="section-title">Work Experience</h2>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-header">
              <h3 className="timeline-title">Software Engineer</h3>
              <span className="timeline-date">Jun 2024 – Present</span>
            </div>
            <p className="timeline-company">SpaceNav — Boulder, CO</p>
            <ul>
              <li>Engineered dynamic customer-facing apps used by 25 satellite operator organizations for orbit-determination, risk assessment, and maneuver-planning.</li>
              <li>Built a Jobs management interface — input builder, result viewer, and reusable data-visualization components — that replaced manual AWS Step Functions console navigation, making job-execution workflows accessible to non-engineers.</li>
              <li>Maintained and developed a RESTful API in Rust governing 25+ micro-services, 50+ Lambdas, and external customer integrations.</li>
              <li>Designed and implemented the API-key authentication system and contributed to the permission model on SpaceNav's Rust/Actix core integration API, letting external customers integrate with our platform.</li>
              <li>Scaled a Rust Lambda data-replication service from ~200 to ~60,000 rows per run using Rayon parallelism and async concurrency, fitting Lambda's 15-minute timeout to enable full-catalog AWS MySQL to GCP VM sync.</li>
              <li>Created AWS Step Functions workflows for data-processing pipelines, building input-shim Lambdas that feed downstream MATLAB compute jobs and scheduled Lambdas that ingest external space-weather feeds.</li>
              <li>Led an ongoing migration of legacy class-based JavaScript components to functional TypeScript with TanStack Query and MUI, modernizing the codebase's data-fetching and state management.</li>
              <li>Supported company-wide on-call across AWS Lambda and GCP Compute Engine fleets, authoring shared Jupyter runbooks that cut mean time-to-resolution for recurring incidents by an estimated ~50%.</li>
              <li>Pioneered Claude Code adoption across a 30-engineer org by authoring shared skills, prompt guardrails, and unit-test-generation tooling.</li>
            </ul>
          </div>
          <div className="timeline-item">
            <div className="timeline-header">
              <h3 className="timeline-title">Software Engineering Intern</h3>
              <span className="timeline-date">May 2022 – Aug 2022</span>
            </div>
            <p className="timeline-company">beanTech Solutions — Fort Collins, CO</p>
            <ul>
              <li>Developed full-stack client features in JavaScript and Java, including a 3D drone-imagery map viewer that enabled remote construction site monitoring for stakeholders across multiple project phases.</li>
              <li>Worked in an Agile team environment using GitHub for version control and iterative delivery.</li>
              <li>Applied Clean Code techniques to improve readability, maintainability, and team collaboration.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="about-section">
        <p className="section-heading">{'// education'}</p>
        <h2 className="section-title">Education</h2>
        <div className="education-card">
          <h3>Colorado State University</h3>
          <p className="edu-dates">August 2020 – May 2024</p>
          <ul>
            <li>Bachelor of Science in Computer Science — Software Engineering concentration</li>
            <li>GPA: 3.6</li>
            <li>Relevant Coursework: Software Engineering, Operating Systems, Systems Security, Modern Web Applications, Systems Analysis &amp; Design, Computer Algorithms, Data Structures, Object-Oriented Design</li>
          </ul>
        </div>
      </div>

      <div className="about-section">
        <p className="section-heading">{'// volunteer'}</p>
        <h2 className="section-title">Volunteer Work</h2>
        <p className="volunteer-text">
          YMSL (Young Men's Service League) is an organization that assists across Colorado to better
          our community and improve mother-son relationships. My mom and I have volunteered at homeless
          shelters, elder homes, Homeward Alliance, Respite Care, and many more. What we do at YMSL is
          the proudest and most rewarding work I have ever done.
        </p>
      </div>
    </div>
  );
}

export default About;
