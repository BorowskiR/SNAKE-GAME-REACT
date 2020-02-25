import React from 'react';
import { ROWS, COLS, CELL, BODY, FOOD } from './Const';

const Cells = ({ board, handleKey }) => {
  const cells = [];

  for (let row = 0; row < ROWS; row++) {
    for (let col = 0; col < COLS; col++) {
      // const key = COLS * row * col;
      const value = board[COLS * row + col];
      const className =
        value === BODY ? 'body-cell' : value === FOOD ? 'food-cell' : 'cell';
      cells.push(<div className={className} />);
    }
  }

  return (
    <div
      style={{ width: COLS * CELL, height: ROWS * CELL }}
      className="board"
      onKeyDown={handleKey}
      tabIndex={0}
    >
      {cells}
    </div>
  );
};

export default Cells;
