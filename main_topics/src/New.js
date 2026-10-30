function New() {
  // --------------------Using if stt---------------
  let number=1;

  const CheckNumber=()=>{
    if(number>0)
    {
      return <h1>Positive number</h1>
    }
    else if(number<0){
      return <h1>Negative number</h1>
    }
    else{
      return <h1>zero</h1>
    }
  };

  //--------------conditional operator-----------------



  //-------login check-------------
  let isLoggedIn=true;
  return (
    <div>
      {/* for if statement  */}
     {/* <CheckNumber/> */}

    {/* {number>0?<h1>Positive</h1>:number<0?<h1>Negative</h1>:<h1>Zero</h1>} */}
    
    {isLoggedIn?<h1>Welcome to website</h1>:<h1>Please login</h1>}
    </div>
  );
}

export default New;
