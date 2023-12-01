import React from 'react'
import './About.css';

import Navbar from '../../components/Navbar/Navbar';
import ProjectPage from '../Projects/ProjectPage';
import Footer from '../../components/Navbar/Footer/Footer';

const About = () => {
  return (
    <div>
      <Navbar/>
      <ProjectPage heading="ABOUT" text="I'm a Software Engineering Student" />
      <Footer/>
</div>
  )
}

export default About