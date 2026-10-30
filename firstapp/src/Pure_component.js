import React, { Component } from 'react'

export default class Pure_component extends Component {
// export default class App extends Component {
  constructor(){
    super();
    this.state={count:0};
  }
  change=()=>{
    this.setState({count:1,});
  };


  render() {
    console.log("render");
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.change}>Change</button>
      </div>
    )
  }
}
