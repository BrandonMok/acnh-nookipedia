import React from 'react';
import PropTypes from 'prop-types';

/**
 * Card
 * Reusable component to display content into a card.
 * @param name - name of item
 * @param price - price of item
 * @param icon_uri - URI of icon to display
 * @param shadow? - shadow of item (optional - specific to fish)
 * @returns 
 */
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

Card.propTypes = {
    name: PropTypes.string,
    price: PropTypes.number,
    icon_uri: PropTypes.string,
    shadow: PropTypes.string,
}
