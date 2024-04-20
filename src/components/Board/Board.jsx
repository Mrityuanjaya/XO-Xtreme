import { useContext, useEffect, useState } from "react";
import Square from "../Square/Square";
import { calculateWinner } from "../../utils/common";
import { BoardContext } from "../../utils/BoardContext";

const Board = (props) => {
  const contextObj = useContext(BoardContext);
  const { boardIdx, onWin } = props;
  console.log(contextObj);
  const onSquareClick = (idx) => {
    const updatedBoard = contextObj.squares[boardIdx].slice();
    if (
      updatedBoard[idx] === null &&
      !calculateWinner(updatedBoard) &&
      !calculateWinner(contextObj.bigSquares)
    ) {
      updatedBoard[idx] = contextObj.xIsNext ? "X" : "O";
      contextObj.setXIsNext(!contextObj.xIsNext);
      const updatedSquares = contextObj.squares.slice();
      updatedSquares[boardIdx] = updatedBoard;
      contextObj.setSquares(updatedSquares);
    }
  };
  useEffect(() => {
    const winner = calculateWinner(contextObj.squares[boardIdx]);
    if (winner) {
      onWin();
    }
  }, contextObj.squares[boardIdx]);

  return (
    <div className="flex flex-wrap w-44 h-44">
      {contextObj.squares.map((ele, idx) => (
        <Square
          key={idx}
          value={contextObj.squares[boardIdx][idx]}
          onSquareClick={() => onSquareClick(idx)}
        />
      ))}
    </div>
  );
};

export default Board;
