// import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./PaginateAPIBar.module.css";
import { getPokemonsFromAPI } from "../../../../redux/actions";
import { Tooltip } from "../../../";

const PaginateAPIBar = (props) => {
  const dispatch = useDispatch();
  const totalPokemonsAPI = useSelector(
    (state) => state.pokemon.pagination.totalPokemonsAPI
  );
  const cardsPerPage = 12;

  // const totalPages = Math.ceil(cardsTotal / cardsPerPage);

  const [currentPage, setCurrentPage] = useState(5); //arranco de la pagina 5 que es la ultima que cargo
  const [pageNumbers, setPageNumbers] = useState([6, 7, 8, 9, 10]);

  const searchPagesUp = () => {
    const pageNumbersArray = pageNumbers;
    const totalPages = Math.ceil(totalPokemonsAPI / cardsPerPage);
    const lastPageNumber = pageNumbersArray[pageNumbersArray.length - 1];
    if (lastPageNumber <= totalPages) {
      pageNumbersArray.push(lastPageNumber + 1); //agrego al final
      pageNumbersArray.shift(); //saco el primero
      setPageNumbers([...pageNumbersArray]);
    }
  };

  const searchPagesDown = () => {
    const pageNumbersArray = pageNumbers;
    const firstPageNumber = pageNumbersArray[0];
    if (firstPageNumber >= 0) {
      pageNumbersArray.unshift(firstPageNumber - 1); //agrego al ppio
      pageNumbersArray.pop(); //saco el ultimo
      setPageNumbers([...pageNumbersArray]);
    }
  };

  const searchPagesBeginning = () => {
    setPageNumbers([1, 2, 3, 4, 5]);
  };

  const searchPagesEnd = () => {
    const totalPages = Math.ceil(totalPokemonsAPI / cardsPerPage);
    setPageNumbers([
      totalPages - 4,
      totalPages - 3,
      totalPages - 2,
      totalPages - 1,
      totalPages,
    ]);
  };

  const searchPagesM10 = () => {
    const totalPages = Math.ceil(totalPokemonsAPI / cardsPerPage);
    if (pageNumbers[4] + 10 > totalPages) {
      searchPagesEnd();
    } else {
      const actPages = pageNumbers[4];
      setPageNumbers([
        actPages + 10,
        actPages + 11,
        actPages + 12,
        actPages + 13,
        actPages + 14,
      ]);
    }
  };
  const searchPagesL10 = () => {
    if (pageNumbers[0] - 10 < 0) {
      searchPagesBeginning();
    } else {
      const actPages = pageNumbers[0];
      setPageNumbers([
        actPages - 10,
        actPages - 9,
        actPages - 8,
        actPages - 7,
        actPages - 6,
      ]);
    }
  };

  const handlePaginate = (newPage) => {
    setCurrentPage(newPage);
    dispatch(getPokemonsFromAPI(newPage, cardsPerPage));
  };

  const down = "<";
  const up = ">";

  // useEffect(() => {
  //   if (pageNumbersArray.length === 0) {
  //     handlePageNumbers(1);
  //     setPageNumbers([...pageNumbersArray]);
  //   }
  // }, [pageNumbers]);

  function handlePageNumbers(pageNumber) {
    const pageNumbersArray = [];
    const totalPages = Math.ceil(totalPokemonsAPI / cardsPerPage);

    if (totalPages > 0 && pageNumber >= 1 && pageNumber <= totalPages) {
      const startNumber =
        pageNumber !== totalPages ? Math.max(1, pageNumber) : pageNumber - 4;
      const endNumber = Math.min(startNumber + 4, totalPages);

      for (let i = startNumber; i <= endNumber; i++) {
        pageNumbersArray.push(i);
      }
    }

    setPageNumbers(pageNumbersArray);
    //   return pageNumbersArray;
  }

  const renderPageButtons = () => {
    // handlePageNumbers(currentPage);
    return pageNumbers.map((index) => {
      // const isActive = currentPage === index;
      // const buttonClassName = isActive ? style.active : "";
      return (
        <button
          onClick={() => handlePaginate(index)}
          className={style.buttonNumber}
          // className={buttonClassName}
        >
          {index}
        </button>
      );
    });
  };

  return (
    <div className={style.paginationBar}>
      <button
        className={style.buttonArrow}
        onClick={() => searchPagesBeginning()}
        // disabled={buttonsValues.button1 === 1}
      >
        |◀
      </button>
      <button
        className={style.buttonArrow}
        onClick={() => searchPagesL10()}
        // disabled={buttonsValues.button1 === 1}
      >
        -10◀
      </button>
      <button
        className={style.buttonArrow}
        onClick={() => searchPagesDown()}
        // disabled={buttonsValues.button1 === 1}
      >
        ◀
      </button>
      <Tooltip text="Click a page number to get more pokemons">
        {renderPageButtons()}
      </Tooltip>
      <button
        className={style.buttonArrow}
        onClick={() => searchPagesUp()}
        // disabled={buttonsValues.button5 === totalPages}
      >
        ▶
      </button>
      <button
        className={style.buttonArrow}
        onClick={() => searchPagesM10()}
        // disabled={buttonsValues.button5 === totalPages}
      >
        ▶+10
      </button>
      <button
        className={style.buttonArrow}
        onClick={() => searchPagesEnd()}
        // disabled={buttonsValues.button5 === totalPages}
      >
        ▶|
      </button>
    </div>
  );
};
export default PaginateAPIBar;
