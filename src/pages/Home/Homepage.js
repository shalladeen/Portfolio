import React from 'react';
import { ReactComponent as MePortfolio } from '../../images/me-portfolio-simple.svg';
import { FaAngleDown } from 'react-icons/fa';
import { Box, Button, Flex, Text } from '@chakra-ui/react';

const Homepage = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects-section');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Flex
      direction={{ base: "column", md: "row" }} 
      align="center"
      justify="center"
      textAlign="center"
      p={{ base: '4', md: '8' }} 
      gap="2" 
      minHeight={{ base: 'auto', md: '100vh' }}
      bg="#fffbf8"
    >
      {/* Greeting Container */}
      <Box
        p={{ base: '4', md: '8' }}
        minWidth="300px"
        marginRight={{ md: "2" }} 
      >
        <Text fontSize={{ base: '4xl', md: '5xl' }} fontWeight="bold">
          Hi there, I'm Shawna!
        </Text>
        <Text fontSize={{ base: 'xl', md: '2xl' }} my="4">
          I am a Software Engineering Student
        </Text>
        <Button colorScheme="teal" onClick={scrollToProjects} rightIcon={<FaAngleDown />}>
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
        minWidth="40px" 
      >
        <MePortfolio style={{ width: '100%', height: 'auto'}} /> 
      </Box>
    </Flex>
  );
};

export default Homepage;
