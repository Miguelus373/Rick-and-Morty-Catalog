const details = (state = {}, action) => {
  switch (action.type) {
    case 'GET_SINGLE_CHARACTER':
      return { ...action.payload };

    case 'USE_SINGLE_CHARACTER':
      return { ...action.payload };

    default:
      return state;
  }
};

export default details;
