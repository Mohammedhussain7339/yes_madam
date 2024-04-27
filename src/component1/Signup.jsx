import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Signup() {
  const toastContainerStyle = {
    width: '300px', // Set the width
    height: '50px',
  };
  
  const navigate=useNavigate();
  const [userInfo, setUserInfo] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    contact:'',
    age:'',
    gender:''

  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
    console.log('Updated userInfo:', userInfo); // Log updated userInfo
  }

  const submitHandler=async(e)=>{
    const requiredFields = ['firstname', 'lastname', 'email', 'password','age','gender'];
    const emptyFields = requiredFields.filter(field => !userInfo[field]);

    if (emptyFields.length > 0) {
    toast.error('All fields are compulsory to fill');
      return;
    }

    e.preventDefault();
    console.log("Facility Name:", userInfo);

    const formData = new FormData();
    formData.append("firstname", userInfo.firstname);
    formData.append("lastname", userInfo.lastname);
    formData.append("age", userInfo.age);
    formData.append("gender", userInfo.gender);
    formData.append("email", userInfo.email);
    formData.append("password", userInfo.password);
    formData.append("contact", userInfo.contact);
    // console.log(firstname);

    try {
      const response = await axios.post('http://localhost:5000/api/register', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      // Log any response data if needed
      console.log('Response:', response.data);
      navigate('/Login');

      
    } catch (error) {
      console.error('Error during registration:', error);
      toast.error('Please! fill out all required details')
      }
  };
  

  
  return (
    <>
    <div className='register-page'>
      <div className="register-box">
        <h2 style={{textAlign:'center'}}>CREATE AN ACCOUNT</h2>
        <input type="text" onChange={changeHandler} placeholder='First Name' className='name' value={userInfo.firstname} name='firstname' required />
        <input type="text" onChange={changeHandler} placeholder='Last Name ' className='name'value={userInfo.lastname} name='lastname'required  />
        <input type="text" onChange={changeHandler} placeholder='Age ' className='name' value={userInfo.age} name='age'required  />
        <select  id="" required className='name1' onChange={changeHandler} value={userInfo.gender} name='gender' >
          <option value="" disabled>Select Your Gender</option >
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
          </select>        
        <input type="text" onChange={changeHandler}required  placeholder='Email' value={userInfo.email} name='email' />
        <input type="text" onChange={changeHandler}required  placeholder='Password' value={userInfo.password} name='password' />
        <input type="text" onChange={changeHandler}required  placeholder='Contact Number' value={userInfo.contact} name='contact' />
        
        <input type="submit" onClick={submitHandler} className='rsubmit' />
        <ToastContainer style={toastContainerStyle} />
      </div>

    </div>
    </>
  )
}

export default Signup
