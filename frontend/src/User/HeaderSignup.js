import React from 'react'
import '../CSS/headStyle.css';
import { Link } from 'react-router-dom';


function HeaderSignup() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light ">
        <Link className="navbar-brand" to="/">
          <img id='logo1' src="logo.png" alt="" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" id='navelink' to="/contectus">
                Help/Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>


    </div>
  )
}

export default HeaderSignup;