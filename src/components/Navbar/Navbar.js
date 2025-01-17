import React, { useState, useEffect } from 'react';
import { Box, Flex, Link, IconButton, useColorMode } from '@chakra-ui/react';
import { Link as ScrollLink, animateScroll } from 'react-scroll';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Navbar = () => {
  const [color, setColor] = useState(false);
  const { colorMode } = useColorMode();
  
  // Define colors for light and dark modes
  const bgColor = { light: 'white', dark: 'gray.800' };
  const textColor = { light: 'black', dark: 'white' };

  const changeColor = () => {
    if (window.scrollY >= 1) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeColor);
    return () => window.removeEventListener('scroll', changeColor);
  }, []);

  const scrollToSection = (sectionId) => {
    animateScroll.scrollTo(sectionId, {
      smooth: true,
      offset: -70,
    });
  };

  return (
    <Box
      className={color ? 'header header-bg' : 'header'}
      bg={color ? bgColor[colorMode] : 'transparent'}
      w="100%"
      p={5}
      color={color ? textColor[colorMode] : textColor.light} // Use light text color when transparent
      position="fixed"
      zIndex={1}
      boxShadow={color ? 'md' : 'none'}
    >
      <Flex justifyContent="space-between" alignItems="center" height="70px">
        <Box>
          <ScrollLink to="home" smooth={true} onClick={() => scrollToSection('home')}>
            <Link as="span" px={4} fontSize="lg"> {/* Change Link to as="span" */}
              Home
            </Link>
          </ScrollLink>
          <ScrollLink to="projects-section" smooth={true} onClick={() => scrollToSection('projects-section')}>
            <Link as="span" px={4} fontSize="lg">
              Projects
            </Link>
          </ScrollLink>
          <ScrollLink to="about-section" smooth={true} onClick={() => scrollToSection('about-section')}>
            <Link as="span" px={4} fontSize="lg">
              About
            </Link>
          </ScrollLink>
          <ScrollLink to="contact-section" smooth={true} onClick={() => scrollToSection('contact-section')}>
            <Link as="span" px={4} fontSize="lg">
              Contact
            </Link>
          </ScrollLink>
        </Box>

        <Box>
          <Link href="https://www.linkedin.com/in/shawna-halladeen-6414a8288/" isExternal>
            <IconButton icon={<FaLinkedin />} isRound={true} size="lg" mx={2} />
          </Link>
          <Link href="https://github.com/shalladeen" isExternal>
            <IconButton icon={<FaGithub />} isRound={true} size="lg" mx={2} />
          </Link>
        </Box>
      </Flex>
    </Box>
  );
};

export default Navbar;
