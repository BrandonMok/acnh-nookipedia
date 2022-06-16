import React, {useEffect, useState, useMemo} from 'react';
import ItemGrid from '../components/itemgrid';        

export default function SeaCreatures() {
    const [seaCreaturesList, updateSeaCreaturesList] = useState([]);
    const apiData = useMemo(async () => fetchSeaCreatures(), []);

    async function fetchSeaCreatures() {
        const response = await fetch('https://acnhapi.com/v1/sea');
        return await response.json();
    }

    useEffect(() => {
        apiData
        .then((resp) => {
            const respArr = Array.from(Object.entries(resp));
            updateSeaCreaturesList(respArr);
        })
        .catch((error) => {
            console.log(error);
        });
    }, [apiData]);

    return (
        <ItemGrid itemList={seaCreaturesList} area="sea" />
    );
}