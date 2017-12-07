import { combineReducers } from 'redux';

import dicesReducer from './reducer_dices';

const rootReducer = combineReducers({
  dices: dicesReducer
});

export default rootReducer;
