import React from 'react';
import '../css/About.css';
import resume from '../downloads/WalterResume.docx'

function About() {
  return (
    <div className='aboutBody'>
        <a href={resume} download='WalterResume' target='_blank'><button id='resumedownload'>Download My Resume</button></a>
      <p>This is the about page of my website.</p>
    </div>
  );
}

export default About;
