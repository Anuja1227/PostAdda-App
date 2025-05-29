import React from 'react'
import './Pagination.css';

function Pagination({totalPosts, postsPerPage, setCurrPage, currentPage}) {
  const totalPages = Math.ceil(totalPosts/postsPerPage);
  let pages = [];

  for(let i = 1; i <= totalPages; i++){
    pages.push(i);  // pushing page numbers in array -> hme wohi toh display krana along with prev button and next button
  }

   const goToPrevPage = () => {
    if (currentPage > 1) setCurrPage(currentPage - 1);
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) setCurrPage(currentPage + 1);
  };

  return (
    //displaying the page numbers
    <div className='pagination-div'>
      {currentPage > 1 && (
        <button className="prev-button" onClick={goToPrevPage}>
          &#8592; 
        </button>
      )}

      {pages.map((page) => {
         return <button key = {page} onClick={() => setCurrPage(page)} className = {page == currentPage ? 'active' : ''}>{page}</button>})
      }

      {currentPage < totalPages && (
        <button className="next-button" onClick={goToNextPage}>
            &#8594; 
        </button>
      )}

      </div>
  )
}

export default Pagination

// jn hm render krte list (like .map()), each element must have a unique key to identify konsa item add hua etc, means each button is uniquely identified by ita page number
//You're always rendering the button, but you're changing its style depending on a condition whether that is active or not -> CONDITIONAL StYLING