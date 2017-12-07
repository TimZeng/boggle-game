import React from 'react';

export const ScoreTable = ({ scoreTable }) => {
  const total = scoreTable.reduce((a,c) => a + c.score, 0);

  return (
    <section>
      <div id='score-table'>
        <div id='scores'>
          <p className='score'>
            <span><strong>Word</strong></span>
            <span><strong>Score</strong></span>
          </p>
            {
              scoreTable.map(el =>
                <p key={el.word} className='score'>
                  <span>{el.word.toLowerCase()}</span>
                  <span>{el.score}</span>
                </p>
              )
            }
          <p className='score'>
            <span className='selected'><strong>Total:</strong></span>
            <span className='selected'><strong>{total}</strong></span>
          </p>
        </div>
      </div>
    </section>
  )
};
