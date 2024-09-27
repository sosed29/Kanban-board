import React from 'react';
import Column from './Column';

const Board = ({ columns, setColumns }) => {
  return (
    <div className="board">
      {columns.map((column, index) => (
        <Column
          key={index}
          column={column}
          columns={columns}
          setColumns={setColumns} 
        />
      ))}
    </div>
  );
};

export default Board;
