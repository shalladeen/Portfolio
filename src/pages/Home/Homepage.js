import React from 'react';
import './Home.css';
import { ReactComponent as MePortfolio } from '../../images/me-Portfolio.svg';
import { ReactComponent as Blob } from '../../images/blob.svg';
import { FaAngleDown } from 'react-icons/fa';

const Homepage = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects-section');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="Home">
  <div className="home-body">
    <div className="svg-and-greeting-container">
    <div className="svg-container" >
  <Blob className="blob-svg" />
  <div className="me-Portfolio-clip">
    <MePortfolio className="me-Portfolio-svg" />
  </div>
</div>
      <div className="home-text-container">
        <p className="greeting">Hi there, <strong className="name">I'm Shawna!</strong></p>
        <p className="home-desc">I am a Software Engineering Student</p>
        <button className="projects-button" onClick={scrollToProjects}>
          My Projects <FaAngleDown />
        </button>
      </div>
    </div>
  </div>
</div>
  );
};

export default Homepage;
