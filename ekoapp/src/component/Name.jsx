import React, { Component } from 'react'

export class Name extends Component {
    constructor (){
        super()
        this.state = {
            name:'emmanuel'
        }
    }
    click = () =>{
        this.setState({
            name:this.state.name === 'emmanuel' ? "Keolog" : 'emmanuel'
        })
    }
  render() {
    return (
      <div>
        <h1>Hello { this.state.name } </h1>
        <button className='btn btn-primary' onClick={ this.click }>Change name</button>
      </div>
    )
  }
}

export default Name