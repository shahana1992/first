import React,{createContext,useState}from 'react'
import Components2 from './Components2';
import Components3 from './Components3';



export const userContext=createContext();

function Context() {
  
 const [counter,setCounter]=useState(0);
 const [counter2,setCounter2]=useState(0);
 const arr=[1,2,3];
 const person={name:'John',age:'28',place:'calicut'}
  return (
    <div>
      {/* <Component1/> */}
        <userContext.Provider value={{counter,setCounter,counter2,setCounter2,arr,person}}>
          <Components2/>
          <Components3/>
        </userContext.Provider>
    </div>
  )
}

export default Context