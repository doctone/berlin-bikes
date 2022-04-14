import React from 'react';
import { BikeList } from '../../Components/BikeList/BikeList';
import { SearchBar } from '../../Components/SearchBar/SearchBar';
import "./BikeListPage.css";

export function BikeListPage():JSX.Element {
    return (
        <main className='bike-list-page'>
        <SearchBar />
        <BikeList />
        </main>
    )
}