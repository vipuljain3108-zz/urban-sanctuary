import React, {useState} from 'react';
import Header from "../../components/Header/Header";
import './index.scss';
import AboutUsImage1 from '../../assets/images/aboutUs/1.png';
import AboutUsImage2 from '../../assets/images/aboutUs/2.png';
import AboutUsImage3 from '../../assets/images/aboutUs/3.png';
import AboutUsImage4 from '../../assets/images/aboutUs/4.png';
import AboutUsImage5 from '../../assets/images/aboutUs/5.png';
import AboutUsImage6 from '../../assets/images/aboutUs/6.png';
import AboutUsImage7 from '../../assets/images/aboutUs/7.png';
import AboutUsImage8 from '../../assets/images/aboutUs/8.png';
import AboutUsImage9 from '../../assets/images/aboutUs/9.png';
import AboutUsImage10 from '../../assets/images/aboutUs/10.png';
import AboutUsImage11 from '../../assets/images/aboutUs/11.png';
import AboutUsImage12 from '../../assets/images/aboutUs/12.png';
import AboutUsImage13 from '../../assets/images/aboutUs/13.png';
import Banner1 from '../../assets/images/aboutUs/single.png';
import Banner2 from '../../assets/images/aboutUs/two1.png';
import Banner3 from '../../assets/images/aboutUs/two2.png';
import Earth from '../../assets/images/aboutUs/earth.png';
import Accordion from '../../components/Accordion';
import FooterBanner from '../../components/footer-banner';
import ClusterIcons from '../../components/cluster-icons';

