import { SUBMIT_WORD } from '../actions';

const scores = {'1': 0,'2': 0,'3': 1,'4': 1,'5': 2,'6': 3,'7': 5};

export default ( state = [], action ) => {

  switch(action.type) {

    case SUBMIT_WORD:
      const word = action.payload;
      return [ ...state, { word, score: ( word.length >= 8 ? 11 : scores[word.length] ) } ];

    default:
      return state;

  }

}