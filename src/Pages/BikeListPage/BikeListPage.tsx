import React from 'react';
import { BikeList } from '../../Components/BikeList/BikeList';
import { SearchBar } from '../../Components/SearchBar/SearchBar';

export function BikeListPage():JSX.Element {
    return (
        <>
        <SearchBar />
        <BikeList />
        </>
    )
}