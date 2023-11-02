import React, { useCallback, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import style from "./TableView.module.css";
import { renderTypeLabelsReduced } from "../../helpers/pokemonColorsByType";
import {
  pokemonClose,
  pokemonSaveToBdd,
  pokemonSort,
} from "../../redux/actions";
import { Tooltip } from "../";

const TableView = ({ pokemonData }) => {
  const dispatch = useDispatch();
  const [sortField, setSortField] = useState(null);
  const [sortDirection, setSortDirection] = useState("asc");

  const handleClose = (id) => {
    dispatch(pokemonClose(id));
  };

  const handleSaveToBdd = (pokemon) => {
    dispatch(pokemonSaveToBdd(pokemon));
    //hago esto para que me muestre en pantalla la actualiacion
    pokemon.created = true;
    pokemon.IDapi = pokemon.id;
  };

  const handleColumnClick = (field) => {
    if (field === sortField) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("asc");
    }
  };

  const sortedPokemonData = React.useMemo(() => {
    const sortedData = [...pokemonData];

    if (sortField) {
      sortedData.sort((a, b) => {
        const aValue = a[sortField];
        const bValue = b[sortField];

        if (aValue < bValue) {
          return sortDirection === "asc" ? -1 : 1;
        } else if (aValue > bValue) {
          return sortDirection === "asc" ? 1 : -1;
        } else {
          return 0;
        }
      });
    }
    return sortedData;
  }, [pokemonData, sortField, sortDirection]);

  const dispatchPokemonSort = useCallback(() => {
    if (sortField)
      dispatch(pokemonSort(sortField, sortDirection, sortedPokemonData));
  }, [dispatch, sortField, sortDirection, sortedPokemonData]);

  /*By wrapping the function with useCallback, the function reference is memoized, 
  meaning it will only be recreated if any of its dependencies change. This ensures that the 
  function reference remains the same between renders as long as the dependencies stay the same. 
  This can help prevent unnecessary re-renders of the component.*/

  useEffect(() => {
    dispatchPokemonSort();
  }, [sortField, sortDirection]);

  return (
    <div className={style.tableContainer}>
      <table>
        <thead>
          <tr>
            <th className={style.columnTitle}>N°</th>
            <th
              onClick={() => handleColumnClick("created")}
              className={style.columnTitle}
            >
              <Tooltip text="Click to sort">ORIGIN</Tooltip>
            </th>
            <th
              onClick={() => handleColumnClick("name")}
              className={style.columnSortTitle}
            >
              <Tooltip text="Click to sort">NAME</Tooltip>
            </th>
            <th className={style.columnTitle}>CARD</th>
            <th
              // onClick={() => handleColumnClick("type")}
              className={style.columnTitle}
            >
              TYPE
            </th>
            <th
              onClick={() => handleColumnClick("height")}
              className={style.columnSortTitle}
            >
              <Tooltip text="Click to sort">HEIGHT</Tooltip>
            </th>
            <th
              onClick={() => handleColumnClick("weight")}
              className={style.columnSortTitle}
            >
              <Tooltip text="Click to sort">WEIGHT</Tooltip>
            </th>
            <th
              onClick={() => handleColumnClick("hp")}
              className={style.columnSortTitle}
            >
              <Tooltip text="Click to sort">HIT POINTS</Tooltip>
            </th>
            <th
              onClick={() => handleColumnClick("attack")}
              className={style.columnSortTitle}
            >
              <Tooltip text="Click to sort">ATTACK</Tooltip>
            </th>
            <th
              onClick={() => handleColumnClick("defense")}
              className={style.columnSortTitle}
            >
              <Tooltip text="Click to sort">DEFENSE</Tooltip>
            </th>
            <th className={style.columnTitle}>CLOSE</th>
          </tr>
        </thead>
        <tbody>
          {pokemonData && pokemonData.length > 0 ? (
            sortedPokemonData.map((pokemon, index) => (
              <tr key={pokemon.id}>
                <td className={style.cellStyle}>{index + 1}</td>
                {!pokemon.created && (
                  <td
                    className={style.clickIcon}
                    onClick={() => handleSaveToBdd(pokemon)}
                  >
                    <Tooltip text="Click to get a favorite">🩶</Tooltip>
                  </td>
                )}
                {pokemon.created && (
                  <td className={style.cellStyle}>
                    {pokemon.idAPI ? "💚" : "❤️"}
                  </td>
                )}
                <td className={style.cellNameStyle}>
                  {pokemon.name.toUpperCase()}
                </td>
                <Link to={`/detail/${pokemon.id}`}>
                  <td
                    className={style.clickIcon} //📷
                  >
                    <Tooltip text="Click to see a card">🪪</Tooltip>
                  </td>
                </Link>
                <td className={style.cellStyle}>
                  {renderTypeLabelsReduced(pokemon)}
                </td>
                <td className={style.cellStyle}>{pokemon.height} cm.</td>
                <td className={style.cellStyle}>{pokemon.weight} gr.</td>
                <td className={style.cellStyle}>{pokemon.hp}</td>
                <td className={style.cellStyle}>{pokemon.attack}</td>
                <td className={style.cellStyle}>{pokemon.defense}</td>
                <td
                  className={style.clickIcon}
                  onClick={() => handleClose(pokemon.id)}
                >
                  <Tooltip text="Click to close">✖️</Tooltip>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="10">No data available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TableView;
