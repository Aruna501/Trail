import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link} from 'react-router-dom';
import { FaFacebook, FaTwitter, FaBehance, FaLinkedin } from 'react-icons/fa';

import './Nav.css'

function Navbar() {
  return (
    
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className='nav-container'>
      <div>
    <Link className="navbar-brand nav-container-left" to="/">Coding  <span className='addict-color'> Addict</span></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    </div>
        <div className="nav-container-middle collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/profile">Profile</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/contact">Contact</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/projects">Projects</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/errorPage">ErrorPage</Link>
        </li>
              </ul>
                            </div>
                                <div className="nav-container-right collapse navbar-collapse " id="navbarText">
                  <a href="https://facebook.com">
          <FaFacebook />
        </a>
        <a href="https://twitter.com">
          <FaTwitter />
        </a>
        <a href="https://www.linkedin.com/">
          <FaLinkedin />
        </a>
        <a href="https://behance.net/">
                 <FaBehance />
        </a>
                      </div>
    </div>
  
</nav>

  )
}

export default Navbar