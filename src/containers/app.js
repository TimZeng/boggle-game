import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addChar, removeChar, resetChar, submitWord } from '../actions';
import { Board, Tracking, ScoreTable } from '../components';

class App extends Component {

  handleDiceClick = (text, row, col, selected) => {
    if ( selected ) {
      this.props.removeChar();
    } else {
      this.props.addChar(text, row, col);
    }
  }

  handleSubmit = word => {
    if ( !!word && this.props.scoreTable.findIndex(el => el.word === word) < 0 ) {
      this.props.submitWord(word);
      this.props.resetChar();
    }
  }

  render() {
    const { dices, currentSelection, scoreTable } = this.props;
    const currentWord = currentSelection.map(el => el.char).join('');
    return (
      <div className='container'>
        <header>
          <img src='images/logo.png'/>
        </header>

        <Board
          dices={ dices }
          selection={ currentSelection }
          onClick={ this.handleDiceClick }
        />

        <Tracking currentWord={ currentWord } onClick={ this.handleSubmit } />

        <ScoreTable scoreTable={ scoreTable } />

      </div>
    )
  }
};

const mapStateToProps = ({ dices, currentSelection, scoreTable }) =>
({ dices, currentSelection, scoreTable });

const mapDispatchToProps = dispatch => bindActionCreators({
  addChar, removeChar, resetChar, submitWord
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);