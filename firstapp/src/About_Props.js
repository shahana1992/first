import React, { Component } from 'react'
import PropsFile from './Component/PropsFile';
class About_Props extends Component {
    
    state={
        myString:"Hello",

    };
    handleChange=()=>{
        this.setState({myString:"haii"});
    }
    
    
    
  render() {
    return (
      <div>
        <PropsFile myStringOne={this.state.myString}/> {/*myStringOne is a props.using for data passing to the component*/}
        <button onClick={this.handleChange}>change text</button> {/*text change using button click */}
      
      </div>
    );
  }
}
export default About_Props;