import React from 'react'

export default function Google() {
    const items=["apple","banana","cherry"];
    const users=[{name:"john",age:29},
                {name:"sam",age:24},
                {name:"peter",age:23}
    ]

   
                
  return (
    <div>
        {/* <ul>
            {items.map((item,index)=>(
                <li key={index}>{item}</li>
            
            ))}
        </ul> */}

        <table>
            
            <tr>
                <td>name</td>
                <td>age</td>
            </tr>
            {users.map((item,index)=>{
                return(
                    <tr>
                        <td>{item.name}</td>
                        <td>{item.age}</td>
                    </tr>
                )
            })}
          
            

        

        </table>
    </div>
  )
}
