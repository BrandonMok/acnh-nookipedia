import React, { useState, useEffect, useMemo, useRef } from 'react';
import ItemGrid from '../../components/itemgrid';
import Search from '../../components/search';
import NoResults from '../../components/noResults';
import Loading from '../../components/loading';

export default function Bugs() {
    let bugBackup = useRef();
    const [loading, updateLoading] = useState(true);
    const [bugList, updateBugList] = useState([]);
    const apiData = useMemo(async () => await fetchBugData(), []);

    async function fetchBugData() {
        const response = await fetch('https://acnhapi.com/v1/bugs')
        return await response.json();
    }

    useEffect(() => {
        apiData
        .then((resp) => {
            const respArr = Array.from(Object.entries(resp));
            updateBugList(respArr);
            updateLoading(false);

            bugBackup.current = respArr;
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
                <Search fullList={bugBackup.current} updateList={updateBugList} />
    
                {bugList.length > 0 ?
                    <ItemGrid itemList={bugList} area="bugs" />
                :
                    <NoResults />
                }
            </>
        );
    }
}