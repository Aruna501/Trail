import React, { Component } from 'react'

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import './styles.css'


export class Loginform extends Component {
  render() {
    return (
      <div className='container'>
          <h2>WELCOME!</h2>
          <div className='login-wrapper'>
          <div className='already-registered-form'>

          <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>ALREADY REGISTERED? </Form.Label>
        <Form.Control  className='spc-label' type="email" placeholder="Email address" />
                <Form.Control  className='spc-label' type="password" placeholder="Password" />
                <p className='hint-align'>i forget password</p>
                {/* <br/> */}
                <Button className='spc-label' variant="primary" type="submit">
                SIGN IN
      </Button>
      <div className='check-design'>
              <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked /> Remember
              </div>
      </Form.Group>
      </Form>
      </div>
        <div className="vr"></div>
      <div  className='new-customer-form'>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>NEW CUSTOMER?</Form.Label>
        <Form.Control  className='spc-label' type="password" placeholder="Email address" />
        <Form.Control  className='spc-label'type="password" placeholder="Password" />
      <Button className='spc-label' variant="primary" type="submit">
        CREATE ACCOUNT
      </Button>
      </Form.Group>
       </Form>

          </div>
          </div>
                </div>
    )
  }
}

export default Loginform