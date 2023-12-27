import "./Navbar.css";

import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub } from "react-icons/fa";


const Navbar = () => {

    const [color, setColor] = useState(false);
    const changeColor = () => {
        if(window.scrollY >=1){
            setColor(true);
        }else{
            setColor(false);
        }
    };

    //window.addEventListener("scrol", changeColor);

  return (
    <div className={color ? "header header-bg" : "header"}>
       
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/projects">Projects</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>

        </ul>

        <div className="socials">
            <a href="https://www.linkedin.com/in/shawna-halladeen-6414a8288/" target="_blank" rel="noopener noreferrer" className="social-icon">
             <FaLinkedin />
            </a>
            <a href="https://github.com/shalladeen" target="_blank" rel="noopener noreferrer" className="social-icon">
             <FaGithub />
            </a>
        </div>
    </div>
  )
}


export default Navbar