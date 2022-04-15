import React from 'react';
import { Bike } from '../../Api/Client';
import "./BikeCard.css";

export function BikeCard({bike}:{bike:Bike}):JSX.Element {
    const date = new Date(bike.date_stolen).toLocaleDateString();
    return (
        <div className='bike-card'>
            <img src={bike.large_img} alt={bike.description} width="200em" />
            <h3>{bike.stolen_location}</h3>
            <h2>{bike.location_found}</h2>
            <p><strong>Stolen {bike.frame_model}</strong></p>
            <p>{bike.description}</p>
            <p>{bike.id}</p>
            <p>{bike.year}</p>
        </div>
    )
}