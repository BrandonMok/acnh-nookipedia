import React, { useState, useEffect, useMemo } from 'react';
import ItemGrid from '../components/itemgrid';

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
        <ItemGrid 
            itemList={bugList} 
            area="Bugs"
        />
    );
}