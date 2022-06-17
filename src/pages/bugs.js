import React, { useState, useEffect, useMemo } from 'react';
import ItemGrid from '../components/itemgrid';
import Search from '../components/search';

export default function Bugs() {
    const [bugList, updateBugList] = useState([]);
    const apiData = useMemo(async () => fetchBugData(), []);

    async function fetchBugData() {
        const response = await fetch('https://acnhapi.com/v1/bugs')
        return await response.json();
    }

    useEffect(() => {
        apiData
        .then((resp) => {
            const respArr = Array.from(Object.entries(resp));
            updateBugList(respArr);
        })
        .catch((error) => {
            console.log(error);
        })
    }, [apiData]);

    return (
        <>
            <Search list={bugList} updateList={updateBugList} />
            <ItemGrid itemList={bugList} area="bugs"/>
        </>
    );
}