import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { generateBoard, addChar, removeChar, resetChar, submitWord } from '../actions';
import { Board, Tracking, ScoreTable } from '../components';

class App extends Component {
  componentWillMount() {
    this.props.generateBoard();
  }

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
    const { board, currentSelection, scoreTable } = this.props;
    const currentWord = currentSelection.map(el => el.char).join('');
    return (
      <div className='container'>
        <header>
          <img src='images/logo.png'/>
        </header>

        <Board
          board={ board }
          selection={ currentSelection }
          onClick={ this.handleDiceClick }
        />

        <Tracking currentWord={ currentWord } onClick={ this.handleSubmit } />

        <ScoreTable scoreTable={ scoreTable } />

      </div>
    )
  }
};

const mapStateToProps = ({ board, currentSelection, scoreTable }) =>
({ board, currentSelection, scoreTable });

const mapDispatchToProps = dispatch => bindActionCreators({
  generateBoard, addChar, removeChar, resetChar, submitWord
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);

