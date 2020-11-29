import React from 'react';

import './card-service.styles.scss';

const CardService = ({ img, title, description, first_point, second_point , third_point, dotted }) => {
    return (
        <div className={dotted ? 'card-service card-mid' : 'card-service'}>
            <img src={img} className='img-service'  alt=""/>
            <p style={{fontSize: '24px', fontWeight: 'bold'}}>{title}</p>
            <p style={{marginLeft: '5px', borderLeft: '4px solid #0077B6', paddingLeft: '20px', color: '#F8F8F8', textAlign: 'justify'}}>
                {description}
            </p>
            <ul>
                <li className='card-li'>{first_point}</li>
                <li className='card-li'>{second_point}</li>
                <li className='card-li'>{third_point}</li>
            </ul>
        </div>
    )
}

export default CardService;