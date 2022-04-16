import React, { FormEventHandler, useState } from 'react';
import "./SearchBar.css";

export function SearchBar({
        setSearch,
        setFromDate,
        setToDate
            } : {
        setSearch : React.Dispatch<React.SetStateAction<string>>,
        setFromDate : React.Dispatch<React.SetStateAction<Date | undefined>>,
        setToDate : React.Dispatch<React.SetStateAction<Date | undefined>>}) : JSX.Element {
    const [loading, setLoading] = useState<boolean>(false);

    function searchItems(e: React.SyntheticEvent){
        e.preventDefault();
        setLoading(true);
        const target = e.target as typeof e.target & {
            description : {value: string};
            toDate: {value: Date};
            fromDate: {value: Date};
        };
        const description = target.description.value.toLowerCase();
        const toDate = target.toDate.value;
        const fromDate = target.fromDate.value;

        setSearch(description);
        setFromDate(fromDate);
        setToDate(toDate);
        setLoading(false);
    }

    return (
        <form className='search-form' onSubmit={searchItems}>
            <input type="text" placeholder='search bike descriptions...' className='search-bar__input' id='description' />
            <label htmlFor="from">From</label>
            <input type="date" className='search-bar__input' id='fromDate'/>
            <label htmlFor="to">to</label>
            <input type="date" className='search-bar__input' id='toDate'/>
            <button disabled={loading}>Find Cases</button>
            </form>
    )
}