import React, { Component } from 'react'

export class Welcome extends Component {
  state={
    title:"Welcome our Technology!"
  }

  handleChange=()=>{
    this.setState({title: "Hello World!"})
  }

  render() {
    return (
      <div>
          <h2>{this.state.title}</h2>
          <button onClick={this.handleChange}>change</button>
      </div>
    )
  }
}

export default Welcome