import { combineReducers } from 'redux';

import dicesReducer from './reducer_dices';
import currentSelectionReducer from './reducer_currentSelection';

const rootReducer = combineReducers({
  dices: dicesReducer,
  currentSelection: currentSelectionReducer
});

export default rootReducer;
