import React from 'react';
import '../css/About.css';

import { Storage } from "aws-amplify";

function About() {

  function Rating(stars) {
    let starlist = [];

    for (let i = 0; i < 5; i++) {
      if (i < stars) {
        starlist.push(<div key={i} class='star'></div>)
      } else {
        starlist.push(<div key={i} class='staropen'></div>)
      }
    }

    return (
      <div class='starcontainer'>
        {starlist}
      </div>
    )
  }

  function downloadFile(file, filename) {
    const url = URL.createObjectURL(file);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename || 'download';
    const clickHandler = () => {
      setTimeout(() => {
        URL.revokeObjectURL(url);
        a.removeEventListener('click', clickHandler);
      }, 150);
    };
    a.addEventListener('click', clickHandler, false);
    a.click();
  }

  async function download() {
    const file = await Storage.get("WalterResume.pdf", { download: true });
    downloadFile(file.Body, 'WalterResume');
  }

  return (
    <div className='aboutBody'>
      <button id='resumedownload' onClick={download}>Download My Resume</button>

      <div id='intrests'>
        <h2>My Intrests</h2>
        <ul class='list'>
          <li class='listitem'>Programming</li>
          <li class='listitem'>Basketball</li>
          <li class='listitem'>Movies</li>
          <li class='listitem'>Gaming</li>
          <li class='listitem'>Golf</li>
          <li class='listitem'>Sneakers</li>
          <li class='listitem'>Legos</li>
          <li class='listitem'>Hiking</li>
        </ul>
      </div>

      <div id='skills'>
        <h2>My Skills</h2>
        <ul class='list listskills'>
          <li class='listitem listitemskills'>Java (4+ years) {Rating(3)}</li>
          <li class='listitem listitemskills'>C++ (2+ years) {Rating(3)}</li>
          <li class='listitem listitemskills'>React (3+ years) {Rating(5)}</li>
          <li class='listitem listitemskills'>SQL (2+ years) {Rating(2)}</li>
          <li class='listitem listitemskills'>HTML (2+ years) {Rating(4)}</li>
          <li class='listitem listitemskills'>CSS (2+ years) {Rating(3)}</li>
          <li class='listitem listitemskills'>PHP (1+ year) {Rating(3)}</li>
          <li class='listitem listitemskills'>Python (3+ years) {Rating(2)}</li>
          <li class='listitem listitemskills'>C (2+ years) {Rating(3)}</li>
          <li class='listitem listitemskills'>AWS (1- year) {Rating(2)}</li>
        </ul>
      </div>

      <div id='skillsmobile'>
        <h2>My Skills</h2>
        <ul class='list listskills'>
          <li class='listitem listitemskills'>Java {Rating(3)}</li>
          <li class='listitem listitemskills'>C++ {Rating(3)}</li>
          <li class='listitem listitemskills'>React {Rating(5)}</li>
          <li class='listitem listitemskills'>SQL {Rating(2)}</li>
          <li class='listitem listitemskills'>HTML {Rating(4)}</li>
          <li class='listitem listitemskills'>CSS {Rating(3)}</li>
          <li class='listitem listitemskills'>PHP {Rating(3)}</li>
          <li class='listitem listitemskills'>Python {Rating(2)}</li>
          <li class='listitem listitemskills'>C {Rating(3)}</li>
          <li class='listitem listitemskills'>AWS {Rating(2)}</li>
        </ul>
      </div>
    </div>
  );
}

export default About;
