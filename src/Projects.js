import React, {Component} from 'react';
import MunchStats from './images/munchstats.png';
import Remindful from './images/Remindful.png';
import SpacedRepetition from './images/SpacedRepetition.png';

export default class Projects extends Component{
  render(){
    return(
      <section className="project flex">
        <div className="project-container">
          <h2>Remindful</h2>
          <div className="image-container">
            <img src={Remindful} alt="Remindful project screenshot" className="project-screenshot"/>
          </div>
          <p className="project-description">Remindful allows users to record and write about their personal goals. On the first of every month, users receive an email encouraging them to check on their goals and write about their progress. It gives users a dedicated space to track what's important to them and provides a little nudge to check in once a month without the stress of constant notifications. Life is busy, but Remindful can help remind users what they care about.</p>
          <p className="tech-used">Technologies used:</p>
          <p className="tech-used">Client: HTML, CSS, JavaScript, React, React Context API, React Router, JWT. Deployed with Zeit Now.</p>
          <p className="tech-used">Server/Database: Node.js, Express, PostgreSQL, JWT, Heroku Scheduler, Nodemailer, Postgrator, Chai, Mocha, Supertest. Deployed using Heroku.</p>
          <div className="project-links">
            <a href="https://github.com/DavidHaugen/remindful-client" target="_blank" rel="noopener noreferrer"><button className="button-border left-button">View repo</button></a>
            <a href="https://remindful.now.sh/" target="_blank" rel="noopener noreferrer"><button className="button-solid right-button">View live</button></a>
          </div>
        </div>
        <div className="project-container">
          <h2>Spaced-Repetition</h2>
          <div className="image-container">
            <img src={SpacedRepetition} alt="Spaced-Repetition project screenshot" className="project-screenshot"/>
          </div>
          <p className="project-description">The spaced repetition technique helps users learn a new language by focusing on the words that give them the most trouble. This app tracks tracks user answers over time; if users get a word wrong, they are presented with that word more often. As the user masters a word it is presented less and less frequently.</p>
          <p className="tech-used">Technologies used:</p>
          <p className="tech-used">Client: React, React Context API, React Router, JWT, HTML, CSS, JavaScript, Cypress. Deployed with Zeit Now</p>
          <p className="tech-used">Server: Node.js, Express, PostgreSQL, Postgrator, JWT, Chai, Mocha, Supertest. Deployed using Heroku.</p>
          <div className="project-links">
            <a href="https://github.com/DavidHaugen/Spaced-repetition-client" target="_blank" rel="noopener noreferrer"><button className="button-border left-button">View repo</button></a>
            <a href="https://spaced-repetition.now.sh/" target="_blank" rel="noopener noreferrer"><button className="button-solid right-button">View live</button></a>
          </div>
        </div>
        <div className="project-container">
          <h2>Munch Stats</h2>
          <div className="image-container">
            <img src={MunchStats} alt="Project screenshot" className="project-screenshot"/>
          </div>
          <p className="tech-used">Technologies used:</p>
          <p className="tech-used">Client: React, React Context API, React Router, JWT, HTML, CSS, JavaScript, Jest, Enzyme, Chart.js. Deployed with Zeit Now.</p>
          <p className="tech-used">Server: Node.js, Express, PostgreSQL, Postgrator, JWT, Chai, Mocha, Supertest, Travis CI. Deployed using Heroku.</p>
          <p className="project-description">Munch Stats is a nutrition tracking app with a that allows users to create, edit, and log their own meals. Users can set daily goals for calories, carbohydrates, fat, and protein and track how their daily consumption compares to their own personal goals. Munch Stats makes it easy to track the meals you make regularly, helping you stay healthy and happy.</p>
          <div className="project-links">
            <a href="https://github.com/thinkful-ei-armadillo/munchstats-client" target="_blank" rel="noopener noreferrer"><button className="button-border left-button">View repo</button></a>
            <a href="https://munchstats.now.sh/" target="_blank" rel="noopener noreferrer"><button className="button-solid right-button">View live</button></a>
          </div>
        </div>
      </section>
      
      
    );
  }
}