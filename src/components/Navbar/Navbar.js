import "./Navbar.css";

import React, { useState } from 'react'
import { Link } from "react-router-dom";


const Navbar = () => {

    const [color, setColor] = useState(false);
    const changeColor = () => {
        if(window.scrollY >=1){
            setColor(true);
        }else{
            setColor(false);
        }
    };

    window.addEventListener("scrol", changeColor);

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
       
    </div>
  )
}


export default Navbar