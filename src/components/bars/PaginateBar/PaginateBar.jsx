import style from "./PaginateBar.module.css";

import React from "react";

const PageBar = ({
  currentPage,
  cardsPerPage,
  cardsTotal,
  handleOriginPaginate,
}) => {
  const totalPages = Math.ceil(cardsTotal / cardsPerPage);

  // Handle pagination button click
  const handleClick = (pageNumber) => {
    handleOriginPaginate(pageNumber);
  };

  // Handle input change
  const handleInputChange = (event) => {
    const pageNumber = parseInt(event.target.value);
    if (!isNaN(pageNumber) && pageNumber >= 1 && pageNumber <= totalPages) {
      handleOriginPaginate(pageNumber);
    }
  };

  return (
    <div className={style.paginationBar}>
      <button onClick={() => handleClick(1)} disabled={currentPage === 1}>
        {" "}
        {"|◀"}
      </button>
      <button
        onClick={() => handleClick(currentPage - 1)}
        disabled={currentPage === 1}
      >
        ◀
      </button>
      <div className={style.pageNumbers}>
        <input
          type="number"
          value={currentPage}
          min="1"
          max={totalPages}
          onChange={handleInputChange}
        />

        <span>of {totalPages}</span>
      </div>
      <button
        onClick={() => handleClick(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        ▶
      </button>
      <button
        onClick={() => handleClick(totalPages)}
        disabled={currentPage === totalPages}
      >
        {"▶|"}
      </button>
    </div>
  );
};

export default PageBar;

// const PaginateBar = (props) => {
//   const { currentPage, cardsPerPage, cardsTotal, handleOriginPaginate } = props;

//   const pageNumbersArray = [];
//   const totalPages = Math.ceil(cardsTotal / cardsPerPage);
//   let startNumber = 1;
//   let endNumber;
//   if (totalPages > 0 && currentPage >= 1 && currentPage <= totalPages) {
//     if (totalPages < 5) {
//       startNumber = 1;
//       endNumber = totalPages;
//     } else {
//       startNumber =
//         currentPage !== totalPages ? Math.max(1, currentPage) : currentPage - 4;
//       endNumber = Math.min(startNumber + 4, totalPages);
//     }
//     for (let i = startNumber; i <= endNumber; i++) {
//       pageNumbersArray.push(i);
//     }
//   }

//   const renderPageButtons = () => {
//     return pageNumbersArray.map((index) => {
//       const isActive = currentPage === index;
//       const buttonClassName = isActive ? style.active : "";
//       return (
//         <button
//           onClick={() => handlePaginate(index)}
//           className={buttonClassName}
//         >
//           {index}
//         </button>
//       );
//     });
//   };

//   // Handle navigation to previous page
//   const goToPreviousPage = () => {
//     if (currentPage > 1) handlePaginate(currentPage - 1);
//   };

//   // Handle navigation to next page
//   const goToNextPage = () => {
//     if (currentPage < Math.ceil(cardsTotal / cardsPerPage))
//       handlePaginate(currentPage + 1);
//   };

//   const searchPagesBeginning = () => {
//     handlePaginate(1);
//   };

//   const searchPagesEnd = () => {
//     handlePaginate(Math.ceil(cardsTotal / cardsPerPage));
//   };

//   const handlePaginate = (newPage) => {
//     handleOriginPaginate(newPage);
//   };

//   return (
//     <div className={style.paginationBar}>
//       <button
//         className={style.buttonUpDown}
//         onClick={searchPagesBeginning}
//         // disabled={buttonsValues.button1 === 1}
//       >
//         {"|◀"}
//       </button>
//       <button
//         className={style.buttonToGo}
//         onClick={goToPreviousPage}
//         disabled={currentPage === 1}
//       >
//         ◀
//       </button>

//       {renderPageButtons()}

//       <button
//         className={style.buttonToGo}
//         onClick={goToNextPage}
//         disabled={currentPage === Math.ceil(cardsTotal / cardsPerPage)}
//       >
//         ▶
//       </button>
//       <button
//         className={style.buttonUpDown}
//         onClick={searchPagesEnd}
//         // disabled={buttonsValues.button5 === totalPages}
//       >
//         {"▶|"}
//       </button>
//     </div>
//   );
// };
// export default PaginateBar;
