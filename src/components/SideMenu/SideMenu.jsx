import React, { useContext } from "react";
import Scoreboard from "../Scoreboard/Scoreboard";
import { BoardContext } from "../../utils/BoardContext";
import { calculateWinner } from "../../utils/common";

const SideMenu = (props) => {
    const contextObj = useContext(BoardContext);
    const resetBigBoard = () => {
        contextObj.setSquares(Array(9).fill(Array(9).fill(null)));
        contextObj.setBigSquares(Array(9).fill(null));
        contextObj.setBigSquaresColors(Array(9).fill("black"));
        contextObj.setActiveBoards(Array(9).fill(true));
        contextObj.setWinner(null);
    };
    return (
        <div className="border-4 my-2 mx-5 md:m-10 border-gray-400 rounded-lg p-3">
            <div className="flex">
                <button
                    type="button"
                    className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br shadow-lg transition-all duration-200 ease-in-out w-40 h-12 active:translate-y-0.5 font-medium rounded-lg text-xl px-4 py-2 text-center me-2 mb-2"
                    onClick={resetBigBoard}
                >
                    Play Again!
                </button>
            </div>
            <Scoreboard oWins={props.oWins} xWins={props.xWins} />
        </div>
    );
};

export default SideMenu;
