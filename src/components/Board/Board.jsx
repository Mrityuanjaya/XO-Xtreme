import { useContext, useEffect, useState } from "react";
import Square from "../Square/Square";
import {
    calculateWinner,
    getCPUMove,
    getNextActiveBoards,
    hasEmptySquares,
} from "../../utils/common";
import { BoardContext } from "../../utils/BoardContext";

const Board = (props) => {
    const contextObj = useContext(BoardContext);
    const { boardIdx, onWin } = props;

    const onSquareClick = (idx) => {
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

            // Update active boards=
            const nextActiveBoards = getNextActiveBoards(
                contextObj.bigSquares,
                updatedSquares,
                contextObj.activeBoards,
                idx,
                boardIdx
            );

            contextObj.setActiveBoards(nextActiveBoards);
        }
    };
    useEffect(() => {
        const winner = calculateWinner(contextObj.squares[boardIdx]);
        if (winner) {
            onWin();
        }
    }, contextObj.squares[boardIdx]);

    return (
        <div className="flex hover:scale-105 flex-wrap w-full h-44">
            {contextObj.squares.map((ele, idx) => (
                <Square
                    key={idx}
                    value={contextObj.squares[boardIdx][idx]}
                    onSquareClick={() => onSquareClick(idx)}
                    isActive={contextObj.activeBoards[boardIdx]}
                />
            ))}
        </div>
    );
};

export default Board;
