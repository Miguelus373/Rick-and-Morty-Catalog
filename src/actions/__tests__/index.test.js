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

  it('should create an action to use a local character', () => {
    const character = { data: 'character info' };

    const expectedAction = {
      type: 'USE_SINGLE_CHARACTER',
      payload: character,
    };

    expect(actions.useLocalCharacter(character)).toEqual(expectedAction);
  });
});
