import React from 'react';
import Header from "../../components/Header/Header";
import './index.scss';
import FooterBanner from '../../components/footer-banner';
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
import Quality from '../../assets/images/health-package/quality.png';
import GoldenTick from '../../assets/images/health-package/goldenTick.png';
import GreenDisk from '../../assets/images/health-package/greenDisk.png';
import InviteCard from '../../assets/images/guide/inviteCard.png';
import ServiceItem from '../../components/service-item';
import Provision1 from '../../assets/images/service-health/provision1.png';
import Provision2 from '../../assets/images/service-health/provision2.png';
import Provision3 from '../../assets/images/service-health/provision3.png';
import Provision4 from '../../assets/images/service-health/provision4.png';
import Provision5 from '../../assets/images/service-health/provision5.png';
import Provision6 from '../../assets/images/service-health/provision6.png';
import Course1 from '../../assets/images/guide/course1.png';
import Course2 from '../../assets/images/guide/course2.png';
import Course3 from '../../assets/images/guide/course3.png';
import Course4 from '../../assets/images/guide/course4.png';
import Course5 from '../../assets/images/guide/course5.png';
import Course6 from '../../assets/images/guide/course6.png';
import MIcon from '../../assets/images/guide/MIcon.png';

const Index = () => { 
    let guidesWorkshops = [
        { name: `Pure Products and Environment`, image: Provision1 },
        { name: 'Health Psychology', image: Provision2 },
        { name: 'Life Force Food', image: Provision3 },
        { name: 'Longevity Activities', image: Provision4 },
        { name: 'Physiological Efficiencies', image: Provision5 },
        { name: `Natural Remedies Medicines and Healing`, image: Provision6 },
    ]

    let courses = [
        { name: `Discovery Weekend`, image: Course1, btn: 'Pre-Course' },
        { name: 'Vitality and Longevity', image: Course2, btn: 'Main-Course' },
        { name: 'Wisdom and Successes', image: Course3, btn: 'Main-Course' },
        { name: 'Empowerment and Significance', image: Course4, btn: 'Main-Course' },
        { name: 'Clarity and Beauty', image: Course5, btn: 'Main-Course' },
        { name: `Metawheel Package `, image: Course6, btn: 'Course Pkg' },
    ]

    return (
        <div className='guide'>
            <Header />
            {/* <div className='guide_banner'>
                <div className='guide_banner_content'>
                    <div className='guide_banner_content_border'></div>
                        {`Directive Health Package `}
                        <p>Take control of your health by committing to a 3 month program to optimise your wellbeing via the most advanced strategies, systems and tech available. If you are determined to improve your health in the shortest time frame then this program is for you. The Directive Health package co-ordinates health testing, food nutrition, age appropriate exercise, health psychology and coaching into a dynamic program with specialised Apps to record and monitor results and project potential outcomes. This program is designed to be the necessary duration to introduce and habituate positive health habits, in order to make a sustained impact and cement reorientation to; a vibrant new you, and a manageable Self-Advancing Life Style. </p>
                        <span className='guide_banner_content_btn'>Add to Cart</span>
                        <ClusterIcons />
                </div>
            </div> */}
            <FiveMen />
            <div className='guide_lightTitle'>Discover your Magnificence</div>
            <div className='quality'>
                <div className='quality_content'>
                    <div className='quality_content_item'>
                        <div className='quality_content_item_title'>In this Guide you will learn:</div>
                        <div className='quality_content_item_list'>
                            <div className='quality_content_item_list_item'><img src={GreenDisk} alt='green' />The ‘why’ and the ‘how’ of wellbeing</div>
                            <div className='quality_content_item_list_item'><img src={GreenDisk} alt='green' /> Psychology behind successful outcomes</div>
                            <div className='quality_content_item_list_item'><img src={GreenDisk} alt='green' />How to use placebo and alter gene expression</div>
                            <div className='quality_content_item_list_item'><img src={GreenDisk} alt='green' />Stress management and vagal tone</div>
                            <div className='quality_content_item_list_item'><img src={GreenDisk} alt='green' />Reprogramming and dual reward habits</div>
                            <div className='quality_content_item_list_item'><img src={GreenDisk} alt='green' />Strategies to harness the mind and emotions</div>
                            <div className='quality_content_item_list_item'><img src={GreenDisk} alt='green' />Processing negative emotions that halt progress</div>
                            <div className='quality_content_item_list_item'><img src={GreenDisk} alt='green' />The elements to genuine happiness</div>
                            <div className='quality_content_item_list_item'><img src={GreenDisk} alt='green' />Preventative Health and Health Evolution</div>
                            <div className='quality_content_item_list_item'><img src={GreenDisk} alt='green' />Steps to mastering Self- Advancement</div>
                        </div>
                    </div>
                    <div className='quality_content_item'>
                        <div className='quality_content_item_title'>
                            Urban Sanctuary Delivery Guarantee
                        </div>
                        <div className='quality_content_item_assurance'>
                            <img src={Quality} alt='assurance' />
                            <div className='quality_content_item_assurance_list'>
                                <div className='quality_content_item_assurance_list_item'>
                                    <img src={GoldenTick} alt='tick' />
                                    Interlocks metal health, weight control, health span initiatives
                                </div>
                                <div className='quality_content_item_assurance_list_item'>
                                    <img src={GoldenTick} alt='tick' />
                                    Includes the vital fundamentals to take sovereignty over your wellbeing
                                </div>
                                <div className='quality_content_item_assurance_list_item'>
                                    <img src={GoldenTick} alt='tick' />
                                    Universal principles to champion broad based life successes
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='quality_content_invite'>
                        <img src={InviteCard} alt='inviteCard' />
                    </div>
                </div>
            </div>
            <div className='customers'>
                <div className='customers_content'>
                    <div className='customers_content_head'>Customer Reviews</div>
                    <div className='customers_content_star'>
                        <img src={Star} alt='star' height='60px' width='60px'/>
                        <div className='customers_content_star_title'>
                         <img src={Line} alt='star' />
                        STAR REVIEW
                         <img src={Line} alt='star' />
                        </div>
                    </div>
                    <CustomerReviews />
                 </div>
            </div>
            <div className='guide_architecture'>
                <div className='guide_architecture_title'>Metawheel Courses specific to your needs</div>
                <div className='guide_architecture_sub'>
                    <img src={MIcon} alt='img' />
                    <div>Human Advancement Architecture</div>
                </div>
            </div>
            <div className='sectionTitle'>About Author</div>
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
            <div className='guide_services'>
                <div className='guide_services_subTitle'>{`Metawheel Courses`}</div>
                <div className='guide_services_action'>View all Courses</div>
                <div className='guide_services_list'>
                    {courses.map(item => {
                        return (
                            <ServiceItem cn='guide_services_list_item' item={item} />
                        )
                    })}
                </div>
            </div>
            <div className='guide_services'>
                <div className='guide_services_subTitle'>{`GUIDES & Workshops`}</div>
                <div className='guide_services_action'>See all Guides and workshops</div>
                <div className='guide_services_list'>
                    {guidesWorkshops.map(item => {
                        return (
                            <ServiceItem cn='guide_services_list_item' item={item} action/>
                        )
                    })}
                </div>
            </div>
            <Disclaimer />
            <FooterBanner />
        </div>
    )
}

export default Index;