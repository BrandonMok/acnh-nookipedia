import React, {useState, useEffect} from 'react';
import ItemGrid from '../components/itemgrid';

export default function Fish() {
    const [fishList, updateFishList] = useState([]);

    // ideally would want to incorporate useMemo...
    async function fetchFishData() {
        const res = await fetch('https://acnhapi.com/v1/fish');
        const data = await res.json();
        return await data;
    }

    useEffect(() => {
        fetchFishData()
        .then((resp) => {
            const respArr = Array.from(Object.entries(resp));
            updateFishList(respArr);
        })
        .catch((error) => {
            console.log(error);
        })
    }, []);

    return (
        <ItemGrid itemList={fishList} area="Fish" />
    )
}