import React from 'react';
import Cell from './Cell.js';

const Grid = ({ rows, cols, gridData }) => {
  return (
    <div className="grid">
      {gridData.map((row, rowIndex) => (
        <div key={rowIndex} className="row">
          {row.map((cellValue, colIndex) => (
            <Cell
              key={colIndex}
              row={rowIndex}
              col={colIndex}
              value={cellValue}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Grid;
