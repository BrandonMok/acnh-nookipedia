import React, { useState, useEffect, useMemo } from "react";
import { useParams } from "react-router";

export default function FishDetail() {
    // ID passed in param
    const {id} = useParams();

    const [fishData, updateFishData] = useState(null);
    const apiData = useMemo(async () => await fetchFish(), []);

    async function fetchFish() {
        const response = await fetch(`https://acnhapi.com/v1/fish/${id}`);
        return await response.json();
    }

    useEffect(() => {
        apiData
        .then((resp) => {
            console.log('response');
            console.log(resp);
            console.log(resp["name"]["name-USen"]);
            updateFishData(resp);

            console.log(fishData);
        });
        // .catch((error) => {
        //     console.log(error);
        // });
    }, [apiData]);

    return (
        <div className="container fish-detail">
            <div className="fish-detail__image-container">
                {/* <img src={fishData["image_uri"]} alt={fishData["name"]["name"]} /> */}
            </div>
            <div className="fish-detail__fish-info">
                {/* <h1>{fishData["name"]["name-USen"]}</h1> */}
                {/* <p>{fishData["availability"]["location"]}</p> */}
            </div>
        </div>
    );
}