import React, { useEffect, useState, useMemo } from "react";
import { useParams } from 'react-router-dom';

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
 * BigDetail
 * Specific page to show more detailed info for a bug
 * @param {id} - id of bug on route /bugs/{id}
 */
export default function BugDetail() {
    const {id} = useParams();

    const [bugData, updateBugData] = useState({});

    // Note: Don't think this will benefit from useMemo...
    // const apiData = useMemo(async() => await fetchBugData(), []);

    async function fetchBugData() {
        const response = await fetch(`https://acnhapi.com/v1/bugs/${id}`);
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
        let bugName = responseObj["name"]["name-USen"];

        let nameArr = bugName.split(" ");
        nameArr = nameArr.map((namePart) => {
            return namePart.charAt(0).toUpperCase() + namePart.substring(1, namePart.length);
        });

        responseObj = {...responseObj, name: nameArr.join(" ")};
        return responseObj;
    }

    useEffect(() => {
        fetchBugData()
        .then((resp) => {
            resp = capitalizeFirstChar(resp);

            if (resp["availability"]["month-northern"] !== "" && resp["availability"]["month-southern"] !== "") {
                resp = monthNumToText(resp);
            }
            
            updateBugData(resp);
        });
    }, []);

    if (Object.keys(bugData).length !== 0) {
        return (
            <div className="bug-detail">
                <div className="bug-detail__container">
                    <div className="bug-detail__container__image-container">
                        <img src={ bugData["image_uri"] } alt={ bugData["name"] } />
                    </div>
                    <div className="bug-detail__container__bug-info">
                        <h1>{bugData["name"]}</h1>
    
                        <div className="bug-detail__container__bug-info__tabular">
                            <div className="row">
                                <div className="col-12 col-md-6">Location:</div>
                                <div className="col-12 col-md-6">{bugData["availability"]["location"]}</div>
                            </div>
                            <div className="row">
                                <div className="col-12 col-md-6">Rarity:</div>
                                <div className="col-12 col-md-6">{bugData["availability"]["rarity"]}</div>
                            </div>

                            {bugData["availability"]["time"] && (
                                <div className="row">
                                    <div className="col-12 col-md-6">Time</div>
                                    <div className="col-12 col-md-6">{bugData["availability"]["time"]}</div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    else {
        return <></>
    }
}