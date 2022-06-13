import React, {useState, useEffect} from 'react';

export default function Fish() {
    // id, name.name-USen, icon_uri, price, price_cj, museum-phrase
    const [fishList, updateFishList] = useState([]);

    async function fetchFishData() {
        const res = await fetch('https://acnhapi.com/v1/fish/1');
        const data = await res.json();
        return await data;
    }

    useEffect(() => {
        fetchFishData()
        .then((resp) => {
            const updatedArr = [...fishList, resp];
            updateFishList(updatedArr);
        })
        .catch((error) => {
            console.log(error);
        })
    }, []);

    return (
        <div className='container fish'>
            <div className='row'>
                <div className='col-12'>
                    fish page
                </div>
                <div className='col-12 fish__list'>
                    { fishList.length > 0 &&
                        fishList.map(({ id, price }) => {
                            return (
                                <>
                                    <h1>{id}</h1>
                                    <h1>{price}</h1>
                                </>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    )
}