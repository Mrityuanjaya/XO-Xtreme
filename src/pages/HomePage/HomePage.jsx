import React, { useState } from "react";
import BigBoard from "../../components/BigBoard/BigBoard.jsx";
import SideMenu from "../../components/SideMenu/SideMenu.jsx";
import { BoardContext } from "../../utils/BoardContext.js";

const HomePage = () => {
    const [squares, setSquares] = useState(Array(9).fill(Array(9).fill(null)));
    const [bigSquares, setBigSquares] = useState(Array(9).fill(null));
    const [activeBoards, setActiveBoards] = useState(Array(9).fill(true));
    const [bigSquaresColors, setBigSquaresColors] = useState(
        Array(9).fill("black")
    );
    const [xIsNext, setXIsNext] = useState(true);
    const [winner, setWinner] = useState(null);
    const [xWins, setXWins] = useState(0);
    const [oWins, setOWins] = useState(0);
    const [mode, setMode] = useState(1);
    const onXwin = () => {
        setXWins((prev) => prev + 1);
    };
    const onOwin = () => {
        setOWins((prev) => prev + 1);
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
                setBigSquaresColors: setBigSquaresColors,
                activeBoards: activeBoards,
                setActiveBoards: setActiveBoards,
                setWinner: setWinner,
                mode: mode,
                setMode: setMode
            }}
        >
            <div className="flex flex-wrap h-[90vh] items-center justify-around bg-gray-50">
                <BigBoard onXwin={onXwin} onOwin={onOwin} />
                <SideMenu xWins={xWins} oWins={oWins} />
            </div>
        </BoardContext.Provider>
    );
};

export default HomePage;
