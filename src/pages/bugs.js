import React, { useState, useEffect, useMemo, useRef } from 'react';
import ItemGrid from '../components/itemgrid';
import Search from '../components/search';
import NoResults from '../components/noResults';

export default function Bugs() {
    let bugBackup = useRef();
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

            bugBackup.current = respArr;
        })
        .catch((error) => {
            console.log(error);
        })
    }, [apiData]);

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