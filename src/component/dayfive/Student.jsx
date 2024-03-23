import React, { Component } from 'react'

export class Student extends Component {
    state={
        name: "Raj",
        age: 31,
    }
  render() {
    return (
      <div>
          <p>My name is <span style={{color: 'gold', fontWeight: 'bold', textDecoration:'underline'}}> {this.state.name}</span> and age is <span style={{color: 'greenyellow'}}>{this.state.age}</span>.</p>
      </div>
    )
  }
}

export default Student