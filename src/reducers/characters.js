const characters = (state = { count: 1, all: [] }, action) => {
  switch (action.type) {
    case 'UPDATE_CHARACTERS':
      return { ...action.payload };

    default:
      return state;
  }
};

export default characters;
