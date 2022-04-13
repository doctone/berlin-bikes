import React from 'react';
import { Bike } from '../../Api/Client';

export function BikeCard({bike}:{bike:Bike}):JSX.Element {
    const date = new Date(bike.date_stolen);
    return (
        <div>
            <h3>{date.toString()}</h3>
            <h2>{bike.location_found}</h2>
            <img src={bike.large_img} alt="" />
            <p><strong>{bike.frame_model}</strong></p>
            <p>{bike.description}</p>

        </div>
    )
}