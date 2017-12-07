import { combineReducers } from 'redux';

import dicesReducer from './reducer_dices';
import currentSelectionReducer from './reducer_currentSelection';
import scoreTableReducer from './reducer_scoreTable';

const rootReducer = combineReducers({
  dices: dicesReducer,
  currentSelection: currentSelectionReducer,
  scoreTable: scoreTableReducer
});

export default rootReducer;
