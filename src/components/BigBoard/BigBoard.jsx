import { useState } from "react";
import BigSquare from "../BigSquare/BigSquare";
import { calculateWinner } from "../../utils";

const BigBoard = () => {
  const [BigSquares, setBigSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const onMove = () => {
    setXIsNext(!xIsNext);
  }
  const onWin = (idx) => {
    const updatedBigSquares = BigSquares.slice();
    if (updatedBigSquares[idx] === null && !calculateWinner(BigSquares)) {
      updatedBigSquares[idx] = xIsNext ? "O" : "X";
      setBigSquares(updatedBigSquares);
    }
  }
  const winner = calculateWinner(BigSquares);
  console.log(winner);
  return (
    <div className="flex">
      <div>
        <BigSquare value={BigSquares[0]} onMove={() => onMove()} onWin={()=>onWin(0)} xIsNext={xIsNext} />
        <BigSquare value={BigSquares[1]} onMove={() => onMove()} onWin={()=>onWin(1)} xIsNext={xIsNext}/>
        <BigSquare value={BigSquares[2]} onMove={() => onMove()} onWin={()=>onWin(2)} xIsNext={xIsNext}/>
      </div>
      <div>
        <BigSquare value={BigSquares[3]} onMove={() => onMove()} onWin={()=>onWin(3)} xIsNext={xIsNext}/>
        <BigSquare value={BigSquares[4]} onMove={() => onMove()} onWin={()=>onWin(4)} xIsNext={xIsNext}/>
        <BigSquare value={BigSquares[5]} onMove={() => onMove()} onWin={()=>onWin(5)} xIsNext={xIsNext}/>
      </div>
      <div>
        <BigSquare value={BigSquares[6]} onMove={() => onMove()} onWin={()=>onWin(6)} xIsNext={xIsNext}/>
        <BigSquare value={BigSquares[7]} onMove={() => onMove()} onWin={()=>onWin(7)} xIsNext={xIsNext}/>
        <BigSquare value={BigSquares[8]} onMove={() => onMove()} onWin={()=>onWin(8)} xIsNext={xIsNext}/>
      </div>
    </div>
  );
};

export default BigBoard;
