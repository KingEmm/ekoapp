import React, { Component } from 'react'

export class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username:'',
         password:''
      }
    }

    userHandller = (event) => {
        this.setState({
            username:event.target.value
        })

    }

    passwordHandller = (event) => {
        this.setState({
            password:event.target.value
        })

    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => this.setState({posts : data}))
    }


  render() {
    const {posts} =this.state
    return (
      <div className='container'>
        <input className='form-control' value={this.state.username} type="text" placeholder='Enter your name' onChange={this.userHandller} />
        <input className='form-control' value={this.state.password} type="password" placeholder='Enter your Password' onChange={this.passwordHandller} />
        <button className='btn btn-primary'> login</button>
        {/* {posts.map(post =>
          <h2 key ={post.id}>{post.title}</h2>
        )} */}
      </div>

    )
  }
}

export default Form