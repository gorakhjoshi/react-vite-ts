import { extendTheme } from '@chakra-ui/react';

const breakPoints = {
  sm: '35em',
  md: '48em',
  lg: '62em',
  xl: '80em',
  '2xl': '96em',
};

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

const theme = extendTheme({ breakPoints, config });

export default theme;
