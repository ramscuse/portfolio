import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import './App.css';

function App() {
  return (
      <div>
        <nav className="navbar">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" exact element= { <Home/> } />
          <Route path="/about" element= { <About/> } />
          <Route path="/contact" element= { <Contact/> } />
        </Routes>
      </div>
  );
}

export default App;
