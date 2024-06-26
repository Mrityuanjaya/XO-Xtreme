import { useContext } from "react";
import { BoardContext } from "./BoardContext";

export const calculateWinner = (squares) => {
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

export const getWinningRowCol = (squares) => {
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
            return lines[i];
        }
    }
    return null;
};

// function to check if the current board contains any empty square
export const hasEmptySquares = (board) => {
    return board.filter((move) => move === null).length !== 0;
};

// function to return the list of next Active boards
export const getNextActiveBoards = (
    bigSquares,
    updatedSquares,
    activeBoards,
    moveIdx,
    boardIdx
) => {
    let nextActiveBoards = [];
    if (
        !bigSquares[moveIdx] &&
        !(moveIdx === boardIdx && calculateWinner(updatedSquares[boardIdx])) &&
        hasEmptySquares(updatedSquares[moveIdx])
    ) {
        nextActiveBoards = activeBoards.map((ele, index) => {
            return index === moveIdx ? true : false;
        });
    } else {
        nextActiveBoards = updatedSquares.map(
            (ele, index) =>
                hasEmptySquares(ele) && !calculateWinner(updatedSquares[index])
        );
    }
    return nextActiveBoards;
};

// function which returns [bestMoveRow, bestMoveColumn, bestMoveScore]
const getCPUMoveUtil = (squares, bigSquares, activeBoards, move, depth) => {
    if (depth === 0) return [-1, -1, 0];
    let bestMove = [-1, -1, -1000];
    if (move == -1) bestMove[2] = 1000;

    for (let i = 0; i < 9; i++) {
        // Check if we can move in ith board
        if (activeBoards[i]) {
            for (let j = 0; j < 9; j++) {
                if (squares[i][j] === null) {
                    if (bestMove[0] === -1) {
                        bestMove[0] = i;
                        bestMove[1] = j;
                    }
                    let score = 0;
                    squares[i][j] = move == 1 ? "O" : "X";

                    // If someone wins in ith board
                    const boardWinner = calculateWinner(squares[i]);
                    if (boardWinner) {
                        bigSquares[i] = boardWinner;
                        // If someone wins the whole game
                        const bigBoardWinner = calculateWinner(bigSquares);
                        if (bigBoardWinner) {
                            score = move * 1000;
                        } else {
                            // get the next active boards
                            const nextActiveBoards = getNextActiveBoards(
                                bigSquares,
                                squares,
                                activeBoards,
                                j,
                                i
                            );
                            const nextScore = getCPUMoveUtil(
                                squares,
                                bigSquares,
                                nextActiveBoards,
                                move * -1,
                                depth - 1
                            );
                            score = move * 10 + nextScore[2];
                        }
                    } else {
                        const nextActiveBoards = getNextActiveBoards(
                            bigSquares,
                            squares,
                            activeBoards,
                            j,
                            i
                        );
                        const nextScore = getCPUMoveUtil(
                            squares,
                            bigSquares,
                            nextActiveBoards,
                            move * -1,
                            depth - 1
                        );
                        score = nextScore[2];
                    }
                    if (
                        (score > bestMove[2] && move == 1) ||
                        (score < bestMove[2] && move == -1)
                    ) {
                        bestMove[0] = i;
                        bestMove[1] = j;
                        bestMove[2] = score;
                    }
                    squares[i][j] = null;
                }
            }
        }
    }
    return bestMove;
};

export const getCPUMove = (squares, bigSquares, activeBoards, depth) => {
    return getCPUMoveUtil(squares, bigSquares, activeBoards, 1, depth);
};

export const makeMove = (boardIdx, idx, ) => {
    const contextObj = useContext(BoardContext);
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