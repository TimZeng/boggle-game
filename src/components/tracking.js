import React from 'react';

export const Tracking = ({ currentWord }) => (
  <section>
    <div id='tracking'>
      <span><strong>Current Word</strong>: { currentWord }</span>
      <button>Submit Word</button>
    </div>
  </section>
);

