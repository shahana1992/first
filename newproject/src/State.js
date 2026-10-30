import React, { Component } from 'react'
import './App.css'

export default class State extends Component {

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
