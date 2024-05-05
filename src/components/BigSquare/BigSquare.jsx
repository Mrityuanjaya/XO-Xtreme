import Board from "../Board/Board";
import { BoardContext } from "../../utils/BoardContext";
import { useContext } from "react";

const BigSquare = (props) => {
    const { boardIdx, onWin } = props;
    const contextObj = useContext(BoardContext);
    return (
        <div className="border-4 border-gray-600 p-4 w-52 h-52 flex items-center justify-center">
            {contextObj.bigSquares[boardIdx] ? (
                <h2
                    className={`text-9xl ${
                        contextObj.bigSquaresColors[boardIdx] === "red"
                            ? "text-red-400"
                            : "black"
                    }`}
                >
                    {contextObj.bigSquares[boardIdx]}
                </h2>
            ) : (
                <Board onWin={onWin} boardIdx={boardIdx} />
            )}
        </div>
    );
};

export default BigSquare;
