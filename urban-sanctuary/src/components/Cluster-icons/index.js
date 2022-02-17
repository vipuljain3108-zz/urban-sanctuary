import React from "react";
import Cluster1 from "../../assets/images/Cluster-1.png";
import Cluster2 from "../../assets/images/Cluster-2.png";
import Cluster3 from "../../assets/images/Cluster-3.png";
import Cluster4 from "../../assets/images/Cluster-4.png";
import greenActive from "../../assets/images/greenActive.png";
import './index.scss';

const Index = ({ active = false }) => {
    return (
        <div className="right_icon">
            <img src={active ? greenActive : Cluster1} alt='clusterImage'/>
            <img src={Cluster4}alt='clusterImage'/>
            <img src={Cluster2} alt='clusterImage' />
            <img src={Cluster3} alt='clusterImage'/>
        </div>
    )
}

export default Index;