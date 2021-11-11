// Each song is a seperate object. Add song adds the new song at the end of the array.
// Delete song leaves out the song with the given ID.

const songsReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_SONG':
      return [...state, action.payload];
    case 'DELETE_SONG':
      const newState = state.filter((song) => {
        return song.id !== action.payload;
      });

      return newState;
    default:
      return state;
  }
};

export default songsReducer;
