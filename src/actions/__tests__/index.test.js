import * as actions from '../index';

describe('Regular action creators', () => {
  it('should create an action to set filters', () => {
    const filters = { data: 'filters here' };

    const expectedAction = {
      type: 'SET_FILTERS',
      payload: filters,
    };

    expect(actions.setFilters(filters)).toEqual(expectedAction);
  });

  it('should create an action to update characters', () => {
    const characters = { data: 'many characters' };

    const expectedAction = {
      type: 'UPDATE_CHARACTERS',
      payload: characters,
    };

    expect(actions.updateCharacters(characters)).toEqual(expectedAction);
  });

  it('should create an action to set a character', () => {
    const character = { data: 'character info' };

    const expectedAction = {
      type: 'SET_CHARACTER',
      payload: character,
    };

    expect(actions.setCharacter(character)).toEqual(expectedAction);
  });
});
