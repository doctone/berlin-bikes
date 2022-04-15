import React, { useState, useEffect } from 'react';
import { Bike, getBikes } from '../../Api/Client';
import { BikeCard } from '../Bike/BikeCard';
import ReactPaginate from 'react-paginate';
import "./BikeList.css";

export function BikeList():JSX.Element {
    const [bikes, setBikes] = useState<Array<Bike>>([]);

    useEffect(() => {
        getBikes().then(setBikes);
    }, [])

    if (bikes === undefined) {
        return <div>loading...</div>
    }
    return (
        <>
        <p className='bike-list__total'>Total Bikes: <strong>{bikes.length}</strong></p>
        <ul className='bike-list'>
            {bikes.map(b => (
                <BikeCard bike={b} />
            ))}
        </ul>
        </>
    )
}