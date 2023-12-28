import React, { useState } from 'react';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [color, setColor] = useState(false);

  const changeColor = () => {
    if (window.scrollY >= 1) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  const scrollToSection = (sectionId) => {
    scroll.scrollTo(sectionId, {
      smooth: true,
      offset: -70, 
    });
  };


  window.addEventListener('scroll', changeColor);

  return (
    <div className={color ? 'header header-bg' : 'header'}>
      <ul>
        <li>
          <ScrollLink to="home" smooth={true} onClick={() => scrollToSection('home')}>
            Home
          </ScrollLink>
        </li>
        <li>
          <ScrollLink to="projects-section" smooth={true} onClick={() => scrollToSection('projects-section')}>
            Projects
          </ScrollLink>
        </li>
        <li>
          <ScrollLink to="about-section" smooth={true} onClick={() => scrollToSection('about-section')}>
            About
          </ScrollLink>
        </li>
        <li>
          <ScrollLink to="contact-section" smooth={true} onClick={() => scrollToSection('contact-section')}>
            Contact
          </ScrollLink>
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
  );
};

export default Navbar;
