import React from 'react';
import Slider from "react-slick";
import pic1 from '../../assets/images/pic1.png'
import pic2 from '../../assets/images/pic2.png'
import pic3 from '../../assets/images/pic3.png'
import startCom from '../../assets/images/start-com.png'
import endCom from '../../assets/images/end-com.png'
import './index.scss'

const Index = () => {
    let settings = {
        autoplay: true,
        dots: false,
        infinite: true,
        autoplaySpeed: 1500,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
          {
              breakpoint: 1024,
              settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
              }
          },
          {
              breakpoint: 600,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
              }
          },
          {
              breakpoint: 480,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
              }
          }
        ]
      };

    return (
            <div className="customer_reviews">
                <Slider {...settings}>
                <div className="review-card">
                    <div className="card-review">
                    <div className="head-sec">
                        <img alt="no image" src={pic1} />
                        <div className="head-info">
                        <p>Aliquam tellus </p>
                        <h1>Chris Andrews</h1>
                        </div>
                    </div>
                    <div className="star-info">
                        <p>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star no-colr"></i>
                        </p>
                        <p>Home Workout</p>
                    </div>
                    <div className="info2">
                        <img alt="no image" src={startCom} />
                        <p>Mauris neque nisi, faucibus non elementum in, convallis et eros. Sed pretium sem libero, vel pellentesque purus ultrices ut. In quis leo id massa pulvinar euismod cursus non justo. </p>
                        <img alt="no image" src={endCom} className="img2" />
                        <span>26/01/2020</span>
                    </div>
                    </div>
                </div>
                <div className="review-card">
                    <div className="card-review">
                    <div className="head-sec">
                        <img alt="no image" src={pic2} />
                        <div className="head-info">
                        <p>Aliquam tellus </p>
                        <h1>Chris Andrews</h1>
                        </div>
                    </div>
                    <div className="star-info">
                        <p>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star no-colr"></i>
                        </p>
                        <p>Home Workout</p>
                    </div>
                    <div className="info2">
                        <img alt="no image" src={startCom} />
                        <p>Mauris neque nisi, faucibus non elementum in, convallis et eros. Sed pretium sem libero, vel pellentesque purus ultrices ut. In quis leo id massa pulvinar euismod cursus non justo. </p>
                        <img alt="no image" src={endCom} className="img2" />
                        <span>26/01/2020</span>
                    </div>
                    </div>
                </div>
                <div className="review-card">
                    <div className="card-review">
                    <div className="head-sec">
                        <img alt="no image" src={pic3} />
                        <div className="head-info">
                        <p>Aliquam tellus </p>
                        <h1>Chris Andrews</h1>
                        </div>
                    </div>
                    <div className="star-info">
                        <p>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star no-colr"></i>
                        </p>
                        <p>Home Workout</p>
                    </div>
                    <div className="info2">
                        <img alt="no image" src={startCom} />
                        <p>Mauris neque nisi, faucibus non elementum in, convallis et eros. Sed pretium sem libero, vel pellentesque purus ultrices ut. In quis leo id massa pulvinar euismod cursus non justo. </p>
                        <img alt="no image" src={endCom} className="img2" />
                        <span>26/01/2020</span>
                    </div>
                    </div>
                </div>
                <div className="review-card">
                    <div className="card-review">
                    <div className="head-sec">
                        <img alt="no image" src={pic1} />
                        <div className="head-info">
                        <p>Aliquam tellus </p>
                        <h1>Chris Andrews</h1>
                        </div>
                    </div>
                    <div className="star-info">
                        <p>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star no-colr"></i>
                        </p>
                        <p>Home Workout</p>
                    </div>
                    <div className="info2">
                        <img alt="no image" src={startCom} />
                        <p>Mauris neque nisi, faucibus non elementum in, convallis et eros. Sed pretium sem libero, vel pellentesque purus ultrices ut. In quis leo id massa pulvinar euismod cursus non justo. </p>
                        <img alt="no image" src={endCom} className="img2" />
                        <span>26/01/2020</span>
                    </div>
                    </div>
                </div>
                <div className="review-card">
                    <div className="card-review">
                    <div className="head-sec">
                        <img alt="no image" src={pic1} />
                        <div className="head-info">
                        <p>Aliquam tellus </p>
                        <h1>Chris Andrews</h1>
                        </div>
                    </div>
                    <div className="star-info">
                        <p>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star no-colr"></i>
                        </p>
                        <p>Home Workout</p>
                    </div>
                    <div className="info2">
                        <img alt="no image" src={startCom} />
                        <p>Mauris neque nisi, faucibus non elementum in, convallis et eros. Sed pretium sem libero, vel pellentesque purus ultrices ut. In quis leo id massa pulvinar euismod cursus non justo. </p>
                        <img alt="no image" src={endCom} className="img2" />
                        <span>26/01/2020</span>
                    </div>
                    </div>
                </div>
                </Slider>
            </div>
    )
}

export default Index;