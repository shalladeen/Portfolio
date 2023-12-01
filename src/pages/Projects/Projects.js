import React from 'react'

import ProjectPage from './ProjectPage';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

const Projects = () => {
  return (
    <div>
        <Navbar/>
        <ProjectPage heading="PROJECTS." text="Some of my recent stuff"/>
        <ProjectCard/>
        <Footer/>
    </div>
  )
}

export default Projects