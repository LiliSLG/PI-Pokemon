import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import style from "./APIToolBar.module.css";
// import { Tooltip } from "../";
import { getPokemonByNamesHELP } from "../../../redux/actions";
import PaginateAPIBar from "./PaginateAPIBar/PaginateAPIBar";
import SearchAPINames from "./SearchAPINames/SearchAPINames";

const APIToolBar = (props) => {
  const dispatch = useDispatch();
  // const handleSearchNames = () => {
  //   dispatch(getPokemonByNamesHELP);
  // };

  useEffect(() => {
    dispatch(getPokemonByNamesHELP());
  }, []);

  const [searchByPage, setSearchByPage] = useState(false);
  const [searchByName, setSearchByName] = useState(false);

  const handleSearchByPage = () => {
    setSearchByPage(!searchByPage);
    setSearchByName(false);
  };

  const handleSearchByName = () => {
    setSearchByPage(false);
    setSearchByName(!searchByName);
  };

  return (
    <div className={style.APIContainer}>
      <div className={style.panelHeader}>
        <div className={style.titleContainer}>
          <p><b>🛠️ Pokemon API tools</b></p>
          <p>Get more pokemons from API!</p>
        </div>
        <div className={style.buttonContainer}>
          <button
            // className={style.buttonPanels}
            className={searchByName ? style.buttonPanels : style.inactiveButton}
            onClick={handleSearchByName}
            // disabled={searchByName}
          >
            Get Poks by Name
          </button>
          <button
            // className={style.buttonPanels}
            className={searchByPage ? style.buttonPanels : style.inactiveButton}
            onClick={handleSearchByPage}
            // disabled={searchByPage}
          >
            Get Poks by Page
          </button>
        </div>
        {searchByPage && (
          <div className={style.panelBar}>
            <PaginateAPIBar />
          </div>
        )}
      </div>
      {searchByName && (
        <div className={style.panelNames}>
          <SearchAPINames />
        </div>
      )}
    </div>
  );
};

export default APIToolBar;
