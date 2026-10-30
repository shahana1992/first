import React, { Component } from 'react'

export default class Propsfile extends Component {
  render() {
    return (
      <div>
        <h1>Props</h1>
        <h2>{this.props.myStringOne}</h2>
      </div>
    );
  }
}
