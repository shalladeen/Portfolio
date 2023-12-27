import React from 'react'
import './ProjectCard.css';
import logo192 from '../ProjectCard/logo192.png';
import { NavLink } from 'react-router-dom';

const ProjectCard = () => {
  return (
    <div className="full-project-container">
      <h1 className="card-heading">Projects</h1>

      <div className="project-container">

        <div className="project-card">
          <img src={logo192} alt="image" />
          <h2 className="project-title">Project Title</h2>
          <div className="pro-details">
            <p>This will be the description for the project</p>
            <div className="pro-btns">
              <NavLink to="url.com" className="card-btn">View</NavLink>
              <NavLink to="url.com" className="card-btn">Source</NavLink>
            </div>
          </div>
        </div>

        <div className="project-card">
          <img src={logo192} alt="image" />
          <h2 className="project-title">Project Title</h2>
          <div className="pro-details">
            <p>This will be the description for the project</p>
            <div className="pro-btns">
              <NavLink to="url.com" className="card-btn">View</NavLink>
              <NavLink to="url.com" className="card-btn">Source</NavLink>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default ProjectCard