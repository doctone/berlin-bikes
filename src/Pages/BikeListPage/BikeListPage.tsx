import React, { useState, useEffect } from 'react';
import { Bike, getBikes } from '../../Api/Client';
import { BikeList } from '../../Components/BikeList/BikeList';
import { PaginatedItems } from '../../Components/PaginatedItems/PaginatedItems';
import { SearchBar } from '../../Components/SearchBar/SearchBar';
import "./BikeListPage.css";

export function BikeListPage():JSX.Element {
    const [fromDate, setFromDate] = useState<Date>();
    const [toDate, setToDate] = useState<Date>();
    const [search, setSearch] = useState<string>('');
    const [bikes, setBikes] = useState<Array<Bike>>([]);
    
    useEffect(() => {
        async function handleBikes(){
            const bikeList = await getBikes();
            if (search === null) setBikes(bikeList);
            else setBikes(bikeList.filter(bike => {
                return bike.description ? bike.description.includes(search) : bike
            }))
        }
        handleBikes();
    }, [search])

    if (bikes === undefined){
        return <main className='bike-list-page'>
        <SearchBar setSearch={setSearch} setToDate={setToDate} setFromDate={setFromDate}/>
        <div>loading bikes..</div>
        </main>
    }
    return (
        <main className='bike-list-page'>
        <SearchBar setSearch={setSearch} setToDate={setToDate} setFromDate={setFromDate}/>
        <p className='bike-list__total'>Total Bikes: <strong>{bikes.length}</strong></p>
        <PaginatedItems itemsPerPage={10} bikes={bikes}/>
        </main>
    )
}