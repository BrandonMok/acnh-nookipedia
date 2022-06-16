import React from 'react';
import { useParams } from 'react-router';

export default function FishDetail() {
    // ideally for a detail page, would rather have to pass the already queried json to here then to re-call for data...
    const {id} = useParams();

    return (
        <h1>{id}</h1>
    );
}