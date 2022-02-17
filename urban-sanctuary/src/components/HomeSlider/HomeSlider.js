import React, { useEffect, useState } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import Slider from "react-slick";
import { useLocation } from 'react-router-dom';
import barrow from "../../assets/images/b-arrow.png";
import slide1 from "../../assets/images/home-img/acro-acro-pose-acro-yoga.png";
import Path from "../../assets/images/home-img/Path.png";
import BannerHome2 from "../../assets/images/home-img/Banner-home2.png";
import Cluster1 from "../../assets/images/Cluster-1.png";
import Cluster2 from "../../assets/images/Cluster-2.png";
import Cluster3 from "../../assets/images/Cluster-3.png";
import Cluster4 from "../../assets/images/Cluster-4.png";
import './HomeSlider.scss';

const HomeSlider = () => {
  const { pathname } = useLocation();

  const [isChecked, setIsChecked] = useState(false);

  const textDot = ['URBAN SANCTUARY', 'URBAN SANCTUARY', 'URBAN SANCTUARY', 'URBAN SANCTUARY'];
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    dotsClass: "slick-dots slick-thumb",
    slidesToScroll: 1,
    maxWidth: 50,
    customPaging: function (i) {
      return (
        <a>
          <div className="tb-info" >
            <div className={`dotbtns dot-tex${i + 1}`}>
              <span className={`hide-text dot-text${i + 1}`}>{textDot[i]}</span>

              <input type="radio" name={i} checked={i + 1} />
            </div>
            {/* <img alt="no image" src={`${'Cluster-'}${i + 1}.png`} /> */}
          </div>
        </a>
      );
    },
  };
  return (
    <>
      {(pathname == '/home') ? (
        <Row>
          <Col sm={12} md={12}>
            <Slider {...settings}>
              <div className="slider-conatiner">
                <div className=" slider-txt">
                  <h1 className="italic-txt">Discover your Magnificence</h1>
                  <h1 className="large-txt">
                    URBAN SANCTUARIES FOR<br></br>CONSCIOUS CREATURES
                  </h1>
                  <p>Human Well-being & Advancement Centre.</p>
                  <p>
                    Develop your full Life Force, Holistic Human Vibrancy,
                    Significance<br/> and Purpose.
                  </p>
                  <button className="learn-more-btn">
                    LEARN ABOUT US
                    <img alt="no image" src={Path} />
                  </button>
                  <div className="arrow-icon">
                    <a href=''><img alt="no image" src={barrow} />
                    </a>
                  </div>
                </div>
                <div className="right-icon">
                  <div className="tb-info">
                    <img src={Cluster1} />
                  </div>
                  <div className="tb-info">
                    <img src={Cluster4} />
                  </div>
                  <div className="tb-info">
                    <img src={Cluster2} />
                  </div>
                  <div className="tb-info">
                    <img src={Cluster3} />
                  </div>
                </div>
                <img alt="no image" className="banner-img" src={slide1} />
              </div>
              <div className="slider-conatiner">
                <div className=" slider-txt">
                  <h1 className="italic-txt">Discover your Magnificence</h1>
                  <h1 className="large-txt">
                    URBAN SANCTUARIES FOR<br></br>CONSCIOUS CREATURES
                  </h1>
                  <p>Human Well-being & Advancement Centre.</p>
                  <p>
                    Develop your full Life Force, Holistic Human Vibrancy,
                    Significance<br/> and Purpose.
                  </p>
                  <button className="learn-more-btn">
                    LEARN ABOUT US
                    <img alt="no image" src={Path} />
                  </button>
                  <div className="arrow-icon">
                    <img alt="no image" src={barrow} />
                  </div>
                </div>
                <div className="right-icon">
                  <div className="tb-info">
                    <img className="activeimg" src={Cluster1} />
                  </div>
                  <div className="tb-info">
                    <img src={Cluster4} />
                  </div>
                  <div className="tb-info">
                    <img src={Cluster2} />
                  </div>
                  <div className="tb-info">
                    <img src={Cluster3} />
                  </div>
                </div>
                <img alt="no image" className="banner-img" src={slide1} />
              </div>
              <div className="slider-conatiner">
                <div className=" slider-txt">
                  <h1 className="italic-txt">Discover your Magnificence</h1>
                  <h1 className="large-txt">
                    URBAN SANCTUARIES FOR<br></br>CONSCIOUS CREATURES
                  </h1>
                  <p>Human Well-being & Advancement Centre.</p>
                  <p>
                    Develop your full Life Force, Holistic Human Vibrancy,
                    Significance<br/> and Purpose.
                  </p>
                  <button className="learn-more-btn">
                    LEARN ABOUT US
                    <img alt="no image" src={Path} />
                  </button>
                  <div className="arrow-icon">
                    <img alt="no image" src={barrow} />
                  </div>
                </div>
                <div className="right-icon">
                  <div className="tb-info">
                    <img className="activeimg" src={Cluster1} />
                  </div>
                  <div className="tb-info">
                    <img src={Cluster4} />
                  </div>
                  <div className="tb-info">
                    <img src={Cluster2} />
                  </div>
                  <div className="tb-info">
                    <img src={Cluster3} />
                  </div>
                </div>
                <img alt="no image" className="banner-img" src={slide1} />
              </div>
            </Slider>
          </Col>
        </Row>
      ) : (
        <Row>
          <Col sm={12} md={12}>
            <Slider {...settings}>
              <div className="slider-conatiner">
                <div className=" slider-txt">
                  <h1 className="slider-lrg-txt">Our Long Term Plan</h1>
                  <p className="slider-small-txt">
                    Biospherically Correct services for our Sanctuaries -
                    organic food
                    <br /> production, organic waste recycling and composting /
                    rewilding &<br /> reforestation{" "}
                  </p>
                  <h1 className="slider-middle-txt">
                    MASTER RETREAT &<br /> CONSCIOUS LIFESTYLE EXPERIENCE
                  </h1>
                  <p className="slider-desc-txt">
                    Experience Tranquility, Permaculture food production,
                    <br />
                    and a Mejestic natural lifestyle of Self Sufficiency
                  </p>
                </div>
                <div className="right-icon">
                  <div className="tb-info">
                    <img className="activeimg" src={Cluster1} />
                  </div>
                  <div className="tb-info">
                    <img src={Cluster4} />
                  </div>
                  <div className="tb-info">
                    <img src={Cluster2} />
                  </div>
                  <div className="tb-info">
                    <img src={Cluster3} />
                  </div>
                </div>
                <img alt="no image" className="banner-img" src={BannerHome2} />
              </div>
              <div className="slider-conatiner">
                <div className=" slider-txt">
                  <h1 className="slider-lrg-txt">Our Long Term Plan</h1>
                  <p className="slider-small-txt">
                    Biospherically Correct services for our Sanctuaries -
                    organic food
                    <br /> production, organic waste recycling and composting /
                    rewilding &<br /> reforestation{" "}
                  </p>
                  <h1 className="slider-middle-txt">
                    MASTER RETREAT &<br /> CONSCIOUS LIFESTYLE EXPERIENCE
                  </h1>
                  <p className="slider-desc-txt">
                    Experience Tranquility, Permaculture food production,
                    <br />
                    and a Mejestic natural lifestyle of Self Sufficiency
                  </p>
                </div>
                <div className="right-icon">
                  <div className="tb-info">
                    <img className="activeimg" src={Cluster1} />
                  </div>
                  <div className="tb-info">
                    <img src={Cluster4} />
                  </div>
                  <div className="tb-info">
                    <img src={Cluster2} />
                  </div>
                  <div className="tb-info">
                    <img src={Cluster3} />
                  </div>
                </div>
                <img alt="no image" className="banner-img" src={BannerHome2} />
              </div>
              <div className="slider-conatiner">
                <div className=" slider-txt">
                  <h1 className="slider-lrg-txt">Our Long Term Plan</h1>
                  <p className="slider-small-txt">
                    Biospherically Correct services for our Sanctuaries -
                    organic food
                    <br /> production, organic waste recycling and composting /
                    rewilding &<br /> reforestation{" "}
                  </p>
                  <h1 className="slider-middle-txt">
                    MASTER RETREAT &<br /> CONSCIOUS LIFESTYLE EXPERIENCE
                  </h1>
                  <p className="slider-desc-txt">
                    Experience Tranquility, Permaculture food production,
                    <br />
                    and a Mejestic natural lifestyle of Self Sufficiency
                  </p>
                </div>
                <div className="right-icon">
                  <div className="tb-info">
                    <img className="activeimg" src={Cluster1} />
                  </div>
                  <div className="tb-info">
                    <img src={Cluster4} />
                  </div>
                  <div className="tb-info">
                    <img src={Cluster2} />
                  </div>
                  <div className="tb-info">
                    <img src={Cluster3} />
                  </div>
                </div>
                <img alt="no image" className="banner-img" src={BannerHome2} />
              </div>
      
            </Slider>
          </Col>
        </Row>
      )}
    </>
  );
}

export default HomeSlider;