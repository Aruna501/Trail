import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';

export class Count extends Component {
    state={
        count: 0,
    }

    handleIncrement=()=>{
        this.setState({count:this.state.count+1})
    }

    handleDecrement=()=>{
        this.setState({count:this.state.count-1})
    }

  render() {
    return (
      <div>
          <h2>Count value is {this.state.count}.</h2>
          <Button onClick={this.handleIncrement} variant="primary">Increment</Button> <Button onClick={this.handleDecrement} variant="danger">Decrement</Button>
      </div>
    )
  }
}

export default Count