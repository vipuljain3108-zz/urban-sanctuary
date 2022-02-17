import React from 'react';
import './index.scss';

const Index = ({ cn = '', item, uppercase = false, action = false, children }) => {
    return (
        <div className={`service_card`}>
            <div className={`service_item_front ${cn}`} style={{ backgroundImage: `url(${item.image})`}}>
                {item?.btn && <div className='service_item_front_btn'>{item?.btn}</div>}
                <p style={{ textTransform: `${uppercase ? 'uppercase' : ''}`}}>{item?.name}<br/>
                {action && <span className='service_item_front_action'>{`>>See guides  >>See workshop`}</span>}</p>
            </div>  
            <div className={`service_item_back ${cn}`}>
                <p style={{ textTransform: `${uppercase ? 'uppercase' : ''}`}}>{children ? children : item?.name}</p>
            </div> 
        </div>
    )
}

export default Index;