import characters from '../characters';

const action = {
  type: 'UPDATE_CHARACTERS',
  payload: { count: 3, all: ['Many characters'] },
};

describe('characters reducer', () => {
  it('Should return initial state', () => {
    expect(characters(undefined, {})).toEqual({ count: 1, all: [] });
  });

  it('Should handle "UPDATE_CHARACTERS" action', () => {
    expect(characters(undefined, action)).toEqual(action.payload);
  });

  it('Should update count property of the state', () => {
    expect(characters(undefined, action).count).toEqual(3);
  });

  it('Should update character property of the state', () => {
    expect(characters(undefined, action).all).toEqual(['Many characters']);
  });

  it('Should not update state if unknown action type is provided', () => {
    const action = {
      type: 'NON_EXISTENT_TYPE',
      payload: { count: 7, all: ['unknown character?'] },
    };

    expect(characters(undefined, action)).not.toEqual(action.payload);
  });
});
