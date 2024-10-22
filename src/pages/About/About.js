import React from 'react';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';

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
          I'm Shawna Halladeen, a second year Software Engineering student with a background in Practical Nursing. My journey from healthcare to tech has equipped me with a unique problem-solving mindset and diverse skill set.
        </Text>
        <Text fontSize="lg" mb={2} color="gray.600">
          I thrive at the intersection of technology and creativity, developing solutions with React and Node.js. Passionate about continuous learning and collaboration, I aim to create impactful projects that make a difference.
        </Text>
      </Box>
    </Flex>
  );
};

export default About;
