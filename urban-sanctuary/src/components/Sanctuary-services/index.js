import React from 'react';
import './index.scss';
import ServiceItem from '../service-item';
import S1 from '../../assets/images/holistic-system/c1.png';
import S2 from '../../assets/images/holistic-system/c2.png';
import S3 from '../../assets/images/holistic-system/c3.png';
import S4 from '../../assets/images/holistic-system/c4.png';
import S5 from '../../assets/images/holistic-system/c5.png';
import S6 from '../../assets/images/holistic-system/c6.png';
import LeftArrow from '../../assets/images/holistic-system/leftArrow.png';
import RightArrow from '../../assets/images/holistic-system/rightArrow.png';

const Index = () => {
    let serviceItems = [
        { name: 'Packages', image: S1 },
        { name: 'Exercise Programs', image: S2 },
        { name: 'Advancement Exercises', image: S3 },
        { name: 'Life Force Food', image: S4 },
        { name: 'Health Apps', image: S5 },
        { name: 'Tech Testing', image: S6 },
    ]
    return (
        <div className='sanctuary_services'>
            <div className='sanctuary_services_head'>Other Sanctuary Services</div>
            <br />
            <div className='sanctuary_services_slider'>
                <img src={LeftArrow} alt='left' />
                <div className='sanctuary_services_slider_content'>
                    {serviceItems.map(item => {
                        return (
                            <ServiceItem cn='sanctuary_services_slider_content_item' item={item} />
                        )
                    })}
                </div>
                <img src={RightArrow} alt='right' />
            </div>
        </div>
    )
}

export default Index;