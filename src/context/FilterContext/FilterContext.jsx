import { createContext, useContext, useState } from "react";
import { useVideo } from "../VideoContext/VideoContext";

// create Context
const defaultContextValue = {};
const FilterContext = createContext(defaultContextValue);

const FilterProvider = ({ children }) => {
  const { videosData } = useVideo();
  const [filtersArray, setFilters] = useState(["All"]);
  const filterDispatch = (action, filterCategory) => {
    switch (action) {
      case "ADD_FILTER":
        return setFilters((filtersArray) => [...filtersArray, filterCategory]);
      case "REMOVE_FILTER":
        return setFilters((filtersArray) =>
          filtersArray.filter((filterItem) => filterItem !== filterCategory)
        );
      default:
        return filtersArray;
    }
  };

  const filterData = () => {
    console.log({ videosData });
    if (filtersArray.includes("All")) return videosData;
    return videosData.filter((video) =>
      video.tags.some((tag) => filtersArray.includes(tag))
    );
  };

  const filteredData = filterData();

  // provide Context
  return (
    <FilterContext.Provider
      value={{ filteredData, filtersArray, filterDispatch }}
    >
      {children}
    </FilterContext.Provider>
  );
};

// use Context
const useFilter = () => useContext(FilterContext);

// export Context
export { FilterProvider, useFilter };
