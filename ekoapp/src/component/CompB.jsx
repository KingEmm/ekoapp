import React, { Component } from 'react'
import {MyContext} from '../App'

export class CompB extends Component {
  render() {
    return (
      <div>
        < MyContext.Consumer>
        {
            data => {
                return <h4>{data}</h4>
            }
        }
        </MyContext.Consumer>
      </div>
    )
  }
}

export default CompB