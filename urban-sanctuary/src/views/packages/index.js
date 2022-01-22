import React, { useState } from 'react';
import Header from "../../components/Header/Header";
import './index.scss';
import FooterBanner from '../../components/footer-banner';
import FiveMen from '../../components/five-men';
import ClusterIcons from '../../components/cluster-icons';
import Package1 from '../../assets/images/packages/package1.png';
import Package2 from '../../assets/images/packages/package2.png';
import Package3 from '../../assets/images/packages/package3.png';
import Package4 from '../../assets/images/packages/package4.png';
import Package5 from '../../assets/images/packages/package5.png';
import Package6 from '../../assets/images/packages/package6.png';
import Package7 from '../../assets/images/packages/package7.png';
import Package8 from '../../assets/images/packages/package8.png';
import downArrow from '../../assets/images/packages/downwardsArrow.png';
import P1_1 from '../../assets/images/packages/p1-1.png';
import P1_2 from '../../assets/images/packages/p1-2.png';
import P1_3 from '../../assets/images/packages/p1-3.png';
import P1_4 from '../../assets/images/packages/p1-4.png';
import P1_5 from '../../assets/images/packages/p1-5.png';
import P1_6 from '../../assets/images/packages/p1-6.png';
import P2_1 from '../../assets/images/packages/p2-1.png';
import P2_2 from '../../assets/images/packages/p2-2.png';
import P2_3 from '../../assets/images/packages/p2-3.png';
import P2_4 from '../../assets/images/packages/p2-4.png';
import P3_1 from '../../assets/images/packages/p3-1.png';
import P3_2 from '../../assets/images/packages/p3-2.png';
import P4_1 from '../../assets/images/packages/p4-1.png';
import P4_2 from '../../assets/images/packages/p4-2.png';
import P5_1 from '../../assets/images/packages/p5-1.png';
import P5_2 from '../../assets/images/packages/p5-2.png';
import P5_3 from '../../assets/images/packages/p5-3.png';
import P5_4 from '../../assets/images/packages/p5-4.png';
import P6_1 from '../../assets/images/packages/p6-1.png';
import P6_2 from '../../assets/images/packages/p6-2.png';
import P7_1 from '../../assets/images/packages/p7-1.png';
import P7_2 from '../../assets/images/packages/p7-2.png';
import P7_3 from '../../assets/images/packages/p7-3.png';
import P8_1 from '../../assets/images/packages/p8-1.png';
import P8_2 from '../../assets/images/packages/p8-2.png';
import P8_3 from '../../assets/images/packages/p8-3.png';
import P8_4 from '../../assets/images/packages/p8-4.png';

