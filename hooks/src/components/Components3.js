import React,{useContext} from 'react'
import { userContext } from './Context'

function Components3() {
    const {counter2,setCounter2,arr}=useContext(userContext)
  return (
    <div>
        <h1>Counter Value:{counter2}</h1>
        <button onClick={()=>setCounter2((counter)=>counter+1)}> click counter{counter2}</button>
       <h2>{arr}</h2>
    </div>
  )
}

export default Components3