import { useEffect, useState } from "react";
import './App.css';

export default function Pagination({ empData, setPaginatedData, dataLimit, pageLimit }) {
    const [currentPage, setCurrentPage ] = useState(1);
 
    const gotoNextPage = () => {
        if(currentPage < pageLimit){
        setCurrentPage((page) => page + 1)
        }
    }

    const gotoPrevPage = () => {
        if(currentPage > 1){
        setCurrentPage((page) => page - 1)
        }
    }

    const getPaginatedData = () => {
        const startIndex = currentPage * dataLimit - dataLimit;
        console.log("start",startIndex)
        const endIndex = startIndex + dataLimit;
        console.log("end",endIndex)
        return empData.slice(startIndex, endIndex);
    }

    useEffect(() => {
        setPaginatedData(getPaginatedData)
    },[currentPage])

    useEffect(() => {
        getPaginatedData()
    },[])

    return (
        <div className="pagination">
        <button onClick={gotoPrevPage}>Previous</button>
        <div className="pageNo">{currentPage}</div>
        <button onClick={gotoNextPage}>Next</button>
        </div>
    )
}