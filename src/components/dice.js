import React from 'react';

export const Dice = ({ text, row, col, selected, selectable, onClick }) => (
  <div
    className={`dice ${selected?'selected':''} ${selectable?'':'disabled'}`}
    onClick={ selectable?onClick.bind(null, text, row, col, selected):null }
  >
    { text }
  </div>
);

