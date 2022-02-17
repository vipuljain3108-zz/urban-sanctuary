import React from 'react';
import Header from "../../components/Header/Header";
import './index.scss';
import FooterBanner from '../../components/footer-banner';
import OptimiseReport from '../../components/optimise-report'
import B1 from '../../assets/images/holistic-system/bg1.png'
import B2 from '../../assets/images/holistic-system/bg2.png'
import B3 from '../../assets/images/holistic-system/bg3.png'
import ClusterIcons from '../../components/cluster-icons';
import FiveMen from '../../components/five-men';
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
import WhiteEarth from '../../assets/images/holistic-system/whiteEarth.png';
import SanctuaryServices from '../../components/sanctuary-services';
import Disclaimer from '../../components/disclaimer';

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
                            <div className='commonSection_content_image_more'>
                                <img src={WhiteEarth} alt='earth' />
                                READ MORE
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
                            INBODY SCANNER
                        </div>
                        <img src={MainImage1} alt='img' style={{ width: '230px'}}/>
                        <div className='commonSection_content_main_desc'>
                            Inbody uses Bioelectrical Impedance Analysis, which is a completely safe method for measuring body composition. However BIA should not be used by anyone with an electronic medical implant, such as a heart pacemaker or an implantable cardioverter defibrillator (ICD).
                        </div>
                    </div>
                </div>
            </div>
            <div className='commonSection'>
                <div className='commonSection_content'>
                    <div className='commonSection_content_main'>
                        <div className='commonSection_content_main_title'>
                            HAIR TESTING
                        </div>
                        <div style={{ textAlign: 'left', position: 'relative', left: '30px', fontSize: '18px'}}>Cell Wellbeing</div>
                        <img src={CommonImage2} alt='img' height='60px' width='auto'/>
                        <div className='commonSection_content_main_desc'>
                        {`Personalized Epigenetic Nutritional & Wellbeing Reports`}
                        </div>
                    </div>
                    <div className='commonSection_content_image' style={{ backgroundImage: `url(${MainImage2})`}}>
                        <div className='commonSection_content_image_darken' />
                        <div>
                            Nutritional and Environmental Markers
                            <div className='commonSection_content_image_desc'>
                            German Based Digital Epigenetic Mapping Service
                            </div>
                        </div>
                        <div className='commonSection_content_image_more'>
                            <img src={WhiteEarth} alt='earth' />
                            READ MORE
                        </div>
                    </div>
                    <div className='commonSection_content_text'>
                    Benefit from a full 30+ page report, which includes over 800 nutritional and environmental markers. This personalised data is delivered within 20 minutes via a German Based Digital Epigenetic Mapping Service, all from the scan of four of your hair strands and roots. The Cell Wellbeing test helps to provide a piece of the puzzle around personalised nutritional epigenetic mapping, as well as personalised optimisation strategies.
                    <br/><br/>Your epigenetic report highlights potential functional impacts caused by Environmental Toxins, Electro Magnetic Impacts, Nutritional Diet, Life Style and Underlying Food Stressors. Each report also provides nutritional advice on optimising your wellbeing. The Sanctuary uses this specific test to help evaluate a wide range of nutritional information including: Vitamins, Minerals, Amino Acids, Fatty Acids, and Anti-Oxidants to help craft the nutritional optimisation of meal plans.
                    <span style={{ fontSize: '12px' }}>Cell Wellbeing is compliant with FDA rulings</span>
                    </div>
                </div>
            </div>
            <div className='commonSection' style={{ backgroundColor: '#F5F5F5'}}>
                <div className='commonSection_content'>
                    <div className='commonSection_content_image' style={{ backgroundImage: `url(${CommonImage3})`}}>
                        <div className='commonSection_content_image_darken' />
                        <div>
                            Authentic beauty and radiant skin
                            <div className='commonSection_content_image_desc'>
                            Pin point the condition of your skin and avoid long term damage with our state of the art skin testing service.
                            </div>
                        </div>
                        <div className='commonSection_content_image_more'>
                            <img src={WhiteEarth} alt='earth' />
                            READ MORE
                        </div>
                    </div>
                    <div className='commonSection_content_text'>
                    At the Sanctuary we believe that great skin is a reflection of inner health, and that full health and hence true beauty shows itself through the radiance of the eyes, hair and skin. Health and Beauty is represented by what is going on inside of your mind-body, and by the way you protect, nurture and nourish your skin and hair. 
                    <br/><br/>A skin test will reveal not just the condition of your skin, and how to externally look after it, but also contributes to an overview of our comprehensive heath testing services. This holistic health map can identify toxins, nutrient deficiencies, as well as other health conditions which impact appearance, all important information that can then be cross referenced to integrate a natural improvement program for you to achieve greater Vitality and Longevity - which will involve glowing, youthful skin.
                    <br/><br/>We recommend using the fully natural and nutrient rich Vision Products skin and hair care range, along with specialised treatments to compliment this authentic beauty approach.
                    </div>
                    <div className='commonSection_content_main'>
                        <div className='commonSection_content_main_title' style={{ position: 'relative', left: '-55px'}}>
                        Skin Analyser
                        </div>
                        <img src={MainImage3} alt='img' />
                        <div className='commonSection_content_main_desc'>
                        Cross reference tests and gain a window into nutritional optimisation, environmental challenges and toxins, cardiorespiratory and cardiovascular health to achieve the very best beauty appearance possible. 
                        </div>
                    </div>
                </div>
            </div>
            <div className='commonSection'>
                <div className='commonSection_content'>
                    <div className='commonSection_content_main'>
                        <div className='commonSection_content_main_title'>
                        Finger Pulse Oximeter
                        </div>
                        <img src={CommonImage4} alt='img' height='60px' width='auto'/>
                    </div>
                    <div className='commonSection_content_image' style={{ backgroundImage: `url(${MainImage4})`}}>
                        <div className='commonSection_content_image_darken' />
                        <div>
                            Blood oxygen saturation
                            <div className='commonSection_content_image_desc'>
                            Cardiorespiratory and mitochondria efficiency
                            </div>
                        </div>
                    </div>
                    <div className='commonSection_content_text'>
                        Oxygen is transported to the blood within the body through the respiratory system and blood oxygen can be potentially influenced by fresh air, water intake, iron rich foods, exercise, and breathing exercise for additional amounts of oxygen to the lungs and greater energy. This Finger Pulse Oximeter is a simple, yet accurate way for spot-checking blood oxygen saturation levels (and pulse rate) through a fast, and pain free process by simply attaching the device to the finger.  
                    </div>
                </div>
            </div>
            <div className='commonSection' style={{ backgroundColor: '#F5F5F5'}}>
                <div className='commonSection_content'>
                    <div className='commonSection_content_image' style={{ backgroundImage: `url(${CommonImage5})`}}>
                        <div className='commonSection_content_image_darken' />
                        <div>
                        Blood Pressure Monitor
                            <div className='commonSection_content_image_desc'>
                            Keeping an eye on influencing life style factors
                            </div>
                        </div>
                    </div>
                    <div className='commonSection_content_text'>
                    Increased blood pressure can cause health issues and primary hypertension is high blood pressure that develops gradually over time. High blood pressure is most common in adults and is influenced by lifestyle habits such as regular exercise, weight control, healthy diet, and limiting stress, alcohol and tobacco.
                    </div>
                    <div className='commonSection_content_main'>
                        <div className='commonSection_content_main_title'>
                        Blood Pressure Monitor
                        </div>
                        <img src={MainImage5} alt='img' />
                    </div>
                </div>
            </div>
            <OptimiseReport showHead/>
            <div className='section2' style={{ paddingBottom: '140px'}}>
                Precision Functional Health Testing
                <div className='section2_desc'>Fully understand your unique body and its perplexities, with specific health tests, to gain the transparency you need to advance your health state. Functional pathology tests are used to investigate functional, biochemical, nutritional, metabolic and hormonal status. Which can assist practitioners in the diagnosis, treatment and management of patients seeking a holistic approach to health. </div>
                <div className='section2_btn'>Enquire Now</div>
            </div>
            <div className='section3' style={{ backgroundColor: '#F5F5F5'}}>
                <div className='section3_content'>
                    <div className='section3_content_container'>
                        <img src={TestTube} alt='TestTube' />
                        <p>Functional tests focus on actual bodily functions as markers of health, rather than merely looking at disease states and markers of disease, which can also assist in establishing preventive health measures.</p>
                        <div></div>
                    </div>
                    <div className='section3_content_dropDowns'>
                        <div className='section3_content_dropDowns_item'>
                            <div>
                            Standard blood test
                            </div>
                            <div>+</div>
                        </div>
                        <div className='section3_content_dropDowns_item'>
                            <div>
                            Complete Microbiome Mapping
                            </div>
                            <div>+</div>
                        </div>
                        <div className='section3_content_dropDowns_item'>
                            <div>
                            IgA/IgE/lgG Elisa Test
                            </div>
                            <div>+</div>
                        </div>
                        <div className='section3_content_dropDowns_item'>
                            <div>
                            eve test
                            </div>
                            <div>+</div>
                        </div>
                        <div className='section3_content_dropDowns_item'>
                            <div>
                            DUTCH Test
                            </div>
                            <div>+</div>
                        </div>
                        <div className='section3_content_dropDowns_item'>
                            <div>
                            Organic Acids test
                            </div>
                            <div>+</div>
                        </div>
                        <div className='section3_content_dropDowns_item'>
                            <div>
                            DNA Testing
                            </div>
                            <div>+</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='boldText'>Create your complete health map with Sanctuary health testing to establish preventative health and health evolution measures</div>
            <SanctuaryServices />
            <Disclaimer />
            <FooterBanner />
        </div>
    )
}

export default Index;