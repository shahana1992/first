import React,{useState}from 'react';


const Hooks_State = () => {
    const [colour,setColour]=useState("Green");
    const [count,setCount]=useState(0);

    const changeColour=()=>{
      setColour("Red");
    }

    const increment=()=>{
      setCount(count+1);
    }

    const decrement=()=>{
      setCount(count-1);

    }
  return (
    <div>
      <h1 className='bg-warning text-white'>usestate</h1>

      <h2>my favorite color is {colour}</h2>
      <button onClick={changeColour}>change colour</button>


    {/* example 2 */}

      <h1>counter is {count}</h1>
      <button className='m-2 bg-success' onClick={increment}>+</button>
      <button className='m-2 bg-success' onClick={decrement}>-</button>

    </div>
  )
}

export default Hooks_State