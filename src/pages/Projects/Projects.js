import React from 'react'
import ProjectPage from './ProjectPage';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import './Projects.css'

const Projects = () => {
  return (
    <div className="project-body">
        <ProjectPage heading="PROJECTS." text="Some of my recent stuff"/>
        <div className="project-cards-container">
          <ProjectCard/>
          </div>
    </div>
  )
}

export default Projects