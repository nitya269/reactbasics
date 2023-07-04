import React, { Component } from 'react'

export default class calculator extends Component {
constructor(){
  super();
  this.state={
    num1 : '',
    num2 : '',
    total : ''
  }
  this.handlenum1 = this.handlenum1.bind(this)
  this.handlenum2 = this.handlenum2.bind(this)
  this.onClick = this.onClick.bind(this)
}

handlenum1(e){
     this.setState({
        num1:e.target.value
     })
}
handlenum2(e){
  this.setState({
     num2:e.target.value
  })
}
onClick(e){
     this.setState({
       total:parseInt(this.state.num1) + parseInt(this.state.num2)
     })
}
  render() {
    return (
      <div>
        Enter value1:<input type="number" onChange={this.handlenum1} ></input>{this.state.num1}<br /><br />
        Enter value2:<input type="number"  onChange={this.handlenum2} ></input>{this.state.num1}<br /><br />
        <button onClick={this.handleClick} >add</button>{this.state.total}
      </div>
    )
  }
}
