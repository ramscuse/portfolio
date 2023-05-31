import React from 'react';
import '../css/Home.css'
import photo1 from '../imgs/headshot.jpg'

function Home() {
  return (
    <div className='homebody'>
      <h1>Welcome to My Portfolio</h1>
      <img id='headshot' src={photo1} alt='Head shot'/>
      <div id='txt'>
        <p>Hello! My name is Jameson Walter. I am a student at Colorado State University. I hope through navigating through my website you can learn more about me.</p>
      </div>
    </div>
  );
}

export default Home;
