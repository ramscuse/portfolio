import React from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Project from './Components/Projects';
import Contact from './Components/Contact';
import './css/App.css';

function App() {
  return (
    <div id="page">
      <Navbar />
      <section id="home"><Home /></section>
      <section id="about"><About /></section>
      <section id="projects"><Project /></section>
      <section id="contact"><Contact /></section>
    </div>
  );
}

export default App;
