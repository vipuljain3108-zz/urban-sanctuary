import React from 'react';
import './index.scss';
import Phones from '../../assets/images/tech-hair-testing/phones.png'
import PhoneBg from '../../assets/images/tech-hair-testing/phoneBg.png'

const Index = () => {
    return (
        <div className='content' style={{ backgroundImage: `url(${PhoneBg})` }}>
            <div className='content_container'>
                <div className='content_container_link'>See our Directive Health Package</div>
                <div className='content_container_floatingImg'>
                    <img src={Phones} alt='mobile' />
                </div>
                <p>
                    <div className='head'>
                        <div className='head_title'>
                            Optimise Reports
                        </div>
                        With our Health Creator and Weight Shifter Apps
                    </div>
                    Integrate all health testing into one place. Gain a broad perspective of your results so that you can then identify and prioritise the most pro-active actions, and Sanctuary health services, to advance your well-being. Plan for optimal nutritional intake, rapid and precise weight shifting, physiological efficiencies, and better health psychology practises through recording and monitoring health data.
                    <br /><br />The Sanctuary Apps also assist you to project potential outcomes, habituate positive habits, and further evaluate toxin exposure, fitness and flexibility, your health approach, and your holistic health as a whole. Tie everything together to optimise your wellbeing via the most advanced strategies, systems and tech available.

                    <br /><br />-Use the <span className='highlight'>Health Creator</span> app to create greater health span by programing and charting intermittent fasting, Sanctuary meals and sleep.

                    <br /><br />-Use our <span className='highlight'>Weight Shifter</span> App to take control of your body composition, sculpting and weight management by combining optimum nutritional analysis with calorie associated exercise plans.
                </p>
            </div>
        </div>
    )
}

export default Index;