import { ADD_CHAR, REMOVE_CHAR, RESET_CHAR } from '../actions';

export default ( state = [], action ) => {

  switch( action.type ) {

    case ADD_CHAR:
      return [ ...state, action.payload ];

    case REMOVE_CHAR:
      return state.slice( 0, state.length - 1 );

    case RESET_CHAR:
      return [];

    default:
      return state;

  }

};

