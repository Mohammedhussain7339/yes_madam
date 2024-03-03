import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';



export default function SpaCet() {
  return (
    
    <>
    <div className='spacat'>
      <div className="maincontainer">
        <div className="spa">
          <div className="subspa">
            <h2>Male Spa</h2>
            <div className="spaimgbox"> <img src="https://cdn.yesmadam.com/images/live/category/male-spa-category-icon-15-10-22.jpg" alt="" /></div>
            <br /><hr />
          </div>
          <div className="service">
            <h3 style={{marginLeft:'20px'}}>Select Your Service</h3>
            <div className="servicebox">
              <div className="subsbox">
                <img src="https://cdn.yesmadam.com/images/live/app/mainsubcategory/hot-sale-icon-28-11-22.jpg" alt="" />
              </div>
              <div className="subsbox">
              <img src="https://cdn.yesmadam.com/images/live/app/mainsubcategory/hot-sale-icon-28-11-22.jpg" alt="" />

              </div>
              <div className="subsbox">
                              <img src="https://cdn.yesmadam.com/images/live/app/mainsubcategory/hot-sale-icon-28-11-22.jpg" alt="" />

              </div>
              <div className="subsbox">
                              <img src="https://cdn.yesmadam.com/images/live/app/mainsubcategory/hot-sale-icon-28-11-22.jpg" alt="" />

              </div>
              <div className="subsbox">
                              <img src="https://cdn.yesmadam.com/images/live/app/mainsubcategory/hot-sale-icon-28-11-22.jpg" alt="" />

              </div>
              <div className="subsbox">
                              <img src="https://cdn.yesmadam.com/images/live/app/mainsubcategory/hot-sale-icon-28-11-22.jpg" alt="" />

              </div>
              <div className="subsbox">
                              <img src="https://cdn.yesmadam.com/images/live/app/mainsubcategory/hot-sale-icon-28-11-22.jpg" alt="" />

              </div>
              <div className="subsbox">
                              <img src="https://cdn.yesmadam.com/images/live/app/mainsubcategory/hot-sale-icon-28-11-22.jpg" alt="" />

              </div>
              <div className="subsbox">
                              <img src="https://cdn.yesmadam.com/images/live/app/mainsubcategory/hot-sale-icon-28-11-22.jpg" alt="" />

              </div>
              <div className="subsbox">
                              <img src="https://cdn.yesmadam.com/images/live/app/mainsubcategory/hot-sale-icon-28-11-22.jpg" alt="" />

              </div>
            </div>
          </div>
        </div>
        <div className="sidebar">
            <div className="slider">
            <Swiper
          className="mySwiper swiper-h"
          spaceBetween={50}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          style={{background:'red',height:'220px'}}
          
        >
          <SwiperSlide><img className='imgsli' src="https://cdn.yesmadam.com/images/live/app/banner/potli-massage-male-spa-dncr-categpry-top-banner-16-11-22.jpg" alt="" /></SwiperSlide>
          <SwiperSlide><img className='imgsli'src="https://cdn.yesmadam.com/images/live/app/banner/benefits-male-spa-dncr-categpry-top-banner-16-11-22.jpg" alt="" /></SwiperSlide>
          <SwiperSlide>Horizontal Slide 3</SwiperSlide>
          <SwiperSlide>Horizontal Slide 4</SwiperSlide>
        </Swiper>


            </div>
          <div className="scroller">
            <img src="https://cdn.yesmadam.com/images/live/app/banner/why-ym-male-grooming-category-footer-banner-4-1-23.jpg" alt="" />
            <img src="https://cdn.yesmadam.com/images/live/app/banner/book-haircut-male-grooming-category-footer-banner-5-1-23.jpg" alt="" />
            <img src="https://cdn.yesmadam.com/images/live/app/banner/freedom-male-grooming-category-footer-banner-4-1-23.jpg" alt="" />
            <img src="https://cdn.yesmadam.com/images/live/app/banner/testimonials-2-male-grooming-category-footer-banner-4-1-23.jpg" alt="" />
            <img src="https://cdn.yesmadam.com/images/live/app/banner/testimonials-2-male-grooming-category-footer-banner-4-1-23.jpg" alt="" />
            <img src="https://cdn.yesmadam.com/images/live/app/banner/testimonials-2-male-grooming-category-footer-banner-4-1-23.jpg" alt="" />
            <img src="https://cdn.yesmadam.com/images/live/app/banner/testimonials-2-male-grooming-category-footer-banner-4-1-23.jpg" alt="" />
            <img src="https://cdn.yesmadam.com/images/live/app/banner/testimonials-2-male-grooming-category-footer-banner-4-1-23.jpg" alt="" />
          </div>
          </div>
      </div>
      
      
    </div>
    </>
  )
}
