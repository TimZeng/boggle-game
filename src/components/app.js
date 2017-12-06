import React, { Component } from 'react';

const data = ['A','A','A','A','A','A','A','A','A','A','A','A','A','A','A','A','A','A','A','A','A','A','A','A','A'];

class App extends Component {
  render() {
    return (
      <div className='container'>
        <header>
          <img src='images/logo.png'/>
        </header>

        <section>
          <div id='board'>
            {
              data.map(el => <div className='dice'>{el}</div>)
            }
          </div>
        </section>

        <section>
          <div id='tracking'>
            <span><strong>Current Word</strong>: MAW</span>
            <button>Submit Word</button>
          </div>
        </section>

        <section>
          <div id='score-table'>
            <div id='scores'>
              <div><strong>Word</strong></div>
              <div><strong>Score</strong></div>
              <div>congruent</div>
              <div>11</div>
              <div>urgent</div>
              <div>3</div>
              <div className='selected'><strong>Total:</strong></div>
              <div className='selected'><strong>14</strong></div>
            </div>
          </div>
        </section>
      </div>
    )
  }
};

export default App;