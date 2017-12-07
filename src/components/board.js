import React from 'react';

import { Dice } from '../components';

export const Board = ({ dices }) => (
  <section>
    <div id='board'>
      {
        dices.map((text, i) => <Dice key={i} text={text} />)
      }
    </div>
  </section>
);

