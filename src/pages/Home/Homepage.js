import React from 'react'
import './Home.css'
import test from '../../images/test1.svg';
import { FaAngleDown } from 'react-icons/fa'


const Homepage = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects-section');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className = "Home">
     <body className = "home-body">
      <div className="home-text-container">
      <p className="greeting">Hi there, <strong className="name">I'm Shawna!</strong></p>
      <p className="home-desc">I am a Software Engineering Student</p>
      <button className="projects-button" onClick={scrollToProjects}>
          My Projects <FaAngleDown />
        </button>
      </div>
      <img src={test}/>
   </body>
  </div>
  )
}

export default Homepage