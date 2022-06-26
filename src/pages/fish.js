import React, {useState, useEffect, useMemo, useRef} from 'react';
import ItemGrid from '../components/itemgrid';
import Search from '../components/search';

export default function Fish() {
    let fishbackup = useRef(); // will always keep ALL fish.. 
    const [fishList, updateFishList] = useState([]);    // fishList state var will display all or one (Search cmp may change fishList)
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

            fishbackup.current = respArr; // useRef variable to keep value even through renderings
        })
        .catch((error) => {
            console.log(error);
        })
    }, [apiData]);

    return (
        <>
            <Search list={fishList} updateList={updateFishList} />

            {fishList.length > 0 ? (
                <ItemGrid itemList={fishList} area="fish" />
            ): (
                {/* show no results message... may make a "no results found" component */}
            )}
        </>
    )
}