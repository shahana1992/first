import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Higher_order_component from './Higher_order_component';
import Functionalcomponent from './Functional_component';
import Controlledcomponent from './Controlled_component';
import About_Props from './About_Props';
import Class_componet from './Class_component';
import Render_List from './Render_List';
import App from './Pure_component';
import Hooks_State from './Huks/Hooks_State';
import Conditional_Rendering from './Conditional_Rendering';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   
    {/* <About_Props/> */}
    {/* <Class_componet/> */}
    {/* <Controlledcomponent/> */}
    {/* <Functionalcomponent/> */}
    {/* <Higher_order_component/> */}
    {/* <Render_List/> */}
    {/* <App/> */}
    <Hooks_State/>
    {/* <Conditional_Rendering/> */}
    

  
   
  </React.StrictMode>
);
