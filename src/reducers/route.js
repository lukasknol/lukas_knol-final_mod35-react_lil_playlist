//  Changes the route to render in App.js

const routeReducer = (state = 'playlist', action) => {
  switch (action.type) {
    case 'CHANGE_ROUTE':
      return (state = action.payload);
    default:
      return state;
  }
};

export default routeReducer;
