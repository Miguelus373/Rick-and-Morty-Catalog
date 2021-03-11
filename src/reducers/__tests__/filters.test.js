import filters from '../filters';

const action = {
  type: 'SET_FILTERS',
  payload: { page: 7, name: 'Rick', status: 'Alive' },
};

describe('filters reducer', () => {
  it('Should return initial state', () => {
    expect(filters(undefined, {})).toEqual({ page: 0, name: '', status: '' });
  });

  it('Should handle "SET_FILTERS" action', () => {
    expect(filters(undefined, action)).toEqual(action.payload);
  });

  it('Should update page property of the state', () => {
    expect(filters(undefined, action).page).toEqual(7);
  });

  it('Should update name property of the state', () => {
    expect(filters(undefined, action).name).toEqual('Rick');
  });

  it('Should update status property of the state', () => {
    expect(filters(undefined, action).status).toEqual('Alive');
  });

  it('Should not update state if unknown action type is provided', () => {
    const unknownAction = {
      type: 'NON_EXISTENT_TYPE',
      payload: { some: 'data' },
    };

    expect(filters(undefined, unknownAction)).not.toEqual(unknownAction.payload);
  });
});
