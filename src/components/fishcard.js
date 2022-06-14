import React from 'react';

export default function FishCard({name, price, icon_uri, shadow}) {
    return (
        <div className='fish-card'>
            <div className='fish-card__icon'>
                <img src={icon_uri} alt={name} />
            </div>
            <div className='fish-card__content'>
                <p>{name['name-USen'].charAt(0).toUpperCase() + name['name-USen'].slice(1)}</p>
                <p>{price + ' bells'}</p>
                <p>{shadow}</p>
            </div>
        </div>
    );
}