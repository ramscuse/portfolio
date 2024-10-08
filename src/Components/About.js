import React from "react";
import "../css/About.css";
import { download } from "../functions/Download";

function About() {
  function Rating(stars) {
    let starlist = [];

    for (let i = 0; i < 5; i++) {
      if (i < stars) {
        starlist.push(<div key={i} class="star"></div>);
      } else {
        starlist.push(<div key={i} class="staropen"></div>);
      }
    }

    return <div class="starcontainer">{starlist}</div>;
  }

  return (
    <div className="aboutBody">
      <button id="resumedownload" onClick={() => download("JamesonWResumeWebsite.pdf", "JamesonWResume")}>
        Download My Resume
      </button>

      <div id="intrests">
        <h2>My Intrests</h2>
        <ul class="list">
          <li class="listitem">Programming</li>
          <li class="listitem">Basketball</li>
          <li class="listitem">Movies</li>
          <li class="listitem">Gaming</li>
          <li class="listitem">Golf</li>
          <li class="listitem">Sneakers</li>
          <li class="listitem">Legos</li>
          <li class="listitem">Hiking</li>
        </ul>
      </div>

      <div id="skills">
        <h2>My Skills</h2>
        <ul class="list listskills">
          <li class="listitem listitemskills">Java (5+ years) {Rating(4)}</li>
          <li class="listitem listitemskills">C++ (3+ years) {Rating(3)}</li>
          <li class="listitem listitemskills">React (4+ years) {Rating(5)}</li>
          <li class="listitem listitemskills">SQL (3+ years) {Rating(4)}</li>
          <li class="listitem listitemskills">HTML (2+ years) {Rating(4)}</li>
          <li class="listitem listitemskills">CSS (2+ years) {Rating(3)}</li>
          <li class="listitem listitemskills">PHP (1+ year) {Rating(2)}</li>
          <li class="listitem listitemskills">Python (3+ years) {Rating(3)}</li>
          <li class="listitem listitemskills">C (2+ years) {Rating(3)}</li>
          <li class="listitem listitemskills">AWS (1- year) {Rating(2)}</li>
        </ul>
      </div>

      <div id="skillsmobile">
        <h2>My Skills</h2>
        <ul class="list listskills">
          <li class="listitem listitemskills">Java {Rating(4)}</li>
          <li class="listitem listitemskills">C++ {Rating(3)}</li>
          <li class="listitem listitemskills">React {Rating(5)}</li>
          <li class="listitem listitemskills">SQL {Rating(4)}</li>
          <li class="listitem listitemskills">HTML {Rating(4)}</li>
          <li class="listitem listitemskills">CSS {Rating(3)}</li>
          <li class="listitem listitemskills">PHP {Rating(2)}</li>
          <li class="listitem listitemskills">Python {Rating(3)}</li>
          <li class="listitem listitemskills">C {Rating(3)}</li>
          <li class="listitem listitemskills">AWS {Rating(2)}</li>
        </ul>
      </div>

      <div id="experience">
        <h2>Experience</h2>
        <div>
          <div id="experiencetitle">
            <h4>Software Engineer I</h4>
            <p>May 2024 - Current</p>
          </div>
          <div id="experiencename">
            <p>SpaceNav</p>
            <p>Boulder, CO</p>
          </div>
          <ul>
            <li>
              Using C++ and python tools to implement Aerospace Engineering and
              data management algorithms to determine flight paths and measure
              collision risk in a streamlined, timely manner.
            </li>
            <li>
              Built an intuitive User Interface that displays real time data,
              graphs, and more that clients can analyze
            </li>
            <li>
              Created and maintained Rust APIs to manage data flow between all
              SpaceNav products.
            </li>
            <li>Helped transition backend servers to AWS.</li>
            <li>
              Developed solutions to real world problems for satellite
              navigation (operational support).
            </li>
          </ul>
        </div>
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
            <li>
              Programmed in a team environment using GitHub and the Agile
              development Process.
            </li>
            <li>
              Developed front end web applications using React and Potree with
              seamless backend integration.
            </li>
            <li>Fast paced environment.</li>
            <li>
              Utilized Clean Code Techniques to make code easier to
              read/understand.
            </li>
            <li>
              Gave me the skills to collaborate in a team and make a profitable
              product.
            </li>
          </ul>
        </div>
        <div>
          <div id="experiencetitle">
            <h4>Manager</h4>
            <p>August 2021 - May 2024</p>
          </div>
          <div id="experiencename">
            <p>Finish Line</p>
            <p>Fort Collins, CO</p>
          </div>
          <ul>
            <li>Managed and lead teams to reach our daily goals.</li>
            <li>
              Ensured every person in the store would recieve quality customer
              service from either me or my team members
            </li>
            <li>
              Helped diagnos IT issues, such as POS Errors and Networking
              Errors, when they would arrise in store.
            </li>
            <li>
              Created sales forcasts and labor budgets for the week. These would
              allow me to create inclusive schedules that alligned with
              everybodies desired hours.
            </li>
            <li>Awared Employee of the Month 6 times.</li>
          </ul>
        </div>
      </div>

      <div id="education">
        <h2>Education</h2>
        <div id="educationtitle">
          <h4>Colorado State University</h4>
          <p>August 2020 - May 2024</p>
        </div>
        <ul>
          <li>
            Bachelor of Science in Computer Science with a concentration in
            Software Engineering.
          </li>
          <li>GPA: 3.4</li>
          <li>
            Relevant Course Work: Software Engineering, Operating Systems,
            Systems Security, Modern Web Applications, Systems Analysis and
            Design, Computer Algorithms, Data Structures, Oriented Design
          </li>
        </ul>
      </div>

      <div id="volunteer">
        <h2>Volunteer Work</h2>
        <p>
          YMSL (Young Men's Service League) is an organization that assists
          across Colorado to better our community and improve mother-son
          relationships. My mom and I have volunteered at homeless shelters,
          elder homes, Homeward Alliance, Respite Care, and many more. What we
          do at YMSL is the proudest and most rewarding work I have ever done.
        </p>
      </div>
    </div>
  );
}

export default About;
