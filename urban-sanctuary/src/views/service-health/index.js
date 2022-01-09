import React from 'react';
import Header from "../../components/Header/Header";
import './index.scss';
import FooterBanner from '../../components/footer-banner';
import { Row, Col } from 'react-bootstrap';
import circleIon from '../../assets/images/circle-ion.png';
import editIcons from '../../assets/images/edit-icons.png';
import shifterApp from '../../assets/images/shifterapp.png';
import creatorApp from '../../assets/images/creatorapp.png';
import Cluster1 from '../../assets/images/Cluster-1.png';
import ClusterIcons from '../../components/cluster-icons';
import Cover1 from '../../assets/images/service-health/cover1.png';
import Cover2 from '../../assets/images/service-health/cover2.png';
import ServiceItem from '../../components/service-item';
import Provision1 from '../../assets/images/service-health/provision1.png';
import Provision2 from '../../assets/images/service-health/provision2.png';
import Provision3 from '../../assets/images/service-health/provision3.png';
import Provision4 from '../../assets/images/service-health/provision4.png';
import Provision5 from '../../assets/images/service-health/provision5.png';
import Provision6 from '../../assets/images/service-health/provision6.png';
import Protocols1 from '../../assets/images/service-health/protocols1.png';
import Protocols2 from '../../assets/images/service-health/protocols2.png';
import Protocols3 from '../../assets/images/service-health/protocols3.png';
import Protocols4 from '../../assets/images/service-health/protocols4.png';
import Protocols5 from '../../assets/images/service-health/protocols5.png';
import Protocols6 from '../../assets/images/service-health/protocols6.png';
import CoursesBg from '../../assets/images/service-health/courses.png';
import appBg1 from '../../assets/images/service-health/app1.png';
import appBg2 from '../../assets/images/service-health/app2.png';
import SalonBg from '../../assets/images/service-health/salon.png';
import LeftArrow from '../../assets/images/holistic-system/leftArrow.png';
import RightArrow from '../../assets/images/holistic-system/rightArrow.png';
import Pro from '../../assets/images/service-health/pro1.png';

