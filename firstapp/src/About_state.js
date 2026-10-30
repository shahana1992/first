import React, { Component } from 'react'
import './App.css'

export default class About_state extends Component {

    state={
      myString:"HELLO",
      myStringOne:123,
      myStringTwo:true,

    };
  render() {
    return (
      <div>
          <h1>Welcome</h1>
          <h1>{this.state.myString}</h1>
          <h1>{this.state.myStringOne}</h1>
          <h1>{this.state.myStringTwo}</h1>

      </div>
    )
  }
}



//rfc//

// import React from 'react'

// export default function About_state() {
//   return (
//     <div>About_state</div>
//   )
// }



//rcc//
// import React, { Component } from 'react'

// export default class About_state extends Component {
//   render() {
//     return (
//       <div>About_state</div>
//     )
//   }
// }



//rafc//
// import React from 'react'

// export const About_state = () => {
//   return (
//     <div>About_state</div>
//   )
// }



//rafce//
// import React from 'react'

// const About_state = () => {
//   return (
//     <div>About_state</div>
//   )
// }

// export default About_state
