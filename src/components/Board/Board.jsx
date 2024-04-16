import { useState } from "react";
import Square from "../Square/Square";
import { calculateWinner } from "../../utils";

const Board = (props) => {
  const [squares, setSquares] = useState(Array(9).fill(null));
 
  const onSquareClick = (idx) => {
    const updatedSquares = squares.slice();
    if (updatedSquares[idx] === null && !calculateWinner(squares)) {
      updatedSquares[idx] = props.xIsNext ? "X" : "O";
      props.onMove();
      setSquares(updatedSquares);
    }
  };

  const winner = calculateWinner(squares);
  if(winner) {
    props.onWin();
  }

  return (
    <div className="flex flex-wrap w-44 h-44">
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
