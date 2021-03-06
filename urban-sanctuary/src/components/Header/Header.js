import React, { useState, useEffect } from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import lineIcon from '../../assets/images/line-icon.png';
import logo from '../../assets/images/logo.png';
import searchIcon from '../../assets/images/search-icon.png';
import cartIcon from '../../assets/images/cart-icon.png';
import profileIcon from '../../assets/images/profile-icon.png';
import moreIcons from '../../assets/images/more-icons.png';
import './Header.scss';
import ServiceDropdown from '../service-dropdown';
import { Link } from 'react-router-dom';

const Header=() =>{
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [openDropdown, setOpenDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  const toggleSideNav=()=>{
        if(document.getElementById("mySidenav").style.width == "250px"){
          document.getElementById("mySidenav").style.width = "0px";
        }else{
          document.getElementById("mySidenav").style.width = "250px";
        }
  }

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
             {/* <!-- ***** Top  Header Start ***** --> */}
        {/* <header className="secondary-header">
        <Container fluid>
                <Row className="align-items-center justify-content-between header-info">
                    <Col md={4} className="left-panel text-left grey-txt">
                        <i className="far fa-file-alt"></i>
                    </Col>
                    <Col md={4} className="center-panel text-center grey-txt">
                        <p className="mb-0">Second Genome</p>
                    </Col>
                    <Col md={4} className="right-panel text-right">
                        <div className="clock-icon">
                            <i className="white-txt fas fa-clock"></i><span className="grey-txt">16:00 GMT</span>
                        </div>
                        <div className="search-icon">
                            <i className="white-txt fas fa-search"></i>
                            <input type="text" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </header> */}
        {/* <!-- ***** Top  Header End ***** -->
        <!-- ***** Header Area Start ***** --> */}
        <header className="header-area">
        <Container fluid>
                <Row className="align-items-center">
                <Col md={3} className="mobile-hide">
                        {/* <!-- Logo --> */}
                        <a className="navbar-brand">
                        <img alt="no image" src={lineIcon}/>
                        <img alt="no image" src={logo}/></a>
                    </Col>
                    <Col md={6} className="mobile-hide">
                        <nav className="custom-navbar">
                            <div className="navbar-navs">
                                <ul className="navbar-info d-flex align-items-center">
                                    <li className="nav-item active">
                                    <Link to="/about-us"><span className='nav-link'>About us</span> <span className="sr-only">(current)</span></Link>
                                    </li>
                                    <li className="nav-item custom-dropdwn">
                                    <a className="nav-link" href="#">discover</a>
                                    </li>
                                    <li className="nav-item custom-dropdwn">
                                    <a className="nav-link" href="#" onClick={() => setOpenDropdown(!openDropdown)}>services</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">participate</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">prosper</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">get started</a>
                                    </li>
                                </ul>
                            </div>
                        </nav>

                    </Col>
                    <Col md={3} className="mobile-hide">
                        <ul className="d-flex justify-content-end align-items-center">
                            <li className="nav-item">
                                <a className="nav-link">
                                    <img alt="no image" src={searchIcon}/>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">
                                <img alt="cartIcon" src={cartIcon}/>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">
                                <img alt="no image" src={profileIcon}/>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">
                                <img alt="no image" src={moreIcons}/>
                                </a>
                            </li>

                        </ul>
                    </Col>

                    <Col md={12} className="desk-hide">
                        <div className="mobile-menu">
                            <a className="navbar-brand"><img alt="no image" src={logo}/></a>
                            <span onClick={toggleSideNav}>&#9776;</span>
                        </div>
                        <div id="mySidenav" className="sidenav">
                            <a href="javascript:void(0)" className="closebtn" onClick={toggleSideNav}>&times;</a>
                            <Link to="/about-us"><span className='nav_link'>About us</span> </Link>
                            <a href="#">discover</a>
                            <a href="#" onClick={() => {
                                setOpenDropdown(!openDropdown)
                                toggleSideNav()
                            }}>services</a>
                            <a href="#">participate</a>
                            <a href="#">prosper</a>
                            <a href="#">get started</a>
                        </div>
                    </Col>
                </Row>
           </Container>
           {openDropdown && <ServiceDropdown />}
        </header>
        {/* <!-- ***** Header Area End ***** -->

        <!-- ***** banner section Start ***** --> */}
     
    </>
  );
}

export default Header;
