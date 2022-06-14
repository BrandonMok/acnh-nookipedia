import React, { useState, useEffect } from 'react';

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
        // note: may want to make the markup below as a general grid list component...
        // since all pages will list the elements out?
        <div className='container bugs'>
            <div className='row'>
                <div className='col-12 pt-4 pb-4 bugs__list'>
                    { bugList.length > 0 ? (
                        bugList.map((bug) => {
                            return (
                                <h1>{bug.id}</h1>
                                // <FishCard 
                                //     key="{fish[1].id}"
                                //     name={fish[1].name}
                                //     price={fish[1].price}
                                //     icon_uri={fish[1].icon_uri}
                                //     shadow={fish[1].shadow}
                                // />
                            );
                        })
                    ) : (
                        <h1>No Bugs Available!</h1>
                    )}
                </div>
            </div>
        </div>
    );
}