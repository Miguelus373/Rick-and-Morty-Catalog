import { getCharacter } from 'rickmortyapi';

const getCharacters = page => dispatch => getCharacter({ page })
  .then(
    characters => dispatch({
      type: 'GET_CHARACTERS',
      payload: characters.results,
    }),
  );

const filterCharacters = ({ page, name, status }) => dispatch => getCharacter({
  page,
  name,
  status,
}).then(
  characters => {
    dispatch({
      type: 'FILTER_CHARACTERS',
      payload: characters.results,
    });
  },
).catch(e => console.error(e));

export { getCharacters, filterCharacters };
