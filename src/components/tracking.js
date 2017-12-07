import React from 'react';

export const Tracking = ({ currentWord, onClick }) => (
  <section>
    <div id='tracking'>
      <span><strong>Current Word</strong>: { currentWord.toUpperCase() }</span>
      <button onClick={onClick.bind(null, currentWord)}>Submit Word</button>
    </div>
  </section>
);

