const characterReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_CHARACTERS':
      return [...state, ...action.payload];

    default:
      return state;
  }
};

export default characterReducer;
