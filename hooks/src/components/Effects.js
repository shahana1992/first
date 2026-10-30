import React, { useState ,useEffect} from 'react'

const Effects = () => {
    const [counter,setCounter]=useState(0)
    const [counter1,setCounter1]=useState(0)

    useEffect(()=>{
        console.log("Side effect");
    },[counter])

  return (
    <div>
        <div>
        <h1>{counter}</h1>
        <button onClick={()=>setCounter(counter+1)} type='button'>+</button>
         </div>
          <div>
        <h1>{counter1}</h1>
        <button onClick={()=>setCounter1(counter+1)} type='button'>+</button>
         </div>
    </div>
  )
}

export default Effects