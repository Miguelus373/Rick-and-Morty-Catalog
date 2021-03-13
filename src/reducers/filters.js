const filters = (state = { page: 1, name: '', status: '' }, action) => {
  switch (action.type) {
    case 'SET_FILTERS':
      return { ...state, ...action.payload };

    default:
      return state;
  }
};

export default filters;
