// Each sorting method has a distinctive name. Which is set to state.
// Playlist.js retrieves the sorting method and sorts correspondingly.

const sortingMethodReducer = (state = 'none', action) => {
  switch (action.type) {
    case 'SORT_SONGS':
      return (state = action.payload);
    default:
      return state;
  }
};

export default sortingMethodReducer;
