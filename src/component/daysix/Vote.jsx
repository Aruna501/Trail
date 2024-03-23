import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './style.css'

export class Vote extends Component {

  state={
        count: 0
        }

  handleIncreament=()=>{
    this.setState({count:this.state.count+1})
  }

  render() {
    return (
      <div className='container vote'>
          
          
        <div className='cont-bord'>
            <div className='cont'>
            <p> {this.props.name} </p>  
            <p > {this.state.count} </p> 
            <p> <button onClick={this.handleIncreament}> vote </button> </p>
        </div>
                </div>

      </div>
    )
  }
}

export default Vote