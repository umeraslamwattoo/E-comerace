import React, { useEffect, useState } from 'react';
import Headersignup from './HeaderSignup';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';

function Signup() {
  const empty = {
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    password: '',
  };
  const Navigate = useNavigate();
  const [handle, setHandle] = useState(empty);
  const [errors, setErrors] = useState({});
  
  const handleInput = (e) => {
    const { name, value } = e.target;
    setHandle({ ...handle, [name]: value });

    // Validation logic
    const regexTenDigits = /^\d{1,10}$/;
    const regexPassword = /^.{6,}$/;
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const newErrors = { ...errors };

    if (name === 'firstName') {
      if (value.length > 10) {
        newErrors.firstName = 'First name should be 10 digits or less';
      } else {
        delete newErrors.firstName;
      }
    } else if (name === 'lastName') {
      if (value.length > 10) {
        newErrors.lastName = 'Last name should be 10 digits or less';
      } else {
        delete newErrors.lastName;
      }
    }
    
    setErrors(newErrors);
  };

  const SignupUser = async () => {
    // Check if there are any errors
    if (Object.keys(errors).length > 0) {
      alert('Please fix the errors in the form before submitting.');
      return;
    }

    // Check if email is already registered
    const response = await fetch('http://localhost:5001/userSignup', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(handle),
    });

    const data = await response.json();

    if (data === 'This email is Already in Exist') {
      alert('This email is already registered. Please use a different email.');
    } else {
      setHandle(empty);
      Navigate('/userlogin');
    }
  };

  return (
    <div>
      <Headersignup />

      <div id='helpcontectmaindiv'>
        <h4 className='text-center'>SIGN-UP YOUR ACCOUNT!</h4>
        <div id='helpmain'>
          <div className='contectmainedivsignup'>
            <div className='col-md-8 offset-2 mt-3'>
            <div className='form-group'>
          <label><b></b></label>
          <input
            id='inputhelp'
            onChange={handleInput}
            name='firstName'
            type='text'
            placeholder='First Name'
          />
          {errors.firstName && <p id='errorsignup'>{errors.firstName}</p>}
        </div>

        <div className='form-group'>
          <label><b></b></label>
          <input
            onChange={handleInput}
            id='inputhelp'
            name='lastName'
            type='text'
            placeholder='Last Name'
          />
          {errors.lastName && <p  id='errorsignup'>{errors.lastName}</p>}
        </div>
              <div className='form-group'>
                <label><b></b></label>
                <input name='phone' onChange={handleInput} type='number' id='inputhelp' placeholder='Phone' />
              </div>
              <div className='form-group'>
                <label><b></b></label>
                <input name='email' onChange={handleInput} type='email' id='inputhelp' placeholder='Email' />
              </div>
              <div className='form-group'>
                <label><b></b></label>
                <input name='password' onChange={handleInput} type='password' id='inputhelp' placeholder='Password' />
              </div>
              <button onClick={SignupUser} className='btn btn-outline-primary'><b>Submit</b>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Signup
