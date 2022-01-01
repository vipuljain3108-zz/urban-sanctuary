import React from 'react';
import Header from "../../components/Header/Header";
import './index.scss';
import FooterBanner from '../../components/Footer-banner';
import OptimiseReport from '../../components/Optimise-report'
import B1 from '../../assets/images/holistic-system/bg1.png'
import B2 from '../../assets/images/holistic-system/bg2.png'
import B3 from '../../assets/images/holistic-system/bg3.png'
import ClusterIcons from '../../components/Cluster-icons';
import FiveMen from '../../components/Five-men';
import CommonImage1 from '../../assets/images/holistic-system/s1-1.png';
import MainImage1 from '../../assets/images/holistic-system/s1-2.png';
import CommonImage2 from '../../assets/images/holistic-system/s2-1.png';
import MainImage2 from '../../assets/images/holistic-system/s2-2.png';
import CommonImage3 from '../../assets/images/holistic-system/s3-1.png';
import MainImage3 from '../../assets/images/holistic-system/s3-2.png';
import CommonImage4 from '../../assets/images/holistic-system/s4-1.png';
import MainImage4 from '../../assets/images/holistic-system/s4-2.png';
import CommonImage5 from '../../assets/images/holistic-system/s5-1.png';
import MainImage5 from '../../assets/images/holistic-system/s5-2.png';
import TestTube from '../../assets/images/holistic-system/testTube.png';
import SanctuaryServices from '../../components/Sanctuary-services';

const Index = () => {
    return (
        <div className='holistic_system'>
            <Header />
            <FiveMen />
            <OptimiseReport />
            <SanctuaryServices />
            <div className='disclaimer'>
                <div className='disclaimer_head'>HEALTH DISCLAIMER</div>
                The Sanctuary services, Guides, protocols, programs, blogs and newsletters, and all other such content are provided as general information and discussions about health and related subjects. The information and content provided in this website, or in any linked materials, are not intended and should not be construed as medical advice, nor is the information a substitute for professional medical expertise or treatment.
                <br/><br/>If you or any other person has a medical concern, you should consult with your health care provider or seek other professional medical treatment. Never disregard professional medical advice or delay in seeking it because of something that you have read on this website or in any linked or related materials. If you think you may have a medical emergency, call your doctor or emergency services immediately. The opinions and views expressed herein have no relation to those of any academic, hospital, health practice or other institution.
            </div>
            <FooterBanner />
        </div>
    )
}

export default Index;