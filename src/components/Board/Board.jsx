import { useContext, useEffect, useState } from "react";
import Square from "../Square/Square";
import { calculateWinner, hasEmptySquares } from "../../utils/common";
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
            const updatedSquares = contextObj.squares.slice();
            updatedSquares[boardIdx] = updatedBoard;
            contextObj.setSquares(updatedSquares);
            // Update active boards
            console.log(updatedSquares);
            if (
                !contextObj.bigSquares[idx] &&
                !(
                    idx === boardIdx &&
                    calculateWinner(updatedSquares[boardIdx])
                ) &&
                hasEmptySquares(updatedSquares[idx])
            ) {
                contextObj.setActiveBoards(
                    contextObj.activeBoards.map((ele, index) => {
                        return index === idx ? true : false;
                    })
                );
            } else {
                contextObj.setActiveBoards(
                    updatedSquares.map((ele, index) =>
                        hasEmptySquares(updatedSquares[index])
                    )
                );
            }
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
