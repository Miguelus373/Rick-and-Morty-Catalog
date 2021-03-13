import details from '../details';

const action = {
  type: 'SET_CHARACTER',
  payload: { character: 'data' },
};

describe('details reducer', () => {
  it('Should return initial state', () => {
    expect(details(undefined, {})).toEqual({});
  });

  it('Should handle "SET_CHARACTER" action', () => {
    expect(details(undefined, action)).toEqual(action.payload);
  });

  it('Should update character object of the state', () => {
    expect(details(undefined, action).character).toEqual('data');
  });

  it('Should not update state if unknown action type is provided', () => {
    const action = {
      type: 'NON_EXISTENT_TYPE',
      payload: { some: 'data' },
    };

    expect(details(undefined, action)).not.toEqual(action.payload);
  });
});
