import React, { useEffect, useState, useSyncExternalStore } from "react";
import { useParams } from "react-router-dom";
import { Bike, getBikeById } from "../../Api/Client";
import "./BikeDetailInfo.css";
import { Link } from 'react-router-dom';
import MapComponent from "../../Components/Map/MapComponent";

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
        <Link to="/" className="home-link"> {"<"}Back to bikes</Link>
        <img src={bike.large_img} alt="" width={'500em'} />
        <h1>{bike.title}</h1>
        <h3>{bike.description}</h3>
        <table>
            <tr>
                <th>Status:</th>
                <td className={bike.status === 'stolen' ? 'stolen' : 'found'}>{bike.status}</td>
      
            </tr>
            <tr>
                <th>Model:</th>
                <td>{bike.frame_model}</td>
            </tr>
            <tr>
                <th>Manufacturer:</th>
                <td>{bike.manufacturer_name}</td>
            </tr>
            <tr>
                <th>Location:</th>
                <td>{bike.stolen_location}</td>
            </tr>
        </table>
        <MapComponent latitude={bike.stolen_coordinates[0]} longitude={bike.stolen_coordinates[1]} />
            </div>
    
}