import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Styled from './Styled'
import Demo from './Demo'
import Child from './Child'
import Compose from './Compose'
import Global from './Global'
import Animation from './Animation'
import { ThemeProvider } from '@emotion/react'
import Theme from './Theme'

const theme = {
  colors: {
    primary: 'tomato'
  }
}

ReactDOM.render(
  <ThemeProvider theme={theme}>
    {/* <App /> */}
    {/* <Styled /> */}
    {/* <Demo/> */}
    {/* <Child /> */}
    {/* <Compose /> */}
    {/* <Global /> */}
    {/* <Animation /> */}
    <Theme />
  </ThemeProvider>,
  document.getElementById('root')
);
