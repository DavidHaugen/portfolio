import React, {Component} from 'react';
import AnimalQuiz from './images/animal-quiz.png'
import HtmlLogo from './images/html5-logo-bw-small.png'
import CssLogo from './images/css-logo-gray-small.png'
import JSLogo from './images/javascript-logo-transparent-black-small.png'
import JQLogo from './images/jquery-logo-gray-transparent.png'
import GithubLogo from './images/Github-logo.png'

export default class Projects extends Component{
  render(){
    return(
      <section className="project flex">
      <h2>Animal quiz</h2>
      <div className="image-container">
        <img src={AnimalQuiz} alt="Project screenshot" className="project-screenshot"/>
      </div>
      <div className="technologies-container flex">
        <img src={HtmlLogo} alt="HTML5 logo" className="tech-logo"/>
        <img src={CssLogo} alt="CSS logo" className="tech-logo"/>
        <img src={JSLogo} alt="JavaScript logo" className="tech-logo"/>
        <img src={JQLogo} alt="jQuery logo" className="tech-logo"/>
        <img src={GithubLogo} alt="Github logo" className="tech-logo"/>            
      </div>
      <p className="project-description">Animal Facts Quiz is a clean, simple app that allows users to test themselves on strange animal facts. The app tracks user progress, provides feedback, and provides a summary of user results at the end of the quiz. </p>
      <div className="project-links">
            <a href="https://github.com/DavidHaugen/animal-quiz" target="_blank" rel="noopener noreferrer"><button className="button-border left-button">View repo</button></a>
            <a href="https://davidhaugen.github.io/animal-quiz/" target="_blank" rel="noopener noreferrer"><button className="button-solid right-button">View live</button></a>
      </div>
    </section>
    )
  }
}