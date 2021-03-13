const details = (state = {}, action) => {
  switch (action.type) {
    case 'SET_CHARACTER':
      return { ...action.payload };

    default:
      return state;
  }
};

export default details;
