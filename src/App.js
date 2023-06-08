import React from 'react';
import { Routes, Route} from 'react-router-dom';
import Navbar from './Components/Navbar'
import Home from './Components/Home';
import About from './Components/About';
import Project from './Components/Projects';
import './css/App.css';

function App() {
  return (
      <div id='page'>
        <Navbar/>
        <Routes>
          <Route path="/" exact element= { <Home/> } />
          <Route path="/About" element= { <About/> } />
          <Route path="/Projects" element= { <Project/> } />
        </Routes>
      </div>
  );
}

export default App;
