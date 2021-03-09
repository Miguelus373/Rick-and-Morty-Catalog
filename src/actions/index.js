import { getCharacter } from 'rickmortyapi';

const getCharacters = page => dispatch => getCharacter({ page })
  .then(
    characters => dispatch({
      type: 'GET_CHARACTERS',
      payload: characters.results,
    }),
  );

export { getCharacters as default };
