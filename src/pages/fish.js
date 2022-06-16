import React, {useState, useEffect, useMemo} from 'react';
import ItemGrid from '../components/itemgrid';

export default function Fish() {
    const [fishList, updateFishList] = useState([]);
    const apiData = useMemo(async () => fetchFishData(), []);

    async function fetchFishData() {
        const res = await fetch('https://acnhapi.com/v1/fish');
        return await res.json();
    }

    useEffect(() => {
        apiData
        .then((resp) => {
            const respArr = Array.from(Object.entries(resp));
            updateFishList(respArr);
        })
        .catch((error) => {
            console.log(error);
        })
    }, [apiData]);

    return (
        <ItemGrid itemList={fishList} area="fish" />
    )
}