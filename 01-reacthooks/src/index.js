import React from 'react';
import ReactDOM from 'react-dom';
import _UseState from './_UseState';
import _UseReducer from './_UseReducer'
import _CreateContext from './_CreateContext'
import _UseContext from './_UseContext'
import _UseEffect from './_UseEffect'

ReactDOM.render(
  <React.StrictMode>
    {/* <_UseState /> */}
    {/* <_UseReducer /> */}
    {/* <_CreateContext /> */}
    {/* <_UseContext /> */}
    <_UseEffect />
  </React.StrictMode>,
  document.getElementById('root')
);
