import React from 'react';
import { Box, Flex, Heading, Text, SimpleGrid } from '@chakra-ui/react';

const About = () => {
  return (
    <Flex
      direction="column"
      justify="center"
      align="center"
      textAlign="center"
      minHeight={{ base: 'auto', md: '100vh' }}
      bg="white"
      p={4}
    >
      <Box pb={4} maxW="800px">
        <Heading as="h1" size="2xl" mb={4}>
          ABOUT
        </Heading>
        <Text fontSize="lg" mb={2} color="gray.600">
          I'm Shawna Halladeen, a second-year Software Engineering student with a background in Practical Nursing. My journey from healthcare to tech has equipped me with a unique problem-solving mindset and diverse skill set.
        </Text>
        <Text fontSize="lg" mb={2} color="gray.600">
          I thrive at the intersection of technology and creativity, developing solutions with React and Node.js. Passionate about continuous learning and collaboration, I aim to create impactful projects that make a difference.
        </Text>

        {/* Skills Section */}
        <Box mt={6}>
          <Text fontSize="lg" fontWeight="bold" mb={2} color="gray.700">
            Skills & Technologies
          </Text>
          <SimpleGrid columns={[2, 3, 4]} spacing={4}>
            <Box p={2} borderRadius="md" bg="gray.100" textAlign="center">
              <Text fontSize="md" color="gray.800">JavaScript</Text>
            </Box>
            <Box p={2} borderRadius="md" bg="gray.100" textAlign="center">
              <Text fontSize="md" color="gray.800">Python</Text>
            </Box>
            <Box p={2} borderRadius="md" bg="gray.100" textAlign="center">
              <Text fontSize="md" color="gray.800">React</Text>
            </Box>
            <Box p={2} borderRadius="md" bg="gray.100" textAlign="center">
              <Text fontSize="md" color="gray.800">Node.js</Text>
            </Box>
            <Box p={2} borderRadius="md" bg="gray.100" textAlign="center">
              <Text fontSize="md" color="gray.800">Java</Text>
            </Box>
            <Box p={2} borderRadius="md" bg="gray.100" textAlign="center">
              <Text fontSize="md" color="gray.800">SQL</Text>
            </Box>
            <Box p={2} borderRadius="md" bg="gray.100" textAlign="center">
              <Text fontSize="md" color="gray.800">HTML/CSS</Text>
            </Box>
          
          </SimpleGrid>
        </Box>
      </Box>
    </Flex>
  );
};

export default About;
