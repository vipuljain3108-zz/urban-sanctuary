import React from 'react';
import Header from "../../components/Header/Header";
import './index.scss';
import FooterBanner from '../../components/Footer-banner';
import OptimiseReport from '../../components/Optimise-report'
import FiveMen from '../../components/Five-men';
import SanctuaryServices from '../../components/Sanctuary-services';
import CustomerReviews from '../../components/Customer-reviews';
import Cluster1 from "../../assets/images/Cluster-1.png";
import Cluster2 from "../../assets/images/Cluster-2.png";
import Cluster3 from "../../assets/images/Cluster-3.png";
import Cluster4 from "../../assets/images/Cluster-4.png";
import Disclaimer from '../../components/Disclaimer';

const Index = () => { 

    return (
        <div className='health_specialists'>
            <Header />
            <div className='health_specialists_banner'>
                <div className='health_specialists_banner_bgImg'></div>
                <div className='health_specialists_banner_bgColor'></div>
            </div>
            <FiveMen />
            <div className='section1'>
                <div className='section1_content'>
                    <p><b>All</b></p>
                    <div className='section1_content_item'>
                        <img src={Cluster1} alt='tag' />
                        <p>Health</p>
                    </div>
                    <div className='section1_content_item'>
                        <img src={Cluster2} alt='tag' />
                        <p>Prosperity </p>
                    </div>
                    <div className='section1_content_item'>
                        <img src={Cluster3} alt='tag' />
                        <p>Inspiration</p>
                    </div>
                    <div className='section1_content_item'>
                        <img src={Cluster4} alt='tag' />
                        <p>Joy</p>
                    </div>
                </div>
            </div>
            <div className='section_pills'>
                <div className='section_pills_item'>Bone and Cartilage</div>
                <div className='section_pills_item'>Immune System </div>
                <div className='section_pills_item'>Brain Health</div>
                <div className='section_pills_item'>Heart Health</div>
                <div className='section_pills_item'>Cellular Health</div>
                <div className='section_pills_item'>Harmonious Relationship</div>
                <div className='section_pills_item'>Holistic Vibrancy</div>
                <div className='section_pills_item'>Prosperity</div>
                <div className='section_pills_item'>Joyology</div>
                <div className='section_pills_item'>Ant-Aging</div>
                <div className='section_pills_item'>Holistic Advancement</div>
                <div className='section_pills_item'>Sports Performance</div>
                <div className='section_pills_item'>Business Excellence</div>
            </div>
            <div className='customers'>
                <div className='customers_content'>
                    <div className='customers_content_head'>What Our Customers Are Saying</div>
                    <CustomerReviews />
                 </div>
            </div>
            <OptimiseReport />
            <SanctuaryServices />
            <Disclaimer />
            <FooterBanner />
        </div>
    )
}

export default Index;