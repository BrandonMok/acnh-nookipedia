import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Card from './card';

/**
 * ItemGrid
 * Displays a list of items into a grid.
 * @param itemList - list of items to display
 * @param area - particular area that list is related to (e.g. Fish, bugs, etc.)
 * @returns 
 */
export default function ItemGrid({itemList, area}) {
    return (
        <div className='container item-flexbox'>
            { itemList.length > 0 ? (
                itemList.map((item) => {
                    let path = "/" + area +"/" + item[1].id;

                    return (
                        <Link to={path}>
                            <Card 
                                key={ item[1].id }
                                name={ item[1].name['name-USen'] }
                                price={ item[1].price }
                                icon_uri={ item[1].icon_uri }
                                shadow={ item[1].shadow }
                            />
                        </Link>
                    );
                })
            ) : (
                <h1>No Results Available!</h1>
            )}
        </div>
    );
}

ItemGrid.propTypes = {
    itemList: PropTypes.array,
    area: PropTypes.string
}