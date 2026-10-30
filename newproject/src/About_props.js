import React, { Component } from 'react'
import Propsfile from './Component/Propsfile';
class About_props extends Component {
    
    state={
        myString:"Hello",

    };
    handleChange=()=>{
        this.setState({myString:"haii"});
    }
    
    
    
  render() {
    return (
      <div>
        <Propsfile myStringOne={this.state.myString}/> {/*myStringOne is a props.using for data passing to the component*/}
        <button onClick={this.handleChange}>change text</button> {/*text change using button click */}
      
      </div>
    );
  }
}
export default About_props;