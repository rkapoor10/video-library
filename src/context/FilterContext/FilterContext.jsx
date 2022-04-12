import { createContext, useContext, useReducer } from "react";
import { useVideo } from "../VideoContext/VideoContext";
import filterReducer from "./FilterReducer";

// create Context
const defaultContextValue = {};
const FilterContext = createContext(defaultContextValue);

// provide Context
const FilterProvider = ({ children }) => {
  const { videosData } = useVideo();
  const initialFilterState = { filtersArray: ["All"] };
  const [filterState, filterDispatch] = useReducer(
    filterReducer,
    initialFilterState
  );

  const filterData = () => {
    const { filtersArray } = filterState;
    if (filtersArray.includes("All")) return videosData;
    return videosData.filter((video) =>
      video.tags.some((tag) => filtersArray.includes(tag))
    );
  };
  const filteredData = filterData();

  return (
    <FilterContext.Provider
      value={{ filteredData, filterState, filterDispatch }}
    >
      {children}
    </FilterContext.Provider>
  );
};

// use Context
const useFilter = () => useContext(FilterContext);

// export Context
export { FilterProvider, useFilter };
