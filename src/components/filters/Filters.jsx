import React from "react";
import "./filters.css";
import { useFilter } from "../../context/FilterContext/FilterContext";

const Filters = () => {
  const { filterState, filterDispatch } = useFilter();
  const {filtersArray} = filterState
  const filterCategories = [
    "All",
    "Training",
    "Matches",
    "Exercise",
    "Doubles",
    "Singles",
    "Women",
    "Men",
  ];


  const filterHandler = (category) => {

    filtersArray?.includes(category)
      ? filterDispatch({type:"REMOVE_FILTER", payload:category})
      : filterDispatch({type:"ADD_FILTER", payload:category});
  };

  return (
    <div className="filters-container">
      <ul className="chips-container">
        {filterCategories.map((category) => {
          return (
            <li key={category}
              className={
                filtersArray?.includes(category) ? "active-chip" : "chip"
              }
              onClick={() => filterHandler(category)}
            >
              {category}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Filters;
