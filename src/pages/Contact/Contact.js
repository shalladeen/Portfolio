import React from 'react'

import Navbar from '../../components/Navbar/Navbar';
import ProjectPage from '../Projects/ProjectPage';
import Footer from '../../components/Navbar/Footer/Footer';

const Contact = () => {
  return (
    <div>
      <Navbar/>
      <ProjectPage heading="CONTACT" text="Let's chat"/>
      <Footer/>
</div>
  )
}

export default Contact