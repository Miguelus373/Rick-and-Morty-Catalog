import { getCharacter } from 'rickmortyapi';

const getCharacters = page => dispatch => getCharacter({ page })
  .then(
    characters => dispatch({
      type: 'GET_CHARACTERS',
      payload: characters.results,
    }),
  );

const getFilterCharacters = ({ page, name }) => dispatch => getCharacter({
  page,
  name,
}).then(
  characters => dispatch({
    type: 'GET_CHARACTERS',
    payload: characters.results,
  }),
);

export { getCharacters, getFilterCharacters };
