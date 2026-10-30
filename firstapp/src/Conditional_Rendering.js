import React from 'react'

const Conditional_Rendering = () => {

//using if //

  let number=0;
  if(number>0){
    return <h1>positive number</h1>
  }
  else if(number<0){
    return <h1>negative number</h1>
  }
  else{
    return<h1>zero</h1>
  }
};

export default Conditional_Rendering




//login check//
let isloginin=true;
return(
  <div>
    <Conditional_Rendering/>

  </div>
)