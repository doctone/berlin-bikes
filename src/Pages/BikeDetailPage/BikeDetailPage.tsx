import React, { useEffect, useState, useSyncExternalStore } from "react";
import { useParams } from "react-router-dom";
import { Bike, getBikeById } from "../../Api/Client";
import "./BikeDetailInfo.css";
import { Link } from 'react-router-dom';

export function BikeDetailPage():JSX.Element {
    const [bike, setBike] = useState<Bike>();
    const {id} = useParams();
    
    useEffect(() => {
        if (id === undefined) return
        getBikeById(id).then(setBike);
    }, [])
    
    
    if (bike === undefined) {
        return <div>loading...</div>
    }
    return <div className="bike-detail-info">
        <Link to="/" className="home-link">Back to bikes</Link>
        <img src={bike.large_img} alt="" width={'500em'} />
        <h1>{bike.title}</h1>
        <h3>{bike.description}</h3>
        <p>{bike.frame_colours}</p>
        <p>{bike.frame_model}</p>
        <p>{bike.manufacturer_name}</p>
        <p>Status : {bike.status}</p>
        <p>{bike.stolen_location}</p>
            </div>
    
}