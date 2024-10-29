import React from 'react';
import { ReactComponent as MePortfolio } from '../../images/me-portfolio-simple.svg';
import { FaAngleDown } from 'react-icons/fa';
import { Box, Button, Flex, Text } from '@chakra-ui/react';
import {ReactTyped} from 'react-typed';

const Homepage = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects-section');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Flex
      direction={{ base: 'column', md: 'row' }}
      align="center"
      justify="center"
      textAlign="center"
      p={{ base: '4', md: '8' }}
      gap="2"
      minHeight="100vh"
      bg="white"
    >
      {/* Greeting Container */}
      <Box
        p={{ base: '4', md: '8' }}
        minWidth="300px"
        marginRight={{ md: '4' }}
        
      >
        <Text fontSize={{ base: '4xl', md: '5xl' }} fontWeight="bold" color="black">
          Hi there, I'm Shawna!
        </Text>
        <Text fontSize={{ base: 'xl', md: '2xl' }} my="4" color="gray.600">
          <ReactTyped
            strings={[
              "I'm a Student",
              "I'm an Innovator",
              "I'm a Problem Solver",
              "I'm a Tech Enthusiast",
            ]}
            typeSpeed={50}
            backSpeed={30}
            loop
          />
        </Text>
        <Button onClick={scrollToProjects} rightIcon={<FaAngleDown />}>
          My Projects
        </Button>
      </Box>

      {/* SVG Container */}
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{
          clipPath: 'circle(70%)',
        }}
        maxW={{ base: '80%', md: '40%', lg: '60%' }}
        mt={{ base: '8', md: '0' }}
      >
        <MePortfolio style={{ width: '100%', height: 'auto' }} />
      </Box>
    </Flex>
  );
};

export default Homepage;
