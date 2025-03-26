import React from 'react'
import ReactPaginate from 'react-paginate';

// ? on info.pages allows info to wait for the api call before
// throwing error on page waiting for response from api

const Pagination = ({ info, pageNumber, setPageNumber }) => {
 
  return (
    <ReactPaginate 
    className='pagination justify-content-center gap-4 my-4'
    forcePage={pageNumber===1? 0 : pageNumber-1}
    nextLabel="Next"
    previousLabel='Prev'
    previousclassName="btn btn-primary"
    nextclassName="btn btn-primary"
    pageclassName="page-item"
    pageLinkclassName="page-link"
    onPageChange={(data)=>{
      setPageNumber(data.selected+1);
    }}
    activeclassName="active"
    pageCount={info?.pages} 
    />
  )
}

export default Pagination