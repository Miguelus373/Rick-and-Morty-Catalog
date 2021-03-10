const characterReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_CHARACTERS':
      return [...action.payload];

    case 'FILTER_CHARACTERS':
      return [...action.payload];

    case 'GET_SINGLE_CHARACTER':
      return [...action.payload];

    default:
      return state;
  }
};

export default characterReducer;
