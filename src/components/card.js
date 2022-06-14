import React from 'react';

export default function Card({id, name, price, icon_uri, shadow}) {
    return (
        <div className='card'>
            <div className='card__icon'>
                <img src={icon_uri} alt={name} />
            </div>
            <div className='card__content'>
                <h3>Name</h3>
            </div>
        </div>
    );
}