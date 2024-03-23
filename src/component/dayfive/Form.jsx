import React, { Component } from 'react'

export class Form extends Component {
state={
    fname: '',
    lname: '',
    age: 20,
    onSubmitted: false

}

handleChange=(e)=>{
    this.setState({[e.target.name]:e.target.value})
}

handleSubmitted=()=>{
    this.setState({onSubmitted:true})
}

  render() {
    return (
      <div>
          <h2>Student Form</h2>
          <label>First Name</label>
          <input type='text' name='fname' value={this.state.fname} onChange={this.handleChange}/>
          <br/>
          <label>Last Name</label>
          <input type='text' name='lname' value={this.state.lname} onChange={this.handleChange}/>
          <br/>
          <label>Age</label>
          <input type='number' name='age' value={this.state.age} onChange={this.handleChange}/>
          <br/>
          <button onClick={this.handleSubmitted}>Submit</button>
          {this.state.onSubmitted &&
          <div>
          <h2>Name: {this.state.fname} {this.state.lname} </h2>
          <h3>Age: {this.state.age}</h3>
          </div>}
      </div>
    )
  }
}

export default Form