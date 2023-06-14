import React from 'react';
import '../css/Project.css';

import { Storage } from "aws-amplify";

function Project() {
  return (
    <div className='projectBody'>
      <div id='trip'>
        <h2>Trip Itinerary</h2>
        <a href='https://github.com/ramscuse/cs314' target='_blank' rel="noopener noreferrer">
          <button>Check out the Code</button>
        </a>
      </div>
      <div id='portfolio'>
        <h2>Portfolio Website</h2>
        <a href='https://github.com/ramscuse/portfolio' target='_blank' rel="noopener noreferrer">
          <button>Check out the Code</button>
        </a>
      </div>
      <div id='beantech'>
        <h2>Store Front</h2>
        <a href="https://github.com/ramscuse/project2" target='_blank' rel="noopener noreferrer">
          <button>Check out the Code</button>
        </a>
      </div>
      <div id='color'>
        <h2>Color Coordinate Website</h2>
        <a href="https://github.com/ramscuse/school/tree/master/local_html/m2" target='_blank' rel="noopener noreferrer">
          <button>Check out the Code</button>
        </a>
      </div>
      <div id='deter'>
        <h2>DETER Projects</h2>
      </div>
      <div id='tron'>
        <h2>Tron Game</h2>
        <a href='https://github.com/ramscuse/TronGame/tree/main' target='_blank' rel="noopener noreferrer">
          <button>Check out the Code</button>
        </a>
      </div>
      <div id='schedule'>
        <h2>TV Show Schedule</h2>
        <a href='https://github.com/ramscuse/school/tree/master/cs253/hw6' target='_blank' rel="noopener noreferrer">
          <button>Check out the Code</button>
        </a>
        <br/>
        <a href='https://github.com/ramscuse/school/tree/master/cs253' target='_blank' rel="noopener noreferrer">
          <button>Check more C++ Projects</button>
        </a>
      </div>
      <div id='operating'>
        <h2>C Program</h2>
        <a href='https://github.com/ramscuse/school/tree/master/cs370/hw2' target='_blank' rel="noopener noreferrer">
          <button>Check out the Code</button>
        </a>
      </div>
    </div>
  );
}

export default Project;
