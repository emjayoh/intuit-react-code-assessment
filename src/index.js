import React from 'react';
import ReactDOM from 'react-dom';
import { extendTheme, ChakraProvider } from '@chakra-ui/react';
import App from './components/App';

const config = {
  useSystemColorMode: false,
  initialColorMode: 'dark',
};

const customTheme = extendTheme({ config });

const rootElement = document.getElementById('root');
ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={customTheme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  rootElement
);
