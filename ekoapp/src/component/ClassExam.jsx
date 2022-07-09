import React, { Component } from 'react'

export class ClassExam extends Component {
    myElement = (name) => {
        return name.map(name =>
            <ul key={name}>
                {`${name}`}
            </ul>
            
        )
    }
    
  render() {
    return (
      <div> {this.myElement(this.props.name)}</div>
    )
  }
}

export default ClassExam