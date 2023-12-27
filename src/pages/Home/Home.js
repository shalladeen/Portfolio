import React from 'react'
import './Home.css'
import "@fontsource/comfortaa";
import Homepage from './Homepage';
import Navbar from '../../components/Navbar/Navbar';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import Footer from '../../components/Footer/Footer';


const Home = () => {
  return (
    <div className = "Home-Content">
      <Navbar/>
      <Homepage/>
      <div id="projects-section">
       <ProjectCard/>
      </div>
      <Footer/>
    </div>
  )
}

export default Home