import React, {useState, useEffect} from 'react';
import Card from '../components/card';

export default function Fish() {
    // id, name.name-USen, icon_uri, price, museum-phrase
    const [fishList, updateFishList] = useState([]);

    async function fetchFishData() {
        const res = await fetch('https://acnhapi.com/v1/fish/1');
        const data = await res.json();
        return await data;
    }

    useEffect(() => {
        fetchFishData()
        .then((resp) => {
            console.log(resp.name['name-USen']);
            updateFishList([resp]);
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
                    { fishList.length > 0 ? (
                        fishList.map(({ id, name, price, icon_uri, shadow }) => {
                            return (
                               <Card 
                                id={id}
                                name={name}
                                price={price}
                                icon_uri={icon_uri}
                                shadow={shadow}
                               />
                            );
                        })
                    ) : (
                        <h1>no data found</h1>
                    )}
                </div>
            </div>
        </div>
    )
}