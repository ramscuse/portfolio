import React from 'react';
import '../css/Project.css';
import Schedule from '../imgs/Schedule.png'
import Search from '../imgs/Search.png'
import list from '../imgs/list.png'
import menu from '../imgs/menu.png'
import select from '../imgs/select.png'
import game from '../imgs/game.png'
import color from '../imgs/color.png'

function Project() {
  return (
    <div className='projectBody'>
      <div id='trip'>
        <h2>Trip Itinerary</h2>
        <p>
          This was a class project that spanned the length of an entire semester. I worked in a team of 3 people throughout the year. 
          We used a Scrum based system to build a working product with each team member acting as a different role each week. Unfortunatly, 
          there is no public version of the site that can be easily viewed.
        </p>
        <img id='Schedule' src={Schedule} alt='Itinerary Home'/>
        <p>
          This was the main page of the website where you can easily view each place in your trip either in a list or on the map. There is 
          also an option to download the trip to your local computer or upload from your computer.
        </p>
        <img id='Search' src={Search} alt='Itinerary Search'/>
        <p>
          The search bar we built makes verifies and preforms SQL searches in a database and returns the top 5 results. It is capable of searching 
          names of places and coordinates.
        </p>
        <img id='List' src={list} alt='Itinerary List'/>
        <p>
          Here is an example of what the list of places would look like once the user adds places to their trip. If you want to learn 
          more about the project, feel free to reach out to me or check out the code below.
        </p>
        <a href='https://github.com/ramscuse/cs314' target='_blank' rel="noopener noreferrer">
          <button>Check out the Code</button>
        </a>
      </div>
      <div id='portfolio'>
        <h2>Portfolio Website</h2>
        <p>
          This is the website you are currently browser! I hope you are enjoying it so far.
        </p>
        <p>
          I built this website from the group up using React for the front-end and AWS for the back-end. The code is being hosted on github 
          and deployed using AWS.
        </p>
        <a href='https://github.com/ramscuse/portfolio' target='_blank' rel="noopener noreferrer">
          <button>Check out the Code</button>
        </a>
      </div>
      <div id='beantech'>
        <h2>Store Front</h2>
        <p>
          During my internship, my most notable project was to build a blank but functional store front small business could fill in with
          their product. Some of my code was used to create the Lima's Coffee website.
        </p>
        <a href='https://www.limacoffeeroasters.com/collections/coffee' target='_blank' rel="noopener noreferrer">Lima's Website</a>
        <a href="https://github.com/ramscuse/project2" target='_blank' rel="noopener noreferrer">
          <button>Check out the Code</button>
        </a>
      </div>
      <div id='color'>
        <h2>Color Coordinate Website</h2>
        <img id='color' src={color} alt='Color Coordinate Website'/>
        <a href="https://github.com/ramscuse/school/tree/master/local_html/m2" target='_blank' rel="noopener noreferrer">
          <button>Check out the Code</button>
        </a>
      </div>
      <div id='deter'>
        <h2>DETER Projects</h2>
      </div>
      <div id='tron'>
        <h2>Tron Game</h2>
        <img id='menu' src={menu} alt='Game Menu'/>
        <img id='select' src={select} alt='Game Select'/>
        <img id='game' src={game} alt='Game'/>
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
