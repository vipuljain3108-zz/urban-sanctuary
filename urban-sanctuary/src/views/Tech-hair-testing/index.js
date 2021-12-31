import React from 'react';
import Header from "../../components/Header/Header";
import './index.scss';
import FooterBanner from '../../components/Footer-banner';
import HairTesting from '../../assets/images/tech-hair-testing/hair-testing-img.png'
import Instagram from '../../assets/images/tech-hair-testing/Instagram.png'
import Twitter from '../../assets/images/tech-hair-testing/Twitter.png'
import Facebook from '../../assets/images/tech-hair-testing/Facebook.png'
import Globe from '../../assets/images/tech-hair-testing/globe-icon.png'
import BannerBg from '../../assets/images/tech-hair-testing/hair-testing-banner.png'
import ClusterIcons from '../../components/Cluster-icons';
import EyeImg from '../../assets/images/tech-hair-testing/eyeImg.png'
import Telescope from '../../assets/images/tech-hair-testing/telescope.png'
import PieChart from '../../assets/images/tech-hair-testing/pieChart.png'
import Bg1 from '../../assets/images/tech-hair-testing/b1.png'
import Bg2 from '../../assets/images/tech-hair-testing/b2.png'
import Bg3 from '../../assets/images/tech-hair-testing/b3.png'
import Calender from '../../assets/images/tech-hair-testing/calender.png'
import VideoThumbnail from '../../assets/images/tech-hair-testing/videoThumbnail.png'
import User1 from '../../assets/images/tech-hair-testing/brenda-user.png'
import User2 from '../../assets/images/tech-hair-testing/walker-user.png'
import OptimiseReports from '../../components/Optimise-report'

