import React from 'react';
import Header from "../../components/Header/Header";
import './index.scss';
import FooterBanner from '../../components/Footer-banner';
import Phones from '../../assets/images/tech-hair-testing/phones.png'
import PhoneBg from '../../assets/images/tech-hair-testing/phoneBg.png'
import OptimiseReport from '../../components/Optimise-report'

const Index = () => {
    return (
        <div className='hair_testing'>
            <Header />
            <OptimiseReport />
            <FooterBanner />
        </div>
    )
}

export default Index;