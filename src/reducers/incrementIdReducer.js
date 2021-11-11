// The ID will be incremented with every entry.

const incrementIdReducer = (state = 1, action) => {
  switch (action.type) {
    case 'INCREMENT_ID':
      return (state = state + action.payload);
    default:
      return state;
  }
};

export default incrementIdReducer;
