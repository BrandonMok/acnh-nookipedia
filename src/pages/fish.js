import React, {useState, useEffect} from 'react';

export default function Fish() {
    // plan: get all fish
    // search bar would limit the results
    // if search bar is going to be a separate component, could pass component the fish data and have it return the one user is looking for (potentially)

    // fields going to use
    // id, name.name-USen, icon_uri, price, price_cj, museum-phrase

    const [fishList, updateFishList] = useState([]);

    // const dataCall = useMemo(async () => {
    //     // NOTE: May want to map the resulting array into new objects with only the keys I want
    //     const res = await fetch('https://acnhapi.com/v1/fish/1');
    //     const data = await res.json();
    //     updateFishList(data);
    // }, []);
    
    // data in here is right
    async function fetchFishData() {
        const res = await fetch('https://acnhapi.com/v1/fish/1');
        const data = await res.json();
        return data;
    }

    useEffect(() => {
        const respData = fetchFishData().then((resp) => console.log(resp));

        if (respData.length > 0) {
            const tempArr = [];
            tempArr.push(respData);
            updateFishList(tempArr);
        }
    }, [fishList]);

    return (
        <div className='container fish'>
            <div className='row'>
                <div className='col-12'>

                </div>
                <div className='col-12 fish__list'>
                    {fishList.length > 0 && (
                        fishList.map((fish) => {
                            <h1>{fish.id}</h1>
                        })
                    )}
                </div>
            </div>
        </div>
    )
}