import React from 'react';
import './index.scss';

const Index = ({ cn = '', item, uppercase = false }) => {
    return (
        <div className={`service_item ${cn}`} style={{ backgroundImage: `url(${item.image})`}}>
            <p style={{ textTransform: `${uppercase ? 'uppercase' : ''}`}}>{item?.name}</p>
        </div>
    )
}

export default Index;