import React from 'react';
import { Box, Image, Heading, Text, Link, SimpleGrid, VStack, IconButton, Container} from '@chakra-ui/react';
import { FiGithub } from "react-icons/fi";
import pixelSnake from './pixel-snake.jpg';
import logo192 from './logo192.png';

// Project data array
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
    title: "Zephyr Zone",
    description: "A weather app that uses an API to get local weather and location",
    imageUrl: logo192,
    githubUrl: "https://github.com/shalladeen/zephyrzone" 
  }
];

const ProjectCard = () => {
  return (
    <Container maxW="container.xl" centerContent> 
      <SimpleGrid columns={[1, null, 2]} spacing={5} alignItems="center" justifyContent="center">
        {projects.map((project) => (
          <Box as="a" href={project.projectUrl} target="_blank"
            w="400px" h="400px"
            p={5} boxShadow="lg" rounded="lg" bg="white"
            transition="all 0.3s ease"
            _hover={{ transform: "translateY(-5px)", boxShadow: "xl" }}
            display="flex" flexDirection="column" justifyContent="space-between"
            position="relative">
            <VStack align="center" spacing={4} flex="1">
              <Image src={project.imageUrl} alt={`Project Image ${project.id}`} borderRadius="md" boxSize="250px" objectFit="cover" />
              <VStack align="start" spacing={1} flexGrow="1">
                <Heading size="md">{project.title}</Heading>
                <Text fontSize="sm" align="start">{project.description}</Text>
              </VStack>
            </VStack>
            <IconButton
              aria-label="Github Link" icon={<FiGithub />} isRound={true} size="lg" position="absolute"
              bottom={5} right={5} colorScheme="gray" _hover={{ bg: 'gray.600', color: 'white' }}
              as={Link} href={project.githubUrl} isExternal
            />
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  )
}

export default ProjectCard;
