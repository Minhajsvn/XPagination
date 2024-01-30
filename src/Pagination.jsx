import './App.css';

export default function Pagination({ currentPage, setCurrentPage, pageLimit }) {
 
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

    return (
        <div className="pagination">
        <button onClick={gotoPrevPage}>Previous</button>
        <div className="pageNo">{currentPage}</div>
        <button onClick={gotoNextPage}>Next</button>
        </div>
    )
}