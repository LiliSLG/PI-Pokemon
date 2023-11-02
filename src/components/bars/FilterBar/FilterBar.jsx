import React from "react";
import style from "./FilterBar.module.css";
import { Tooltip } from "../../";

const FilterBar = ({
  options,
  tittleOption,
  selectedOption,
  isMultiple,
  operator,
  compareValue,
  onFilterChange,
}) => {
  // const handleFilterChange = (event) => {
  //   const selectedValue = event.target.value;
  //   onFilterChange(selectedValue);
  // };

  // const tittleOption = options.shift().label;

  return (
    <div className={style.filterBar}>
      {/* <label htmlFor="filter-select">Filter:</label> */}
      <select
        id="filter-select"
        name="filterSelect"
        value={selectedOption}
        onChange={onFilterChange}
        className={style.filterSelect}
      >
        <option value="" disabled selected hidden>
          {"Filter by " + tittleOption}
        </option>
        {options.map((option) => (
          <option key={option.id} value={option.id}>
            {option.name}
          </option>
        ))}
      </select>

      {isMultiple && (
        <Tooltip text="Select operator to compare">
          <select
            id="operator"
            name="operator"
            value={operator}
            onChange={onFilterChange}
            className={style.filterOp}
          >
            <option value=">=">≥</option>
            <option value="=">=</option>
            <option value="<=">≤</option>
          </select>
        </Tooltip>
      )}
      {isMultiple && (
        <Tooltip text="Type a value to compare">
          <input
            id="compareValue"
            name="compareValue"
            type="number"
            value={compareValue}
            onChange={onFilterChange}
            className={style.inputValue}
          />{" "}
        </Tooltip>
      )}
    </div>
  );
};

export default FilterBar;
