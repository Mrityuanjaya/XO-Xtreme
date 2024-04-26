import React from "react";
import Scoreboard from "../Scoreboard/Scoreboard";

const SideMenu = (props) => {
  return (
    <div className="border-4 m-10 border-gray-400 rounded-lg p-3">
      <div className="flex">
        <button
          type="button"
          class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br shadow-lg transition-all duration-200 ease-in-out w-40 h-12 active:translate-y-0.5 font-medium rounded-lg text-xl px-4 py-2 text-center me-2 mb-2"
        >
          Play Again!
        </button>
      </div>
      <Scoreboard oWins={props.oWins} xWins={props.xWins} />
    </div>
  );
};

export default SideMenu;
