import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';

function Signup() {
  const [userInfo, setUserInfo] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    contact:'',

  });

  const changeHandler=(e)=>{
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
    console.log(userInfo);

  }
  const submitHandler=async(e)=>{
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
      const res = await axios.post("http://localhost:5000/api/register", formData);
  
      console.log("Response:", res); // Log the entire response object
  
      if (res && res.data) {
        console.log("Response Data:", res.data); // Log the response data if available
      } else {
        console.log("No response data received.");
      }
  
      // Optionally, reset the form fields or handle success message/display here
    } catch (err) {
      console.error("Error:", err);
      // Handle error, display error message, etc.
    }
  

  }
  return (
    <>
    <div className='register-page'>
      <div className="register-box">
        <h2 style={{textAlign:'center'}}>CREATE AN ACCOUNT</h2>
        <input type="text" onChange={changeHandler} placeholder='First Name' className='name' value={userInfo.firstname} name='firstname' />
        <input type="text" onChange={changeHandler} placeholder='Last Name ' className='name'value={userInfo.lastname} name='lastname' />
        <input type="text" onChange={changeHandler} placeholder='Age ' className='name' value={userInfo.age} name='age' />
        <select  id="" className='name1' onChange={changeHandler} value={userInfo.gender} name='gender'>
          <option value="" disabled>Select Your Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
          </select>        
        <input type="text" onChange={changeHandler} placeholder='Email' value={userInfo.email} name='email' />
        <input type="text" onChange={changeHandler} placeholder='Password' value={userInfo.password} name='password' />
        <input type="text" onChange={changeHandler} placeholder='Contact Number' value={userInfo.contact} name='contact' />
        
        <input type="submit" onClick={submitHandler} className='rsubmit' />
      </div>
    </div>
    </>
  )
}

export default Signup
