import React from 'react';
import "./SearchBar.css";

export function SearchBar():JSX.Element {
    return (
        <form className='search-form'>
            <input type="text" placeholder='search bike descriptions...' className='search-bar__input'/>
            <label htmlFor="from">From</label>
            <input type="date" className='search-bar__input' id='from'/>
            <label htmlFor="to">to</label>
            <input type="date" className='search-bar__input' id='to'/>
            <button>Find Cases</button>
            </form>
    )
}