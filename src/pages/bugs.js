import React, { useState, useEffect } from 'react';
import ItemGrid from '../components/itemgrid';

export default function Bugs() {
    const [bugList, updateBugList] = useState([]);

    async function fetchBugData() {
        const response = await fetch('https://acnhapi.com/v1/bugs')
        return await response.json();
    }

    useEffect(() => {
        fetchBugData()
        .then((resp) => {
            const respArr = Array.from(Object.entries(resp));
            updateBugList(respArr);
        })
        .catch((error) => {
            console.log(error);
        })
    }, []);

    return (
        <ItemGrid 
            itemList={bugList} 
            area="Bugs"
        />
    );
}