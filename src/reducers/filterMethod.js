// First a check if the box is checked. If so, it adds the filter to the state.
// If the checkbox is not checked, the filter is removed from state.

const filterMethodReducer = (state = [], action) => {
  switch (action.type) {
    case 'FILTER_SONGS':
      if (action.checked) {
        return [...state, action.payload];
      }

      const newState = state.filter((item) => {
        return item !== action.payload;
      });

      return newState;
    default:
      return state;
  }
};

export default filterMethodReducer;