const Index = () => {
    let guidesWorkshops = [
        { name: `Pure Products and Environment`, image: Provision1 },
        { name: 'Health Psychology', image: Provision2 },
        { name: 'Life Force Food', image: Provision3 },
        { name: 'Longevity Activities', image: Provision4 },
        { name: 'Physiological Efficiencies', image: Provision5 },
        { name: `Natural Remedies Medicines and Healing`, image: Provision6 },
    ]

    let healthProtocols = [
        { name: `Immune System`, image: Protocols1 },
        { name: 'Brain Health', image: Protocols2 },
        { name: 'Heart Health', image: Protocols3 },
        { name: 'Cellular Health', image: Protocols4 },
        { name: 'Bone and Cartilage Health', image: Protocols5 },
        { name: `Increased Health Span`, image: Protocols6 },
    ]

    return (
        <div className='service_health'>
            <Header />
            <ClusterIcons />
            <div className='service_health_banner'>
                <div className='service_health_banner_content'>
                    <div className='service_health_banner_content_links'>
                        <li>health span</li>
                        <li>radiance</li>
                        <li>energy</li>
                    </div>
                    <div className='service_health_banner_content_title'>HEALTH</div>
                    <div className='service_health_banner_content_links' style={{ textAlign: 'left' }}>
                        <li>virility</li>
                        <li>optimism</li>
                        <li>participation</li>
                    </div>
                </div>
            </div>
            <div className="info-wraper">
                <Row>
                <Col sm={12} md={5}>
                    <div className="info-sec">
                    <span className="info-left">
                        <img alt="no image" src={circleIon} />
                        <p>Health</p>
                    </span>
                    <p>When phasellus dignissim, in pellentesuqe?</p>
                    <img alt="no image" src={editIcons} />
                    </div>
                </Col>
                <Col sm={12} md={2}>
                    <div className="tb-info">
                    <img alt="no image" className="activeimg" src={Cluster1} />
                    </div>
                </Col>
                <Col sm={12} md={5}>
                    <div className="app-btn">
                    <button><img alt="no image" src={shifterApp} /> WEIGHT SHIFTER APP</button>
                    <button><img alt="no image" src={creatorApp} /> HEALTH CREATOR APP</button>
                    </div>
                </Col>
                </Row>
            </div>
            <div className='service_health_sectionTitle'>
                <div className='service_health_sectionTitle_head'>
                    DIscovery
                </div>
                <div className='service_health_sectionTitle_desc'>
                    The only way to advance is to know thyself.
                </div>
            </div>
            <div className='section1'>
                <div className='section1_banners'>
                    <div className='section1_banners_item' style={{ backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${Cover1})`}}>Metawheel</div>
                    <div className='section1_banners_item' style={{ backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${Cover2})`}}>Tech testing</div>
                </div>
                <p><b>Shift</b> to embracing your potential with the aid of our recommendation schedule</p>
            </div>
            <div className='service_health_sectionTitle'>
                <div className='service_health_sectionTitle_head'>
                    PROVISIONS
                </div>
                <div className='service_health_sectionTitle_desc'>
                    Evolve by utilising all that we provide to become your desired being.
                </div>
            </div>
            <div className='section2'>
                <div className='section2_subTitle'>{`GUIDES & Workshops`}</div>
                <div className='list'>
                    {guidesWorkshops.map(item => {
                        return (
                            <ServiceItem cn='list_item' item={item} />
                        )
                    })}
                </div>
                <div className='section2_subTitle' style={{ marginTop: '40px'}}>Courses</div>
                <div className='courses'>
                    <ServiceItem cn='courses_banner' item={{ name: 'Vitality and Logevity', image: CoursesBg}} uppercase/>
                    <div className='courses_desc'>
                        <p>Take control of your well-being by investing in these concise Health Guides and corresponding Courses, developed exclusively by the Sanctuary. Compliment your well-being knowledge through the unique perspectives contained in this Vitality and Longevity series. Gain the insights and context to evolve greater holistic well-being and better leverage our Health Protocols. Vital Guides, and Courses, for greater Health Span.</p>
                        <div className='courses_desc_btn'>VIEW ALL COURSES</div>
                    </div>
                </div>
                <div className='section2_subTitle' style={{ marginTop: '40px'}}>More Services</div>
                <div className='more_services'>
                    <div className='more_services_item'>
                    <br />Foods<br />
                        Food<br />
                        Drink<br />
                        Dressings<br />
                        Desserts<br />  
                    </div>
                    <ServiceItem cn='more_services_banner' item={{ name: 'SPA & SALON', image: SalonBg}}/>
                    <div className='more_services_item'>
                    <br />Facilities:<br />
                        Float Tanks<br />
                        Infrared Sauna<br />
                        Mineral Pool<br />
                        Natural Highs Bar<br />
                    </div>
                    <div className='more_services_item'>
                    <br />Categories:<br />
                        NZ Natural Skin Care<br />
                        Eco Hair and Body Care<br />
                        Super-soft Eco Apparel<br />
                        Nature's Greeting Cards<br />
                        Coconut Oil<br />
                        Specialty Gift Packs<br />
                    </div>
                    <div className='more_services_item'>
                    <br />Exercises:<br />
                        Fusion Exercise Series<br />
                        Home workouts<br />
                        Yoga {`&`} Qigong<br />
                        Dance<br />
                        Mind-health<br />
                    </div>
                    <div className='more_services_item'>
                        Packages:<br />
                        Daytime<br />
                        {`Spa & Saloon`}<br />
                        Couples<br />
                        Fusion Exercise<br />
                        Health<br />
                        Senior Citizens<br />
                        {`Corporate & Family`}<br />
                        Metawheel Course<br />
                    </div>
                </div>
            </div>
            <div className='service_health_sectionTitle'>
                <div className='service_health_sectionTitle_head'>
                    Health Profesionals
                </div>
                <div className='service_health_sectionTitle_desc'>
                    Create your advancement and success with the aid of our; health professionals, action protocols and assistant apps customisable to your desired being.
                </div>
            </div>
            <div className='service_health_slider'>
                    <img src={LeftArrow} alt='left' />
                    <div className='service_health_slider_content'>
                        <div className='service_health_slider_content_item' style={{ backgroundImage: `url(${Pro})` }} />
                        <div className='service_health_slider_content_item'>
                            <h6>Kim larking</h6>
                            <div>Human Advancement Architect</div>
                            <div>Kim Larking, creator of Mind X Body Fusion Exercise, author of the book Health Psychology, 6th degree Kiaido Ryu black belt, aikido and yoga enthusiast, anti-aging and health span educator.</div>
                        </div>
                        <div className='service_health_slider_content_item'>Watch Our Team Grow</div>
                        <div className='service_health_slider_content_item'>
                            <h6>Watch Our Team Grow</h6>
                            <p>As we take on and train more health professionals, coaches and facilitators</p>
                        </div>
                        <div className='service_health_slider_content_item'>Watch Our Team Grow</div>
                        <div className='service_health_slider_content_item'>
                            <h6>Watch Our Team Grow</h6>
                            <p>As we take on and train more health professionals, coaches and facilitators</p>
                        </div>
                    </div>
                    <img src={RightArrow} alt='right' />
            </div>
            <div className='service_health_sectionTitle'>
                <div className='service_health_sectionTitle_head'>
                    Health  Protocols
                </div>
            </div>
            <div className='list'>
                {healthProtocols.map(item => {
                    return (
                        <ServiceItem cn='list_item' item={item} uppercase/>
                    )
                })}
            </div>
            <div className='service_health_sectionTitle'>
                <div className='service_health_sectionTitle_head'>
                    Assistant apps
                </div>
            </div>
            <div className='apps'>
                    <ServiceItem cn='apps_banner' item={{ name: 'HEALTH CREATOR APP', image: appBg1}} uppercase/>
                    <ServiceItem cn='apps_banner' item={{ name: 'WEIGHT SHIFTER APP', image: appBg2}} uppercase/>
                    <div className='apps_desc'>
                        <p>Custom Sanctuary health Apps designed to integrate with all Sanctuary health services to assist and co-ordinate optimal nutrition intake, weight adjustment and health span. Program and chart intermittent fasting, Sanctuary meal and exercise plans, and sleep. Self-evaluate toxin exposure, fitness and flexibility, psychological well-being, health approach, physiological efficiencies and holistic health as a whole.</p>
                    </div>
            </div>
            <FooterBanner />
        </div>
    )
}

export default Index;