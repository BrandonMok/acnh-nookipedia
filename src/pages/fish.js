import React, {useState, useEffect, useMemo, useRef, useCallback } from 'react';
import ItemGrid from '../components/itemgrid';
import Search from '../components/search';
import NoResults from '../components/noResults';
import Loading from '../components/loading';

export default function Fish() {
    let fishbackup = useRef();
    const [fishList, updateFishList] = useState([]);    // fishList state var will display all or one (Search cmp may change fishList)
    const [loading, updateLoading] = useState(true);

    const fetchFishData = useCallback(async() => {
        const res = await fetch('https://acnhapi.com/v1/fish');
        return await res.json();
    }, []);

    const apiData = useMemo(async() => await fetchFishData(), [fetchFishData]);


    useEffect(() => {
        apiData
        .then((resp) => {
            const respArr = Array.from(Object.entries(resp));
            updateFishList(respArr);
            updateLoading(false);

            fishbackup.current = respArr; // useRef variable to persist value.
        })
        .catch((error) => {
            console.log(error);
        })
    }, [apiData]);

    
    if (loading) {
        return (<Loading />);
    }
    else {
        return (
            <>
                <Search fullList={fishbackup.current} updateList={updateFishList} />
    
                {fishList.length > 0 ? 
                    <ItemGrid itemList={fishList} area="fish" />
                : 
                    <NoResults />
                } 
            </>
        )
    }

}