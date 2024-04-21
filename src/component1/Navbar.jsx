import React from "react";
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
                <a href="/">Home</a>
              </li>
              <li>
                <a href="../SpaCet">Blog |</a>
              </li>
              <li>
                <a href="">Register As a Professional|</a>
              </li>
              <li>
                <a href="">Login</a>
              </li>
              <li>
                <a href="">SignUp</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
