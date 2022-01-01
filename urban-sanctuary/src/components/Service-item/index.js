import React from 'react';
import './index.scss';

const Index = ({ cn = '', item }) => {
    return (
        <div className={`service_item ${cn}`} style={{ backgroundImage: `url(${item.image})`}}>
            <p>{item?.name}</p>
        </div>
    )
}

export default Index;