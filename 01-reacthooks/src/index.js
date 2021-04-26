import React from 'react';
import ReactDOM from 'react-dom';
import _UseState from './_UseState';
import _UseReducer from './_UseReducer'
import _CreateContext from './_CreateContext'
import _UseContext from './_UseContext'
import _UseEffect from './_UseEffect'
import _UseMemo from './_UseMemo'

ReactDOM.render(
  <React.StrictMode>
    {/* <_UseState /> */}
    {/* <_UseReducer /> */}
    {/* <_CreateContext /> */}
    {/* <_UseContext /> */}
    {/* <_UseEffect /> */}
    <_UseMemo />
  </React.StrictMode>,
  document.getElementById('root')
);
