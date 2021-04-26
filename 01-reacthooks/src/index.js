import React from 'react';
import ReactDOM from 'react-dom';
import _UseState from './_UseState';
import _UseReducer from './_UseReducer'
import _CreateContext from './_CreateContext'

ReactDOM.render(
  <React.StrictMode>
    {/* <_UseState /> */}
    {/* <_UseReducer /> */}
    <_CreateContext />
  </React.StrictMode>,
  document.getElementById('root')
);
