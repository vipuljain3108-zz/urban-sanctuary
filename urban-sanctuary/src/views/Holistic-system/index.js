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

const Index = () => {
    return (
        <div className='holistic_system'>
            <Header />
            <div className='section1'>
                    <div className='section1_banner'>
                        <div className='section1_banner_head'>
                        <div className='section1_banner_head_border'></div>
                        {`Advanced Holistic Health Testing Systems & Technology`}
                    </div>
                    <div>
                        <div className='section1_banner_side side1'>
                            <img src={B1} alt='img' />
                            Sanctuary Inhouse Testing
                        </div>
                        <div className='section1_banner_side side2'>
                            <img src={B2} alt='img' />
                            optimise reports
                        </div>
                        <div className='section1_banner_side side3'>
                            <img src={B3} alt='img' />
                            Scientific Testing
                        </div>
                    </div>  
                </div>
                <ClusterIcons />
            </div>
            <FiveMen />
            <div className='section2'>
                Sanctuary Inhouse Testing
                <div className='section2_desc'>The Sanctuary offers the latest range of completely non–invasive health testing services to assimilate the most vital information required for preventative health and health evolution: Body Composition, Visceral Fat, Phase Angle, Extra Cellular Water, Nutritional Profiling, Toxin and Environmental Factors, Frequency Interference, Heart, Blood Pressure and Blood Oxygen, and Skin Condition. </div>
            </div>
            <div className='commonSection' style={{ backgroundColor: '#F5F5F5'}}>
                <div className='commonSection_content'>
                    <div className='commonSection_content_image' style={{ backgroundImage: `url(${CommonImage1})`}}>
                        <div>
                            Inbody 770 body composition scanner
                            <div className='commonSection_content_image_desc'>
                                Highly accurate, medically approved, with visceral fat and Phase Angle scanning to track your physique and general health.
                            </div>
                        </div>
                    </div>
                    <div className='commonSection_content_text'>
                        At the Sanctuary we use the top of the line Inbody Scanner, the Inbody 770. A highly accurate, medically approved body composition scanner which can accurately measure, report and track your physique and general health.
                        <br /><br />Each scan provides a detailed report and health score of your physical composition including; muscle, bone and fat mass, and water composition analysis (ECW). Importantly this machine can measure visceral fat to the percentage point - so that you can rescan more regularly to ensure the program you are on is effective. 
                        <br /><br />This is also the only scanner that can provide information on Phase Angle for more specialised health and anti-aging information. The true age of a human being can be determined by changes in PhAs, a remarkable window into the health of the body, which decreases with age, however when you increase your PhAs, you slow down aging.
                    </div>
                    <div className='commonSection_content_main'>
                        <div className='commonSection_content_main_title'>
                            Skin Analyser
                        </div>
                        <img src={MainImage1} alt='img' />
                        <div className='commonSection_content_main_desc'>
                            Inbody uses Bioelectrical Impedance Analysis, which is a completely safe method for measuring body composition. However BIA should not be used by anyone with an electronic medical implant, such as a heart pacemaker or an implantable cardioverter defibrillator (ICD).
                        </div>
                    </div>
                </div>
            </div>
            <OptimiseReport />
            <FooterBanner />
        </div>
    )
}

export default Index;