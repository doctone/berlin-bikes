import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { Bike } from '../../Api/Client';
import { BikeList } from '../BikeList/BikeList';

export function PaginatedItems({
  itemsPerPage,
  bikes,
  } : {
  itemsPerPage : number,
  bikes : Bike[],
}) {
    const [currentItems, setCurrentItems] = useState<Array<Bike>>([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
  
    useEffect(() => {
      const endOffset = itemOffset + itemsPerPage;
      console.log(`Loading items from ${itemOffset} to ${endOffset}`);
      setCurrentItems(bikes.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(bikes.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, bikes]);

    const handlePageClick = (event: { selected: number; }) => {
      const newOffset = (event.selected * itemsPerPage) % bikes.length;
      console.log(
        `User requested page number ${event.selected}, which is offset ${newOffset}`
      );
      setItemOffset(newOffset);
    };

    return (
      <>
      <img src="https://t3.ftcdn.net/jpg/02/33/01/18/360_F_233011872_mkQuPcwam2o7dSXi6OZAojBncSzy2LKf.jpg" alt="" height={"200em"} />
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< previous"
        />
        <BikeList bikes={currentItems}/>
      </>
    );
  }