import React from 'react';

const Cell = ({ row, col, value }) => {
  return <div className="cell">{value}</div>;
};

export default Cell;
