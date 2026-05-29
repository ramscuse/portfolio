import React, { useLayoutEffect, useState } from 'react';
import '../css/Contact.css';
import { CONTACT_EMAIL, buildMailto } from '../utils/contact';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = form.subject.trim() || `Portfolio inquiry from ${form.name || 'a visitor'}`;
    const bodyLines = [
      form.message.trim(),
      '',
      '—',
      form.name && `Name: ${form.name}`,
      form.email && `Email: ${form.email}`,
    ].filter(Boolean);
    window.location.href = buildMailto({ subject, body: bodyLines.join('\n') });
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.contact-section-heading, .contact-section-title, .contact-intro', {
        scrollTrigger: {
          trigger: '.contact-body',
          start: 'top 82%',
          toggleActions: 'play none none none',
        },
        opacity: 0,
        y: 20,
        duration: 0.5,
        stagger: 0.1,
        ease: 'power3.out',
      });

      gsap.from('.contact-card', {
        scrollTrigger: {
          trigger: '.contact-card',
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
        opacity: 0,
        y: 32,
        duration: 0.5,
        ease: 'power3.out',
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="contact-body">
      <p className="contact-section-heading">{'// contact'}</p>
      <h2 className="contact-section-title">Get In Touch</h2>
      <p className="contact-intro">
        Have a question, an opportunity, or just want to say hi? Drop a message below and it'll
        open in your email client — or reach me directly at{' '}
        <a className="contact-inline-link" href={buildMailto()}>{CONTACT_EMAIL}</a>.
      </p>

      <form className="contact-card" onSubmit={handleSubmit}>
        <div className="contact-field-row">
          <div className="contact-field">
            <label htmlFor="contact-name">Name</label>
            <input
              id="contact-name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
              required
            />
          </div>
          <div className="contact-field">
            <label htmlFor="contact-email">Your email</label>
            <input
              id="contact-email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              required
            />
          </div>
        </div>

        <div className="contact-field">
          <label htmlFor="contact-subject">Subject</label>
          <input
            id="contact-subject"
            name="subject"
            type="text"
            value={form.subject}
            onChange={handleChange}
            placeholder="What's this about? (optional)"
          />
        </div>

        <div className="contact-field">
          <label htmlFor="contact-message">Message</label>
          <textarea
            id="contact-message"
            name="message"
            rows={5}
            value={form.message}
            onChange={handleChange}
            placeholder="Write your message..."
            required
          />
        </div>

        <button type="submit" className="contact-submit">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
