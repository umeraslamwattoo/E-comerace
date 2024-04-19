import React from 'react'
import '../CSS/headStyle.css';
import { Link } from 'react-router-dom';


function HeaderLogin() {
  
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
          <div id='signupicon'>
            <ul className="navbar-nav ">

              <li className="nav-item">
                <Link to="/usersignup" className='nav-link' >
                <button id='icon1' className='btn btn-outline-warning '>
                    <b><i    class="fa-solid fa-right-to-bracket"></i> SignUp</b>
                  </button>
                </Link>
              </li>

            </ul>
            <ul className="navbar-nav ">
              <li className="nav-item" >
                <Link to="/adminlogin"> <button id='icon1' className='btn btn-outline-warning '>
                <b><i class="fa-solid fa-lock"></i> Admin</b>
                  </button></Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>


    </div>
  )
}

export default HeaderLogin;