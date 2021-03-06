import React, { useEffect, useState } from "react";
import { Row,Col } from 'react-bootstrap';
import Slider from "react-slick";
import barrow from "../../assets/images/b-arrow.png";
import sliderImg from "../../assets/images/advance-exercises/acro-yoga.jpg";
import shifterApp from "../../assets/images/shifterapp.png";
import creatorApp from "../../assets/images/creatorapp.png";
import circleIon from "../../assets/images/circle-ion.png";
import editIcons from "../../assets/images/edit-icons.png";
import './AdvanceBannerSlider.scss';

const AdvanceBannerSlider = () => {
    const [scrollPage, setOffset] = useState(0);
    const [dotGlobal, changeImg] = useState(1);
    const textDot = ['HEALTH', 'Prosperity', 'Inspiration', 'Joy'];
    useEffect(() => {
      window.onscroll = () => {
        setOffset(window.pageYOffset);
      };
    }, []);
  
    // const changeImg=(i)=>{
    //  dotGlobals(i);
    // }
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
              <span className={`hide-text dot-text${i + 1}`}>{textDot[i]}</span>
              <img alt="no image" src={`${'Cluster-'}${i + 1}.png`} onClick={() => changeImg(i + 1)} />
            </div>
          </a>
        );
      },
    };
  return (
    <>
    <div className="advance-Exercise-slider">
        <Row>
          <Col sm={12} md={12}>
            <Slider {...settings}>
              <div className="slider-conatiner">
                <div className="cente-text">
                  <h1>Advancement exercises</h1>
                  <p>Can be done anywhere- no specialised equipment <br/>required</p>
                  <button>START TODAY</button>
                  <div className="arrow-icon">
                    <img alt="no image" src={barrow} />
                  </div>
                </div>
                <img alt="no image" src={sliderImg} className="slider-img"/>
              </div>
              <div className="slider-conatiner">
                <div className="cente-text">
                  <h1>Advancement exercises</h1>
                  <p>Can be done anywhere- no specialised equipment <br/>required</p>
                  <button>START TODAY</button>
                  <div className="arrow-icon">
                    <img alt="no image" src={barrow} />
                  </div>
                </div>
                <img alt="no image" src={sliderImg} className="slider-img" />
              </div>
              <div className="slider-conatiner">
                <div className="cente-text">
                  <h1>Advancement exercises</h1>
                  <p>Can be done anywhere- no specialised equipment <br/>required</p>
                  <button>START TODAY</button>
                  <div className="arrow-icon">
                    <img alt="no image" src={barrow} />
                  </div>
                </div>
                <img alt="no image" src={sliderImg} className="slider-img" />
              </div>
              <div className="slider-conatiner">
                <div className="cente-text">
                  <h1>Advancement exercises</h1>
                  <p>Can be done anywhere- no specialised equipment <br/>required</p>
                  <button>START TODAY</button>
                  <div className="arrow-icon">
                    <img alt="no image" src={barrow} />
                  </div>
                </div>
                <img alt="no image" src={sliderImg} className="slider-img" />
              </div>
            </Slider>
          </Col>
        </Row>
    
      </div>
      <div className="info-wraper">
        <Row>
          <Col sm={12} md={5}>
            <div className="info-sec">
              <span className="info-left">
                <img alt="no image" src={circleIon} />
                <p>Health</p>
              </span>
              <p>When phasellus dignissim, in pellentesuqe?</p>
              <img alt="no image" src={editIcons} />
            </div>
          </Col>
          <Col sm={12} md={2}>
            <div className="tb-info">
            <img alt="no image" className="activeimg" src={`${'Cluster-'}${dotGlobal}.png`} />
            </div>
          </Col>
          <Col sm={12} md={5}>
            <div className="app-btn">
              <button>
                <img alt="no image" src={shifterApp} /> WEIGHT SHIFTER APP
              </button>
              <button>
                <img alt="no image" src={creatorApp} /> HEALTH CREATOR APP
              </button>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default AdvanceBannerSlider;