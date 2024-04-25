import React from 'react'

function Login() {
  return (
    <>
    <div className='login-page'>
      <h2>MY ACCOUNT</h2>
      <div className="sublog-page">
      <div className="login-box">
        <h2 >Login </h2><br />
        <h4>If you have an Account with us. please login.</h4><br />
        <input type="text" placeholder='Email' /><br /><br />
        <input type="text" placeholder='Password' /><br /><br />
        <input type="submit" className='lsubmit' style={{fontSize:'15px'}}/>
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
