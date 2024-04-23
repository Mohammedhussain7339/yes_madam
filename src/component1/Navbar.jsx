import React from "react";
import { Link } from "react-router-dom";
// import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <>
      <div>
        <nav className="nav1">
          <div className="logo">
            <img
              src="https://www.yesmadam.com/static/images/logo_Ym.png"
              alt=""
            />
            |Home Saloon
          </div>
          <div className="signupbox">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/Blog">Blog |</Link>
              </li>
              <li>
                <Link to="">Register As a Professional|</Link>
              </li>
              <li>
                <Link to="/Login">Login</Link>
              </li>
              <li>
                <Link to="/Signup">SignUp</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
