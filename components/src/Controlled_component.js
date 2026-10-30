import React, { Component } from 'react';

class Controlledcomponent extends Component {
  constructor(props) {
    super(props);
    // Initialize the state in the constructor
    this.state = {
      inputValue: ''  // This will hold the value of the input
    };
  }

  // Handle input change
  handleChange = (event) => {
    this.setState({ inputValue: event.target.value });  // Update state with the new input value
  };

  render() {
    return (
      <div>
        <label htmlFor="controlledInput">Enter Text: </label>
        <input id="controlledInput" type="text" value={this.state.inputValue}  // Controlled value bound to state
        onChange={this.handleChange}  // Updates state on input change
        />
        <p>You typed: {this.state.inputValue}</p>
      </div>
    );
  }
}

export default Controlledcomponent;
