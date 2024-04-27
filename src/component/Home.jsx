import React, { useState,useEffect } from 'react';
import Footer from './Footer';
import './style.css'; // Import your CSS file here
import Navbar from './Navbar';
import Header from './Header';
import Post from './Post';


function Dropdown(props) {
    const toggleDropdown = () => {
      // Your toggleDropdown function logic here
    };
  
    return (
      <div className="dropdown">
        <button className="dropdown-btn" onClick={toggleDropdown}>{props.title}
          <span><img src="./pictures/download.svg" alt="" /></span>
        </button>
        <div className="dropdown-container">
          <p>{props.content}</p>
        </div>
      </div>
    );
  }

function Home() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const swiper = new Swiper('.mySwiper', {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
      },
    });
    return () => {
      swiper.destroy();
    };
  }, []);

  const catPre = () => {
    setCount(count + 1);
  };

  const catNext = () => {
    setCount(count - 1);
  };

  const catSlider = () => {
    const category = document.querySelectorAll('.category-product');
    category.forEach((slide) => {
      slide.style.transform = `translateX(${count * 230}px)`;
    });
  };

  const toggleDropdown = (event) => {
    event.target.classList.toggle('active');
  };

  return (
    <>
    <Navbar/>
    <Header/>
    <Post/>
    <div className="white-box">
      <div className="download-box">
        <div className="mobile-input-box">
          <h1>Download via SMS</h1>
          <h3>Get a link via SMS to install the app. Fill your number down here.</h3>
          <input type="text" /><button>send</button>
          <div className="appstoreimage">
            <img src="./pictures/app_store.webp" alt="" />
            <img src="./pictures/google_play.webp" alt="" />
          </div>
        </div>
        <div className="mobile-input-image"><img src="./pictures/app_img.webp" alt="" /></div>
      </div>
      <div className="dropdown-section">
        <Dropdown
          title="Salon at Home"
          content="Going to the salon can be quite tedious but we have a very convenient way out for you. Get rid of all hassles related to getting yourself treated in a salon and consider getting your next beautician at the comfort of your home instead of making the trip. We at Yes Madam offer salon services at home that save you time and money whilst delivering outstanding results for you. Our beauticians bring salon services straight to your home, so there won't be any worry about booking haircut slots anymore, as Yes Madam will bring your desired haircut service at home for you. You won't have to go to Google and search 'Salon at home near me or Salon services near me', just 2 words- Yes Madam, and the job will be done. Our team of service professionals will be at your doorstep to do the needful with the entire setup and safety precautions."
        />
        {/* Repeat other Dropdown components with different titles and content */}
      </div>
    </div>
    <Footer/>
    </>
    );
}

export default Home;
