import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box bg="black" color="white" py={4} px={8}>
      <Flex
        direction={{ base: 'column', md: 'row' }}
        justify="space-between"
        align="center"
        textAlign="center"
      >
        <Box mb={{ base: 4, md: 0 }}>
          <Text fontSize="lg" fontWeight="bold">Shawna Halladeen</Text>
          <Text fontSize="sm">Software Engineering Student</Text>
        </Box>
        <Box>
          <Text fontSize="sm">&copy; {new Date().getFullYear()} Shawna Halladeen. All rights reserved.</Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default Footer;
