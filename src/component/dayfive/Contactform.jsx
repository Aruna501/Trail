import React, { Component } from 'react'
import './styles.css'

export class Contactform extends Component {
  render() {
    return (
      <div className='registerform'>
          <div className='bannerform'>
<h3 className='head-align'>Register New Account</h3>
<form className="row g-3">
  <div className="col-md-6">
    <input type="text" className="form-control form-control-banner" placeholder="Name" id="inputEmail4" />
  </div>
  <div className="col-md-6">
  <input type="text" className="form-control form-control-banner" placeholder="Last Name" id="inputEmail4" />
    </div>
  <div className="col-12">
    <input type="text" className="form-control form-control-banner" id="inputAddress" placeholder="Name" />
  </div>
  <div className="col-12">
    <input type="text" className="form-control form-control-banner" id="inputAddress2" placeholder="City" />
  </div>
  <div className="col-12">
    <input type="number" className="form-control form-control-banner" placeholder="Phone Number" id="inputCity" />
  </div>
  <div className="col-12">
    <input type="text" className="form-control form-control-banner" placeholder="Email" id="inputCity" />
  </div>
  <div className="col-md-6"></div>
  <div className="col-md-6">
      <button type="submit" className="btn btn-success aln-banner">Create Account</button>
      </div>
</form>

</div> 
      </div>
    )
  }
}

export default Contactform