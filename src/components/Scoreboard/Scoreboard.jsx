import React from "react";

const Scoreboard = (props) => {
  return (
    <div className="w-96">
      <table className="w-full border border-blue-500">
        <thead>
          <tr className="bg-blue-100">
            <th className="border-2 border-gray-300 px-4 py-2">Player 1 (X)</th>
            <th className="border-2 border-gray-300 px-4 py-2">Player 2 (O)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border-2 border-gray-300 px-4 py-2 text-center">
              {props.xWins}
            </td>
            <td className="border-2 border-gray-300 px-4 py-2 text-center">
              {props.oWins}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Scoreboard;
