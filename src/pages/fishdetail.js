import React, { useState, useEffect, useMemo } from "react";
import { useParams } from "react-router";
import { convertMonthNumToText, capitalizeFirstChar } from '../utilities/detailPageUtilities';

/**
 * FishDetail
 * Specific page to show more detailed info for a fish
 * @param {id} - id of fish on route /fish/{id}
 */
export default function FishDetail() {
    const {id} = useParams();
    
    const [fish, updateFish] = useState({});
    const apiData = useMemo(async() => await fetchFish(), []);

    async function fetchFish() {
        const response = await fetch(`https://acnhapi.com/v1/fish/${id}`);
        return await response.json();
    }

    useEffect(() => {
        apiData
        .then((resp) => {
            // modify obj key for name to be user friendly
            resp = capitalizeFirstChar(resp);
            // modify obj key to change the given month number to a text version (e.g. 1-5 becomes January-May),
            resp = convertMonthNumToText(resp);
                
            updateFish(resp);
        });
    }, [apiData]);


    if (Object.keys(fish).length !== 0) {
        return (
            <div className="detail">
                <div className="detail__container">
                    <div className="detail__container__image-container">
                        <img src={ fish["image_uri"] } alt={ fish["name"] } />
                    </div>
                    <div className="detail__container__info">

                        <h1>{ fish["name"] }</h1>

                        <div className="detail__container__info__tabular">
                            <div className="row">
                                <div className="col-12 col-md-6">Location:</div>
                                <div className="col-12 col-md-6">{ fish["availability"]["location"] }</div>
                            </div>
                            <div className="row">
                                <div className="col-12 col-md-6">Rarity:</div>
                                <div className="col-12 col-md-6">{ fish["availability"]["rarity"] }</div>
                            </div>

                            {fish["availability"]["time"] !== "" && (
                                <div className="row">
                                    <div className="col-12 col-md-6">Time:</div>
                                    <div className="col-12 col-md-6">{ fish["availability"]["time"] }</div>
                                </div>
                            )}

                            {fish.availability["month-northern"] && (
                                <div className="row">
                                    <div className="col-12 col-md-6">Northern Availability:</div>
                                    <div className="col-12 col-md-6">{ fish.availability["month-northern"] }</div>
                                </div>
                            )}
                            
                            {fish.availability["month-southern"] && (
                                <div className="row">
                                    <div className="col-12 col-md-6">Southern Availability:</div>
                                    <div className="col-12 col-md-6">{ fish.availability["month-southern"] }</div>
                                </div>
                            )}

                            <div className="row">
                                <div className="col-12 col-md-6">Price:</div>
                                <div className="col-12 col-md-6">{ fish["price"] } bells</div>
                            </div>
                            <div className="row quote-row">
                                <div className="col-12">Catch Phrase</div>
                                <div className="col-12">"{ fish["catch-phrase"] }"</div>
                            </div>
                            <div className="row quote-row">
                                <div className="col-12">Museum Phrase</div>
                                <div className="col-12">"{ fish["museum-phrase"] }"</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    else {
        return(
            <></>
        );
    }
}