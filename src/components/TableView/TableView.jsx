import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import style from "./TableView.module.css";
import { renderTypeLabelsReduced } from "../../helpers/pokemonColorsByType";
import { pokemonClose, pokemonSaveToBdd } from "../../redux/actions";

const TableView = ({ pokemonData }) => {
  const dispatch = useDispatch();
  const [sortField, setSortField] = useState(null);
  const [sortDirection, setSortDirection] = useState("asc");

  const handleClose = (id) => {
    dispatch(pokemonClose(id));
  };

  const handleSaveToBdd = (pokemon) => {
    pokemon.created = true;
    dispatch(pokemonSaveToBdd(pokemon));
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

  return (
    <div className={style.tableContainer}>
      <table>
        <thead>
          <tr>
            <th className={style.columnTitle}>N°</th>
            <th className={style.columnTitle}>ORIGIN</th>
            <th
              onClick={() => handleColumnClick("name")}
              className={style.columnSortTitle}
            >
              NAME
            </th>
            <th className={style.columnTitle}>CARD</th>
            <th
              onClick={() => handleColumnClick("type")}
              className={style.columnTitle}
            >
              TYPE
            </th>
            <th
              onClick={() => handleColumnClick("height")}
              className={style.columnSortTitle}
            >
              HEIGHT
            </th>
            <th
              onClick={() => handleColumnClick("weight")}
              className={style.columnSortTitle}
            >
              WEIGHT
            </th>
            <th
              onClick={() => handleColumnClick("hp")}
              className={style.columnSortTitle}
            >
              HIT POINTS
            </th>
            <th
              onClick={() => handleColumnClick("attack")}
              className={style.columnSortTitle}
            >
              ATTACK
            </th>
            <th
              onClick={() => handleColumnClick("defense")}
              className={style.columnSortTitle}
            >
              DEFENSE
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
                    🩶
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
                    🪪
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
                  ✖️
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
