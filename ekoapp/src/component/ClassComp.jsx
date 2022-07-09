import React, { Component } from 'react'

 class ClassComp extends Component {
  click = () =>{
    alert('Yo niggi')
  }
  render() {
    return (
      <div>
        <h1>Thai is my email - { this.props.email }</h1>
        <button className='btn btn-primary rounded' onClick={ this.props.myClick } onDoubleClick={ this.click }>click again</button>
      </div>
    )
  }
}

export default ClassComp