
export const GENERATE_BOARD = 'GENERATE_BOARD';
export const ADD_CHAR = 'ADD_CHAR';
export const REMOVE_CHAR = 'REMOVE_CHAR';
export const RESET_CHAR = 'RESET_CHAR';
export const SUBMIT_WORD = 'SUBMIT_WORD';

export const generateBoard = () => ({ type: GENERATE_BOARD });

export const addChar = ( char, row, col ) => ({
  type: ADD_CHAR,
  payload: { char, row, col }
});

export const removeChar = () => ({ type: REMOVE_CHAR });

export const resetChar = () => ({ type: RESET_CHAR });

export const submitWord = word => ({
  type: SUBMIT_WORD,
  payload: word
});