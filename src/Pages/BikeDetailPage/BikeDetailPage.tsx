import React, { useEffect, useState, useSyncExternalStore } from "react";
import { useParams } from "react-router-dom";
import { Bike, getBikeById } from "../../Api/Client";
import "./BikeDetailInfo.css";

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
        <h1>{bike.description}</h1>
        <img src={bike.large_img} alt="" width={'100em'} />
        <p>{bike.frame_colours}</p>
        <p>{bike.frame_model}</p>
        <p>{bike.manufacturer_name}</p>
        <p>Status : {bike.status}</p>
        <p>{bike.stolen_location}</p>
            </div>
    
}