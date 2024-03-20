import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    black: '#000',
    white: '#fff',
  },
  fonts: {
    heading: `'Source Code Pro', monospace`,
    body: `'Source Code Pro', monospace`,
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: "bold", 
        fontFamily: `'Source Code Pro', monospace`, 
      },
      variants: {
        solid: {
          bg: 'black', 
          color: 'white', 
          _hover: {
            bg: 'white', 
            color: 'black', 
            borderColor: 'black', 
            borderWidth: '1px', 
          },
        },
        
      },
      
    },
  },
});

export default theme;
