import { combineReducers } from 'redux';

import boardReducer from './reducer_board';
import currentSelectionReducer from './reducer_currentSelection';
import scoreTableReducer from './reducer_scoreTable';

const rootReducer = combineReducers({
  board: boardReducer,
  currentSelection: currentSelectionReducer,
  scoreTable: scoreTableReducer
});

export default rootReducer;
