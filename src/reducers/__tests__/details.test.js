import details from '../details';

const actionGet = {
  type: 'GET_SINGLE_CHARACTER',
  payload: { character: 'data' },
};

const actionUse = {
  type: 'USE_SINGLE_CHARACTER',
  payload: { localCharacter: 'data' },
};

describe('details reducer', () => {
  it('Should return initial state', () => {
    expect(details(undefined, {})).toEqual({});
  });

  it('Should handle "GET_SINGLE_CHARACTER" action', () => {
    expect(details(undefined, actionGet)).toEqual(actionGet.payload);
  });

  it('Should update character object of the state', () => {
    expect(details(undefined, actionGet).character).toEqual('data');
  });

  it('Should handle "USE_SINGLE_CHARACTER" action', () => {
    expect(details(undefined, actionUse)).toEqual(actionUse.payload);
  });

  it('Should update character object of the state', () => {
    expect(details(undefined, actionUse).localCharacter).toEqual('data');
  });

  it('Should not update state if unknown action type is provided', () => {
    const action = {
      type: 'NON_EXISTENT_TYPE',
      payload: { some: 'data' },
    };

    expect(details(undefined, action)).not.toEqual(action.payload);
  });
});
