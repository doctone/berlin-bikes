import React from 'react';
import "./SearchBar.css";

export function SearchBar():JSX.Element {
    return (
        <form className='search-form'>
            <input type="text" />
            <input type="date" >To</input>
            <input type="date" >From</input>
            <button>Find Cases</button>
            </form>
    )
}