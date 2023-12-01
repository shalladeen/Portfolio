import React from 'react'
import './Home.css'
import "@fontsource/comfortaa";
import Homepage from './Homepage';
import Navbar from '../../components/Navbar/Navbar';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import Footer from '../../components/Navbar/Footer/Footer';


const Home = () => {
  return (
    <div className = "Home">
      <Navbar/>
      <Homepage/>
      <ProjectCard/>
      <Footer/>
    </div>
  )
}

export default Home