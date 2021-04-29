import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import App2 from './App2'
import App3 from './App3'
import App4 from './App4'
import LgGouComponents from './lagou'
import { ChakraProvider, theme, CSSReset } from '@chakra-ui/react'


// 1 设置默认的颜色模式
// theme.config.initialColorMode = 'dark'
// 2 使用操作系统所使用的颜色模式
theme.config.useSystemColorMode = true

const myTheme = {
  ...theme,
  components: {
    ...theme.components,
    ...LgGouComponents
  }
}

ReactDOM.render(
  <ChakraProvider theme={theme}>
    <CSSReset />
    {/* <App /> */}
    {/* <App2 /> */}
    {/* <App3 /> */}
    <App4 />
  </ChakraProvider>,
  document.getElementById('root')
);
