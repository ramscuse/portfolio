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
    const file = await Storage.get("JamesonWResumeWebsite.pdf", { download: true });
    downloadFile(file.Body, 'JamesonWResume');
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
          <li class='listitem listitemskills'>Java (4+ years) {Rating(4)}</li>
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
          <li class='listitem listitemskills'>Java {Rating(4)}</li>
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

      <div id="experience">
        <h2>Experience</h2>
        <div>
          <div id="experiencetitle">
            <h4>Software Engineering Intern</h4>
            <p>May 2022 - Aug 2022</p>
          </div>
          <div id="experiencename">
            <p>beanTech Solutions</p>
            <p>Fort Collins, CO</p>
          </div>
          <ul>
            <li>Programmed in a team environment using GitHub and the Agile development Process.</li>
            <li>Developed front end web applications using React and Potree with seamless backend integration.</li>
            <li>Fast paced environment.</li>
            <li>Utilized Clean Code Techniques to make code easier to read/understand.</li>
            <li>Gave me the skills to collaborate in a team and make a profitable product.</li>
          </ul>
        </div>
        <div>
          <div id="experiencetitle">
            <h4>Manager</h4>
            <p>Aug 2021 - Current</p>
          </div>
          <div id="experiencename">
            <p>Finish Line</p>
            <p>Fort Collins, CO</p>
          </div>
          <ul>
            <li>Managed and lead teams to reach our daily goals.</li>
            <li>Ensured every person in the store would recieve quality customer service from either me or my team members</li>
            <li>Helped diagnos IT issues, such as POS Errors and Networking Errors, when they would arrise in store.</li>
            <li>Created sales forcasts and labor budgets for the week. These would allow me to create inclusive schedules that alligned with everybodies desired hours.</li>
            <li>Awared Employee of the Month 6 times.</li>
          </ul>
        </div>
      </div>

      <div id="volunteer">
        <h2>Volunteer Work</h2>
        <p>YMSL (Young Men's Service League) is an organization that assists across Colorado to better
             our community and improve mother-son relationships. My mom and I have volunteered at homeless
              shelters, elder homes, Homeward Alliance, Respite Care, and many more. 
              What we do at YMSL is the proudest and most rewarding work I have ever done.</p>
      </div>
    </div>
  );
}

export default About;
