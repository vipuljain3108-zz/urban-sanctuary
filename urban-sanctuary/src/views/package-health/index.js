import React from 'react';
import Header from "../../components/Header/Header";
import './index.scss';
import FooterBanner from '../../components/footer-banner';
import SanctuaryServices from '../../components/sanctuary-services';
import Disclaimer from '../../components/disclaimer';
import CustomerReviews from '../../components/customer-reviews';
import FiveMen from '../../components/five-men';
import ClusterIcons from '../../components/cluster-icons';
import Star from '../../assets/images/health-package/star.png';
import Line from '../../assets/images/health-package/line.png';
import Kimbra from '../../assets/images/health-package/kimbra.png';
import Video1 from '../../assets/images/health-package/video1.png';
import Video2 from '../../assets/images/health-package/video2.png';
import PlayIcon from '../../assets/images/health-package/playIcon.png';
import Banner1 from '../../assets/images/health-package/s1.png';
import Banner2 from '../../assets/images/health-package/s2.png';
import Banner3 from '../../assets/images/health-package/s3.png';
import Banner4 from '../../assets/images/health-package/s4.png';
import Banner5 from '../../assets/images/health-package/s5.png';
import Banner6 from '../../assets/images/health-package/s6.png';
import Banner7 from '../../assets/images/health-package/s7.png';
import Quality from '../../assets/images/health-package/quality.png';
import GoldenTick from '../../assets/images/health-package/goldenTick.png';
import GreenDisk from '../../assets/images/health-package/greenDisk.png';
import InviteCard from '../../assets/images/health-package/inviteCard.png';

