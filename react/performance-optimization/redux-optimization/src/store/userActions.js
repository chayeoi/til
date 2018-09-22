export const ADD_USER = 'ADD_USER';

export const addUser = value => ({
  type: ADD_USER,
  payload: { value },
});