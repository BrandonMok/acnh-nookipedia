import React, {useEffect, useState} from 'react';
import Card from '../components/card';

export default function SeaCreatures() {
    const [seaCreaturesList, updateSeaCreaturesList] = useState([]);

    async function fetchSeaCreatures() {
        const response = await fetch('https://acnhapi.com/v1/sea');
        return await response.json();
    }

    useEffect(() => {
        fetchSeaCreatures()
        .then((resp) => {
            const respArr = Array.from(Object.entries(resp));
            updateSeaCreaturesList(respArr);
        })
        .catch((error) => {
            console.log(error);
        });
    }, []);

    return (
        // note: may want to make the markup below as a general grid list component...
        // since all pages will list the elements out?
        <div className='container sea'>
            <div className='row'>
                <div className='col-12 pt-4 pb-4 sea__list'>
                    { seaCreaturesList.length > 0 ? (
                        seaCreaturesList.map((sea) => {
                            return (
                                <Card 
                                    key="{sea[1].id}"
                                    name={sea[1].name}
                                    price={sea[1].price}
                                    icon_uri={sea[1].icon_uri}
                                    shadow={sea[1].shadow}
                                />
                            );
                        })
                    ) : (
                        <h1>No Sea Creatures Available!</h1>
                    )}
                </div>
            </div>
        </div>
    );
}