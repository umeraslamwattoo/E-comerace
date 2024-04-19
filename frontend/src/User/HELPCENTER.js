import React, { useEffect, useState } from 'react'
import '../CSS/headStyle.css';
import { Link, useNavigate } from 'react-router-dom';
import Footer from './Footer';

function HELPCENTER() {
  const Navigate = useNavigate();
const empty = {
  firstName :"",
  lastName :"",
  number: "",
  email :"",
  discorporation: "",
}

  const [handle, setHandle] = useState({});
  // // Function for handling the input
const handleInput = (e) => {
  const { name, value } = e.target;
  setHandle({ ...handle, [name]: value });
  console.log(handle)
}
const HelpUser= async ()=>{
const response = await fetch("http://localhost:5001/helpcenter", {
      method: "post",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(handle),
    });
    alert("Your Message was sent successfully")
    setHandle(empty);
    Navigate('/');
};


  return (
    <div>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light ">
          <Link className="navbar-brand" to="/">
            <img id='logo1' src="logo.png" alt="" />
          </Link>
          <button className="navbar-toggler" type="button"
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
              </li>
            </ul>
            <ul className="navbar-nav ">
              <li className="nav-item">
                <Link to="/userlogin" className='nav-link' >
                  <button className='btn btn-outline-success'>
                    <b><i class="fa-solid fa-user"></i> Login</b>
                  </button>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/usersignup" className='nav-link' >
                  <button id='icon1' className='btn btn-outline-warning '>
                    <b><i class="fa-solid fa-right-to-bracket"></i> SignUp</b>
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div id='helpcontectmaindiv'>
        <h4 className='text-center'>WRITE YOUR PROBLEM!</h4>
        <div  id='helpmain'>
        <div className='contectmainediv'>
          <div className='col-md-8 offset-2 mt-3'>
            <div className='form-group'>
              <label><b></b></label>
              <input id='inputhelp' onChange={handleInput} name='firstName' type='text' placeholder='First Name'  />
            </div>
            <div className='form-group'>
              <label><b></b></label>
              <input  onChange={handleInput} id='inputhelp' name='lastName' type='text'  placeholder='Last Name' />
            </div>
            <div className='form-group'>
              <label><b></b></label>
              <input name='phone' onChange={handleInput} type='number' id='inputhelp' placeholder='Phone'  />
            </div>
            <div className='form-group'>
              <label><b></b></label>
              <input name='email' onChange={handleInput} type='email' id='inputhelp'  placeholder='Email' />
            </div>
            <div className='form-group'>
              <label><b></b></label>
              <textarea name='discorporation' onChange={handleInput} type='text' rows="4"  id='textareainputhelp' placeholder='Write what type of problem you face' />
            </div>

            <button onClick={HelpUser} className='btn btn-outline-primary'><b>Submit</b>

            </button>
          </div>
        </div>
        </div>
      </div>  
      <Footer/>
    </div>
  )
}

export default HELPCENTER