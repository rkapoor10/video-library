import React from "react";
import "./filters.css";
import { useFilter } from "../../context/FilterContext/FilterContext";

const Filters = () => {
  const { filtersArray, filterDispatch } = useFilter();
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
      ? filterDispatch("REMOVE_FILTER", category)
      : filterDispatch("ADD_FILTER", category);
  };

 
  return (
    <div className="filters-container">
      <ul className="chips-container">
        {filterCategories.map((category) => {
          return (
            <li
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
