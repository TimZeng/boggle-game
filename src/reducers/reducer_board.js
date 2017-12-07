import { GENERATE_BOARD } from '../actions';

const dices = ['aaafrs','aaeeee','aafirs','adennn','aeeeem','aeegmu','aegmnn','afirsy','bjkqxz','ccenst','ceiilt','ceilpt','ceipst','ddhnot','dhhlor','dhlnor','dhlnor','eiiitt','emottt','ensssu','fiprsy','gorrvw','iprrry','nootuw','ooottu'];

export default ( state = [], action ) => {

  switch(action.type) {

    case GENERATE_BOARD:
      const newBoard = [], taken = {};
      while ( newBoard.length < 25 ) {
        const i = Math.floor(Math.random() * 25);
        if ( !taken[i] ) {
          const j = Math.floor(Math.random() * 6);
          newBoard.push(dices[i][j]);
          taken[i] = true;
        }
      }
      return newBoard;


    default:
      return state;

  }

};