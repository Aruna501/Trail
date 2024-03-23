import React, { Component } from 'react'
import './styles.css';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';


export class Registerform extends Component {
  render() {


    return (
      <div className='regiform'>
<h2>Contact Us</h2>
<hr/>
    <Form>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="email" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Last Name<span className="asterisk">*</span></Form.Label>
          <Form.Control type="password" />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>E-mail</Form.Label>
          <Form.Control type="email" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Business Phone</Form.Label>
          <Form.Control type="password" />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Company Name<span className="asterisk">*</span></Form.Label>
          <Form.Control type="email" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Job Title</Form.Label>
          <Form.Control type="password" />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Street 1</Form.Label>
        <Form.Control  />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>City</Form.Label>
          <Form.Control type="email" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>State/Province</Form.Label>
          <Form.Control type="password" />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Zip/Postal Code</Form.Label>
          <Form.Control type="email" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Country/Region</Form.Label>
          <Form.Control type="password" />
        </Form.Group>
      </Row>


      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Topic<span className="asterisk">*</span></Form.Label>
        <Form.Control  />
      </Form.Group>

         </Form>

      </div>
    )
  }
}

export default Registerform