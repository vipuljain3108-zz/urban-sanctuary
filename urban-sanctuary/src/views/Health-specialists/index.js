import React from 'react';
import Header from "../../components/Header/Header";
import './index.scss';
import FooterBanner from '../../components/footer-banner';
import OptimiseReport from '../../components/optimise-report'
import FiveMen from '../../components/five-men';
import SanctuaryServices from '../../components/sanctuary-services';
import CustomerReviews from '../../components/customer-reviews';
import cluster1 from "../../assets/images/Cluster-1.png";
import cluster2 from "../../assets/images/Cluster-2.png";
import cluster3 from "../../assets/images/Cluster-3.png";
import cluster4 from "../../assets/images/Cluster-4.png";
import Disclaimer from '../../components/disclaimer';
import avatar1 from "../../assets/images/health-specialists/a1.png";
import avatar2 from "../../assets/images/health-specialists/a2.png";
import avatar3 from "../../assets/images/health-specialists/a3.png";
import avatar4 from "../../assets/images/health-specialists/a4.png";
import avatar5 from "../../assets/images/health-specialists/a5.png";
import downArrow from "../../assets/images/health-specialists/downArrow.png";
import tile1 from "../../assets/images/health-specialists/t1.png";
import tile2 from "../../assets/images/health-specialists/t2.png";
import ClusterIcons from '../../components/cluster-icons';
import Specialist1 from "../../assets/images/health-specialists/p1.png";
import Specialist2 from "../../assets/images/health-specialists/p2.png";
import Specialist3 from "../../assets/images/health-specialists/p3.png";
import Specialist4 from "../../assets/images/health-specialists/p4.png";
import Specialist5 from "../../assets/images/health-specialists/p5.png";
import Specialist6 from "../../assets/images/health-specialists/p6.png";
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";

