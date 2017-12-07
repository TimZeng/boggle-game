import React from 'react';

import { Dice } from '../components';

export const Board = ({ dices, selection, onClick }) => {
  const selected = {}, selectable = {}, len = selection.length;
  selection.forEach(el => selected[el.row*5+el.col] = true);

  const { row, col } = selection[selection.length - 1] || {};
  if (row-1 >= 0)               selectable[(row-1)*5+(col)]   = true;
  if (row-1 >= 0 && col-1 >= 0) selectable[(row-1)*5+(col-1)] = true;
  if (row-1 >= 0 && col+1 <= 4) selectable[(row-1)*5+(col+1)] = true;
  if (row+1 <= 4)               selectable[(row+1)*5+(col)]   = true;
  if (row+1 <= 4 && col+1 <= 4) selectable[(row+1)*5+(col+1)] = true;
  if (row+1 <= 4 && col-1 >= 0) selectable[(row+1)*5+(col-1)] = true;
  if (col+1 <= 4)               selectable[(row)*5+(col+1)]   = true;
  if (col-1 >= 0)               selectable[(row)*5+(col-1)]   = true;



  return (
    <section>
      <div id='board'>
        {
          dices.map((text, i) =>
            <Dice
              key={ i }
              text={ text }
              row={ Math.floor( i / 5 ) }
              col={ i % 5 }
              selected={ !!selected[i] }
              selectable={ !len || ( !selected[i] && !!selectable[i] ) || i === row*5+col }
              onClick={ onClick }
            />
          )
        }
      </div>
    </section>
  )
};

