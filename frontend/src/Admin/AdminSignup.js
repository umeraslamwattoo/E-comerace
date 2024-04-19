import React, { useEffect, useState } from 'react';
import '../CSS/AdminSight.css';
import { useNavigate } from 'react-router-dom';
import Adminasidemenu from './Adminasidemenu';


function AdminSignup() {
  const Navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const empty = {
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    password: ""
  };

  const [handle, setHandle] = useState(empty);
  // Function For handle input 
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


  // Function For fetch data
  const SignupAdmin = async () => {
    if (Object.keys(errors).length > 0) {
      alert('Please fix the errors in the form before submitting.');
      return;
    }

    // Check if email is already registered
    const response = await fetch('http://localhost:5001/adminSignup', {
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
      Navigate('/admindateshow');
    }
  };

  return (
    <div>
      <div className='d-flex'>
        <div>
          <Adminasidemenu />
        </div>
        <div id='main-container'>
          <h2 className='text-center-mainheading'>ADMIN SIGNUP</h2>

          <div id='main-row-signup'>
          <div id='contaierSignup'>
            <div className='row' id='row-mainformhot-signup'>
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
                {errors.lastName && <p id='errorsignup'>{errors.lastName}</p>}
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
              <button onClick={SignupAdmin} id='mainbtnhotcoldadd-signup' className='btn btn-outline-primary'><b>Submit</b>
              </button>

            </div>
          </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default AdminSignup;


