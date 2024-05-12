import React, { useContext } from "react";
import Scoreboard from "../Scoreboard/Scoreboard.jsx";
import { BoardContext } from "../../utils/BoardContext.js";

const SideMenu = (props) => {
    const contextObj = useContext(BoardContext);
    const changeMode = () => {
        resetBigBoard();
        contextObj.setXIsNext(true);
        contextObj.setMode((prev) => (prev % 2) + 1);
    };
    const resetBigBoard = () => {
        contextObj.setSquares(Array(9).fill(Array(9).fill(null)));
        contextObj.setBigSquares(Array(9).fill(null));
        contextObj.setBigSquaresColors(Array(9).fill("black"));
        contextObj.setActiveBoards(Array(9).fill(true));
        contextObj.setWinner(null);
    };
    return (
        <div className="border-4 my-2 mx-5 md:m-10 border-gray-400 rounded-lg p-3">
            <div className="flex justify-around w-72 md:w-96">
                <button
                    type="button"
                    className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br shadow-lg transition-all duration-200 ease-in-out w-44 active:translate-y-0.5 font-medium rounded-lg text-xl px-3 py-2 text-center me-2 mb-2"
                    onClick={resetBigBoard}
                >
                    Play Again! 🔁
                </button>
                <button
                    type="button"
                    className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br shadow-lg transition-all duration-200 ease-in-out w-44 active:translate-y-0.5 font-medium rounded-lg text-xl px-2 py-1 text-center me-2 mb-2"
                    onClick={changeMode}
                >{contextObj.mode === 1 ? "Pass and Play 👥" : "v/s Computer 💻"}</button>
            </div>
            <Scoreboard oWins={props.oWins} xWins={props.xWins} />
        </div>
    );
};

export default SideMenu;