const Index = () => { 
    const packages = [
        {
            id: '1',
            name: 'Daytime PACKAGES',
            desc: 'Proin ex ipsum, facilisis id tincidunt sed, vulputate in lacus. Donec pharetra faucibus leo, vitae vestibulum leo scelerisque eu. Nam enim dolor, porta at ex ut, eleifend tristique metus. Integer sit amet auctor ligula, vel dictum orci. Nam feugiat interdum nisl. Ut id velit ac ante maximus gravida.',
            bannerImg: Package1,
            packages: [
                {   
                    title: 'Morning glory - A',
                    desc: 'hot drink or smoothie/ exercise class, hot breakfast',
                    price: '$35.00',
                    image: P1_1,
                },
                {   
                    title: 'Morning glory - B',
                    desc: 'hot drink or smoothie/ exercise class, 20 minute massage, hot breakfast',
                    price: '$60.00',
                    image: P1_2,
                },
                {   
                    title: 'lunch package - A',
                    desc: 'drink at NHB, 30 minute massage, set lunch',
                    price: '$60.00',
                    image: P1_3,
                },
                {   
                    title: 'lunch package - B',
                    desc: 'Drink at NHB, exercise class, 30 minute massage, set lunch',
                    price: '$70.00',
                    image: P1_4,
                },
                {   
                    title: 'Afternoon delight',
                    desc: 'drink at NHB, 30 minute massage, scalp massage, facial, herbal tea and snacks',
                    price: '$140.00',
                    image: P1_5,
                },
                {   
                    title: 'Evening chill',
                    desc: 'drink at NHB, yoga or fusion class, 30 minute massage and healing reading',
                    price: '$80.00',
                    image: P1_6,
                },
            ]
        },
        {
            id: '2',
            name: 'spa & saloon packages',
            desc: 'Proin ex ipsum, facilisis id tincidunt sed, vulputate in lacus. Donec pharetra faucibus leo, vitae vestibulum leo scelerisque eu. Nam enim dolor, porta at ex ut, eleifend tristique metus. Integer sit amet auctor ligula, vel dictum orci. Nam feugiat interdum nisl. Ut id velit ac ante maximus gravida.',
            bannerImg: Package2,
            packages: [
                {   
                    title: ' Deluxe face and hair',
                    desc: 'drink at NHB, 30 minute facial, neck and hands massage, exfoliation and youth serum treatment, 30 minute scalp massage and rich hair oil repair treatment, herbal tea and snacks',
                    price: '$140.00',
                    image: P2_1,
                },
                {   
                    title: 'Deluxe face, hair and body',
                    desc: 'drink at NHB, 30 minute facial, neck and hands massage, exfoliation and youth serum treatment, 30 minute scalp massage and rich hair oil repair treatment, 45 minute body massage, herbal tea, treats and snacks',
                    price: '$220.00',
                    image: P2_2,
                },
                {   
                    title: ' Deluxe face and hair',
                    desc: 'drink at NHB, 30 minute facial, neck and hands massage, exfoliation and youth serum treatment, 30 minute scalp massage and rich hair oil repair treatment, herbal tea and snacks',
                    price: '$140.00',
                    image: P2_3,
                },
                {   
                    title: 'Deluxe face, hair and body',
                    desc: 'drink at NHB, 30 minute facial, neck and hands massage, exfoliation and youth serum treatment, 30 minute scalp massage and rich hair oil repair treatment, 45 minute body massage, herbal tea, treats and snacks',
                    price: '$220.00',
                    image: P2_4,
                },
            ]
        },
        {
            id: '3',
            name: 'Couples packages',
            desc: 'Proin ex ipsum, facilisis id tincidunt sed, vulputate in lacus. Donec pharetra faucibus leo, vitae vestibulum leo scelerisque eu. Nam enim dolor, porta at ex ut, eleifend tristique metus. Integer sit amet auctor ligula, vel dictum orci. Nam feugiat interdum nisl. Ut id velit ac ante maximus gravida. ',
            bannerImg: Package3,
            packages: [
                {   
                    title: ' Deluxe face and hair',
                    desc: ' 2x drinks at NHB, 2x 30 minute massage, healing reading, 2 x set lunch menu',
                    price: '$140.00',
                    image: P3_1,
                },
                {   
                    title: 'Deluxe face, hair and body',
                    desc: ' 2x drinks at NHB, 2x 30 minute massage, healing reading, 2 x set lunch menu',
                    price: '$150.00',
                    image: P3_2,
                },
            ]
        },
        {
            id: '4',
            name: 'health packages',
            desc: 'Proin ex ipsum, facilisis id tincidunt sed, vulputate in lacus. Donec pharetra faucibus leo, vitae vestibulum leo scelerisque eu. Nam enim dolor, porta at ex ut, eleifend tristique metus. Integer sit amet auctor ligula, vel dictum orci. Nam feugiat interdum nisl. Ut id velit ac ante maximus gravida. ',
            bannerImg: Package4,
            packages: [
                {   
                    title: 'Health Directive',
                    desc: `drink at NHB, Hair test 3D scan, metawheel assessment and recommendation schedule, Fusion exercise class and assessment, smoothie or health bowl, 30 minute massage, consultant and review.`,
                    price: '$295.00',
                    originalPrice: '$400.00',
                    image: P4_1,
                },
                {   
                    title: 'Fusion Exercise Progressive',
                    desc: `drink at NHB, 30 minute facial, neck and hands massage, exfoliation and youth serum treatment, 30 minute scalp massage and rich hair oil repair treatment, 45 minute body massage, herbal tea, treats and snacks`,
                    price: '$220.00',
                    image: P4_2,
                },
            ]
        },
        {
            id: '5',
            name: 'Fusion Exercise packages',
            desc: 'Proin ex ipsum, facilisis id tincidunt sed, vulputate in lacus. Donec pharetra faucibus leo, vitae vestibulum leo scelerisque eu. Nam enim dolor, porta at ex ut, eleifend tristique metus. Integer sit amet auctor ligula, vel dictum orci. Nam feugiat interdum nisl. Ut id velit ac ante maximus gravida. ',
            bannerImg: Package5,
            packages: [
                {   
                    title: 'Air',
                    desc: 'healing, restoration, empowerment every Monday night 5:30 - 7:00 over 4 weeks',
                    price: '$140.00',
                    image: P5_1,
                },
                {   
                    title: 'Water',
                    desc: 'weight shifting, balance, strength, every Tuesday night 5:30 - 7:00 over 4 weeks',
                    price: '$220.00',
                    image: P5_2,
                },
                {   
                    title: 'Crystal',
                    desc: 'gratitude, vitality, longevity every Wednesday night 5:30 - 7:00 over 4 weeks',
                    price: '$140.00',
                    image: P5_3,
                },
                {   
                    title: 'Diamond',
                    desc: 'capacity, service, dynamic being every Thursday night 5:30 - 7:00 over 4 weeks',
                    price: '$220.00',
                    image: P5_4,
                },
            ]
        },
        {
            id: '6',
            name: 'senior citizens packages',
            desc: 'Proin ex ipsum, facilisis id tincidunt sed, vulputate in lacus. Donec pharetra faucibus leo, vitae vestibulum leo scelerisque eu. Nam enim dolor, porta at ex ut, eleifend tristique metus. Integer sit amet auctor ligula, vel dictum orci. Nam feugiat interdum nisl. Ut id velit ac ante maximus gravida. ',
            bannerImg: Package6,
            packages: [
                {   
                    title: 'Package-A',
                    desc: `drink at NHB, 30 minute massage, healing reading, set lunch`,
                    price: '$140.00',
                    image: P6_1,
                },
                {   
                    title: 'Package-B',
                    desc: `drink at NHB, exercise class, 30 minute massage, healing reading, mineral pool access, set lunch`,
                    price: '$220.00',
                    image: P6_2,
                },
            ]
        },
        {
            id: '7',
            name: 'corporate & family PACKAGES',
            desc: 'Proin ex ipsum, facilisis id tincidunt sed, vulputate in lacus. Donec pharetra faucibus leo, vitae vestibulum leo scelerisque eu. Nam enim dolor, porta at ex ut, eleifend tristique metus. Integer sit amet auctor ligula, vel dictum orci. Nam feugiat interdum nisl. Ut id velit ac ante maximus gravida. ',
            bannerImg: Package7,
            packages: [
                {   
                    title: 'Early bird enhance package',
                    desc: 'Hot drink or smoothie/ morning exercise class, 10 minute chair massage, hot breakfast, team visualisation empowerment reading, go to work or school with a pre-made set lunch from our LFF kitchen',
                    price: '$80.00',
                    image: P7_1,
                },
                {   
                    title: ' Day workshop package',
                    desc: 'Drinks at NHB, team workshop, 10 minute chair massage, team visualisation empowerment or bonding reading. Set lunch included.',
                    price: '$160.00',
                    image: P7_2,
                },
                {   
                    title: 'Full day advance package',
                    desc: 'Hot drink or smoothie/ morning exercise class, 10 minute massage, hot breakfast, team workshop, team visualisation empowerment reading, afternoon drinks at NHB, set lunch menu provided',
                    price: '$190.00',
                    image: P7_3,
                },
            ]
        },
        {
            id: '8',
            name: 'metawheel course packages',
            desc: 'Proin ex ipsum, facilisis id tincidunt sed, vulputate in lacus. Donec pharetra faucibus leo, vitae vestibulum leo scelerisque eu. Nam enim dolor, porta at ex ut, eleifend tristique metus. Integer sit amet auctor ligula, vel dictum orci. Nam feugiat interdum nisl. Ut id velit ac ante maximus gravida. ',
            bannerImg: Package8,
            packages: [
                {   
                    title: 'Refreshed Being Package',
                    desc: 'Fusce at nisi eget dolor rhoncus facilisis. Mauris ante nisl, consectetur et luctus et, porta ut dolor. Curabitur ultricies ultrices nulla. Morbi blandit nec est ',
                    price: '$1250.00',
                    image: P8_1,
                },
                {   
                    title: 'New Being Package',
                    desc: '2 week course, daily Life Force Food lunch voucher and a Natural Highs Bar cocktail, plus 6 x Fusion Exercise passes',
                    price: '$2500.00',
                    image: P8_2,
                },
                {   
                    title: 'Advanced Being Package',
                    desc: ' 3 week course, daily Life Force Food lunch voucher and a Natural Highs Bar cocktail, plus 9 x Fusion Exercise passes',
                    price: '$4000.00',
                    image: P8_3,
                },
                {   
                    title: 'Magnificent Being Package',
                    desc: '4 week course, daily Life Force Food lunch voucher and a Natural Highs Bar cocktail, plus 12 x Fusion Exercise passes',
                    price: '$5,500.00',
                    image: P8_4,
                },
            ]
        },
    ]
    const [openPackages, setOpenPackages] = useState('');

    return (
        <div className='packages'>
            <Header />
            <div className='packages_banner'>
                <div className='packages_banner_content'>
                    <div className='packages_banner_content_border'></div>
                    {`PACKAGES`}
                    <p>Phasellus risus turpis, pretium sit amet magna non, molestie ultricies enim. Nullam pulvinar felis at metus malesuada, nec convallis lacus commodo. Duis blandit neque purus, nec auctor mi sollicitudin nec. Duis urna ipsum, tincidunt at euismod ut, placerat eget urna. Curabitur nec faucibus leo, et laoreet nibh. Pellentesque euismod quam at eros efficitur, vitae venenatis sem consectetur. Donec ut risus ultricies, dictum neque at, bibendum purus. In hac habitasse platea dictumst.</p>
                    <ClusterIcons />
                    <div className='packages_banner_content_cards'>
                        <div className='package_card'>
                            <div className='package_card_img' style={{ backgroundImage: `url(${Package1})`}}/>
                            <div className='package_card_title'>Daytime</div>
                        </div>
                        <div className='package_card'>
                            <div className='package_card_img' style={{ backgroundImage: `url(${Package2})`}}/>
                            <div className='package_card_title'>{`Spa & Saloon`}</div>
                        </div>
                        <div className='package_card'>
                            <div className='package_card_img' style={{ backgroundImage: `url(${Package3})`}}/>
                            <div className='package_card_title'>Couples</div>
                        </div>
                        <div className='package_card'>
                            <div className='package_card_img' style={{ backgroundImage: `url(${Package4})`}}/>
                            <div className='package_card_title'>Health</div>
                        </div>
                        <div className='package_card'>
                            <div className='package_card_img' style={{ backgroundImage: `url(${Package5})`}}/>
                            <div className='package_card_title'>Fusion Exercise</div>
                        </div>
                        <div className='package_card'>
                            <div className='package_card_img' style={{ backgroundImage: `url(${Package6})`}}/>
                            <div className='package_card_title'>Senior Citizens</div>
                        </div>
                        <div className='package_card'>
                            <div className='package_card_img' style={{ backgroundImage: `url(${Package7})`}}/>
                            <div className='package_card_title'>{`Corporate & Family`}</div>
                        </div>
                        <div className='package_card'>
                            <div className='package_card_img' style={{ backgroundImage: `url(${Package8})`}}/>
                            <div className='package_card_title'>Metawheel Course</div>
                        </div>
                    </div>
                </div>
            </div>
            <FiveMen />
            {packages.map((item, index) => {
                return (
                    <div className='packages_section'>
                        <div className='packages_section_details'>
                            <div className='packages_section_details_desc' style={{ order:`${ index % 2 === 0 ? '' : '2'}`}}>
                                <div className='packages_section_details_desc_bg'>{item.id}</div>
                                <div className='packages_section_details_desc_f'>
                                    <div className='packages_section_details_desc_f_title'>{item.name}</div>
                                    <div className='packages_section_details_desc_f_details'>{item.desc}</div>
                                    <div className='packages_section_details_desc_f_more' 
                                        onClick={() => setOpenPackages(openPackages === item.name ? '' : item.name)}
                                    >
                                        <span className={`${openPackages === item.name ? 'active' : ''}`}>
                                            <img src={downArrow} alt='open' />
                                        </span>
                                        See packages
                                    </div>
                                </div>
                            </div>
                            <div className='packages_section_details_img' style={{ backgroundImage: `url(${item.bannerImg})`}}/>
                        </div>
                        {openPackages === item.name && (<div className='packages_section_cards'>
                            {item.packages.map(p => {
                                return (
                                    <div className='packages_section_cards_card'>
                                        <div className='packages_section_cards_card_img' style={{ backgroundImage: `url(${p.image})`}}/>
                                        <div className='packages_section_cards_card_title'>{p.title}</div>
                                        <div className='packages_section_cards_card_desc'>{p.desc}</div>
                                        <div className='packages_section_cards_card_order'>
                                            <div className='packages_section_cards_card_order_price'>
                                                {p.price}
                                                <span className='discount'>&nbsp;{p?.originalPrice}</span>
                                            </div>
                                            <div className='packages_section_cards_card_order_btn'>Add to cart</div>
                                        </div>
                                    </div>                                
                                )}
                            )}    
                        </div>)}
                    </div>
                )
            })}
            <br /><br /><br /><br />
            <FooterBanner />
        </div>
    )
}

export default Index;