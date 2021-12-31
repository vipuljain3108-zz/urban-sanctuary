import React from 'react';
import './index.scss';
import GreenBody from '../../assets/images/holistic-system/green.png'
import BlueBody from '../../assets/images/holistic-system/blue.png'
import MiddleBody from '../../assets/images/holistic-system/middle.png'
import PinkBody from '../../assets/images/holistic-system/pink.png'
import YellowBody from '../../assets/images/holistic-system/yellow.png'
import Cluster1 from "../../assets/images/Cluster-1.png";
import Cluster2 from "../../assets/images/Cluster-2.png";
import Cluster3 from "../../assets/images/Cluster-3.png";
import Cluster4 from "../../assets/images/Cluster-4.png";

const Index = () => {
    return (
        <div className='five-men'>
            <div className='five-men_content'>
                <img src={GreenBody} alt='menImg' />
                <img src={BlueBody} alt='menImg' />
                <img src={MiddleBody} alt='menImg' style={{ height: '55px', width: '55px'}}/>
                <img src={PinkBody} alt='menImg' />
                <img src={YellowBody} alt='menImg' />
            </div>
        </div>
    )
}

export default Index;