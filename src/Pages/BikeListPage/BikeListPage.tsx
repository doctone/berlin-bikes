import React, { useState, useEffect } from 'react';
import { Bike, getBikes } from '../../Api/Client';
import { BikeList } from '../../Components/BikeList/BikeList';
import { PaginatedItems } from '../../Components/PaginatedItems/PaginatedItems';
import { SearchBar } from '../../Components/SearchBar/SearchBar';
import "./BikeListPage.css";

export function BikeListPage():JSX.Element {
    const [bikes, setBikes] = useState<Array<Bike>>([]);
    
    useEffect(() => {
        getBikes().then(setBikes);
    }, [])

    if (bikes === undefined){
        return <main className='bike-list-page'>
        <SearchBar />
        <div>loading bikes..</div>
        </main>
    }
    return (
        <main className='bike-list-page'>
        <SearchBar />
        <p className='bike-list__total'>Total Bikes: <strong>{bikes.length}</strong></p>
        <PaginatedItems itemsPerPage={10} bikes={bikes}/>
        </main>
    )
}