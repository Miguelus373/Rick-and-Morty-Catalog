const setFilters = filters => ({
  type: 'SET_FILTERS',
  payload: filters,
});

const updateCharacters = characters => ({
  type: 'UPDATE_CHARACTERS',
  payload: characters,
});

const setCharacter = character => ({
  type: 'SET_CHARACTER',
  payload: character,
});

export { updateCharacters, setCharacter, setFilters };
