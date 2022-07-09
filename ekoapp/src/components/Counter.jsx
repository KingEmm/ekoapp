import React, { Component } from 'react'

export class Counter extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       count:0
    }
  }
  click = () =>{
    this.setState({
      count:this.state.count + 1
    })
  }
  render() {
    return (
      <div> 
        <h3>
          How e be na {this.state.count}
        </h3>
        <button className='btn btn-primary' onClick={this.click} >click</button>
      </div>
      
    )
  }
}

export default Counter