import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';



function Login() {
  const navigate =useNavigate();
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });

    const changeHandler = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
    console.log(credentials)
  };

  const submitHandler = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post('http://localhost:5000/api/login', credentials);
      
      if (response.data.success) {
        const token = response.data.token;
        localStorage.setItem('token', token);
        localStorage.setItem('userId', response.data.userId);
        localStorage.setItem('firstname', response.data.firstname);
        localStorage.setItem('userRole', response.data.userRole);

        if (response.data.userRole === 'user') {
          navigate('/');
        } else if (response.data.userRole === 'admin') {
          navigate('/Cart');
        } else {
          console.error('Unknown role:', response.data.userRole);
        }
      } else {
        toast.error('Login failed: Invalid email or password', {
          position: 'top-center',
          autoClose: 3000,
        });
        console.error('Login failed:', response.data.error);
        }}
 catch (error) {
      // Display error toast if an error occurs during login attempt
      toast.error('An error occurred during login. Please try again later', {
        position: 'top-center',
        autoClose: 3000, // Auto close after 3 seconds
      });
      console.error('Login error:', error);
    }
  };
  
  return (
    <>
    <div className='login-page'>
      <h2>MY ACCOUNT</h2>
      <div className="sublog-page">
      <div className="login-box">
        <h2 >Login </h2><br />
        <h4>If you have an Account with us. please login.</h4><br />
        <input type="email" onChange={changeHandler} name='email' placeholder='Enter your email' /><br /><br />
        <input type="password" onChange={changeHandler} name='password' placeholder='Enter your password' /><br /><br />
        <input type="submit" onClick={submitHandler} className='lsubmit' style={{fontSize:'15px'}}/>
      </div> 
      <div className="login-box">
        <h2>NEW CUSTOMER? </h2>
        <div style={{ fontSize:'15px',margin:'15px 0'}}>Registering for this site history. We'll get a new account<br/><br /> set up for your in no time. For this will only ask yor for<br/><br /> information necessary to make the puchase process faster and easier
</div><br />
      <div className="lrsubmit"><a href="/Signup">CREATE AN ACCOUNT</a></div>
      </div> 
      </div>
    </div>
    </>
  )
}

export default Login
