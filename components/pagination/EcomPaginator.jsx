import React from 'react'
import ReactPaginate from 'react-paginate';

const EcomPaginator = ({ pageCount, handlePageClick }) => {

    return (
        <ReactPaginate
          previousLabel={'<<'}
          nextLabel={'>>'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName={'pagination'}
          activeClassName={'active'}
        />
     );
}
 
export default EcomPaginator;