import React from "react";
import LoadingGif from '../images/loading.gif';

export default function Loading() {
    return (
        <div className="loading">
            <div className="loading__container">
                <img src={LoadingGif} alt="loading" width="90px" />
            </div>
        </div>
    );
}