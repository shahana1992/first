import React, { useState } from 'react'

import {auth} from "../config/firebase"
import {createUserWithEmailAndPassword} from 'firebase/auth'

const Auth = () => {

    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    
    const signIn=async()=>{
     
      try{
        await createUserWithEmailAndPassword(auth,email,password)
     
      }
      catch(err){
        console.log(err)
      }

    }
     

   
  return (
    <div  className='auth_login'>
       <input type="text" placeholder='Enter Email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
       <input type="password" placeholder='Enter Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
       <button onClick={signIn}>Sign In</button>
    </div>
  );
};

export default Auth;