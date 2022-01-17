import React from 'react';
import './index.scss';

const Index = ({ cn = '', item, uppercase = false }) => {
    return (
        <div className={`service_card`}>
            <div className={`service_item_front ${cn}`} style={{ backgroundImage: `url(${item.image})`}}>
                <p style={{ textTransform: `${uppercase ? 'uppercase' : ''}`}}>{item?.name}</p>
            </div>  
            <div className={`service_item_back ${cn}`}>
                <p style={{ textTransform: `${uppercase ? 'uppercase' : ''}`}}>{item?.name}</p>
            </div> 
        </div>
    )
}

export default Index;