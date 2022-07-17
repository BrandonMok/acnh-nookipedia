import React, { useEffect, useState, useMemo } from "react";
import { useParams } from 'react-router-dom';
import { convertMonthNumToText, capitalizeFirstChar } from '../utilities/detailPageUtilities';

/**
 * BigDetail
 * Specific page to show more detailed info for a bug
 * @param {id} - id of bug on route /bugs/{id}
 */
export default function BugDetail() {
    const {id} = useParams();
    const [bugData, updateBugData] = useState({});
    const apiData = useMemo(async() => await fetchBugData(), []);

    async function fetchBugData() {
        const response = await fetch(`https://acnhapi.com/v1/bugs/${id}`);
        return await response.json();
    }

    useEffect(() => {
        apiData
        .then((resp) => {
            resp = capitalizeFirstChar(resp);
            resp = convertMonthNumToText(resp);
            updateBugData(resp);
        });
    }, [apiData]);

    if (Object.keys(bugData).length !== 0) {
        return (
            <div className="detail">
                <div className="detail__container">
                    <div className="detail__container__image-container">
                        <img src={ bugData["image_uri"] } alt={ bugData["name"] } />
                    </div>
                    <div className="detail__container__info">
                        <h1>{bugData["name"]}</h1>
    
                        <div className="detail__container__info__tabular">
                            <div className="row">
                                <div className="col-12 col-md-6">Location:</div>
                                <div className="col-12 col-md-6">{bugData["availability"]["location"]}</div>
                            </div>
                            <div className="row">
                                <div className="col-12 col-md-6">Rarity:</div>
                                <div className="col-12 col-md-6">{bugData["availability"]["rarity"]}</div>
                            </div>

                            {bugData.availability["time"] && (
                                <div className="row">
                                    <div className="col-12 col-md-6">Time</div>
                                    <div className="col-12 col-md-6">{bugData["availability"]["time"]}</div>
                                </div>
                            )}

                            {bugData.availability["month-northern"] && (
                                <div className="row">
                                    <div className="col-12 col-md-6">Northern Availability</div>
                                    <div className="col-12 col-md-6">{ bugData["availability"]["month-northern"]}</div>
                                </div>
                            )}

                            {bugData.availability["month-northern"] && (
                                <div className="row">
                                    <div className="col-12 col-md-6">Southern Availability</div>
                                    <div className="col-12 col-md-6">{ bugData["availability"]["month-southern"]}</div>
                                </div>
                            )}

                            <div className="row" >
                                <div className="col-12 col-md-6">Price</div>
                                <div className="col-12 col-md-6">{bugData["price"]} bells</div>
                            </div>

                            <div className="row" >
                                <div className="col-12 col-md-6">Price Flick</div>
                                <div className="col-12 col-md-6">{bugData["price-flick"]} bells</div>
                            </div>

                            <div className="row quote-row">
                                <div className="col-12">Catch Phrase</div>
                                <div className="col-12">"{ bugData["catch-phrase"] }"</div>
                            </div>
                            <div className="row quote-row">
                                <div className="col-12">Museum Phrase</div>
                                <div className="col-12">"{ bugData["museum-phrase"] }"</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    else {
        return (
            <></>
        );
    }
}