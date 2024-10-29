import React from 'react';
import { Box, Image, Heading, Text, Link, SimpleGrid, VStack, IconButton, Container } from '@chakra-ui/react';
import { FiGithub } from "react-icons/fi";
import pixelSnake from './pixel-snake.jpg';
import logo from './Logo.PNG';
import pomo from './pomo.webp';

const projects = [
  {
    id: 1,
    title: "Nibble Noodle",
    description: "A simple pixel snake game built with Javascript, HTML, and CSS",
    projectUrl: "https://nibblenoodle.netlify.app",
    imageUrl: pixelSnake,
    githubUrl: "https://github.com/shalladeen/Nibble-Noodle?tab=readme-ov-file"
  },
  {
    id: 2,
    title: "VitalSense",
    description: "A pulse sensor made with Arduino. Frontend made with React, backend made with Node.js and Express.js.",
    projectUrl: "https://devpost.com/software/vitalsense",
    imageUrl: logo,
    githubUrl: "https://github.com/AltraDiv/VitalSense"
  },
  {
    id: 3,
    title: "Pomo",
    description: "A simple pomodoro timer built with React",
    projectUrl: "https://www.pomoclock.ca",
    imageUrl: pomo,
    githubUrl: "https://github.com/shalladeen/Pomo"
  }
];

const ProjectCard = () => {
  return (
    <Container maxW="container.xl" centerContent>
      <SimpleGrid 
        columns={{ base: 1, sm: 2, md: 3 }} 
        spacing={10} 
        alignItems="flex-start" 
        justifyContent="center"
      >
        {projects.map((project) => (
          <Box 
            as="a" 
            href={project.projectUrl} 
            target="_blank"
            w={{ base: "90%", md: "400px" }}
            h="400px"
            p={5} 
            boxShadow="lg" 
            rounded="lg" 
            bg="white"
            transition="all 0.3s ease"
            _hover={{ transform: "translateY(-5px)", boxShadow: "xl" }}
            display="flex" 
            flexDirection="column" 
            justifyContent="space-between"
            position="relative"
            key={project.id}
          >
            <VStack align="center" spacing={4} flex="1">
              <Image 
                src={project.imageUrl} 
                alt={`Project Image ${project.id}`} 
                borderRadius="md" 
                boxSize="250px" 
                objectFit="cover" 
              />
              <VStack align="start" spacing={1} flexGrow="1" overflow="hidden">
                <Heading size="md">{project.title}</Heading>
                <Text fontSize="sm" align="start" maxWidth="300px" m="1" noOfLines={2}> {/* Limit the number of lines */}
                  {project.description}
                </Text>
              </VStack>
            </VStack>
            <IconButton
              aria-label="Github Link" 
              icon={<FiGithub />} 
              isRound={true} 
              size="lg" 
              position="absolute" 
              bottom={5} 
              right={5}
              colorScheme="gray" 
              _hover={{ bg: 'gray.600', color: 'white' }}
              as={Link} 
              href={project.githubUrl} 
              isExternal
            />
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  );
}

export default ProjectCard;
