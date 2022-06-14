import React, {useState, useEffect} from 'react';
import Card from '../components/card';

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
        <div className='container fish'>
            <div className='row'>
                <div className='col-12 pt-4 pb-4 fish__list'>
                    { fishList.length > 0 ? (
                        fishList.map((fish) => {
                            return (
                                <Card 
                                    key="{fish[1].id}"
                                    name={fish[1].name}
                                    price={fish[1].price}
                                    icon_uri={fish[1].icon_uri}
                                    shadow={fish[1].shadow}
                                />
                            );
                        })
                    ) : (
                        <h1>No Fish Available!</h1>
                    )}
                </div>
            </div>
        </div>
    )
}