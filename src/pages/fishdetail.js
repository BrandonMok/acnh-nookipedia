import React, { useState, useEffect, useMemo } from "react";
import { useParams } from "react-router";

let monthMap = new Map();
monthMap.set('1', 'January');
monthMap.set('2', 'February');
monthMap.set('3', 'March');
monthMap.set('4', 'April');
monthMap.set('5', 'May');
monthMap.set('6', 'June');
monthMap.set('7', 'July');
monthMap.set('8', 'August');
monthMap.set('9', 'September');
monthMap.set('10', 'October');
monthMap.set('11', 'November');
monthMap.set('12', 'December');

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

    function monthNumToText(responseObj) {
        let northernAvail =  responseObj["availability"]["month-northern"];
        let southernAvail =  responseObj["availability"]["month-southern"];

        let northernNumArr = northernAvail.split('-');
        let northernText = monthMap.get(northernNumArr[0]) + "-" + monthMap.get(northernNumArr[1]);

        let southernNumArr = southernAvail.split('-');
        let southernText = monthMap.get(southernNumArr[0]) + "-" + monthMap.get(southernNumArr[1]);

        // Update the key/values in the responseObj
        responseObj = {
            ...responseObj, 
            "availability": { 
                ...responseObj["availability"], 
                "month-northern": northernText, 
                "month-southern": southernText
            }
        }

        return responseObj;
    }

    function capitalizeFirstChar(responseObj) {
        let fishName = responseObj["name"]["name-USen"];
        fishName = fishName.charAt(0).toUpperCase() + fishName.substring(1, fishName.length);
        responseObj = {...responseObj, name: fishName};
        return responseObj;
    }

    useEffect(() => {
        apiData
        .then((resp) => {
            // modify obj key for name to be user friendly
            resp = capitalizeFirstChar(resp);

            if (resp["availability"]["month-northern"] !== "" && resp["availability"]["month-southern"] !== "") {
                // modify obj key to change the given month number to a text version (e.g. 1-5 becomes January-May),
                resp = monthNumToText(resp);
                updateFish(resp);
            }
            else {
                updateFish(resp);
            }
        });
    }, [apiData]);


    if (Object.keys(fish).length !== 0) {
        return (
            <div className="fish-detail">
                <div className="fish-detail__container">
                    <div className="fish-detail__container__image-container">
                        <img src={ fish["image_uri"] } alt={ fish["name"] } />
                    </div>
                    <div className="fish-detail__container__fish-info">

                        <h1>{ fish["name"] }</h1>

                        <div className="fish-detail__container__fish-info__tabular">
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