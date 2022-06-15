import React, {useEffect, useState} from 'react';
import ItemGrid from '../components/itemgrid';        

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
        <ItemGrid itemList={seaCreaturesList} area="Sea Creatures" />
    );
}