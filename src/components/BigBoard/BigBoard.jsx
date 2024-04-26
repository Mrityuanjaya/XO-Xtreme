import { useState, useEffect } from "react";
import BigSquare from "../BigSquare/BigSquare";
import { calculateWinner, getWinningRowCol } from "../../utils/common";
import { BoardContext } from "../../utils/BoardContext";

const BigBoard = (props) => {
  const [squares, setSquares] = useState(Array(9).fill(Array(9).fill(null)));
  const [bigSquares, setBigSquares] = useState(Array(9).fill(null));
  const [activeBoards, setActiveBoards] = useState(Array(9).fill(true));
  const [bigSquaresColors, setBigSquaresColors] = useState(
    Array(9).fill("black")
  );
  const [xIsNext, setXIsNext] = useState(true);
  const [winner, setWinner] = useState(null);
  useEffect(() => {
    if (calculateWinner(bigSquares) !== null) {
      setWinner(calculateWinner(bigSquares));
      if(xIsNext) {
        console.log(props);
        props.onOwin();
    }
    else {
          console.log(props);
        props.onXwin();
      }
      const updatedBigSquaresColors = bigSquares.slice();
      const winningBoards = getWinningRowCol(bigSquares);
      updatedBigSquaresColors[winningBoards[0]] = "red";
      updatedBigSquaresColors[winningBoards[1]] = "red";
      updatedBigSquaresColors[winningBoards[2]] = "red";
      setBigSquaresColors(updatedBigSquaresColors);
      setActiveBoards(activeBoards.map(() => false));
    }
  }, [bigSquares]);
  const onWin = (idx) => {
    if (bigSquares[idx] === null && calculateWinner(bigSquares) === null) {
      const updatedBigSquares = bigSquares.slice();
      updatedBigSquares[idx] = xIsNext ? "O" : "X";
      setBigSquares(updatedBigSquares);
    }
  };
  return (
    <BoardContext.Provider
      value={{
        squares: squares,
        setSquares: setSquares,
        bigSquares: bigSquares,
        setBigSquares: setBigSquares,
        xIsNext: xIsNext,
        setXIsNext: setXIsNext,
        bigSquaresColors: bigSquaresColors,
        activeBoards: activeBoards, 
        setActiveBoards: setActiveBoards
      }}
    >
      <div>
        <div>
          <div className="flex">
            <BigSquare boardIdx={0} onWin={() => onWin(0)} />
            <BigSquare boardIdx={1} onWin={() => onWin(1)} />
            <BigSquare boardIdx={2} onWin={() => onWin(2)} />
          </div>
          <div className="flex">
            <BigSquare boardIdx={3} onWin={() => onWin(3)} />
            <BigSquare boardIdx={4} onWin={() => onWin(4)} />
            <BigSquare boardIdx={5} onWin={() => onWin(5)} />
          </div>
          <div className="flex">
            <BigSquare boardIdx={6} onWin={() => onWin(6)} />
            <BigSquare boardIdx={7} onWin={() => onWin(7)} />
            <BigSquare boardIdx={8} onWin={() => onWin(8)} />
          </div>
        </div>
      </div>
    </BoardContext.Provider>
  );
};

export default BigBoard;
