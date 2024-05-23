import React from 'react';
import { Box, Heading, Text, Link, Flex } from '@chakra-ui/react';
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
    >
      <Box pb="20px" fontSize="40px">
        <Heading as="h1" size="2xl" mb={3}>
          CONTACT
        </Heading>
        <Text fontSize="xl" mt="3">
          Let's connect!
        </Text>
        <Flex mt="4" justifyContent="center">
          <Link
            href="https://www.linkedin.com/in/shalladeen"
            isExternal
            mx={2}
            color="black"
            _hover={{ color: "gray.300" }}
            display="flex"
            alignItems="center"
          >
            <FaLinkedin size="2em" />
          </Link>
          <Link
            href="mailto:shawnakatrina.halladeen@gmail.com"
            mx={2}
            color="black"
            _hover={{ color: "gray.300" }}
            display="flex"
            alignItems="center"
          >
            <FaEnvelope size="2em" />
          </Link>
        </Flex>
      </Box>
    </Box>
  );
};

export default Contact;
