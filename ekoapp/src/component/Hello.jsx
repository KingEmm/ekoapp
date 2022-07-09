import React from 'react'

function  Hello(props) {
  function click(){
    prompt('What is your name'),5000
  }

  return (
    <React.Fragment>
      <h1>Fragment Example</h1>
      <h2>My name is <strong>{ props.name } { props.lastname }</strong> </h2>
      <button className='btn btn-info rounded' onClick={click}>Click</button>
    </React.Fragment>

    
  )
}

export default  Hello;