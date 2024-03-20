import React, { useState } from 'react';
import { Box, Flex, Link, IconButton, useColorMode } from '@chakra-ui/react';
import { Link as ScrollLink, animateScroll } from 'react-scroll'; // Adjusted import
import { FaLinkedin, FaGithub } from 'react-icons/fa';


const Navbar = () => {
  const [color, setColor] = useState(false);
  const { colorMode } = useColorMode();
  const bgColor = { light: 'white', dark: 'gray.800' };
  const textColor = { light: 'black', dark: 'white' };

  const changeColor = () => {
    if (window.scrollY >= 1) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  const scrollToSection = (sectionId) => {
    animateScroll.scrollTo(sectionId, {
      smooth: true,
      offset: -70,
    });
  };

  window.addEventListener('scroll', changeColor);

  return (
    <Box className={color ? 'header header-bg' : 'header'} bg={color ? bgColor[colorMode] : 'transparent'} w="100%" p={4} color={textColor[colorMode]} position="fixed" zIndex={1}>
      <Flex justifyContent="space-between" alignItems="center">
        <Box>
          
          <ScrollLink to="home" smooth={true} onClick={() => scrollToSection('home')}>
            <Link px={2}>Home</Link>
          </ScrollLink>
          <ScrollLink to="projects-section" smooth={true} onClick={() => scrollToSection('projects-section')}>
            <Link px={2}>Projects</Link>
          </ScrollLink>
          <ScrollLink to="about-section" smooth={true} onClick={() => scrollToSection('about-section')}>
            <Link px={2}>About</Link>
          </ScrollLink>
          <ScrollLink to="contact-section" smooth={true} onClick={() => scrollToSection('contact-section')}>
            <Link px={2}>Contact</Link>
          </ScrollLink>
        </Box>

        <Box>
          <Link href="https://www.linkedin.com/in/shawna-halladeen-6414a8288/" isExternal>
            <IconButton icon={<FaLinkedin />} isRound={true} size="lg" mx={1} />
          </Link>
          <Link href="https://github.com/shalladeen" isExternal>
            <IconButton icon={<FaGithub />} isRound={true} size="lg" mx={1} />
          </Link>
        </Box>
      </Flex>
    </Box>
  );
};

export default Navbar;
