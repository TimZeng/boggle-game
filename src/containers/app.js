import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Board, Tracking, ScoreTable } from '../components';

class App extends Component {
  render() {
    const { dices } = this.props;
    return (
      <div className='container'>
        <header>
          <img src='images/logo.png'/>
        </header>

        <Board dices={ dices } />
        <Tracking />
        <ScoreTable />

      </div>
    )
  }
};

const mapStateToProps = ({ dices }) => ({ dices });

export default connect(mapStateToProps)(App);