const Index = () => {
    return (
        <div className='hair_testing'>
            <Header />
            <div className='section1' style={{ backgroundImage: `url(${BannerBg})` }}>
                <div className='section1_banner'>
                    <div className='breadCrumbs'>
                        <div className='breadCrumbs_links'>{`Services > Tech Testing > Hair Testing`}</div>
                        <div className='social_icons'>
                            <img src={Instagram} alt='social' />
                            <img src={Twitter} alt='social' />
                            <img src={Facebook} alt='social' />
                            <img src={Globe} alt='social' />
                        </div>
                    </div>
                    <div className='section1_banner_title'>Hair Testing</div>
                    <div className='section1_banner_content'>
                        <img src={HairTesting} alt='testing' />
                        <div className='section1_banner_desc'>
                            <div className='section1_banner_desc_head'>
                                <div className='section1_banner_desc_head_title'>Hair testing - Cell Wellbeing</div>
                                <div>{`Personalized Epigenetic Nutritional & 
                                    Wellbeing Reports`}</div>
                            </div>
                            <br />
                            Benefit from a full 30+ page report, which includes over 800 nutritional and environmental markers. This personalised data is delivered within 20 minutes via a German Based Digital Epigenetic Mapping Service, all from the scan of four of your hair strands. The Cell Wellbeing test helps to provide a piece of the puzzle around personalised nutritional epigenetic mapping, as well as personalised optimisation strategies.
                            <br /><br />Your epigenetic report highlights potential functional impacts caused by Environmental Toxins, Electro Magnetic Impacts, Nutritional Diet, Life Style and Underlying Food Stressors. Each report also provides nutritional advice on optimising your wellbeing. The Sanctuary uses this specific test to help evaluate a wide range of nutritional information including: Vitamins, Minerals, Amino Acids, Fatty Acids, and Anti-Oxidants to help craft the nutritional optimisation of meal plans. Cell Wellbeing is compliant with FDA rulings</div>
                    </div>
                    <ClusterIcons />
                </div>
            </div>
            <div className='section2'>
                <div className='section2_content'>
                    <div>
                        <div className='section2_content_title'>Discover your epigenetic health priorities to best strategise greater wellness
                        </div>
                        <div className='section2_content_desc'>The Cell Wellbeing Hair Test assesses your epigenetics for vitamins, parasites and viruses, nutrition, toxins, antioxidants, microbiology, minerals, fatty acids, EFA and EMF (radiation), as well as system supports including adrenals, digestion, brain health, circulation, and emotions.</div><br />
                        <div>
                            <li>Are you nutritionally balanced or deficient in certain vitamins, amino’s, EFA’s, antioxidants and minerals?</li>
                            <li>How are your key bodily systems such as; immune, gastrointestinal, adrenals, and musculoskeletal systems fairing?</li>
                            <li>Are you truly hydrated each and every day?</li>
                            <li>What foods are potentially causing you troubles?</li>
                            <li>Are you carrying unwanted fungus, mould spores, bacteria, viruses and parasites?</li>
                            <li>Is your live /work environment affecting your overall wellness through toxins, and electromagnetic fields?</li>
                            <li>Are your emotions as balanced as you would wish?</li>
                            <li>Is your sports performance, work ethic, life passions, mojo or general energy being hindered by unknown energy sapping factors? </li>
                        </div>
                    </div>
                    <img src={EyeImg} alt='eye' />
                </div>
            </div>
            <div className='section3'>
                <img src={Telescope} alt='telescope' />
                <div className='section3_content'>
                    <div className='section3_content_title'>German Based Digital Epigenetic Mapping Service</div>
                    <div className='section3_content_body'>Modern science now understands how your genes are largely influenced by lifestyle factors and the environment as opposed to purely genetic inheritance. With the Cell Wellbeing Digital S-Drive system it’s now possible to map out your personal epigenetic indicators in less than 20 minutes with only four strands of your hair.
                        <br /><br /> Hair carries personal information concerning the state of your body and hence represents a method of analysis to obtain value bio-markers. The S drive and its associated German based analysis system, now enables the mapping of this epigenetic information to provide over 800 wellness indicators that can then be used to create a blue print of your wellbeing.
                    </div>
                    <br></br>
                    <div className='displayFlex'>
                        <p>This test provides in itself a 90 day plan, while also greatly contributing to the Sanctuaries overall health approach when the data is considered amongst the other Sanctuary testing criteria.</p>
                        <img src={PieChart} alt='piechart' />
                    </div>
                </div>
            </div>
            <div className='section4'>
                <OptimiseReports />
            </div>
            <div className='section5'>
                <span className='section5_boldText'>Health psychology principle Guide and book</span> <br />
                A perfect learning companion to our Sanctuary Testing is the Principle Guide and book Health Psychology which thoroughly illustrates the processors and methods to epigenetic expression - and how to effectively advance health and evolve your life.
                <br /><br />
                <span className='section5_boldText'>Nutritional and Environmental Markers</span><br />
                Most health problems are easy to understand, treat and rectify, while others seem a mystery. More thorough and diverse testing can help provide you, your doctor and your health professionals the missing information to navigate a path to a better quality of life.
                <div className='section5_link'>See all Sanctuary Testing.</div>
            </div>
            <div className='section6'>
                <div className='section6_item' style={{ backgroundImage: `url(${Bg1})` }}>
                    <div className='section6_item_title'>Quick and simple epigenetic testing</div>
                    <br /><div className='section6_item_body'>We carefully take 4 hair follicles from the nape of your neck, which are scanned by our S drive and analysed by the Cell-wellbeing team in Germany.</div>
                </div>
                <div className='section6_item' style={{ backgroundImage: `url(${Bg2})` }}>
                    <div className='section6_item_title'>Detailed 30 page report within 20 minutes</div>
                    <br /><div className='section6_item_body'>Acomprehensive 30 + page report is received which provides insights into how your health and well-being can be improved, especially from nutritional and environmental stand points.</div>
                </div>
                <div className='section6_item' style={{ backgroundImage: `url(${Bg3})` }}>
                    <div className='section6_item_title'>Health strategies and data integration</div>
                    <br /><div className='section6_item_body'>Based on your test results, and the health priorities identified, we discuss with you how you might maximise your time to most effectively improve your health. Plus integrate the Hair Test data with other Sanctuary testing for a broader health profile, to further fine tune effective strategies.</div>
                </div>
            </div>
            <div className='section7'>
                <div className='section7_title'>BOOKING PROCESS</div>
                <div className='section7_content'>
                    <div className='section7_content_item' style={{ backgroundColor: '#E6C7F7'}}>
                        <div className='section7_content_item_step' style={{ backgroundColor: '#7E489C' }}>Step 1</div>
                        <p><b>Schedule a time</b> - Use our online booking calendar or phone us for an appointment on 021 505170 and confirm your appointment with a payment</p>
                    </div>
                    <div className='section7_content_item' style={{ backgroundColor: '#E4E893'}}>
                        <div className='section7_content_item_step' style={{ backgroundColor: '#9AA200' }}>Step 2</div>
                        <p><b>Attend our Sanctuary</b> - Come into our Sanctuary at your scheduled appointment time allowing 1 hour. We will carefully take 4 hair strands from the nape of your neck for analysis, and review your report once it is complete.</p>
                    </div>
                    <div className='section7_content_item' style={{ backgroundColor: '#B5D9F1'}}>
                        <div className='section7_content_item_step' style={{ backgroundColor: '#659BBF' }}>Step 3</div>
                        <p><b>Consultation and data integration</b> - We will discuss your test results with you, highlight areas of health excellence and concern, and if you wish, assist with the down load and integration of your new health data into the Health Creator App. </p>
                    </div>
                </div>
                <div className='section7_price'>
                    <b>Price</b>
                    <p>The price of $149.00 includes your comprehensive Cell Well-being report, which we review with you in a 30 minute consultation.</p>
                </div>
                <div className='section7_calender'>
                    <img src={Calender} alt='calender' />
                    <div>Book an Appointment</div>
                </div>
            </div>
            <div className='section8'>
                <div className='section8_content'>
                    <div className='section8_content_body'>
                        <div className='section8_content_body_head'>Our Customers</div>
                        <div className='section8_content_body_user'>
                            <div className='section8_content_body_user_head'>
                                <img src={User1} alt='user' />
                                Jonathan Walker
                            </div>
                            <div>In hac habitasse platea dictumst. Sed nec venenatis odio. Nulla faucibus ipsum sed faucibus accumsan. Donec rhoncus luctus massa vitae lobortis. Duis consequat, nunc a pretium imperdiet, neque est rhoncus massa, tristique rutrum nisl risus at libero.</div>
                        </div>
                        <div className='section8_content_body_user'>
                            <div className='section8_content_body_user_head'>
                                <img src={User2} alt='user' />
                                Brenda Mercer
                            </div>
                            <div>Lorem ipsum dolor sit amet consectetur adipiscing elit sodales primis, mollis viverra conubia ligula inceptos laoreet libero tortor, nascetur non habitasse iaculis tempor nec egestas fames augue, platea porta integer nostra curae sed arcu. Nec ut diam vulputate ante scelerisque ridiculus lobortis orci mi curae.</div>
                        </div>
                    </div>
                    <img src={VideoThumbnail} alt='video' />
                </div>
            </div>
            <FooterBanner />
        </div>
    )
}

export default Index;