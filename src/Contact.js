import React, {Component} from 'react';
import GithubLogo from './images/Github-logo.png';
import MailImage from './images/mail-gray.png';
import LinkedinLogo from './images/linkedin-logo-transparent-rescaled.png';
import portfolioPortrait from './images/portfolio-portrait.png';


export default class Contact extends Component{
  render(){
    return(
      <section className="about-me flex">
        <p className="about-me-paragraph">
        I'm currently looking to join a team of passionate developers where I can continue to learn and grow as a developer. If you're looking to add a curious, driven developer to your team (or if you just want to chat!), feel free to reach out using any of the links below. 
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