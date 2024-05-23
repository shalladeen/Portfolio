import React, { useState, useEffect, useRef } from 'react';
import "@fontsource/comfortaa";
import { Box, IconButton, Text } from '@chakra-ui/react';
import { FaArrowUp } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
import Homepage from './Homepage';
import Navbar from '../../components/Navbar/Navbar';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Projects from '../Projects/Projects';
import Footer from '../../components/Footer/Footer';

const Home = () => {
  const [showLabel, setShowLabel] = useState(false);
  const homepageRef = useRef(null);

  useEffect(() => {
    const currentHomepageRef = homepageRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowLabel(!entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (currentHomepageRef) {
      observer.observe(currentHomepageRef);
    }

    return () => {
      if (currentHomepageRef) {
        observer.unobserve(currentHomepageRef);
      }
    };
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div className="Home-Content">
      <Navbar />
      <div ref={homepageRef}>
        <Homepage />
      </div>
      <div id="projects-section">
        <Projects />
      </div>
      <div id="about-section">
        <About />
      </div>
      <div id="contact-section">
        <Contact />
      </div>
      <Footer />

      {/* Scroll to Top Button */}
      <Box position="fixed" bottom="100px" right="90px" textAlign="center">
        <IconButton
          icon={<FaArrowUp />}
          onClick={scrollToTop}
          aria-label="Scroll to top"
          mb={2}
        />
        {showLabel && (
          <Text fontSize="sm" color="gray.600">
            Home
          </Text>
        )}
      </Box>
    </div>
  );
};

export default Home;
