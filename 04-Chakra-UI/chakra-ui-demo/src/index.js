// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import App2 from './App2'
// import App3 from './App3'
// import App4 from './App4'
// import AppForm from './components/App'
// import LgGouComponents from './lagou'
// import { ChakraProvider, theme, CSSReset } from '@chakra-ui/react'

// import { BrowserRouter as Router } from "react-router-dom";


// // 1 设置默认的颜色模式
// // theme.config.initialColorMode = 'dark'
// // 2 使用操作系统所使用的颜色模式
// theme.config.useSystemColorMode = true

// const myTheme = {
//   ...theme,
//   components: {
//     ...theme.components,
//     ...LgGouComponents
//   }
// }

// ReactDOM.render(
//   <Router>
//     <ChakraProvider theme={theme}>
//       <CSSReset />
//       {/* <App /> */}
//       {/* <App2 /> */}
//       {/* <App3 /> */}
//       {/* <App4 /> */}
//       <AppForm />
//     </ChakraProvider>
//   </Router>,
//   document.getElementById('root')
// );


import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import App from "./components/App";
import theme from '@chakra-ui/theme';

ReactDOM.render(
  <Router>
    <ChakraProvider theme={theme}>
      <CSSReset />
      <App />
    </ChakraProvider>
  </Router>,
  document.getElementById("root")
);
