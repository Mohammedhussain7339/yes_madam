import React from 'react'

export default function Post() {
  return (
    <div className="post">
      {/* <img src="./pictures/bbg_leaves.png" alt=""> */}
      <h1><span>India's Most</span> Affordable Home Salon</h1>

      <div className="postdiv">
        <div className="postbox"><img src="./pictures/at-home-salon-main-category-23-11-22.jpg" alt="" />
          <p>Salone at Home</p>
        </div>
        <div className="postbox"><img src="./pictures/female-spa-main-category-23-11-22.jpg" alt="" />
          <p>Spa at Home</p>
        </div>
        <div className="postbox"><img src="./pictures/body-polishing-subcategory-1-12-22.jpg" alt="" />
          <p>Advanced Treatment</p>
        </div>
        <div className="postbox"><img src="./pictures/Cleanup-subcategory-1-12-22.jpg" alt="" />
          <p>Male Spa</p>
        </div>
        <div className="postbox"><img src="./pictures/Detan-Bleach-subcategory-1-12-22.jpg" alt="" />
          <p>Male Grouming</p>
        </div>
        <div className="postbox"><img src="./pictures/female-spa-main-category-23-11-22.jpg" alt="" />
          <p>Hair Studio</p>
        </div>
        <div className="postbox"><img src="./pictures/led-facial-main-category-23-11-22.jpg" alt="" />
          <p>Pre Bridal</p>
        </div>
        <div className="postbox"><img src="./pictures/led-facial-main-category-23-11-22.jpg" alt="" />
          <p>MakeUp at Home</p>
        </div>
      </div>

      <div className="choosemadam">
        <h1>why choose yes madam</h1>
        <div className="chooseposter">
          <div className="madamimage">
            <img src="./pictures/why_1.webp" alt="" />
          </div>
          <h3>Trained and Verified Experts</h3>
          <p>We at Yes Madam believe in working with the utmost professionalism. Thus, our clients are served
              only
              by well-experienced and skilled professionals.</p>
        </div>
        <div className="chooseposter">
          <div className="madamimage">
            <img src="./pictures/why_2.webp" alt="" />
          </div>
          <h3>Trained and Verified Experts</h3>
          <p>We at Yes Madam believe in working with the utmost professionalism. Thus, our clients are served
              only
              by well-experienced and skilled professionals.</p>
        </div>
        <div className="chooseposter">
          <div className="madamimage">
            <img src="./pictures/why_3.webp" alt="" />
          </div>
          <h3>Trained and Verified Experts</h3>
          <p>We at Yes Madam believe in working with the utmost professionalism. Thus, our clients are served
              only
              by well-experienced and skilled professionals.</p>
        </div>
      </div>

      <div className="three-box-div">
        <img src="./pictures/banner.webp" alt="" />
      </div>

      <div className="category-section">
        <div className="slidebtn">
          <span className="sliderbtn first" onClick={catpre}>&#10094;</span>
          <span className="sliderbtn second" onClick={catnext}>&#10095;</span>
        </div>
        <h2>beauty</h2>
        <div className="cat-products">
          <div className="category-product">
            <div className="categoryimage">
              <img src="./pictures/body-polishing-subcategory-1-12-22.jpg" alt="" />
            </div>
            <h4>video game</h4>
          </div>
          {/* Repeat other category-product divs */}
        </div>
      </div>
    </div>
  )
}
