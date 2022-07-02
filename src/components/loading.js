import React from "react";
import LoadingGif from '../images/loading.gif';

export default function Loading() {
    return (
        <div className="container loading text-center p-5">
            <img src={LoadingGif} alt="loading" />
        </div>
    );
}