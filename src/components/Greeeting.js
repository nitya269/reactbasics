import React from 'react'

function Greeeting(){
  if(props.name!==''){
    return (
        <div>
          <h1>welcome to miss{props.name}</h1>
        </div>
      )
  }else{
    return (
        <div>
          <h1>welcome to guest</h1>
        </div>
      )
  }
}
      export default Greeeting
