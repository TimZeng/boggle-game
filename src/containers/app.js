import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addChar, removeChar } from '../actions';
import { Board, Tracking, ScoreTable } from '../components';

class App extends Component {

  handleDiceClick = (text, row, col, selected) => {
    if ( selected ) {
      this.props.removeChar();
    } else {
      this.props.addChar(text, row, col);
    }
  }

  render() {
    const { dices, currentSelection } = this.props;
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

        <Tracking currentWord={ currentWord } />
        <ScoreTable />

      </div>
    )
  }
};

const mapStateToProps = ({ dices, currentSelection }) =>
({ dices, currentSelection });

const mapDispatchToProps = dispatch => bindActionCreators({ addChar, removeChar }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);