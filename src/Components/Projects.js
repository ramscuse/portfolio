import React from 'react';
import '../css/Project.css';

import { Storage } from "aws-amplify";

function Project() {
  return (
    <div className='projectBody'>
      <div id='trip'>
        <h2>Trip Itinerary</h2>
      </div>
      <div id='portfolio'>
        <h2>Portfolio Website</h2>
      </div>
      <div id='beantech'>
        <h2>Store Front</h2>
      </div>
      <div id='color'>
        <h2>Color Coordinate Website</h2>
      </div>
      <div id='deter'>
        <h2>DETER Projects</h2>
      </div>
      <div id='tron'>
        <h2>Tron Game</h2>
      </div>
      <div id='schedule'>
        <h2>TV Show Schedule</h2>
        <a href='https://github.com/ramscuse/school/tree/master/cs253/hw6'>

        </a>
        <a href='https://github.com/ramscuse/school/tree/master/cs253'>

        </a>
      </div>
      <div id='operating'>
        <h2>C Program</h2>
        <a href='https://github.com/ramscuse/school/tree/master/cs370/hw2'>

        </a>
      </div>
    </div>
  );
}

export default Project;
