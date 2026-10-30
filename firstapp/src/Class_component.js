import React, { Component } from 'react'

export default class Class_componet extends Component {

    constructor(props) {
        super(props);
        this.state = {
          message: "Hello, React Class Component!",
        };
      }
    
      handleClick = () => {
        this.setState({ message: "You clicked the button!" });
      };


      render() {
        return (
          <div>
            <h1>{this.state.message}</h1>
            <button onClick={this.handleClick}>Click Me</button>
          </div>
        );
      }
}
