import React, { Component } from 'react'
import './style.scss'

export class Travellingform extends Component {
    state={
        name: '',
        age: '',
        gender: '',
        source: '',
        destination: '',
        onSubmit: false,
        checkbox: false,
    }

    handleChange=(e)=>{
        if (e.target.type === "checkbox") {
            this.setState({ [e.target.name]: e.target.checked });
        }
            else
            {
        this.setState({ [e.target.name]: e.target.value })
    }
    }

    handleSubmit=()=>{
        if(!this.state.name || !this.state.age || !this.state.gender || !this.state.source || !this.state.destination)
        {
            alert("Please fill in all fields");
          } else
        this.setState ({onSubmit: true})
    }

  render() {
    return (
      <div className='container travel-banner' >
          <h2 className='tour-design'>Travel Tour</h2>
          <div>
              { !this.state.onSubmit && (
              <div className='travel-container row'>
              <div className='field-name'>
              <label className='tour-label'>Name of passenger</label>
              <input type='text' name='name' value={this.state.name} onChange={this.handleChange} />
                            </div>
              <div className='field-age'>
              <label className='tour-label'>Age</label>
              <input type='number' name='age' value={this.state.age} onChange={this.handleChange} />
                            </div>
              <div className='field-gender'>
              <label className='tour-label'>Gender</label>
              <span>
              <input type='radio' name='gender' value="Female" onChange={this.handleChange} /> <label>Female</label>
              </span>
              <span>
              <input type='radio' name='gender' value="Male" onChange={this.handleChange} /> <label>Male</label>
              </span>
              <span>
              <input type='radio' name='gender' value="Others" onChange={this.handleChange} /> <label>Others</label>
              </span>
              </div>
              <div  className='field-source'>
                  <label className='tour-label'>Source</label>
                  <select
                name="source"
                value={this.state.source}
                onChange={this.handleChange}
                required
              >
                <option value=""></option>
                <option value="Chennai">Chennai</option>
                <option value="Bangalore">Bangalore</option>
                <option value="Hyderabad">Hyderabad </option>
                              </select>
              </div>
              <div  className='field-destination'>
                  <label className='tour-label'>Destination</label>
                  <select
                name="destination"
                value={this.state.destination}
                onChange={this.handleChange}
                required
              >
                <option value=""></option>
                <option value="Delhi">Delhi</option>
                <option value="Kolkata">Kolkata</option>
                <option value="Simla">Simla </option>
                              </select>
              </div>
              <div  className="terms-checkbox1">
                            <input
                type="checkbox"
                name="checkbox"
                checked={this.state.checkbox}
                onChange={this.handleChange}
                required /> <span> I Agree all terms and conditions </span>
            </div>
          
          <button className='btn-submit' onClick={this.handleSubmit} >Submit</button>
          </div>
          )
        }

{
this.state.onSubmit && (
    <div>
    <div>Name of passenger: {this.state.name}</div>
    <div>Age is {this.state.age}</div>
    <div> Gender: {this.state.gender}</div>
    <div> Travelling from {this.state.source} to {this.state.destination}</div>
    <div>{this.state.checkbox? "Yes, Agreed all terms and conditions." :"No, Agreed all terms and conditions."} </div>
    
    </div>
)
}
</div>
          </div>
    )
  }
}

export default Travellingform