import React, { useEffect, useState, useSyncExternalStore } from "react";
import { useParams } from "react-router-dom";
import { Bike, getBikeById } from "../../Api/Client";
import { BikeCard } from "../../Components/Bike/BikeCard";
import { BikeListPage } from "../BikeListPage/BikeListPage";

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
            </div>
    
}