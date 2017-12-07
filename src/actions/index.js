
export const ADD_CHAR = 'ADD_CHAR';
export const REMOVE_CHAR = 'REMOVE_CHAR';

export const addChar = ( char, row, col ) => ({
  type: ADD_CHAR,
  payload: { char, row, col }
});

export const removeChar = () => ({
  type: REMOVE_CHAR
});