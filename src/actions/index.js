import { getCharacter } from 'rickmortyapi';

const setFilters = filters => ({
  type: 'SET_FILTERS',
  payload: filters,
});

const updateCharacters = ({ page, name, status }) => dispatch => getCharacter({
  page,
  name,
  status,
}).then(
  data => {
    dispatch({
      type: 'UPDATE_CHARACTERS',
      payload: { count: data.info.pages, all: data.results },
    });
  },
).catch(() => {});

const getSingleCharacter = id => dispatch => getCharacter(id)
  .then(
    character => {
      dispatch({
        type: 'GET_SINGLE_CHARACTER',
        payload: character,
      });
    },
  ).catch(() => []);

const useLocalCharacter = character => ({
  type: 'USE_SINGLE_CHARACTER',
  payload: character,
});

export {
  updateCharacters, getSingleCharacter,
  useLocalCharacter, setFilters,
};
