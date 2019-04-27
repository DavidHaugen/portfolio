import React, {Component} from 'react';
import { Link } from 'react-router-dom';

export default class Nav extends Component{
  render(){
    // return (
    //   <nav role="navigation" className="flex" id="nav-list">
    //     <ul className="flex">
    //       <li>
    //           <Link to="/" className="nav-link" id="home-link">David Haugen</Link>
    //       </li>
    //       <li>
    //           <Link to="/projects" className="nav-link" id="projects-link">Projects</Link>
    //       </li>
    //       <li>
    //           <Link to="/about" className="nav-link" id="about-link">About me</Link>
    //       </li>
    //     </ul>
    //   </nav>
    // )
    return (
      <nav role="navigation" className="flex" id="nav-list">
        <Link to="/" className="nav-link" id="home-link">David Haugen</Link>
        <Link to="/projects" className="nav-link" id="projects-link">Projects</Link>
        <Link to="/about" className="nav-link" id="about-link">About me</Link>
      </nav>
    );
  }
}

