import React, {useState,useEffect,useMemo} from 'react';

export default function Fish() {
    // plan: get all fish
    // search bar would limit the results
    // if search bar is going to be a separate component, could pass component the fish data and have it return the one user is looking for (potentially)

    // fields going to use
    // id, name.name-USen, image_uri


    const [fishList, updateFishList] = useState();

    // const fishData = useMemo(async () => {
    //     // NOTE: May want to map the resulting array into new objects with only the keys I want
    //     const res = await fetch('https://acnhapi.com/v1/fish/1');
    //     const data = await res.json();
    //     updateFishList(data);
    // }, []);

    return (
        <div className='container fish'>
            <div className='row'>
                <div className='col-12'>

                </div>
                <div className='col-12 fish__list'>
                    {fishList}
                </div>
            </div>
        </div>
    )
}