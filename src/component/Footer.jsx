import React from 'react';

function Footer() {
  return (
    <div className="footer">
      <img src="./pictures/Footer_bg.webp" alt="" />
      <div className="list-box">
        <ul>
          <h1>More from Yes Madam</h1>
          <li><a href="">about us</a></li>
          <li><a href="">privacy policy</a></li>
          <li><a href="">FaQ us</a></li>
          <li><a href="">tems and conditions</a></li>
          <li><a href="">contribute</a></li>
        </ul>
        <ul>
          <h1>Categories</h1>
          <li><a href="">salon at home</a></li>
          <li><a href="">spa at home</a></li>
          <li><a href="">Advanced Treatments</a></li>
          <li><a href="">Male Spa</a></li>
          <li><a href="">Male Grooming</a></li>
          <li><a href="">Hair Studio</a></li>
          <li><a href="">Pre Bridal</a></li>
          <li><a href="">MakeUp At Home</a></li>
        </ul>
        <ul>
          <h1>Work with Us</h1>
          <li><a href="">Franchise</a></li>
        </ul>
        <ul>
          <h1>Contact & Support</h1>
          <li><a href="">contact us</a></li>
          <li><a href="">support@yesmadam.com</a></li>
          <li><a href=""></a></li>
        </ul>
      </div>
      <div className="city-box">
        {[...Array(60)].map((_, index) => (
          <a key={index} href="">delhi</a>
        ))}
      </div>
      <div className="icon-box">
        {[...Array(8)].map((_, index) => (
          <button key={index}><img src="./pictures/insts_new.webp" alt="" /></button>
        ))}
        <img src="./pictures/logo_Ym.png" alt="" />
      </div>
      <p>Copyright 2017-2024 @YesMadam | Powered by: Notion Online Solutions Private Limited</p>
    </div>
  );
}

export default Footer;
