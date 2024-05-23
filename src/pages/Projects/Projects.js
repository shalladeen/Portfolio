import React from 'react';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import ProjectCard from '../../components/ProjectCard/ProjectCard';

const Projects = () => {
  return (
    <Flex
      direction="column"
      justify="center"
      align="center"
      textAlign="center"
      bg="white"
      p={4}
      minHeight="90vh"
    >
      <Box pb={4} maxW="800px">
        <Heading as="h1" size="2xl" mb={4}>
          PROJECTS
        </Heading>
        <Text fontSize="lg" mb={6} color="gray.600">
          Some of my recent stuff
        </Text>
      </Box>
      <Flex wrap="wrap" justifyContent="center">
        <ProjectCard />
      </Flex>
    </Flex>
  );
};

export default Projects;