const Index = () => { 

    return (
        <div className='health_specialists'>
            <Header />
            <div className='health_specialists_banner'>
                <div className='main'>
                    <div className='main_content'>
                        <div className='main_content_head'>
                            <div className='main_content_head_border'></div>
                            {`In-house Health Specialists`}
                            <p>As the Sanctuary expands operations, we will be taking on a range of Health Professionals, all with unique skill sets. Our intention is to offer you a diverse skill base, which when combined together, offers the most comprehensive expertise in assisting you to greater health span.</p>
                        </div>
                        <div className='main_content_specialists'>
                            <div className='main_content_specialists_border'></div>
                            <div className='main_content_specialists_list'>
                                <div className='avatar' style={{ backgroundImage: `url(${avatar1})`}}></div>
                                <div className='avatar' style={{ backgroundImage: `url(${avatar2})`}}></div>
                                <div className='avatar' style={{ backgroundImage: `url(${avatar3})`}}></div>
                                <div className='avatar' style={{ backgroundImage: `url(${avatar4})`}}></div>
                                <div className='avatar' style={{ backgroundImage: `url(${avatar5})`}}></div>
                                <div className='more'>
                                    SEE OUR SPECIALISTS
                                    <img src={downArrow} alt='down' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='tiles'>
                    <div className='tiles_item'>
                        <div className='tiles_item_bg' style={{ backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${tile1})`}}>consultancy</div>
                        <p>Consult which one of our health facilitators or professionals to see how we can assist you</p>
                    </div>
                    <div className='tiles_item item2'>
                        <div className='tiles_item_bg' style={{ backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${tile2})`}}>protocols</div>
                        <p>Allow one of our team to help guide you through a health protocol specific to your needs</p>
                    </div>
                </div>
                <ClusterIcons />
            </div>
            <FiveMen />
            <div className='section1'>
                <div className='section1_content'>
                    <p><b>All</b></p>
                    <div className='section1_content_item'>
                        <img src={cluster1} alt='tag' />
                        <p>Health</p>
                    </div>
                    <div className='section1_content_item'>
                        <img src={cluster2} alt='tag' />
                        <p>Prosperity </p>
                    </div>
                    <div className='section1_content_item'>
                        <img src={cluster3} alt='tag' />
                        <p>Inspiration</p>
                    </div>
                    <div className='section1_content_item'>
                        <img src={cluster4} alt='tag' />
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
            <div className='specialists'>
                <ResponsiveMasonry
                    columnsCountBreakPoints={{500: 1, 800: 2, 1400: 3}}
                >
                    <Masonry gutter='40px'>
                        <div className='specialists_card'>
                            <div className='specialists_card_avatar' style={{ backgroundImage: `url(${Specialist1})`}}/>
                            <div style={{ marginTop: '-50px'}}>
                                <div className='specialists_card_head'>
                                    Kim larking
                                    <div className='specialists_card_head_dots'>
                                        Human Advancement Architect
                                        <div className='dot' style={{ backgroundColor: 'green'}}></div>
                                        <div className='dot' style={{ backgroundColor: 'blue'}}></div>
                                        <div className='dot' style={{ backgroundColor: 'pink'}}></div>
                                        <div className='dot' style={{ backgroundColor: 'yellow'}}></div>
                                    </div>
                                </div>
                                <div className='specialists_card_tabs'>
                                    <li className='active'>consultancy</li>
                                    <li>protocols</li>
                                </div>
                                <div className='specialists_card_details'>
                                    <p>The imaginal cells within the caterpillar, intrinsic to the miraculous transformation, which creates the butterfly, are also within us. Our imaginal cells are represented by the human mind, which holds the creation powers of imagination, planning and self-determination.
                                    <br /><br />As like the process of metamorphous, the mind harbours the ability to transform our lives as we wish. By understanding and governing the Mind-Body system, and ultimately by amplifying the processors of the body through the advanced application of the mind, we are able to take hold of evolutions best kept secrets to achieve greater holistic health span, and lock in our own Health Evolution process by mastering a Self- Advancing Life Style. In doing so we enable a higher echelon of satisfaction and life success, while also contributing to a better planet and humanity. 
                                    <br /><br />We are the architect of our own Self, and hence we can define the person we wish to be, and with focus and belief materialise our dreams. Be the architect of your life and create an abundance of love, wealth, health and happiness.</p>
                                    <span style={{ color: 'black' }}><b>Training and Experience: </b></span>
                                    <ul>
                                        <li>Creator of Mind X Body Fusion Exercise</li>
                                        <li>Author of the book Health Psychology</li>
                                        <li>6th degree Kiaido Ryu black belt</li>
                                        <li>Aikido and yoga enthusiast</li>
                                        <li>Anti-aging and health span educator</li>
                                    </ul>
                                    <br/>
                                    <p><span style={{ color: 'black' }}><b>Duration: </b></span>30min / 45min / 1hr</p>
                                </div>
                                <div className='specialists_card_pills'>
                                    <div className='specialists_card_pills_pill'>Enquire now</div>
                                    <div className='specialists_card_pills_pill'>GROUP  COACHING</div>
                                </div>
                            </div>
                        </div>
                        <div className='specialists_card'>
                            <div className='specialists_card_avatar' style={{ backgroundImage: `url(${Specialist2})`}}/>
                            <div style={{ marginTop: '-50px'}}>
                                <div className='specialists_card_head'>
                                    Porta ligula proin 
                                    <div className='specialists_card_head_dots'>
                                        Nurse
                                        <div className='dot' style={{ backgroundColor: 'green'}}></div>
                                        <div className='dot' style={{ backgroundColor: 'blue'}}></div>
                                    </div>
                                </div>
                                <div className='specialists_card_tabs'>
                                    <li className='active'>consultancy</li>
                                    <li>protocols</li>
                                </div>
                                <div className='specialists_card_details'>
                                    <p>Phasellus dignissim, tellus in pellentesque mollis, mauris orci dignissim nisl, id gravida nunc enim quis nibh. Maecenas convallis eros a ante dignissim, vitae elementum metus facilisis. Cras in maximus sem. Praesent libero augue, ornare eget quam sed, volutpat suscipit arcu. Duis ut urna commodo, commodo tellus ac.</p>
                                    <span style={{ color: 'black' }}><b>Training and Experience: </b></span>
                                    <ul>
                                        <li>Cras in maximus sem. </li>
                                        <li>Maecenas convallis eros a ante dignissim, vitae elementum metus facilisis.</li>
                                        <li>Arcu. Duis ut urna commodo, commodo tellus ac.</li>
                                        <li>Duis ut urna commodo, commodo tellus ac.</li>
                                        <li>Gravida nunc enim quis nibh. </li>
                                    </ul>
                                    <br/>
                                    <p><span style={{ color: 'black' }}><b>Duration: </b></span>30min / 45min / 1hr</p>
                                </div>
                                <div className='specialists_card_pills'>
                                    <div className='specialists_card_pills_pill'>Enquire now</div>
                                </div>
                            </div>
                        </div>
                        <div className='specialists_card'>
                            <div className='specialists_card_avatar' style={{ backgroundImage: `url(${Specialist3})`}}/>
                            <div style={{ marginTop: '-50px'}}>
                                <div className='specialists_card_head'>
                                    Porta ligula proin 
                                    <div className='specialists_card_head_dots'>
                                    Chiropractic
                                        <div className='dot' style={{ backgroundColor: 'green'}}></div>
                                    </div>
                                </div>
                                <div className='specialists_card_tabs'>
                                    <li className='active'>consultancy</li>
                                    <li>protocols</li>
                                </div>
                                <div className='specialists_card_details'>
                                    <p>Phasellus dignissim, tellus in pellentesque mollis, mauris orci dignissim nisl, id gravida nunc enim quis nibh. Maecenas convallis eros a ante dignissim, vitae elementum metus facilisis. Cras in maximus sem. Praesent libero augue, ornare eget quam sed, volutpat suscipit arcu. Duis ut urna commodo, commodo tellus ac.</p>
                                    <span style={{ color: 'black' }}><b>Training and Experience: </b></span>
                                    <ul>
                                        <li>Cras in maximus sem. </li>
                                        <li>Maecenas convallis eros a ante dignissim, vitae elementum metus facilisis.</li>
                                        <li>Arcu. Duis ut urna commodo, commodo tellus ac.</li>
                                        <li>Duis ut urna commodo, commodo tellus ac.</li>
                                        <li>Gravida nunc enim quis nibh. </li>
                                    </ul>
                                    <br/>
                                    <p><span style={{ color: 'black' }}><b>Duration: </b></span>30min / 45min / 1hr</p>
                                </div>
                                <div className='specialists_card_pills'>
                                    <div className='specialists_card_pills_pill'>Enquire now</div>
                                </div>
                            </div>
                        </div>
                        <div className='specialists_card'>
                            <div className='specialists_card_avatar' style={{ backgroundImage: `url(${Specialist4})`}}/>
                            <div style={{ marginTop: '-50px'}}>
                                <div className='specialists_card_head'>
                                    Porta ligula proin 
                                    <div className='specialists_card_head_dots'>
                                    Councillor
                                        <div className='dot' style={{ backgroundColor: 'pink'}}></div>
                                        <div className='dot' style={{ backgroundColor: 'yellow'}}></div>
                                    </div>
                                </div>
                                <div className='specialists_card_tabs'>
                                    <li className='active'>consultancy</li>
                                    <li>protocols</li>
                                </div>
                                <div className='specialists_card_details'>
                                    <p>Phasellus dignissim, tellus in pellentesque mollis, mauris orci dignissim nisl, id gravida nunc enim quis nibh. Maecenas convallis eros a ante dignissim, vitae elementum metus facilisis. Cras in maximus sem. Praesent libero augue, ornare eget quam sed, volutpat suscipit arcu. Duis ut urna commodo, commodo tellus ac.</p>
                                    <span style={{ color: 'black' }}><b>Training and Experience: </b></span>
                                    <ul>
                                        <li>Cras in maximus sem. </li>
                                        <li>Maecenas convallis eros a ante dignissim, vitae elementum metus facilisis.</li>
                                        <li>Arcu. Duis ut urna commodo, commodo tellus ac.</li>
                                        <li>Duis ut urna commodo, commodo tellus ac.</li>
                                        <li>Gravida nunc enim quis nibh. </li>
                                    </ul>
                                    <br/>
                                    <p><span style={{ color: 'black' }}><b>Duration: </b></span>30min / 45min / 1hr</p>
                                </div>
                                <div className='specialists_card_pills'>
                                    <div className='specialists_card_pills_pill'>Enquire now</div>
                                </div>
                            </div>
                        </div>
                        <div className='specialists_card'>
                            <div className='specialists_card_avatar' style={{ backgroundImage: `url(${Specialist5})`}}/>
                            <div style={{ marginTop: '-50px'}}>
                                <div className='specialists_card_head'>
                                    Porta ligula proin 
                                    <div className='specialists_card_head_dots'>
                                        Nurse
                                        <div className='dot' style={{ backgroundColor: 'green'}}></div>
                                        <div className='dot' style={{ backgroundColor: 'blue'}}></div>
                                    </div>
                                </div>
                                <div className='specialists_card_tabs'>
                                    <li className='active'>consultancy</li>
                                    <li>protocols</li>
                                </div>
                                <div className='specialists_card_details'>
                                    <p>Phasellus dignissim, tellus in pellentesque mollis, mauris orci dignissim nisl, id gravida nunc enim quis nibh. Maecenas convallis eros a ante dignissim, vitae elementum metus facilisis. Cras in maximus sem. Praesent libero augue, ornare eget quam sed, volutpat suscipit arcu. Duis ut urna commodo, commodo tellus ac.</p>
                                    <span style={{ color: 'black' }}><b>Training and Experience: </b></span>
                                    <ul>
                                        <li>Cras in maximus sem. </li>
                                        <li>Maecenas convallis eros a ante dignissim, vitae elementum metus facilisis.</li>
                                        <li>Arcu. Duis ut urna commodo, commodo tellus ac.</li>
                                        <li>Duis ut urna commodo, commodo tellus ac.</li>
                                        <li>Gravida nunc enim quis nibh. </li>
                                    </ul>
                                    <br/>
                                    <p><span style={{ color: 'black' }}><b>Duration: </b></span>30min / 45min / 1hr</p>
                                </div>
                                <div className='specialists_card_pills'>
                                    <div className='specialists_card_pills_pill'>Enquire now</div>
                                </div>
                            </div>
                        </div>
                        <div className='specialists_card'>
                            <div className='specialists_card_avatar' style={{ backgroundImage: `url(${Specialist6})`}}/>
                            <div style={{ marginTop: '-50px'}}>
                                <div className='specialists_card_head'>
                                Wealth Coach
                                    <div className='specialists_card_head_dots'>
                                        Nurse
                                        <div className='dot' style={{ backgroundColor: 'green'}}></div>
                                    </div>
                                </div>
                                <div className='specialists_card_tabs'>
                                    <li className='active'>consultancy</li>
                                    <li>protocols</li>
                                </div>
                                <div className='specialists_card_details'>
                                    <p>Phasellus dignissim, tellus in pellentesque mollis, mauris orci dignissim nisl, id gravida nunc enim quis nibh. Maecenas convallis eros a ante dignissim, vitae elementum metus facilisis. Cras in maximus sem. Praesent libero augue, ornare eget quam sed, volutpat suscipit arcu. Duis ut urna commodo, commodo tellus ac.</p>
                                    <span style={{ color: 'black' }}><b>Training and Experience: </b></span>
                                    <ul>
                                        <li>Cras in maximus sem. </li>
                                        <li>Maecenas convallis eros a ante dignissim, vitae elementum metus facilisis.</li>
                                        <li>Arcu. Duis ut urna commodo, commodo tellus ac.</li>
                                        <li>Duis ut urna commodo, commodo tellus ac.</li>
                                        <li>Gravida nunc enim quis nibh. </li>
                                    </ul>
                                    <br/>
                                    <p><span style={{ color: 'black' }}><b>Duration: </b></span>30min / 45min / 1hr</p>
                                </div>
                                <div className='specialists_card_pills'>
                                    <div className='specialists_card_pills_pill'>Enquire now</div>
                                </div>
                            </div>
                        </div>
                    </Masonry>
                </ResponsiveMasonry>
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