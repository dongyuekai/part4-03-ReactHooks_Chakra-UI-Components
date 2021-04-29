import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ChakraProvider, theme, CSSReset } from '@chakra-ui/react'

ReactDOM.render(
  <ChakraProvider theme={theme}>
    <CSSReset />
    <App />
  </ChakraProvider>,
  document.getElementById('root')
);
