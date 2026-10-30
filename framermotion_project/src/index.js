import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Test from './Test';
import Material from './Materialui/Material';
import New from './AOS/New';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Test/> */}
    {/* <Material/> */}
    <New/>
    
   
  </React.StrictMode>
);


reportWebVitals();
