import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import portfolioPortrait from './images/portfolio-portrait.png';


export default class Home extends Component{
  render(){
    return(
      <section className="home">

        <img id='portrait' src={portfolioPortrait} alt='David Haugen' ></img>
        <p className="about-me-paragraph">
        Hi, I'm David. I'm a full-stack developer currently living in Minneapolis, MN. I'm always trying to learn something new. If I'm not working, I'm probably neck-deep in a new hobby. Lately it's been a math-inspired sculpture project, playing guitar, and running with my dog, Odin. Last year I decided to add Web Development to the list, and I fell in head-first. Now, I've just completed Thinkful's full-stack web development program and am looking to build a career using my curiosity to solve problems with the latest trends in the industry. 
        </p>
        <p>
            I'm currently looking to join a team of passionate developers where I can continue to learn and grow as a developer. Feel free to check out my work below and reach out if you see something you like.
        </p>
        <div>
          <a href="mailto:haugen.dj@gmail.com" target='_blank' rel='noopener noreferrer'><button className="button-solid left-button">Email me</button></a>
          <Link to="/projects"><button className="button-border right-button" >Projects</button></Link>
        </div>
      </section>
    );
  }
}