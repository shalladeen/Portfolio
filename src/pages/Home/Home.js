import React from 'react'
import './Home.css'
import "@fontsource/comfortaa";
import Homepage from './Homepage';
import Navbar from '../../components/Navbar/Navbar';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Projects from '../Projects/Projects';
import Footer from '../../components/Footer/Footer';



const Home = () => {
  return (
    <div className = "Home-Content">
      <Navbar/>
      <Homepage/>
      <div id="projects-section">
        <Projects/>
      </div>
      <div id="about-section">
        <About/>
      </div>
      <div id="contact-section">
        <Contact/>
      </div>
      <Footer/>
    </div>
  )
}

export default Home