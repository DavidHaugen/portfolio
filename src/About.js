import React, {Component} from 'react';
import GithubLogo from './images/Github-logo.png';
import MailImage from './images/mail-gray.png';
import LinkedinLogo from './images/linkedin-logo-transparent-rescaled.png';
import portfolioPortrait from './images/portfolio-portrait.png';


export default class About extends Component{
  render(){
    return(
      <section className="about-me flex">
        <img id='portrait' src={portfolioPortrait} alt='David Haugen' ></img>
        <p className="about-me-paragraph">
            I'm always trying to learn something new. If I'm not working, I'm probably neck-deep in a new hobby. Lately it's been a math-inspired sculpture project, playing guitar, and running with my dog, Odin. Last year I decided to add Web Development to the list, and I fell in head-first. Now, I've just completed Thinkful's full-stack web development program and am looking to build a career using my curiosity to solve problems with the latest trends in the industry. 
        </p>
        <p>
            I'm currently looking to join a team of passionate developers where I can continue to learn and grow as a developer. If you're looking to add a curious, driven developer to your team, feel free to reach out to me using any of the links below.
        </p>
        <div className="technologies-container flex">
          <a href="https://github.com/DavidHaugen" target="_blank" rel="noopener noreferrer" ><img src={GithubLogo} alt="Github logo" className="contact-logo"/></a>
          <a href="mailto:haugen.dj@gmail.com" target="_blank" rel="noopener noreferrer"><img src={MailImage} alt="An envelope"className="contact-logo"/></a>
          <a href="https://www.linkedin.com/in/haugen-david" target="_blank" rel="noopener noreferrer"><img src={LinkedinLogo} alt="Linkedin logo"className="contact-logo"/></a>
        </div>
      </section>
    );
  }
}