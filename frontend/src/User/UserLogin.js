import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import HeaderLogin from './HeaderLogin';
import Footer from './Footer';

function Login() {
  const  Navigate = useNavigate();
  const [handle, setHandle] = useState("");

  const handleInput = (e) => {
      const { name, value } = e.target;
      setHandle({ ...handle, [name]: value });
      console.log(handle)
  }
 
  var logindata = async () => {
    var data = await fetch("http://localhost:5001/userLogin", {
      method: "post",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(handle),
    });
    data = await data.json();
    if (data.message == "User Login successfully") {
      sessionStorage.setItem("firstName", data.recordMatch.firstName);
      sessionStorage.setItem("email", data.recordMatch.email);
      Navigate("/");
    }else {
      alert("Login failed")
    }
   
  }
  return (
    <div>
      <HeaderLogin />
      
      <div id='helpcontectmaindiv'>
        <h4 className='text-center'> LOGIN YOUR ACCOUNT!</h4>
        <div  id='helpmain'>
        <div className='contectmainedivlogin'>
          <div className='col-md-8 offset-2 mt-5'>
            <div className='form-group'>
              <label><b></b></label>
              <input name='email'  onChange={handleInput} type='email' id='inputhelp'  placeholder='Email' />
            </div>
            <div className='form-group'>
              <label><b></b></label>
              <input name='password' onChange={handleInput} type='password' id='inputhelp' placeholder='Password'  />
            </div>
            <button  onClick={logindata} className='btn btn-outline-primary mt-4'><b>Login</b>

            </button>
          </div>
        </div>
        

        </div>
        <div id='loginpickmain'>
        <h4 className='text-center loginpick'>Are you a password? Because my heart is locked, and only you have the key.</h4>
        </div>
      </div>
      
      <Footer/>
    </div>
  );
}

export default Login;
