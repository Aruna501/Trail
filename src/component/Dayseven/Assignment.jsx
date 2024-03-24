import React, { Component } from "react";
import './style.css'

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
    } else {
      this.setState({ [e.target.name]: e.target.value });
    }
  };

  handleRegister = () => {
    if (
      !this.state.title ||
      !this.state.fname ||
      !this.state.lname ||
      !this.state.date ||
      !this.state.email
    ) {
      alert("Please fill in all fields");
    }

    if (!this.state.password || !this.state.confirmpassword) {
      alert("Please fill in both password fields");
      return;
    }

    if (this.state.password === this.state.confirmpassword) {
      this.setState({ onRegister: true });
    } else {
      alert("Password should match");
    }
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
                required
              >
                <option value="Select your assignment"></option>
                <option value="reactjs">React Js</option>
                <option value="reactnative">React Native</option>
                <option value="python">Python</option>
                <option value="dotnet">Dotnet</option>
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
            <button className="btn btn-secondary">Reset</button>
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
    );
  }
}

export default Assignment;
