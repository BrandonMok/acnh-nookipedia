import React from 'react';
import { Link } from 'react-router-dom';
import Card from './card';

export default function ItemGrid({itemList, area}) {
    return (
        <div className='container item-grid'>
            <div className='row'>
                <div className='col-12 pt-4 pb-4 item-grid__list'>
                    { itemList.length > 0 ? (
                        itemList.map((item) => {
                            let path = "/" + area +"/" + item[1].id;

                            return (
                                <Link to={path}>
                                    <Card 
                                        key="{item[1].id}"
                                        name={item[1].name}
                                        price={item[1].price}
                                        icon_uri={item[1].icon_uri}
                                        shadow={item[1].shadow}
                                    />
                                </Link>
                            );
                        })
                    ) : (
                        <h1>No {area} Available!</h1>
                    )}
                </div>
            </div>
        </div>
    );
}