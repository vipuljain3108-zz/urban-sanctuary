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
import Stars from '../../assets/images/guide/stars.png';
import ClockIcon from '../../assets/images/guide/clockIcon.png';
import LengthIcon from '../../assets/images/guide/lengthIcon.png';
import LangIcon from '../../assets/images/guide/langIcon.png';
import MoneyBackIcon from '../../assets/images/guide/moneyBackIcon.png';
import Accordion from '../../components/Accordion';

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

    let panels = [
        {
            label:`Overview: Health Psychology's role in holistic health`,
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur',
        },
        {
            label:'The power of the mind over physical health',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur',
        },
        {
            label:'The Emotional Immune System',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur',
        },
        {
            label:'Nutritional Psychiatry, Addiction And Trauma',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur',
        },
        {
            label:'Advancement - Higher Echelon Directives',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur',
        },
        {
            label:'Summary of Tools and Techniques',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur',
        },
        {
            label:'Planet Impact – Global Health Psychology for Greater Intergenerational Health Span',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur',
        },
    ]

    return (
        <div className='guide'>
            <Header />
            <div className='guide_banner'>
                <div className='guide_banner_content'>
                    <div className='guide_banner_content_data'>
                        <div className='guide_banner_content_data_title'>Principle Guide and Book</div>
                        <div className='guide_banner_content_data_post'>Health Psychology</div>
                        <div className='guide_banner_content_data_desc'> A Paradigm Shift to Greater Health Span</div>
                        <div className='guide_banner_content_data_rating'>
                            <img src={Stars} alt='Stars' />
                            <p>{`(102)`}</p>
                        </div>
                        <div className='guide_banner_content_data_author'><b>Author:</b> <i>Kim Larking</i></div>
                        <p><b>Description:</b> Awaken Mind X Body by understanding and successfully governing your Self Protecting and Healing Mind-Body System - shifting the health paradigm from institutional reliance to self-care, through simple ‘Life Logical Health Care Principles & Systems’, which every person can comfortably take charge of.
                        <br/><br/>Learn the processors of the nervous, endocrine and immune systems and discover how your psychology determines your physiology. Gain the Tools and Techniques to create a mind that serves you, champion mental health issues, evolve emotional vibrancy and joy, and unlock faster natural healing and trauma processing through amplifying the power of the body through the advanced application of the mind.
                        <br/><br/>Use this Principle Guide as a solid base to start proactively generating holistic health, and to lead into and interlock the following five Guides in the Vitality and Longevity Series.</p>
                        <div className='guide_banner_content_data_bordered'> Living in Vibrant Health to 120 Years of Age One of six Health Guides in the Vitality and Longevity series.Principle Guide and book</div>
                    </div>
                    <div className='guide_banner_content_card'>
                        <div className='guide_banner_content_card_banner' />
                        <div className='guide_banner_content_card_price'>$39.99</div>
                        <div className='guide_banner_content_card_btns'>
                            <div className='guide_banner_content_card_btns_btn light'>Add to Cart</div>
                            <div className='guide_banner_content_card_btns_btn dark'>BUY now !</div>
                        </div>
                        <div className='guide_banner_content_card_list'>
                            <div className='guide_banner_content_card_list_item'>
                                <img src={LengthIcon} alt='icon' />
                                <div><b>Length :</b>  200 pages / 110,000 words</div>
                            </div>
                            <div className='guide_banner_content_card_list_item'>
                                <img src={LangIcon} alt='icon' />
                                <div><b>Language :</b>  English</div>
                            </div>
                            <div className='guide_banner_content_card_list_item'>
                                <img src={MoneyBackIcon} alt='icon' />
                                <div><b>Money-Back Guarantee</b></div>
                            </div>
                        </div>
                    </div>
                    <ClusterIcons />
                </div>
            </div>
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
            <div className='guide_accordion'>
                <div className='guide_accordion_title'>Guide Content</div>
                <div className='guide_accordion_section'>
                    <div className='guide_accordion_section_list'>
                        <Accordion panels={panels} />
                    </div>
                    <div className='guide_accordion_section_banner'>
                        <div className='guide_accordion_section_banner_content'>
                        AN INTRODUCTION TO  
                        <div className='guide_accordion_section_banner_content_large'>The Self-Protecting and Healing Mind-Body System</div>
                        and
                        <div className='guide_accordion_section_banner_content_large'>Mind - Body- Biosphere</div>
                        FEATURING  
                        <div className='guide_accordion_section_banner_content_large'>A Self-Advancing Lifestyle</div>
                        </div>
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