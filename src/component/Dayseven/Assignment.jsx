import React, { Component } from "react";
import './style.scss'

export class Assignment extends Component {
  state = {
    title: "",
    fname: "",
    lname: "",
    email: "",
    password: "",
    confirmpassword: "",
    date: "",
    onRegister: false,
    checkbox: false,
  };

  handleChange = (e) => {
    if (e.target.type === "checkbox") {
      this.setState({ [e.target.name]: e.target.checked });
    }
    else {
      this.setState({ [e.target.name]: e.target.value });
    }
  };


  handleRegister = () => {
    if (
      !this.state.title ||
      !this.state.fname ||
      !this.state.lname ||
      !this.state.date ||
      !this.state.email ||
      !this.state.password || !this.state.confirmpassword
    ) {
      alert("Please fill in all fields");
                }
      else if (!this.validateEmail(this.state.email))
      {
        alert("Please enter a valid email address");
    }

    else if (this.state.password.length < 8) {
              alert("Password must be at least 8 characters long");
                    }
    else if (this.state.password !== this.state.confirmpassword) {
      alert("Password should match");
          }
    else if (!this.state.checkbox) {
            alert("Please accept Terms & Conditions");
          }
          else{
      this.setState({ onRegister: true });
    }
  };

  validateEmail = (email) => {
        const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    return isValidEmail;
  };

  handleReset = () => {
    this.setState({
      title: "",
      fname: "",
      lname: "",
      email: "",
      password: "",
      confirmpassword: "",
      date: "",
      onRegister: false,
      checkbox: false,
    });
  };

  render() {
    return (
      <div className="ex-cls1">
      <div className="container">
        <h2>Assignment</h2>

        {!this.state.onRegister && (
          <div className="row main-container">
            <div className="col-2">
              <label>Title</label>
              <select
                name="title"
                value={this.state.title}
                onChange={this.handleChange}
                required >
                  <option value=""></option>
                  <option value="reactjs">Mr.</option>
                <option value="reactnative">Mrs.</option>
                              </select>
              </div>
              <div className="col-5">
              <label>First Name</label>
              <input
                type="text"
                name="fname"
                value={this.state.fname}
                onChange={this.handleChange}
                required
              />
              </div>
              <div className="col-5">
              <label>Last Name</label>
              <input
                type="text"
                name="lname"
                value={this.state.lname}
                onChange={this.handleChange}
                required
              />
            </div>
            <div className="assgn-col">
            <div className="col-6">
              <label>Date of Birth</label>
              <input
                type="date"
                name="date"
                value={this.state.date}
                onChange={this.handleChange}
                required
              />
</div>
              <div className="col-6">
              <label>Email</label>
              <input
                type="text"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
                required
              />
            </div>
            </div>
            <div className="assgn-col">
            <div className="col-6">
              <label>Password</label>
              <input
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
                required
              />
              </div>
              <div className="col-6">
              <label>Confirm Password</label>
              <input
                type="password"
                name="confirmpassword"
                value={this.state.confirmpassword}
                onChange={this.handleChange}
                required
              />
            </div>
            </div>
            <div  className="col-12">
              <div className="terms-checkbox">
              <input
                type="checkbox"
                name="checkbox"
                checked={this.state.checkbox}
                onChange={this.handleChange}
                required
              /> 
              <span> Accept Terms & Conditions </span>
            </div>
            </div>
<div className="register-btn">
            <button onClick={this.handleRegister} className="btn btn-primary">
              Register
            </button>
            <button  onClick={this.handleReset} className="btn btn-secondary">Reset</button>
            </div>
          </div>
        )}
        <div>
          {this.state.onRegister && (
            <div>
              <p>
                <b>Title:</b> {this.state.title}
              </p>
              <p>
                <b>Name:</b> {this.state.fname} {this.state.lname}
              </p>
              <p>
                <b>Date of Birth:</b> {this.state.date}
              </p>
              <p>
                <b>Email:</b>
                {this.state.email}
              </p>
              <button onClick={this.handleReset} className="btn btn-secondary">
                Reset
              </button>
            </div>
          )}
        </div>
      </div>
      </div>
    );
  }
}

export default Assignment;