const Index = () => {
    const panels = [
        {
            label: '01 Vision Statement',
            content: 'A Successful Planet, where the attributes of love, forgiveness, compassion, tolerance and integrity form the basis of every human interaction and endeavour.',
            image: AboutUsImage1,
        },
        {
            label: '02 Mission Statement',
            content: 'To be a catalyst to Elevate Global Consciousness.',
            image: AboutUsImage2,
        },	
        {
            label: '03 Compass',
            content: 'IG = EGR^ A higher consciousness formula to guide all that we create.',
            image: AboutUsImage3,
        },
        {
            label: '04 Visions',
            content: 'We promote 11 significant and inspirational Visions based around the social constructs of this world for people to contemplate, evaluate, contribute to, and then participate in bringing to life through the Vision\'s Initiatives.',
            image: AboutUsImage4,
        },
        {
            label: '05 Charter',
            content: 'A Master Guide containing 11 wisdom statements which summarise each of the VFH Visions, making it easy for people to understand what we have identified as fundamental to bettering people and planet, and hence what we stand for.',
            image: AboutUsImage5,
        },
        {
            label: '06 Intent',
            content: 'To demonstrate through the day-day operations of the Sanctuaries; a tangible expression of the Visions, which example through both love and science an advanced societal blue print of collective creativity and Global Family unity beginning the metamorphosis of our world.',
            image: AboutUsImage6,
        },
        {
            label: '07 Methodology',
            content: 'We believe true \'metamorphic\' events come first from within - through people, not government or corporation. By first striving to develop the inherent magnificence within each individual, inexorably the "imaginal cells" of a 2nd Genome of Humanity will come into existence.',
            image: AboutUsImage7,
        },
        {
            label: '08 Execution',
            content: 'The VFH Sanctuaries, their Guides, Courses and Initiatives which brings forth exceptional individuals who form creative groups of "imaginal cells" around each Vision and ignite each Initiative to create new beginnings.',
            image: AboutUsImage8,
        },
        {
            label: '09 Architecture ',
            content: 'Our specialised Meta Wheel interlocks the Charter, Visions and Initiatives with the Sanctuaries Guides, Courses and Services, all of which is accessed and interacts with the 2nd Genome Higher Consciousness Network.',
            image: AboutUsImage9,
        },
        {
            label: '10 Legitimacy',
            content: 'The establishment of a consensus on humanities Universal Truths which in turn derive our 2nd Genome Organising Principles and Social Agreements.',
            image: AboutUsImage10,
        },
        {
            label: '11 Expansion Strategy',
            content: 'The \'equality based\' Plato Franchise System for the ethical expansion of 300 Sanctuaries around the world, which are supported by the 2nd Genome Higher Consciousness Network',
            image: AboutUsImage11,
        },
        {
            label: '12 Highest Prupose',
            content: 'To globally connect people via our 2nd Genome Higher Consciousness Network and bring about the principle Key Shift necessary for A Successful Planet to evolve, that is; the transcendence from global competition and fear dG = eGr to co-creation, peace and oneness IG = EGR^',
            image: AboutUsImage12,
        },
        {
            label: '13 Ultimate Goal',
            content: 'To effect a powerful global shift in thinking which brings about a tipping point popularising the concept of Elevating Global Consciousness, inspiring new Social Agreements, which are voted upon through True Democracy and implemented within society.',
            image: AboutUsImage13,
        },
        {
            label: '14 Long Term Outcome',
            content: 'Inter-generational Global Family Wealth. A ubiquitous and sustaining wealth of physical, mental, emotional and spiritually abundance, which caters to all people now living and yet to be born in future generations: for our sons and daughters, and their sons and daughters to inherit. This is a new age Initiated with new leadership to shape the world- which will come from within you, from within each one of us! And entails:',
            image: null,
            component: () => {
                return (
                    <div>
						<li style={{ color: '#56B703', listStyleType: 'circle' }}>A new respect for natural health and wholeness, of people and planet,</li>
						<li style={{ color: '#0592FF', listStyleType: 'circle' }}>A new universal prosperity, redefining current day capitalism and economics,</li>
						<li style={{ color: '#FA44B3', listStyleType: 'circle' }}>A new sense of authentic human advancement - forming ubiquitous, inspirational relationships,</li>
						<li style={{ color: '#FED130', listStyleType: 'circle' }}>A new perception of happiness that comes from simple, raw, intrinsic joy.</li>
					</div>
                )
            }
        },
    ];

    const [activeTab, setActiveTab] = useState('Diversity Protection');

    const renderTabs = () => {
        let tabs = ['Diversity Protection', 'Green Ingredient', 'Positive Functionality', 'ECO Process', 'Trade Intergrity'];

        return (
            <div className="table_body_head">
                {tabs.map(item => {
                    return <div className={`table_body_head_item ${activeTab === item ? 'active' : ''}`} onClick={() => setActiveTab(item)}>{item}</div>
                })}
            </div>
        )
    }
    return (
        <div className='about'>
            <Header />
            <div className='head_banner'>
                <>
                    <div className='title'>ABOUT US</div>
                    <div className='desc'>The VFH Sanctuaries are the endeavours of the Vision for Humanity Charitable Trust. Find out more about us here by reading through our Structural Flow</div>
                    <ClusterIcons />
                </>
            </div>
            <div className='accordion'>
                <Accordion panels={panels} />
            </div>
            <div className='banners'>
                <div className='banners_one' style={{ backgroundImage: `url(${Banner1})`}}>
                    <div className='title'>The VFH Sanctuary Concept</div>
                    <p>The VFH Sanctuary Concept <br/>Elevate Global Consciousness through the metamorphic transformation of the human being. Discover your Magnificence and by default, as a result of your greater physical, mental, emotional and spiritual capacity transform the world in which you live. Allow us the honour to help you become the very best version of yourself – by investing in you we all invest in Health, Prosperity, Inspiration and Joy.</p>
                </div>
                <div className='displayFlex'>
                    <div className='banners_two' style={{ backgroundImage: `url(${Banner2})`}}>
                        <div className='title'>The Plato Franchise System</div>
                        <div className='banners_two_button'>READ MORE</div>
                    </div>
                    <div className='banners_two' style={{ backgroundImage: `url(${Banner3})`}}>
                        <div className='title'>Higher Conscious Energy</div>
                        <div className='banners_two_button'>READ MORE</div>
                    </div>
                </div>
            </div>
            <div className='table'>
                <div className='displayFlex'>
                    <img src={Earth} alt='earth' />
                    <div className='table_head'>
                        <div className='table_head_title'>
                            BIOSPHERICALLY CORRECT 
                        </div>
                        <div className='table_head_desc'>
                            The Sanctuary Project is being designed via Biospherically Correct principles, an initiative developed by Vision for Humanity as a result of the charities Vision for Business. All built form, products and services are being created in alignment with the five key BC criteria arenas, while Biospherically Correct Service Management Chain (BCSMC) are being established with all suppliers. BC is the design ethos used to establish the highest environmental and social standards for sister charity Vision Products in 2011
                        </div>
                    </div>
                </div>
                <div className='table_body'>
                    {renderTabs()}
                    <div className='table_body_desc'>
                    <br/><br/><b>Protecting our key pillars:</b> Biospheric services / Biodiversity / Cultural diversity

                    <br/><br/><b>Orientation: Security</b> - how ecologically and socially conscious is the sourcing of the raw materials?

                    <br/><br/><b>Context statement:</b> In the broadest thinking terms, life on our planet relies on the interlocking of three key pillars: healthy Biospheric services, the biodiversity of life and the vital cultural diversity of humans.

                    <br/><br/><b>Guiding Question:</b> To what extent does the sourcing (cultivation and extraction) of the raw materials necessary to produce the Service (built form, a product or service or facility) enhance the diversity of life, that is, aids the greater biospheric services of the planet, the localised eco systems (species and habitat protection) and preserves the associated knowledge, customs and prosperity of the indigenous cultures of the territory?     Read more
                    </div>
                </div>
            </div>
            <FooterBanner />
        </div>
    )
}

export default Index;