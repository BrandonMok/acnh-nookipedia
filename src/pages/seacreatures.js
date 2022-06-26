import React, {useEffect, useState, useMemo, useRef} from 'react';
import ItemGrid from '../components/itemgrid';        
import Search from '../components/search';
import NoResults from '../components/noResults';

export default function SeaCreatures() {
    let seaCreatureBackup = useRef();
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

            seaCreatureBackup.current = respArr;
        })
        .catch((error) => {
            console.log(error);
        });
    }, [apiData]);

    return (
        <>
            <Search list={seaCreaturesList} backup={seaCreatureBackup.current} updateList={updateSeaCreaturesList} />
            
            {seaCreaturesList.length > 0 ? (
                <ItemGrid itemList={seaCreaturesList} area="sea" />
            ) : (
                <NoResults />
            )}
        </>
    );
}