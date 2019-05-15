import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Home extends Component{
  render(){
    return(
      <section className="home">
        <p id="home-paragraph">
        Hi, I'm David. I'm a full-stack developer currently living in Minneapolis, MN. I love dogs, learning, and learning about dogs. Feel free to check out my work below and email me or if you see something you like.
        </p>
        <div>
          <a href="mailto:haugen.dj@gmail.com" target='_blank' rel='noopener noreferrer'><button className="button-solid left-button">Email me</button></a>
          <Link to="/projects"><button className="button-border right-button" >Projects</button></Link>
        </div>
      </section>
    );
  }
}