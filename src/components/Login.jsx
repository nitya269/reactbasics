import React, { Component } from 'react'

export default class Login extends Component {
  constructor() {
    super()
    this.state = {
      isUser: true,
      ispassword: false,
      isClick:" ",
    }
    this.handleUserName = this.handleUserName.bind(this)
    this.handlePassWord = this.handlePassWord.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }
  handleUserName(e) {
    console.log(e.target.value)
    if (e.target.value.length === 0) {
      this.setState({
        isUser:"you should fill the username"
      })
    }
    else{
      this.setState({
          isUser: "valid username"
        })
          }
  }
  handlePassWord(e){
    if(e.target.value.length>6)
    {
      this.setState({
        isPassword:"password should be less than 6 characters"
      })
    }
    else{
      this.setState({
        isPassword:"valid password"
      })
    }
  }
  handleClick(){
    if(this.state.isUser == "valid username" && this.state.isPassword == "valid password")
    {
       this.setState({
           isClick:"login successfull"
       })
    }
    else{
      this.setState({
         isClick:"login failed"
      })
    }
  }    
render() {
  return (
    <div>
      Enter Username:<input type="text" onChange={this.handleUserName}/>{this.state.isUser}<br/><br/>
      Enter password:<input type="password" onChange={this.handlePassWord}/>{this.state.isPassword}<br/>
      <button  onClick={this.handleClick }> login</button>{this.state.isClick}
    </div>
  )
}
}
