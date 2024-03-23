import React, { Component } from 'react'

class Employee extends Component {
  state={
    name: "Aswini",
    salary: 25000 
  }
  render() {
    return (
      <div>
        <p>Employee name is {this.props.name} and salary is {this.props.salary} </p>
        <p>Employee name is {this.state.name} and salary is {this.state.salary}</p>
        </div>
    )
  }
}

export default Employee