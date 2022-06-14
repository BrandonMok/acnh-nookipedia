import React from 'react';

export default function Card({name, price, icon_uri, shadow}) {
    return (
        <div className='card'>
            <div className='card__icon'>
                <img src={icon_uri} alt={name} />
            </div>
            <div className='card__content'>
                <p>{name['name-USen'].charAt(0).toUpperCase() + name['name-USen'].slice(1)}</p>
                <p>{price + ' bells'}</p>

                {shadow && <p>{shadow}</p>}
            </div>
        </div>
    );
}
