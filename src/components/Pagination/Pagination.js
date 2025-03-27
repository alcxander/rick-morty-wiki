import React, {useState, useEffect}from "react";
import ReactPaginate from "react-paginate";

// ? on info.pages allows info to wait for the api call before
// throwing error on page waiting for response from api

const Pagination = ({ info, pageNumber, setPageNumber }) => {
  let [width, setWidth] = useState(window.innerWidth);
  console.log(width);

  let updateDimension= ()=>{
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", updateDimension);
    return () => window.removeEventListener("resize", updateDimension);
  }, []);

  return (
    <>
    <style jsx>
      {
        `
        @media (max-width: 768px){
          .next, .prev{
            display:none;
          }
            .pagination{
            font-size: 14
            }
        }
        `
      }
    </style>
    <ReactPaginate
      className="pagination justify-content-center gap-4 my-4"
      nextLabel="Next"
      forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
      previousLabel="Prev"
      previousClassName="btn btn-tertiary prev"
      nextClassName="btn btn-tertiary next"
      pageClassName="page-item"
      pageLinkClassName="page-link"
      marginPagesDisplayed={width < 576 ? 1 : 2}
      pageRangeDisplayed={width < 576 ? 1 : 2}
      onPageChange={(data) => {
        setPageNumber(data.selected + 1);
      }}
      activeclassName="active"
      pageCount={info?.pages}
    />
    </>
  );
};

export default Pagination;
