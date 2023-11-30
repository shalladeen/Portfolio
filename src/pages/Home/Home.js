import React from 'react'
import './Home.css'
import "@fontsource/comfortaa";
import Navbar from '../../components/Navbar/Navbar';

const Home = () => {
  return (
    <div className = "Home">
      <Navbar/>
       <body>

        <p className="greeting">Hi there, <strong className="name">I'm Shawna!</strong></p>
     </body>
    </div>
  )
}

export default Home