const Index = () => { 
    const sections = [
        {   
            title: 'Non-invasive Health Testing',
            desc: 'Assessment testing package including Inbody scan, Cell-Wellbeing hair test, blood oxygen and blood pressure tests, skin condition testing. Gain a comprehensive overview of your health status by understand your body composition, nutritional analysis, cardiovascular and cardiorespiratory state for an insight into your rate of aging. The program retests each month to chart and ensure progress. ',
            image: Banner1,
        },
        {
            title: 'Specialised Health Apps',
            desc: 'Custom Sanctuary health Apps designed to integrate with all Sanctuary health services to assist and co-ordinate optimal nutrition intake, weight adjustment and health span. Program and chart intermittent fasting, Sanctuary meal and exercise plans, and sleep. Self-evaluate toxin exposure, fitness and flexibility, psychological well-being, health approach, physiological efficiencies and holistic health as a whole',
            image: Banner2,
        },
        {
            title: 'Life Force Food',
            desc: 'Hundreds of specialised custom recipes, only using the most beneficial ingredients for well-being representing the most fresh and nutritious food to transform your mind and body- all analysed down to the micronutrients for precise nutrition. Improve as necessary; skin and hair beauty, natural immunity, metabolic flexibility, accelerated fat loss, cholesterol and other physiological efficiencies. ',
            image: Banner3,
        },
        {
            title: 'Longevity Exercise',
            desc: 'Exercise evaluated for calorie burn based on weight status for accurate weight shifting projection. Improve as necessary metabolic function, cardiorespiratory and cardiovascular performance, muscle and bone mass and density.  ',
            image: Banner4,
        },
        {
            title: 'Health Coaching',
            desc: '30 minutes per week of the latest anti-aging and health span information, encouragement and inspiration to keep you motivated week by week throughout the entire program. This is also an opportunity to submit questions relevant to your stage of health transformation. Click here for one on one coaching.  ',
            image: Banner5,
        },
        {
            title: 'Principle Health Guide',
            desc: 'The Principle Guide and Book, Health Psychology, of the Sanctuary Vitality and Longevity Series to impart the right mindset to achieve health transformation. This book with assist you in succeeding with your health and lifestyle goals and is the perfect companion book to be reading prior, and be  referring to throughout the program.',
            image: Banner6,
        },
    ]
    return (
        <div className='package_health'>
            <Header />
            <div className='package_health_banner'>
                <div className='package_health_banner_content'>
                    <div className='package_health_banner_content_border'></div>
                        {`Directive Health Package `}
                        <p>Take control of your health by committing to a 3 month program to optimise your wellbeing via the most advanced strategies, systems and tech available. If you are determined to improve your health in the shortest time frame then this program is for you. The Directive Health package co-ordinates health testing, food nutrition, age appropriate exercise, health psychology and coaching into a dynamic program with specialised Apps to record and monitor results and project potential outcomes. This program is designed to be the necessary duration to introduce and habituate positive health habits, in order to make a sustained impact and cement reorientation to; a vibrant new you, and a manageable Self-Advancing Life Style. </p>
                        <span className='package_health_banner_content_btn'>Add to Cart</span>
                        <ClusterIcons />
                </div>
            </div>
            <FiveMen />
            <div className='package_health_lightTitle'>Discover your Magnificence</div>
            <div className='quality'>
                <div className='quality_content'>
                    <div className='quality_content_item'>
                        <div className='quality_content_item_title'>Health Directive Focus</div>
                        <div className='quality_content_item_list'>
                            <div className='quality_content_item_list_item'><img src={GreenDisk} alt='green' />Nutritional optimisation, healthy microbiome, metabolic flexibility</div>
                            <div className='quality_content_item_list_item'><img src={GreenDisk} alt='green' />Physiological efficiencies for greater immunity and health span</div>
                            <div className='quality_content_item_list_item'><img src={GreenDisk} alt='green' />Toxin reduction, better skin, appearance, and energy levels</div>
                            <div className='quality_content_item_list_item'><img src={GreenDisk} alt='green' />Stress and depression management, better sleep and vagal tone</div>
                            <div className='quality_content_item_list_item'><img src={GreenDisk} alt='green' />Detailed body composition, sculpting, healthy Weight Shifting</div>
                            <div className='quality_content_item_list_item'><img src={GreenDisk} alt='green' />Co-ordinated elements to aid genuine happiness and radiance</div>
                            <div className='quality_content_item_list_item'><img src={GreenDisk} alt='green' />Mental fitness, emotional vibrancy, cardiovascular fitness</div>
                            <div className='quality_content_item_list_item'><img src={GreenDisk} alt='green' />Reprograming new reward mechanisms and habits for life</div>
                            <div className='quality_content_item_list_item'><img src={GreenDisk} alt='green' />Increased flexibility, range of motion, muscle and bone density</div>
                            <div className='quality_content_item_list_item'><img src={GreenDisk} alt='green' />Vital fundamentals to enable sovereignty over your wellbeing</div>
                        </div>
                    </div>
                    <div className='quality_content_item'>
                        <div className='quality_content_item_title'>
                            Urban Sanctuary Delivery Guarantee
                            {/* <img src={InviteCard} alt='inviteCard' /> */}
                        </div>
                        <div className='quality_content_item_assurance'>
                            <img src={Quality} alt='assurance' />
                            <div className='quality_content_item_assurance_list'>
                                <div className='quality_content_item_assurance_list_item'>
                                    <img src={GoldenTick} alt='tick' />
                                    Comprehensive, multifaceted and integrated health program capable of transforming your health horizon
                                </div>
                                <div className='quality_content_item_assurance_list_item'>
                                    <img src={GoldenTick} alt='tick' />
                                    Interlocks mental – emotional health, preventative, anti-aging and health span initiatives
                                </div>
                                <div className='quality_content_item_assurance_list_item'>
                                    <img src={GoldenTick} alt='tick' />
                                    Advanced integrated health analysis, coaching and monitoring to achieve favourable results
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='quality_content_invite'>
                        <img src={InviteCard} alt='inviteCard' />
                    </div>
                </div>
            </div>
            {sections.map((item, index) => {
                return (
                    <div className='packages_section'>
                        <div className='packages_section_details'>
                            <div className='packages_section_details_desc' style={{ order:`${ index % 2 === 0 ? '' : '2'}`}}>
                                <div className='packages_section_details_desc_f'>
                                    <div className='packages_section_details_desc_f_title'>{item.title}</div>
                                    <div className='packages_section_details_desc_f_details'>{item.desc}</div>
                                </div>
                            </div>
                            <div className='packages_section_details_img' style={{ backgroundImage: `url(${item.image})`}}/>
                        </div>
                    </div>
                )
            })}
            <div className='packages_section'>
                        <div className='packages_section_details'>
                            <div className='packages_section_details_desc'>
                                <div className='packages_section_details_desc_f'>
                                    <div className='packages_section_details_desc_f_title'>Program</div>
                                    <div className='packages_section_details_desc_f_details'>
                                        <ul>
                                            <li><b>Program duration:</b> 3 months </li>
                                            <li><b>Commencement:</b>  All commencement testing data assessment and consultation </li>
                                            <li><b>Plan:</b> Introduction of a personalised regimen for the 3months and realistic goal setting. </li>
                                            <li><b>Inspiration:</b> Weekly health coaching group session. </li>
                                            <li><b>Monitoring:</b> Retesting month 1, 2 and 3 to chart progress.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className='packages_section_details_img' style={{ backgroundImage: `url(${Banner7})`}}/>
                        </div>
                    </div>
            <div className='package_health_costing'>
                <div className='package_health_costing_content'>
                    <div className='package_health_costing_content_title'>Program costing</div>
                    <ul>
                        <li><b>770 In Body scans:</b> $100 per scan, 4 scans at monthly intervals. Commencement, month 1, month 2, and at the completion of the program at month 3. $400.00.</li>
                        <li><b>Cell Wellbeing Hair Testing:</b> $120.00 per test, 2 tests. Commencement and at the completion of the program at month 3. $240.00.</li>
                        <li><b>Blood oxygen and blood pressure:</b> $50.00 per combined test, 4 scans at monthly intervals. Commencement, month 1, month 2, and at the completion of the program at month 3. $200.00.</li>
                        <li><b>Personal regimen plan:</b> $250.00 for plan creation, 45 minute plan explanation and discussion.</li>
                        <li><b>Health Creator App:</b> To use for all food analysis, coordination and meal planning. Free subscription.</li>
                        <li><b>Weight Shifter App:</b> 3 months $29.99 per month ($89.97) / annually $14.99 per month ($179.88)</li>
                        <li><b>Life Force Food meal plans:</b> as per food preferred and ordered by you. A $500.00 food deposit is required at commencement to ensure your commitment to the program. </li>
                        <li><b>Weekly Group Coaching:</b> 12 weeks 5.99 per week ($71.88) / annually $5.00 per week ($260.00).</li>
                        <li><b>Total program cost excluding food:</b> $1251.85 (based on 3 month App subscription and coaching plan).</li>
                        <li><b>Food deposit:</b> 500.00 / <b>Total:</b> 1751.85</li>
                        <li><b>Commitment:</b> The program fee of $1751.85 is payable in advance to ensure the best outcome as a result of your full commitment to the program over the 3 month duration. No refunds issued once payment is made. Your commitment and dedication is crucial to your success and we want to work with you so that you experience the very best results possible and improve your life. </li>
                    </ul>
                    <div style={{ textAlign: 'center' }}>   
                        <div className='package_health_costing_content_title'>Discover your Magnificence </div>
                        <br />
                        <span className='package_health_banner_content_btn'>Add to Cart</span>
                    </div>
                </div>
            </div>
            <div className='sectionTitle'>Your health facilitator</div>
            <div className='facilitator'>
                <div className='facilitator_video' style={{ backgroundImage: `url(${Video1})` }} alt='video2'>
                    <img src={PlayIcon} alt='icon' />
                </div>
                <div className='facilitator_card'>
                    <div className='facilitator_card_details'>
                        <div className='facilitator_card_details_name'>Kim Larking</div>
                        <div className='facilitator_card_details_post'>Human Advancement Architect
                            <br />Founder Vision for Humanity / Vision Products / The Sanctuary Project</div>
                        <div className='facilitator_card_details_desc'><br />The imaginal cells within the caterpillar, intrinsic to the miraculous transformation, which creates the butterfly, are also within us. Our imaginal cells are represented by the human mind, which holds the creation powers of imagination, planning and self-determination.
                            <br /><br />As like the process of metamorphous, the mind harbours the ability to transform our lives as we wish. By understanding and governing the Mind-Body system, and ultimately by amplifying the processors of the body through the advanced application of the mind, we are able to take hold of evolutions best kept secrets to achieve greater holistic health span, and lock in our own Health Evolution process by mastering a Self- Advancing Life Style. In doing so we enable a higher echelon of satisfaction and life success, while also contributing to a better planet and humanity. 
                            <br /><br />We are the architect of our own Self, and hence we can define the person we wish to be, and with focus and belief materialise our dreams. Be the architect of your life and create an abundance of love, wealth, health and happiness.</div>
                            <br />
                            <b><i>{`"Let me help you catalyse and architect your creation powers of imagination, planning & self-determination"`}</i></b>
                    </div>
                </div>
            </div>
            <div className='sectionTitle'>Endorsement</div>
            <div className='endorsement'>
                <div className='endorsement_video' style={{ backgroundImage: `url(${Video2})` }} alt='video2'>
                    <img src={PlayIcon} alt='icon' />
                </div>
                <div className='endorsement_card'>
                    <img src={Kimbra} alt='kimbra' />
                    <div className='endorsement_card_details'>
                        <div className='endorsement_card_details_name'>Kimbra</div>
                        <div className='endorsement_card_details_post'>Recording Artist/ Pop Star</div>
                        <div className='endorsement_card_details_desc'>“ Hi Kim, Kimbra here! Just wanted to write a quick note to say thank you for the lovely Vision products! Very kind of you and I wanted to just encourage you in the work you’re doing as it has been really nice to read about the backstory, ethics and ‘vision’ (so to speak!) behind your company and what you stand for. I appreciate you taking the time to share that with me, keep up the great work! ”</div>
                    </div>
                </div>
            </div>
            <div className='customers'>
                <div className='customers_content'>
                    <div className='customers_content_head'>Customer Reviews</div>
                    <div className='customers_content_star'>
                        <img src={Star} alt='star' height='38px' width='38px'/>
                        <div className='customers_content_star_title'>
                         <img src={Line} alt='star' />
                        STAR REVIEW
                         <img src={Line} alt='star' />
                        </div>
                    </div>
                    <CustomerReviews />
                 </div>
            </div>
            <SanctuaryServices />
            <Disclaimer />
            <FooterBanner />
        </div>
    )
}

export default Index;