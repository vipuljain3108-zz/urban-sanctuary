import React from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import BeComeButton from '../../components/BeComeButton/BeComeButton';
import './Footer.scss';

const Footer=()=> {
    const { pathname } = useLocation();
  return (
    <footer>
  <Container>
  <Row>
            <Col sm={12} md={5} className="dis-cover cols">
                <p className="font-weight-bold">Sign up and become an Urban Sanctuary Visionaire</p>
                <BeComeButton />
            </Col>

            <Col sm={12} md={1} className=" footer-col cols">
                <ul className="footer-menu font-weight-bold">
                    <li><a href="#">About us </a></li>
                    <li><a href="#">discover</a></li>
                    <li><a href="#">services</a></li>
                    <li><a href="#">participate</a></li>
                    <li><a href="#">prosper</a></li>
                    <li><a href="#">get started</a></li>
                </ul>
            </Col>
            <Col sm={12} md={1} className="footer-col cols">
                <ul className="footer-menu font-weight-bold">
                    <li><a href="#">Find a Store </a></li>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">Volunteer</a></li>
                    <li><a href="#">Know More</a></li>
                </ul>
            </Col>
            <Col sm={12} md={3} className="footer-col-2 cols">
                <ul className="footer-inf font-weight-bold">
                    <li className="f-font-famB">URBAN SANCTURIES - VISION FOR HUMANITY</li>
                    <li className="font-weight-light f-font-famL"  style={{ color: pathname === '/store-service-skin-analysis'|| pathname =='/store-service-inbody-scanning' ? '#9AA200' : '' }}>Cick here to integrate your Visionaire accounts</li>
                    <li>(09) 353-7890</li>
                    <li>Level 3, 2 St Martins Lane,<br/>Prosper Grafton, Auckland 1010<br/>New Zealand</li>
                </ul>
            </Col>
            <Col sm={12} md={2} className="footer-icon" style={{ color: pathname === '/store-service-skin-analysis' || pathname =='/store-service-inbody-scanning' ? '#9AA200' : '' }}>
                <i className="fab fa-instagram"></i>
                <i className="fab fa-twitter"></i>
                <i className="fab fa-facebook-f"></i>
            </Col>
            <Col md={12} className="copyr">
                <p>??VFH Sanctuaries 2018</p>
            </Col>
        </Row>
        </Container>
</footer>

  );
}

export default Footer;
