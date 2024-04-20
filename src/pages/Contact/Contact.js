import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

const Contact = () => {
  return (
    <Box className="contact-body" bg="#fffbf8" p="4"
    minHeight={{ base: 'auto', md: '50vh' }}>  
      <Box className="contact-heading" textAlign="center">
        <Heading as="h1">CONTACT</Heading>
        <Text fontSize="xl" mt="3">Let's chat</Text> 
      </Box>
    </Box>
  );
};

export default Contact;
