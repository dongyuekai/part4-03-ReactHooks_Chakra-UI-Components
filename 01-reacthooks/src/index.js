import React from 'react';
import ReactDOM from 'react-dom';
import _UseState from './_UseState';
import _UseReducer from './_UseReducer'
import _CreateContext from './_CreateContext'
import _UseContext from './_UseContext'
import _UseEffect from './_UseEffect'
import _UseMemo from './_UseMemo'
import _Memo from './_Memo'
import _UseCallback from './_UseCallback'
import _UseRef from './_UseRef'
import _SelfHook from './_SelfHook'
import { BrowserRouter as Router } from 'react-router-dom'
import _UseYL from './_UseYL'
import App from './App'

ReactDOM.render(
  <div>
    {/* <_UseState /> */}
    {/* <_UseReducer /> */}
    {/* <_CreateContext /> */}
    {/* <_UseContext /> */}
    {/* <_UseEffect /> */}
    {/* <_UseMemo /> */}
    {/* <_Memo /> */}
    {/* <_UseCallback /> */}
    {/* <_UseRef /> */}
    {/* <_SelfHook /> */}
    {/* <Router>
      <App />
    </Router> */}
    <_UseYL />
  </div>,
  document.getElementById('root')
);
