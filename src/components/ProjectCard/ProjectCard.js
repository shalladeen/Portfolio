import React from 'react'
import './ProjectCard.css';
import logo192 from '../ProjectCard/logo192.png';
import { NavLink } from 'react-router-dom';
import { FiExternalLink } from 'react-icons/fi';

const ProjectCard = () => {
  return (
    <div className="full-project-container">
      <div className="project-container">

        <div className="project-card">
          <img src={logo192} alt="image" />
          <div className="detail-container">
            <h2 className="project-title">Project Title</h2>
          <div className="pro-details">
            <p>This will be the description for the project</p>
          
            <div className="pro-btns">
              <NavLink to="url.com" className="card-btn">View</NavLink>
              <a href="source-url.com" target="_blank" rel="noopener noreferrer" className="source-btn">
                <FiExternalLink /></a>
            </div>
            </div>
          </div>
        </div>

        <div className="project-card">
          <img src={logo192} alt="image" />
          <div className="detail-container">
            <h2 className="project-title">Project Title</h2>
          <div className="pro-details">
            <p>This will be the description for the project</p>
          
            <div className="pro-btns">
              <NavLink to="url.com" className="card-btn">View</NavLink>
              <a href="source-url.com" target="_blank" rel="noopener noreferrer" className="source-btn">
                <FiExternalLink /></a>
            </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default ProjectCard