import { getCharacter } from 'rickmortyapi';

const characterReducer = async (state = [], action) => {
  if (action.type === 'GET_CHARACTERS') {
    const nextPage = await getCharacter({
      page: action.payload,
    });

    return [...state, ...nextPage.results];
  }

  return state;
};

export default characterReducer;
