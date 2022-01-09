import React, { useState } from 'react';
import greenActive from "../../assets/images/greenActive.png";
import BannerImg from '../../assets/images/service-health/provision5.png';
import './index.scss';

const Index = () => {
    const [secondaryDrop, setSecondaryDrop] = useState(false);

    return (
        <div className='dropContainer'>
            <div className='service_dropdown'>
                <div className='service_dropdown_item'>
                    <div className='service_dropdown_item_title'>{`Shop by Products & Services`}</div>
                    <div className='service_dropdown_item_content' style={{ borderRight: '2px solid #8C8C8C', paddingRight: '30px'}}>
                        <div className='service_dropdown_item_content_links'>
                            <p>Lifeforce Food</p>
                            <p>Vision Products</p>
                            <p>Holistic Health Testing</p>
                            <p>Advanced Exercises</p>
                            <p>Advanced Learning</p>
                            <p>Health Specialists</p>
                        </div>
                        <div className='service_dropdown_item_content_img' style={{ backgroundImage: `url(${BannerImg})`}}/>
                    </div>
                </div>
                <div className='service_dropdown_item'>
                    <div className='service_dropdown_item_title'>Shop by Advancement Interest</div>
                    <div className='service_dropdown_item_content'>
                        <div className='service_dropdown_item_content_links'>
                            <p className={`${secondaryDrop ? 'active' : ''}`} onClick={() => setSecondaryDrop(!secondaryDrop)}>Health</p>
                            <p>Prosperity </p>
                            <p>Inspiration</p>
                            <p>Joy</p>
                            <p>Online Services</p>
                            <p>Shop by Levels</p>
                        </div>
                        <div className='service_dropdown_item_content_img' style={{ backgroundImage: `url(${greenActive})`}}/>
                    </div>
                </div>                   
            </div>
            {secondaryDrop && (<div className='secondaryDropdown'>
                <div className='secondaryDropdown_content'>
                    <div className='secondaryDropdown_content_item'>
                        <p>Guides</p>
                        <p>Workshops</p>
                        <p>Courses</p>
                        <p>Advancement Exercises</p>
                    </div>
                    <div className='secondaryDropdown_content_item'>
                        <p>Lifeforce Food</p>
                        <p>Natural Highs bar</p>
                        <p>vision products</p>
                        <p>{`Spa & Salon`}</p>
                        <p>Rooftop Health Spa</p>
                    </div>
                    <div className='secondaryDropdown_content_item'>
                        <p>health Protocols</p>
                        <p>health Counselling</p>
                        <p>health Professionals</p>
                    </div>
                    <div className='secondaryDropdown_content_item'>
                        <p>Health Creator App</p>
                        <p>Weight Shifter App</p>
                        <p>Health Packages</p>
                    </div>
                </div>
            </div>)}
        </div>
    )
}

export default Index;