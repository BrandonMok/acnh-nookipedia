import React, { useMemo, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { convertMonthNumToText, capitalizeFirstChar } from '../../utilities/detailPageUtilities';

export default function SeaCreaturesDetail() {
    const {id} = useParams();
    const [seaData, updateSeaData] = useState({});
    const apiData = useMemo(async() =>  getSeaData, []);

    async function getSeaData() {
        const response = await fetch(`https://acnhapi.com/v1/sea/${id}`);
        return await response.json();
    }

    useEffect(() => {
        apiData
        .then((resp) =>{
            resp = capitalizeFirstChar(resp);
            resp= convertMonthNumToText(resp);
            updateSeaData(resp);
        });
    }, [apiData]);


    if(Object.keys(seaData).length !== 0) {
        return (
            <div className="detail">
                Sea data here
            </div>
        )
    }
    else {
        return <></>
    }
}
