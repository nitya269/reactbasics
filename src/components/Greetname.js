import React, { Component } from 'react'
import Welcomename from './Welcomename'
export default class Greetname extends Component {

   constructor(){
    super()
    this.state={
        name:" "
    }
    this.handleName=this.handleName.bind(this)
   }
   
   handleName(e){
     this.setState({
       name: e.target.value
     })
   }

  render() {
    return (
      <div>
        Enter name:<input type="text" onChange={this.handleName}/>
        < Welcomename name={this.state.name}/>
      </div>
    );
  }
}
