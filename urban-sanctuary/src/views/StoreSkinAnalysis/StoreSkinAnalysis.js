import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'scheduler-calendar/dist/index.css'
import Header from '../../components/Header/Header';
import skinNewobs from '../../assets/images/skin-analysis/skin-newobs.png';
import bannerImg from '../../assets/images/skin-analysis/skin-banner-img.png';
import yearRank from '../../assets/images/skin-analysis/year-rank.png';
import checkedImg from '../../assets/images/skin-analysis/checked.png';
import LightModesFace from '../../assets/images/skin-analysis/8-light-modes-face.png';
import testingDevice from '../../assets/images/skin-analysis/testing-device.jpeg';
import mobileImg from '../../assets/images/skin-analysis/mobile-img.jpeg';
import foodImg from '../../assets/images/skin-analysis/food-img.jpeg';
import skinpanelback from '../../assets/images/skin-analysis/skin-panel-back.png';
import pic1 from '../../assets/images/pic1.png';
import pic3 from '../../assets/images/pic3.png';
import skinvimg from '../../assets/images/skin-analysis/skin-v-img.png';
import skinPlayerBtn from '../../assets/images/skin-player-btn.png';

import './StoreSkinAnalysis.scss';
const StoreSkinAnalysis = () => {
  return (
    <div className="store-skin-wrapper">
      <Header />
      <Row>
        <Col sm={12} md={12}>
          <div className="banner-skin">
            <div className="content-sec">
              <span className="content-left">
                <p>Services > Tech Testing</p>
                <h1>Skin Analyser</h1>
              </span>
              <div className="socil-img">
                <i className="fab fa-instagram"></i>
                <i className="fab fa-twitter"></i>
                <i className="fab fa-facebook-f"></i>
                <i className="fa fa-globe"></i>
              </div>
            </div>
            <div className="img-content">
              <div className="skinNewobs">
                <img alt="no image" src={skinNewobs} />
                <h4>OBSERV 520X</h4>
              </div>
              <span className="skin-banner-txt">
                <h1>Beautiful Skin!</h1>
                <h4>Beauty from within</h4>
                <p className="head-txt">Authentic beauty and radiant skin</p>
                <p>At the Sanctuary we believe that great skin is a reflection of inner health, and that full health and hence true beauty shows itself through the radiance of the eyes, hair and skin. Health and Beauty is represented by what is going on inside of your mind-body, and by the way you protect, nurture and nourish your skin and hair.</p>
                <p>A skin test will reveal not just the condition of your skin, and how to externally look after it, but also contributes to an overview of our comprehensive heath testing services. This holistic health map can identify toxins, nutrient deficiencies, as well as other health conditions which impact appearance, all important information that can then be cross referenced to integrate a natural improvement program for you to achieve greater Vitality and Longevity - which will involve glowing, youthful skin.</p>
                <p>We recommend using the fully natural and nutrient rich Vision Products skin and hair care range, along with specialised treatments to compliment this authentic beauty approach.</p>

                <div className="link-img">
                  <a href="#"> <i className="fa fa-globe"></i>Read More</a>
                  <a href="#"> <i className="fas fa-newspaper"></i> News</a>
                </div>
              </span>
            </div>
            <img alt="no image" src={bannerImg} />
          </div>
        </Col>

      </Row>
      <div className="back-point-skin">
      <Container>
        <Row>
          <Col sm={12} md={8}>
            <div className="point-section">
              <p>Pin point the condition of your skin and avoid long term damage with our state of the art skin testing service.</p>
              <ul>
                <li><img alt="no image" src={checkedImg} /> Map where your skin health is and heading</li>
                <li><img alt="no image" src={checkedImg} />Determine the best treatments and skin products for you based on the condition of your skin</li>
                <li><img alt="no image" src={checkedImg} />The patented technology of the OBSERV 520 makes it the most advanced visual analysis, diagnostic devise for your skin, that is available today. Providing accurate skin condition diagnosis, at both the epidermal and dermal layer. Modern day lifestyle choices, coupled with environmental stresses make for a perfect storm to impact your health and the quality of your skin.</li>
                <li><img alt="no image" src={checkedImg} />The OBSERV skin analysis device scientifically records visuals within a 30 second time frame to provide the platform to recognise your skins current condition and establish a plan to repair and restore skin texture, radiance and beauty. It is the ideal skin testing device with clinical skin visuals to form a background for consultation and to personalise skin care advise, which can lead onto the best professional in-house skin treatments, or skincare program concerning a bespoke homecare regime.</li>
              </ul>
            </div>
          </Col>
          <Col sm={12} md={4}>
            <div className="point-section">
              <img alt="no image" src={yearRank} className="img-section" />
            </div>
          </Col>
        </Row>
      </Container>
     </div>
        <Container>
          <Row>
            <Col sm={12} md={5}>
              <div className="link-img">
                <img alt="no image" src={LightModesFace} />
              </div>
            </Col>
            <Col sm={12} md={7}>
              <div className="link-cont-img">
                <h1>Seek out authentic, natural beauty through true health</h1>
                <p>Combine our other Testing Services and Health Creator App to achieve the very best beauty appearance possible! Discover the factors and nutrients that you may be lacking, that contribute to wrinkled, dull and dry skin. Allow us to put together a comprehensive and customised skin, health, nutrition and personal care products program for you, focused on improving long term skin suppleness and extra ordinary glowing radiance and beauty.</p>
                <Row>
                  <Col sm={12} md={4}>
                    <img alt="no image" src={testingDevice} />
                  </Col>
                  <Col sm={12} md={4}>
                    <img alt="no image" src={mobileImg} />
                  </Col>
                  <Col sm={12} md={4}>
                    <img alt="no image" src={foodImg} />
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
        <div className="link-skin">
        <Row>
          
        <Col sm={12} md={12}>
              <div className="link-cont-text">
                <h1>Holistic beauty programs</h1>
                <p>Natural nutrient rich skin and hair products with naturally occurring active ingredients <br/>compliments the skin to help achieve beautiful glowing long term skin health and wellbeing</p>
                <p>Specific treatments flush out toxins from the body aiding the skin's appearance</p>
                <p>Nutritious food is a key to developing  better skin tone and health</p>
              </div>
            </Col>
          </Row>
        <img alt="no image" src={skinpanelback} className="back-img" />
      </div>

      <Row>
        <Col sm={12} md={12}>
          <div className="con-head">
            <h1>Our Customers</h1>
            <Row>
              <Col sm={12} md={6}>
                <div className="con-profile">
                  <div className="con-pro">
                    <img alt="no image" src={pic1} />
                    <h2>Jonathan Walker</h2>
                  </div>
                  <p>In hac habitasse platea dictumst. Sed nec venenatis odio. Nulla faucibus ipsum sed faucibus accumsan. Donec rhoncus luctus massa vitae lobortis. Duis consequat, nunc a pretium imperdiet, neque est rhoncus massa, tristique rutrum nisl risus at libero.</p>
                </div>
                <div className="con-profile">
                  <div className="con-pro">
                    <img alt="no image" src={pic3} />
                    <h2>Brenda Mercer</h2>
                  </div>
                  <p>In hac habitasse platea dictumst. Sed nec venenatis odio. Nulla faucibus ipsum sed faucibus accumsan. Donec rhoncus luctus massa vitae lobortis. Duis consequat, nunc a pretium imperdiet, neque est rhoncus massa, tristique rutrum nisl risus at libero.</p>
                </div>
              </Col>
              <Col sm={12} md={6}>
                <div className="con-img">
                  <img src={skinvimg} alt="no image" />
                  <img src={skinPlayerBtn} alt="no image"/>
                </div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
      <Container>
        <Row>
          <Col sm={12} md={12}>
            <div className="finds-store">
              <h4>Create a life of limitless potential with an Optimize epigenetic report and free your genes today?</h4>
              <div className="store-btn">
                <button>Find a Store</button>
              </div>
            </div>
          </Col>

        </Row>
      </Container>
      <Row>
        <Col sm={12} md={12}>
          <div className="finds-text">
            <h3>Urban Sanctuaries for Conscious Creatures, Elevating Global Conscious, and helping create “A Successful Planet.”</h3>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default StoreSkinAnalysis;