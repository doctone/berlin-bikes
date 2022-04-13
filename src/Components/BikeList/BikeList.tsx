import React, { useState, useEffect } from 'react';
import { Bike, getBikes } from '../../Api/Client';
import { BikeCard } from '../Bike/BikeCard';

export function BikeList():JSX.Element {
    const [bikes, setBikes] = useState<Array<Bike>>([]);

    useEffect(() => {
        getBikes().then(setBikes);
    })

    if (bikes === undefined) {
        return <div>loading...</div>
    }
    return (
        <ul>
            {bikes.map(b => (
                <BikeCard bike={b} />
            ))}
        </ul>
    )
}