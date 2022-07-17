import React, { useMemo, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { convertMonthNumToText, capitalizeFirstChar } from '../../utilities/detailPageUtilities';

export default function SeaCreaturesDetail() {
    const {id} = useParams();
    const [seaData, updateSeaData] = useState({});
    const apiData = useMemo(async() => await getSeaData(), []);

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
                <div className="detail__container">
                    <div className="detail__container__image-container">
                        <img src={ seaData["image_uri"] } alt={ seaData["name"] } />
                    </div>
                    <div className="detail__container__info">
                        <h1>{seaData["name"]}</h1>
    
                        <div className="detail__container__info__tabular">
                            {seaData.availability["time"] && (
                                <div className="row">
                                    <div className="col-12 col-md-6">Time</div>
                                    <div className="col-12 col-md-6">{seaData["availability"]["time"]}</div>
                                </div>
                            )}

                            {seaData.availability["month-northern"] && (
                                <div className="row">
                                    <div className="col-12 col-md-6">Northern Availability</div>
                                    <div className="col-12 col-md-6">{ seaData["availability"]["month-northern"]}</div>
                                </div>
                            )}

                            {seaData.availability["month-northern"] && (
                                <div className="row">
                                    <div className="col-12 col-md-6">Southern Availability</div>
                                    <div className="col-12 col-md-6">{ seaData["availability"]["month-southern"]}</div>
                                </div>
                            )}

                            <div className="row">
                                <div className="col-12 col-md-6">Shadow</div>
                                <div className="col-12 col-md-6">{seaData["shadow"]}</div>
                            </div>

                            <div className="row">
                                <div className="col-12 col-md-6">Speed</div>
                                <div className="col-12 col-md-6">{seaData["speed"]}</div>
                            </div>

                            <div className="row" >
                                <div className="col-12 col-md-6">Price</div>
                                <div className="col-12 col-md-6">{seaData["price"]} bells</div>
                            </div>

                            <div className="row quote-row">
                                <div className="col-12">Catch Phrase</div>
                                <div className="col-12">"{ seaData["catch-phrase"] }"</div>
                            </div>
                            <div className="row quote-row">
                                <div className="col-12">Museum Phrase</div>
                                <div className="col-12">"{ seaData["museum-phrase"] }"</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    else {
        return <></>
    }
}
