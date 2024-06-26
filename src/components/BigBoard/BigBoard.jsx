import { useContext, useEffect } from "react";
import BigSquare from "../BigSquare/BigSquare";
import {
    calculateWinner,
    getCPUMove,
    getNextActiveBoards,
    getWinningRowCol,
} from "../../utils/common";
import { BoardContext } from "../../utils/BoardContext.js";
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'

const BigBoard = (props) => {
    const contextObj = useContext(BoardContext);
    const { width, height } = useWindowSize();
    useEffect(() => {
        if (calculateWinner(contextObj.bigSquares) !== null) {
            contextObj.setWinner(calculateWinner(contextObj.bigSquares));
            if (contextObj.xIsNext) {
                props.onOwin();
            } else {
                props.onXwin();
            }
            const updatedBigSquaresColors = contextObj.bigSquares.slice();
            const winningBoards = getWinningRowCol(contextObj.bigSquares);
            updatedBigSquaresColors[winningBoards[0]] = "red";
            updatedBigSquaresColors[winningBoards[1]] = "red";
            updatedBigSquaresColors[winningBoards[2]] = "red";
            contextObj.setBigSquaresColors(updatedBigSquaresColors);
            contextObj.setActiveBoards(
                contextObj.activeBoards.map(() => false)
            );
        }
    }, [contextObj.bigSquares]);
    useEffect(() => {
        if (!contextObj.xIsNext && contextObj.mode === 1) {
            const CPUMove = getCPUMove(
                JSON.parse(JSON.stringify(contextObj.squares)),
                contextObj.bigSquares.slice(),
                contextObj.activeBoards.slice(),
                4
            );
            const idx = CPUMove[1];
            const boardIdx = CPUMove[0];
            const updatedBoard = contextObj.squares[boardIdx].slice();
            if (
                updatedBoard[idx] === null &&
                !calculateWinner(updatedBoard) &&
                !calculateWinner(contextObj.bigSquares) &&
                contextObj.activeBoards[boardIdx]
            ) {
                updatedBoard[idx] = contextObj.xIsNext ? "X" : "O";
                contextObj.setXIsNext(!contextObj.xIsNext);
                const updatedSquares = JSON.parse(
                    JSON.stringify(contextObj.squares)
                );
                updatedSquares[boardIdx] = updatedBoard;
                contextObj.setSquares(updatedSquares);

                // Update active boards
                const nextActiveBoards = getNextActiveBoards(
                    contextObj.bigSquares,
                    updatedSquares,
                    contextObj.activeBoards,
                    idx,
                    boardIdx
                );
                contextObj.setActiveBoards(nextActiveBoards);
            }
        }
    });
    const onWin = (idx) => {
        if (
            contextObj.bigSquares[idx] === null &&
            calculateWinner(contextObj.bigSquares) === null
        ) {
            const updatedBigSquares = contextObj.bigSquares.slice();
            updatedBigSquares[idx] = contextObj.xIsNext ? "O" : "X";
            contextObj.setBigSquares(updatedBigSquares);
        }
    };
    return (
        <div>
            {calculateWinner(contextObj.bigSquares) && (
                <Confetti width={width} height={height} recycle={false} numberOfPieces={2000} tweenDuration={8000}/>
            )}
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
    );
};

export default BigBoard;
