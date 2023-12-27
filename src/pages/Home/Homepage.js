import React from 'react'
import './Home.css'
import test from '../../images/test1.svg';

const Homepage = () => {
  return (
    <div className = "Home">
     <body className = "home-body">
      <p className="greeting">Hi there, <strong className="name">I'm Shawna!</strong></p>
      <img src={test}/>
   </body>
  </div>
  )
}

export default Homepage