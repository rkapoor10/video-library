const filterReducer = (state, action) => {
    const { type, payload: newFilter } = action;
    switch (type) {
      case "ADD_FILTER":
        if (
          state.filtersArray.length === 1 &&
          state.filtersArray.includes("All")
        )
          return { filtersArray: [newFilter] };
        return { filtersArray: [...state.filtersArray, newFilter] };
      case "REMOVE_FILTER":
        return {
          filtersArray: state.filtersArray.filter(
            (filterItem) => filterItem != newFilter
          ),
        };
      default:
        return state;
    }
  };

  export default filterReducer