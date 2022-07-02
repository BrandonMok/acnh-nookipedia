import React, { useState, useEffect, useMemo } from "react";
import { useParams } from "react-router";

export default function FishDetail() {
    // ID passed in param
    const {id} = useParams();

    const [fish, updateFish] = useState({});
    const apiData = useMemo(async () => await fetchFish(), []);

    async function fetchFish() {
        const response = await fetch(`https://acnhapi.com/v1/fish/${id}`);
        return await response.json();
    }

    useEffect(() => {
        apiData
        .then((resp) => {
            updateFish(resp);

            console.log(resp);
        })
        .catch((error) => {
            console.log(error);
        });
    }, [apiData]);

    return (
        <div className="container fish-detail">
            <div className="fish-detail__image-container">
                {/* <img src={fish["image_uri"]} alt={fish["name"]["name"]} /> */}
            </div>
            <div className="fish-detail__fish-info">
                <h1>{ fish["name"]["name-USen"] }</h1>
                <p>{ fish["availability"]["location"] }</p>
            </div>
        </div>
    );
}