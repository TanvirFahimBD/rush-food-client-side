import React from "react";
import "./Blog.css";

const Blog = () => {
  return (
    <div className="latest-news-area" id="latest">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="section_title">
              <h2>
                Recent <strong>Blogs</strong>
              </h2>
            </div>
          </div>
        </div>
        <br /> <br />
        <div className="row">
          {/* all blogs */}
          <div className="news-active">
            {/* blog 1 */}
            <div className="col-md-4">
              <div className="latest-news-wrap">
                <div className="news-img">
                  <img
                    className="img-responsive"
                    src="https://i.ibb.co/KKvm8fG/jason-briscoe-5-IGprl-BT5g4-unsplash.jpg"
                    alt=""
                  />
                  <div className="date">
                    <span>13</span>
                    <span>Jan</span>
                  </div>
                </div>

                {/* social links */}
                <div className="news-content">
                  <i>
                    <i class="fab fa-facebook-f"></i>
                  </i>
                  <i>
                    <i class="fab fa-twitter"></i>
                  </i>
                  <i>
                    <i class="fab fa-linkedin-in"></i>
                  </i>
                  <i>
                    <i class="fab fa-youtube"></i>
                  </i>
                  <i>
                    <i class="fab fa-whatsapp"></i>
                  </i>

                  {/* blog heading */}
                  <h4>Cook Food all you need to know</h4>

                  {/* blog info */}
                  <p>
                    Cook Food lorem Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Maxime mollitia, molestiae quas vel sint
                    commodi repudiandae consequuntur voluptatum laborum numquam
                    blanditiis
                  </p>
                  <br />
                  <a href="#">Read More</a>
                </div>
              </div>
            </div>

            {/* blog 2 */}
            <div className="col-md-4">
              <div className="latest-news-wrap">
                <div className="news-img">
                  <img
                    className="img-responsive"
                    src="https://i.ibb.co/2hYdVrV/rowan-freeman-cl-Ylm-Ca-Qbz-Y-unsplash.jpg"
                    alt=""
                  />
                  <div className="date">
                    <span>05</span>
                    <span>Jun</span>
                  </div>
                </div>

                {/* social links */}
                <div className="news-content">
                  <i>
                    <i class="fab fa-facebook-f"></i>
                  </i>
                  <i>
                    <i class="fab fa-twitter"></i>
                  </i>
                  <i>
                    <i class="fab fa-linkedin-in"></i>
                  </i>
                  <i>
                    <i class="fab fa-youtube"></i>
                  </i>
                  <i>
                    <i class="fab fa-whatsapp"></i>
                  </i>

                  {/* blog heading */}
                  <h4>Fast Delivery our service</h4>

                  {/* blog info */}
                  <p>
                    Fast Delivery our service lorem Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Maxime mollitia, molestiae
                    quas vel sint commodi repudiandae consequuntur voluptatum
                    laborum numquam blanditiis
                  </p>
                  <br />
                  <a href="#">Read More</a>
                </div>
              </div>
            </div>

            {/* blog 3 */}
            <div className="col-md-4">
              <div className="latest-news-wrap">
                <div className="news-img">
                  <img
                    className="img-responsive"
                    src="https://i.ibb.co/g36Knsb/mohammad-saifullah-NEq-PK-b-F3-HQ-unsplash.jpg"
                    alt="Third slide"
                    alt=""
                  />
                  <div className="date">
                    <span>14</span>
                    <span>Sep</span>
                  </div>
                </div>

                {/* social links */}
                <div className="news-content">
                  <i>
                    <i class="fab fa-facebook-f"></i>
                  </i>
                  <i>
                    <i class="fab fa-twitter"></i>
                  </i>
                  <i>
                    <i class="fab fa-linkedin-in"></i>
                  </i>
                  <i>
                    <i class="fab fa-youtube"></i>
                  </i>
                  <i>
                    <i class="fab fa-whatsapp"></i>
                  </i>

                  {/* blog heading */}
                  <h4>Our Service is our strength</h4>

                  {/* blog info */}
                  <p>
                    Our Service lorem Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Maxime mollitia, molestiae quas vel sint
                    commodi repudiandae consequuntur voluptatum laborum numquam
                    blanditiis
                  </p>
                  <br />
                  <a href="#">Read More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
