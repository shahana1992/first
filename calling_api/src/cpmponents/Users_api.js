import React,{useState} from 'react'
import './Users.css';
import axios from 'axios';
function Users_api() {
    const [data,setData]=useState([]);

    const fetchusers= async ()=>{
      const response= await axios.get("https://jsonplaceholder.typicode.com/users");
      setData(response.data);
    }
  return (
    <><div  className='users'>Users List</div><div className=''>
          <button onClick={fetchusers}>GetUsers</button>
     
            {
                data.map(user=>(
                    <div key={user.id}>{user.name}
                        <p>{user.email}</p>
                        <p style={{color:"red"}}>{user.address.street}</p>
                    </div>
                ))
            }
      </div></>
  )
}

export default Users_api;