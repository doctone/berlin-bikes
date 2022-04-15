import React from 'react';
import { Link } from 'react-router-dom';
import { Bike } from '../../Api/Client';
import "./BikeCard.css";

export function BikeCard({bike}:{bike:Bike}):JSX.Element {
    return (
        <div className='bike-card'>
            <img src={bike.large_img} alt={bike.description} width="200em" />
            <Link to={`./bikes/${bike.id}`}><h3> Stolen {bike.title}</h3></Link>
            <p>{bike.description}</p>
            <p>{bike.year} {bike.stolen_location}</p>
        </div>
    )
}