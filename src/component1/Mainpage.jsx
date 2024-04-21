import React from 'react'
import { MdLocationPin } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/zoom';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';

import { FreeMode,Autoplay,Zoom, Navigation, Pagination } from 'swiper/modules';
import Navbar from './Navbar';
import Footer from './Footer';




function Mainpage() {
  const QuestionAnswerDropdown = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="question-answer-dropdown">
            <button className="question-btn" onClick={toggleDropdown}>{question}</button>
            {isOpen && (
                <div className="answer-container">
                    <p>{answer}</p>
                </div>
            )}
        </div>
    );
};
  
  return (
    
    <>
    <div>
      <Navbar/>
        <div className="container">
        </div>
        <div className="swiper1 mySwiper1">
        <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        zoom={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
  
        modules={[Autoplay,Zoom, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className='Sslider'>
          <div className="swiper-zoom-container">
            <img style={{width:'100%',height:'100%'}} src="https://cdn.yesmadam.com/images/live/app/banner/Franchise-Banner-Desktop-3-11-22.webp" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <img src="https://cdn.yesmadam.com/images/live/app/banner/Bikini-Wax-web-11-4-24.webp" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <img src="https://cdn.yesmadam.com/images/live/app/banner/Rejuvemate-Yourself-female-web-17-1-24.webp" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <img src="https://cdn.yesmadam.com/images/live/app/banner/LED-Facial-web-17-1-24.webp" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <img src="https://cdn.yesmadam.com/images/live/app/banner/Potli-Massage-web-17-1-24.webp" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <img src="https://cdn.yesmadam.com/images/live/app/banner/Rejuvemate-Yourself-male-web-17-01-24.webp" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <img src="https://cdn.yesmadam.com/images/live/app/banner/Rica-Waxing-web-17-1-24.webp" />
          </div>
        </SwiperSlide>
      </Swiper>
</div>
<div className="location">
  <div className="logo"><MdLocationPin style={{fontSize:'40px',color:'#D43369'}} /></div>
  <select name="" id="" style={{width:'200px',height:'40px',border:'none',outline:'none',background:'none',fontSize:'20px',}}>
    <option value="">Bengaluru</option>
    <option value="">Bengaluru</option>
    <option value="">Bengaluru</option>
  </select>
  <div style={{margin:'0 10px',fontSize:'30px',display:'flex',alignItems:'center',justifyContent:'center'}}><IoSearchOutline />  <input type="text" placeholder='Search for services' style={{fontSize:'20px',border:'none',outline:'none',background:'none',margin:'0 10px',padding:'0 10px'}} />

</div>
</div>
            <div className="post">
                <h1><span>India's Most</span>Affordable Home Salon</h1>

                <div className="postdiv">
                    <div className="postbox"><img src='https://cdn.yesmadam.com/images/live/category/at-home-salon-main-category-23-11-22.jpg' alt="" />
                        <p>Salone at Home</p>
                    </div>
                    <div className="postbox"><img src="https://cdn.yesmadam.com/images/live/category/female-spa-main-category-23-11-22.jpg" alt="" />
                        <p>Spa at Home</p>
                    </div>
                    <div className="postbox"><img src="https://cdn.yesmadam.com/images/live/category/led-facial-main-category-23-11-22.jpg" alt="" />
                        <p>Advanced Treatment</p>
                    </div>
                    <div className="postbox"><img src="https://cdn.yesmadam.com/images/live/category/male-massage-main-category-23-11-22.jpg" alt="" />
                        <p>Male Spa</p>
                    </div>
                    <div className="postbox"><img src="https://cdn.yesmadam.com/images/live/category/pre-bridal-main-category-23-11-22.jpg" alt="" />
                        <p>Male Grouming</p>
                    </div>
                    <div className="postbox"><img src="https://cdn.yesmadam.com/images/live/category/pre-bridal-main-category-23-11-22.jpg" alt="" />
                        <p>Hair Studio</p>
                    </div>
                    <div className="postbox"><img src="https://cdn.yesmadam.com/images/live/category/male-massage-main-category-23-11-22.jpg" alt="" />
                        <p>Pre Bridal</p>
                    </div>
                    <div className="postbox"><img src="https://cdn.yesmadam.com/images/live/category/pre-bridal-main-category-23-11-22.jpg" alt="" />
                        <p>MakeUp at Home</p>
                    </div>
                </div>
            </div>

            <div className="choosemadam">
            <h1>why choose yes madam</h1>
            
            <div className="chooseposter">
                <div className="madamimage">
                    <img src="https://www.yesmadam.com/static/images/why_3.webp" alt="" />
                </div>
                <h3>Trained and Verified Experts</h3>
                <p>We at Yes Madam believe in working with the utmost professionalism. Thus, our clients are served
                    only
                    by well-experienced and skilled professionals.</p>
            </div>
            <div className="chooseposter">
                <div className="madamimage">
                    <img src="https://www.yesmadam.com/static/images/why_1.webp" alt="" />
                </div>
                <h3>Trained and Verified Experts</h3>
                <p>We at Yes Madam believe in working with the utmost professionalism. Thus, our clients are served
                    only
                    by well-experienced and skilled professionals.</p>
            </div>
            <div className="chooseposter">
                <div className="madamimage">
                    <img src="https://www.yesmadam.com/static/images/why_2.webp" alt="" />
                </div>
                <h3>Trained and Verified Experts</h3>
                <p>We at Yes Madam believe in working with the utmost professionalism. Thus, our clients are served
                    only
                    by well-experienced and skilled professionals.</p>
            </div>
        </div>
        <div class="three-box-div">
            <img src="https://www.yesmadam.com/static/images/banner.webp" alt=""/>
        </div><br /><br />
            <div className='mainCatsection'>
            <h2>Beauty</h2><div className='hrline'>k</div><br />
        <div class="category-section">
            <Swiper
        slidesPerView={5}
        spaceBetween={30}
        // freeMode={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}

        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide style={{height:'260px',borderRadius:'10px'}}><img src="https://cdn.yesmadam.com/images/live/app/mainsubcategory/1609242135931.jpg" alt="" /><h3 style={{textAlign:'center'}}>hello</h3></SwiperSlide>
        <SwiperSlide style={{height:'260px',borderRadius:'10px'}}><img src="https://cdn.yesmadam.com/images/live/app/mainsubcategory/1609242135931.jpg" alt="" /><h3 style={{textAlign:'center'}}>hello</h3></SwiperSlide>
        <SwiperSlide style={{height:'260px',borderRadius:'10px'}}><img src="https://cdn.yesmadam.com/images/live/app/mainsubcategory/1609242135931.jpg" alt="" /><h3 style={{textAlign:'center'}}>hello</h3></SwiperSlide>
        <SwiperSlide style={{height:'260px',borderRadius:'10px'}}><img src="https://cdn.yesmadam.com/images/live/app/mainsubcategory/1609242135931.jpg" alt="" /><h3 style={{textAlign:'center'}}>hello</h3></SwiperSlide>
        <SwiperSlide style={{height:'260px',borderRadius:'10px'}}><img src="https://cdn.yesmadam.com/images/live/app/mainsubcategory/1609242135931.jpg" alt="" /><h3 style={{textAlign:'center'}}>hello</h3></SwiperSlide>
        <SwiperSlide style={{height:'260px',borderRadius:'10px'}}><img src="https://cdn.yesmadam.com/images/live/app/mainsubcategory/1609242135931.jpg" alt="" /><h3 style={{textAlign:'center'}}>hello</h3></SwiperSlide>
        <SwiperSlide style={{height:'260px',borderRadius:'10px'}}><img src="https://cdn.yesmadam.com/images/live/app/mainsubcategory/1609242135931.jpg" alt="" /><h3 style={{textAlign:'center'}}>hello</h3></SwiperSlide>
        <SwiperSlide style={{height:'260px',borderRadius:'10px'}}><img src="https://cdn.yesmadam.com/images/live/app/mainsubcategory/1609242135931.jpg" alt="" /><h3 style={{textAlign:'center'}}>hello</h3></SwiperSlide>
        <SwiperSlide style={{height:'260px',borderRadius:'10px'}}><img src="https://cdn.yesmadam.com/images/live/app/mainsubcategory/1609242135931.jpg" alt="" /><h3 style={{textAlign:'center'}}>hello</h3></SwiperSlide>
      </Swiper>

        </div>
        </div>
        <div className="white-box">
            <div className="download-box">
                <div className="mobile-input-box">
                    <h1 style={{fontSize:'35px'}}>Download via SMS</h1>
                    <h3>Get a link via SMS to install the app. Fill your number down here.</h3>
                    <button style={{position:'absolute',top:'175px',left:'10px',background:'white',color:'black'}}>+91</button><input type="text"/><button>send</button>
                    <div className="appstoreimage">
                        <img style={{margin:'10px'}}src="https://www.yesmadam.com/static/images/google_play.webp" alt=""/>
                        <img style={{margin:'10px'}} src="https://www.yesmadam.com/static/images/app_store.webp" alt=""/>
                    </div>
                </div>
                <div className="mobile-input-image"><img src="https://www.yesmadam.com/static/images/app_img.webp" alt=""/></div>
            </div>
        </div>
        <div className="faq-page">
        </div>
        <Footer/>
    </div>
    </>
  )
}

export default Mainpage
