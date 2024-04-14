import { useState } from "react";
import Square from "../Square/Square";

const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const onSquareClick = (idx) => {
    const updatedSquares = squares.slice();
    if (updatedSquares[idx] === null && !calculateWinner(squares)) {
      updatedSquares[idx] = xIsNext ? "X" : "O";
      setXIsNext(!xIsNext);
      setSquares(updatedSquares);
    }
  };

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  };

  const winner = calculateWinner(squares);

  return (
    <div className="flex flex-wrap w-64 h-64">
      {squares.map((ele, idx) => (
        <Square
          key={idx}
          value={squares[idx]}
          onSquareClick={() => onSquareClick(idx)}
        />
      ))}
    </div>
  );
};

export default Board;
