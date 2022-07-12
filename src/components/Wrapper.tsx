import { Box } from '@chakra-ui/react';
import * as React from 'react';

interface IWrapper {
    children: JSX.Element
}

const Wrapper = ({ children } : IWrapper) => {
  return(
    <Box width="95%" margin="0 auto">
        {children}
    </Box>
  ) ;
};

export default Wrapper;
