import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoIosLogOut } from "react-icons/io";



function Navbar() {
  const navigate= useNavigate();
  let Userinfo = { firstname: localStorage.getItem("firstname") };
  console.log(Userinfo.firstname)
  const logoutHandler=()=>{
      localStorage.removeItem("token");
      localStorage.removeItem("firstname");
      localStorage.removeItem("userId");
      alert("logout");
      navigate("/Login");
  
  }
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
              <li style={{position:'relative',left:'70px',fontSize:'24px'}}>Welcome <b style={{color:'gray',textTransform:'capitalize',fontSize:'24px'}}>{Userinfo.firstname}</b></li>
              {localStorage.getItem("token") ? (
              <i
                className="logout"
                style={{ color: "red", cursor: "pointer" }}
                onClick={logoutHandler}>
                <IoIosLogOut />
              </i>
            ) : (
              <Link to="/">
                {" "}
                <i
                                className="logout"

                  style={{
                    color: "green",
                    cursor: "pointer",
                  }}>
                  {" "}
                  <IoIosLogOut />
                </i>
              </Link>
            )}
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
