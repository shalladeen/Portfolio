import React from 'react';
import { Box, Heading, Flex, Link } from '@chakra-ui/react';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <Box
      bg="white"
      p="4"
      minHeight={{ base: 'auto', md: '90vh' }}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      textAlign="center"
      boxShadow="lg"
      borderRadius="md"
    >
      <Heading as="h2" size="xl" mb={4}>
        Let's Connect!
      </Heading>
      <Flex mt="4" justifyContent="center">
        <Link
          href="https://www.linkedin.com/in/shalladeen"
          isExternal
          mx={4}
          color="black"
          _hover={{ color: "gray.500" }}
          display="flex"
          alignItems="center"
        >
          <FaLinkedin size="2em" />
        </Link>
        <Link
          href="mailto:shawnakatrina.halladeen@gmail.com"
          mx={4}
          color="black"
          _hover={{ color: "gray.500" }}
          display="flex"
          alignItems="center"
        >
          <FaEnvelope size="2em" />
        </Link>
      </Flex>
    </Box>
  );
};

export default Contact;
