import React from "react";
import Cluster1 from "../../assets/images/Cluster-1.png";
import Cluster2 from "../../assets/images/Cluster-2.png";
import Cluster3 from "../../assets/images/Cluster-3.png";
import Cluster4 from "../../assets/images/Cluster-4.png";
import './index.scss';

const Index = () => {
    return (
        <div className="right_icon">
            <img src={Cluster1} alt='clusterImage'/>
            <img src={Cluster4}alt='clusterImage'/>
            <img src={Cluster2} alt='clusterImage' />
            <img src={Cluster3} alt='clusterImage'/>
        </div>
    )
}

export default Index;