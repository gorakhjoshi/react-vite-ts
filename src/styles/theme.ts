import { extendTheme } from '@chakra-ui/react';

const breakPoints = {
  sm: '35em',
};

const config = {
  initialColorMode: 'dark',
};

const theme = extendTheme(breakPoints, config);

export default theme;
