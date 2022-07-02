import React, {useEffect, useState, useMemo, useRef} from 'react';
import ItemGrid from '../components/itemgrid';        
import Search from '../components/search';
import NoResults from '../components/noResults';
import Loading from '../components/loading';

export default function SeaCreatures() {
    let seaCreatureBackup = useRef();
    const [loading, updateLoading] = useState(true);
    const [seaCreaturesList, updateSeaCreaturesList] = useState([]);
    const apiData = useMemo(async () => await fetchSeaCreatures(), []);

    async function fetchSeaCreatures() {
        const response = await fetch('https://acnhapi.com/v1/sea');
        return await response.json();
    }

    useEffect(() => {
        apiData
        .then((resp) => {
            const respArr = Array.from(Object.entries(resp));
            updateSeaCreaturesList(respArr);
            updateLoading(false);

            seaCreatureBackup.current = respArr;
        })
        .catch((error) => {
            console.log(error);
        });
    }, [apiData]);

    if (loading) {
        return(<Loading />);
    }
    else {
        return (
            <>
                <Search fullList={seaCreatureBackup.current} updateList={updateSeaCreaturesList} />
                
                {seaCreaturesList.length > 0 ? 
                    <ItemGrid itemList={seaCreaturesList} area="sea" />
                :
                    <NoResults />
                }
            </>
        );
    }
}