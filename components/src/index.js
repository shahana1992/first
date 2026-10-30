import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Class_componet from './Class_component';
import Controlledcomponent from './Controlled_component';
import Functionalcomponent from './Functional_component';
import Higher_order_component from './Higher_order_component';
import Pure_component from './Pure_component';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   
    {/* <Class_componet/> */}
    {/* <Controlledcomponent/> */}
    {/* <Functionalcomponent/> */}
    {/* <Higher_order_component/> */}
    <Pure_component/>
  

  </React.StrictMode>
);


reportWebVitals();
