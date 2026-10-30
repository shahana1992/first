function Nav(){
    
let isLoggedIn=true;
  return (
    <div>
         {isLoggedIn?<h1>Welcome to website</h1>:<h1>Please login</h1>}
    </div>
  )
}