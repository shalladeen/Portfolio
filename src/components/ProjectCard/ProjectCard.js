import React from 'react'
import './ProjectCard.css';
import logo192 from '../ProjectCard/logo192.png';
import { NavLink } from 'react-router-dom';
import { FiGithub } from "react-icons/fi";

const ProjectCard = () => {
  return (
    <div className="full-project-container">
      <div className="project-container">

        <NavLink to="https://github.com/shalladeen/portfolio" target="_blank" className="project-card">
          <img src={logo192} alt="image" />
          <div className="detail-container">
            <h2 className="project-title">Project Title</h2>
            <div className="pro-details">
              <p>This will be the description for the project</p>
              <div className="pro-btns">
                <a href="https://github.com/shalladeen/portfolio" target="_blank" rel="noopener noreferrer" className="source-btn">
                  <FiGithub />
                </a>
            </div>
            </div>
          </div>
          </NavLink>
        
          <NavLink to="https://github.com/shalladeen/portfolio" target="_blank" className="project-card">
          <img src={logo192} alt="image" />
          <div className="detail-container">
            <h2 className="project-title">Project Title 2</h2>
            <div className="pro-details">
              <p>This will be the description for the project</p>
              <div className="pro-btns">
                <a href="https://github.com/shalladeen/portfolio" target="_blank" rel="noopener noreferrer" className="source-btn">
                  <FiGithub />
                </a>
            </div>
            </div>
          </div>
          </NavLink>

      </div>
    </div>
  )
}

export default ProjectCard