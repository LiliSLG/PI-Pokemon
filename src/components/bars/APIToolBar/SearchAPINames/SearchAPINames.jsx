import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import style from "./SearchAPINames.module.css";
import { Tooltip } from "../../../";
import { getPokemonByNames } from "../../../../redux/actions";

const SearchAPINames = () => {
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState("");
  const [namesByLetter, setNamesByLetter] = useState([]);
  const [lettersVisible, setLettersVisible] = useState(true);
  const [selectedNames, setSelectedNames] = useState([]);
  const [activeLetter, setActiveLetter] = useState("");
  const pokemonNamesHelp = useSelector(
    (state) => state.pokemon.pokemonNamesHelp
  );

  const handleSearchTextChange = (e) => {
    const searchText = e.target.value;
    setSearchText(searchText);
    setLettersVisible(searchText === "");

    if (searchText !== "") {
      const filteredNames = pokemonNamesHelp
        .filter((pokemon) =>
          pokemon.name.toLowerCase().includes(searchText.toLowerCase())
        )
        .map((pokemon) => pokemon.name); // Extract only the name from each object
      setNamesByLetter(filteredNames);
    }
  };

  const handleLetterClick = (letter) => {
    setActiveLetter(letter);
    const filteredNames = pokemonNamesHelp
      .filter((pokemon) =>
        pokemon.name.toLowerCase().startsWith(letter.toLowerCase())
      )
      .map((pokemon) => pokemon.name); // Extract only the name from each object
    setNamesByLetter(filteredNames);
  };

  const handleNameSelect = (name) => {
    const updatedNames = selectedNames.includes(name)
      ? selectedNames.filter((n) => n !== name)
      : [...selectedNames, name];
    setSelectedNames(updatedNames);
  };

  const handleSearch = () => {
    // console.log(selectedNames);
    dispatch(getPokemonByNames(selectedNames));
  };

  const handleCancel = () => {
    setSelectedNames([]);
    setNamesByLetter([]);
    setSearchText("");
  };

  const getColumnCount = () => {
    return namesByLetter.length <= 7 ? 2 : 7;
  };

  return (
    <div className={style.searchContainer}>
      {/* <div className={style.closeContainer}>
        <button
          id="buttonClose"
          className={style.closeBtn}
          onClick={handleCancel}
        >
          ✖️
        </button>
      </div> */}
      <p className={style.titleName}>
        Select the names to search in Pokemon API
      </p>
      <input
        className={style.searchNamesinput}
        placeholder="🔎 Quick search..."
        type="text"
        value={searchText}
        onChange={handleSearchTextChange}
      />
      {lettersVisible && (
        <div>
          {Array.from(Array(26)).map((_, index) => (
            <button
              key={index}
              className={
                activeLetter === String.fromCharCode(65 + index)
                  ? style.activeButton
                  : style.buttonLetters
              }
              onClick={() => handleLetterClick(String.fromCharCode(65 + index))}
            >
              {String.fromCharCode(65 + index)}
            </button>
          ))}
        </div>
      )}
      <div
        className={style.searchNames}
        style={{
          gridTemplateColumns: `repeat(${getColumnCount()}, minmax(0, 1fr))`,
        }}
      >
        {namesByLetter.map((name) => (
          <div key={name} className={style.nameItem}>
            <input
              type="checkbox"
              checked={selectedNames.includes(name)}
              onChange={() => handleNameSelect(name)}
            />
            <span className={style.namePokemon}>{name}</span>
          </div>
        ))}
      </div>
      <div className={style.footer}>
        <div className={style.selectedNames}>
          {selectedNames.length > 0 && (
            <p>
              SELECTED NAMES ({selectedNames.length}):{" "}
              {selectedNames.join(", ")}
            </p>
          )}
        </div>
        <button className={style.buttonSubmit} onClick={handleSearch}>
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchAPINames;
