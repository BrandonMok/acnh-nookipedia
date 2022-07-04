import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

/**
 * Card
 * Reusable component to display content into a card.
 * @param name - name of item
 * @param price - price of item
 * @param icon_uri - URI of icon to display
 * @param shadow? - shadow of item (optional - specific to fish)
 */
export default function Card({name, price, icon_uri, shadow}) {
    const itemName = useRef(name);

    useEffect(() => {
        itemName.current = capitalizeFirstChar(itemName.current);
    }, []);

    function capitalizeFirstChar(itemName) {
        let nameArr = itemName.split(" ");
        nameArr = nameArr.map((part) => {
            return part.charAt(0).toUpperCase() + part.substring(1, part.length);
        });

        return nameArr.join(" ");
    }

    return (
        <div className='card'>
            <div className='card__icon'>
                <img src={icon_uri} alt={itemName.current} />
            </div>
            <div className='card__content'>
                <p>{itemName.current}</p>
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
