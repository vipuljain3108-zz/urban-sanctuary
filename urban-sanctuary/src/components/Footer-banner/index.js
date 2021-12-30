import React from "react";
import FooterLogo from '../../assets/images/aboutUs/footer_logo.png';
import './index.scss';

const Index = () => {
    return (
        <div className='footer_banner'>
            <img src={FooterLogo} alt='logo'/>
            <div className='title'>Urban Sanctuary</div>
            <div className='coloredText'>Discover your Magnificence</div>
            <div className='desc'>Sanctuaries for human wellbeing and advancement, Elevating Global Consciousness, and helping create “A Successful Planet.”</div>
        </div>
    )
}

export default Index;